import { Avatar, Button, Container, Grid, IconButton, TableCell, TableRow, TextField, Tooltip, Typography } from '@mui/material';
import React from 'react';
import img from '../../../../assets/img/no image.jpg';
import EditIcon from "@mui/icons-material/Edit";
import { Box } from '@mui/system';
import styles from './ManageProfileList.module.css';
import AssignmentIcon from "@mui/icons-material/Assignment";
import AddIcon from '@mui/icons-material/Add';
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import HikingIcon from '@mui/icons-material/Hiking';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../UserFile/userfirebase.init';
import Loading from '../../Shared/Loading/Loading';

const ManageProfileList = () => {
    const [user, loading] = useAuthState(auth);
    // const initialInfo = { travellerName: user?.displayName,email: user.email, phone: ''}
    // const [bookingInfo, setBookingInfo] = useState(initialInfo);
    // const handleOnBlur = e => {
    //     const field = e.target.name;
    //     const value = e.target.value;
    //     const newInfo = { ...bookingInfo };
    //     newInfo[field] = value;
    //     setBookingInfo(newInfo);
    // }

    if (loading) {
        return <Loading></Loading>
    }
    return (

        <Container >
            {/* Profile */}
            <Box className={`${styles.topContainer}`} sx={{ display: "flex", my: 3 }}>
                <Typography>
                    <AssignmentIcon className={`${styles.assignmentIcon}`} />{" "}
                </Typography>
                <Typography>
                    <span style={{ fontSize: "26px" }}>My Profile</span> <br />{" "}
                    {/* <span style={{ color: "#969494" }}>Basic info, for a faster booking experience</span> */}
                </Typography>
            </Box>
            <Link to='/dashboard/EditProfile'>
                <Box sx={{ textAlign: "right", my: 2 }}>
                    <Button startIcon={<EditIcon />} className={`${styles.addEmployeeBtn}`}>Edit</Button>
                </Box>
            </Link>
            <Box sx={{ mb: '40px' }} className={`${styles.tableContainer}`}>
                <Typography sx={{ fontSize: '25px', fontWeight: 'bold' }}>Profile</Typography>
                <p>Basic info, for a faster booking experience</p>
                <Grid container spacing={2}>
                    <Grid sx={{ mt: 5 }} item xs={12} md={6}>
                        <form  >
                            <TextField
                                sx={{ width: '100%', m: 1 }}
                                id="standard-basic"
                                label="Your Name"
                                name="travellerName"
                                // onBlur={handleOnBlur}
                                defaultValue={user?.displayName}
                                variant="standard"
                            ></TextField>
                            {/* <Typography>{user?.displayName}</Typography> */}
                            <TextField
                                sx={{ width: '100%', m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                name="name"
                                defaultValue={user?.email}
                                variant="standard" />
                            <TextField
                                sx={{ width: '100%', m: 1 }}
                                id="standard-basic"
                                label="Your Address"
                                type="text"
                                name="text"
                                variant="standard" />
                            <TextField
                                sx={{ width: '100%', m: 1 }}
                                id="standard-basic"
                                label="Your Gender"
                                type="text"
                                name="text"
                                variant="standard" />
                            <TextField
                                sx={{ width: '100%', m: 1 }}
                                id="standard-basic"
                                label="Material Status"
                                type="text"
                                name="text"
                                variant="standard" />
                            <TextField
                                sx={{ width: '100%', m: 1 }}
                                id="standard-basic"
                                label="Date Of Birth"
                                type="text"
                                name="text"
                                variant="standard" />
                            <TextField
                                sx={{ width: '100%', m: 1 }}
                                id="standard-basic"
                                label="Passport Number"
                                type="text"
                                name="text"
                                variant="standard" />
                            <TextField
                                sx={{ width: '100%', m: 1 }}
                                id="standard-basic"
                                label="Passport Expiry Date"
                                type="text"
                                name="text"
                                variant="standard" />
                            <TextField
                                sx={{ width: '100%', m: 1 }}
                                id="standard-basic"
                                label="National Id Number"
                                type="text"
                                name="text"
                                variant="standard" />
                            <TextField
                                sx={{ width: '100%', m: 1 }}
                                id="standard-basic"
                                label="Emergency Contact"
                                type="text"
                                name="text"
                                variant="standard" />
                            <TextField
                                sx={{ width: '100%', m: 1 }}
                                id="standard-basic"
                                label="Religion"
                                type="text"
                                name="text"
                                variant="standard" />
                            <TextField
                                sx={{ width: '100%', m: 1 }}
                                id="standard-basic"
                                label="Language Preference"
                                type="text"
                                name="text"
                                variant="standard" />
                        </form>

                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '30%', borderRadius: '50%', marginLeft: '200px', border: '1px solid black' }} src={user?.photoURL || img} alt="" />
                    </Grid>
                </Grid>
            </Box>

        </Container>


    );
};

export default ManageProfileList;

 // <Container>
        //     <Grid container spacing={2}>
        //         <Grid sx={{ mt: "10px" }} item xs={12} md={6}>
        //             <img style={{ width: '20%', borderRadius: '50%', mt: '10px' }} src={img} alt="" />
        //         </Grid>
        //         <Grid item xs={12} md={6}>

        //         </Grid>

        //     </Grid>
        // </Container >