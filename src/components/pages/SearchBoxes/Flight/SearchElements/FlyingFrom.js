import React, { useState } from 'react';


// Autocomplete field 
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import useFetch from '../../../../../hooks/useFetch';
import { Stack } from '@mui/material';


const fromLoc = {
    "type": "location",
    "subType": "CITY",
    "name": "LONDON",
    "detailedName": "LONDON/GB",
    "id": "CLON",
    "self": {
        "href": "https://test.api.amadeus.com/v1/reference-data/locations/CLON",
        "methods": [
            "GET"
        ]
    },
    "timeZoneOffset": "+01:00",
    "iataCode": "LON",
    "geoCode": {
        "latitude": 51.5,
        "longitude": -0.16666
    },
    "address": {
        "cityName": "LONDON",
        "cityCode": "LON",
        "countryName": "UNITED KINGDOM",
        "countryCode": "GB",
        "regionCode": "EUROP"
    },
    "analytics": {
        "travelers": {
            "score": 100
        }
    }
}

const FlyingFrom = ({ fromCity, setFromCity }) => {
    const { data, loading, error, reFetch } = useFetch(`api/amadeus/fromCitysearch?keyword=%22${fromCity}%22`);
    const newData = data?.data;
    const handleOnChange = (e) => {

        const fromLocation = e.target.value;
        !fromLocation ? setFromCity('LONDON') : setFromCity(fromLocation)
    }
    const [value, setValue] = useState(fromLoc)
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
                        label="Flying From"
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

export default FlyingFrom;