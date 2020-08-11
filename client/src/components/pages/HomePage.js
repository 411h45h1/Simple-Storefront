import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import setAuthToken from "../../utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const HomePage = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: 40,
      }}
    >
      <div
        style={{
          flex: 1,
        }}
      >
        <h4>Welcome, to the simplest full-stack demo you ever did see </h4>
      </div>
      <div
        style={{
          flex: 1,
        }}
      >
        <p>
          This web app was built/deployed to demonstrate the functionality of
          the MERN (MongoDB, Express, React, Node.js) stack.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
