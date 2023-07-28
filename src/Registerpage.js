import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Registerpage() {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');

    const handlesubmit=(event)=>{
        event.preventdefault();
        console.log('username:',username);
        console.log('password:',password);

    };
    const navigate=useNavigate()
    return(
   <form onSubmit={handlesubmit}>
    <div>
      <label>Username:</label>
      <input
      type="text"
      id="username"
      value={username}
      onChange={(event) =>setUsername(event.target.value)}
      required
      />
    </div>
    <div>
    <label>password:</label>
      <input
      type="password"
      id="password"
      value={password}
      onChange={(event) =>setPassword(event.target.value)}
      required
      />
    </div>
    <button type='submit' onClick={()=>navigate('nextpage2')}>Login</button>
    </form>
  

  );
};

export default Registerpage;
