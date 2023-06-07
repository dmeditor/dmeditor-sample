import React, { useState } from 'react';
import './App.css';
import {DMEditor, registerTool} from 'dmeditor';
import {toolSampleWidget} from './SampleWidget'
import './SampleStyle';

registerTool(toolSampleWidget);

function App(props:{html?:string}) { 

  const [data, setData] =useState<Array<any>>([]);


  return (
    <div className="App">
      <header className="App-header">
      </header>
        <DMEditor data={data} menu={
        <div className='sample-actions'>
        <button title='See json data' className='btn' onClick={()=>{alert(JSON.stringify(data))}}><i className="bi bi-code-slash"></i></button>        
        <a href="https://dmeditor.io" target='_blank'><button title='dmeditor.io' className='btn'><i className="bi bi-question-circle"></i></button></a>
        </div>
        } onChange={(data)=>setData(data)} />        
        </div>
  );
}

export default App;
