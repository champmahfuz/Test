import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import HikingIcon from '@mui/icons-material/Hiking';


const Package = (props) => {
    const { images, packageid, locations, price } = props.tourPack;
    return (
        <Grid item xs={ 12 } sm={ 6 } md={ 6 } lg={ 4 } sx={ {
            p: 1,
        } }

        >
            <Card sx={ {
                my: 1,
                borderRadius: '10px',
                backgroundBlendMode: 'overlay',
                '&:hover': {
                    boxShadow: `rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset`
                }
            } }>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="170"
                        image={ images }
                        alt="green iguana"
                    />
                    <CardContent>
                        <Grid item xs={ 8 } style={ {
                            display: "flex",
                        } }>
                            <HikingIcon />
                            <Typography variant="caption" display="block" gutterBottom sx={ { mt: .5 } }>
                                { packageid } Packages
                            </Typography>
                        </Grid>
                        <Typography gutterBottom variant="h5" component="div">
                            { locations }
                        </Typography>
                        <Typography variant="body2" color="#2187FF">
                            Start From <span style={ {
                                fontSize: '18px'
                            } }>BDT { price }</span>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default Package;