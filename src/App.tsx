import React from 'react';
import './App.css';
import BasicKeyPadComponent from './components/BasicKeyPadComponent';
import ResultComponent from './components/ResultComponent';


const App: React.FC = () => {
  var result: string = "Calc"

  return (
    <div className="App">
      <div className="calculator-body">
          <ResultComponent result={ result }/>
          <BasicKeyPadComponent result={ result }/>
      </div>
    </div>
  );
}

export default App;
