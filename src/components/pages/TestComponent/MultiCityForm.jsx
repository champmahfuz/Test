import { Box, Button, Container, Grid, Paper, TextField, } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import React, { createRef, useEffect, useRef, useState } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import AccessibleIcon from "@mui/icons-material/Accessible";
import PassengerAndClasses from '../SearchBoxes/Flight/SearchElements/PassengerAndClasses';

const MultiCityForm = () => {
    const inputFromRef = useRef();
    const inputToRef = useRef();
    const [fromCityQuery, setFromCityQuery] = useState('');
    const [toCityQuery, setToCityQuery] = useState('');
    const [fromCityResults, setFromCityResults] = useState([]);
    const [toCityResults, setToCityResults] = useState([]);
    const [fromSelectedItem, setFromSelectedItem] = useState('Dhaka,Hazrat Shahjalal International Airport (DAC)');
    const [toSelectedItem, setToSelectedItem] = useState('Dubai,Dubai Intl Arpt (DXB)');

    // To Show and Hide function 
    const [showFromInput, setShowFromInput] = useState(false);
    const [showToInput, setShowToInput] = useState(false);


    // -----------------
    const dateForJourney = new Date(new Date().getTime() + (1 * 24 * 60 * 60 * 1000));
    const dateForReturn = new Date(new Date().getTime() + (2 * 24 * 60 * 60 * 1000));
    const [journeyDate, setJourneyDate] = useState(dateForJourney);
    const [returnDate, setReturnDate] = useState(dateForReturn);
    const [openIndex, setOpenIndex] = useState(null)


    useEffect(() => {
        if (!fromCityQuery) {
            return;
        }
        fetch(`http://localhost:5000/api/airportsearch/${fromCityQuery}`)
            .then(response => response.json())
            .then(data => setFromCityResults(data))
    }, [fromCityQuery]);
    useEffect(() => {
        if (!toCityQuery) {
            return;
        }
        fetch(`http://localhost:5000/api/airportsearch/${toCityQuery}`)
            .then(response => response.json())
            .then(data => setToCityResults(data))
    }, [toCityQuery]);

    function handleFromClick(index, e) {
        setShowFromInput(!showFromInput);
        inputFromRef.current.focus();
        setOpenIndex(index);
        showToInput && setShowToInput(!showToInput);
        setFromCityQuery('')
    }
    function handleToClick() {
        setShowToInput(!showToInput);
        showToInput && inputToRef.current.focus();
        showFromInput && setShowFromInput(!showFromInput);
        setToCityQuery('')
    }
    useEffect((index) => {
        if (openIndex === index) {
            inputFromRef.current.focus();
        }
    }, [openIndex, inputFromRef]);

    useEffect(() => {
        inputToRef.current.focus();
    }, [inputToRef])
    // console.log(toSelectedItem);
    // console.log(toSelectedItem?.split(",")[0]);
    // For Multicity 
    const [cities, setCities] = useState([
        {
            fromSelectedItem: '',
            toSelectedItem: '',
            journeyDate: null,
            returnDate: null
        },
        {
            fromSelectedItem: '',
            toSelectedItem: '',
            journeyDate: null,
            returnDate: null
        }
    ]);
    console.log(cities);
    function handleFromSelect(index, item) {
        index && item && setFromSelectedItem(item);
        setShowFromInput(!showFromInput);

        const newCities = [...cities];
        newCities[index].fromSelectedItem = item;
        setCities(newCities);
        setFromCityQuery('')
        // handleToSelect();
        showFromInput && setShowToInput(!showToInput);
        // if (item === toSelectedItem) {
        //     console.log('From and To can not be same!');
        //     handleToSelect()
        // }
    }
    function handleToSelect(index, item) {
        index && item && setToSelectedItem(item);
        setShowToInput(!showToInput);

        const newCities = [...cities];
        newCities[index].toSelectedItem = item;
        setCities(newCities);

        setToCityQuery('')

        showToInput && setShowFromInput(!showFromInput);

    }

    function handleJourneyDateChange(index, date) {
        const newCities = [...cities];
        newCities[index].journeyDate = date;
        setCities(newCities);
    }
    function handleReturnDateChange(index, date) {
        const newCities = [...cities];
        newCities[index].returnDate = date;
        setCities(newCities);
    }
    const handleCloseIfOpen = () => {
        showFromInput && setShowFromInput(!showFromInput);
        showToInput && setShowToInput(!showToInput);
        setFromCityQuery('');
        setToCityQuery('');
    }



    function addCity() {
        cities.length >= 2 && cities.length <= 4 &&
            setCities([...cities, { from: '', to: '', journeyDate: null, returnDate: null }]);
    }
    function removeCity(index) {
        const newCities = [...cities];
        cities.length > 2 &&
            newCities.splice(index, 1);
        setCities(newCities);
    }

    return (
        <Box onClick={ handleCloseIfOpen } sx={ { mt: 3 } }>
            <Container>
                { cities.map((city, index) => (
                    <Grid container spacing={ 1 } key={ index } sx={ { my: 3 } }>
                        <Grid item xs={ 5.5 } >
                            <Grid container spacing={ 3 }>
                                <Grid item xs={ 6 } sx={ { position: 'relative' } }>
                                    <Paper onClick={ e => handleFromClick(index, e) } sx={ { px: 2, display: 'block' } }>
                                        From:<br></br>
                                        <strong>{ city?.fromSelectedItem ? city?.fromSelectedItem?.split(",")[0] : 'Select a city' }</strong>
                                        <br></br>
                                        {
                                            city?.fromSelectedItem ? <small> { city?.fromSelectedItem?.split("(")[1].slice(0, 3) }, { city?.fromSelectedItem?.split(",")[1].split("(")[0].slice(0, 20) }</small> : 'Choose an airport now'
                                        }

                                    </Paper>
                                    {/* { showFromInput && ( */ }
                                    <Paper sx={ { display: showFromInput && openIndex === index ? 'inline-block' : 'none', position: 'absolute', zIndex: 7 - index } }>
                                        <input
                                            type="text"
                                            width='100%'
                                            placeholder="Search..."
                                            value={ fromCityQuery }
                                            name='fromSelectedItem'
                                            onClick={ e => e.stopPropagation() }
                                            onChange={ event => setFromCityQuery(event.target.value) }
                                            ref={ inputFromRef }
                                            index={ index }
                                            style={ { width: '100%', border: '1px solid #333', height: '48px', padding: '10px 26px' } }
                                            id="filled-basic" label="Filled" variant="filled"
                                            autoFocus
                                        />
                                        <ol style={ { height: '300px', overflowX: 'scroll', padding: '0 10px' } }>
                                            { fromCityResults.map(item => (
                                                <li key={ item._id }
                                                    style={ {} }
                                                    onClick={ () => handleFromSelect(index, item.name) }>{ item.name }</li>
                                            )) }
                                        </ol>
                                    </Paper>
                                    {/* ) } */ }
                                </Grid>
                                <Grid item xs={ 6 } sx={ { position: 'relative' } }>
                                    <Paper onClick={ e => handleToClick(index, e) } sx={ { px: 2, display: 'block' } }>
                                        To:<br></br>
                                        <strong>{ city?.toSelectedItem ? city?.toSelectedItem?.split(",")[0] : 'Select a city' }</strong>
                                        <br></br>
                                        {
                                            city?.toSelectedItem ? <small> { city?.toSelectedItem?.split("(")[1].slice(0, 3) }, { city?.toSelectedItem?.split(",")[1].split("(")[0].slice(0, 20) }</small> : 'Choose an airport now'
                                        }

                                    </Paper>
                                    {/* { showToInput && ( */ }
                                    <Paper sx={ { display: showToInput && openIndex === index ? 'inline-block' : 'none', position: 'absolute', zIndex: 7 - index } }>
                                        <input
                                            type="text"
                                            placeholder="Search..."
                                            value={ toCityQuery }
                                            onClick={ e => e.stopPropagation() }
                                            name='toSelectedItem'
                                            onChange={ event => setToCityQuery(event.target.value) }
                                            ref={ inputToRef }
                                            style={ { width: '100%', border: '1px solid #333', height: '48px', padding: '10px 26px' } }
                                            id="filled-basic" label="Filled" variant="filled"
                                        />
                                        <ol style={ { height: '300px', overflowX: 'scroll', background: '#fff', } }>
                                            { toCityResults.map(item => (
                                                <li key={ item._id }
                                                    style={ { padding: '0 15px' } }
                                                    onClick={ () => handleToSelect(index, item.name) }>{ item.name }</li>
                                            )) }
                                        </ol>
                                    </Paper>
                                    {/* ) } */ }
                                </Grid>

                            </Grid>
                        </Grid>
                        <Grid item xs={ 4 } >
                            <Grid container spacing={ 0 }>
                                <Grid item xs={ 6 }>

                                    <LocalizationProvider dateAdapter={ AdapterDateFns }>
                                        <DatePicker
                                            // open={ true }
                                            components={ {
                                                OpenPickerIcon: AccessibleIcon
                                            } }
                                            label="Journey Date"
                                            value={ city.journeyDate }
                                            // inputFormat="yyyy-MMM-dd "
                                            onChange={ date => handleJourneyDateChange(index, date) }
                                            renderInput={ (params) => <TextField
                                                sx={ {
                                                    // width: { sm: 200, md: 300 },
                                                    "& .MuiInputBase-root": {
                                                        height: 73
                                                    }
                                                } }
                                                { ...params } /> }
                                        />
                                    </LocalizationProvider>
                                    {/* </> ) } */ }
                                </Grid>
                                <Grid item xs={ 6 }>

                                    <LocalizationProvider dateAdapter={ AdapterDateFns } >
                                        <DatePicker sx={ { py: 3 } }
                                            label="Return Date"
                                            // onClick={ e => setFlightType('roundTrip') }
                                            value={ city.returnDate }
                                            // inputFormat="yyyy-MMM-dd "
                                            // disabled={  flightType === 'roundTrip' ? false : true }
                                            onChange={ date => handleReturnDateChange(index, date) }
                                            renderInput={ (params) => <TextField   { ...params } /> }
                                        />
                                    </LocalizationProvider>
                                    {/* </>) } */ }
                                </Grid>

                            </Grid>
                        </Grid>
                        <Grid item xs={ 2.5 }>
                            { index === 0 ? <PassengerAndClasses /> :
                                <Paper style={ {} }>
                                    <Button type="button" onClick={ addCity }>
                                        Add City
                                    </Button>
                                    <Button type="button" onClick={ () => removeCity(index) }>
                                        Remove City
                                    </Button>
                                </Paper>
                            }
                        </Grid>


                    </Grid>
                )) }
                <h1>MultiCityForm</h1>
                {/* <MultiCityForm /> */ }

            </Container>
        </Box >
    );
};

export default MultiCityForm;

