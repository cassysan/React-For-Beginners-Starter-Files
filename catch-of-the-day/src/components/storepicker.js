import React from 'react';

class StorePicker extends React.Component {
  render() {
    return (
      <React.Fragment>
      <form className="store-selector">
      { /* I'm doin' some Javascript. This is a React.JS comment */ }
      <h2>Please enter a store:</h2>
      <input type="text" required placeholder="Store Name" />
      <button tupe="submit">Visit Da Store</button>
      </form>
      </React.Fragment>
      )
  }
}

export default StorePicker;
