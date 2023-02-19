import React, { useState } from 'react';
import Grid from '@mui/material/Grid';

// Autocomplete field 
import Box from '@mui/material/Box';

// import FlyingFrom from '../../SearchElements/FlyingFrom';
// import FlyingTo from '../../SearchElements/FlyingTo';
import Calender from '../../SearchElements/Calender';
import PassengerAndClasses from '../../SearchElements/PassengerAndClasses';
import { Link } from 'react-router-dom';
import FlyingFromTwo from '../../SearchElements/FlyingFromTwo';
import FlyingToTwo from '../../SearchElements/FlyingToTwo';
import FlyingFromThree from '../../SearchElements/FlyingFromThree';
import FlyingToThree from '../../SearchElements/FlyingToThree';
import { Divider, Typography } from '@mui/material';
import FlyingFromThreeV1 from '../../SearchElements/FlyingFromThreeV1';
import FlyingToThreeV1 from '../../SearchElements/FlyingToThreeV1';
import CalenderV1 from '../../SearchElements/CalenderV1';
import CalenderV2 from '../../SearchElements/CalenderV2';
import PassengerAndClassesV1 from '../../SearchElements/PassengerAndClassesV1';


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
            <Box sx={{ width: '100%', position: 'relative' }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} sm={6} md={3}>
                        {/* <FlyingFromThree fromCity={fromCity} setFromCity={setFromCity} /> */}
                        <FlyingFromThreeV1 fromCity={fromCity} setFromCity={setFromCity} />
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        {/* <FlyingToThree toCity={toCity} setToCity={setToCity} /> */}
                        <FlyingToThreeV1 toCity={toCity} setToCity={setToCity} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={2}>
                        {/* From Flying Calender  */}
                        <CalenderV2 />
                    </Grid>
                    <Grid item xs={12} sm={6} md={2}>
                        {/* From Flying Calender  */}
                        {/* <Calender /> */}
                        <CalenderV1 />
                    </Grid>
                    <Grid item xs={12} sm={6} md={2}>
                        {/* From Flying Calender  */}
                        <PassengerAndClassesV1 />

                    </Grid>
                </Grid>
                <Divider sx={{
                    color: 'black',
                    marginTop: '10px'
                }} />
            </Box>
        </div>
    );
};


export default OneWay;