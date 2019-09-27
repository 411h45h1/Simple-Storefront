import React, { useContext, useEffect } from "react";
import { Card } from "react-bootstrap";

import Contents from "../content/Contents";
import AuthContext from "../../context/auth/authContext";

const Store = () => {
  //the section before the return is essentially redundant, its for
  //keeping the user loaded even if browser refreshes
  //basically just a ref for the future
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="shopCont">
      <Card>
        <div className="shopGrid">
          <Contents />
        </div>
      </Card>
    </div>
  );
};
export default Store;
