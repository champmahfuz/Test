import { Button, Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const UserBookings = () => {
    return (
        <Box>
            <Container>
                <Paper variant="outlined" sx={ { p: 3, } }>
                    <Grid container spacing={ 2 } sx={ { p: 3 } }>
                        <Grid item xs={ 3 }>
                            <Typography>Dhaka to Saidpur </Typography>
                        </Grid>
                        <Grid item xs={ 3 }>
                            <Typography>NONSTOP</Typography>
                        </Grid>
                        <Grid item xs={ 3 }>
                            <Typography>
                                NOVOAIR </Typography>
                        </Grid>
                        <Grid item xs={ 3 }>
                            <Typography> Status: PAID</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={ 2 } sx={ { p: 3 } }>
                        <Grid item xs={ 2 }>
                            <Typography variant='caption'>PNR</Typography>
                            <Typography>QYJXZW</Typography>
                        </Grid>
                        <Grid item xs={ 2 }>
                            <Typography variant='caption'>BOOKED BY</Typography>
                            <Typography>Syed Hasib Rahman</Typography>
                        </Grid>
                        <Grid item xs={ 2 }>
                            <Typography variant='caption'>TOTAL FARE</Typography>
                            <Typography>11997</Typography>
                        </Grid>
                        <Grid item xs={ 2 }>
                            <Typography variant='caption'>JOURNEY DATE</Typography>
                            <Typography>2022-01-26</Typography>
                        </Grid>
                        <Grid item xs={ 2 }>
                            <Typography variant='caption'>BOOKING DATE</Typography>
                            <Typography>2022-01-24</Typography>
                        </Grid>
                        <Grid item xs={ 2 }>
                            <Button>Details</Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Box>
    );
};

export default UserBookings;