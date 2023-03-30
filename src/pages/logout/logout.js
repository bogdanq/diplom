import { signOut } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../../api/firebase";

export const LogOut = () => {
  useEffect(() => {
    signOut(auth);
  }, []);

  return null;
};
