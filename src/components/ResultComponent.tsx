import React, {Component} from 'react';

interface Props {
  state: string
}

export default class ResultComponent extends Component<Props> {
  render() {
    return (
      <div className="result">
        <p>{this.props.state}</p>
      </div>
    );
  }
}