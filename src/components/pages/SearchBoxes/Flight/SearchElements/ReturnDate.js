import React, { useDebugValue, useState } from 'react';

// BasicDatePicker field  
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';
import useValue from '../../../../../hooks/useValue';

const ReturnDate = () => {
    const { returnDate, setReturnDate } = useValue({})

    return (
        <LocalizationProvider dateAdapter={ AdapterDateFns }>
            <DatePicker
                label="Return Date"
                value={ returnDate }
                // inputFormat="yyyy-MMM-dd "
                disabled={ true }
                onChange={ (newValue) => {
                    setReturnDate(newValue);
                } }
                renderInput={ (params) => <TextField { ...params } /> }
            />
        </LocalizationProvider>
    );
};

export default ReturnDate;