import { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Registration = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [uname, setUname] = useState('');
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    const handleReg = async (e) => {
        e.preventDefault();


       createUserWithEmailAndPassword(auth, email, password)
       .then((userCredential)=>{
        setSuccessMessage('Loggedin Successfull')
        console.log(userCredential);
        navigate('/login')
       }).catch(()=>{

        setError("Already Registered");
       })

   
    };

    return (
        <>
            <div id='main'>
                <div className='elements'>
                    <label htmlFor='usernmae'>Username : </label>
                    <input
                        type='text'
                        name='username'
                        value={uname}
                        onChange={(e) => {
                            setUname(e.target.value);
                        }}
                        placeholder='alina'
                        required
                    />
                </div>
                <div className='elements'>
                    <label htmlFor='useremail'>Email : </label>
                    <input
                        type='email'
                        name='email'
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        placeholder='alina@gmail.com'
                        required
                    />
                </div>
                <div className='elements'>
                    <label htmlFor='userpassword'> Password : </label>
                    <input
                        type='password'
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        required
                    />
                </div>

                <div className='elements'>
                    <button onClick={handleReg}>Registration</button>
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                <p>
                    Already have an account? <Link to='/login'>Login Here</Link>
                </p>
            </div>
        </>
    );
};

export default Registration;
