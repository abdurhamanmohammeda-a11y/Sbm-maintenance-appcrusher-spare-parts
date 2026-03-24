
// authService.js
import { auth } from "./firebase.js";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

/**
 * User login
 * @param {string} email
 * @param {string} password
 * @returns {Promise<UserCredential>}
 */
export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

/**
 * User logout
 * @returns {Promise<void>}
 */
export const logout = () => {
  return signOut(auth);
};

/**
 * Monitor auth state changes
 * @param {function} callback - Function that receives user object (or null)
 * @returns {unsubscribe} function to stop listening
 */
export const onAuthStateChange = (callback) => {
  return onAuthStateChanged(auth, callback);
};
