import React, { useEffect, useState } from 'react';
import useValue from '../../../../../../hooks/useValue';
import { allFData, selectData } from './BookingCard';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Button } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import BookingShcedules from './BookingShcedules';
import TravellerForm from './TravellerForm';
import TestFormData from './TestFormData';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import useFetch from '../../../../../../hooks/useFetch';
import axios from '../../../../../../api/axios';
import TestComponent from '../../../../TestComponent/TestComponent';
import ReviewDetails from './ReviewDetails';
import TravellerFormV2 from './TravellerFormV2';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton { ...other } />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const TravellerDetails = ({ flightSegments }) => {
    const navigate = useNavigate();
    const [expandedOne, setExpandedOne] = React.useState(true);
    const [expandedTwo, setExpandedTwo] = React.useState(true);
    const [expandedThree, setExpandedThree] = React.useState(true);
    const [expandedFour, setExpandedFour] = React.useState(true);
    const [expandedFive, setExpandedFive] = React.useState(true);
    const [expandedSix, setExpandedSix] = React.useState(true);
    const [expandedSeven, setExpandedSeven] = React.useState(true);
    const [expandedEight, setExpandedEight] = React.useState(true);
    const [expandedNine, setExpandedNine] = React.useState(true);
    const [expandedTen, setExpandedTen] = React.useState(true);
    const [expandedEleven, setExpandedEleven] = React.useState(true);
    const [expandedTwelve, setExpandedTwelve] = React.useState(true);
    const [expandedThirteen, setExpandedThirteen] = React.useState(true);

    // const [selectedGender, setSelectedGender] = React.useState(-1);


    const { passengersTotal, passengerQuantittyForForm, } = useValue({})
    const passengersTotalData = JSON.stringify(passengersTotal)

    // console.log(passengersTotal)

    const handleTravellerDetailsOne = () => {
        setExpandedOne(!expandedOne);
        // console.log('One')
    };
    const handleTravellerDetailsTwo = () => {
        setExpandedTwo(!expandedTwo);
        // console.log('Two')
    };
    const handleTravellerDetailsThree = () => {
        setExpandedThree(!expandedThree);
        // console.log('Three')
    };
    const handleTravellerDetailsFour = () => {
        setExpandedFour(!expandedFour)
        // console.log('Four')
    };


    const handleTravellerDetailsFive = () => {
        setExpandedFive(!expandedFive)
        // console.log('Four')
    };
    const handleTravellerDetailsSix = () => {
        setExpandedSix(!expandedSix)
        // console.log('Four')
    };
    const handleTravellerDetailsSeven = () => {
        setExpandedSeven(!expandedSeven)
        // console.log('Four')
    };
    const handleTravellerDetailsEight = () => {
        setExpandedEight(!expandedEight)
        // console.log('Four')
    };
    const handleTravellerDetailsNine = () => {
        setExpandedNine(!expandedNine)
        // console.log('Four')
    };
    const handleTravellerDetailsTen = () => {
        setExpandedTen(!expandedTen)
        // console.log('Four')
    };

    const handleTravellerDetailsEleven = () => {
        setExpandedEleven(!expandedEleven)
        // console.log('Four')
    };
    const handleTravellerDetailsTwelve = () => {
        setExpandedTwelve(!expandedTwelve)
        // console.log('Four')
    };
    const handleTravellerDetailsThirteen = () => {
        setExpandedThirteen(!expandedThirteen)
        // console.log('Four')
    };
    // Form Data
    const [passengerPhoneNumber, setPassengerPhoneNumber] = useState('')
    const [passengerPassportImage, setPassengerPassportImage] = useState('')

    const [passengerCountry, setPassengerCountry] = useState({
        code: 'BD',
        label: 'Bangladesh',
        phone: '880'
    })
    // passengerDetailsForm, setPassengerDetailsForm
    const newPassengerQuantittyForForm = passengerQuantittyForForm.map((el) => ({
        ...el,
        "phoneNumber": "",
        "passengerPassportImage": "",
        "SavePassenger": true,
        "Country": "",
        "title": "",
        "firstname": "",
        "lastname": "",
        "email": "",
        "dateOfBirth": "",
        "passportnumber": "",
        "passengerPassportExpirtyDate": ""

    }))
    // const passengerFormData = {
    //     ...passengerQuantittyForForm,
    //     ...{
    //         "phoneNumber": "+8801521312761",
    //         "passengerPassportImage": "",
    //         "SavePassenger": true,
    //         "Country": {
    //             "code": "BD",
    //             "label": "Bangladesh",
    //             "phone": "880"
    //         },
    //         "title": "MR",
    //         "firstname": "Syed",
    //         "lastname": "Rahman",
    //         "email": "syedhasib01@gmail.com",
    //         "dateOfBirth": "2023-02-03",
    //         "passportnumber": "AS123",
    //     }
    // }
    // console.log(newPassengerQuantittyForForm);
    // const [passengerDetailsForm, setPassengerDetailsForm] = useState(passengerQuantittyForForm)
    const [passengerDetailsForm, setPassengerDetailsForm] = useState(newPassengerQuantittyForForm)
    const handleFormChange = (index, event) => {
        let data = [...passengerDetailsForm];
        data[index]['phoneNumber'] = passengerPhoneNumber;
        data[index]['passengerPassportImage'] = passengerPassportImage;
        data[index]['SavePassenger'] = true || event.target.value;
        data[index]['Country'] = passengerCountry || {
            code: 'BD',
            label: 'Bangladesh',
            phone: '880'
        };
        data[index][event.target.name] = event.target.value;
        setPassengerDetailsForm(data);
    }


    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const submit = async (e) => {
        setLoading(true)
        e.preventDefault();

        const travellerInfo = JSON.stringify(passengerDetailsForm)
        const flightSegment = JSON.stringify(flightSegments)
        const response = await axios.get(`api/createPNR?passengersTotalData=${passengersTotalData}&travellerInfo=${travellerInfo}&flightSegment=${flightSegment}`);
        if (response.data) {
            const response2 = [response?.data, { ...passengerDetailsForm }];
            console.log('response2', response2);
            console.log('response', response?.data);
        } else {
            console.log('response', response);
            console.log('responseData', response.data);
        }


        setLoading(false)



        // navigate("/");
    }

    console.log('passengerDetailsForm', passengerDetailsForm)
    // console.log(passengerPassportImage);

    return (
        loading ? <Box sx={ { mt: 5 } }>

        </Box> :
            <Box sx={ { mt: 5 } }>
                <Typography variant="h6" color="text.secondary" fontWeight={ 900 } fontSize={ 15 }>
                    Enter Traveller Details
                </Typography>
                {/* onSubmit={ handleSubmit } */ }

                <form onSubmit={ submit }>
                    { passengerDetailsForm.map((input, travellerIndex) => {
                        return (
                            <Card sx={ { my: 2 } } key={ travellerIndex }>
                                <CardActions disableSpacing
                                    sx={ { borderBottom: '2px solid #333' } }
                                    // expand={ expandedTwo }

                                    onClick={

                                        travellerIndex === 0 ? handleTravellerDetailsOne
                                            : travellerIndex === 1 ? handleTravellerDetailsTwo
                                                : travellerIndex === 2 ? handleTravellerDetailsThree
                                                    : travellerIndex === 3 ? handleTravellerDetailsFour
                                                        : travellerIndex === 4 ? handleTravellerDetailsFive
                                                            : travellerIndex === 5 ? handleTravellerDetailsSix
                                                                : travellerIndex === 6 ? handleTravellerDetailsSeven
                                                                    : travellerIndex === 7 ? handleTravellerDetailsEight
                                                                        : travellerIndex === 8 ? handleTravellerDetailsNine
                                                                            : travellerIndex === 9 ? handleTravellerDetailsTen
                                                                                : travellerIndex === 10 ? handleTravellerDetailsEleven
                                                                                    : travellerIndex === 11 ? handleTravellerDetailsTwelve
                                                                                        : travellerIndex === 12 ? handleTravellerDetailsThirteen
                                                                                            : handleTravellerDetailsTen


                                    }
                                    aria-expanded={ expandedTwo }
                                    aria-label="show more"
                                >
                                    <Typography variant="body2" color="text.secondary" fontWeight={ 700 } fontSize={ 15 }>
                                        {/* Passenger { index + 1 } Adult Primary Contact */ }
                                        {
                                            travellerIndex === 0 ? `Passenger ${travellerIndex + 1} ${input.PassengerType



                                                } Primary Contact` : `Passenger ${travellerIndex + 1} ${input.PassengerType
                                                } `
                                        }
                                    </Typography>
                                    <ExpandMore >
                                        <ExpandMoreIcon />
                                    </ExpandMore>
                                </CardActions>

                                <Collapse in={
                                    travellerIndex === 0 ? expandedOne
                                        : travellerIndex === 1 ? expandedTwo
                                            : travellerIndex === 2 ? expandedThree
                                                : travellerIndex === 3 ? expandedFour
                                                    : travellerIndex === 4 ? expandedFive
                                                        : travellerIndex === 5 ? expandedSix
                                                            : travellerIndex === 6 ? expandedSeven
                                                                : travellerIndex === 7 ? expandedEight
                                                                    : travellerIndex === 8 ? expandedNine
                                                                        : travellerIndex === 9 ? expandedTen
                                                                            : travellerIndex === 10 ? expandedEleven
                                                                                : travellerIndex === 11 ? expandedTwelve
                                                                                    : expandedThirteen

                                } timeout="auto" unmountOnExit>
                                    <CardContent>

                                        <TravellerFormV2
                                            travellerIndex={ travellerIndex }
                                            input={ input }
                                            handleFormChange={ handleFormChange }
                                            setPassengerPhoneNumber={ setPassengerPhoneNumber }
                                            passengerPassportImage={ passengerPassportImage } setPassengerPassportImage={ setPassengerPassportImage }
                                            passengerCountry={ passengerCountry }
                                            setPassengerCountry={ setPassengerCountry }
                                            passengerDetailsForm={ passengerDetailsForm }
                                        />
                                        {/* <TestFormData /> */ }

                                    </CardContent>
                                </Collapse>
                            </Card>)
                    }) }

                    <ReviewDetails passengerDetailsForm={ passengerDetailsForm } flightSegments={ flightSegments } />


                    {/* <Button type='submit' variant="contained" color="success" fullWidth='true'>Continue</Button> */ }



                    {/* <Button type='submit' variant="contained" color="success" fullWidth='true' onClick={ 'handleBooking' } >Continue</Button> */ }


                    {/* <Button type='submit' variant="contained" color="success" fullWidth='true' onClick={ 'handleBooking' }><Link style={ { background: 'transparent', color: 'white', fontSize: '18px', fontWeight: 'bolder' } } to={ `/` }>Continue</Link></Button> */ }
                </form>
            </Box>
    );
};

export default TravellerDetails;