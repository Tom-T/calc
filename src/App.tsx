import React, { Component } from 'react';
import './App.css';
import BasicKeyPadComponent from './components/BasicKeyPadComponent';
import ResultComponent from './components/ResultComponent';

type Props = {};

export default class App extends Component<Props> {
  state: {result: string}
  constructor(props: any) {
    super(props)
    this.state = {
      result: "Simple Calc"
    }
  }

  onClick = (button: string) => {
    console.log("Data: " +button )

    if(button === "="){
      this.calculate()
    }
  
    else if(button === "C"){
      this.reset()
    }

    else if(button === "CE"){
      this.backspace()
    }

    else if (this.state.result === "Simple Calc"){
      this.setState(
        {result: ""},
        () => this.onClick(button)
      )
    }

    else {
      this.setState({
        result: this.state.result + button
      })
    }
  };
  
  calculate = () => {
    try {
      this.setState({
        // eslint-disable-next-line
        result: (eval(this.state.result) || "" ) + ""
      })
    } catch (e) {
      this.setState({
        result: "error"
      })
    }
  };

  reset = () => {
      this.setState({
          result: " "
      })
  };

  backspace = () => {
      this.setState({
          result: this.state.result.slice(0, -1)
      })
  };

  render() {
    return (
      <div className="calculator-body">
        <ResultComponent state={this.state.result}/>
        <BasicKeyPadComponent onClick={this.onClick}/>
      </div>
    );
  }
}