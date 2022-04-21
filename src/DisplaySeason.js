import React from "react";
import ReactDOM from "react-dom";

class DisplaySeason extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.lat);
  }

  getSeason(lat, month) {
    if (month > 2 && month < 9) {
      return lat > 0
        ? [
            <i className="sun icon" style={{ color: "#FFE6CC" }}></i>,
            "Let's hit the beach",
          ]
        : [
            <i className="snowflake icon" style={{ color: "#DBE7FC" }}></i>,
            "Burr,it's chilly",
          ];
    }
    if (month > 2 && month < 9) {
      return lat < 0
        ? [
            <i className="snowflake icon" style={{ color: "#DBE7FC" }}></i>,
            "Burr,it's chilly",
          ]
        : [
            <i className="sun icon" style={{ color: "#FFE6CC" }}></i>,
            "Let's hit the beach",
          ];
    }
  }

  getMonth() {
    return new Date().getMonth();
  }

  render() {
    console.log();
    return (
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "2%",
          height: "90vh",
        }}
      >
        <div
          className="icon icon1"
          style={{ alignSelf: "", fontSize: "160px" }}
        >
          {this.getSeason(this.props.lat, this.getMonth())[0]}
        </div>
        <h1 className="text" style={{ alignSelf: "center", fontSize: "70px" }}>
          {this.getSeason(this.props.lat, this.getMonth())[1]}
        </h1>
        <div
          className="icon icon1"
          style={{ alignSelf: "flex-end", fontSize: "160px" }}
        >
          {this.getSeason(this.props.lat, this.getMonth())[0]}
        </div>
      </div>
    );
  }
}

// module.exports = DisplaySeason;
export default DisplaySeason;
