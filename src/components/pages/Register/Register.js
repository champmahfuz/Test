import { Button } from '@mui/material';
import React from 'react';
import { Container } from "react-bootstrap";
import Footer from "../Shared/Footer/Footer";
import styles from './Register.module.css';
import Navigation from '../Shared/Navigation/Navigation'
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <>
            <Navigation />
            <Container className={ `${'my-5'} ${styles.body1}` }>
                <div className={ `${styles.registerContainer}` }>
                    <div className={ `${styles.registerBox}` }>
                        <div className={ `${styles.left1}` }></div>
                        <div className={ `${styles.right1}` }>
                            <h2>Register</h2>
                            <input type="email" className={ `${styles.field}` } placeholder="Your Name " />
                            <input type="email" className={ `${styles.field}` } placeholder="Your Email " />
                            <p>We'll never share your email with anyone else.</p>
                            <input type="password" className={ `${styles.field}` } placeholder="Password" />
                            <input type="password" className={ `${styles.field}` } placeholder="Re-type your Password" />
                            <Button variant="contained" color="success">Register</Button>
                            <br />
                            <br />
                            <Link to="/login"><Button variant="text" className={ `${styles.linkButton}` }>
                                Already Register?Please Login
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

export default Register;