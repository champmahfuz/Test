// import React, { useRef, useState } from 'react';
// import { Button, Container, Form } from 'react-bootstrap';
// import { Rating } from 'react-simple-star-rating';
// import useAuth from '../../../../hooks/useAuth';

// const ReviewList = () => {
//     const { user } = useAuth();
//     // const initialInfo = { customerName: user.displayName, email: user.email }
//     const [rating, setRating] = useState(0) // initial rating value
//     // const [review, setReview] = useState(initialInfo);
//     const reviewRef = useRef();

//     return (
//         <Container style={{ marginTop: '100px' }}>
//             <Form>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">

//                     <Form.Control type="email" name="email" readOnly placeholder="Enter email" />

//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">

//                     <Form.Control type="email" name="email" readOnly placeholder="Enter email" />

//                 </Form.Group>
//                 <Form.Group className="mb-3" controlId="">
//                     <Form.Label>Write Something</Form.Label>
//                     <Form.Control as="textarea"
//                         placeholder="comment here"
//                         style={{ height: '100px' }} ref={reviewRef} type="text" />
//                 </Form.Group>
//                 <div className='App'>
//                     <Rating ratingValue={rating} /* Rating Props */ />
//                 </div>
//                 <Button variant="primary" type="submit" value="Add">
//                     Submite Review
//                 </Button>
//             </Form>
//         </Container>
//     );
// };

// export default ReviewList;


import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import AssignmentIcon from "@mui/icons-material/Assignment";
import styles from './ReviewList.module.css';
import { NavLink } from 'react-router-dom';
import { Rating } from 'react-simple-star-rating';

const ReviewList = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    return (
        <Container sx={{ width: "100%", mb: 5 }}>
            <Box className={`${styles.topContainer}`} sx={{ display: "flex", my: 3 }}>
                <Typography>
                    <AssignmentIcon className={`${styles.assignmentIcon}`} />{" "}
                </Typography>
                <Typography>
                    <span style={{ fontSize: "26px" }}>Review</span> <br />
                    <span style={{ color: "#969494" }}>User Review</span>
                </Typography>
            </Box>
            <br />
            <Box className={`${styles.tableContainer}`}>
                <Typography sx={{ fontWeight: "bold", textAlign: 'start', marginLeft: '6px' }}>Your Review</Typography>
                <hr />
                <div className="mt-2">
                    <div className="form-container">
                        <div>
                            <form >
                                <div className="row gx-3 mb-3">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="p-3 border bg-light">
                                            <div className="mb-3">
                                                <label
                                                    className="form-label"
                                                    style={{ fontWeight: "bold" }}
                                                >
                                                    Name{" "}
                                                    <sup className="text-danger fw-bold fs-6">*</sup>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Name"
                                                    style={{ background: "#E5E5E5" }}
                                                />
                                                {/* {errors.firstName && (
                                                    <span className="text-danger">
                                                        Please enter first name.
                                                    </span>
                                                )} */}

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="p-3 border bg-light">
                                            <div className="mb-3">
                                                <label
                                                    className="form-label"
                                                    style={{ fontWeight: "bold" }}
                                                >
                                                    Email{" "}
                                                    <sup className="text-danger fw-bold fs-6">*</sup>
                                                </label>
                                                {/* <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Email"
                                                    style={{ background: "#E5E5E5" }}
                                                /> */}
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
                                                    type="email" className="form-control" style={{ background: "#E5E5E5" }} placeholder="Your Email " />
                                                {/* {errors.firstName && (
                                                    <span className="text-danger">
                                                        Please enter first name.
                                                    </span>
                                                )} */}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* This is review list */}
                                <div className="row gx-3 mb-3">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="p-3 border bg-light">
                                            <div className="mb-3">
                                                <label
                                                    className="form-label"
                                                    style={{ fontWeight: "bold" }}
                                                >
                                                    Date{" "}
                                                    <sup className="text-danger fw-bold fs-6">*</sup>
                                                </label>
                                                <input
                                                    type="Date"
                                                    className="form-control"
                                                    placeholder="Date"
                                                    style={{ background: "#E5E5E5" }}
                                                    {...register("date", { required: true })}
                                                />
                                                {errors.phone && (
                                                    <span className="text-danger">
                                                        Please enter A Date.
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="p-3 border bg-light">
                                            <div className="mb-3">
                                                <label
                                                    className="form-label"
                                                    style={{ fontWeight: "bold" }}
                                                >
                                                    Write Something
                                                </label>
                                                <textarea
                                                    className="form-control"
                                                    rows="1"
                                                    placeholder="Write Here"
                                                    style={{ background: "#E5E5E5" }}
                                                    {...register("details", { required: false })}
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row gx-3 mb-3">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-12 mt-1">
                                        <div className="p-3">
                                            <div>
                                                <Box sx={{ textAlign: "center" }}>
                                                    <Rating  /* Rating Props */ />
                                                </Box>
                                            </div>
                                            <br />
                                            <div>
                                                <Box sx={{ textAlign: "center" }}>
                                                    <input
                                                        type="submit"
                                                        className={`${"btn"} ${styles.saveBtn}`}
                                                        style={{ background: "#251D58", color: "#fff" }}
                                                        value="Save"
                                                    />
                                                    <input
                                                        type="reset"
                                                        className={`${"btn"} ${styles.resetBtn}`}
                                                        style={{ background: "#251D58", color: "#fff" }}
                                                        value="Reset"
                                                    />
                                                </Box>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Box>
        </Container>
    );
};

export default ReviewList;