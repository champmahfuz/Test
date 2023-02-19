import React, { useDebugValue, useState } from 'react';

// BasicDatePicker field  
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField, Typography } from '@mui/material';
import useValue from '../../../../../hooks/useValue';

const CalenderV2 = () => {
    const { travelDate, setTravelDate } = useValue({})
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>

            <Typography sx={{ fontSize: '2rem', color: '#212121', fontWeight: 'bolder', borderRight: '1px solid black', padding: '10px', height: "150px", marginLeft: '-25px' }}>
                <DatePicker
                    label="Depart"
                    value={travelDate}
                    // inputFormat="yyyy-MMM-dd "
                    onChange={(newValue) => {
                        setTravelDate(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </Typography>
        </LocalizationProvider>
    );
};

export default CalenderV2;