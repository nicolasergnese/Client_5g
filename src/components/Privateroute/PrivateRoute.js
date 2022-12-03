import { Navigate} from "react-router-dom";
import { useAuthStatus } from './useAuthStatus'
import CircularProgress from '@mui/material/CircularProgress'


// import { ACCESS_TOKEN_NAME } from '../constants/apiConstants';
function PrivateRoute({setAuth, children}) {

  const { loggedIn, checkingStatus } = useAuthStatus({setAuth})

  if (checkingStatus) {
    //setAuth(true)
    return <CircularProgress className='app__modal-loader' />
  }

  // if(loggedIn)
  //   setAuth(true);
  // else
  //   setAuth(false);

  return loggedIn ? children : <Navigate to='/' />
}


export default PrivateRoute;