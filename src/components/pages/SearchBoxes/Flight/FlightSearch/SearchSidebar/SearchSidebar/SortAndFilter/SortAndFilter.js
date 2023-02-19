import React from 'react';
import { Checkbox, FormControlLabel, FormGroup, Paper, Typography } from '@mui/material';

const SortAndFilter = () => {
    return (
        <Paper sx={ {
            p: 2,
            mt: 2
        } }>




            <FormGroup>
                <Typography variant='body1' sx={ {
                    py: 2,
                } }>
                    Number of Stops
                </Typography>
                <FormControlLabel control={ <Checkbox /> } label="Direct" />
                <Typography variant='body1' sx={ {
                    py: 2
                } }>
                    Airlines
                </Typography>
                <FormControlLabel control={ <Checkbox /> } label="Biman Bangladesh Airlines (6)" />
                <FormControlLabel control={ <Checkbox /> } label="US-Bangla Airlines (5)" />
                <FormControlLabel control={ <Checkbox /> } label="NOVOAIR (4)" />

                <Typography variant='body1' sx={ {
                    py: 2
                } }>
                    Weights
                </Typography>
                <FormControlLabel control={ <Checkbox /> } label="20 KG" /><Typography variant='body1' sx={ {
                    py: 2
                } }>
                    Refundable
                </Typography>
                <FormControlLabel control={ <Checkbox /> } label="Non Refundable" />
                <FormControlLabel control={ <Checkbox /> } label="Refundable" />
                <FormControlLabel control={ <Checkbox /> } label="Rules Wise" />
            </FormGroup>
        </Paper>
    );
};

export default SortAndFilter;