import { Avatar, Grid, Paper } from '@mui/material';
import React, { Component } from 'react';
import Slider from "react-slick";

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

const AvailableFlight = () => {
    const theme = useTheme();

    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 6,
        swipeToSlide: true,
        afterChange: function (index) {
            console.log(
                `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
            );
        }
    };
    return (
        <Paper Paper elevation={ 3 } sx={ {
        } }>
            <Slider { ...settings }>
                { Array.from(Array(15)).map((_, index) => (
                    <Grid container sx={ {

                    } }>
                        <Card sx={ {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            maxHeight: '50px',
                            maxWidth: '110px',
                            border: '1px solid rgba(166, 166, 175, 0.40)',
                            "&:hover": {
                                border: '1px solid #333',
                            }

                        } }>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" variant="square" sx={ { width: 24, height: 24 } } />
                            <Box sx={ { display: 'flex', flexDirection: 'column' } }>
                                <CardContent sx={ { flex: '1 0 auto' } }>
                                    <Typography component="div" variant="h6">
                                        BG
                                    </Typography>
                                    <Typography variant="caption" color="text.secondary" component="div">
                                        5 Flights
                                    </Typography>
                                </CardContent>
                            </Box>

                        </Card>
                    </Grid>
                )) }

            </Slider>
        </Paper >
    );
};

export default AvailableFlight;