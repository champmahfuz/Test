import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Skeleton } from '@mui/material';
import useFetch from '../../../../../../hooks/useFetch';
import useValue from '../../../../../../hooks/useValue';
import Footer from '../../../../Shared/Footer/Footer';
import Navigation from '../../../../Shared/Navigation/Navigation';
import AvailableFlights from '../AvailableFlight/AvailableFlights/AvailableFlights';
import FlightCards from '../AvailableFlight/FlightCard/FlightCards/FlightCards';
import SearchSidebar from '../SearchSidebar/SearchSidebars/SearchSidebar';
import FlightCardsv3 from '../AvailableFlight/FlightCard/FlightCards/FlightCardsv3';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import { Link } from 'react-router-dom';


const FlightSearchsv4 = () => {

    // const [orDiInfo, setOrDiInfo] = useState([{}])
    const { toValue, fromValue, journeyDate, returnDate, flightType, orDiInfo, passengersTotal } = useValue({});
    const arrivalLocation = toValue?.name.split("(")[1].slice(0, 3);
    const departureLocation = fromValue?.name.split("(")[1].slice(0, 3);
    // const startDate = travelDate?.replaceAll("/", "-");
    const theJourneyDate = new Date(journeyDate.getTime() - (journeyDate.getTimezoneOffset() * 60000)).toISOString().split('T')[0];
    const theReturnDate = new Date(returnDate.getTime() - (returnDate.getTimezoneOffset() * 60000)).toISOString().split('T')[0];
    const OriginDestinationInformations = JSON.stringify(orDiInfo)
    // console.log(theReturnDate);

    const passengersTotalData = JSON.stringify(passengersTotal)

    // console.log(orDiInfo);
    const { data, loading, error, reFetch } = useFetch(`api/flightSearch?travler=2&OriginDestinationInformations=${OriginDestinationInformations}&passengersTotalData=${passengersTotalData}`);
    // console.log(data);
    // ===============EDITS
    const itinerariesDatas = data?.groupedItineraryResponse?.itineraryGroups &&
        data?.groupedItineraryResponse?.itineraryGroups[0]?.itineraries;
    const itinerariesDatasv2 = data?.groupedItineraryResponse?.itineraryGroups &&
        data?.groupedItineraryResponse?.itineraryGroups.map((itineraryGroupsData, index) => (
            itineraryGroupsData?.itineraries
        )).flat();
    // const errorResponse = data?.groupedItineraryResponse.statistics.itineraryCount
    console.log(itinerariesDatasv2)
    return (
        <Box>
            <Navigation />
            <Container>
                <Grid container spacing={ 2 } sx={ {
                    py: 7
                } }>
                    <Grid item xs={ 12 } sm={ 12 } md={ 3 } lg={ 3 }>
                        <SearchSidebar data={ data } />
                    </Grid>
                    <Grid item xs={ 12 } sm={ 12 } md={ 9 } lg={ 9 }>
                        <AvailableFlights />
                        { loading ?
                            // <Skeleton variant="rectangular" width={ 210 } height={ 118 } /> 
                            <Stack sx={ { width: '100%', color: 'grey.500' } } spacing={ 2 }>
                                <LinearProgress color="secondary" />
                                <LinearProgress color="success" />
                                <LinearProgress color="inherit" />
                            </Stack>
                            : data?.groupedItineraryResponse?.itineraryGroups && itinerariesDatas?.map((itinerariesData, index) => (
                                <FlightCardsv3 key={ index } itinerariesData={ itinerariesData } data={ data } itinerariesDatas={ itinerariesDatas } index={ index } />
                            ))
                            // : 
                            // <Box><h1> NO FLIGHT FOUND! </h1>
                            //     <Link style={ { background: 'black', color: 'white' } } to={ `/` }>SEARCH AGAIN!</Link>
                            // </Box> 

                        }
                        {/* { loading ? 'LOADING' :
                            data?.data?.map((sFlight) => (
                                <FlightCards sFlight={ sFlight } />
                            ))
                        } */}
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </Box>
    );
};


export default FlightSearchsv4;