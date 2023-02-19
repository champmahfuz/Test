import { Alert, Box, Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import styles from './UserLogin.module.css';
import auth from '../userfirebase.init';
import { useForm } from 'react-hook-form';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../pages/Shared/Loading/Loading';
import useToken from '../../../hooks/useToken';

const LoginPopupComponent = () => {

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
    // let from = location.state?.from?.pathname || '/';

    useEffect(() => {
        if (user || gUser) {
            // console.log('user', user || 'gUser', gUser);
            // navigate(from, { replace: true });
        }
    }, [user, gUser,])


    if (loading || gLoading) {
        return <Loading></Loading>
    }

    if (error || gError) {
        signInError = <p className='text-red-500'><small>{ error?.message || gError?.message }</small></p>
    }



    const onSubmit = async (data, e) => {
        e.preventDefault();
        console.log(data);
        await signInWithEmailAndPassword(data.email, data.password);
    }


    return (
        <div style={ {} }>
            <Grid container spacing={ 0 } sx={ { my: 0, display: 'flex', justifyContent: 'center' } } >
                <Grid item sx={ { maxWidth: '320px' } }>
                    <Grid container spacing={ 2 } sx={ { my: 1 } }>
                        <Grid item xs={ 6 } >
                            <Button fullWidth>Login</Button>
                        </Grid>
                        <Grid item xs={ 6 } >
                            <Button fullWidth>Registration</Button>
                        </Grid>
                    </Grid>
                    <div >

                        <input
                            { ...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                }
                            }) }
                            type="email" className={ `${styles.field}` } placeholder="Your Email " />
                        <Typography>
                            { errors.email?.type === 'required' && <Alert severity="error">{ errors.email.message }</Alert> }
                            { errors.email?.type === 'pattern' && <Alert severity="error">{ errors.email.message }</Alert> }
                        </Typography>
                        <p>Never share your the password.</p>
                        <input
                            { ...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 characters or longer'
                                }
                            }) }
                            type="password" className={ `${styles.field}` } placeholder="Password" />

                        <Typography>
                            { errors.password?.type === 'required' && <Alert severity="error">{ errors.password.message }</Alert> }
                            { errors.password?.type === 'minLength' && <Alert severity="error">{ errors.password.message }</Alert> }
                        </Typography>
                        { signInError }
                        <br />
                        <Button onClick={ handleSubmit(onSubmit) } value='Login' variant="contained" color="success">LogIn</Button>
                        <br />
                        <br />
                        <Button
                            onClick={ () => signInWithGoogle() }
                            variant="contained" startIcon={ <GoogleIcon /> }>
                            Google SignIn
                        </Button>
                    </div>

                    <Resister />
                </Grid>

            </Grid>
        </div>
    );
};





export default LoginPopupComponent;


export const Resister = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [token] = useToken(user || gUser?.user?.email);

    const navigate = useNavigate();

    let signInError;

    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }

    if (error || gError || updateError) {
        signInError = <p className='text-red-500'><small>{ error?.message || gError?.message || updateError?.message }</small></p>
    }

    // if (user || gUser) {
    //     console.log(user || gUser);
    // }

    if (token) {
        // navigate('/');
        console.log(token)
    }


    const onSubmit = async data => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        console.log('Done!');

    }

    return (
        <div >

            <div onSubmit={ handleSubmit(onSubmit) }>
                <input
                    { ...register("name", {
                        required: {
                            value: true,
                            message: 'Name is required'
                        }
                    }) }
                    type="text" className={ `${styles.field}` } placeholder="Name" />

                <Typography sx={ { mb: '5px' } }>
                    { errors.name?.type === 'required' && <Alert severity="error">{ errors.name.message }</Alert> }
                </Typography>

                {/* Email */ }
                <input
                    { ...register("email", {
                        required: {
                            value: true,
                            message: 'Email is required'
                        },
                        pattern: {
                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                            message: 'Provide a valid Email'
                        }
                    }) }
                    type="email" className={ `${styles.field}` } placeholder="Your Email " />

                <Typography sx={ { mb: '5px' } }>
                    { errors.email?.type === 'required' && <Alert severity="error">{ errors.email.message }</Alert> }
                    { errors.email?.type === 'pattern' && <Alert severity="error">{ errors.email.message }</Alert> }
                </Typography>

                {/* password */ }
                <input
                    { ...register("password", {
                        required: {
                            value: true,
                            message: 'Password is required'
                        },
                        minLength: {
                            value: 6,
                            message: 'Must be 6 characters or longer'
                        }
                    }) }
                    type="password" className={ `${styles.field}` } placeholder="Your Password " />

                <Typography sx={ { mb: '5px' } }>
                    { errors.password?.type === 'required' && <Alert severity="error">{ errors.password.message }</Alert> }
                    { errors.password?.type === 'minLength' && <Alert severity="error">{ errors.password.message }</Alert> }
                </Typography>
                { signInError }

                <Button onClick={ handleSubmit(onSubmit) } value='Login' variant="contained" color="success">REGISTER</Button>

            </div>
        </div>
    )
}