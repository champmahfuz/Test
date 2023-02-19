import React from 'react';


import ClickAwayListener from '@mui/material/ClickAwayListener';
import { Box, Button, Grid, Typography } from '@mui/material';

import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';

const PassengerAndClassesV1 = () => {

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    const handleClickAway = () => {
        setOpen(false);
    };

    const styles = {
        position: 'absolute',
        top: 0,
        right: 0,
        left: -50,
        zIndex: 1,
        border: '1px solid transparent',
        borderRadius: '5px',
        py: 3,
        px: 4,
        bgcolor: 'background.paper',
        color: '#333',
        width: '300px',
    };

    return (
        <ClickAwayListener
            mouseEvent="onMouseDown"
            touchEvent="onTouchStart"
            onClickAway={handleClickAway}
        >
            <Box sx={{
                position: 'relative',
            }}>
                {/* <button type="button" onClick={handleClick} style={{
                    padding: '15px',
                    background: 'transparent',
                    border: '1px solid #a0a0b4',
                    borderRadius: '3px',
                    color: '#4c515e',
                    width: '100%',
                    fontSize: '15px'
                }}>
                    Passengers & Classes
                </button> */}
                <Typography onClick={handleClick}
                    sx={{
                        padding: '15px',
                        background: 'transparent',
                        cursor: 'pointer',
                        color: '#4c515e',
                        width: '100%',
                        fontSize: '20px'
                    }}
                >
                    Passengers & Classes
                </Typography>
                <Box>
                    <Link to={`/FlightSearchsv3`}
                        // <Link to={ `/Flight/Searchs?adult=1&child=0&child_age=&infant=0&cabin_class=Economy&trips=DAC,CXB,2022-08-17` }
                        variant="outlined" >
                        <Button
                            sx={{ fontSize: '30px', marginLeft: '30px' }}
                            variant="contained" color="error">
                            <Typography sx={{ fontSize: '15px' }} > Search Flights</Typography>
                        </Button>
                    </Link >


                </Box>

                {open ? (
                    <Box sx={styles}>
                        Passengers
                        <Grid container spacing={2} sx={{ py: 1 }}>
                            <Grid item xs={2}>
                                1
                            </Grid>
                            <Grid item xs={6}>
                                <Typography sx={{ fontSize: "14px" }}>
                                    Adult (12+ yrs)
                                </Typography>

                            </Grid>
                            <Grid item xs={4}>
                                <IndeterminateCheckBoxIcon /> <AddBoxIcon />
                            </Grid>

                        </Grid>
                        <Grid container spacing={2} sx={{ py: 1 }}>
                            <Grid item xs={2}>
                                1
                            </Grid>
                            <Grid item xs={6}>
                                <Typography sx={{ fontSize: "14px" }}>
                                    Child (2-11 yrs)
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <IndeterminateCheckBoxIcon /> <AddBoxIcon />
                            </Grid>

                        </Grid>
                        <Grid container spacing={2} sx={{ py: 1 }}>
                            <Grid item xs={2}>
                                1
                            </Grid>
                            <Grid item xs={6}>
                                <Typography sx={{ fontSize: "14px" }}>
                                    Adult (0-2 yrs)
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <IndeterminateCheckBoxIcon /> <AddBoxIcon />
                            </Grid>

                        </Grid>
                        <Divider />
                        <Box>
                            Cabin Classes
                            <Grid container spacing={1} sx={{ py: 1 }}>

                                <Grid item xs={4}>
                                    <Typography variant="caption" display="block" gutterBottom>
                                        Economy
                                    </Typography>

                                </Grid>
                                <Grid item xs={4}>
                                    <Typography variant="caption" display="block" gutterBottom>
                                        Business
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography variant="caption" display="block" gutterBottom>
                                        FirstClass
                                    </Typography>
                                </Grid>

                            </Grid>
                        </Box>
                    </Box>
                ) : null}
            </Box>
        </ClickAwayListener>
    );
};

export default PassengerAndClassesV1;