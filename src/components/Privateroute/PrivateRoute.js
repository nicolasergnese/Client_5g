import { useEffect } from 'react';
import { Navigate } from "react-router-dom";

// import { ACCESS_TOKEN_NAME } from '../constants/apiConstants';
function PrivateRoute({ token, children }) {
  console.log("privateroute")
  let auth = false;
  let keys = Object.keys(sessionStorage) 
  if (keys === undefined || keys === null || keys.length===0)
    keys=Object.keys(localStorage)  ;
 // console.log(Object.keys(localStorage));
  useEffect(() => {
    //console.log(sessionStorage.getItem("ACCESS_TOKEN_NAME"));
    if (Object.keys(sessionStorage) === undefined || Object.keys(sessionStorage) === null || Object.keys(sessionStorage).length===0) {
      token(false)
    }
    else {
      token(true)
    }
  }, [token]);

  if (keys === undefined || keys === null || keys.length===0) {
    auth = false;
  }
  else {
    auth = true;
  }
  

  //console.log(auth,children)
  return auth ? children : <Navigate to="/" />;
  
}


export default PrivateRoute;