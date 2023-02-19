import { Autocomplete, Box, ClickAwayListener, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import useFetch from '../../../../../hooks/useFetch';
import useValue from '../../../../../hooks/useValue';

const FlyingFromTwo = ({ fromCity, setFromCity }) => {
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

    const { data, loading, error, reFetch } = useFetch(`api/amadeus/Citysearch?keyword=%22${fromCity}%22`);
    const newData = data?.data;
    const handleOnChange = (e) => {

        const fromLocation = e.target.value;
        !fromLocation ? setFromCity('LONDON') : setFromCity(fromLocation)
    }
    // const [fromValue, setFromValue] = useState(fromLoc)
    const { fromValue, setFromValue } = useValue({})
    // console.log(fromValue);

    return (
        <div>
            <ClickAwayListener onClickAway={ handleClickAway }>
                <Box sx={ { position: 'relative' } }>

                    <Paper type="button" onClick={ handleClick } sx={ { px: 2, backgroundColor: 'transparent' } }>
                        From:
                        <h6>{ fromValue ? fromValue?.name : 'Type' }</h6>
                        <Typography variant="caption" display="block" gutterBottom>{ `${fromValue?.iataCode}, ${fromValue?.address?.countryName.slice(0, 17)}..` }</Typography>

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
                                onChange={ (e, newValue) => newValue && setFromValue(newValue) }
                            />
                        </Box>
                    ) : null }
                </Box>
            </ClickAwayListener>


        </div>
    );
};



export default FlyingFromTwo;