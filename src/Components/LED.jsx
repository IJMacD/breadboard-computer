import React from 'react';

export default function LED (props) {
  const { on, color } = props;

  const style = {
    height: "1.5rem",
    width: "1.5rem",
    borderRadius: "50%",
    margin: "0 auto",
    border: on ?
      "2px solid rgba(0,0,0,0.2)" :
      "2px solid rgba(0,0,0,1)",

    background: color,
  };

  const innerStyle = {
    height: "100%",
    width: "100%",
    borderRadius: "50%",
    background: on ?
      "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.2))" :
      "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,1))",
  };

  return <div style={style}><div style={innerStyle} /></div>;
}
