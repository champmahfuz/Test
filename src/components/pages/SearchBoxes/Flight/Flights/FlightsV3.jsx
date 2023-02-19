import { Box, Button, Container, Grid, Paper, TextField, } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import React, { createRef, useEffect, useState } from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import AccessibleIcon from "@mui/icons-material/Accessible";
import { Link } from 'react-router-dom';
import PassengerAndClasses from '../SearchElements/PassengerAndClasses';
import useValue from '../../../../../hooks/useValue';
import FlightTypeOption from './FlightTypeOption';

const linkStyle = {
    marginTop: '17px',
    padding: '10px 15px',
    background: 'rgb(40 229 40 / 75%)',
    color: '#FFF',
    border: '2px solid #FFF',
    borderRadius: '5px',
    fontWeight: 'bold',
    textDecoration: "none",
    boxShadow: `rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset`,
    transition: 'transform 0.5s',
    '&:hover': {
        // boxShadow: `rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px`,
        // border: '1px solid #333',
        color: '#333',
        transform: 'translateY(-10px) rotate(360deg)'
    },

};
const FlightsV3 = () => {
    const { setPassengerAndClassOpen, flightType, setFlightType, cities, setCities } = useValue({});
    const inputFromRef = createRef();
    const inputToRef = createRef();
    const [fromCityQuery, setFromCityQuery] = useState('');
    const [toCityQuery, setToCityQuery] = useState('');
    const [fromCityResults, setFromCityResults] = useState([]);
    const [toCityResults, setToCityResults] = useState([]);

    // To Show and Hide function 
    const [showFromInput, setShowFromInput] = useState(false);
    const [showToInput, setShowToInput] = useState(false);
    const [showJourneyDate, setShowJourneyDate] = useState(false);
    const [showReturnDate, setShowReturnDate] = useState(false);

    // -----------------
    const dateForJourney = new Date(new Date().getTime() + (1 * 24 * 60 * 60 * 1000));
    const dateForReturn = new Date(new Date().getTime() + (2 * 24 * 60 * 60 * 1000));
    let options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    const [openIndex, setOpenIndex] = useState(null)
    const theJourneyDate = new Date(dateForJourney.getTime() - (dateForJourney.getTimezoneOffset() * 60000)).toISOString().split('T')[0];
    const theReturnDate = new Date(dateForReturn.getTime() - (dateForReturn.getTimezoneOffset() * 60000)).toISOString().split('T')[0];

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
        // inputFromRef.current.focus();

        setOpenIndex(index);
        showToInput && setShowToInput(!showToInput);
        setFromCityQuery('')
    }
    function handleToClick(index, e) {
        setShowToInput(!showToInput);
        // inputToRef.current.focus();
        setOpenIndex(index);
        showFromInput && setShowFromInput(!showFromInput);
        setToCityQuery('')
    }
    function handleJourneyDateClick(index, e) {
        setShowJourneyDate(!showJourneyDate);
        // inputToRef.current.focus();
        setOpenIndex(index);
        showReturnDate && setShowReturnDate(!showReturnDate);
        setToCityQuery('')
    }
    function handleReturnDateClick(index, e) {
        setShowReturnDate(!showReturnDate);
        // inputToRef.current.focus();
        setOpenIndex(index);
        showJourneyDate && setShowJourneyDate(!showJourneyDate);
        setToCityQuery('')
        setFlightType('roundTrip')
    }
    useEffect(() => {
        showFromInput &&
            inputFromRef.current.focus();
    }, [inputFromRef, showFromInput])
    useEffect(() => {
        showToInput &&
            inputToRef.current.focus();
    }, [inputToRef, showToInput])


    // console.log('citiesData', citiesData);
    // const [cities, setCities] = useState([{
    //     fromSelectedItem: 'Dhaka,Hazrat Shahjalal International Airport (DAC)',
    //     toSelectedItem: 'Dubai,Dubai Intl Arpt (DXB)',
    //     journeyDate: dateForJourney,
    // }]);

    useEffect(() => {
        const selectedCities = JSON.parse(localStorage.getItem("cities"));
        let citiesData = flightType === 'multiCity' ? [
            {
                fromSelectedItem: selectedCities[0].fromSelectedItem || 'Dhaka,Hazrat Shahjalal International Airport (DAC)',
                toSelectedItem: selectedCities[0].toSelectedItem || 'Dubai,Dubai Intl Arpt (DXB)',
                journeyDate: selectedCities[0].journeyDate || theJourneyDate,
                returnDate: selectedCities[0].returnDate || theReturnDate
            },
            {
                fromSelectedItem: '',
                toSelectedItem: '',
                journeyDate: null,
                returnDate: null
            }
        ] : [{
            fromSelectedItem: selectedCities[0].fromSelectedItem || 'Dhaka,Hazrat Shahjalal International Airport (DAC)',
            toSelectedItem: selectedCities[0].toSelectedItem || 'Dubai,Dubai Intl Arpt (DXB)',
            journeyDate: selectedCities[0].journeyDate || theJourneyDate,
            returnDate: selectedCities[0].returnDate || theReturnDate
        }]
        setCities(citiesData)
    }, [flightType, setCities, theJourneyDate, theReturnDate])
    // console.log('cities', cities);
    function handleFromSelect(index, item) {
        // item && setFromSelectedItem(item);
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
        // item && setToSelectedItem(item);
        setShowToInput(!showToInput);

        const newCities = [...cities];
        newCities[index].toSelectedItem = item;
        setCities(newCities);

        setToCityQuery('')

        // showToInput && setShowFromInput(!showFromInput);
        showToInput && setShowJourneyDate(!showJourneyDate);

    }

    function handleJourneyDateChange(index, date) {
        const newCities = [...cities];
        newCities[index].journeyDate = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().split('T')[0];
        setCities(newCities);
        showJourneyDate && setShowJourneyDate(!showJourneyDate);
        flightType === 'roundTrip' ? showJourneyDate && setShowReturnDate(!showReturnDate) : index === 0 && showReturnDate && setPassengerAndClassOpen((prev) => !prev);

    }
    function handleReturnDateChange(index, date) {
        const newCities = [...cities];
        newCities[index].returnDate = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().split('T')[0];
        setCities(newCities);

        showReturnDate && setShowReturnDate(!showReturnDate)
        index === 0 && showReturnDate && setPassengerAndClassOpen((prev) => !prev);
    }
    const handleCloseIfOpen = () => {
        showFromInput && setShowFromInput(!showFromInput);
        showToInput && setShowToInput(!showToInput);
        showJourneyDate && setShowJourneyDate(!showJourneyDate);
        showReturnDate && setShowReturnDate(!showReturnDate);
        setFromCityQuery('');
        setToCityQuery('');
    }



    function addCity() {
        cities.length >= 2 && cities.length <= 4 &&
            setCities([...cities, {
                fromSelectedItem
                    : '', toSelectedItem
                    : '', journeyDate: null, returnDate: null
            }]);
    }
    function removeCity(index) {
        const newCities = [...cities];
        cities.length > 2 &&
            newCities.splice(index, 1);
        setCities(newCities);
    }
    return (
        <Box onClick={ handleCloseIfOpen }
        >

            <Container sx={ {
                background: 'linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7))',
                boxShadow: '0px 0px 5px 2px rgba(0, 0, 0, 0.2)',
                py: 1

            } }>

                <FlightTypeOption />
                { cities.map((city, index) => (
                    <Grid container spacing={ 1 } key={ index } sx={ { my: .5 } }>
                        {/* <Grid item xs={ 12 } md={ flightType === 'multiCity' ? 6 : 5 } >
                            <Grid container spacing={ 1 }> */}
                        <Grid item xs={ 12 } sm={ 6 } md={ 2.75 } sx={ { position: 'relative' } }>
                            <Paper onClick={ e => handleFromClick(index, e) } sx={ { px: 2, display: 'block' } }>
                                From:<br></br>
                                <strong>{ city?.fromSelectedItem ? city?.fromSelectedItem?.split(",")[0] : 'Select a city' }</strong>
                                <br></br>
                                {
                                    city?.fromSelectedItem ? <small> { city?.fromSelectedItem?.split("(")[1].slice(0, 3) }, { city?.fromSelectedItem?.split(",")[1].split("(")[0].slice(0, 20) }</small> : 'Choose an airport now'
                                }

                            </Paper>
                            { openIndex === index &&
                                <Paper sx={ { display: showFromInput ? 'inline-block' : 'none', position: 'absolute', zIndex: 7 - index } }>
                                    <input
                                        type="text"
                                        width='100%'
                                        required
                                        placeholder="Search..."
                                        value={ fromCityQuery }
                                        name='fromSelectedItem'
                                        onClick={ e => e.stopPropagation() }
                                        onChange={ event => setFromCityQuery(event.target.value) }
                                        ref={ inputFromRef }
                                        style={ { width: '100%', border: '1px solid #333', height: '48px', padding: '10px 26px' } }
                                        id="filled-basic" label="Filled" variant="filled"
                                    />
                                    <ol style={ { height: '300px', overflowX: 'scroll', padding: '0 10px' } }>
                                        { fromCityResults.map(item => (
                                            <li key={ item._id }
                                                style={ {} }
                                                onClick={ () => handleFromSelect(index, item.name) }>{ item.name }</li>
                                        )) }
                                    </ol>
                                </Paper>
                            }
                            {/* ) } */ }
                        </Grid>
                        <Grid item xs={ 12 } sm={ 6 } md={ 2.75 } sx={ { position: 'relative' } }>
                            <Paper onClick={ e => handleToClick(index, e) } sx={ { px: 2, display: 'block' } }>
                                To:<br></br>
                                <strong>{ city?.toSelectedItem ? city?.toSelectedItem?.split(",")[0] : 'Select a city' }</strong>
                                <br></br>
                                {
                                    city?.toSelectedItem ? <small> { city?.toSelectedItem?.split("(")[1].slice(0, 3) }, { city?.toSelectedItem?.split(",")[1].split("(")[0].slice(0, 20) }</small> : 'Choose an airport now'
                                }

                            </Paper>
                            { openIndex === index &&
                                <Paper sx={ { display: showToInput ? 'inline-block' : 'none', position: 'absolute', zIndex: 7 - index } }>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Search..."
                                        value={ toCityQuery }
                                        onClick={ e => e.stopPropagation() }
                                        name='toSelectedItem'
                                        onChange={ event => setToCityQuery(event.target.value) }
                                        ref={ inputToRef }
                                        style={ { width: '100%', border: '1px solid #333', height: '48px', padding: '10px 26px' } }
                                        id="filled-basic" label="Filled" variant="filled"
                                    />
                                    <ol style={ { height: '300px', overflowX: 'scroll', padding: '0 10px' } }>
                                        { toCityResults.map(item => (
                                            <li key={ item._id }
                                                style={ { padding: '0 15px' } }
                                                onClick={ () => handleToSelect(index, item.name) }>{ item.name }</li>
                                        )) }
                                    </ol>
                                </Paper>
                            }
                        </Grid>

                        {/* </Grid>
                        </Grid> */}
                        {/* <Grid item xs={ 12 } md={ flightType === 'multiCity' ? 3 : 4.5 } >
                            <Grid container spacing={ 0 }> */}
                        <Grid item xs={ 12 } sm={ 6 } md={ flightType === 'multiCity' ? 3 : 2 } sx={ { position: 'relative' } }>
                            <Paper onClick={ e => handleJourneyDateClick(index, e) } sx={ { px: 2, display: 'block' } }>
                                journeyDate:<br></br>
                                <strong>{ city?.journeyDate ? new Date(city?.journeyDate).toLocaleDateString("en-GB", options).split(',')[1] : "Select Journey Date"

                                }</strong>
                                <br></br>
                                { city?.journeyDate ?
                                    new Date(city?.journeyDate).toLocaleDateString("en-GB", options).split(',')[0] : "Weekday"
                                }

                            </Paper>
                            { openIndex === index &&
                                <Paper onClick={ e => e.stopPropagation() } sx={ { display: showJourneyDate ? 'inline-block' : 'none', position: 'absolute', zIndex: 7 - index } }>

                                    <LocalizationProvider dateAdapter={ AdapterDateFns }>
                                        <DatePicker
                                            open={ showJourneyDate ? true : false }
                                            components={ {
                                                OpenPickerIcon: AccessibleIcon
                                            } }
                                            label="" //Journey Date
                                            value={ city.journeyDate }
                                            // inputFormat="yyyy-MMM-dd "
                                            required

                                            onChange={ date => handleJourneyDateChange(index, date) }
                                            renderInput={ (params) => <TextField

                                                sx={ {
                                                    // width: { sm: 200, md: 300 },
                                                    "& .MuiInputBase-root": {
                                                        // height: 73
                                                    }
                                                } }
                                                { ...params } /> }
                                        />
                                    </LocalizationProvider>

                                </Paper>
                            }
                        </Grid>
                        { flightType !== 'multiCity' &&
                            <Grid item xs={ 12 } sm={ 6 } md={ 2 } sx={ { position: 'relative' } }>
                                <Paper onClick={ e => handleReturnDateClick(index, e) } sx={ { px: 2, display: 'block' } }>
                                    Return Date:<br></br>



                                    <strong>{ city?.returnDate && flightType === 'roundTrip' ? new Date(city?.returnDate).toLocaleDateString("en-GB", options).split(',')[1] : 'Save more'

                                    }</strong>
                                    <br></br>
                                    {
                                        city?.returnDate && flightType === 'roundTrip' ? new Date(city?.returnDate).toLocaleDateString("en-GB", options).split(',')[0] : 'on return flight'
                                    }

                                </Paper>
                                { openIndex === index &&
                                    <Paper onClick={ e => e.stopPropagation() } sx={ { display: showReturnDate ? 'inline-block' : 'none', position: 'absolute', zIndex: 7 - index } }>

                                        <LocalizationProvider dateAdapter={ AdapterDateFns } >
                                            <DatePicker sx={ { py: 3 } }
                                                label="" //Return Date
                                                // views={ ['year', 'month'] }
                                                // maxDate={ new Date('2022-06-01') }
                                                open={ showReturnDate ? true : false }
                                                required
                                                // onClick={ e => setFlightType('roundTrip') }
                                                value={ city.returnDate }
                                                // inputFormat="yyyy-MMM-dd "
                                                // disabled={  flightType === 'roundTrip' ? false : true }
                                                onChange={ date => handleReturnDateChange(index, date) }
                                                renderInput={ (params) => <TextField   { ...params } /> }
                                            />
                                        </LocalizationProvider>
                                    </Paper> }
                            </Grid> }

                        {/* </Grid>
                        </Grid> */}
                        <Grid item xs={ 12 } sm={ 6 } md={ flightType === 'multiCity' ? 3 : 2.5 } sx={ {} }>
                            { index === 0 ? <PassengerAndClasses /> :
                                <Paper sx={ {} }>
                                    <Button fullWidth variant="contained" color="success" onClick={ addCity }>
                                        Add City
                                    </Button>
                                    <Button fullWidth variant="outlined" color="error" onClick={ () => removeCity(index) }>
                                        Remove City
                                    </Button>
                                </Paper>
                            }
                        </Grid>


                    </Grid>
                )) }

            </Container>
            <Grid item sm={ 12 }
                sx={ { textAlign: "center", py: 1 } }>
                <Link to={ `/FlightSearchsv3` }
                    variant="outlined" style={ linkStyle }>
                    Search Flights
                </Link >
            </Grid>
        </Box >
    );
};

export default FlightsV3;