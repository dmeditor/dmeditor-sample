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

  return (
    <div className="App">
      <header className="App-header">
      </header>
        <DMEditor data={[{
      type:'text',
      content:{ 
        initialValue:[
          {type: 'paragraph',
          children:[ 
            {
              text: 'Please input more text.',
            }
            ]
          }
        ],
      }
    }]} />        
        </div>
  );
}

export default App;
