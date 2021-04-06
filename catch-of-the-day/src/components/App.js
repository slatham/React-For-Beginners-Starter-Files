import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };
  componentDidMount() {
    const { params } = this.props.match;
    this.fishRef = base.syncDoc(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes",
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.fishRef);
  }

  componentDidUpdate() {
    console.log("update");
  }

  addFish = (fish) => {
    const fishes = { ...this.state.fishes };
    fishes[`fish${Date.now()}`] = fish;
    this.setState({
      fishes,
    });
  };
  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = (key) => {
    // take a copy of state
    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="cool" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map((key) => {
              return (
                <Fish
                  key={key}
                  fishData={this.state.fishes[key]}
                  addToOrder={() => this.addToOrder(key)}
                />
              );
            })}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
