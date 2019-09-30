import React, {Component} from 'react';

interface Props {
  state: string
}

export default class ResultComponent extends Component<Props> {
  render() {
    return (
      <p className="result">{this.props.state} </p>
    );
  }
}