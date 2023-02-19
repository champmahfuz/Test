import React, { useRef } from 'react';
import { Container } from "react-bootstrap";
import styles from './Email.module.css';
import emailjs from '@emailjs/browser';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';

const Email = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_777njg4',
            'template_u1phawe',
            form.current,
            'sr2_74t6m4C0OFOhd')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset('');
    };

    return (
        <>
            <Navigation />
            <Container className="my-5">
                <form ref={ form } onSubmit={ sendEmail }>
                    <div className={ `${styles.contactContainer}` }>
                        <div className={ `${styles.contactBox}` }>
                            <div className={ `${styles.left1}` }></div>
                            <div className={ `${styles.right1}` }>
                                <h2>Contact Us</h2>
                                <input type="text" className={ `${styles.field}` } placeholder="Your Name " name="name" />
                                <input type="email" className={ `${styles.field}` } placeholder="Your Email " name="email" />
                                <input type="text" className={ `${styles.field}` } placeholder="Phone" name="phone" />
                                <textarea placeholder="Message" name="subject" className={ `${styles.field}` }></textarea>
                                <button className={ `${styles.btn1}` }>Send</button>
                            </div>
                        </div>
                    </div>
                </form>
            </Container>
            <Footer />
        </>
    );
};

export default Email;