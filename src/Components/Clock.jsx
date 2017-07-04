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
    this.setHigh = this.setHigh.bind(this);
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
    const high = !this.state.high;

    this.setHigh(high);
  }

  setHigh (high) {
    const { onTick } = this.props;

    this.setState({ high });

    if (onTick) {
      onTick(high);
    }
  }

  toggleAuto () {
    const auto = !this.state.auto;

    this.setState({ auto, high: false });
  }

  render () {
    const { high, auto } = this.state;

    return (
      <div>
        <button className={"btn btn-primary m-1 " + (auto ? "active" : "")} onClick={this.toggleAuto}>Auto</button>
        <button className="btn btn-primary m-1" disabled={auto} onMouseDown={()=>this.setHigh(true)} onMouseUp={()=>this.setHigh(false)}>Step</button>
        <LED on={high} color="#0000FF" />
      </div>
    );
  }
}
