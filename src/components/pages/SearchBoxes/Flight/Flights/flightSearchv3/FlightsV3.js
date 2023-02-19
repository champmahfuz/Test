import { Box, Button, Checkbox, Divider } from '@mui/material';
import PropTypes from 'prop-types';
import WarningIcon from '@mui/icons-material/Warning';
import PlayCircleFilledRoundedIcon from '@mui/icons-material/PlayCircleFilledRounded';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PlaylistAddCheckCircleIcon from '@mui/icons-material/PlaylistAddCheckCircle';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import '../Flights.css';
import OneWay from '../../Trips/OneWay/OneWay';
import RoundTrip from '../../Trips/RoundTrip/RoundTrip';
import MultiCity from '../../Trips/MultiCity/MultiCity';
import { useEffect } from 'react';
import SearchMenu from './SearchMenu';
import FlightTypeMenu from './FlightTypeMenu';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={ value !== index }
            id={ `simple-tabpanel-${index}` }
            aria-labelledby={ `simple-tab-${index}` }
            { ...other }
        >
            { value === index && (
                <Box sx={ { p: 3 } }>
                    <Typography>{ children }</Typography>
                </Box>
            ) }
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};



export default function Flightsv3() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <Box sx={ { position: 'relative' } }>
            <SearchMenu />
            <Box sx={ {
                width: '100%',
                background: 'rgba(255, 255, 255, 0.7)',
                borderRadius: ' 5px',
                // alignItems: 'center',
                color: '#fff',
                p: 3,
                zIndex: -1,
                position: 'absolute',
                backdropFilter: 'blur(5.5px)',

            } }>
                <FlightTypeMenu />
                <Divider
                    sx={ { color: 'black' } }
                />
                <Box sx={ {
                    display: 'flex',
                    // flexDirection: 'row',
                    // justifyContent: 'space-between',
                    width: '100%'

                } }>
                    <Box sx={ {
                        display: 'flex',
                        // flexDirection: 'row-reverse',
                        width: '40%',
                        // gap: '20px'
                    } }>
                        <Box sx={ {
                            borderRight: '1px solid black', padding: '10px'
                        } } onClick={ e => console.log(`From`) } >
                            <Typography sx={ { fontSize: '14px', color: '#212121' } }>
                                FROM
                            </Typography>
                            <Typography sx={ { fontSize: '2rem', color: '#212121', fontWeight: 'bolder' } }>
                                Dhaka
                            </Typography>
                            <Typography sx={ { fontSize: '10px', color: '#212121' } }>
                                Go: Shalajal International Airport
                            </Typography>
                        </Box>
                        <Box
                            sx={ {
                                borderRight: '1px solid black', padding: '10px'
                            } }
                        >
                            <Typography sx={ { fontSize: '14px', color: '#212121' } }>
                                TO
                            </Typography>
                            <Typography sx={ { fontSize: '2rem', color: '#212121', fontWeight: 'bolder' } }>
                                Chattogram
                            </Typography>
                            <Typography sx={ { fontSize: '10px', color: '#212121' } }>
                                BOM: Sah Amanot Internetional Airport
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={ {
                            display: 'flex',
                            width: '60%',
                            // gap: '20px',

                        } }
                    >
                        <Box sx={ {
                            borderRight: '1px solid black', padding: '10px'
                        } }>
                            <Typography sx={ { fontSize: '14px', color: '#212121' } }>
                                <CalendarMonthIcon />
                                Depart
                                <KeyboardArrowDownIcon />
                            </Typography>
                            <Box sx={ { display: 'flex' } }>
                                <Typography sx={ { fontSize: '2rem', color: '#212121', fontWeight: 'bolder' } }>02</Typography>
                                <Typography sx={ { marginTop: '16px', color: '#212121' } }>Oct'22</Typography>

                            </Box>
                            <Typography sx={ { color: '#212121', fontSize: '14px' } }>Sunday</Typography>
                        </Box>
                        <Box sx={ {
                            borderRight: '1px solid black', padding: '10px'
                        } }>
                            <Typography sx={ { fontSize: '14px', color: '#212121' } }
                            > <CalendarMonthIcon />
                                Return
                                <KeyboardArrowDownIcon />
                            </Typography>
                            <br />
                            <Typography sx={ { fontSize: '13px', fontWeight: 'bolder', color: '#263238' } }>Book a round trip to save more</Typography>
                        </Box>
                        <Box sx={ { padding: '10px' } }>
                            <Typography sx={ { fontSize: '13px', color: '#212121' } }>
                                TRAVELLERS
                            </Typography>
                            <Box sx={ { display: 'flex' } }>
                                <Typography sx={ { fontSize: '2rem', color: '#212121', fontWeight: 'bolder' } }>1</Typography>
                                <Typography sx={ { marginTop: '16px', color: '#212121' } }>Travellers</Typography>
                            </Box>
                            <Typography sx={ { color: '#212121', fontSize: '14px' } }>Economy</Typography>
                        </Box>
                        <Box>
                            <Button
                                sx={ { fontSize: '30px', marginTop: '40px', marginLeft: '40px' } }
                                variant="contained" color="error">
                                <Typography sx={ { fontSize: '15px' } } > Search Flights</Typography>
                            </Button>

                        </Box>
                    </Box>
                </Box>
                <Divider
                    sx={ { color: 'black' } }
                />

                <Box
                    sx={ {
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: '20px',
                    } }
                >
                    <Box
                        sx={ {
                            display: 'flex',
                            justifyContent: 'space-around',
                            gap: '10px'
                        } }
                    >
                        <Box sx={ { borderRight: '1px solid black', paddingRight: '10px' } }>
                            <Typography
                                sx={ {
                                    fontSize: '14px',
                                    color: '#212121',
                                    marginTop: '10px',
                                    cursor: 'pointer'
                                } }
                            >
                                <PlayCircleFilledRoundedIcon sx={ { color: '#4527a0' } } />
                                Fares From</Typography>
                        </Box>
                        <Box sx={ { borderRight: '1px solid black', paddingRight: '10px' } }>
                            <Typography
                                sx={ {
                                    fontSize: '14px',
                                    color: '#212121',
                                    cursor: 'pointer'
                                } }
                            >
                                <Checkbox defaultChecked color="success" />
                                Direct Flights</Typography>
                        </Box>
                        <Box>
                            <Typography
                                sx={ {
                                    fontSize: '14px',
                                    color: '#212121',
                                    cursor: 'pointer'
                                } }
                            >
                                <Checkbox defaultChecked color="success" />
                                Defense Fare</Typography>
                        </Box>
                    </Box>

                    <Box>
                        <Typography
                            sx={ {
                                color: '#f44336',
                                marginTop: '10px',
                                cursor: 'pointer'
                            } }
                        >
                            <WarningIcon />
                            Covid 19 update</Typography>
                    </Box>
                </Box>

            </Box >
        </Box >

    );
}