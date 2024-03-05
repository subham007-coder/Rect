import React from "react";
import UserContex from "./UserContext";

const UserContexProvider = ({ children }) => {
  const [user, setUser] = React.useState(null); // React.useState mane usestate ta ke alada kore r import korte holo na;

  return (
    <UserContex.Provider value={{ user, setUser }}>
      {children}
    </UserContex.Provider>
  );
};

export default UserContexProvider;
