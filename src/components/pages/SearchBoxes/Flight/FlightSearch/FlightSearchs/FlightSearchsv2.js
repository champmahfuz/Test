import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import useFetch from '../../../../../../hooks/useFetch';
import useValue from '../../../../../../hooks/useValue';
import Footer from '../../../../Shared/Footer/Footer';
import Navigation from '../../../../Shared/Navigation/Navigation';
import AvailableFlights from '../AvailableFlight/AvailableFlights/AvailableFlights';
import FlightCards from '../AvailableFlight/FlightCard/FlightCards/FlightCards';
import SearchSidebar from '../SearchSidebar/SearchSidebars/SearchSidebar';

const FlightSearchsv2 = () => {
    const { toValue, fromValue, travelDate } = useValue({});
    const toLoc = toValue?.name.split("(")[1].slice(0, 3);
    const fromLoc = fromValue?.name.split("(")[1].slice(0, 3);
    // const startDate = travelDate?.replaceAll("/", "-");
    const TheTravelDate = new Date(travelDate.getTime() - (travelDate.getTimezoneOffset() * 60000)).toISOString().split('T')[0];
    // const startDate = travelDate?.toISOString().split('T')[0];
    // const { data, loading, error, reFetch } = useFetch(`api/amadeus/flight-search?originCode=${fromLoc}&destinationCode=${toLoc}&dateOfDeparture=${TheTravelDate}&travler=${1}`);
    const { data, loading, error, reFetch } = useFetch(`api/sabre/search-flight`);
    // console.log(toValue?.name.split("(")[1].slice(0, 3));
    console.log(data?.groupedItineraryResponse?.itineraryGroups[0]?.itineraries);
    console.log(data?.groupedItineraryResponse?.legDescs);
    // console.log(`api/amadeus/flight-search?originCode=${fromLoc}&destinationCode=${toLoc}&dateOfDeparture=${TheTravelDate}&travler=${1}`);
    return (
        <Box>
            <Navigation />
            <Container>
                <Grid container spacing={ 2 } sx={ {
                    py: 7
                } }>
                    <Grid item xs={ 12 } sm={ 12 } md={ 3 } lg={ 3 }>
                        <SearchSidebar />
                    </Grid>
                    <Grid item xs={ 12 } sm={ 12 } md={ 9 } lg={ 9 }>
                        <AvailableFlights />
                        { loading ? 'LOADING' :
                            data?.data?.map((sFlight) => (
                                <FlightCards sFlight={ sFlight } />
                            ))
                        }
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </Box>
    );
};

export default FlightSearchsv2;