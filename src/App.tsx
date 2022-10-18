import React from 'react';
import logo from './logo.svg';
import './App.css';
// @ts-ignore
import { DMEditor } from 'dmeditor/DMEditor';

// @ts-ignore
import {BlockInfo} from 'dmeditor/Main';
import { ThemeProvider } from '@mui/material';
import { grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

function App(props:{html?:string}) { 
  let data = [{
    type:'imagetext',
    settings:{childrenHorizontal: true},
    children: [
    {type:'text', content:'<p>Hello</p><p>Good</p>', settings:{}},
    {type:'image', content:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOdlzDI3LftAb4bwkJOWODiyLE9bpB3Wr8r9A60RGy1A&s', settings:{}}
    ], allowedType:["text"]},
    {type:'text', content:'<p>Content</p>', settings:{}},
];

  return (
    <div className="App">
      <header className="App-header">
      </header>
        <DMEditor data={props.html?[{type:'p', content:{layout:{}, data:props.html}}]:data} />        
        </div>
  );
}

export default App;
