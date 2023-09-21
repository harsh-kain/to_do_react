import {useState, useContext}from 'react'
import userContext from '../context/UserContext'
const Login = () => {

    const [password , setPassword] = useState('');
    const [userName , setuserName] = useState('');

    const {setuser} = useContext(userContext)
    
    const handleSubmit = (e) =>{

        e.preventDefault()
        setuser({userName,password})
    }
  return (
    <>
        <div>
            <h2>Login</h2>
            <input type="text" value={userName} placeholder='userName' onChange={(e) => setuserName(e.target.value)}/>
            &nbsp;
            <input type="text" value={password} id="" placeholder='password' onChange={(e) => setPassword(e.target.value)}/>

            <button onClick={handleSubmit}>Login</button>
            
        </div>
    
    </>
  )
}

export default Login