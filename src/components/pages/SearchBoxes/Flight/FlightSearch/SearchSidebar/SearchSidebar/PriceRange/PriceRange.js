import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Button, Paper, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function valuetext(value) {
    return `${value}°C`;
}

const PriceRange = () => {
    const minDistance = 10;
    const [value1, setValue1] = React.useState([0, 10000]);

    const handleChange1 = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        if (activeThumb === 0) {
            setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
        } else {
            setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
        }
    };

    return (
        <Paper sx={ { py: 3 } }>
            <Typography variant='body1' sx={ {
                p: 1
            } }>
                Price Range
            </Typography>
            <Box sx={ {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                p: 2
            } }>
                <Button variant="outlined" >
                    Min:  { value1[0] }
                </Button>
                <Button variant="outlined"   >
                    Max: { value1[1] }
                </Button>
            </Box >
            <Slider
                getAriaLabel={ () => 'Minimum distance' }
                value={ value1 }
                max={ 10000 }
                onChange={ handleChange1 }
                valueLabelDisplay="auto"
                getAriaValueText={ valuetext }
                disableSwap
            />
        </Paper >
    );
};

export default PriceRange;