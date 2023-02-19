import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../../UserFile/userfirebase.init';
import AddIcon from '@mui/icons-material/Add';
import HikingIcon from '@mui/icons-material/Hiking';
import styles from './ManageAddTravellerList.module.css';

const ManageTravellerList = () => {
    const [user, loading] = useAuthState(auth);
    return (
        <Container >
            <Box className={`${styles.topContainer}`} sx={{ display: "flex", my: 3 }}>
                <Typography>
                    <HikingIcon className={`${styles.assignmentIcon}`} />{" "}
                </Typography>
                <Typography>
                    <span style={{ fontSize: "26px" }}>Traveller</span> <br />{" "}
                </Typography>
            </Box>

            <Box sx={{ mb: '30px' }} className={`${styles.tableContainer}`}>
                <Typography sx={{ fontSize: '25px', fontWeight: 'bold' }}>Traveller Info</Typography>
                <p>You have 1 traveler</p>
                <Grid sx={{ display: 'flex' }}>
                    <Grid sx={{ mt: '8px' }} xs={12} md={6}>
                        <Typography>Othooy User</Typography>
                    </Grid>
                    <Grid sx={{ ml: '20px' }} xs={12} md={6}>
                        <Button sx={{ textTransform: 'unset' }} variant="outlined">Primary Traveller</Button>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid sx={{ mt: 2 }} item xs={12} md={6}>
                        <form  >
                            <TextField
                                sx={{ width: '100%', m: 1 }}
                                id="standard-basic"
                                label="Your Name"
                                name="name"
                                defaultValue={user?.email}
                                variant="standard" />
                        </form>
                    </Grid>

                </Grid>
                <Link to='/dashboard/addTraveller'>
                    <Button sx={{ textTransform: 'unset' }} startIcon={<AddIcon />}>Add Traveller</Button>
                </Link>
            </Box>

            {/* seeting */}

            {/* <Box className={`${styles.topContainer}`} sx={{ display: "flex", my: 3 }}>
                <Typography>
                    <SettingsApplicationsIcon className={`${styles.assignmentIcon}`} />{" "}
                </Typography>
                <Typography>
                    <span style={{ fontSize: "26px" }}>Seetings</span> <br />{" "}
                </Typography>
            </Box>

            <Box sx={{ mb: '30px' }} className={`${styles.tableContainer}`}>
                <Typography sx={{ fontSize: '25px', fontWeight: 'bold' }}>Seeting Info</Typography>
                <p>Manage your email address, mobile number and password</p>

                <Grid container spacing={2}>
                    <Grid sx={{ mt: 2 }} item xs={12} md={6}>
                        <form  >
                            <TextField
                                sx={{ width: '100%', m: 1 }}
                                id="standard-basic"
                                label="Email"
                                type="email"
                                name="name"
                                defaultValue={user?.email}
                                variant="standard" />
                            <TextField
                                sx={{ width: '100%', m: 1 }}
                                id="standard-basic"
                                label="Phone"
                                type="number"
                                name="name"
                                variant="standard" />
                            <Typography sx={{ fontWeight: 'bold', ml: '10px', mb: '20px' }}>Change Password ?</Typography>

                        </form>
                    </Grid>

                </Grid>

            </Box> */}

        </Container>
    );
};

export default ManageTravellerList;