{
  /*
import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import { addToCart } from "./actions/cart-action";
import cartReducer from "./reducers/cartReducer";

class Store extends Component {
  //  handleClick = id => {
  //    this.props.addToCart(id);
  //  };

  render() {
    let itemList = this.props.items.map(item => {
   // return (
      <div className="cardCont">
        <Card key={item.id} style={{ width: "12rem" }}>
          <div className="cardGrid">
            <div className="cardItems">
              <Card.Img variant="top" src={item.img} alt={item.title} />
              <Card.Title className="card-title">{item.title}</Card.Title>
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                  {item.desc}
                </Card.Subtitle>
                <nav aria-label="breadcrumb">
                  <ul class="breadcrumb">
                    <li class="breadcrumb-item">
                      <a
                        href="#"
                        onClick={() => {
                          this.handleClick(item.id);
                        }}
                      >
                        s
                      </a>
                    </li>
                    <li class="breadcrumb-item">
                      <a
                        href="#"
                        onClick={() => {
                          this.handleClick(item.id);
                        }}
                      >
                        m
                      </a>
                    </li>
                    <li class="breadcrumb-item">
                      <a
                        href="#"
                        onClick={() => {
                          this.handleClick(item.id);
                        }}
                      >
                        l
                      </a>
                    </li>
                    <li class="breadcrumb-item">
                      <a
                        href="#"
                        onClick={() => {
                          this.handleClick(item.id);
                        }}
                      >
                        xl
                      </a>
                    </li>
                  </ul>
                </nav>
                <Card.Text> Price: ${item.price}</Card.Text>
                <Card.Link>add</Card.Link>
              </Card.Body>
            </div>
          </div>
        </Card>
      </div>
    //    }
    //    );
    return (
      <div className="storeCont">
        <Card>
          <h3 className="shopHeader">StoreFront</h3>

          <div className="itemCont">{itemList}</div>
        </Card>
      </div>
    );
  


const mapStateToProps = state => {
  return {
    items: state.items
  };
};
  const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id));
    }
  };
};

export default connect(mapStateToProps//.mapDispatchToProps
  )
Store;
*/
}
