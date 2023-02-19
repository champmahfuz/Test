import { Autocomplete, Box, ClickAwayListener, Paper, TextField, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import useFetch from '../../../../../hooks/useFetch';
import useValue from '../../../../../hooks/useValue';




const FlyingToThree = ({ toCity, setToCity }) => {
    const inputRef = useRef(null);
    const [open, setOpen] = React.useState(false);
    // const [fromCity, setFromCity] = React.useState("Dha");
    // const [toValue, setToValue] = React.useState({
    //     "_id": "6334186a247c5bf044970863",
    //     "name": "Coxs Bazaar,Coxs Bazar Airport (CXB)"
    // });

    const handleClick = () => {
        setOpen((prev) => !prev);
        // inputRef.current.focus();
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

    const { data, loading, error, reFetch } = useFetch(`/api/airportsearch/${toCity}`);
    const newData = data;
    const handleOnChange = (e) => {

        const fromLocation = e.target.value;
        !fromLocation ? setToCity('Cox') : setToCity(fromLocation)
    }
    // const [toValue, setToValue] = useState(fromLoc)
    // From Value Providor   
    const { toValue, setToValue } = useValue('')
    // console.log(toValue?.name.split("(")[1].slice(0, 3));
    // console.log(fromCity)

    return (
        <div>
            <ClickAwayListener onClickAway={ handleClickAway }>
                <Box sx={ { position: 'relative' } }>

                    <Paper type="button" onClick={ handleClick } sx={ { px: 2, backgroundColor: 'transparent' } }>
                        To:
                        <h6>{ toValue ? toValue?.name.split(",")[0] : 'Type' }</h6>
                        <Typography variant="caption" display="block" gutterBottom>{
                            `${toValue?.name.split(",")[1]}` }</Typography>

                    </Paper>
                    { open ? (
                        <Box sx={ styles } className="textBox">
                            <Autocomplete
                                options={ data ? newData : [] }
                                getOptionLabel={ (option) => option.name }
                                renderOption={ (props, option) => (
                                    <Box component="li" sx={ { '& > img': { mr: 2, flexShrink: 0 } } } { ...props }>
                                        <div >
                                            <span style={ {
                                                width: '10%',
                                                // backgroundColor: 'lightpink',
                                                padding: 7
                                            } }>
                                                { option.name }</span> <br />
                                            {/* ({ option.iataCode }) */ }
                                            {/* <small>{ option.address.countryName }</small> */ }
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
                                            autoComplete: 'off', // disable autocomplete and autofill
                                        } }
                                        ref={ inputRef }
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



export default FlyingToThree;