import React from "react";
import { CartContext } from "../context/cart/CartContext";

import "../App.css";
import Header from "./Header";
import HomePage from "./pages/HomePage";

import setAuthToken from "../utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

export default class Page extends React.Component {
  state = {
    items: [],
  };

  addToCart = this.addToCart.bind(this);
  addToCart(contents) {
    this.setState({
      items: [...this.state.items, { contents }],
    });
  }

  removeFromCart = this.removeFromCart.bind(this);
  removeFromCart(content) {
    const newArray = [...this.state.items];
    newArray.splice(content, 1);

    this.setState({
      items: newArray,
    });
  }

  render() {
    return (
      <CartContext.Provider
        value={{
          items: this.state.items,
          addToCart: this.addToCart,
          removeFromCart: this.removeFromCart,
        }}
      >
        <div className="app">
          <div>
            <Header />
            <HomePage />
          </div>
        </div>
      </CartContext.Provider>
    );
  }
}
