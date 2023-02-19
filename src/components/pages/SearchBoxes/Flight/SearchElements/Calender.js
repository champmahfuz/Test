import React, { useDebugValue, useState } from 'react';

// BasicDatePicker field  
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';
import useValue from '../../../../../hooks/useValue';

const Calender = () => {
    const { travelDate, setTravelDate } = useValue({})
    // console.log(!null && travelDate?.toLocaleDateString())
    // const startDate = travelDate?.toISOString().split('T')[0];
    // console.log(travelDate);
    // console.log(travelDate?.toISOString());
    // var today = new Date(travelDate.getTime() - (travelDate.getTimezoneOffset() * 60000)).toISOString().replace(/T/, ' ').replace(/\..+/, '');
    // const TheTravelDate = new Date(travelDate.getTime() - (travelDate.getTimezoneOffset() * 60000)).toISOString().split('T')[0];
    // console.log(TheTravelDate);
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                label="Select Date"
                value={travelDate}
                // inputFormat="yyyy-MMM-dd "
                onChange={(newValue) => {
                    setTravelDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
};

export default Calender;