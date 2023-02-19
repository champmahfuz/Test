import { Box, Button, Checkbox, Container, FormControlLabel, Typography } from '@mui/material';
import React from 'react';
import AssignmentIcon from "@mui/icons-material/Assignment";
import styles from './EditProfileList.module.css';
import { NavLink } from 'react-router-dom';
import { CheckBox } from '@mui/icons-material';
import { useForm } from 'react-hook-form';

const EditProfileList = () => {

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
                    <span style={{ fontSize: "26px" }}>
                        Edit Profile
                    </span>{" "}
                    <br /> <span style={{ color: "#969494" }}>Basic Info</span>
                </Typography>
            </Box>

            <Box sx={{ textAlign: "right", my: 2 }}>
                <NavLink
                    to="/dashboard/profile"
                    style={{ textDecoration: "none" }}
                >
                    <Button className={`${styles.manageEmployeeBtn}`}>
                        My Profile
                    </Button>
                </NavLink>
            </Box>
            <Box className={`${styles.tableContainer}`}>
                <Typography sx={{ fontWeight: "bold", textAlign: "left" }}>
                    {" "}
                    <i class="fas fa-address-book"></i> Basic Info
                </Typography>
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
                                                    First Name{" "}
                                                    <sup className="text-danger fw-bold fs-6">*</sup>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="First Name"
                                                    style={{ background: "#E5E5E5" }}
                                                />


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
                                                    Last Name{" "}
                                                    <sup className="text-danger fw-bold fs-6">*</sup>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Last Name"
                                                    style={{ background: "#E5E5E5" }}

                                                />

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row gx-3 mb-3">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="p-3 border bg-light">
                                            <div className="mb-3">
                                                <label
                                                    className="form-label"
                                                    style={{ fontWeight: "bold" }}
                                                >
                                                    Material Status{""}
                                                    <sup className="text-danger fw-bold fs-6">*</sup>
                                                </label>
                                                <select
                                                    className="form-select"
                                                    id="demo-simple-select"
                                                    label="Passenger Type"
                                                    aria-label="Default select example"
                                                    style={{ background: "#E5E5E5" }}


                                                >

                                                    <option value={`Adult`}>Please Enter your material status</option>
                                                    <option value={`Islam`}>Single</option>
                                                    <option value={`Hindhu`}>Married</option>
                                                    <option value={`Hindhu`}>Divorced</option>
                                                    <option value={`Others`}>Others</option>
                                                </select>


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
                                                    Gender{""}
                                                    <sup className="text-danger fw-bold fs-6">*</sup>
                                                </label>
                                                <select
                                                    className="form-select"
                                                    id="demo-simple-select"
                                                    label="Passenger Type"
                                                    aria-label="Default select example"
                                                    style={{ background: "#E5E5E5" }}
                                                >

                                                    <option value={`Adult`}>Please Enter your gender</option>
                                                    <option value={`Male`}>Male</option>
                                                    <option value={`Female`}>Female</option>
                                                    <option value={`Others`}>Others</option>
                                                </select>


                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row gx-3 mb-3">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="p-3 border bg-light">
                                            <div className="mb-3">
                                                <label
                                                    className="form-label"
                                                    style={{ fontWeight: "bold" }}
                                                >
                                                    Date of Birth{" "}
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
                                                    National Id{" "}
                                                    <sup className="text-danger fw-bold fs-6">*</sup>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Last Name"
                                                    style={{ background: "#E5E5E5" }}

                                                />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Typography sx={{ fontWeight: "bold", textAlign: "left" }}>
                                    {" "}
                                    <i class="fas fa-address-book"></i> Address
                                </Typography>
                                <br />
                                <Typography sx={{ fontWeight: "bold", textAlign: "left" }}>
                                    {" "}
                                    Present Address
                                </Typography>
                                <hr />
                                <div className="row gx-3 mb-3">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="p-3 border bg-light">
                                            <div className="mb-3">
                                                <label
                                                    className="form-label"
                                                    style={{ fontWeight: "bold" }}
                                                >
                                                    House Number{" "}
                                                    <sup className="text-danger fw-bold fs-6">*</sup>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="House Number"
                                                    style={{ background: "#E5E5E5" }}

                                                />

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
                                                    Phone{" "}
                                                    <sup className="text-danger fw-bold fs-6">*</sup>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Phone"
                                                    style={{ background: "#E5E5E5" }}

                                                />

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row gx-3 mb-3">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="p-3 border bg-light">
                                            <div className="mb-3">
                                                <label
                                                    className="form-label"
                                                    style={{ fontWeight: "bold" }}
                                                >
                                                    City
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="City"
                                                    style={{ background: "#E5E5E5" }}

                                                />
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
                                                    Zip
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Zip"
                                                    style={{ background: "#E5E5E5" }}
                                                // {...register("zip", { required: false })}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* premanent address */}

                                <Typography sx={{ fontWeight: "bold", textAlign: "left" }}>
                                    {" "}
                                    Permanent Address
                                </Typography>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Same as present address" />
                                <hr />
                                <div className="row gx-3 mb-3">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="p-3 border bg-light">
                                            <div className="mb-3">
                                                <label
                                                    className="form-label"
                                                    style={{ fontWeight: "bold" }}
                                                >
                                                    House Number{" "}
                                                    <sup className="text-danger fw-bold fs-6">*</sup>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Email"
                                                    style={{ background: "#E5E5E5" }}

                                                />

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
                                                    Phone{" "}
                                                    <sup className="text-danger fw-bold fs-6">*</sup>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Phone"
                                                    style={{ background: "#E5E5E5" }}

                                                />

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row gx-3 mb-3">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="p-3 border bg-light">
                                            <div className="mb-3">
                                                <label
                                                    className="form-label"
                                                    style={{ fontWeight: "bold" }}
                                                >
                                                    City
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="City"
                                                    style={{ background: "#E5E5E5" }}

                                                />
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
                                                    Zip
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Zip"
                                                    style={{ background: "#E5E5E5" }}
                                                // {...register("zip", { required: false })}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Typography sx={{ fontWeight: "bold", textAlign: "left" }}>
                                    {" "}
                                    Passport Information
                                </Typography>

                                <hr />
                                <div className="row gx-3 mb-3">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="p-3 border bg-light">
                                            <div className="mb-3">
                                                <label
                                                    className="form-label"
                                                    style={{ fontWeight: "bold" }}
                                                >
                                                    Passport Number{" "}
                                                    <sup className="text-danger fw-bold fs-6">*</sup>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Passport Number"
                                                    style={{ background: "#E5E5E5" }}

                                                />

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
                                                    Passport Expiry Date{" "}
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
                                </div>

                                <Typography sx={{ fontWeight: "bold", textAlign: "left" }}>
                                    {" "}
                                    Others
                                </Typography>

                                <hr />
                                <div className="row gx-3 mb-3">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="p-3 border bg-light">
                                            <div className="mb-3">
                                                <label
                                                    className="form-label"
                                                    style={{ fontWeight: "bold" }}
                                                >
                                                    Religion{""}
                                                    <sup className="text-danger fw-bold fs-6">*</sup>
                                                </label>
                                                <select
                                                    className="form-select"
                                                    id="demo-simple-select"
                                                    label="Passenger Type"
                                                    aria-label="Default select example"
                                                    style={{ background: "#E5E5E5" }}


                                                >

                                                    <option value={`Adult`}>Please Enter a Religion</option>
                                                    <option value={`Islam`}>Islam</option>
                                                    <option value={`Hindhu`}>Hindhu</option>
                                                    <option value={`Hindhu`}>Hindhu</option>
                                                    <option value={`Christians`}>Christians</option>
                                                    <option value={`Others`}>Others</option>
                                                </select>


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
                                                    Preferred Language{" "}
                                                    <sup className="text-danger fw-bold fs-6">*</sup>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Preferred Language"
                                                    style={{ background: "#E5E5E5" }}

                                                />

                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="row gx-3 mb-3">
                                    <Typography sx={{ fontWeight: "bold", textAlign: "left" }}>
                                        {" "}
                                        Others
                                    </Typography>

                                    <hr />
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="p-3 border bg-light">
                                            <div className="mb-3">
                                                <label
                                                    className="form-label"
                                                    style={{ fontWeight: "bold" }}
                                                >
                                                    Emergency Contact{" "}
                                                    <sup className="text-danger fw-bold fs-6">*</sup>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Emergency Contact"
                                                    style={{ background: "#E5E5E5" }}

                                                />

                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-1 ">
                                        <div className="p-3  ">
                                            <div>
                                                <Box sx={{ textAlign: "center", my: 4 }}>
                                                    <input
                                                        type="reset"
                                                        className={`${"btn"} ${styles.resetBtn}`}
                                                        style={{ background: "#251D58", color: "#fff" }}
                                                        value="Reset"
                                                    />
                                                    <input
                                                        type="submit"
                                                        className={`${"btn"} ${styles.saveBtn}`}
                                                        style={{ background: "#251D58", color: "#fff" }}
                                                        value="Save"
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
            </Box >
        </Container >
    );
};

export default EditProfileList;