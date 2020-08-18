import React,{useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home'; 
import Login from './Login';
import Checkout from './Checkout';
import {useStateValue} from './StateProvider';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import {auth} from "./firebase";
function App()
{
    const[{user},dispatch]=useStateValue();
    //useEffect hook
    //piece of code which run based on a given condition
    useEffect(()=>{
    const unsubscribe= auth.onAuthStateChanged((authUser)=>{
    if (authUser){
        //the user is logged in
        dispatch({
            type:"SET_USER",
            user:authUser
        })
    }
    else {
        //the user isn logged out
        dispatch({
            type:"SET_USER",
            user:null
        });
    }
        });
        return() =>{
            //any cleanup operation go in  here
            unsubscribe();
        }
        },[]);
        console.log("use is ===>",user);
    return (
        <Router>
            <div className="app"> 
                     <Switch>
                          <Route   exact path = "/checkout">
                          <Header />
                             <Checkout />
                               </Route>
                               <Route   exact path = "/login">
                 
                              <Login />
                               </Route>
                               <Route   exact path = "/">
                              
                                  <Header />
                              <Home /> 
                               </Route>
                  </Switch>
    </div>
    </Router>
    );
}
export default App;