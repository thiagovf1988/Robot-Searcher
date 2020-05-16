import React, { Component } from "react";
// import { robots } from "../robots";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: '',
    };
    console.log("1");
  }

  componentDidMount() {
    // this.setState({ robots: robots });

    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(response => response.json())
    //   .then(users => { this.setState({ robots: users }) });

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => { this.setState({ robots: users }) });
    console.log("2");
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };


  render() {
    console.log("3");
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(searchfield.toLowerCase());
    });

    return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className="tc">
          <h1 className="f1">Robots Buddies</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>

          </Scroll>
        </div>
      );



  }
  // }

  // render() {
  //   return (
  //     <div className="tc">
  //       <h1>Robots Budies</h1>
  //       <SearchBox searchChange={this.onSearchChange} />
  //       <CardList robots={this.state.robots} />
  //     </div>
  //   );
  // }
}

// const App = () => {
//   return (
//     <div className="tc">
//       <h1>sss</h1>
//       <SearchBox />
//       <CardList robots={robots} />
//     </div>
//   );
// }

export default App;
