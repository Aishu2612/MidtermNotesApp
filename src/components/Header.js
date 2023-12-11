import React from "react";
import { auth } from '../config/auth';

import { useAuthState } from 'react-firebase-hooks/auth';

function Header() {
  const [user] = useAuthState(auth);
  const handleLogout = () => {
    auth.signOut();
    console.log(user);
  };
  return (
    <header>
      <div className="left"><h1> Notes Keeper App</h1></div>
     {user?<div className="right"><button onClick={handleLogout}>Logout</button></div>:<></>}
    </header>
  );
}

export default Header;



