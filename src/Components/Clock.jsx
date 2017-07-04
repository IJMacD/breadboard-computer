import React, { Component } from 'react';

import LED from "./LED";

export default class Clock extends Component {
  constructor () {
    super();

    this.state = {
      high: false,
      halt: false,
      auto: true,
      period: 1000,
    };

    this.init = this.init.bind(this);
    this.flip = this.flip.bind(this);
    this.toggleAuto = this.toggleAuto.bind(this);
  }

  componentDidMount () {
    this.init();
  }

  componentDidUpdate (prevProps, prevState) {
    clearInterval(this.interval);

    this.init();
  }

  componentWillUnmount () {
    clearInterval(this.interval);
  }

  init () {
    const { auto, halt, period } = this.state;

    if(auto && !halt) {
      this.interval = setInterval(this.flip, period / 2);
    }
  }

  flip () {
    const { onTick } = this.props;

    const high = !this.state.high;

    this.setState({ high });

    if (onTick) {
      onTick(high);
    }
  }

  toggleAuto () {
    const auto = !this.state.auto;

    this.setState({ auto });
  }

  render () {
    const { high, auto } = this.state;

    return (
      <div>
        <button className={"btn btn-primary m-1 " + (auto ? "active" : "")} onClick={this.toggleAuto}>Auto</button>
        <button className="btn btn-primary m-1" disabled={auto} onClick={this.flip}>Step</button>
        <LED on={high} color="#0000FF" />
      </div>
    );
  }
}
