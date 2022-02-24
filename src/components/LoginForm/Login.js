import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../Redux/action/authAction';
import './style.css';

function Login() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [err, setErr] = useState('');
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
            await dispatch(login({ username, password }));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (authList.token) {
            navigate('/home');
        } else {
            setErr(alert);
        }
    }, [navigate, alert, err, authList.token]);

    return (
        <div className='login-container'>
            <div className='login-main'>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className='form-control'>
                        <input
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
                            type='password'
                            required={true}
                            placeholder='Enter Your Password'
                            onChange={handleChangePassword}
                        />
                        <small></small>
                        <span></span>
                    </div>
                    <button className='btn-submit' type='submit'>
                        Login
                    </button>
                </form>
                <div className='check-error'>
                    <span>{err}</span>
                </div>
                <div className='sign-up'>
                    Not a member? <Link to='/register'>Sign Up</Link>
                </div>
                <div className='forgot-pass'>Forgot Password?</div>
            </div>
        </div>
    );
}

export default Login;
