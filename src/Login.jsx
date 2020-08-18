import React,{useState} from "react";
import {Link,useHistory} from "react-router-dom";
import './Login.css';
import {auth} from './firebase';
function Login()
{ const history =useHistory();
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const login = (event) =>{
        event.preventDefault();//stop refresh
        //login logic.
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            //loged in.. redirect to homepage
            history.push('/'); 
        })
        .catch((e) => alert(e.message));     
    };
        const register =( event) =>{
            event.preventDefault();//stop refresh
            //register logic.
            auth.createUserWithEmailAndPassword(email,password)
            .then(auth =>{
                //create an user and logged in rediect to home page
                history.push('/'); 
            })
            .catch((e) => alert(e.message));
        };
    return (
        <div className="Login">

           <Link to = "/">

           </Link>
           <div className="login_container">
               <h1>Sign In </h1>
           <form>
               <h5>E-mail</h5>
               <input value={email} onChange={event =>setEmail(event.target.value)} type ="email" />
               <h5>Password</h5>
               <input value={password} onChange={event =>setPassword(event.target.value)} type ="password" />
           <button type ="submit " onClick ={login}>Sign In</button>
           </ form>
           <button onClick={register}>Create your Account</button>
           </div>
        </div> 
    );
}
export default Login;