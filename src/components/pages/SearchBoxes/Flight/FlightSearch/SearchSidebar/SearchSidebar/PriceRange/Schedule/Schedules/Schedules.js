
import React from 'react';
import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';


const buttonStyle = {
    width: '100%',
    color: '#333',
    border: '1px solid #333',

}
const Schedules = () => {
    return (
        <Paper sx={ {
            p: 2,
            mt: 1
        } }>

            <Grid>
                <Typography variant='body1' sx={ {
                    py: 1
                } }>
                    Departure Time
                </Typography>
                <Button variant="outlined" startIcon={ <LightModeIcon /> } sx={ buttonStyle }>
                    00:00 - 05:59
                </Button>
                <Button variant="outlined" startIcon={ <LightModeIcon /> } sx={ buttonStyle }>
                    06:00 - 11:59
                </Button>
                <Button variant="outlined" startIcon={ <LightModeIcon /> } sx={ buttonStyle }>
                    12:00 - 17:59
                </Button>
                <Button variant="outlined" startIcon={ <LightModeIcon /> } sx={ buttonStyle }>
                    18:00 - 23:59
                </Button>
            </Grid>
            <Grid>
                <Typography variant='body1' sx={ {
                    py: 1
                } }>
                    Departure Time
                </Typography>
                <Button variant="outlined" startIcon={ <LightModeIcon /> } sx={ buttonStyle }>
                    00:00 - 05:59
                </Button>
                <Button variant="outlined" startIcon={ <LightModeIcon /> } sx={ buttonStyle }>
                    06:00 - 11:59
                </Button>
                <Button variant="outlined" startIcon={ <LightModeIcon /> } sx={ buttonStyle }>
                    12:00 - 17:59
                </Button>
                <Button variant="outlined" startIcon={ <LightModeIcon /> } sx={ buttonStyle }>
                    18:00 - 23:59
                </Button>
            </Grid>
        </Paper>
    );
};

export default Schedules;