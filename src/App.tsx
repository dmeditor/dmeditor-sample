import React from 'react';
import './App.css';
import {DMEditor} from 'dmeditor';

function App(props:{html?:string}) { 

  return (
    <div className="App">
      <header className="App-header">
      </header>
        <DMEditor data={[]} />        
        </div>
  );
}

export default App;
