import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import PlaylistAddCheckCircleIcon from '@mui/icons-material/PlaylistAddCheckCircle';
import useValue from '../../../../../hooks/useValue';

const FlightTypeOption = () => {
    const { flightType, setFlightType } = useValue({})
    // console.log(flightType)
    return (
        <Box
            sx={ {
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '50px',
                backgroundColor: '#28e5284f',
                border: '2px solid #FFF',
                boxShadow: '#FFF #FFF 0 3px'
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
                <Typography sx={ { color: '#212121', fontSize: { xs: 15, md: 16 }, marginLeft: { xs: 2 } } }> Book Flight Tickets</Typography>
            </Box>
        </Box>
    );
};

export default FlightTypeOption;