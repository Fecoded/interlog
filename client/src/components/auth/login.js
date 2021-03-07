import { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/AuthContext'

const Login = () => {
  const authContext = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isAuthenticated } = authContext;

  const onSubmit = e => {
    e.preventDefault();
    login({
      email,
      password
    });
  }

  if(isAuthenticated){
    return <Redirect to="/" />;
  }

    return(      
        <div className="container py-5 py-sm-7">
                    
          <div className="row justify-content-center">
            <div className="col-md-7 col-lg-5">
          
              <div className="card card-lg mb-5">
                <div className="card-body">
            
                  <form className="js-validate" onSubmit={onSubmit}>
                    <div className="text-center">
                      <div className="mb-5">
                        <h1 className="display-4">Sign in</h1>
                        <p>Don't have an account yet? <a href="authentication-signup-basic.html">Sign up here</a></p>
                      </div>

                
                    </div>

                    <div className="js-form-message form-group">
                      <label className="input-label" htmlFor="signinSrEmail">Your email</label>

                      <input 
                        type="email" 
                        className="form-control form-control-lg" 
                        name="email" 
                        id="signinSrEmail"
                        placeholder="email@address.com" 
                        aria-label="email@address.com" 
                        required 
                        data-msg="Please enter a valid email address."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                
                    <div className="js-form-message form-group">
                      <label className="input-label" htmlFor="signupSrPassword">
                        <span className="d-flex justify-content-between align-items-center">
                          Password
                          <a className="input-label-secondary" href="/">Forgot Password?</a>
                        </span>
                      </label>

                      <div className="input-group input-group-merge">
                        <input 
                            type="password" 
                            className="js-toggle-password form-control form-control-lg" 
                            name="password" 
                            id="signupSrPassword" 
                            placeholder="8+ characters required" 
                            aria-label="8+ characters required" 
                            required
                            minLength="8"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                       
                      </div>
                    </div>
                  
                    <div className="form-group">
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="termsCheckbox" name="termsCheckbox" defaultChecked/>
                        <label className="custom-control-label text-muted" htmlFor="termsCheckbox"> Remember me</label>
                      </div>
                    </div>
                    

                    <button type="submit" className="btn btn-lg btn-block btn-primary">Sign in</button>
                  </form>
                
                </div>
              </div>
             

           
            
            </div>
          </div>
              </div>
       
    )
}

export default Login