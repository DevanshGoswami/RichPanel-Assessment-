import React, { useContext, useState } from "react";
import axios from 'axios';
import { withRouter, Redirect } from "react-router";
import { AuthContext } from "../Controllers/authProvider";
import FacebookLogin from 'react-facebook-login';

const Login = ({ history }) => {

  const {setCurrentUser, currentUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const responseFacebook = (response) => {
    setLoading(true);
    const {accessToken, userID, name, email, picture } = response;
    axios.get(`https://graph.facebook.com/${userID}/accounts?access_token=${accessToken}`)
    .then(pages_response => {

        const pages = pages_response.data.data;
        const userObj = {
          accessToken, userID, name, email, picture, pages
        }
        axios.post('https://richpanelhelpdeskfb.herokuapp.com/api/auth',userObj)
        .then(response => {
          setCurrentUser(response.data);
          setLoading(false);
          history.push('/');
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
  }


  if (currentUser) {
    return <Redirect to="/" />;
  }

  const componentClicked = () => {
    console.log("clicked");
  }


  return (
    <div className="wrapper ">
       <div className="text-center my-5">
        <img src="https://richpanel.com/wp-content/uploads/sites/11/2020/06/Richpanel_logo_colored.svg" alt="logo" height="100px" width="200px"></img>
        
        </div>
        <div className="row justify-content-center">
          <div className=" col-sm-6">
          <div className="align-items-center card p-3 mx-5">
            <h1 className="display-4 mb-0 mt-3" style={{fontSize:"35px"}}>
              Facebook Helpdesk
            </h1>
            <hr className="my-2">
            
            </hr>
            <p className="lead" style={{fontSize:"16px"}}>
              Submitted by Devansh Goswami
            </p>
            {loading ?
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>:
            <FacebookLogin
            appId="349801863218972"
            autoLoad={true}
            fields="name,email,picture"
            scope="pages_manage_metadata,pages_manage_engagement,pages_messaging,pages_read_engagement,pages_read_user_content,pages_show_list,pages_manage_cta"
            onClick={componentClicked}
            callback={responseFacebook}
             /> 
            }
            
        </div>
          </div>
        </div>
        
    </div>
  );
};

export default withRouter(Login);