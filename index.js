import React, { Component } from 'react';
import { render } from 'react-dom';
import Debounce from './debounce.js'
import './style.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
      <Debounce/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
