import { Avatar, Box, Grid, Paper, Typography } from '@mui/material';
import DiamondIcon from '@mui/icons-material/Diamond';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import React from 'react';

const FlightOptions = () => {
    return (
        <Paper elevation={ 3 } sx={ {
            height: '50px',
            my: 3
        } } >
            <Box sx={ {
                width: '100&;',
                display: 'flex'
            } }>
                <Grid container>
                    <Grid item xs={ 6 } md={ 4 } sx={ {
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        border: '1px solid rgba(166, 166, 175, 0.40)',
                        lineHeight: '60px',
                        height: '50px',
                        p: 0.5,
                        "&:hover": {
                            border: '1px solid #235FD8',
                            background: '#235FD8',
                            color: '#fff'
                        }
                    } }>
                        <DiamondIcon sx={ {
                            mx: 2
                        } } />
                        <Typography variant="body1" gutterBottom component="div" sx={ { p: 0, m: 0 } }>
                            Earliesy Flights
                        </Typography>

                    </Grid>

                    <Grid item xs={ 6 } md={ 4 } sx={ {
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        border: '1px solid rgba(166, 166, 175, 0.40)',
                        lineHeight: '60px',
                        height: '50px',
                        p: 0.5,
                        "&:hover": {
                            border: '1px solid #235FD8',
                            background: '#235FD8',
                            color: '#fff'
                        }
                    } }>
                        <DiamondIcon sx={ {
                            mx: 2
                        } } />
                        <Typography variant="body1" gutterBottom component="div" sx={ { p: 0, m: 0 } }>
                            Earliesy Flights
                        </Typography>

                    </Grid>

                    <Grid item xs={ 6 } md={ 4 } sx={ {
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        border: '1px solid rgba(166, 166, 175, 0.40)',
                        lineHeight: '60px',
                        height: '50px',
                        p: 0.5,
                        "&:hover": {
                            border: '1px solid #235FD8',
                            background: '#235FD8',
                            color: '#fff'
                        }
                    } }>
                        <DiamondIcon sx={ {
                            mx: 2
                        } } />
                        <Typography variant="body1" gutterBottom component="div" sx={ { p: 0, m: 0 } }>
                            Earliesy Flights
                        </Typography>

                    </Grid>
                </Grid>
                {/*   {/* =========== */ }
                {/* <Grid container sx={ {
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    border: '1px solid rgba(166, 166, 175, 0.40)',
                    lineHeight: '60px',
                    height: '50px',
                    p: 0.5,
                    "&:hover": {
                        border: '1px solid #235FD8',
                        background: '#235FD8',
                        color: '#fff'
                    }
                } }>
                    <CurrencyBitcoinIcon sx={ {
                        mx: 2
                    } } />
                    <Typography variant="body1" gutterBottom component="div" sx={ { p: 0, m: 0 } }>
                        Earliesy Flights
                    </Typography>

                </Grid> */}
                {/* =========== */ }
                {/* <Grid container sx={ {
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    border: '1px solid rgba(166, 166, 175, 0.40)',
                    lineHeight: '60px',
                    height: '50px',
                    p: 0.5,
                    "&:hover": {
                        border: '1px solid #235FD8',
                        background: '#235FD8',
                        color: '#fff'
                    }
                } }>
                    <ElectricBoltIcon sx={ {
                        mx: 2
                    } } />
                    <Typography variant="body1" gutterBottom component="div" sx={ { p: 0, m: 0 } }>
                        Earliesy Flights
                    </Typography>

                </Grid> */}
                {/* =========== */ }


            </Box>
        </Paper >
    );
};

export default FlightOptions;