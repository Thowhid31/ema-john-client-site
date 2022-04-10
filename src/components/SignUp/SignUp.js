import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }

    const handleConfirmPassword = event => {
        setConfirmPassword(event.target.value)
    }

    const handleCreateUser = event=> {
        event.preventDefault()
        if(password !== confirmPassword){
            setError('Your passwords did not match')
            return;
        }
        if(password.length <6){
            setError('Password must be 6 characters or longer')
        }
        // createUserWithEmailAndPassword(email, password)
        // .then(result => {
        //     const user = result.user;
        //     console.log(user);
        // })

        createUserWithEmailAndPassword(email, password)
    }

    if(user){
        navigate('/shop')
    }


    return (
        <div className='form-container'>
            <div>
            <h1 className='form-title'>Sign Up</h1>
            <form onSubmit={handleCreateUser}>
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input onBlur={handleEmailBlur} type="email" name='email' required/>
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input onBlur={handlePasswordBlur} type="password" name='password' required/>
            </div>
            <div className="input-group">
                <label htmlFor="password">Confirm Password</label>
                <input onBlur={handleConfirmPassword} type="password" name='password-password' required/>
            </div>
            <p style={{color :'red'}}>{error}</p>
            
                <input className='form-submit' type="submit" value='Sign Up' />
            </form>
            <p className='form-para'>Already with us? <Link className='form-link' to='/login'>Please Login</Link></p>
            </div>
        </div>
    );
};

export default SignUp;