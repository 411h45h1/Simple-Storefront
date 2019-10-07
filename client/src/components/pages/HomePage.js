import React, { Fragment, useContext, useEffect } from "react";
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
    <Fragment>{/*      <Card>
        <h1>Home Page</h1>
</Card> */}</Fragment>
  );
};

export default HomePage;
