import React, { Component } from 'react';
import FriendsList from './Components/FriendsList';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendsList/>
      </div>
    );
  }
}

export default App;