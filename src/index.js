import React from "react";
import ReactDOM from "react-dom";

import DisplaySeason from "./DisplaySeason.js";

// const App = () => {
//   return <div>Hello World</div>;
// };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, long: null, errorMessage: "" };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (e) => {
        console.log(e.coords);
        this.setState({ lat: e.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  componentDidUpdate() {
    console.log(this.state.lat);
  }
  getLocation() {
    if (this.state.lat && !this.state.errorMessage) {
      return <div>Latitude:{this.state.lat}</div>;
    }
    if (!this.state.lat && this.state.errorMessage) {
      return <div>Latitude:{this.state.errorMessage}</div>;
    } else {
      return <div>Loading...</div>;
    }
  }
  render() {
    return (
      <DisplaySeason lat={this.state.lat} error={this.state.errorMessage} />
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
