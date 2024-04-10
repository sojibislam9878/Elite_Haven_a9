import PropTypes from 'prop-types';
import useAuth from '../../Hooks/useAuth';
import {Navigate , useLocation} from "react-router-dom"
import Spinner from '../Spinner';
const PrivetRoute = ({children}) => {
    const {user , loading}=useAuth()
    const location =useLocation()
    console.log(location);
    if (loading) {
        return <Spinner></Spinner>
    }
    if (!user) {
        return <Navigate to="/login"  state={location?.pathname || "/"}/>
    }
    return (
        <div>
            {children}
        </div>
    );
};
PrivetRoute.propTypes = {
    children: PropTypes.element.isRequired
  };
export default PrivetRoute;