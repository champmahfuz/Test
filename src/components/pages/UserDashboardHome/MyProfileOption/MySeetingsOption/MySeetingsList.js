import { Box, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import styles from './MySeetingsList.module.css';
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import auth from '../../../../UserFile/userfirebase.init';
import { Link } from 'react-router-dom';

const MySeetingsList = () => {
    const [user, loading] = useAuthState(auth);
    return (
        <Container>
            <Box className={`${styles.topContainer}`} sx={{ display: "flex", my: 3 }}>
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
                            <Link to='/dashboard/ChangePassword'>
                                <Typography sx={{ fontWeight: 'bold', ml: '10px', mb: '20px' }}>Change Password ?</Typography>
                            </Link>

                        </form>
                    </Grid>

                </Grid>

            </Box>
        </Container>
    );
};

export default MySeetingsList;