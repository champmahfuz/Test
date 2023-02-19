import { Alert, Button, Grid, Paper } from '@mui/material';
import React, { useState } from 'react';
import './ReviewDetails.css'
import SendIcon from '@mui/icons-material/Send';
import axios from '../../../../../../api/axios';
import useValue from '../../../../../../hooks/useValue';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../../UserFile/userfirebase.init';
import UserLogin from '../../../../../UserFile/UserLogin/UserLogin';
import LoginPopupComponent from '../../../../../UserFile/UserLogin/LoginPopupComponent';

const ReviewDetails = ({ passengerDetailsForm, flightSegments }) => {
    const [user] = useAuthState(auth);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const { passengersTotal, } = useValue({})
    const passengersTotalData = JSON.stringify(passengersTotal)
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    console.log(passengerDetailsForm)

    const [gdsPnr, setGdsPnr] = useState({})
    const [airlinePnr, setAirlinePnr] = useState(null)
    const [gdsPnrSave, setGdsPnrSave] = useState({})
    const [loadingMassage, setLoadingMassage] = useState({})

    const selectedFlight = JSON.parse(window.localStorage.getItem('selectedFlight'));
    let airlinePnrNumber = !airlinePnr ? '' : airlinePnr?.flights[0].confirmationId;
    const itineraryData = {
        email: 'syedhasib01@gmail.com',
        ItineraryRef: gdsPnr?.data?.CreatePassengerNameRecordRS?.ItineraryRef?.ID,
        AirlinePnr: airlinePnrNumber,
        PersonName: passengerDetailsForm,
        // flightSegment: flightSegments,
        FlightSegment: flightSegments,
        selectedFlight: selectedFlight,
    }
    console.log('user', user?.email)
    const postData = async () => {
        try {
            const response = await axios.post(`api/getBooking`, JSON.stringify(itineraryData), {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setGdsPnrSave(response.data)
            console.log(response.data);

            setLoadingMassage('Completing Reservation')
            navigate(`/Payment/${response.data._id}`);
        } catch (error) {
            console.error(error);
        }
    };



    const travellerInfo = JSON.stringify(passengerDetailsForm)
    const flightSegment = JSON.stringify(flightSegments)


    useEffect(() => {
        if (airlinePnr?.flights) {
            postData();
            // getBookingPnr();
            setLoading(false)
        }
    }, [airlinePnr?.flights])

    useEffect(() => {
        if (gdsPnr?.data?.CreatePassengerNameRecordRS?.ItineraryRef?.ID) {
            // postData();
            getBookingPnr();
            setLoading(false)
        }
    }, [gdsPnr?.data?.CreatePassengerNameRecordRS?.ItineraryRef?.ID])


    const gdsPnrData = async () => {

        try {
            const gdsPnrResponse = await axios.get(`api/createPNR?passengersTotalData=${passengersTotalData}&travellerInfo=${travellerInfo}&flightSegment=${flightSegment}`);
            setGdsPnr(gdsPnrResponse.data)
            console.log(gdsPnrResponse.data);

            setLoadingMassage('Creating Airline PNR')

        } catch (error) {
            console.error(error);
        }
        setLoading(false)

    };

    const getBookingPnr = async () => {
        try {
            const airlinePnrResponse = await axios.get(`api/confirmBooking?gdsPnr=${gdsPnr?.data?.CreatePassengerNameRecordRS?.ItineraryRef?.ID}`);
            setAirlinePnr(airlinePnrResponse.data)
            console.log(airlinePnrResponse.data);

        } catch (error) {
            console.error(error);
        }
        setLoading(false)
    };

    // console.log(gdsPnr)
    console.log(itineraryData)



    console.log(gdsPnrSave)

    const confirmBooking = async (e) => {
        setLoading(true)
        setLoadingMassage('Creating GDS PNR')
        e.preventDefault();

        // navigate("/Payment/1");



        gdsPnrData();


    }

    // const formValidation = passengerDetailsForm.map((passengerDetailsFormData,index)=>(
    //     passengerDetailsFormData.
    // ))
    const isFormValid = () => {
        return passengerDetailsForm.every(value => value.title
            && value.firstname
            && value.lastname
            && value.dateOfBirth
            && value.Country
            && value.email
            && value.phoneNumber
            && value.passportnumber
            && value.passengerPassportExpirtyDate
            !== '')

    };
    // error, setError
    // useEffect(() => {
    //     passengerDetailsForm.every(value => value.title === '') && setError("Please Select The title")
    // }, [passengerDetailsForm])
    // console.log(error);
    const Popup = props => {
        return (
            <div className="popup-box">

                <Paper className="box" style={ { width: user?.email ? '70%' : '320px' } }>
                    {
                        user?.email && <Paper elevation={ 0 } sx={ { height: '10px', backgroundColor: '#333', m: 0, p: 0 } } />
                    }

                    {/* </Paper> */ }
                    <span className="close-icon" onClick={ props.handleClose }>X</span>
                    { props.content }
                </Paper>
            </div>
        );
    };
    return (

        <div>

            <Button
                disabled={ !isFormValid() }
                onClick={ togglePopup } variant="contained" color="success" fullWidth>{
                    !isFormValid() ? "Fill Up The Form Currectly" : "CONTINUE"
                }</Button>

            { isOpen && <Popup
                content={ user?.email ? <div>
                    <h4><b> Review Details</b></h4>
                    <Alert severity="warning"><h6 color='red'>Important !</h6>
                        <small style={ { color: '#333' } }> Please re-check the passenger Details <b>  (e.g: Name, Date of Birth, Passport Number)</b> otherwise the airlines will penalise you for providing incorrect information.</small>
                    </Alert>
                    <Grid container spacing={ 2 } sx={ { mt: 1 } }>

                        <Grid item xs={ 12 } md={ 6 }>
                            <h5>Pessanger Details:</h5>

                        </Grid>
                        <Grid item xs={ 12 } md={ 6 }>
                            Total { passengerDetailsForm.length } Pessanger's

                        </Grid>
                    </Grid>
                    { loading ? `LOADING For ${loadingMassage}` : <Paper sx={ { p: 1 } } >
                        { passengerDetailsForm.map((passengerDetailsFormData, index) => (
                            <Grid key={ index } container spacing={ 0 } sx={ { mt: 1 } }>

                                <Grid item xs={ 12 } sm={ 6 } md={ 3 } sx={ { p: 0, m: 0 } }>
                                    <b>Traveler { index + 1 }</b> <br></br>
                                    <small>Given Name / First Name</small><br></br>
                                    { passengerDetailsFormData.firstname }

                                </Grid>
                                <Grid item xs={ 12 } sm={ 6 } md={ 2.5 } sx={ { p: 0, m: 0 } }>
                                    <b> </b>{ passengerDetailsFormData.PassengerType }<br></br>
                                    <small>Surname / Last Name</small><br></br>
                                    { passengerDetailsFormData.lastname }
                                </Grid>
                                <Grid item xs={ 12 } sm={ 4 } md={ 2 } sx={ { p: 0, m: 0 } }>
                                    <b> </b><br></br>
                                    <small>Date of Birth</small><br></br>
                                    { passengerDetailsFormData.dateOfBirth }
                                </Grid>


                                <Grid item xs={ 12 } sm={ 4 } md={ 2 } sx={ { p: 0, m: 0 } }>
                                    <b> </b><br></br>
                                    <small>Passport Number</small><br></br>
                                    { passengerDetailsFormData.passportnumber }
                                </Grid>
                                <Grid item xs={ 12 } sm={ 4 } md={ 2.5 } sx={ { p: 0, m: 0 } }>
                                    <b> </b><br></br>
                                    <small>Passport Expiry Date</small><br></br>
                                    { passengerDetailsFormData.passengerPassportExpirtyDate }
                                </Grid>
                            </Grid>
                        )) }
                    </Paper> }

                    <Grid container spacing={ 2 } sx={ { mt: 1 } }>
                        <Grid item xs={ 12 } sx={ { textAlign: 'center' } }><small>Your booking will be confirmed and held for 20 minutes to complete payment.</small></Grid>
                        <Grid item xs={ 12 } md={ 6 }>

                            <Button variant="outlined" color="success" onClick={ togglePopup } fullWidth disabled={ loading ? true : false }>Edit Details</Button>
                        </Grid>
                        <Grid item xs={ 12 } md={ 6 }>

                            <Button onClick={ confirmBooking } variant="contained" color="success" endIcon={ <SendIcon /> } fullWidth >Confirm Booking</Button>
                        </Grid>
                    </Grid>

                </div> : <div style={ { textAlign: 'center' } }>
                    <LoginPopupComponent />
                </div> }
                handleClose={ togglePopup }
            /> }
        </div>
    );
};

export default ReviewDetails;