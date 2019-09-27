import React from 'react';
import './App.css';
import BasicKeyPadComponent from './components/BasicKeyPadComponent';
import ResultComponent from './components/ResultComponent';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="calculator-body">
          <h1>Simple Calculator</h1>
          <ResultComponent result={ this.state.result }/>
          <BasicKeyPadComponent onClick={ this.onClick }/>
      </div>
    </div>
  );
}

export default App;
