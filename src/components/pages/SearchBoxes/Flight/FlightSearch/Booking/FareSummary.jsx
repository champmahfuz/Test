import { Box, Divider, Grid, Paper } from '@mui/material';
import React from 'react';
import Clock from '../SearchSidebar/SearchSidebar/Clock/Clock';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import useValue from '../../../../../../hooks/useValue';
import useFetch from '../../../../../../hooks/useFetch';
import { allFData, selectData } from './BookingCard';
import TimeCountdownv2 from '../SearchSidebar/SearchSidebar/Clock/TimeCountdownv2';

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

const FareSummary = () => {
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    // const { airportData, airlinesIata } = useFetch();
    // const { selectedFlight } = useValue()
    // const theFlight = selectedFlight?.selectedFlight || selectData;
    // const allFlightData = selectedFlight?.allData || allFData;

    const selectedFlight = JSON.parse(window.localStorage.getItem('selectedFlight'));
    const allData = JSON.parse(window.localStorage.getItem('allData'));
    const theFlight = selectedFlight;
    const allFlightData = allData;

    // const legDescs = allFlightData?.groupedItineraryResponse?.legDescs;
    // const scheduleDescs = allFlightData?.groupedItineraryResponse?.scheduleDescs;
    return (
        <Box sx={ { p: 1, position: 'sticky', top: 55, } }>
            <Paper variant="outlined" sx={ { p: 1, my: 2 } }>
                {/* <Clock /> */ }
                <TimeCountdownv2 />
            </Paper>
            <Paper variant="outlined" sx={ { p: 1 } }>
                <Card sx={ {} }>
                    <CardContent>
                        <Grid container rowSpacing={ 1 } columnSpacing={ { xs: 1, sm: 2, md: 3 } } sx={ { p: 1, display: 'flex', alignItems: 'center', fontSize: '1em' } } >
                            <Grid item xs={ 6 }>
                                <Avatar alt="Remy Sharp" src={ `https://daisycon.io/images/airline/?width=250&height=150&color=ffffff&iata=${theFlight?.pricingInformation.map((pricingInformationData, index) => (
                                    pricingInformationData.fare.validatingCarrierCode
                                ))}` } variant="square" sx={ { width: '70%', height: '70%' } } aria-label="recipe" />
                            </Grid>
                            <Grid item xs={ 6 }>
                                {/* {
                                    theFlight?.pricingInformation.map((pricingInformationData, index) => (
                                        pricingInformationData.fare.passengerInfoList.map((passengerInfoListData, index) => (
                                            passengerInfoListData.passengerInfo.fareComponents.map((fareComponentsData, index) => (
                                                <Box style={ { display: 'flex' } } key={ index }>
                                                    <p>{ `${fareComponentsData.beginAirport}-` }</p>
                                                    <p>{ `${fareComponentsData.endAirport}` },</p>
                                                </Box>
                                            ))
                                        ))
                                    )) } */}

                                {
                                    theFlight?.pricingInformation.map((pricingInformationData, index) => (
                                        pricingInformationData.fare.passengerInfoList[0].passengerInfo.fareComponents.map((fareComponentsData, index) => (
                                            <Box style={ { display: 'flex' } } key={ index }>
                                                <p>{ `${fareComponentsData.beginAirport}-` }</p>
                                                <p>{ `${fareComponentsData.endAirport}` },</p>
                                            </Box>
                                        ))
                                    )) }
                            </Grid>
                        </Grid>
                        <Typography variant="h6" color="text.secondary">
                            Fare Summary
                        </Typography>
                        <Grid>
                            {
                                theFlight?.pricingInformation.map((pricingInformationData, index) => (
                                    pricingInformationData.fare.passengerInfoList.map((passengerInfoListData, index) => (

                                        `${passengerInfoListData.passengerInfo.passengerType} (${passengerInfoListData.passengerInfo.passengerNumber}), `
                                    ))
                                )) }
                            {/* ({
                                theFlight?.pricingInformation.map((pricingInformationData, index) => (
                                    pricingInformationData.fare.passengerInfoList.map((passengerInfoListData, index) => (
                                        passengerInfoListData.passengerInfo.passengerNumber
                                    ))
                                )) }) */}
                            <Grid container rowSpacing={ 1 } columnSpacing={ { xs: 1, sm: 2, md: 3 } } sx={ { p: 1, display: 'flex', alignItems: 'center', fontSize: '1em' } } >
                                <Grid item xs={ 6 }>
                                    <p>Base Fare</p>
                                    <p>Tax</p>
                                    <Divider />
                                </Grid>
                                <Grid item xs={ 6 }>
                                    <p>
                                        { theFlight?.pricingInformation.map((pricingInformationData, index) => (
                                            pricingInformationData.fare.totalFare.equivalentAmount.toLocaleString()
                                        )) } BDT
                                    </p>
                                    <p>
                                        { theFlight?.pricingInformation.map((pricingInformationData, index) => (
                                            pricingInformationData.fare.totalFare.totalTaxAmount.toLocaleString()
                                        )) } BDT
                                    </p>
                                    <Divider />
                                </Grid>
                                <Grid item xs={ 6 }>
                                    <p>SubTotal:</p>
                                </Grid>
                                <Grid item xs={ 6 }>
                                    <p>
                                        { theFlight?.pricingInformation.map((pricingInformationData, index) => (
                                            pricingInformationData.fare.totalFare.totalPrice.toLocaleString()
                                        )) }  BDT
                                    </p>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent><hr></hr>
                    <CardActions disableSpacing
                        // expand={ expanded }
                        onClick={ handleExpandClick }
                        aria-expanded={ expanded }
                        aria-label="show more"
                    >

                        <IconButton aria-label="add to favorites">
                            <ExpandMoreIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <ExpandMore >
                            <ExpandMoreIcon />
                        </ExpandMore>


                    </CardActions>
                    <Collapse in={ expanded } timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>Method:</Typography>

                        </CardContent>
                    </Collapse>
                </Card>
            </Paper>
        </Box>
    );
};

export default FareSummary;