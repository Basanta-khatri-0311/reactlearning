import React from "react";
import { useContext } from "react";
import UserContext from "../Context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) {
    return <div>Please Login</div>;
  } else {
    return(
      <div>
        <h2>Welcome {user.userName}</h2>
      </div>
    );
  }
}

export default Profile;
