import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../pages/Shared/Loading/Loading';
import auth from '../userfirebase.init';
import styles from './UserRegister.module.css';
import { Alert, Button, Container, Typography } from '@mui/material';
import useToken from '../../../hooks/useToken';
import Navbarv2 from '../UserLogin/Navbar/Navbarv2';
const UserRegister = () => {
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

    // const location = useLocation();
    // let from = location.state?.from?.pathname || '/';

    // useEffect(() => {
    //     if (user || gUser) {
    //         // console.log(user || gUser);
    //         navigate(from, { replace: true });
    //     }
    // }, [user, gUser, from, navigate])

    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }

    if (error || gError || updateError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message || updateError?.message}</small></p>
    }

    // if (user || gUser) {
    //     console.log(user || gUser);
    // }

    if (token) {
        navigate('/');
    }


    const onSubmit = async data => {
        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        console.log('Done!');

    }

    //Retype Password
    // const [loginData, setLoginData] = useState({});
    // const { registerUser, isLoading, authError } = useAuth();
    // const handleOnBlur = e => {
    //     const field = e.target.name;
    //     const value = e.target.value;
    //     const newLoginData = { ...loginData };
    //     newLoginData[field] = value;
    //     setLoginData(newLoginData);
    // }
    // const handleLoginSubmit = e => {
    //     if (loginData.password !== loginData.password2) {
    //         alert('Your password did not match')


    //         return
    //     }
    //     registerUser(loginData.email, loginData.password, loginData.name, navigate);
    //     e.preventDefault();
    // }


    return (
        <>
            <Navbarv2 />
            <Container className={`${'my-5'} ${styles.body1}`}>
                <div className={`${styles.registerContainer}`}>
                    <div className={`${styles.registerBox}`}>
                        <div className={`${styles.left1}`}></div>
                        <div className={`${styles.right1}`}>
                            <h2>Register</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is required'
                                        }
                                    })}
                                    type="text" className={`${styles.field}`} placeholder="Name" />

                                <Typography sx={{ mb: '5px' }}>
                                    {errors.name?.type === 'required' && <Alert severity="error">{errors.name.message}</Alert>}
                                </Typography>

                                {/* Email */}
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

                                <Typography sx={{ mb: '5px' }}>
                                    {errors.email?.type === 'required' && <Alert severity="error">{errors.email.message}</Alert>}
                                    {errors.email?.type === 'pattern' && <Alert severity="error">{errors.email.message}</Alert>}
                                </Typography>

                                {/* password */}
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
                                    type="password" className={`${styles.field}`} placeholder="Your Password " />

                                <Typography sx={{ mb: '5px' }}>
                                    {errors.password?.type === 'required' && <Alert severity="error">{errors.password.message}</Alert>}
                                    {errors.password?.type === 'minLength' && <Alert severity="error">{errors.password.message}</Alert>}
                                </Typography>
                                {signInError}

                                <Button sx={{ mt: '20px' }} type="submit" value='Register' variant="contained" color="success">Register</Button>

                            </form>
                            <br />
                            {/* <Button
                                onClick={() => signInWithGoogle()}
                                variant="contained" startIcon={<GoogleIcon />}>
                                Google SignIn
                            </Button> */}
                            <Link to="/account/signin"><Button variant="text" className={`${styles.linkButton}`}>
                                Already register?Please Login
                            </Button></Link>
                            <hr />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};


export default UserRegister;

