import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { DMEditor, DMEditorView } from 'dmeditor';
import DMInit from 'digimaker-ui/DMInit';
import util from 'digimaker-ui/util'

import 'bootstrap/dist/css/bootstrap.min.css';

import { Menu, MenuItem, ThemeProvider } from '@mui/material';
import { grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { Routes, BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Login } from './Login';
import Cookies from 'universal-cookie';
import './DMEditorInit';

import ErrorBoundary from './ErrorBoundary';
import './DMEditorInit';
import { Button } from 'react-bootstrap';
import { Close, Menu as MenuIcon, Save, UndoOutlined } from '@mui/icons-material';
import { getViewSettings } from './dmConfig';
import { BrowseImage } from './dmeditor_content/BrowseImage';
import { BrowseLink } from './dmeditor_content/BrowseLink';

function App(props:{html?:string}) { 
  // cookies.set( util.getCookieKey(),'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NjY2MjM0MjIsImd1aWQiOiI4YWIzOGNkNS1hM2IyLTRmOTYtYjU2OS0yMDdkYWViM2VjYzQiLCJ1c2VyX2lkIjoxfQ.vIX4pO-NhYlNEocah8jW3aK1DmakqT2J00R7W0tij7s');

  return (
    <div className="App">
      <header className="App-header">
      </header>

      <ErrorBoundary>
      <DMInit viewSettings={getViewSettings}>
      <Router basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/editor" element={<DMEditor menu={
            <DMMenu />
          } data={[{
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
              }]}  imageBrowse={BrowseImage} linkBrowse={BrowseLink}/>}> 
              </Route>          
              <Route path="/view" element={<DMEditorView data={[{
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
              }]}  imageBrowse={BrowseImage} linkBrowse={BrowseLink}/>}> 
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

const DMMenu = ()=>{
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClose = ()=>{
    
  }

  return <div>
    <Button variant='link' size='sm' onClick={(e)=>setAnchorEl(e.currentTarget)}>
      <MenuIcon />
    </Button>
   
</div>
}


export default App;