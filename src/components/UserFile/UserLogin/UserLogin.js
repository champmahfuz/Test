import { Alert, Button, Container, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import styles from './UserLogin.module.css';
import Footer from '../../pages/Shared/Footer/Footer';
import auth from '../userfirebase.init';
import { useForm } from 'react-hook-form';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../pages/Shared/Loading/Loading';
import Navbarv2 from './Navbar/Navbarv2';
import useToken from '../../../hooks/useToken';

const UserLogin = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(user || gUser);

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    useEffect(() => {
        if (user || gUser) {
            console.log('user', user || 'gUser', gUser);
            navigate(from, { replace: true });
        }
    }, [user, gUser, from, navigate])

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    // if (user || gUser) {
    //     navigate(from, { replace: true })
    // }

    if (loading || gLoading) {
        return <Loading></Loading>
    }

    if (error || gError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }



    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);
    }

    return (
        <>
            {/* <Navbar /> */}
            <Navbarv2 />
            <Container className={`${'my-5'} ${styles.body1}`}>
                <div className={`${styles.loginContainer}`}>
                    <div className={`${styles.loginBox}`}>
                        <div className={`${styles.left1}`}></div>
                        <div className={`${styles.right1}`}>
                            <h2>Login</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* <input type="email" className={`${styles.field}`} placeholder="Your Email " /> */}
                                <input
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid Email'
                                        }
                                    })}
                                    type="email" className={`${styles.field}`} placeholder="Your Email " />
                                <Typography>
                                    {errors.email?.type === 'required' && <Alert severity="error">{errors.email.message}</Alert>}
                                    {errors.email?.type === 'pattern' && <Alert severity="error">{errors.email.message}</Alert>}
                                </Typography>
                                {/* 
                                <Alert variant="outlined" severity="error">
                                This is an error alert — check it out!
                                            </Alert>
                                 */}
                                {/* password */}
                                <p>Never share your password with anyone.</p>
                                <input
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characters or longer'
                                        }
                                    })}
                                    type="password" className={`${styles.field}`} placeholder="Password" />

                                <Typography>
                                    {errors.password?.type === 'required' && <Alert severity="error">{errors.password.message}</Alert>}
                                    {errors.password?.type === 'minLength' && <Alert severity="error">{errors.password.message}</Alert>}
                                </Typography>
                                {signInError}
                                <br />
                                <Button type="submit" value='Login' variant="contained" color="success">LogIn</Button>
                                <br />
                                <br />
                            </form>
                            <Button
                                onClick={() => signInWithGoogle()}
                                variant="contained" startIcon={<GoogleIcon />}>
                                Google SignIn
                            </Button>

                            <Link to="/account/signup"><Button variant="text" className={`${styles.linkButton}`}>
                                New User? Register Here
                            </Button></Link>
                            <hr />
                        </div>
                    </div>
                </div>
            </Container>
            {/* <Footer /> */}
        </>
    );
};

export default UserLogin;


