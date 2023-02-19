import React, { useState } from 'react';
import Grid from '@mui/material/Grid';

// Autocomplete field 
import Box from '@mui/material/Box';

// import FlyingFrom from '../../SearchElements/FlyingFrom';
// import FlyingTo from '../../SearchElements/FlyingTo';
import Calender from '../../SearchElements/ReturnDate';
import PassengerAndClasses from '../../SearchElements/PassengerAndClasses';
import { Link } from 'react-router-dom';
import FlyingFromTwo from '../../SearchElements/FlyingFromTwo';
import FlyingToTwo from '../../SearchElements/FlyingToTwo';
import FlyingFromThree from '../../SearchElements/FlyingFromThree';
import FlyingToThree from '../../SearchElements/FlyingToThree';


const linkStyle = {
    marginTop: '17px',
    padding: '10px 15px',
    color: '#fff',
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

const OneWay = () => {
    const [fromCity, setFromCity] = useState("Dha");
    const [toCity, setToCity] = useState("Cox");
    // console.log(data.data)
    // console.log(fromCity)
    return (
        <div>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} sm={6} md={3}>
                        {/* From Flying From  */}
                        {/* <FlyingFrom fromCity={ fromCity } setFromCity={ setFromCity } /> */}

                        {/* <FlyingFromTwo fromCity={ fromCity } setFromCity={ setFromCity } /> */}
                        <FlyingFromThree fromCity={fromCity} setFromCity={setFromCity} />

                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        {/* From Flying To  */}
                        {/* <FlyingTo toCity={ toCity } setToCity={ setToCity } /> */}
                        {/* <FlyingToTwo toCity={ toCity } setToCity={ setToCity } /> */}
                        <FlyingToThree toCity={toCity} setToCity={setToCity} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        {/* From Flying Calender  */}
                        <Calender />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        {/* From Flying Calender  */}
                        <PassengerAndClasses />

                    </Grid>
                </Grid>
                <Grid item sm={12}
                    sx={{ textAlign: "center", py: 6 }}>
                    <Link to={`/FlightSearchsv3`}
                        // <Link to={ `/Flight/Searchs?adult=1&child=0&child_age=&infant=0&cabin_class=Economy&trips=DAC,CXB,2022-08-17` }
                        variant="outlined" style={linkStyle}>
                        Search Flights
                    </Link >
                </Grid>
            </Box>
        </div>
    );
};


export default OneWay;