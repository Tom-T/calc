import React, {Component} from 'react';

interface Props {
  onClick: (button: string) => void
}

export default class BasicKeyPadComponent extends Component<Props> {
  render() {
    return (
      <div className="buttonpad">
        <button className="button" name="(" onClick={e => this.props.onClick(e.currentTarget.name)}>(</button>
        <button className="button" name="CE" onClick={e => this.props.onClick(e.currentTarget.name)}>CE</button>
        <button className="button" name=")" onClick={e => this.props.onClick(e.currentTarget.name)}>)</button>
        <button className="button" name="C" onClick={e => this.props.onClick(e.currentTarget.name)}>C</button><br/>

        <button className="button" name="1" onClick={e => this.props.onClick(e.currentTarget.name)}>1</button>
        <button className="button" name="2" onClick={e => this.props.onClick(e.currentTarget.name)}>2</button>
        <button className="button" name="3" onClick={e => this.props.onClick(e.currentTarget.name)}>3</button>
        <button className="button" name="+" onClick={e => this.props.onClick(e.currentTarget.name)}>+</button><br/>

        <button className="button" name="4" onClick={e => this.props.onClick(e.currentTarget.name)}>4</button>
        <button className="button" name="5" onClick={e => this.props.onClick(e.currentTarget.name)}>5</button>
        <button className="button" name="6" onClick={e => this.props.onClick(e.currentTarget.name)}>6</button>
        <button className="button" name="-" onClick={e => this.props.onClick(e.currentTarget.name)}>-</button><br/>

        <button className="button" name="7" onClick={e => this.props.onClick(e.currentTarget.name)}>7</button>
        <button className="button" name="8" onClick={e => this.props.onClick(e.currentTarget.name)}>8</button>
        <button className="button" name="9" onClick={e => this.props.onClick(e.currentTarget.name)}>9</button>
        <button className="button" name="*" onClick={e => this.props.onClick(e.currentTarget.name)}>x</button><br/>

        <button className="button" name="." onClick={e => this.props.onClick(e.currentTarget.name)}>.</button>
        <button className="button" name="0" onClick={e => this.props.onClick(e.currentTarget.name)}>0</button>
        <button className="button" name="=" onClick={e => this.props.onClick(e.currentTarget.name)}>=</button>
        <button className="button" name="/" onClick={e => this.props.onClick(e.currentTarget.name)}>÷</button><br/>
      </div>
    );
  }
}