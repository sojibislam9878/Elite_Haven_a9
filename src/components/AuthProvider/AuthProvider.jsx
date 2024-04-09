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
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   user
  const [user, setUser] = useState(null);
  

  //   check user
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
    });
  }, []);

  //   userlogin
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

// logout
const logout=()=>{
  setUser(null)
    signOut(auth)
}
// values
  const values = { createUserWithEmail, login , logout, user };
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
