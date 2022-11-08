import { Button, Input } from "@mui/material"
import { useState } from "react"

import util from 'digimaker-ui/util'
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const Login = (props:any)=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submit = ()=>{
        fetch(process.env.REACT_APP_REMOTE_URL + '/auth/auth', { method: 'post', body: JSON.stringify({username:username, password: password}) })
        .then((response) => response.json())
        .then((res) => {
            if( res.error === false ){
                cookies.set( util.getCookieKey(),res.data.refresh_token);
                window.location.href='/editor';
            }else{
                window.alert(res.data.message);
            }
        })
        .catch((err) => {
            window.alert(err);
          });
    }


    return <div  style={{width: '300px', margin:'50px auto'}}>        
        <h2>Login</h2>
        <div>
        Username: <Input type='text' onChange={e=>setUsername(e.target.value)}/>
        </div>
        <div>
        Password: <Input type='password' onChange={e=>setPassword(e.target.value)} />
        </div>
        <Button type='button' onClick={()=>submit()} size="small" variant="text">Submit</Button>
    </div>
}