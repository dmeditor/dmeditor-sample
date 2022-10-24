import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DMEditor } from 'dmeditor/DMEditor';
import DMInit from 'digimaker-ui/DMInit';
import util from 'digimaker-ui/util'
import Config from './dm.json';

import 'bootstrap/dist/css/bootstrap.min.css';

import { ThemeProvider } from '@mui/material';
import { grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { Routes, BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Login } from './Login';
import Cookies from 'universal-cookie';
import './DMEditorInit';

import ErrorBoundary from './ErrorBoundary';
import './DMEditorInit';

const cookies = new Cookies();

function App(props:{html?:string}) { 
  util.setConfig( Config );
  // cookies.set( util.getCookieKey(),'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NjY2MjM0MjIsImd1aWQiOiI4YWIzOGNkNS1hM2IyLTRmOTYtYjU2OS0yMDdkYWViM2VjYzQiLCJ1c2VyX2lkIjoxfQ.vIX4pO-NhYlNEocah8jW3aK1DmakqT2J00R7W0tij7s');

  return (
    <div className="App">
      <header className="App-header">
      </header>

      <ErrorBoundary>
      <DMInit>
      <Router basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/editor" element={<DMEditor data={[{
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
              }]} />}> 
            
              </Route>          
            <Route>
            </Route>
          </Routes>
      </Router>   
      </DMInit> 
      </ErrorBoundary>    
        </div>
  );
}

export default App;
