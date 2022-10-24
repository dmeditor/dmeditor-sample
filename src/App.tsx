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
  let data:any = [];

  return (
    <div className="App">
      <header className="App-header">
      </header>
        <DMEditor data={data} />        
        </div>
  );
}

export default App;
