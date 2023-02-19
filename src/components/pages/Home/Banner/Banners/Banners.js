import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Flights from '../../../SearchBoxes/Flight/Flights/Flights';
import FlightsV2 from '../../../SearchBoxes/Flight/Flights/FlightsV2';
import Flightsv3 from '../../../SearchBoxes/Flight/Flights/flightSearchv3/FlightsV3'
import FlightTypeMenu from '../../../SearchBoxes/Flight/Flights/flightSearchv3/FlightTypeMenu';
import SearchMenu from '../../../SearchBoxes/Flight/Flights/flightSearchv3/SearchMenu';
import TestComponent from '../../../TestComponent/TestComponent';
import FlightTypeOption from '../../../SearchBoxes/Flight/Flights/FlightTypeOption';
import FlightsV3 from '../../../SearchBoxes/Flight/Flights/FlightsV3';

const Banners = () => {
    return (
        <Box className="" sx={ {
            // background: `url(https://wallpapershome.com/images/pages/pic_h/23277.jpg)`,
            background: `url(https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-63452.jpg?w=996&t=st=1671453707~exp=1671454307~hmac=e90e28fdae31b548f1b9a245e58ee40177d996e679d6447f532a59ab7a08b88f)`,
            backgroundPosition: `center center`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `cover`,
            // clipPath: `polygon(50% 0%, 100% 0, 100% 86%, 38% 100%, 12% 100%, 0 91%, 0 0)`,
            py: 12,
            // height: { xs: '900px', sm: '800px', md: '800px', lg: '600px' }
        } }>
            <Container>
                <Grid container >
                    <Grid item xs={ 12 } md={ 12 } order={ { xs: 2, sm: 2, md: 1, lg: 1 } } >
                        {/* <Flights /> */ }
                        <SearchMenu />
                        {/* <FlightsV2 />  */ }
                        {/* <TestComponent /> */ }
                        <FlightsV3 />
                    </Grid>
                    {/* <Grid item xs={ 12 } md={ 2 } order={ { xs: 1, sm: 1, md: 2, lg: 2 } }>
                        <Box sx={ { textAlign: 'right' } }>
                            <img style={ { width: '90%', height: '90%', objectFit: 'fill', } } src="https://themeim.com/demo/flynext/assets/images/element/element-2.png" alt="" />
                        </Box>
                    </Grid> */}
                </Grid>
            </Container>
        </Box>
    );
};

export default Banners;