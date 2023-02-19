import { Box, Button, Container, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, Typography } from '@mui/material';
import styles from './ManageAddTravellerList.module.css';
import AddBoxIcon from '@mui/icons-material/AddBox';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from '../../../../../api/axios';
import { useState } from 'react';
const ManageAddTravellerList = (travellerIndex, input, handleFormChange, setPassengerPhoneNumber, passengerPhoneNumber) => {
    const PASSENGER_URL = '/api/passenger'

    const [travellerDataList, setTravellerDataList] = React.useState(
        {
            code: 'BD',
            label: 'Bangladesh',
            phone: '880'
        }
    );

    const [passengerCountry, setPassengerCountry] = useState({
        code: 'BD',
        label: 'Bangladesh',
        phone: '880'
    })

    const handleSubmit = async (event) => {
        const formData = new FormData();
        formData.append('phoneNumber', passengerPhoneNumber.phone);

        console.log(formData, 123);
        event.preventDefault();
        alert("TEST")
        try {

            const response = await axios.post(PASSENGER_URL,
                formData,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                    withCredentials: true
                }
            );

            console.log(response?.data);
        } catch (err) {
            console.log(err?.response)

            // errRef.current.focus();
        }

    }


    const {
        register,
        formState: { errors },
    } = useForm();

    const [passengerType, setPassengerType] = React.useState('Adult');
    const [passengerGender, setPassengerGender] = React.useState('male');
    const [passengerTitle, setPassengerTitle] = React.useState('MR');

    // console.log(passengerType, passengerGender, passengerTitle)
    return (
        <Container sx={{ width: "100%", mb: 5 }}>
            <Box className={`${styles.topContainer}`} sx={{ display: "flex", my: 3 }}>
                <Typography>
                    <AddBoxIcon className={`${styles.assignmentIcon}`} />{" "}
                </Typography>
                <Typography>
                    <span style={{ fontSize: "26px" }}>
                        Traveller Form
                    </span>{" "}
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
                    <i className="fas fa-address-book"></i> Basic Info
                </Typography>
                <hr />
                <div className="mt-2">
                    <div className="form-container">
                        <div>
                            <form>
                                <div className="row gx-3 ">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="p-3 ">
                                            <div className="mb-3">
                                                <label
                                                    className="form-label"
                                                >
                                                    First Name{" "}
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                // placeholder="First Name"

                                                />


                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="p-3 ">
                                            <div className="mb-3">
                                                <label
                                                    className="form-label"
                                                // style={{ fontWeight: "bold" }}
                                                >
                                                    Last Name{" "}
                                                    {/* <sup className="text-danger fw-bold fs-6">*</sup> */}
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"

                                                // style={{ background: "#E5E5E5" }}

                                                />

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row gx-3 ">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="p-3 ">
                                            <div className="mb-3">
                                                <label
                                                    className="form-label"
                                                >
                                                    Email{" "}

                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"


                                                />


                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="p-3 ">
                                            <div className="mb-3">
                                                <label
                                                    className="form-label"

                                                >
                                                    Phone{" "}

                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"

                                                />
                                            </div>
                                            {/* <MuiPhoneNumber
                                                defaultCountry={'bd'}
                                                variant="outlined"
                                                sx={{ width: '100%' }}
                                                label="Phone Number"
                                            onChange={value => setPassengerPhoneNumber(value)}
                                            /> */}
                                        </div>
                                    </div>
                                </div>

                                <div className="row gx-3 ">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="p-3 ">
                                            <div className="mb-3">
                                                <label
                                                    className="form-label"
                                                >
                                                    Date{" "}

                                                </label>
                                                <input
                                                    type="Date"
                                                    className="form-control"
                                                    placeholder="Date"

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
                                        <div className="p-3">
                                            <div className="mb-3">
                                                <label
                                                    className="form-label"

                                                >
                                                    Passenger Type
                                                </label>
                                                <select
                                                    className="form-select"
                                                    id="demo-simple-select"
                                                    value={passengerType}
                                                    label="Passenger Type"
                                                    aria-label="Default select example"
                                                    onChange={event => setPassengerType(event.target.value)}

                                                >

                                                    <option value={`Adult`}>Adult</option>
                                                    <option value={`Child`}>Child (2y-12y)</option>
                                                    <option value={`Infant`}>Infant (Bellow 2y)</option>
                                                </select>


                                            </div>

                                            {/* <InputLabel id="passengerType">passengerType</InputLabel>
                                            <Select
                                                labelId="passengerType"
                                                id="demo-simple-select"
                                                value={passengerType}
                                                label="Passenger Type"
                                                onChange={event => setPassengerType(event.target.value)}
                                            >
                                                <MenuItem value={`Adult`}>Adult</MenuItem>
                                                <MenuItem value={`Child`}>Child (2y-11y)</MenuItem>
                                                <MenuItem value={'Infant'}>Infant (Below 2y)</MenuItem>
                                            </Select> */}

                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="p-3  ">
                                            {/* Gender */}
                                            <FormLabel id="Gender-label">Gender</FormLabel>
                                            <RadioGroup
                                                row
                                                aria-labelledby="Gender-label"
                                                // defaultValue="female"
                                                value={passengerGender}
                                                name="Gender"
                                                onChange={event => setPassengerGender(event.target.value)}
                                            >
                                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                                <FormControlLabel value="female" control={<Radio />} label="Female" />

                                            </RadioGroup>
                                            <br></br>
                                            {/* Title */}
                                            {/* passengerTitle, setPassengerTitle */}
                                            <FormLabel id="Gender-label">Title</FormLabel>
                                            <RadioGroup
                                                row
                                                aria-labelledby="Title-label"
                                                // defaultValue="female"
                                                value={passengerTitle || 'male'}
                                                name="Title"
                                                onChange={event => setPassengerTitle(event.target.value)}
                                            >
                                                {
                                                    passengerType === 'Adult' && passengerGender === 'male' ? <FormControlLabel value="MR" control={<Radio />} label="MR" /> :
                                                        passengerType === 'Adult' && passengerGender === 'female' ? <>
                                                            <FormControlLabel value="MS" control={<Radio />} label="MS" />
                                                            <FormControlLabel value="MRS" control={<Radio />} label="MRS" />
                                                        </> :
                                                            // Child male MR
                                                            passengerType === 'Child' && passengerGender === 'male' ? <FormControlLabel value="Mister" control={<Radio />} label="Mister" /> :
                                                                passengerType === 'Child' && passengerGender === 'female' ? <FormControlLabel value="Miss" control={<Radio />} label="Miss" /> :
                                                                    passengerType === 'Infant' && passengerGender === 'male' ?
                                                                        <FormControlLabel value="MSTR" control={<Radio />} label="Mister" /> :
                                                                        passengerType === 'Infant' && passengerGender === 'female' ?
                                                                            <FormControlLabel value="Miss" control={<Radio />} label="Miss" /> : 'Something went to wrong!'

                                                }


                                            </RadioGroup>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="p-3 " style={{ marginTop: '20px' }}>
                                            <div >
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
            </Box>
        </Container>
    );
};

export default ManageAddTravellerList;