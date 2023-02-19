import { Autocomplete, Box, ClickAwayListener, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import useFetch from '../../../../../hooks/useFetch';
import useValue from '../../../../../hooks/useValue';

const FlyingToTwo = ({ toCity, setToCity }) => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    const handleClickAway = () => {
        setOpen(false);
    };

    const styles = {
        position: 'absolute',
        top: 85,
        right: 0,
        left: 0,
        zIndex: 1,
        border: '1px solid',
        p: 1,
        bgcolor: 'background.paper',
    };

    const { data, loading, error, reFetch } = useFetch(`api/amadeus/Citysearch?keyword=%22${toCity}%22`);
    const newData = data?.data;
    const handleOnChange = (e) => {

        const fromLocation = e.target.value;
        !fromLocation ? setToCity('LONDON') : setToCity(fromLocation)
    }

    const { toValue, setToValue } = useValue({})
    // const [toValue, setToValue] = useState(toLoc)
    // console.log(toValue);
    return (
        <div>
            <ClickAwayListener onClickAway={ handleClickAway }>
                <Box sx={ { position: 'relative' } }>
                    <Paper type="button" onClick={ handleClick } sx={ { px: 2, backgroundColor: 'transparent' } }>
                        To:
                        <h6>{ toValue?.name }</h6>
                        <Typography variant="caption" display="block" gutterBottom>{ `${toValue?.iataCode}, ${toValue?.address?.countryName.slice(0, 17)}..` }</Typography>
                    </Paper>
                    { open ? (
                        <Box sx={ styles }>
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
                                        label="Type To Search"
                                        onChange={ handleOnChange }
                                        inputProps={ {
                                            ...params.inputProps,
                                            autoComplete: 'new-password', // disable autocomplete and autofill
                                        } }

                                    /> }
                                // value={ value }
                                onChange={ (e, newValue) => newValue && setToValue(newValue) }
                            />
                        </Box>
                    ) : null }
                </Box>
            </ClickAwayListener>
        </div>
    );
};

const toLoc = {
    "type": "location",
    "subType": "CITY",
    "name": "NEW YORK",
    "detailedName": "NEW YORK/NY/US",
    "id": "CNYC",
    "self": {
        "href": "https://test.api.amadeus.com/v1/reference-data/locations/CNYC",
        "methods": [
            "GET"
        ]
    },
    "timeZoneOffset": "-04:00",
    "iataCode": "NYC",
    "geoCode": {
        "latitude": 40.71417,
        "longitude": -74.00583
    },
    "address": {
        "cityName": "NEW YORK",
        "cityCode": "NYC",
        "countryName": "UNITED STATES OF AMERICA",
        "countryCode": "US",
        "stateCode": "NY",
        "regionCode": "NAMER"
    },
    "analytics": {
        "travelers": {
            "score": 76
        }
    }
}
export default FlyingToTwo;