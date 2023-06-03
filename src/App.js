import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./Robots";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }
  render() {
    return (
      <div className="tc">
        <h1 className="f1">RobotFriends</h1>
        <SearchBox />
        <CardList robots={robots} />
      </div>
    );
  }
}

export default App;
