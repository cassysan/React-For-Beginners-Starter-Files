import React from 'react';
import { getFunName } from '../helpers';
class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = (event) => {
    event.preventDefault();
    const storeName = this.myInput.value.value;
    this.props.history.push(`/store/${storeName}`);

  }
  render() {
    return (
      <React.Fragment>
      <form className="store-selector" onSubmit={this.goToStore} >
      { /* I'm doin' some Javascript. This is a React.JS comment */ }
      <h2>Please enter a store:</h2>
      <input
        type="text"
        required
        placeholder="Store Name"
        defaultValue={ getFunName() }
        ref={this.myInput} />
      <button type="submit">Visit Da Store</button>
      </form>
      </React.Fragment>
      )
  }
}

export default StorePicker;
