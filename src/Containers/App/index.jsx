import React, { Component } from 'react';

import Clock from "../../Components/Clock";
import BusIndicator from "../../Components/BusIndicator";

import classes from './style.cssm';

export default class App extends Component {
  constructor () {
    super();

    this.state = {
      bus: 0,
    };

    this.handleTick = this.handleTick.bind(this);
  }

  componentDidMount () {
  }

  componentWillUnmount () {
  }

  handleTick (isRising) {
    if (isRising) {
      this.setState({ bus: this.state.bus + 1 });
    }
  }

  render () {
    const { bus } = this.state;

    return (
      <div className="container">
        <h1>Breadboard Computer</h1>
        <Clock onTick={this.handleTick} />
        <BusIndicator value={bus} />
      </div>
    );
  }
}
