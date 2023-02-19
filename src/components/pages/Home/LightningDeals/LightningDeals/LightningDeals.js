import React, { useEffect, useRef, useState } from 'react';
import Slider from "react-slick";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Container, Grid } from '@mui/material';
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const LightningDeals = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                // breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const sliderRef = useRef(null);
    const [deals, setDeals] = useState([]);
    useEffect(() => {
        fetch('LightningDeals.json')
            .then(res => res.json())
            .then(data => setDeals(data))
    }, []);
    return (
        <div >
            <Container fixed>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    py: 5
                }}>
                    <Typography gutterBottom variant="h5" component="div">
                        Lightning Deals
                    </Typography>
                    <Box
                        style={{
                            display: "flex",
                            justifyContent: "right",
                            alignItems: "center",
                        }}>
                        <Box
                            className="arrow_buttons left"
                            onClick={() => sliderRef.current.slickPrev()}
                        >
                            <ArrowBackIosNewIcon />
                        </Box>
                        <Box
                            className="arrow_buttons"
                            onClick={() => sliderRef.current.slickNext()}
                        >
                            <ArrowForwardIosIcon />
                        </Box>
                    </Box>
                </Box>
                <Slider {...settings}
                    ref={sliderRef}
                    slidesToShow={4}
                    slidesToScroll={1}
                    customPaging={(i) => (
                        <div
                            style={{
                                position: "absolute",
                                width: "100%",
                                top: "-10px",
                                opacity: 0,
                                background: 'red'
                            }}
                        >
                            {i}
                        </div>
                    )}
                >
                    {deals.map((item) => (
                        <Card elevation={0} sx={{

                        }} key={item.id}>
                            <CardMedia sx={{ padding: '10px' }}
                                component="img"
                                alt="green iguana"
                                height="320"
                                image={item.images}

                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div">
                                    {item.title}
                                </Typography>
                                <Grid container spacing={2}>
                                    <Grid item xs={4} style={{
                                        display: "flex",
                                    }}>
                                        <EventIcon />
                                        <Typography variant="caption" display="block" gutterBottom sx={{ mt: .5 }}>
                                            {item.days} Day
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={8} style={{
                                        display: "flex",
                                    }}>
                                        <LocationOnIcon />
                                        <Typography variant="caption" display="block" gutterBottom sx={{ mt: .5 }}>
                                            {item.locations}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Typography variant="h5" color="text.secondary">
                                    BDT {item.price} /Person
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    ))}


                </Slider>
            </Container>

        </div >
    );
};

export default LightningDeals;