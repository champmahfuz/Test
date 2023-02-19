import React, { useDebugValue, useState } from 'react';

// BasicDatePicker field  
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';
import useValue from '../../../../../hooks/useValue';

const JourneyDate = () => {

    const { journeyDate, setJourneyDate } = useValue({})
    console.log(journeyDate)
    return (
        <LocalizationProvider dateAdapter={ AdapterDateFns }>
            <DatePicker
                label="Journey Date"
                value={ journeyDate }
                // inputFormat="yyyy-MMM-dd "
                onChange={ (newValue) => {
                    setJourneyDate(newValue);
                } }
                renderInput={ (params) => <TextField { ...params } /> }
            />
        </LocalizationProvider>
    );
};

export default JourneyDate;