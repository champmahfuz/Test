import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import './Flights.css';
import OneWay from '../Trips/OneWay/OneWay';
import RoundTrip from '../Trips/RoundTrip/RoundTrip';
import MultiCity from '../Trips/MultiCity/MultiCity';
import FlightTypeMenu from './flightSearchv3/FlightTypeMenu';
import React from 'react';
import PlaylistAddCheckCircleIcon from '@mui/icons-material/PlaylistAddCheckCircle';
import { Typography } from '@mui/material';
import SearchMenu from './flightSearchv3/SearchMenu';

// ---------------

import Grid from '@mui/material/Grid';

// Autocomplete field  

// import FlyingFrom from '../../SearchElements/FlyingFrom';
// import FlyingTo from '../../SearchElements/FlyingTo';  
import { Link } from 'react-router-dom';
import Calender from '../SearchElements/ReturnDate';
import PassengerAndClasses from '../SearchElements/PassengerAndClasses';
import FlyingFromThree from '../SearchElements/FlyingFromThree';
import FlyingToThree from '../SearchElements/FlyingToThree';
import JourneyDate from '../SearchElements/JourneyDate';
import ReturnDate from '../SearchElements/ReturnDate';
import useValue from '../../../../../hooks/useValue';

// BasicDatePicker field  
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';
// -------------
// {/* <Button type='submit' variant="contained" color="success" fullWidth='true' onClick={ 'handleBooking' }><Link style={ { , color: 'white', fontSize: '18px', fontWeight: 'bolder' } } to={ `/` }>Continue</Link></Button> */ }
const linkStyle = {
    marginTop: '17px',
    padding: '10px 15px',
    background: 'transparent',
    color: 'green',
    border: '1px solid #333',
    fontWeight: 'bold',
    textDecoration: "none",
    boxShadow: `rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset`,
    '&:hover': {
        boxShadow: `rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px`,
        border: '1px solid #333',
        color: '#333',
    },

};

export default function Flights() {


    const { returnDate, setReturnDate, journeyDate, setJourneyDate, flightType, setFlightType } = useValue({})
    const [fromCity, setFromCity] = useState("Dha");
    const [toCity, setToCity] = useState("Cox");

    // console.log(journeyDate)
    return (
        <Box sx={ {
            width: '100%',
            background: 'rgba(255, 255, 255, 0.7)',
            color: '#fff',
            p: 5,
            backdropFilter: 'blur(5.5px)',
            borderRadius: '10px',
            boxShadow: 2

        } }>

            {/* <SearchMenu /> */ }


            {/* <FlightTypeMenu /> */ }

            <Box
                sx={ {
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: { xs: 4 }
                } }
            >
                <Box
                    sx={ {
                        display: 'flex',
                        justifyContent: 'space-around',
                        gap: '10px'
                    } }
                >
                    {/* Flight Way Selector  */ }

                    <Box>
                        <Typography sx={ { fontSize: '16px', color: flightType === 'oneWay' ? 'red' : '#212121', cursor: 'pointer' } } onClick={ e => setFlightType('oneWay') }>
                            <PlaylistAddCheckCircleIcon />
                            One Way
                        </Typography>
                    </Box>
                    <Box>
                        <Typography sx={ { fontSize: '16px', color: flightType === 'roundTrip' ? 'red' : '#212121', cursor: 'pointer' } } onClick={ e => setFlightType('roundTrip') }>
                            <PlaylistAddCheckCircleIcon />
                            Round Trip
                        </Typography>
                    </Box>
                    <Box>
                        <Typography sx={ { fontSize: '16px', color: flightType === 'multiCity' ? 'red' : '#212121', cursor: 'pointer' } } onClick={ e => setFlightType('multiCity') }>
                            <PlaylistAddCheckCircleIcon />
                            Multi City
                        </Typography>
                    </Box>
                </Box>

                <Box>
                    <Typography sx={ { color: '#212121', marginTop: '-5px', fontSize: { xs: 15, md: 32 }, marginLeft: { xs: 2 } } }> Book Flight Tickets</Typography>
                </Box>
            </Box>
            {/* <OneWay /> */ }

            <Box sx={ { width: '100%' } }>
                {/* <Grid container rowSpacing={ 1 } columnSpacing={ { xs: 1, sm: 2, md: 3 } }> */ }
                <Grid container >
                    <Grid sx={ { marginBottom: { xs: 2 }, marginRight: 2 } } item xs={ 12 } sm={ 6 } md={ 2.5 }>
                        <FlyingFromThree fromCity={ fromCity } setFromCity={ setFromCity } />

                    </Grid>
                    <Grid sx={ { marginBottom: { xs: 2 }, marginRight: 2 } } item xs={ 12 } sm={ 6 } md={ 2.5 }>
                        <FlyingToThree toCity={ toCity } setToCity={ setToCity } />
                    </Grid>

                    <Grid sx={ { marginBottom: { xs: 2 }, marginRight: 2 } } item xs={ 12 } sm={ 6 } md={ 2 }>
                        {/* <JourneyDate /> */ }
                        <LocalizationProvider dateAdapter={ AdapterDateFns }>
                            <DatePicker
                                label="Journey Date"
                                value={ journeyDate }
                                // inputFormat="yyyy-MMM-dd "
                                onChange={ (newValue) => {
                                    setJourneyDate(newValue);
                                } }
                                renderInput={ (params) => <TextField { ...params } /> }
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid sx={ { marginBottom: { xs: 2 }, marginRight: 2 } } item xs={ 12 } sm={ 6 } md={ 2 }>
                        {/* <ReturnDate /> */ }
                        <LocalizationProvider dateAdapter={ AdapterDateFns } >
                            <DatePicker
                                label="Return Date"
                                // onClick={ e => setFlightType('roundTrip') }
                                value={ returnDate }
                                // inputFormat="yyyy-MMM-dd "
                                disabled={ flightType === 'roundTrip' ? false : true }
                                onChange={ (newValue) => {
                                    setReturnDate(newValue);
                                } }
                                renderInput={ (params) => <TextField { ...params } /> }
                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={ 12 } sm={ 6 } md={ 2 }>
                        <PassengerAndClasses />

                    </Grid>
                </Grid>

                <Grid item sm={ 12 }
                    sx={ { textAlign: "center", py: 6 } }>
                    <Link to={ `/FlightSearchsv3` }
                        variant="outlined" style={ linkStyle }>
                        Search Flights
                    </Link >
                </Grid>
            </Box>


        </Box >
    );
} 