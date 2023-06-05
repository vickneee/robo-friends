import React from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./Robots";

const App = () => {
  return (
    <div>
      <h1>RobotFriends</h1>
      <SearchBox />
      <CardList robots={robots} />
    </div>
  );
};

export default App;
