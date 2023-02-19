import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import HikingIcon from '@mui/icons-material/Hiking';
import Package from './Package/Package';


const Packages = () => {
    let randomIndex = Math.floor((Math.random() * 9) + 1);
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('Packages.json')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, []);

    return (
        <Container sx={ { py: 5 } }>
            <Typography gutterBottom variant="h5" component="div">
                Popular Packages:
            </Typography>
            <Grid container rowSpacing={ 1 } columnSpacing={ { xs: 1, sm: 2, md: 3 } } >

                { packages.map((item, index) =>
                    (index === randomIndex) && (
                        <Grid item xs={ 12 } sx={ {
                        } }
                            key={ item.packageid } >
                            <Box style={ {
                                backgroundImage: `url(${item.images}), linear-gradient(90deg, #333 15%, rgba(25, 25, 25, 0.62) 100%)`,
                                backgroundPosition: 'center center',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                my: 7,
                                borderRadius: '10px',
                                backgroundBlendMode: 'overlay',
                                color: '#fff',
                            } }>

                                <CardContent sx={ {
                                    py: 12
                                } }>
                                    <Grid item xs={ 8 } style={ {
                                        display: "flex",
                                    } }>
                                        <HikingIcon />
                                        <Typography variant="caption" display="block" gutterBottom sx={ { mt: .5 } }>
                                            { item.packageid } Packages
                                        </Typography>
                                    </Grid>
                                    <Typography gutterBottom variant="h5" component="div">
                                        { item.locations }
                                    </Typography>
                                    <Typography variant="body2" color="#2187FF">
                                        Start From <span style={ {
                                            fontSize: '18px'
                                        } }>BDT { item.price }</span>
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Grid>
                    )) }

                { packages.map((tourPack, index) =>
                    index >= 0 && (

                        <Package key={ tourPack.packageid } tourPack={ tourPack } />
                    )) }

            </Grid>
            {/* )) } */ }
        </Container >
    );
};

export default Packages;