import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import Footer from '../../../../Shared/Footer/Footer';
import Navigation from '../../../../Shared/Navigation/Navigation';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import FareSummary from './FareSummary';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import BookingCard, { allFData, selectData } from './BookingCard';
import useValue from '../../../../../../hooks/useValue';
import TravellerDetails from './TravellerDetails';
import Navbarv2 from '../../../../../UserFile/UserLogin/Navbar/Navbarv2';


function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const Booking = () => {

    const { passengersTotal } = useValue()
    // console.log(selectedFlight)
    const selectedFlight = JSON.parse(window.localStorage.getItem('selectedFlight'));
    const allData = JSON.parse(window.localStorage.getItem('allData'));
    const theFlight = selectedFlight;
    const allFlightData = allData;

    console.log('theFlight', theFlight)
    console.log('allFlightData', allFlightData)


    const legDescs = allFlightData?.groupedItineraryResponse?.legDescs;
    const scheduleDescs = allFlightData?.groupedItineraryResponse?.scheduleDescs;


    const NumberInPartys = theFlight?.pricingInformation[0].fare.passengerInfoList.map(passengerInfoListData => (
        passengerInfoListData.passengerInfo.passengerType !== "INF" && passengerInfoListData.passengerInfo.passengerNumber
    ))

    const segmentsv2 = theFlight.pricingInformation.map(pricingInformationData => (
        pricingInformationData.fare.passengerInfoList.map(passengerInfoListData => (
            passengerInfoListData.passengerInfo.fareComponents.map(fareComponentsData => (
                fareComponentsData.segments.map(segmentsData => (
                    segmentsData
                ))
            ))
        ))
    ))
    // pricingInformation > fare > passengerInfoList > passengerInfo > fareComponents > segments > segment > bookingCode
    const segments = theFlight.pricingInformation[0].fare.passengerInfoList[0].passengerInfo.fareComponents.map((fareComponentsData, index) => (
        fareComponentsData.segments.map((segmentsData, index) => (
            segmentsData.segment.bookingCode

        ))
    )).flat()
    // console.log('segments', segments)
    // console.log('segmentsv2', segmentsv2)
    // console.log('passengersTotalss', passengersTotalss.reduce((a, b) => a + b))
    // console.log('NumberInPartys', NumberInPartys.reduce((a, b) => a + b));

    const FlightSegment = theFlight?.legs.map((theFlightData, index) => (
        legDescs.find(item => item.id === theFlightData.ref).schedules.map((schedule, schedulesIndex) => (
            {
                "DepartureDateTime": `${allFlightData?.groupedItineraryResponse?.itineraryGroups[0].groupDescription.legDescriptions[index].departureDate}T${scheduleDescs.find(scheduleDescs => scheduleDescs.id === schedule.ref).departure.time.split('+')[0]}`,
                "ArrivalDateTime": `${allFlightData?.groupedItineraryResponse?.itineraryGroups[0].groupDescription.legDescriptions[index].departureDate}T${scheduleDescs.find(scheduleDescs => scheduleDescs.id === schedule.ref).arrival.time.split('+')[0]}`,
                "FlightNumber": `${scheduleDescs.find(scheduleDescs => scheduleDescs.id === schedule.ref).carrier.marketingFlightNumber}`,
                "NumberInParty": `${NumberInPartys.reduce((a, b) => a + b)}`,
                "ResBookDesigCode": ""
                // `${segments[index + schedulesIndex]} ${index + schedulesIndex}`

                // `${segments.map((segmentsData, index) => (
                //     index && segmentsData
                // ))} `

                // theFlight.pricingInformation[0].fare.passengerInfoList[0].passengerInfo.fareComponents.map((fareComponentsData, index) => (
                //     fareComponentsData.segments.map((segmentsData, segmentsDataindex) => (
                //         segmentsData.segment.bookingCode

                //     ))[index]
                // ))[schedulesIndex]

                , // "V",
                "Status": "NN",
                "OriginLocation": {
                    "LocationCode": scheduleDescs.find(scheduleDescs => scheduleDescs.id === schedule.ref).departure.airport
                },
                "DestinationLocation": {
                    "LocationCode": scheduleDescs.find(scheduleDescs => scheduleDescs.id === schedule.ref).arrival.airport
                },
                "MarketingAirline": {
                    "Code": scheduleDescs.find(scheduleDescs => scheduleDescs.id === schedule.ref).carrier.marketing,
                    "FlightNumber": `${scheduleDescs.find(scheduleDescs => scheduleDescs.id === schedule.ref).carrier.marketingFlightNumber}`
                }
            }

        )))
    )
    // console.log('FlightSegment', FlightSegment);
    const flightSegmentsv1 = FlightSegment.flat()

    const flightSegments = [...flightSegmentsv1];



    for (let i = 0; i < flightSegments.length; i++) {
        flightSegments[i].ResBookDesigCode = segments[i];
    }
    // console.log('FlightSegment', flightSegments);



    return (
        <Box sx={ { flexGrow: 1 } }>

            {/* <Navigation /> */ }
            <Navbarv2 />
            <Container >
                {/* { theFlight ? */ }
                <Box sx={ { flexGrow: 1, py: 5 } }>
                    <Grid container spacing={ 3 }>
                        <Grid item xs={ 12 } md={ 8 }>
                            <Box sx={ { flexGrow: 1, py: 1 } }>
                                <Grid container spacing={ 3 } sx={ {} }>
                                    <Grid item xs={ 6 } md={ 6 }>
                                        <h4>Review Your Booking</h4>
                                    </Grid>
                                    <Grid item xs={ 6 } md={ 6 } sx={ {
                                        display: 'flex',
                                        justifyContent: 'right'
                                    } }>
                                        <div role="presentation" onClick={ handleClick }>
                                            <Breadcrumbs aria-label="breadcrumb">
                                                <Link underline="hover" color="inherit" href="/">
                                                    Flight Selection
                                                </Link>

                                                <Typography color="text.primary">
                                                    Booking

                                                </Typography>
                                                <Link
                                                    underline="hover"
                                                    color="inherit"
                                                    href="/material-ui/getting-started/installation/"
                                                >
                                                    Payment
                                                </Link>
                                            </Breadcrumbs>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Box>
                            <BookingCard />
                            <TravellerDetails flightSegments={ flightSegments } />
                        </Grid>
                        <Grid item xs={ 12 } md={ 4 } sx={ {} }>
                            <FareSummary />

                        </Grid>
                    </Grid>
                </Box>
                {/* : <Box>TIME UP! SEARCH AGAIN</Box>  */ }

            </Container>
            <Footer />
        </Box>
    );
};

export default Booking;