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
  const createUserWithEmail = (email, password) => {
    setLoading(true);
    if (password.length < 6) {
      return alert("Password choto")
    }
    if (!/^(?=.*[a-z]).*$/.test(password)) {
      return alert("ekta choto hater okkhor daw")
    }
    if (!/^(?=.*[A-Z]).*$/.test(password)) {
      return alert("BORO HATER okkhor daw")
    }
    alert("account khula hoye geche brooo")
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
