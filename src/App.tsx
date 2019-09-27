import React, { Component } from 'react';
import './App.css';
import BasicKeyPadComponent from './components/BasicKeyPadComponent';
import ResultComponent from './components/ResultComponent';

export interface State {
  result: (result: string) => void
}

class App extends Component<State> {
  constructor(props: State){
      super(props);

      this.state = {
          result: ""
      }
  }
  onClick = (button: string) => {

    if(button === "="){
        this.calculate()
    }
  
    else if(button === "C"){
        this.reset()
    }
    else if(button === "CE"){
        this.backspace()
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
      result: ""
  })
  };
  
  backspace = () => {
  this.setState({
      result: this.state.result.slice(0, -1)
  })
  };

  render() {
      return (
          <div>
              <div className="calculator-body">
                  <h1>Simple Calculator</h1>
                  <ResultComponent result={this.state.result}/>
                  <BasicKeyPadComponent onClick={this.onClick}/>
              </div>
          </div>
      );
  }
}

export default App;
