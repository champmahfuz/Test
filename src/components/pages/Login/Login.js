import { Button } from '@mui/material';
import React from 'react';
import { Container } from "react-bootstrap";
import GoogleIcon from '@mui/icons-material/Google';
import Footer from "../Shared/Footer/Footer";
import styles from './Login.module.css';
import Navigation from '../Shared/Navigation/Navigation'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <Navigation />
            <Container className={ `${'my-5'} ${styles.body1}` }>
                <div className={ `${styles.loginContainer}` }>
                    <div className={ `${styles.loginBox}` }>
                        <div className={ `${styles.left1}` }></div>
                        <div className={ `${styles.right1}` }>
                            <h2>Login</h2>
                            <input type="email" className={ `${styles.field}` } placeholder="Your Email " />
                            <p>We'll never share your email with anyone else.</p>
                            <input type="password" className={ `${styles.field}` } placeholder="Password" />
                            <Button variant="contained" color="success">LogIn</Button>
                            <br />
                            <br />
                            <Button variant="contained" startIcon={ <GoogleIcon /> }>
                                Google SignIn
                            </Button>
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
            <Footer />
        </>
    );
};

export default Login;