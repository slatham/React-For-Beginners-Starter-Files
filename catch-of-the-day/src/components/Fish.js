import React from "react";
import { formatPrice } from "../helpers";

class Fish extends React.Component {
  render() {
    const { image, name, desc, price, status } = this.props.fishData;
    const isAvailable = status === "available";
    return (
      <li className="menu-fish">
        <img alt="fish" src={image} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button onClick={this.props.addToOrder} disabled={!isAvailable}>
          {isAvailable ? "Add to cart" : "Sold Out"}
        </button>
      </li>
    );
  }
}
export default Fish;
