import React, { useState } from 'react';
import './App.css';
import {DMEditor, registerTool} from 'dmeditor';
import {toolSampleWidget} from './SampleWidget'
import './SampleStyle';
import { Input } from '@mui/material';

registerTool(toolSampleWidget);

function App(props:{html?:string}) { 

  const [data, setData] =useState<Array<any>>([{"type":"text","data":[{"type":"paragraph","children":[{"text":"Description"}]}],"id":"agSg0CaGuFe"}]);

  const [data2, setData2] = useState([{"type":"heading", "data":'Description:', settings:{level: 3},"id":"agSg0CaGuF1"},{"type":"text","data":[{"type":"paragraph","children":[{"text":"This lap top has fastest CPU so far."}]}],"id":"agSg0CaGuFe"},
  {"type":"collapsable_text",style:"bold","data":{"title":"How CPU affects you","body":[{"type":"text","id":"2","data":[{"type":"paragraph","children":[{"text":"CPU is the most important put in a computer..."}]}]}]},"id":"aZtOs7mHKCO"}
]);

  return (
    <div className="App">
                  
            <DMEditor menu={
            <div className='sample-actions'>
            <button title='See json data' className='btn' onClick={()=>{alert(JSON.stringify(data))}}><i className="bi bi-code-slash"></i></button>        
            <a href="https://dmeditor.io" target='_blank'><button title='dmeditor.io' className='btn'><i className="bi bi-question-circle"></i></button></a>
            </div>
            }
             data={data2}  onChange={(data)=>setData2(data)} /> 
          
 
        </div>
  );
}

export default App;
