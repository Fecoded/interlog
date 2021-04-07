import {useContext, useState, useEffect} from 'react'
import {States, Roles} from '../state'
import AuthContext from '../../context/auth/AuthContext'


const AddUserModal = ({ user }) => {
 const authContext = useContext(AuthContext);
 
 const { register, updateUser } = authContext;

 const [fullname, setFullname] = useState("");
 const [state, setCity] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [role, setRole] = useState("");

 const hideModal = () => {};

 const onSubmit = (e) => {
     e.preventDefault();
     if(user.id){
        updateUser({
            id: user.id,
            fullname,
            state,
            password,
            email,
            role,
            setFullname,
            setRole,
            setCity,
            setEmail,
            hideModal
        })
     }else{
         register({
              fullname,
              state,
              password,
              email,
              role,
              setFullname,
              setRole,
              setCity,
              setEmail,
              hideModal
          });
     }
 }

 useEffect(() => {
    if(user){
        setFullname(user.fullname);
        setPassword(user.password);
        setCity(user.state);
        setEmail(user.email);
        setRole(user.role)
    }
 },[user])

    return(
        <div className="modal fade" id="addUserModal" tabIndex="-1" role="dialog" aria-labelledby="exportCustomersModalTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
         
            <div className="modal-header">
              <h4 id="exportCustomersModalTitle" className="modal-title">{user.id ? "Edit User" : "Create User"}</h4>
  
              <button type="button" className="btn btn-icon btn-sm btn-ghost-secondary" data-dismiss="modal" aria-label="Close">
                <i className="tio-clear tio-lg"></i>
              </button>
            </div>
         
            <form onSubmit={onSubmit}>
              <div className="modal-body">

                    <div className="row">
                        <div className="form-group col">
                            <label htmlFor="nameModalEgLabel" className="input-label">Name</label>
                                <div className="js-form-message">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="fullname" 
                                        placeholder="Enter fullname" 
                                        aria-label="3000" 
                                        required 
                                        value={fullname}
                                        onChange={(e) => setFullname(e.target.value)}
                                        />
                                </div>
                        </div>  
                        <div className="form-group col">
                            <label htmlFor="nameModalEgLabel" className="input-label">Email Address</label>
                                <div className="js-form-message">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        name="email" 
                                        placeholder="Enter email address" 
                                        aria-label="3000" 
                                        required 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        />
                                </div>
                        </div> 

                    </div>

                    <div className="form-group">
                            <label htmlFor="nameModalEgLabel" className="input-label">Password</label>
                                <div className="js-form-message">
                                    <input 
                                        type="password" 
                                        className="form-control" 
                                        name="password" 
                                        placeholder="Enter email address" 
                                        aria-label="3000" 
                                        required 
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        />
                                </div>
                        </div> 

                     <div className="form-group">
                        <label className="input-label">State</label>
                        <select 
                                value={state}
                                onChange={(e) => setCity(e.target.value)}
                                className="js-select2-custom custom-select" 
                                name="state"
                                required
                        >
                            <option label="Select State"></option>
                            {States.map((x, y) => (
                                <option key={y} value={x}>{x}</option>
                            ))}
                            
                        </select>
                        
                    </div>

                     <div className="form-group">
                        <label className="input-label">Role</label>
                        <select 
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                className="js-select2-custom custom-select" 
                                name="State"
                                required
                        >
                            <option label="Select Role"></option>
                            {Roles.map((x, y) => (
                                <option key={y} value={x}>{x}</option>
                            ))}
                            
                        </select>  
                    </div>

                </div>
    
                <div className="modal-footer">
                    <button type="button" className="btn btn-white mr-2" data-dismiss="modal" aria-label="Close">Cancel</button>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>

            </form>
            
           
      
         
          </div>
        </div>
      </div>
    )
}

export default AddUserModal