import PropTypes from 'prop-types';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase/FirebaseConfig";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  // create user
  const createUserWithEmail = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const [loading , setLoading]=useState(true)
  //   user
  const [user, setUser] = useState(null);
  

  //   check user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      setLoading(false)
    });
  }, []);

  //   userlogin
  const login = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

// logout
const logout=()=>{
  setLoading(true)
  setUser(null)
    signOut(auth)
}
// values
  const values = { createUserWithEmail, login , logout, user , loading};
  return (
    <div>
      <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    </div>
  );
};

AuthProvider.propTypes = {
    children: PropTypes.element.isRequired
  };
  
export default AuthProvider;
