import React from 'react';
import logo from "./logo.png";

export default class Clock extends React.Component{
  constructor(props){
    super(props);

    this.props=({
      locale: (props)
    })

    this.state=({
      date: new Date()
    })
  }
  
  componentDidMount(){
    this.timerId = setInterval(() => {
        this.setState({
        date: new Date(),
      });
    }, 1000);
  }


  componentWillUnmount(){
    clearInterval(this.timerId)
  }

  render() {
    let locale = this.props.locale
    return (
      <div className="App">
          <p>Date & Time in {locale} now: {this.state.date.toLocaleString('en-GB',{ timeZone: locale })}</p>
      </div>
    );
  }
}
