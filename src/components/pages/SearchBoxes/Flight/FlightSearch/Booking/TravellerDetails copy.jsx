import React from 'react';
import useValue from '../../../../../../hooks/useValue';
import { allFData, selectData } from './BookingCard';
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
import { Box } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import BookingShcedules from './BookingShcedules';
import TravellerForm from './TravellerForm';
import TestFormData from './TestFormData';


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

const TravellerDetails = () => {
    const [expandedOne, setExpandedOne] = React.useState(true);
    const [expandedTwo, setExpandedTwo] = React.useState(true);
    const [expandedThree, setExpandedThree] = React.useState(true);
    const [expandedFour, setExpandedFour] = React.useState(true);


    const { selectedFlight } = useValue()
    const theFlight = selectedFlight?.selectedFlight || selectData;
    const allFlightData = selectedFlight?.allData || allFData;
    // const itinerariesData = allFlightData?.groupedItineraryResponse?.itineraryGroups[0]?.itineraries;
    const legDescs = allFlightData?.groupedItineraryResponse?.legDescs;

    const scheduleDescs = allFlightData?.groupedItineraryResponse?.scheduleDescs;

    // console.log(theFlight, allFlightData)

    const handleTravellerDetailsOne = () => {
        setExpandedOne(!expandedOne);
        console.log('One')
    };
    const handleTravellerDetailsTwo = () => {
        setExpandedTwo(!expandedTwo);
        console.log('Two')
    };
    const handleTravellerDetailsThree = () => {
        setExpandedThree(!expandedThree);
        console.log('Three')
    };
    const handleTravellerDetailsFour = () => {
        setExpandedFour(!expandedFour)
        console.log('Four')
    };

    return (
        <Box sx={ { mt: 5 } }>
            <Typography variant="h6" color="text.secondary" fontWeight={ 900 } fontSize={ 15 }>
                Enter Traveller Details
            </Typography>
            { [1].map((elevation, travellerIndex) => (
                <Card sx={ {} } key={ travellerIndex }>
                    <CardActions disableSpacing
                        sx={ { borderBottom: '2px solid #333' } }
                        // expand={ expandedTwo }
                        onClick={
                            travellerIndex === 0 ? handleTravellerDetailsOne
                                : travellerIndex === 1 ? handleTravellerDetailsTwo
                                    : travellerIndex === 2 ? handleTravellerDetailsThree
                                        : handleTravellerDetailsFour
                        }
                        aria-expanded={ expandedTwo }
                        aria-label="show more"
                    >
                        <Typography variant="body2" color="text.secondary" fontWeight={ 700 } fontSize={ 15 }>
                            {/* Passenger { index + 1 } Adult Primary Contact */ }
                            {
                                travellerIndex === 0 ? `Passenger ${travellerIndex + 1} Adult Primary Contact` : `Passenger ${travellerIndex + 1} Adult `
                            }
                        </Typography>
                        <ExpandMore >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={
                        travellerIndex === 0 ? expandedOne
                            : travellerIndex === 1 ? expandedTwo
                                : travellerIndex === 2 ? expandedThree
                                    : expandedFour

                    } timeout="auto" unmountOnExit>
                        <CardContent>
                            <TravellerForm travellerIndex={ travellerIndex } />
                            {/* <TestFormData /> */ }

                        </CardContent>
                    </Collapse>
                </Card>
            )) }
        </Box>
    );
};

export default TravellerDetails;