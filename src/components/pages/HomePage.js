import React, { Fragment, useContext, useEffect } from "react";
import { Card } from "react-bootstrap";
import AuthContext from "../../context/auth/authContext";

const HomePage = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);
  return <Fragment>{""}</Fragment>;
};

export default HomePage;
