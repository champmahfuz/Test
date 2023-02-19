import React, { useState } from 'react';


// Autocomplete field 
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import useFetch from '../../../../../hooks/useFetch';
import { Stack } from '@mui/material';



const toLoc = {
    "type": "location",
    "subType": "AIRPORT",
    "name": "MID AMERICA REGIONAL",
    "detailedName": "LIBERAL/KS/US:MID AMERICA REGI",
    "id": "ALBL",
    "self": {
        "href": "https://test.api.amadeus.com/v1/reference-data/locations/ALBL",
        "methods": [
            "GET"
        ]
    },
    "timeZoneOffset": "-05:00",
    "iataCode": "LBL",
    "geoCode": {
        "latitude": 37.04441,
        "longitude": -100.9534
    },
    "address": {
        "cityName": "LIBERAL",
        "cityCode": "LBL",
        "countryName": "UNITED STATES OF AMERICA",
        "countryCode": "US",
        "stateCode": "KS",
        "regionCode": "NAMER"
    },
    "analytics": {
        "travelers": {
            "score": 0
        }
    }
}


const FlyingTo = ({ toCity, setToCity }) => {
    const { data, loading, error, reFetch } = useFetch(`api/amadeus/toCitySearch?keyword=%22${toCity}%22`);

    const newData = data?.data;

    const handleOnChange = (e, option) => {

        const value = e.target.value;
        !value ? setToCity('LONDON') : setToCity(value)
        // setIataCode(option.iataCode)
    }
    const [value, setValue] = useState(toLoc)
    console.log(value);
    return (
        <Stack spacing={ 2 } width={ '200px' }>

            <Autocomplete
                options={ data?.data ? newData : [] }
                getOptionLabel={ (option) => option.name }
                renderOption={ (props, option) => (
                    <Box component="li" sx={ { '& > img': { mr: 2, flexShrink: 0 } } } { ...props }>

                        <div >
                            <span style={ { width: '100%', } }>  ({ option.iataCode }) { option.name }</span> <br />
                            <small>{ option.address.countryName }</small>
                        </div>
                    </Box>
                ) }
                renderInput={ (params) =>
                    <TextField
                        { ...params }
                        label="Flying To"
                        onChange={ handleOnChange }
                        inputProps={ {
                            ...params.inputProps,
                            autoComplete: 'new-password', // disable autocomplete and autofill
                        } }

                    /> }
                value={ value }
                onChange={ (e, newValue) => setValue(newValue) }
            />
        </Stack>
    );
};



export default FlyingTo;