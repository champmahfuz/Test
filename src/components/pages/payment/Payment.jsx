import { Box, Button, Container, Grid, } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import Navbarv2 from '../../UserFile/UserLogin/Navbar/Navbarv2';
import FareSummary from '../SearchBoxes/Flight/FlightSearch/Booking/FareSummary';

const Payment = () => {
    const location = useLocation();
    const invoice = location.pathname.split('/')[2];
    console.log(location.pathname)
    const { data } = useFetch(`api/createairTicket/test?id=${invoice}`);
    console.log('Payment', data)
    return (
        <Box>
            <Navbarv2 />
            <Box>
                <Container fixed>
                    <Grid container spacing={ 2 }>
                        <Grid item xs={ 8 }>
                            <img src="https://www.seoclerk.com/files/user/images/Screenshot_1(674).png" alt="" />
                            <Button fullWidth>Get Ticket</Button>
                        </Grid>
                        <Grid item xs={ 4 }>
                            <FareSummary />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
    );
};

export default Payment;