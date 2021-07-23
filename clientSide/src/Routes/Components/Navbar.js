import {useContext} from 'react';
import {AuthContext} from '../Controllers/authProvider';
import {withRouter} from 'react-router-dom';
import logo from '../../White.png';

const Navbar = ({ history }) => {
    const { currentUser, setCurrentUser } = useContext(AuthContext);

    const Logout = (event) => {
          event.preventDefault();
          setCurrentUser('');
          history.push('/');
    }

    return(
        <>
        <ul className="text-center" style={{listStyle:"none",padding:"0"}}>
            <li className="my-4 py-2" ><img src={logo} className="rounded-circle" height="30px" width="30px" alt="logo"/></li>
            <li className="my-4 py-2" style={{background:"white",backgroundSize:"100%",color:"#255190"}}><i className="fa fa-inbox fa-lg"></i></li>
            <li className="my-4 py-2" ><i className="fa fa-line-chart fa-lg"></i></li>
            <li className="my-4 py-2" ><i className="fa fa-user fa-lg"></i></li>
            <li className="my-4 py-2" ><i onClick={Logout} className="fa fa-sign-out fa-lg"></i></li>
            {currentUser && <li  className="my-4 py-2" ><img src={currentUser.picture} style={{marginTop:"200px"}} className="rounded-circle" height="30px" width="30px" alt="profile"/></li>}
        </ul>
        </>
    );
}

export default withRouter(Navbar);