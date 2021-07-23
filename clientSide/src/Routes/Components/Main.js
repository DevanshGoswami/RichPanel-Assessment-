import { useContext } from 'react';
import { AuthContext } from '../Controllers/authProvider';
import {withRouter} from 'react-router-dom';
import '../../App.css';

const Main = () => {
    const {currentUser} = useContext(AuthContext);
    return(
        <>
        <div className="row no-gutters">
            <div className="col-3 no-padding" style={{height:"100%"}}>
             <div className="navbar navbar-light bg-white border">
                 <h5>Conversations</h5>
                 <i className="fa fa-refresh fa-lg ml-auto"></i>
             </div>
             <div className="card" style={{background:"#D3D3D3"}}>
                <div className="card-heading p-3">
                    <input type="checkbox" className="mr-2"/><strong className="mr-5">Amit RG</strong><small className="ml-5">10 m</small><br/>
                    <small>Facebook Message</small>
                </div>
                <div className="card-body p-2" style={{fontSize:"11px"}}>
                    <p className="mb-0" style={{fontWeight:"600"}}>Awesome Product</p>
                    <p className="muted">Hey there! I probably did one of the bes..</p>
                </div>
             </div>
             <div className="card">
                <div className="card-heading p-3">
                    <input type="checkbox" className="mr-2"/><strong className="mr-5">Hitesh Saxena</strong><small className="ml-4">10 m</small><br/>
                    <small>Facebook Post</small>
                </div>
                <div className="card-body p-2" style={{fontSize:"11px"}}>
                    <p className="mb-0" style={{fontWeight:"600"}}>Available in store?</p>
                    <p className="muted">Hi! do you have nay T-shirt available in store..</p>
                </div>
             </div>
            </div>
            <div className="col-6 no-padding" style={{height:"100%"}}>
            <div className="navbar navbar-light bg-white border">
                 <h5>Amit RG</h5>
             </div>
             <div className="px-2 py-3" style={{background:"#F5F5F5"}}>
               <p className="mt-3"><img src={currentUser.picture} className="rounded-circle" height="30px" width="30px" alt="profile"/> <span className="p-3 m-2 bg-white">Is it in stock right now?</span></p>
               <small className="ml-4" style={{fontWeight:"600"}}>Amit RG - Mar 05, 2:22 AM</small>
               <div className="p-3" style={{marginTop:"375px"}}>
                <input type="text" className="form-control" placeholder="Message Hiten saxena" style={{borderColor:"#255190"}}/>
               </div>
             </div>
            </div>
            <div className="col-3 no-padding" style={{height:"100%"}}>
                <div className="card text-center px-4 pt-4  align-items-center" style={{borderBottom:"none"}}>
                <img src={currentUser.picture} className="rounded-circle" height="50px" width="50px" alt="profile"/>
                <h5 className="mt-3 mb-0">Amit RG</h5>
                <small>Offline</small>
                <div className="d-flex">
                    <button className="btn btn-outline-secondary mx-2 my-2 py-1 px-2"><i className="fa fa-phone"></i> Phone</button>
                    <button className="btn btn-outline-secondary mx-2 my-2 py-1 px-2"><i className="fa fa-user-circle-o"></i> Profile</button>
                </div>
                </div>
                <div style={{background:"#D3D3D3"}} className='p-2'>
                    <div className="card m-3 p-3" style={{borderRadius:"10px"}}>
                        <p>Customer Details</p>
                        <div className="row">
                            <div className="col text-left" style={{fontSize:"13px",fontWeight:"200"}}>
                              <p>Email</p>
                              <p>First Name</p>
                              <p>First Name</p>
                              
                            </div>
                            <div className="col text-right" style={{fontSize:"10px"}}>
                                <p>amit@richpanel.com</p>
                                <p>First Name</p>
                                <p>Last Name</p>
                            </div>
                            <strong className="p-2 text-primary" style={{fontSize:"14px"}}>View more details</strong>
                        </div>
                        
                    </div>
                    <p style={{marginTop:"175px"}}></p>
                </div>
            </div>
        </div>
        </>
    );
}


export default withRouter(Main);