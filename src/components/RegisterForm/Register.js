import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../Redux/action/authAction';
import './style.css';

function Register() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [err, setErr] = useState();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { alert } = useSelector((state) => state.authReducer);
    const { authList } = useSelector((state) => state.authReducer);

    const handleChangeEmail = (e) => {
        const email = e.target.value;
        setUsername(email);
    };

    const handleChangePassword = (e) => {
        const pass = e.target.value;
        setPassword(pass);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await dispatch(register({ username, password }));
        } catch (error) {
            console.log(error.response.data.msg);
        }
    };

    useEffect(() => {
        if (authList.token) {
            navigate('/home');
        } else {
            setErr(alert);
        }
    }, [authList.token, navigate, alert]);

    return (
        <div className='register-container'>
            <div className='register-main'>
                <h1>Register</h1>
                <form>
                    <div className='form-control'>
                        <input
                            name='username'
                            type='email'
                            required={true}
                            placeholder='Enter Your Email'
                            onChange={handleChangeEmail}
                        />
                        <small></small>
                        <span></span>
                    </div>
                    <div className='form-control'>
                        <input
                            name='password'
                            type='password'
                            required={true}
                            placeholder='Enter Your Password'
                            onChange={handleChangePassword}
                        />
                        <small></small>
                        <span></span>
                    </div>
                    <button className='btn-submit' onClick={handleSubmit} type='submit'>
                        Sign Up
                    </button>
                </form>
                <div className='check-error'>
                    <span>{err}</span>
                </div>
                <div className='sign-up'>
                    You have an account? <Link to='/login'>Sign In</Link>
                </div>
                <div className='forgot-pass'>Forgot Password?</div>
            </div>
        </div>
    );
}

export default Register;
