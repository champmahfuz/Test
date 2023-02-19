import React, { useEffect, useMemo, useState } from 'react';


import ClickAwayListener from '@mui/material/ClickAwayListener';
import { Box, Button, FormControl, Grid, InputLabel, NativeSelect, Paper, Typography } from '@mui/material';

import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Divider from '@mui/material/Divider';
import useValue from '../../../../../hooks/useValue';


const PassengerAndClasses = () => {
    const { passengerAndClassOpen, setPassengerAndClassOpen, setPassengersTotal, passengerQuantittyForForm, setPassengerQuantittyForForm } = useValue({})
    // const [passengerAndClassOpen, setPassengerAndClassOpen] =  useState(false);

    const handleClick = () => {
        setPassengerAndClassOpen((prev) => !prev);
    };

    const handleClickAway = () => {
        setPassengerAndClassOpen(false);
    };

    const adultPassenger = Number(localStorage.getItem("adultCounts"));
    const [adultCounts, setAdultCounts] = useState(adultPassenger || 1);
    localStorage.setItem("adultCounts", adultCounts);
    const infantPassenger = Number(localStorage.getItem("infantCounts"));
    const [infantCounts, setInfantCounts] = useState(infantPassenger || 0);

    localStorage.setItem("infantCounts", infantCounts);
    const [cabinClass, setCabinClass] = useState('Y')


    // const { passengerQuantittyForForm, setPassengerQuantittyForForm } = useState([{ NameNumber: `${1 + 0}.1`, Infant: false, PassengerType: "ADT", "NameReference": "" }])

    const childCounts = JSON.parse(localStorage.getItem("childCounts"));
    const [inputFields, setInputFields] = useState(childCounts || [])
    localStorage.setItem("childCounts", JSON.stringify(inputFields));
    // console.log(adultPassenger, infantPassenger, childCounts);
    // localStorage.setItem("adultCounts", {
    //     "adultCounts": adultCounts,
    //     "infantCounts": infantCounts,
    //     "child": {
    //         "childCount": inputFields?.length,
    //     },
    // });
    const addFields = () => {
        let newfield = { childAge: '' }
        setInputFields([...inputFields, newfield])
    }
    const removeFields = (index) => {
        let data = [...inputFields];
        data.splice(inputFields?.length - 1, 1)
        setInputFields(data)
    }
    const handleFormChange = (index, event) => {
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data);
    }

    useEffect(() => {
        let passengerTotal = [{ "Code": "ADT", "Quantity": adultCounts }];

        for (let i = 0; i < inputFields?.length; i++) {
            let child = { "Code": `C${('0' + inputFields[i].childAge).slice(-2)}`, "Quantity": 1 }
            passengerTotal.push(child)
        }


        if (infantCounts !== 0) {
            let inft = { "Code": "INF", "Quantity": infantCounts }
            passengerTotal.push(inft)
        }
        setPassengersTotal(passengerTotal)

    }, [adultCounts, infantCounts, inputFields, setPassengersTotal])
    // console.log(passengersTotal);
    useEffect(() => {
        let passengerQuantitty = []
        for (let i = 0; i < adultCounts; i++) {
            let adult = { "NameNumber": `${1 + i}.1`, "Infant": false, "PassengerType": "ADT", "NameReference": "" }
            passengerQuantitty.push(adult)
        }

        for (let i = 0; i < inputFields?.length; i++) {
            let child = { NameNumber: `${passengerQuantitty.length + 1}.1`, Infant: false, PassengerType: `C${('0' + inputFields[i].childAge).slice(-2)}`, "NameReference": `C${('0' + inputFields[i].childAge).slice(-2)}` }
            passengerQuantitty.push(child)
        }
        for (let i = 0; i < infantCounts; i++) {
            let inft = { NameNumber: `${1 + i}.1`, Infant: true, PassengerType: 'INF', NameReference: 'I01' }
            passengerQuantitty.push(inft)
        }

        setPassengerQuantittyForForm(passengerQuantitty)

    }, [inputFields, adultCounts, infantCounts, setPassengerQuantittyForForm])

    // console.log(passengerQuantittyForForm)
    const styles = {
        position: 'absolute',
        top: 0,
        right: 0,
        left: -50,
        zIndex: 1,
        border: '1px solid transparent',
        borderRadius: '5px',
        py: 3,
        px: 4,
        bgcolor: 'background.paper',
        color: '#333',
        width: '300px',
    };

    return (
        <ClickAwayListener
            mouseEvent="onMouseDown"
            touchEvent="onTouchStart"
            onClickAway={ handleClickAway }
        >
            <Box sx={ {
                position: 'relative',
            } }>
                <Paper sx={ { px: 2 } } onClick={ handleClick } style={ {
                    // padding: '10px',
                    // background: 'transparent',
                    // border: '1px solid #a0a0b4',
                    // borderRadius: '3px',
                    // color: '#4c515e',
                    // width: '100%',
                    // fontSize: '15px'
                } }>
                    Passengers, Classes <br></br>
                    <strong>{ passengerQuantittyForForm?.length } Passengers </strong>
                    <br></br>{ cabinClass === "Y" ? 'Economy' : cabinClass === "J" ? 'Buisness' : 'FirstClass' }

                </Paper>
                { passengerAndClassOpen ? (
                    <Box sx={ styles }>
                        Passengers
                        <Grid container spacing={ 2 } sx={ { py: 1 } }>
                            <Grid item xs={ 2 }>
                                { adultCounts }
                            </Grid>
                            <Grid item xs={ 6 }>
                                <Typography sx={ { fontSize: "14px" } }>
                                    Adult (12+ yrs)
                                </Typography>

                            </Grid>
                            <Grid item xs={ 4 }>
                                <IndeterminateCheckBoxIcon onClick={ e => adultCounts > 1 && setAdultCounts(adultCounts - 1) } /> <AddBoxIcon onClick={ e => adultCounts < 5 && setAdultCounts(adultCounts + 1) } />

                            </Grid>

                        </Grid>
                        <Grid container spacing={ 2 } sx={ { py: 1 } }>
                            <Grid item xs={ 2 }>
                                {/* { childCounts } */ }
                                { inputFields?.length }
                            </Grid>
                            <Grid item xs={ 6 }>
                                <Typography sx={ { fontSize: "14px" } }>
                                    Child (2-11 yrs)
                                </Typography>
                            </Grid>
                            <Grid item xs={ 4 }>

                                <IndeterminateCheckBoxIcon onClick={
                                    removeFields } /> <AddBoxIcon onClick={
                                        inputFields?.length < 4 && addFields } />
                            </Grid>


                            {

                                inputFields?.map((input, index) => (
                                    <FormControl key={ index } sx={ { minWidth: 30 } } size="small">
                                        <InputLabel variant="standard" htmlFor="chidl-age">Age</InputLabel>
                                        <NativeSelect
                                            inputProps={ {
                                                name: 'childAge',
                                                id: 'chidl-age',
                                            } }
                                            value={ inputFields[index].childAge }
                                            onChange={ event => handleFormChange(index, event) }
                                            required
                                        >
                                            {
                                                [...Array(10)].map((e, i) => (
                                                    <option key={ i } sx={ { m: 0, p: 0, textAlign: 'center' } }>{ i + 2 }</option >
                                                ))

                                            }


                                        </NativeSelect>
                                    </FormControl>
                                ))
                            }

                        </Grid>
                        <Grid container spacing={ 2 } sx={ { py: 1 } }>
                            <Grid item xs={ 2 }>
                                { infantCounts }
                            </Grid>
                            <Grid item xs={ 6 }>
                                <Typography sx={ { fontSize: "14px" } }>
                                    INF (0-2 yrs)
                                </Typography>
                            </Grid>
                            <Grid item xs={ 4 }>
                                <IndeterminateCheckBoxIcon onClick={ e => infantCounts > 0 && setInfantCounts(infantCounts - 1) } /> <AddBoxIcon onClick={ e => infantCounts < adultCounts && setInfantCounts(infantCounts + 1) } />
                            </Grid>

                        </Grid>
                        <Divider />
                        <Box>
                            Cabin Classes
                            <Grid container spacing={ 1 } sx={ { py: 1 } }>
                                {/* cabinClass,setCabinClass */ }
                                <Grid item xs={ 4 }>
                                    <Typography onClick={ e => setCabinClass('Y') } sx={ { color: cabinClass === 'Y' ? 'red' : "" } } variant="caption" display="block" gutterBottom>
                                        Economy
                                    </Typography>

                                </Grid>
                                <Grid item xs={ 4 }>
                                    <Typography onClick={ e => setCabinClass('J') } sx={ { color: cabinClass === 'J' ? 'red' : "" } } variant="caption" display="block" gutterBottom>
                                        Business
                                    </Typography>
                                </Grid>
                                <Grid item xs={ 4 }>
                                    <Typography onClick={ e => setCabinClass('F') } sx={ { color: cabinClass === 'F' ? 'red' : "" } } variant="caption" display="block" gutterBottom>
                                        FirstClass
                                    </Typography>
                                </Grid>

                            </Grid>
                        </Box>
                        <Button fullWidth onClick={ handleClickAway } sx={ {} }>Done!</Button>
                    </Box>
                ) : null }
            </Box>
        </ClickAwayListener>
    );
};

export default PassengerAndClasses;