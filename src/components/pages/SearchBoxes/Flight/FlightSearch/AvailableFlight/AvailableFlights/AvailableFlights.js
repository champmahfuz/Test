import { Avatar, Box, CardActionArea, Grid, Link, Paper, Tabs, Typography } from '@mui/material';
import React from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { textAlign } from '@mui/system';
import FlightOptions from '../FlightOption/FlightOptions/FlightOptions';
import AvailableFlight from '../AvailableFlight/AvailableFlight';

const AvailableFlights = ({ itinerariesDatasv3 }) => {
    return (
        <Box>
            <Box sx={ {
                width: '100%',
                display: 'flex',
                textAlign: 'center',
                justifyContent: 'space-between',
                height: '30px'


            } }>
                <Typography variant="body1" gutterBottom sx={ {
                    fontSize: { xs: '.7rem', sm: '.8rem', md: '1rem', lg: '1rem' }
                } }>
                    { itinerariesDatasv3?.statistics?.itineraryCount } Available Flights
                </Typography>
                <Typography variant="caption" gutterBottom sx={ {
                    fontSize: { xs: '.6rem', sm: '.7rem', md: '.8rem', lg: '.9rem' }
                } }>
                    *Price includes VAT & Tax
                </Typography>
            </Box>

            {/* <AvailableFlight /> */ }
            <Paper elevation={ 3 } sx={ {
            } } >
                <Box sx={ {
                    display: 'flex'
                } }>
                    <Tabs sx={ {
                    } }
                        variant="scrollable"
                        scrollButtons
                        allowScrollButtonsMobile
                        aria-label="scrollable force tabs example">

                        <Grid value={ 0 } container sx={ {
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            minWidth: '110px',
                            border: '1px solid rgba(166, 166, 175, 0.40)',
                            height: '50px',
                            p: 0.5,
                            "&:hover": {
                                border: '1px solid #333',
                            }
                        } }>
                            <Grid item xs={ 4 }>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" variant="square" sx={ { width: 24, height: 24 } } />
                            </Grid>
                            <Grid item xs={ 8 }>
                                <Typography variant="body1" gutterBottom component="p" sx={ { p: 0, m: 0 } }>
                                    BG
                                </Typography>
                                <Typography variant="caption" gutterBottom component="p" sx={ { p: 0, m: 0 } }>
                                    5 Flight
                                </Typography>
                            </Grid>

                        </Grid>
                        {/* =========== */ }
                        <Grid value={ 1 } container sx={ {
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            minWidth: '110px',
                            border: '1px solid rgba(166, 166, 175, 0.40)',
                            height: '50px',
                            p: 0.5,
                            "&:hover": {
                                border: '1px solid #333',
                            }
                        } }>
                            <Grid item xs={ 4 }>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" variant="square" sx={ { width: 24, height: 24 } } />
                            </Grid>
                            <Grid item xs={ 8 }>
                                <Typography variant="body1" gutterBottom component="p" sx={ { p: 0, m: 0 } }>
                                    BG
                                </Typography>
                                <Typography variant="caption" gutterBottom component="p" sx={ { p: 0, m: 0 } }>
                                    5 Flight
                                </Typography>
                            </Grid>

                        </Grid>
                        {/* =========== */ }
                        <Grid value={ 2 } container sx={ {
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            minWidth: '110px',
                            border: '1px solid rgba(166, 166, 175, 0.40)',
                            height: '50px',
                            p: 0.5,
                            "&:hover": {
                                border: '1px solid #333',
                            }
                        } }>
                            <Grid item xs={ 4 }>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" variant="square" sx={ { width: 24, height: 24 } } />
                            </Grid>
                            <Grid item xs={ 8 }>
                                <Typography variant="body1" gutterBottom component="p" sx={ { p: 0, m: 0 } }>
                                    BG
                                </Typography>
                                <Typography variant="caption" gutterBottom component="p" sx={ { p: 0, m: 0 } }>
                                    5 Flight
                                </Typography>
                            </Grid>

                        </Grid>
                        {/* =========== */ }

                    </Tabs>

                </Box>
            </Paper>

            <FlightOptions />

        </Box >
    );
};

export default AvailableFlights;