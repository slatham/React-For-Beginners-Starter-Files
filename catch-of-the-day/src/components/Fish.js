import React from "react";
import { formatPrice } from "../helpers";
import PropTypes from "prop-types";

class Fish extends React.Component {
  static propTypes = {
    fishData: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      price: PropTypes.number,
      status: PropTypes.string,
    }),
    addToOrder: PropTypes.func,
  };
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
