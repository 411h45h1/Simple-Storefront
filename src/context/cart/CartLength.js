import React, { Fragment } from "react";
import { CartContext } from "./CartContext";

export default props => (
  <CartContext.Consumer>
    {cart => <span>{cart.items.length || "0"}</span>}
  </CartContext.Consumer>
);
