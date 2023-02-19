import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';
const NotFound = () => {
    return (
        <>
            <div className={`${styles.container} ${styles.nfbody}`}>
                <div>
                    <h2>Oops! Page not found.</h2>
                    <h1>404</h1>
                    <p>We can't find the page you're looking for.</p>
                    <Link to='/home'>Go back home</Link>
                    {/* <a href="https://www.youtube.com">Go back home</a> */}
                    {/* <Link className={`${styles.redirUrl}`} to="/home">Go back home</Link> */}
                    {/* <p>Visit <Link to="/home" className={`${styles.redirUrl}`}>Home</Link> until the problem is resolved.</p> */}
                </div>
            </div>
        </>
    );
};

export default NotFound;