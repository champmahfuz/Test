import { Avatar, Box, Card, Grid, Paper } from '@mui/material';
import React from 'react';
import useFetch from '../../../../../../hooks/useFetch';
import useValue from '../../../../../../hooks/useValue';
import { allFData, selectData } from './BookingCard';

const BookingShcedules = () => {
    // const { selectedFlight } = useValue()
    const { airportData, airlinesIata } = useFetch();
    // const theFlight = selectedFlight?.selectedFlight || selectData;
    // const allFlightData = selectedFlight?.allData || allFData;

    const selectedFlight = JSON.parse(window.localStorage.getItem('selectedFlight'));
    const allData = JSON.parse(window.localStorage.getItem('allData'));
    const theFlight = selectedFlight;
    const allFlightData = allData;

    const legDescs = allFlightData?.groupedItineraryResponse?.legDescs;
    const scheduleDescs = allFlightData?.groupedItineraryResponse?.scheduleDescs;


    function timeConvert(n) {
        var num = n;
        var hours = (num / 60);
        var rhours = Math.floor(hours);
        var minutes = (hours - rhours) * 60;
        var rminutes = Math.round(minutes);
        // return num + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s).";
        return rhours + " h : " + rminutes + " m.";
    }
    function diff(start, end) {
        start = start.split(":");
        end = end.split(":");
        var startDate = new Date(0, 0, 0, start[0], start[1], 0);
        var endDate = new Date(0, 0, 0, end[0], end[1], 0);
        var diff = endDate.getTime() - startDate.getTime();
        var hours = Math.floor(diff / 1000 / 60 / 60);
        diff -= hours * 1000 * 60 * 60;
        var minutes = Math.floor(diff / 1000 / 60);

        // If using time pickers with 24 hours format, add the below line get exact hours
        if (hours < 0)
            hours = hours + 24;

        return (hours <= 9 ? "0" : "") + hours + ":" + (minutes <= 9 ? "0" : "") + minutes;
    }


    return (
        <Box>
            { theFlight?.legs.map((theFlightData, index) => ((
                <Card sx={ { my: 2 } } key={ index }>
                    {/* { console.log('theFlightData', theFlightData) } */ }
                    { legDescs.find(item => item.id === theFlightData.ref).schedules.map((schedule, schedulesIndex) => (
                        <Grid key={ schedulesIndex + 1 } container rowSpacing={ 1 } columnSpacing={ { xs: 1, sm: 2, md: 3 } } sx={ { p: 1, display: 'flex', alignItems: 'center', fontSize: '1em' } } >
                            <Grid item xs={ 3 }>
                                { scheduleDescs.find(scheduleDescsData => scheduleDescsData.id === schedule.ref).departure.airport }
                                ({ scheduleDescs.find(scheduleDescsData => scheduleDescsData.id === schedule.ref).departure.time.split('+')[0].slice(0, 5) }) <br />

                                { `${airportData.find(airport => airport.name.split("(")[1].slice(0, 3) === scheduleDescs.find(scheduleDescsData => scheduleDescsData.id === schedule.ref).departure.airport)?.name}` }<br /><br />
                            </Grid>
                            <Grid item xs={ 3 }>
                                Non Stop<br></br>
                                -----------<br></br>
                                { timeConvert(`${scheduleDescs.find(scheduleDescsData => scheduleDescsData.id === schedule.ref).elapsedTime}`) }
                            </Grid>

                            <Grid item xs={ 3 }>
                                { scheduleDescs.find(scheduleDescsData => scheduleDescsData.id === schedule.ref).arrival.airport }
                                ({ scheduleDescs.find(scheduleDescsData => scheduleDescsData.id === schedule.ref).arrival.time.split('+')[0].slice(0, 5) }) <br />

                                { `${airportData.find(airport => airport.name.split("(")[1].slice(0, 3) === scheduleDescs.find(scheduleDescsData => scheduleDescsData.id === schedule.ref).arrival.airport)?.name}` }
                            </Grid>
                            <Grid item xs={ 3 }>
                                <Avatar alt="Remy Sharp" src={ `https://daisycon.io/images/airline/?width=250&height=150&color=ffffff&iata=${scheduleDescs.find(scheduleDescsData => scheduleDescsData.id === schedule.ref).carrier.marketing}` } variant="square" sx={ { width: '70%', height: '70%' } } />


                                { scheduleDescs.find(scheduleDescsData => scheduleDescsData.id === schedule.ref).carrier.marketing } { scheduleDescs.find(scheduleDescs => scheduleDescs.id === schedule.ref).carrier.marketingFlightNumber } | { airlinesIata.find(airlineIataCode => airlineIataCode?.iataCode === scheduleDescs.find(scheduleDescsData => scheduleDescsData.id === schedule.ref).carrier.equipment.code)?.description.split(' ')[0] } { scheduleDescs.find(scheduleDescsData => scheduleDescsData.id === schedule.ref).carrier.equipment.code }
                                <br />

                            </Grid>
                        </Grid >

                    )) }
                </Card>
            ))) }
        </Box>
    );
};

export default BookingShcedules;