import React from "react";
import logo from "./logo.png";
import Clock from "./Clock";
import "./App.css";

class App extends React.Component {
  constructor(props){
    super(props);
  } 

  render(){
    return(
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Clock locale = 'Africa/Abidjan'/>
          <Clock locale = 'Pacific/Honolulu'/>
          <Clock locale = 'Asia/Singapore'/>
        </header>
      </div>
    )
  }
}

export default App;
