import PropTypes from "prop-types";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase/FirebaseConfig";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  // create user
  const createUserWithEmail = (email, password , toast) => {
    setLoading(true);
    if (password.length < 6) {
      return toast.warn('Password must be at least 6 characters long', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    if (!/^(?=.*[a-z]).*$/.test(password)) {
      return toast.warn('Password must contain a lowercase letter', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    if (!/^(?=.*[A-Z]).*$/.test(password)) {
      return toast.warn('Password must contain a uppercase letter', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    toast.success('Account created successfuly', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
    return createUserWithEmailAndPassword(auth, email, password);
    
  };
// update user 
   const updateUser=(name, photo)=>{
    updateProfile(auth.currentUser, {
      displayName:name, photoURL: photo
    })
    // .then(() => {
      // Profile updated!
      // ...
    // }).catch((error) => {
      // An error occurred
      // ...
    // });
   }
// loading
  const [loading, setLoading] = useState(true);
  //   user
  const [user, setUser] = useState(null);

  //   check user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
      setLoading(false);
    });
  }, []);

  //   userlogin
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout
  const logout = () => {
    setLoading(true);
    setUser(null);
    signOut(auth);
  };

  // social login providers

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const googleSignUP = () => {
    signInWithPopup(auth, googleProvider)
  };
  const githubSignUP = () => {
    signInWithPopup(auth, githubProvider);
  };
  
  // values
  const values = {
    createUserWithEmail,
    login,
    logout,
    user,
    loading,
    googleSignUP,
    githubSignUP,
    updateUser,
  };
  return (
    <div>
      <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    </div>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthProvider;
