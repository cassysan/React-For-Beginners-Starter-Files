import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };
  addFish = fish => {
    console.log("addin' a fish");
    const fishes = { ...this.state.fishes };
    fishes[`fish${Date.now()}`] = fish;
    this.setState({
      fishes: fishes
    });
  };

  loadSampleFish = () => {
    this.setState({ fishes: sampleFishes });
  };

  addToOrder = (key) => {
    // take a copy of state
    const order = { ...this.state.order };

    //add to order or update the # in order
    order[key] = order[key] +1 || 1;
    // call setstate to update the state object
    this.setState({ order: order });
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Daily"/>
          <ul className="fishes">
            {Object.keys(this.state.fishes)
              .map(key => (
                <Fish
                  key={key}
                  index ={key}
                  details={this.state.fishes[key]}
                  addToOrder={this.addToOrder}
                />
              ))}
          </ul>
        </div>
        <Order
          fishes={this.state.fishes}
          order={this.state.order} />
        <Inventory
          addFish={this.addFish}
          loadSampleFish={this.loadSampleFish} />
      </div>
      )
  }
}

export default App;
