
import { useState } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    const handleLogin = (e)=>{
        console.log(email, password);
        e.preventDefault() 
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            console.log(userCredential);
            
            navigate('/compiler')
            setSuccessMessage("Login successfull")
            localStorage.setItem('loggedin', true)

        }).catch((e)=>{
            setError("Email / password did not matched")
            console.log(e);
        })
    }

    return (
        <>
            <div id='main'>
                <div className='elements'>
                    <label htmlFor="useremail" >Email : </label>
                    <input type="email" name="email" onChange={(e)=>{
                        setEmail(e.target.value)
                    }} placeholder='hello@gmail.com' required/>
                </div>
                <div className='elements'>
                    <label htmlFor="userpassword" > Password : </label>
                    <input type="password" onChange={(e)=>{
                        setPassword(e.target.value) }} required/>
                </div>

                <div className="elements">
                    <button onClick={handleLogin}>Login</button>
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                <p> New Here? <Link to='/registration'> Register yourself </Link></p>
            
            </div>
        </>
    )
}

export default Login
