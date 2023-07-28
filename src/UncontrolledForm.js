import React,{useRef} from 'react';

const UncontrolledForm =()=>{
    const usernameRef=useRef(null);
    const emailRef=useRef(null);
    const passwordRef=useRef(null);

    const handleSubmit=(e)=>{
        e.preventDefault();

        const formData={
            username:usernameRef.current.value,
            email:usernameRef.current.value,
            password:usernameRef.current.value,
        };
        console.log(formData);
    };

    return(
        <form onSubmit={handleSubmit}>
        <h4>welcome!!</h4>
        <label>
            Username:
            <input type='text' ref={usernameRef}/>
        </label>
        <label>
            Email:
            <input type='email' ref={emailRef}/>
        </label>
        <label>
            password:
            <input type='password' ref={passwordRef}/>
        </label>
        <button type="submit">submit</button>
        </form>
    );
    
};

export default UncontrolledForm;


