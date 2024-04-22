import React, { useState } from 'react';
import './header.css';
import { Container } from 'react-bootstrap';






const Login =()=> {
  const [user,setuser] = useState("");
  const [pass,setpass] = useState("");
  const handle =()=>{
    const Username = localStorage.getItem("usernametry");
    const Password = localStorage.getItem("passwordtry");
    if (Username === user && Password === pass) {
       alert("Successfully logged in");
       localStorage.setItem("user" , user);
       window.location = "/";
    }
    else{
      alert("Wrong username or password");
    }
  }
  return (
    <div className="Login">
     <Container>
    <div className="Register">
      <div className='Register-app d-flex text-center'>
          <div className='Register-app-page' style={{height : '340px'}}>
            <h1 style={{color : 'white'}}>Sign in</h1><br></br>
             <h2 style={{color : 'white'}}>Welcome to Pixelpoint</h2>
             <div className='Register-app-page-div' style={{height : '120px'}}>
             {/* label username */}
             <label style={{color : 'white',position :'relative' , right :'30%'}}>
               Username:
             </label>
             {/* username input */}
             <input 
             type='text'
             onChange={(e)=>{setuser(e.target.value)}} 
             />
             {/* /////////////////////////////////////////////////////// */}
             {/* password label */}
             <label style={{color : 'white',position :'relative' , right :'30%'}}>
              Password:
             </label>
             {/* password input */}
             <input 
             type='password'
             onChange={(e)=>{setpass(e.target.value)}}
             />
             </div>
             <br></br>
             <button disabled={user && pass ? false : true} onClick={handle} className='btn btn-light Register-app-page-btn'>Sign in</button>
             <h6 style={{color : 'white'}}>Don't have an account <a style={{color : 'white'}} href='/Register'> Register</a></h6>
          </div>
        </div>
        </div>
     </Container>
    </div>
  );
}

export default React.memo(Login);
