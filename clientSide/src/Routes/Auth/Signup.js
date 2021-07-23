import React, { useCallback, useContext } from "react";
import { withRouter } from "react-router";
import {signUp} from '../Controllers/authController';
import {AuthContext} from '../Controllers/authProvider';




const SignUp = ({ history }) => {
  const { setCurrentUser } = useContext(AuthContext);
  const handleSignUp = useCallback(async event => {
  
    event.preventDefault();
    const { email, password, username, phone } = event.target.elements;
    try {
     const response =  await signUp(username.value, password.value, email.value, phone.value);

     if(response.objectId){
       setCurrentUser(response);
       history.push("/");
     }
     else{
       alert("Error");
     }
    } catch (error) {
      alert(error);
    }
  }, [history, setCurrentUser]);

  return (
    <div>
      <div className="text-center my-5">
        <h1 className="display-4" style={{fontSize:"35px"}}>Sign Up</h1>
        </div>
      <form onSubmit={handleSignUp}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
      </div>

      <div className="form-group">
        <label htmlFor="exampleInputEmail2">Username</label>
        <input type="text" name="username" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter username"/>
      </div>

      <div className="form-group">
        <label htmlFor="exampleInputEmail3">Phone Number</label>
        <input type="tel" name="phone" className="form-control" id="exampleInputEmail3" aria-describedby="emailHelp" placeholder="Enter phone number"/>
      </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>

        <div className="text-center my-3">
        <button className="btn btn-outline-success" type="submit">
          SignUp 
        </button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(SignUp);