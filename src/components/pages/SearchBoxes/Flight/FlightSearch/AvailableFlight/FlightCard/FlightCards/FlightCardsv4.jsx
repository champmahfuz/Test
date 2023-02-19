import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar, Box, Button, Divider, Grid } from '@mui/material';
import RefundAndBaggage from '../RefundAndBaggage/RefundAndBaggage';
import ShareIcon from '@mui/icons-material/Share';
import useValue from '../../../../../../../../hooks/useValue';
import { useEffect } from 'react';
import Tooltip from '@mui/material/Tooltip';
import useFetch from '../../../../../../../../hooks/useFetch';
import FlightDetails from '../FlightDetails/FlightDetails';
import { Link } from 'react-router-dom';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton { ...other } />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const FlightCardsv4 = ({ itinerariesData, data, index }) => {
    // const { toValue, fromValue, setSelectedFlight } = useValue({});
    // const [getAirCode, setGetAirCode] = useState({});
    const [expanded, setExpanded] = React.useState(false);
    // console.log(airCode);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const { airportData, airlinesIata } = useFetch();
    // console.log(itinerariesData);
    const legDescs = data?.groupedItineraryResponse?.legDescs;
    const scheduleDescs = data?.groupedItineraryResponse?.scheduleDescs;
    const fareComponentDescs = data?.groupedItineraryResponse?.fareComponentDescs;
    const legDescriptions = data?.groupedItineraryResponse?.itineraryGroups[0]?.groupDescription.legDescriptions
    const url = `http://localhost:7000/getAirportDetailsById/?airCode=`
    function timeConvert(n) {
        var num = n;
        var hours = (num / 60);
        var rhours = Math.floor(hours);
        var minutes = (hours - rhours) * 60;
        var rminutes = Math.round(minutes);
        // return num + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s).";
        return rhours + " h : " + rminutes + " m.";
    }
    const handleBooking = () => {
        // setSelectedFlight({
        //     'selectedFlight': itinerariesData,
        //     'allData': data
        // });
        window.localStorage.setItem('selectedFlight', JSON.stringify(itinerariesData));
        // window.localStorage.setItem('selectFlight', JSON.stringify(itinerariesData));
        window.localStorage.setItem('allData', JSON.stringify(data));
        // console.log('first', itinerariesData)

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
            <Card sx={ { my: 3, background: 'rgba(76, 175, 80, 0.1)' } }>
                <CardContent> { index }
                    <Grid container spacing={ 2 } sx={ {
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        py: { xs: 3, sm: 3, md: 0, lg: 0 }
                    } } >
                        <Grid item xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                            <Grid container sx={ {
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                p: 0.5,
                                "&:hover": {
                                    // border: '1px solid #333',
                                }
                            } }>
                                <Grid item xs={ 6 } sx={ {} }>

                                    { itinerariesData?.pricingInformation.map((pricingInformationData, index) => ((
                                        <div key={ index } >
                                            {/* { pricingInformationData.fare.passengerInfoList.map((passengerInfoListData, index) => ((
                                                <div key={ index } >
                                                    { passengerInfoListData.passengerInfo.baggageInformation.map((baggageInformationData, index) => (
                                                        <div key={ index } style={ { padding: '7px', margin: '7px' } }>

                                                            <img style={ { borderRadius: "20px", height: '100%', width: '100%' } } src={ `https://daisycon.io/images/airline/?width=250&height=150&color=ffffff&iata=${baggageInformationData.airlineCode}` } alt="" />

                                                        </div>
                                                    )) }
                                                </div>

                                            ))) } */}
                                            { pricingInformationData.fare.passengerInfoList[0].passengerInfo.baggageInformation.map((baggageInformationData, index) => (
                                                <div key={ index } style={ { padding: '7px', margin: '7px' } }>

                                                    <img style={ { borderRadius: "20px", height: '100%', width: '100%' } } src={ `https://daisycon.io/images/airline/?width=250&height=150&color=ffffff&iata=${baggageInformationData.airlineCode}` } alt="" />

                                                </div>
                                            )) }
                                        </div>
                                    ))) }

                                </Grid>
                                <Grid item xs={ 6 }>

                                    { itinerariesData?.legs.map((itinerary, index) =>

                                    ((
                                        <div style={ { padding: '5px', margin: '5px' } } key={ index }>
                                            { legDescs.find(legDesc => legDesc.id === itinerary.ref).schedules.map((schedule, index) => ((
                                                index === 0 &&
                                                <span key={ index }>

                                                    { scheduleDescs.find(scheduleDesc => scheduleDesc.id === schedule.ref).departure.airport }<> </>
                                                    { scheduleDescs.find(scheduleDesc => scheduleDesc.id === schedule.ref).departure.time.split('+')[0].slice(0, 5) } <br />
                                                </span>

                                            ))) }
                                            { legDescriptions[index].departureDate }
                                        </div>
                                    ))) }


                                </Grid>

                            </Grid>
                        </Grid>
                        <Grid item xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 } container sx={ {
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            "&:hover": {
                                // border: '1px solid #333',
                            }
                        } }>

                            <Grid item xs={ 5 } sx={ { textAlign: 'center' } }>
                                { itinerariesData?.legs.map((itinerary, index) => ((
                                    <div key={ index } style={ { padding: '5px', margin: '5px' } }>

                                        { timeConvert(` ${legDescs.find(legDesc => legDesc.id === itinerary.ref).elapsedTime}`) }
                                        <Tooltip placement="top" title={ `Layover Time: 7h:30m` }>
                                            <i className="fas fa-fighter-jet">

                                                { legDescs.find(legDesc => legDesc.id === itinerary.ref).schedules.length >= 2 ? `${`1 Stop(S)`}` : "Non Stop" }</i></Tooltip>
                                    </div>


                                ))) }


                            </Grid>
                            <Grid item xs={ 7 }>

                                { itinerariesData?.legs.map((refData, index) => ((
                                    <div key={ index } style={ { padding: '5px', margin: '5px' } }>
                                        { legDescs.find(item => item.id === refData.ref).schedules.length >= 2 ? <>
                                            { legDescs.find(item => item.id === refData.ref).schedules.map((schedule, index) => ((

                                                index === 1 &&
                                                <span key={ index }>
                                                    {/* { index } */ }
                                                    {

                                                        scheduleDescs.find(scheduleDescs => scheduleDescs.id === schedule.ref).arrival.airport }<> </>
                                                    { scheduleDescs.find(scheduleDescs => scheduleDescs.id === schedule.ref).arrival.time.split('+')[0].slice(0, 5) } <br />

                                                </span>

                                            ))) }
                                            { legDescriptions[index].departureDate }
                                        </> : <>
                                            { legDescs.find(item => item.id === refData.ref).schedules.map((schedule, index) => ((
                                                index === 0 &&
                                                <span key={ index }>
                                                    {/* { index } */ }
                                                    {

                                                        scheduleDescs.find(scheduleDescs => scheduleDescs.id === schedule.ref).arrival.airport }<> </>
                                                    { scheduleDescs.find(scheduleDescs => scheduleDescs.id === schedule.ref).arrival.time.split('+')[0].slice(0, 5) } <br />

                                                </span>

                                            ))) }
                                            { legDescriptions[index].departureDate }
                                        </> }

                                    </div>))) }




                            </Grid>

                        </Grid>
                        <Grid item xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                            <Grid container sx={ {

                                background: 'rgba(166, 166, 175, 0.40)',
                                py: 1,
                                "&:hover": {
                                    // border: '1px solid #333',
                                }
                            } }>
                                <Grid item xs={ 3 }>
                                    {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" variant="square" sx={ {} } /> */ }
                                </Grid>
                                <Grid item xs={ 9 }>
                                    <Typography variant="caption" gutterBottom component="div" sx={ { p: 0, m: 0 } }>
                                        Partially Refundable
                                    </Typography>
                                    <Typography variant="h6" gutterBottom component="div" sx={ { p: 0, m: 0 } }> BDT
                                        {/* { itinerariesData?.pricingInformation.map((pricingInformationData, index) => ((
                                            pricingInformationData.fare.passengerInfoList.map((passengerInfoListData, index) => ((
                                                <>
                                                    { ` ${passengerInfoListData.passengerInfo.passengerTotalFare.totalFare.toLocaleString()}` }
                                                    /= <br></br>
                                                    <s> <small> BDT { parseInt(` ${passengerInfoListData.passengerInfo.passengerTotalFare.totalFare * 1.1} `).toLocaleString() }
                                                        /= </small></s>
                                                </>

                                            )))

                                        ))) } */}

                                        {
                                            itinerariesData?.pricingInformation.map((pricingInformationData, index) => ((
                                                <div key={ index }>
                                                    { `${pricingInformationData?.fare?.totalFare?.totalPrice.toLocaleString()}` } /= <br></br>
                                                    <s> <small> BDT { parseInt(` ${pricingInformationData?.fare?.totalFare?.totalPrice * 1.1} `).toLocaleString() }
                                                        /= </small></s>
                                                </div>
                                            )))
                                        }
                                    </Typography>
                                    <Typography variant="h6" gutterBottom component="div" sx={ { p: 0, m: 0 } }>
                                        {/* <s>BDT { `${'comparePrice.toFixed(2)'} ` } </s> */ }
                                    </Typography>
                                    <Button variant="contained" onClick={ handleBooking }><Link style={ { background: 'transparent', color: 'white' } } to={ `/Booking` }>Book Now</Link></Button>
                                </Grid>

                            </Grid>

                        </Grid>

                    </Grid>
                    <Divider />
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <ExpandMore
                        expand={ expanded }
                        onClick={ handleExpandClick }
                        aria-expanded={ expanded }
                        aria-label="show more"
                    >

                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={ expanded } timeout="auto" unmountOnExit>
                    <CardContent>
                        <Grid container rowSpacing={ 1 } columnSpacing={ { xs: 1, sm: 2, md: 3 } }>
                            <Grid item xs={ 12 } sm={ 12 } md={ 7 } lg={ 7 }>

                                <Grid container spacing={ 0 } sx={ {
                                    display: 'flex',
                                    justifyContent: 'center',
                                } }>
                                    <Grid item xs={ 4 } sx={ { fontSize: '0.75rem' } }>



                                        { itinerariesData?.legs.map((refData, index) => ((
                                            <span key={ index } style={ { paddingBottom: '15px' } }><hr></hr>
                                                { index + 1 } Departure/ Origin: <br></br> <hr></hr>
                                                { legDescs.find(item => item.id === refData.ref).schedules.map((schedule, index) => ((
                                                    <span key={ index }>

                                                        { scheduleDescs.find(scheduleDescs => scheduleDescs.id === schedule.ref).departure.airport }
                                                        ({ scheduleDescs.find(scheduleDescs => scheduleDescs.id === schedule.ref).departure.time.split('+')[0].slice(0, 5) }) <br />

                                                        { `${airportData.find(airport => airport.name.split("(")[1].slice(0, 3) === scheduleDescs.find(scheduleDescs => scheduleDescs.id === schedule.ref).departure.airport)?.name}` }<br /><br />
                                                    </span>

                                                ))) }
                                            </span>
                                        ))) }
                                    </Grid>
                                    <Grid item xs={ 4 } sx={ { fontSize: '0.75rem' } }>
                                        { itinerariesData?.legs.map((refData, index) => ((
                                            <span key={ index } style={ { paddingBottom: '15px' } }><hr></hr>
                                                { index + 1 }   Total Time: { timeConvert(` ${legDescs.find(legDesc => legDesc.id === refData.ref).elapsedTime}`) } <br></br> <hr></hr>

                                                { legDescs.find(item => item.id === refData.ref).schedules.map((schedule, index) => ((
                                                    <span key={ index }>
                                                        { scheduleDescs.find(scheduleDescs => scheduleDescs.id === schedule.ref).carrier.marketing }{ scheduleDescs.find(scheduleDescs => scheduleDescs.id === schedule.ref).carrier.marketingFlightNumber } | { airlinesIata.find(airlineIataCode => airlineIataCode?.iataCode === scheduleDescs.find(scheduleDescs => scheduleDescs.id === schedule.ref).carrier.equipment.code)?.description.split(' ')[0] } { scheduleDescs.find(scheduleDescs => scheduleDescs.id === schedule.ref).carrier.equipment.code }
                                                        <br /> Layover Time:
                                                        ({ scheduleDescs.find(scheduleDescs => scheduleDescs.id === schedule.ref).arrival.time.split('+')[0].slice(0, 5) }) <br /><br /> <br />


                                                    </span>

                                                ))) }

                                            </span>
                                        ))) }

                                    </Grid>
                                    <Grid item xs={ 4 } sx={ { fontSize: '0.75rem' } }>



                                        { itinerariesData?.legs.map((refData, index) => ((
                                            <span key={ index } style={ { paddingBottom: '15px' } }><hr></hr>
                                                { index + 1 } Arrival/ Destination: <br></br> <hr></hr>
                                                { legDescs.find(item => item.id === refData.ref).schedules.map((schedule, index) => ((
                                                    <span key={ index }>

                                                        { scheduleDescs.find(scheduleDescs => scheduleDescs.id === schedule.ref).arrival.airport }
                                                        ({ scheduleDescs.find(scheduleDescs => scheduleDescs.id === schedule.ref).arrival.time.split('+')[0].slice(0, 5) }) <br />

                                                        { `${airportData.find(airport => airport.name.split("(")[1].slice(0, 3) === scheduleDescs.find(scheduleDescs => scheduleDescs.id === schedule.ref).arrival.airport)?.name}` }<br /><br />
                                                    </span>

                                                ))) }
                                            </span>
                                        ))) }
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={ 12 } sm={ 12 } md={ 5 } lg={ 5 }>
                                <RefundAndBaggage />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Collapse>
            </Card>
        </Box >
    );
};


export default FlightCardsv4;