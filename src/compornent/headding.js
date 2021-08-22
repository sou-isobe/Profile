import React from "react";
import "../css/Headding.css";

class Headding extends React.Component {
  title = "";

  constructor(props) {
    super();
    this.title = props.title;
  }

  render() {
    return <div className="headding">{this.title}</div>;
  }
}

export default Headding;
