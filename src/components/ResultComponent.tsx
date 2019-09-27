import React, {Component} from 'react';

interface State {
  result: string
}

class ResultComponent extends Component<State> {
  static result: State 
  render() {
      return (
        <div className="result">
          <p>{this.props.result}</p>
        </div>
      );
  }
}

export default ResultComponent;