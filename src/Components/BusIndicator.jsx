import React, { Component } from 'react';

import LED from "./LED";

export default class BusIndicator extends Component {
  render () {
    const { value } = this.props;

    const bus = [
      value & 0b10000000,
      value & 0b01000000,
      value & 0b00100000,
      value & 0b00010000,
      value & 0b00001000,
      value & 0b00000100,
      value & 0b00000010,
      value & 0b00000001,
    ];

    const style = {
      display: "flex",
    };

    return (
      <div style={style}>
        {
          bus.map((bit, n) => <LED on={!!bit} key={n} color="#FF0000" />)
        }
      </div>
    );
  }
}
