import { Alert, Button } from '@mui/material';
import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import GoogleIcon from '@mui/icons-material/Google';
import Footer from "../../pages/Shared/Footer/Footer";
import styles from './Login.module.css';
import Navigation from '../../pages/Shared/Navigation/Navigation'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from '../../../api/axios.js';
import useAuth from '../../../hooks/useAuth';

const LOGIN_URL = '/api/auth/login';


const Login = () => {
    const { setAuth, auth, persist, setPersist } = useAuth();
    console.log(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const [loginData, setLoginData] = useState({})
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        // console.log(newLoginData);
    }

    useEffect(() => {
        setErrMsg('');
    }, [loginData.username, loginData.email, loginData.password])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({
                    username: loginData.username,
                    // email: loginData.email,
                    password: loginData.password,
                }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            // console.log(JSON.stringify(response?.data));
            const accessToken = response?.data?.accessToken;
            // console.log(accessToken)
            const roles = response?.data?.roles;
            // console.log(roles);
            setAuth({
                username: loginData.username,
                password: loginData.password,
                roles,
                accessToken,

            })
            setLoginData('');
            setSuccess(true);
            navigate(from, { replace: true });
        } catch (err) {
            // if (!err?.response) {
            //     setErrMsg('No Server Response');
            // } else if (err.response?.status === 400) {
            //     setErrMsg('Missing Username or Password');
            // } else if (err.response?.status === 401) {
            //     setErrMsg('Unauthorized');
            // } else if (err.response?.status === 404) {
            //     setErrMsg('User Not Found');
            // } else {
            //     setErrMsg('Login Failed');
            // }
            setErrMsg(err.message)
            // errRef.current.focus();
        }

    }

    const togglePersist = () => {
        setPersist(prev => !prev);
    }

    useEffect(() => {
        localStorage.setItem("persist", persist)
    }, [persist])

    return (
        <>
            <Navigation />

            {
                // success ? (
                //     <h1>Hello Login</h1>
                // ) :

                (
                    <Container className={ `${'my-5'} ${styles.body1}` }>
                        <div className={ `${styles.loginContainer}` }>
                            <div className={ `${styles.loginBox}` }>
                                <div className={ `${styles.left1}` }></div>
                                <div className={ `${styles.right1}` }>
                                    <h2>Login</h2>
                                    { errMsg ? <Alert severity="warning">{ errMsg }</Alert> : '' }
                                    { success ? <Alert severity="success">{ `Login successfull` }</Alert> : '' }
                                    <form onSubmit={ handleSubmit }>
                                        <input type="text"
                                            className={ `${styles.field}` }
                                            placeholder="Username "
                                            onChange={ handleOnChange }
                                            id="username"
                                            name="username" />
                                        <input
                                            type="password"
                                            className={ `${styles.field}` }
                                            placeholder="Password"
                                            onChange={ handleOnChange }
                                            id="password"
                                            name="password"
                                        />
                                        <Button type='submit' variant="contained" color="success">LogIn</Button>
                                        <div className='persistCheck'>
                                            <input
                                                type="checkbox"
                                                id="persist"
                                                onChange={ togglePersist }
                                                checked={ persist }
                                            />
                                            <label htmlFor="persist">Trust This Device</label>
                                        </div>
                                    </form>
                                    <br />
                                    <br />
                                    {/* <Button variant="contained" startIcon={ <GoogleIcon /> }>
                                Google SignIn
                            </Button> */}
                                    <br />
                                    <br />
                                    <Link to="/register"><Button variant="text" className={ `${styles.linkButton}` }>
                                        New User? Register Here
                                    </Button></Link>
                                    <hr />
                                </div>
                            </div>
                        </div>
                    </Container>
                ) }
            <Footer />
        </>
    );
};

export default Login;