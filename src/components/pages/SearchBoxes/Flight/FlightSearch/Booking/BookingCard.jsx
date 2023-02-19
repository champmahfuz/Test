import React from 'react';
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
import useValue from '../../../../../../hooks/useValue';
import { Box } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import BookingShcedules from './BookingShcedules';


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

const BookingCard = () => {
    const [expandedOne, setExpandedOne] = React.useState(true);
    const [expandedTwo, setExpandedTwo] = React.useState(true);
    const [expandedThree, setExpandedThree] = React.useState(true);


    // const { selectedFlight } = useValue()
    const selectedFlight = JSON.parse(window.localStorage.getItem('selectedFlight'));
    const allData = JSON.parse(window.localStorage.getItem('allData'));
    const theFlight = selectedFlight;
    const allFlightData = allData;
    // const itinerariesData = allFlightData?.groupedItineraryResponse?.itineraryGroups[0]?.itineraries;
    const legDescs = allFlightData?.groupedItineraryResponse?.legDescs;

    const scheduleDescs = allFlightData?.groupedItineraryResponse?.scheduleDescs;

    // console.log(theFlight, allFlightData)

    const handleExpandClick = () => {
        setExpandedOne(!expandedOne);
    };
    const handleFlightDetailsExpandClick = () => {
        setExpandedTwo(!expandedTwo);
    };






    return (<>
        <Card sx={ { mb: 3 } }>
            <CardActions disableSpacing
                sx={ { borderBottom: '2px solid #333' } }

                onClick={ handleExpandClick }
                aria-expanded={ expandedOne }
                aria-label="show more"
            >
                <Typography variant="body2" color="text.secondary" fontWeight={ 900 } fontSize={ 15 }>
                    Shcedules Details
                </Typography>
                <ExpandMore
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={ expandedOne } timeout="auto" unmountOnExit>
                <CardContent >
                    <BookingShcedules />

                    <Typography paragraph>



                    </Typography>

                </CardContent>
            </Collapse>
        </Card>
        <Card sx={ {} }>
            <CardActions disableSpacing
                sx={ { borderBottom: '2px solid #333' } }
                // expand={ expandedTwo }
                onClick={ handleFlightDetailsExpandClick }
                aria-expanded={ expandedTwo }
                aria-label="show more"
            >
                <Typography variant="body2" color="text.secondary" fontWeight={ 900 } fontSize={ 15 }>
                    Flight Details
                </Typography>
                <ExpandMore >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={ expandedTwo } timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                        aside for 10 minutes.
                    </Typography>

                </CardContent>
            </Collapse>
        </Card>
    </>
    );
};

export const selectData = {
    "id": 1,
    "pricingSource": "ADVJR1",
    "legs": [
        {
            "ref": 7
        },
        {
            "ref": 12
        }
    ],
    "pricingInformation": [
        {
            "pricingSubsource": "HPIS",
            "fare": {
                "validatingCarrierCode": "BG",
                "vita": true,
                "eTicketable": true,
                "lastTicketDate": "2022-10-24",
                "lastTicketTime": "22:34",
                "governingCarriers": "BG BG",
                "passengerInfoList": [
                    {
                        "passengerInfo": {
                            "passengerType": "ADT",
                            "passengerNumber": 2,
                            "nonRefundable": false,
                            "fareComponents": [
                                {
                                    "ref": 7,
                                    "beginAirport": "DAC",
                                    "endAirport": "BKK",
                                    "segments": [
                                        {
                                            "segment": {
                                                "bookingCode": "B",
                                                "cabinCode": "Y",
                                                "mealCode": "M",
                                                "seatsAvailable": 9,
                                                "availabilityBreak": true
                                            }
                                        }
                                    ]
                                },
                                {
                                    "ref": 4,
                                    "beginAirport": "BKK",
                                    "endAirport": "DAC",
                                    "segments": [
                                        {
                                            "segment": {
                                                "bookingCode": "K",
                                                "cabinCode": "Y",
                                                "mealCode": "M",
                                                "seatsAvailable": 4,
                                                "availabilityBreak": true
                                            }
                                        }
                                    ]
                                }
                            ],
                            "taxes": [
                                {
                                    "ref": 18
                                },
                                {
                                    "ref": 12
                                },
                                {
                                    "ref": 13
                                },
                                {
                                    "ref": 6
                                },
                                {
                                    "ref": 2
                                },
                                {
                                    "ref": 11
                                },
                                {
                                    "ref": 16
                                },
                                {
                                    "ref": 4
                                },
                                {
                                    "ref": 15
                                },
                                {
                                    "ref": 9
                                },
                                {
                                    "ref": 10
                                }
                            ],
                            "taxSummaries": [
                                {
                                    "ref": 12
                                },
                                {
                                    "ref": 9
                                },
                                {
                                    "ref": 2
                                },
                                {
                                    "ref": 6
                                },
                                {
                                    "ref": 1
                                },
                                {
                                    "ref": 10
                                },
                                {
                                    "ref": 8
                                },
                                {
                                    "ref": 11
                                },
                                {
                                    "ref": 3
                                }
                            ],
                            "currencyConversion": {
                                "from": "USD",
                                "to": "BDT",
                                "exchangeRateUsed": 97.35
                            },
                            "passengerTotalFare": {
                                "totalFare": 30304,
                                "totalTaxAmount": 9860,
                                "currency": "BDT",
                                "baseFareAmount": 210,
                                "baseFareCurrency": "USD",
                                "equivalentAmount": 20444,
                                "equivalentCurrency": "BDT",
                                "constructionAmount": 210,
                                "constructionCurrency": "NUC"
                            },
                            "baggageInformation": [
                                {
                                    "provisionType": "A",
                                    "airlineCode": "BG",
                                    "segments": [
                                        {
                                            "id": 0
                                        }
                                    ],
                                    "allowance": {
                                        "ref": 4
                                    }
                                },
                                {
                                    "provisionType": "A",
                                    "airlineCode": "BG",
                                    "segments": [
                                        {
                                            "id": 1
                                        }
                                    ],
                                    "allowance": {
                                        "ref": 4
                                    }
                                }
                            ]
                        }
                    }
                ],
                "totalFare": {
                    "totalPrice": 60608,
                    "totalTaxAmount": 19720,
                    "currency": "BDT",
                    "baseFareAmount": 420,
                    "baseFareCurrency": "USD",
                    "constructionAmount": 420,
                    "constructionCurrency": "NUC",
                    "equivalentAmount": 40888,
                    "equivalentCurrency": "BDT"
                }
            }
        }
    ],
    "diversitySwapper": {
        "weighedPrice": 19914.057
    }
}

export const allFData = {
    "groupedItineraryResponse": {
        "version": "6.6.1",
        "messages": [
            {
                "severity": "Info",
                "type": "SERVER",
                "code": "GCA14-ISELL-TN-00-2022-11-00-CJQF",
                "text": "27038"
            },
            {
                "severity": "Info",
                "type": "WORKERTHREAD",
                "code": "TRANSACTIONID",
                "text": "317666661052779852"
            },
            {
                "severity": "Info",
                "type": "DRE",
                "code": "RULEID",
                "text": "21728"
            },
            {
                "severity": "Info",
                "type": "DEFAULT",
                "code": "RULEID",
                "text": "25238"
            }
        ],
        "statistics": {
            "itineraryCount": 11
        },
        "scheduleDescs": [
            {
                "id": 1,
                "frequency": "****T**",
                "stopCount": 0,
                "eTicketable": true,
                "totalMilesFlown": 1487,
                "elapsedTime": 210,
                "departure": {
                    "airport": "BKK",
                    "city": "BKK",
                    "country": "TH",
                    "time": "08:55:00+07:00"
                },
                "arrival": {
                    "airport": "CMB",
                    "city": "CMB",
                    "country": "LK",
                    "time": "10:55:00+05:30"
                },
                "carrier": {
                    "marketing": "UL",
                    "marketingFlightNumber": 403,
                    "operating": "UL",
                    "operatingFlightNumber": 403,
                    "alliances": "OW ",
                    "equipment": {
                        "code": "321",
                        "typeForFirstLeg": "N",
                        "typeForLastLeg": "N"
                    }
                }
            },
            {
                "id": 2,
                "frequency": "****T*S",
                "stopCount": 0,
                "eTicketable": true,
                "totalMilesFlown": 970,
                "elapsedTime": 155,
                "departure": {
                    "airport": "BKK",
                    "city": "BKK",
                    "country": "TH",
                    "time": "10:55:00+07:00"
                },
                "arrival": {
                    "airport": "DAC",
                    "city": "DAC",
                    "country": "BD",
                    "time": "12:30:00+06:00",
                    "terminal": "2"
                },
                "carrier": {
                    "marketing": "TG",
                    "marketingFlightNumber": 321,
                    "operating": "TG",
                    "operatingFlightNumber": 321,
                    "equipment": {
                        "code": "788",
                        "typeForFirstLeg": "W",
                        "typeForLastLeg": "W"
                    }
                }
            },
            {
                "id": 3,
                "frequency": "SMTWTFS",
                "stopCount": 0,
                "eTicketable": true,
                "totalMilesFlown": 970,
                "elapsedTime": 150,
                "departure": {
                    "airport": "DAC",
                    "city": "DAC",
                    "country": "BD",
                    "time": "11:30:00+06:00",
                    "terminal": "2"
                },
                "arrival": {
                    "airport": "BKK",
                    "city": "BKK",
                    "country": "TH",
                    "time": "15:00:00+07:00"
                },
                "carrier": {
                    "marketing": "BG",
                    "marketingFlightNumber": 388,
                    "operating": "BG",
                    "operatingFlightNumber": 388,
                    "equipment": {
                        "code": "738",
                        "typeForFirstLeg": "N",
                        "typeForLastLeg": "N"
                    }
                }
            },
            {
                "id": 4,
                "frequency": "S*T*T**",
                "stopCount": 0,
                "eTicketable": true,
                "totalMilesFlown": 970,
                "elapsedTime": 155,
                "departure": {
                    "airport": "BKK",
                    "city": "BKK",
                    "country": "TH",
                    "time": "23:15:00+07:00"
                },
                "arrival": {
                    "airport": "DAC",
                    "city": "DAC",
                    "country": "BD",
                    "time": "00:50:00+06:00",
                    "terminal": "2",
                    "dateAdjustment": 1
                },
                "carrier": {
                    "marketing": "TG",
                    "marketingFlightNumber": 339,
                    "operating": "TG",
                    "operatingFlightNumber": 339,
                    "equipment": {
                        "code": "772",
                        "typeForFirstLeg": "W",
                        "typeForLastLeg": "W"
                    }
                }
            },
            {
                "id": 5,
                "frequency": "*M*****",
                "stopCount": 0,
                "eTicketable": true,
                "totalMilesFlown": 1487,
                "elapsedTime": 215,
                "departure": {
                    "airport": "CMB",
                    "city": "CMB",
                    "country": "LK",
                    "time": "01:15:00+05:30"
                },
                "arrival": {
                    "airport": "BKK",
                    "city": "BKK",
                    "country": "TH",
                    "time": "06:20:00+07:00"
                },
                "carrier": {
                    "marketing": "UL",
                    "marketingFlightNumber": 402,
                    "operating": "UL",
                    "operatingFlightNumber": 402,
                    "alliances": "OW ",
                    "equipment": {
                        "code": "32B",
                        "typeForFirstLeg": "N",
                        "typeForLastLeg": "N"
                    }
                }
            },
            {
                "id": 6,
                "frequency": "SMTWTFS",
                "stopCount": 0,
                "eTicketable": true,
                "totalMilesFlown": 1791,
                "elapsedTime": 245,
                "departure": {
                    "airport": "SIN",
                    "city": "SIN",
                    "country": "SG",
                    "time": "20:35:00+08:00",
                    "terminal": "3"
                },
                "arrival": {
                    "airport": "DAC",
                    "city": "DAC",
                    "country": "BD",
                    "time": "22:40:00+06:00",
                    "terminal": "2"
                },
                "carrier": {
                    "marketing": "SQ",
                    "marketingFlightNumber": 446,
                    "operating": "SQ",
                    "operatingFlightNumber": 446,
                    "equipment": {
                        "code": "359",
                        "typeForFirstLeg": "W",
                        "typeForLastLeg": "W"
                    }
                }
            },
            {
                "id": 7,
                "frequency": "SMTWTFS",
                "stopCount": 0,
                "eTicketable": true,
                "totalMilesFlown": 876,
                "elapsedTime": 150,
                "departure": {
                    "airport": "BKK",
                    "city": "BKK",
                    "country": "TH",
                    "time": "12:15:00+07:00"
                },
                "arrival": {
                    "airport": "SIN",
                    "city": "SIN",
                    "country": "SG",
                    "time": "15:45:00+08:00",
                    "terminal": "0"
                },
                "carrier": {
                    "marketing": "SQ",
                    "marketingFlightNumber": 707,
                    "operating": "SQ",
                    "operatingFlightNumber": 707,
                    "equipment": {
                        "code": "359",
                        "typeForFirstLeg": "W",
                        "typeForLastLeg": "W"
                    }
                }
            },
            {
                "id": 8,
                "frequency": "**T*T*S",
                "stopCount": 0,
                "eTicketable": true,
                "totalMilesFlown": 876,
                "elapsedTime": 155,
                "departure": {
                    "airport": "BKK",
                    "city": "BKK",
                    "country": "TH",
                    "time": "15:40:00+07:00"
                },
                "arrival": {
                    "airport": "SIN",
                    "city": "SIN",
                    "country": "SG",
                    "time": "19:15:00+08:00",
                    "terminal": "0"
                },
                "carrier": {
                    "marketing": "SQ",
                    "marketingFlightNumber": 709,
                    "operating": "SQ",
                    "operatingFlightNumber": 709,
                    "equipment": {
                        "code": "359",
                        "typeForFirstLeg": "W",
                        "typeForLastLeg": "W"
                    }
                }
            },
            {
                "id": 9,
                "frequency": "SM*****",
                "stopCount": 0,
                "eTicketable": true,
                "totalMilesFlown": 876,
                "elapsedTime": 145,
                "departure": {
                    "airport": "SIN",
                    "city": "SIN",
                    "country": "SG",
                    "time": "09:45:00+08:00",
                    "terminal": "2"
                },
                "arrival": {
                    "airport": "BKK",
                    "city": "BKK",
                    "country": "TH",
                    "time": "11:10:00+07:00"
                },
                "carrier": {
                    "marketing": "SQ",
                    "marketingFlightNumber": 708,
                    "operating": "SQ",
                    "operatingFlightNumber": 708,
                    "equipment": {
                        "code": "359",
                        "typeForFirstLeg": "W",
                        "typeForLastLeg": "W"
                    }
                }
            },
            {
                "id": 10,
                "frequency": "SMTWTFS",
                "stopCount": 0,
                "eTicketable": true,
                "totalMilesFlown": 876,
                "elapsedTime": 150,
                "departure": {
                    "airport": "SIN",
                    "city": "SIN",
                    "country": "SG",
                    "time": "13:05:00+08:00",
                    "terminal": "2"
                },
                "arrival": {
                    "airport": "BKK",
                    "city": "BKK",
                    "country": "TH",
                    "time": "14:35:00+07:00"
                },
                "carrier": {
                    "marketing": "SQ",
                    "marketingFlightNumber": 710,
                    "operating": "SQ",
                    "operatingFlightNumber": 710,
                    "equipment": {
                        "code": "359",
                        "typeForFirstLeg": "W",
                        "typeForLastLeg": "W"
                    }
                }
            },
            {
                "id": 11,
                "frequency": "SMTWTFS",
                "stopCount": 0,
                "eTicketable": true,
                "totalMilesFlown": 970,
                "elapsedTime": 165,
                "departure": {
                    "airport": "BKK",
                    "city": "BKK",
                    "country": "TH",
                    "time": "16:15:00+07:00"
                },
                "arrival": {
                    "airport": "DAC",
                    "city": "DAC",
                    "country": "BD",
                    "time": "18:00:00+06:00",
                    "terminal": "2"
                },
                "carrier": {
                    "marketing": "BG",
                    "marketingFlightNumber": 389,
                    "operating": "BG",
                    "operatingFlightNumber": 389,
                    "equipment": {
                        "code": "738",
                        "typeForFirstLeg": "N",
                        "typeForLastLeg": "N"
                    }
                }
            },
            {
                "id": 12,
                "frequency": "SMTWTFS",
                "stopCount": 0,
                "eTicketable": true,
                "totalMilesFlown": 1791,
                "elapsedTime": 245,
                "departure": {
                    "airport": "DAC",
                    "city": "DAC",
                    "country": "BD",
                    "time": "23:55:00+06:00",
                    "terminal": "2"
                },
                "arrival": {
                    "airport": "SIN",
                    "city": "SIN",
                    "country": "SG",
                    "time": "06:00:00+08:00",
                    "terminal": "0",
                    "dateAdjustment": 1
                },
                "carrier": {
                    "marketing": "SQ",
                    "marketingFlightNumber": 447,
                    "operating": "SQ",
                    "operatingFlightNumber": 447,
                    "equipment": {
                        "code": "359",
                        "typeForFirstLeg": "W",
                        "typeForLastLeg": "W"
                    }
                }
            },
            {
                "id": 13,
                "frequency": "SMTWTFS",
                "stopCount": 0,
                "eTicketable": true,
                "totalMilesFlown": 876,
                "elapsedTime": 155,
                "departure": {
                    "airport": "SIN",
                    "city": "SIN",
                    "country": "SG",
                    "time": "15:25:00+08:00",
                    "terminal": "2"
                },
                "arrival": {
                    "airport": "BKK",
                    "city": "BKK",
                    "country": "TH",
                    "time": "17:00:00+07:00"
                },
                "carrier": {
                    "marketing": "SQ",
                    "marketingFlightNumber": 712,
                    "operating": "SQ",
                    "operatingFlightNumber": 712,
                    "equipment": {
                        "code": "359",
                        "typeForFirstLeg": "W",
                        "typeForLastLeg": "W"
                    }
                }
            },
            {
                "id": 14,
                "frequency": "S******",
                "stopCount": 0,
                "eTicketable": true,
                "totalMilesFlown": 1338,
                "elapsedTime": 205,
                "departure": {
                    "airport": "DAC",
                    "city": "DAC",
                    "country": "BD",
                    "time": "13:00:00+06:00",
                    "terminal": "1"
                },
                "arrival": {
                    "airport": "CMB",
                    "city": "CMB",
                    "country": "LK",
                    "time": "15:55:00+05:30"
                },
                "carrier": {
                    "marketing": "UL",
                    "marketingFlightNumber": 190,
                    "operating": "UL",
                    "operatingFlightNumber": 190,
                    "alliances": "OW ",
                    "equipment": {
                        "code": "332",
                        "typeForFirstLeg": "W",
                        "typeForLastLeg": "W"
                    }
                }
            },
            {
                "id": 15,
                "frequency": "SMTW***",
                "stopCount": 0,
                "eTicketable": true,
                "totalMilesFlown": 970,
                "elapsedTime": 150,
                "departure": {
                    "airport": "DAC",
                    "city": "DAC",
                    "country": "BD",
                    "time": "13:40:00+06:00",
                    "terminal": "2"
                },
                "arrival": {
                    "airport": "BKK",
                    "city": "BKK",
                    "country": "TH",
                    "time": "17:10:00+07:00"
                },
                "carrier": {
                    "marketing": "TG",
                    "marketingFlightNumber": 322,
                    "operating": "TG",
                    "operatingFlightNumber": 322,
                    "equipment": {
                        "code": "772",
                        "typeForFirstLeg": "W",
                        "typeForLastLeg": "W"
                    }
                }
            },
            {
                "id": 16,
                "frequency": "*****F*",
                "stopCount": 0,
                "eTicketable": true,
                "totalMilesFlown": 1338,
                "elapsedTime": 190,
                "departure": {
                    "airport": "CMB",
                    "city": "CMB",
                    "country": "LK",
                    "time": "07:50:00+05:30"
                },
                "arrival": {
                    "airport": "DAC",
                    "city": "DAC",
                    "country": "BD",
                    "time": "11:30:00+06:00",
                    "terminal": "1"
                },
                "carrier": {
                    "marketing": "UL",
                    "marketingFlightNumber": 189,
                    "operating": "UL",
                    "operatingFlightNumber": 189,
                    "alliances": "OW ",
                    "equipment": {
                        "code": "32B",
                        "typeForFirstLeg": "N",
                        "typeForLastLeg": "N"
                    }
                }
            },
            {
                "id": 17,
                "frequency": "SM*****",
                "stopCount": 0,
                "eTicketable": true,
                "totalMilesFlown": 876,
                "elapsedTime": 155,
                "departure": {
                    "airport": "SIN",
                    "city": "SIN",
                    "country": "SG",
                    "time": "17:10:00+08:00",
                    "terminal": "2"
                },
                "arrival": {
                    "airport": "BKK",
                    "city": "BKK",
                    "country": "TH",
                    "time": "18:45:00+07:00"
                },
                "carrier": {
                    "marketing": "SQ",
                    "marketingFlightNumber": 714,
                    "operating": "SQ",
                    "operatingFlightNumber": 714,
                    "equipment": {
                        "code": "359",
                        "typeForFirstLeg": "W",
                        "typeForLastLeg": "W"
                    }
                }
            }
        ],
        "taxDescs": [
            {
                "id": 1,
                "code": "SG",
                "amount": 411,
                "currency": "BDT",
                "description": "PASSENGER SERVICE AND SECURITY FEE PSSF",
                "publishedAmount": 6,
                "publishedCurrency": "SGD",
                "station": "SIN",
                "country": "SG"
            },
            {
                "id": 2,
                "code": "P8",
                "amount": 974,
                "currency": "BDT",
                "description": "PASSENGER SECURITY FEE",
                "publishedAmount": 10,
                "publishedCurrency": "USD",
                "station": "DAC",
                "country": "BD"
            },
            {
                "id": 3,
                "code": "L7",
                "amount": 205,
                "currency": "BDT",
                "description": "AIRPORT DEVELOPMENT LEVY",
                "publishedAmount": 3,
                "publishedCurrency": "SGD",
                "station": "SIN",
                "country": "SG"
            },
            {
                "id": 4,
                "code": "G8",
                "amount": 39,
                "currency": "BDT",
                "description": "INTERNATIONAL DEPARTURE FEE",
                "publishedAmount": 15,
                "publishedCurrency": "THB",
                "station": "BKK",
                "country": "TH"
            },
            {
                "id": 5,
                "code": "YRI",
                "amount": 1461,
                "currency": "BDT",
                "description": "SERVICE FEE - CARRIER-IMPOSED MISC",
                "publishedAmount": 15,
                "publishedCurrency": "USD",
                "station": "DAC"
            },
            {
                "id": 6,
                "code": "P7",
                "amount": 974,
                "currency": "BDT",
                "description": "AIRPORT DEVELOPMENT FEE",
                "publishedAmount": 10,
                "publishedCurrency": "USD",
                "station": "DAC",
                "country": "BD"
            },
            {
                "id": 7,
                "code": "G82",
                "amount": 39,
                "currency": "BDT",
                "description": "INTERNATIONAL ARRIVAL FEE",
                "publishedAmount": 15,
                "publishedCurrency": "THB",
                "station": "CMB",
                "country": "TH"
            },
            {
                "id": 8,
                "code": "E72",
                "amount": 90,
                "currency": "BDT",
                "description": "ADVANCE PASSENGER PROCESSING USER CHARGE",
                "publishedAmount": 35,
                "publishedCurrency": "THB",
                "station": "CMB",
                "country": "TH"
            },
            {
                "id": 9,
                "code": "E72",
                "amount": 90,
                "currency": "BDT",
                "description": "ADVANCE PASSENGER PROCESSING USER CHARGE",
                "publishedAmount": 35,
                "publishedCurrency": "THB",
                "station": "DAC",
                "country": "TH"
            },
            {
                "id": 10,
                "code": "G82",
                "amount": 39,
                "currency": "BDT",
                "description": "INTERNATIONAL ARRIVAL FEE",
                "publishedAmount": 15,
                "publishedCurrency": "THB",
                "station": "DAC",
                "country": "TH"
            },
            {
                "id": 11,
                "code": "UT3",
                "amount": 3000,
                "currency": "BDT",
                "description": "TRAVEL TAX",
                "publishedAmount": 3000,
                "publishedCurrency": "BDT",
                "station": "DAC",
                "country": "BD"
            },
            {
                "id": 12,
                "code": "E5",
                "amount": 368,
                "currency": "BDT",
                "description": "VALUE ADDED TAX",
                "publishedAmount": 368,
                "publishedCurrency": "BDT",
                "station": "DAC",
                "country": "BD"
            },
            {
                "id": 13,
                "code": "OW2",
                "amount": 2000,
                "currency": "BDT",
                "description": "DOMESTIC AND INTERNATIONAL EXCISE DUTY TAX",
                "publishedAmount": 2000,
                "publishedCurrency": "BDT",
                "station": "DAC",
                "country": "BD"
            },
            {
                "id": 14,
                "code": "E72",
                "amount": 90,
                "currency": "BDT",
                "description": "ADVANCE PASSENGER PROCESSING USER CHARGE",
                "publishedAmount": 35,
                "publishedCurrency": "THB",
                "station": "SIN",
                "country": "TH"
            },
            {
                "id": 15,
                "code": "TS",
                "amount": 1786,
                "currency": "BDT",
                "description": "PASSENGER SERVICE CHARGE",
                "publishedAmount": 700,
                "publishedCurrency": "THB",
                "station": "BKK",
                "country": "TH"
            },
            {
                "id": 16,
                "code": "E7",
                "amount": 90,
                "currency": "BDT",
                "description": "ADVANCE PASSENGER PROCESSING USER CHARGE",
                "publishedAmount": 35,
                "publishedCurrency": "THB",
                "station": "BKK",
                "country": "TH"
            },
            {
                "id": 17,
                "code": "G82",
                "amount": 39,
                "currency": "BDT",
                "description": "INTERNATIONAL ARRIVAL FEE",
                "publishedAmount": 15,
                "publishedCurrency": "THB",
                "station": "SIN",
                "country": "TH"
            },
            {
                "id": 18,
                "code": "BD",
                "amount": 500,
                "currency": "BDT",
                "description": "EMBARKATION FEE",
                "publishedAmount": 500,
                "publishedCurrency": "BDT",
                "station": "DAC",
                "country": "BD"
            }
        ],
        "taxSummaryDescs": [
            {
                "id": 1,
                "code": "P8",
                "amount": 974,
                "currency": "BDT",
                "description": "PASSENGER SECURITY FEE",
                "publishedAmount": 10,
                "publishedCurrency": "USD",
                "station": "DAC",
                "country": "BD"
            },
            {
                "id": 2,
                "code": "OW",
                "amount": 2000,
                "currency": "BDT",
                "description": "DOMESTIC AND INTERNATIONAL EXCISE DUTY TAX",
                "publishedAmount": 2000,
                "publishedCurrency": "BDT",
                "station": "DAC",
                "country": "BD"
            },
            {
                "id": 3,
                "code": "G8",
                "amount": 78,
                "currency": "BDT",
                "description": "INTERNATIONAL DEPARTURE FEE",
                "publishedAmount": 15,
                "publishedCurrency": "THB",
                "station": "BKK",
                "country": "TH"
            },
            {
                "id": 4,
                "code": "YR",
                "amount": 1461,
                "currency": "BDT",
                "description": "YR taxes summary"
            },
            {
                "id": 5,
                "code": "SG",
                "amount": 822,
                "currency": "BDT",
                "description": "PASSENGER SERVICE AND SECURITY FEE PSSF",
                "publishedAmount": 6,
                "publishedCurrency": "SGD",
                "station": "SIN",
                "country": "SG"
            },
            {
                "id": 6,
                "code": "P7",
                "amount": 974,
                "currency": "BDT",
                "description": "AIRPORT DEVELOPMENT FEE",
                "publishedAmount": 10,
                "publishedCurrency": "USD",
                "station": "DAC",
                "country": "BD"
            },
            {
                "id": 7,
                "code": "L7",
                "amount": 410,
                "currency": "BDT",
                "description": "AIRPORT DEVELOPMENT LEVY",
                "publishedAmount": 3,
                "publishedCurrency": "SGD",
                "station": "SIN",
                "country": "SG"
            },
            {
                "id": 8,
                "code": "UT",
                "amount": 3000,
                "currency": "BDT",
                "description": "TRAVEL TAX",
                "publishedAmount": 3000,
                "publishedCurrency": "BDT",
                "station": "DAC",
                "country": "BD"
            },
            {
                "id": 9,
                "code": "E5",
                "amount": 368,
                "currency": "BDT",
                "description": "VALUE ADDED TAX",
                "publishedAmount": 0.15,
                "publishedCurrency": "BDT",
                "station": "DAC",
                "country": "BD"
            },
            {
                "id": 10,
                "code": "TS",
                "amount": 1786,
                "currency": "BDT",
                "description": "PASSENGER SERVICE CHARGE",
                "publishedAmount": 700,
                "publishedCurrency": "THB",
                "station": "BKK",
                "country": "TH"
            },
            {
                "id": 11,
                "code": "E7",
                "amount": 180,
                "currency": "BDT",
                "description": "ADVANCE PASSENGER PROCESSING USER CHARGE",
                "publishedAmount": 35,
                "publishedCurrency": "THB",
                "station": "BKK",
                "country": "TH"
            },
            {
                "id": 12,
                "code": "BD",
                "amount": 500,
                "currency": "BDT",
                "description": "EMBARKATION FEE",
                "publishedAmount": 500,
                "publishedCurrency": "BDT",
                "station": "DAC",
                "country": "BD"
            }
        ],
        "obFeeDescs": [
            {
                "id": 1,
                "amount": 0,
                "currency": "BDT"
            }
        ],
        "fareComponentDescs": [
            {
                "id": 1,
                "governingCarrier": "SQ",
                "fareAmount": 197,
                "fareCurrency": "USD",
                "fareBasisCode": "K15BDRA",
                "farePassengerType": "ADT",
                "directionality": "TO",
                "applicablePricingCategories": "4 5 7 8 9 10 15 16 23 31 33",
                "vendorCode": "ATP",
                "fareTypeBitmap": "00",
                "fareType": "XEX",
                "fareTariff": "8",
                "fareRule": "BD11",
                "cabinCode": "Y",
                "segments": [
                    {
                        "segment": {}
                    },
                    {
                        "segment": {
                            "stopover": true
                        }
                    }
                ]
            },
            {
                "id": 2,
                "governingCarrier": "TG",
                "fareAmount": 386,
                "fareCurrency": "USD",
                "fareBasisCode": "W1LRFXC1",
                "farePassengerType": "ADT",
                "directionality": "FROM",
                "applicablePricingCategories": "4 5 6 7 8 9 10 11 15 16 17 23 31 33",
                "vendorCode": "ATP",
                "fareTypeBitmap": "00",
                "fareType": "PRO",
                "fareTariff": "8",
                "fareRule": "FX01",
                "cabinCode": "Y",
                "segments": [
                    {
                        "segment": {
                            "stopover": true
                        }
                    }
                ]
            },
            {
                "id": 3,
                "governingCarrier": "UL",
                "fareAmount": 213,
                "fareCurrency": "USD",
                "fareBasisCode": "ORT1BD",
                "farePassengerType": "ADT",
                "directionality": "FROM",
                "applicablePricingCategories": "4 5 7 8 9 10 12 15 16 17 23 31 33",
                "vendorCode": "ATP",
                "fareTypeBitmap": "00",
                "fareType": "ER",
                "fareTariff": "8",
                "fareRule": "BD02",
                "cabinCode": "Y",
                "segments": [
                    {
                        "segment": {
                            "surcharges": [
                                {
                                    "amount": 14.91,
                                    "currency": "NUC",
                                    "description": "MISCELLANEOUS/OTHER",
                                    "type": "Q"
                                }
                            ]
                        }
                    },
                    {
                        "segment": {
                            "stopover": true
                        }
                    }
                ]
            },
            {
                "id": 4,
                "governingCarrier": "BG",
                "fareAmount": 200,
                "fareCurrency": "USD",
                "fareBasisCode": "KBD1M",
                "farePassengerType": "ADT",
                "directionality": "TO",
                "applicablePricingCategories": "3 4 5 7 8 9 10 11 16 17 23 31 33",
                "vendorCode": "ATP",
                "fareTypeBitmap": "00",
                "fareType": "ER",
                "fareTariff": "8",
                "fareRule": "AS10",
                "cabinCode": "Y",
                "segments": [
                    {
                        "segment": {
                            "stopover": true
                        }
                    }
                ]
            },
            {
                "id": 5,
                "governingCarrier": "TG",
                "fareAmount": 386,
                "fareCurrency": "USD",
                "fareBasisCode": "W1LRFXC1",
                "farePassengerType": "ADT",
                "directionality": "TO",
                "applicablePricingCategories": "4 5 6 7 8 9 10 11 15 16 17 23 31 33",
                "vendorCode": "ATP",
                "fareTypeBitmap": "00",
                "fareType": "PRO",
                "fareTariff": "8",
                "fareRule": "FX01",
                "cabinCode": "Y",
                "segments": [
                    {
                        "segment": {
                            "stopover": true
                        }
                    }
                ]
            },
            {
                "id": 6,
                "governingCarrier": "SQ",
                "fareAmount": 197,
                "fareCurrency": "USD",
                "fareBasisCode": "K15BDRA",
                "farePassengerType": "ADT",
                "directionality": "FROM",
                "applicablePricingCategories": "4 5 7 8 9 10 15 16 23 31 33",
                "vendorCode": "ATP",
                "fareTypeBitmap": "00",
                "fareType": "XEX",
                "fareTariff": "8",
                "fareRule": "BD11",
                "cabinCode": "Y",
                "segments": [
                    {
                        "segment": {}
                    },
                    {
                        "segment": {
                            "stopover": true
                        }
                    }
                ]
            },
            {
                "id": 7,
                "governingCarrier": "BG",
                "fareAmount": 220,
                "fareCurrency": "USD",
                "fareBasisCode": "BBD1M",
                "farePassengerType": "ADT",
                "directionality": "FROM",
                "applicablePricingCategories": "3 4 5 7 8 9 10 11 16 17 23 31 33",
                "vendorCode": "ATP",
                "fareTypeBitmap": "00",
                "fareType": "ER",
                "fareTariff": "8",
                "fareRule": "AS10",
                "cabinCode": "Y",
                "segments": [
                    {
                        "segment": {
                            "stopover": true
                        }
                    }
                ]
            },
            {
                "id": 8,
                "governingCarrier": "UL",
                "fareAmount": 213,
                "fareCurrency": "USD",
                "fareBasisCode": "ORT1BD",
                "farePassengerType": "ADT",
                "directionality": "TO",
                "applicablePricingCategories": "4 5 7 8 9 10 12 15 16 17 23 31 33",
                "vendorCode": "ATP",
                "fareTypeBitmap": "00",
                "fareType": "ER",
                "fareTariff": "8",
                "fareRule": "BD02",
                "cabinCode": "Y",
                "segments": [
                    {
                        "segment": {
                            "surcharges": [
                                {
                                    "amount": 14.91,
                                    "currency": "NUC",
                                    "description": "MISCELLANEOUS/OTHER",
                                    "type": "Q"
                                }
                            ]
                        }
                    },
                    {
                        "segment": {
                            "stopover": true
                        }
                    }
                ]
            }
        ],
        "baggageAllowanceDescs": [
            {
                "id": 1,
                "weight": 25,
                "unit": "kg"
            },
            {
                "id": 2,
                "weight": 30,
                "unit": "kg"
            },
            {
                "id": 3,
                "weight": 30,
                "unit": "kg"
            },
            {
                "id": 4,
                "weight": 30,
                "unit": "kg"
            }
        ],
        "legDescs": [
            {
                "id": 1,
                "elapsedTime": 685,
                "schedules": [
                    {
                        "ref": 7
                    },
                    {
                        "ref": 6
                    }
                ]
            },
            {
                "id": 2,
                "elapsedTime": 480,
                "schedules": [
                    {
                        "ref": 8
                    },
                    {
                        "ref": 6
                    }
                ]
            },
            {
                "id": 3,
                "elapsedTime": 150,
                "schedules": [
                    {
                        "ref": 15
                    }
                ]
            },
            {
                "id": 4,
                "elapsedTime": 965,
                "schedules": [
                    {
                        "ref": 12
                    },
                    {
                        "ref": 13,
                        "departureDateAdjustment": 1
                    }
                ]
            },
            {
                "id": 5,
                "elapsedTime": 1070,
                "schedules": [
                    {
                        "ref": 12
                    },
                    {
                        "ref": 17,
                        "departureDateAdjustment": 1
                    }
                ]
            },
            {
                "id": 6,
                "elapsedTime": 155,
                "schedules": [
                    {
                        "ref": 4
                    }
                ]
            },
            {
                "id": 7,
                "elapsedTime": 150,
                "schedules": [
                    {
                        "ref": 3
                    }
                ]
            },
            {
                "id": 8,
                "elapsedTime": 980,
                "schedules": [
                    {
                        "ref": 14
                    },
                    {
                        "ref": 5,
                        "departureDateAdjustment": 1
                    }
                ]
            },
            {
                "id": 9,
                "elapsedTime": 820,
                "schedules": [
                    {
                        "ref": 12
                    },
                    {
                        "ref": 10,
                        "departureDateAdjustment": 1
                    }
                ]
            },
            {
                "id": 10,
                "elapsedTime": 615,
                "schedules": [
                    {
                        "ref": 12
                    },
                    {
                        "ref": 9,
                        "departureDateAdjustment": 1
                    }
                ]
            },
            {
                "id": 11,
                "elapsedTime": 155,
                "schedules": [
                    {
                        "ref": 2
                    }
                ]
            },
            {
                "id": 12,
                "elapsedTime": 165,
                "schedules": [
                    {
                        "ref": 11
                    }
                ]
            },
            {
                "id": 13,
                "elapsedTime": 1655,
                "schedules": [
                    {
                        "ref": 1
                    },
                    {
                        "ref": 16,
                        "departureDateAdjustment": 1
                    }
                ]
            }
        ],
        "itineraryGroups": [
            {
                "groupDescription": {
                    "legDescriptions": [
                        {
                            "departureDate": "2022-10-30",
                            "departureLocation": "DAC",
                            "arrivalLocation": "BKK"
                        },
                        {
                            "departureDate": "2022-11-10",
                            "departureLocation": "BKK",
                            "arrivalLocation": "DAC"
                        }
                    ]
                },
                "itineraries": [
                    {
                        "id": 1,
                        "pricingSource": "ADVJR1",
                        "legs": [
                            {
                                "ref": 7
                            },
                            {
                                "ref": 12
                            }
                        ],
                        "pricingInformation": [
                            {
                                "pricingSubsource": "HPIS",
                                "fare": {
                                    "validatingCarrierCode": "BG",
                                    "vita": true,
                                    "eTicketable": true,
                                    "lastTicketDate": "2022-10-24",
                                    "lastTicketTime": "22:34",
                                    "governingCarriers": "BG BG",
                                    "passengerInfoList": [
                                        {
                                            "passengerInfo": {
                                                "passengerType": "ADT",
                                                "passengerNumber": 2,
                                                "nonRefundable": false,
                                                "fareComponents": [
                                                    {
                                                        "ref": 7,
                                                        "beginAirport": "DAC",
                                                        "endAirport": "BKK",
                                                        "segments": [
                                                            {
                                                                "segment": {
                                                                    "bookingCode": "B",
                                                                    "cabinCode": "Y",
                                                                    "mealCode": "M",
                                                                    "seatsAvailable": 9,
                                                                    "availabilityBreak": true
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "ref": 4,
                                                        "beginAirport": "BKK",
                                                        "endAirport": "DAC",
                                                        "segments": [
                                                            {
                                                                "segment": {
                                                                    "bookingCode": "K",
                                                                    "cabinCode": "Y",
                                                                    "mealCode": "M",
                                                                    "seatsAvailable": 4,
                                                                    "availabilityBreak": true
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ],
                                                "taxes": [
                                                    {
                                                        "ref": 18
                                                    },
                                                    {
                                                        "ref": 12
                                                    },
                                                    {
                                                        "ref": 13
                                                    },
                                                    {
                                                        "ref": 6
                                                    },
                                                    {
                                                        "ref": 2
                                                    },
                                                    {
                                                        "ref": 11
                                                    },
                                                    {
                                                        "ref": 16
                                                    },
                                                    {
                                                        "ref": 4
                                                    },
                                                    {
                                                        "ref": 15
                                                    },
                                                    {
                                                        "ref": 9
                                                    },
                                                    {
                                                        "ref": 10
                                                    }
                                                ],
                                                "taxSummaries": [
                                                    {
                                                        "ref": 12
                                                    },
                                                    {
                                                        "ref": 9
                                                    },
                                                    {
                                                        "ref": 2
                                                    },
                                                    {
                                                        "ref": 6
                                                    },
                                                    {
                                                        "ref": 1
                                                    },
                                                    {
                                                        "ref": 10
                                                    },
                                                    {
                                                        "ref": 8
                                                    },
                                                    {
                                                        "ref": 11
                                                    },
                                                    {
                                                        "ref": 3
                                                    }
                                                ],
                                                "currencyConversion": {
                                                    "from": "USD",
                                                    "to": "BDT",
                                                    "exchangeRateUsed": 97.35
                                                },
                                                "passengerTotalFare": {
                                                    "totalFare": 30304,
                                                    "totalTaxAmount": 9860,
                                                    "currency": "BDT",
                                                    "baseFareAmount": 210,
                                                    "baseFareCurrency": "USD",
                                                    "equivalentAmount": 20444,
                                                    "equivalentCurrency": "BDT",
                                                    "constructionAmount": 210,
                                                    "constructionCurrency": "NUC"
                                                },
                                                "baggageInformation": [
                                                    {
                                                        "provisionType": "A",
                                                        "airlineCode": "BG",
                                                        "segments": [
                                                            {
                                                                "id": 0
                                                            }
                                                        ],
                                                        "allowance": {
                                                            "ref": 4
                                                        }
                                                    },
                                                    {
                                                        "provisionType": "A",
                                                        "airlineCode": "BG",
                                                        "segments": [
                                                            {
                                                                "id": 1
                                                            }
                                                        ],
                                                        "allowance": {
                                                            "ref": 4
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    ],
                                    "totalFare": {
                                        "totalPrice": 60608,
                                        "totalTaxAmount": 19720,
                                        "currency": "BDT",
                                        "baseFareAmount": 420,
                                        "baseFareCurrency": "USD",
                                        "constructionAmount": 420,
                                        "constructionCurrency": "NUC",
                                        "equivalentAmount": 40888,
                                        "equivalentCurrency": "BDT"
                                    }
                                }
                            }
                        ],
                        "diversitySwapper": {
                            "weighedPrice": 19914.057
                        }
                    },
                    {
                        "id": 2,
                        "pricingSource": "ADVJR1",
                        "legs": [
                            {
                                "ref": 10
                            },
                            {
                                "ref": 2
                            }
                        ],
                        "pricingInformation": [
                            {
                                "pricingSubsource": "HPIS",
                                "fare": {
                                    "validatingCarrierCode": "SQ",
                                    "vita": true,
                                    "eTicketable": true,
                                    "lastTicketDate": "2022-10-30",
                                    "lastTicketTime": "23:55",
                                    "governingCarriers": "SQ SQ",
                                    "passengerInfoList": [
                                        {
                                            "passengerInfo": {
                                                "passengerType": "ADT",
                                                "passengerNumber": 2,
                                                "nonRefundable": true,
                                                "fareComponents": [
                                                    {
                                                        "ref": 6,
                                                        "beginAirport": "DAC",
                                                        "endAirport": "BKK",
                                                        "segments": [
                                                            {
                                                                "segment": {
                                                                    "bookingCode": "K",
                                                                    "cabinCode": "Y",
                                                                    "mealCode": "M",
                                                                    "seatsAvailable": 0
                                                                }
                                                            },
                                                            {
                                                                "segment": {
                                                                    "bookingCode": "K",
                                                                    "cabinCode": "Y",
                                                                    "mealCode": "M",
                                                                    "seatsAvailable": 0,
                                                                    "availabilityBreak": true
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "ref": 1,
                                                        "beginAirport": "BKK",
                                                        "endAirport": "DAC",
                                                        "segments": [
                                                            {
                                                                "segment": {
                                                                    "bookingCode": "K",
                                                                    "cabinCode": "Y",
                                                                    "mealCode": "M",
                                                                    "seatsAvailable": 0
                                                                }
                                                            },
                                                            {
                                                                "segment": {
                                                                    "bookingCode": "K",
                                                                    "cabinCode": "Y",
                                                                    "mealCode": "M",
                                                                    "seatsAvailable": 0,
                                                                    "availabilityBreak": true
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ],
                                                "taxes": [
                                                    {
                                                        "ref": 18
                                                    },
                                                    {
                                                        "ref": 12
                                                    },
                                                    {
                                                        "ref": 13
                                                    },
                                                    {
                                                        "ref": 6
                                                    },
                                                    {
                                                        "ref": 2
                                                    },
                                                    {
                                                        "ref": 11
                                                    },
                                                    {
                                                        "ref": 3
                                                    },
                                                    {
                                                        "ref": 3
                                                    },
                                                    {
                                                        "ref": 1
                                                    },
                                                    {
                                                        "ref": 1
                                                    },
                                                    {
                                                        "ref": 16
                                                    },
                                                    {
                                                        "ref": 14
                                                    },
                                                    {
                                                        "ref": 4
                                                    },
                                                    {
                                                        "ref": 17
                                                    },
                                                    {
                                                        "ref": 15
                                                    },
                                                    {
                                                        "ref": 5
                                                    }
                                                ],
                                                "taxSummaries": [
                                                    {
                                                        "ref": 12
                                                    },
                                                    {
                                                        "ref": 9
                                                    },
                                                    {
                                                        "ref": 11
                                                    },
                                                    {
                                                        "ref": 3
                                                    },
                                                    {
                                                        "ref": 7
                                                    },
                                                    {
                                                        "ref": 2
                                                    },
                                                    {
                                                        "ref": 6
                                                    },
                                                    {
                                                        "ref": 1
                                                    },
                                                    {
                                                        "ref": 5
                                                    },
                                                    {
                                                        "ref": 10
                                                    },
                                                    {
                                                        "ref": 8
                                                    },
                                                    {
                                                        "ref": 4
                                                    }
                                                ],
                                                "obFees": [
                                                    {
                                                        "ref": 1
                                                    }
                                                ],
                                                "currencyConversion": {
                                                    "from": "USD",
                                                    "to": "BDT",
                                                    "exchangeRateUsed": 97.35
                                                },
                                                "passengerTotalFare": {
                                                    "totalFare": 31731,
                                                    "totalTaxAmount": 12553,
                                                    "currency": "BDT",
                                                    "baseFareAmount": 197,
                                                    "baseFareCurrency": "USD",
                                                    "equivalentAmount": 19178,
                                                    "equivalentCurrency": "BDT",
                                                    "constructionAmount": 197,
                                                    "constructionCurrency": "NUC"
                                                },
                                                "baggageInformation": [
                                                    {
                                                        "provisionType": "A",
                                                        "airlineCode": "SQ",
                                                        "segments": [
                                                            {
                                                                "id": 0
                                                            },
                                                            {
                                                                "id": 1
                                                            }
                                                        ],
                                                        "allowance": {
                                                            "ref": 1
                                                        }
                                                    },
                                                    {
                                                        "provisionType": "A",
                                                        "airlineCode": "SQ",
                                                        "segments": [
                                                            {
                                                                "id": 2
                                                            },
                                                            {
                                                                "id": 3
                                                            }
                                                        ],
                                                        "allowance": {
                                                            "ref": 1
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    ],
                                    "totalFare": {
                                        "totalPrice": 63462,
                                        "totalTaxAmount": 25106,
                                        "currency": "BDT",
                                        "baseFareAmount": 394,
                                        "baseFareCurrency": "USD",
                                        "constructionAmount": 394,
                                        "constructionCurrency": "NUC",
                                        "equivalentAmount": 38356,
                                        "equivalentCurrency": "BDT"
                                    }
                                }
                            }
                        ],
                        "diversitySwapper": {
                            "weighedPrice": 174477.033
                        }
                    },
                    {
                        "id": 3,
                        "pricingSource": "ADVJR1",
                        "legs": [
                            {
                                "ref": 10
                            },
                            {
                                "ref": 1
                            }
                        ],
                        "pricingInformation": [
                            {
                                "pricingSubsource": "HPIS",
                                "fare": {
                                    "validatingCarrierCode": "SQ",
                                    "vita": true,
                                    "eTicketable": true,
                                    "lastTicketDate": "2022-10-30",
                                    "lastTicketTime": "23:55",
                                    "governingCarriers": "SQ SQ",
                                    "passengerInfoList": [
                                        {
                                            "passengerInfo": {
                                                "passengerType": "ADT",
                                                "passengerNumber": 2,
                                                "nonRefundable": true,
                                                "fareComponents": [
                                                    {
                                                        "ref": 6,
                                                        "beginAirport": "DAC",
                                                        "endAirport": "BKK",
                                                        "segments": [
                                                            {
                                                                "segment": {
                                                                    "bookingCode": "K",
                                                                    "cabinCode": "Y",
                                                                    "mealCode": "M",
                                                                    "seatsAvailable": 0
                                                                }
                                                            },
                                                            {
                                                                "segment": {
                                                                    "bookingCode": "K",
                                                                    "cabinCode": "Y",
                                                                    "mealCode": "M",
                                                                    "seatsAvailable": 0,
                                                                    "availabilityBreak": true
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "ref": 1,
                                                        "beginAirport": "BKK",
                                                        "endAirport": "DAC",
                                                        "segments": [
                                                            {
                                                                "segment": {
                                                                    "bookingCode": "K",
                                                                    "cabinCode": "Y",
                                                                    "mealCode": "M",
                                                                    "seatsAvailable": 9
                                                                }
                                                            },
                                                            {
                                                                "segment": {
                                                                    "bookingCode": "K",
                                                                    "cabinCode": "Y",
                                                                    "mealCode": "M",
                                                                    "seatsAvailable": 9,
                                                                    "availabilityBreak": true
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ],
                                                "taxes": [
                                                    {
                                                        "ref": 18
                                                    },
                                                    {
                                                        "ref": 12
                                                    },
                                                    {
                                                        "ref": 13
                                                    },
                                                    {
                                                        "ref": 6
                                                    },
                                                    {
                                                        "ref": 2
                                                    },
                                                    {
                                                        "ref": 11
                                                    },
                                                    {
                                                        "ref": 3
                                                    },
                                                    {
                                                        "ref": 3
                                                    },
                                                    {
                                                        "ref": 1
                                                    },
                                                    {
                                                        "ref": 1
                                                    },
                                                    {
                                                        "ref": 16
                                                    },
                                                    {
                                                        "ref": 14
                                                    },
                                                    {
                                                        "ref": 4
                                                    },
                                                    {
                                                        "ref": 17
                                                    },
                                                    {
                                                        "ref": 15
                                                    },
                                                    {
                                                        "ref": 5
                                                    }
                                                ],
                                                "taxSummaries": [
                                                    {
                                                        "ref": 12
                                                    },
                                                    {
                                                        "ref": 9
                                                    },
                                                    {
                                                        "ref": 11
                                                    },
                                                    {
                                                        "ref": 3
                                                    },
                                                    {
                                                        "ref": 7
                                                    },
                                                    {
                                                        "ref": 2
                                                    },
                                                    {
                                                        "ref": 6
                                                    },
                                                    {
                                                        "ref": 1
                                                    },
                                                    {
                                                        "ref": 5
                                                    },
                                                    {
                                                        "ref": 10
                                                    },
                                                    {
                                                        "ref": 8
                                                    },
                                                    {
                                                        "ref": 4
                                                    }
                                                ],
                                                "obFees": [
                                                    {
                                                        "ref": 1
                                                    }
                                                ],
                                                "currencyConversion": {
                                                    "from": "USD",
                                                    "to": "BDT",
                                                    "exchangeRateUsed": 97.35
                                                },
                                                "passengerTotalFare": {
                                                    "totalFare": 31731,
                                                    "totalTaxAmount": 12553,
                                                    "currency": "BDT",
                                                    "baseFareAmount": 197,
                                                    "baseFareCurrency": "USD",
                                                    "equivalentAmount": 19178,
                                                    "equivalentCurrency": "BDT",
                                                    "constructionAmount": 197,
                                                    "constructionCurrency": "NUC"
                                                },
                                                "baggageInformation": [
                                                    {
                                                        "provisionType": "A",
                                                        "airlineCode": "SQ",
                                                        "segments": [
                                                            {
                                                                "id": 0
                                                            },
                                                            {
                                                                "id": 1
                                                            }
                                                        ],
                                                        "allowance": {
                                                            "ref": 1
                                                        }
                                                    },
                                                    {
                                                        "provisionType": "A",
                                                        "airlineCode": "SQ",
                                                        "segments": [
                                                            {
                                                                "id": 2
                                                            },
                                                            {
                                                                "id": 3
                                                            }
                                                        ],
                                                        "allowance": {
                                                            "ref": 1
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    ],
                                    "totalFare": {
                                        "totalPrice": 63462,
                                        "totalTaxAmount": 25106,
                                        "currency": "BDT",
                                        "baseFareAmount": 394,
                                        "baseFareCurrency": "USD",
                                        "constructionAmount": 394,
                                        "constructionCurrency": "NUC",
                                        "equivalentAmount": 38356,
                                        "equivalentCurrency": "BDT"
                                    }
                                }
                            }
                        ],
                        "diversitySwapper": {
                            "weighedPrice": 186505.055
                        }
                    },
                    {
                        "id": 4,
                        "pricingSource": "ADVJR1",
                        "legs": [
                            {
                                "ref": 9
                            },
                            {
                                "ref": 2
                            }
                        ],
                        "pricingInformation": [
                            {
                                "pricingSubsource": "HPIS",
                                "fare": {
                                    "validatingCarrierCode": "SQ",
                                    "vita": true,
                                    "eTicketable": true,
                                    "lastTicketDate": "2022-10-30",
                                    "lastTicketTime": "23:55",
                                    "governingCarriers": "SQ SQ",
                                    "passengerInfoList": [
                                        {
                                            "passengerInfo": {
                                                "passengerType": "ADT",
                                                "passengerNumber": 2,
                                                "nonRefundable": true,
                                                "fareComponents": [
                                                    {
                                                        "ref": 6,
                                                        "beginAirport": "DAC",
                                                        "endAirport": "BKK",
                                                        "segments": [
                                                            {
                                                                "segment": {
                                                                    "bookingCode": "K",
                                                                    "cabinCode": "Y",
                                                                    "mealCode": "M",
                                                                    "seatsAvailable": 9
                                                                }
                                                            },
                                                            {
                                                                "segment": {
                                                                    "bookingCode": "K",
                                                                    "cabinCode": "Y",
                                                                    "mealCode": "M",
                                                                    "seatsAvailable": 9,
                                                                    "availabilityBreak": true
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "ref": 1,
                                                        "beginAirport": "BKK",
                                                        "endAirport": "DAC",
                                                        "segments": [
                                                            {
                                                                "segment": {
                                                                    "bookingCode": "K",
                                                                    "cabinCode": "Y",
                                                                    "mealCode": "M",
                                                                    "seatsAvailable": 0
                                                                }
                                                            },
                                                            {
                                                                "segment": {
                                                                    "bookingCode": "K",
                                                                    "cabinCode": "Y",
                                                                    "mealCode": "M",
                                                                    "seatsAvailable": 0,
                                                                    "availabilityBreak": true
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ],
                                                "taxes": [
                                                    {
                                                        "ref": 18
                                                    },
                                                    {
                                                        "ref": 12
                                                    },
                                                    {
                                                        "ref": 13
                                                    },
                                                    {
                                                        "ref": 6
                                                    },
                                                    {
                                                        "ref": 2
                                                    },
                                                    {
                                                        "ref": 11
                                                    },
                                                    {
                                                        "ref": 3
                                                    },
                                                    {
                                                        "ref": 3
                                                    },
                                                    {
                                                        "ref": 1
                                                    },
                                                    {
                                                        "ref": 1
                                                    },
                                                    {
                                                        "ref": 16
                                                    },
                                                    {
                                                        "ref": 14
                                                    },
                                                    {
                                                        "ref": 4
                                                    },
                                                    {
                                                        "ref": 17
                                                    },
                                                    {
                                                        "ref": 15
                                                    },
                                                    {
                                                        "ref": 5
                                                    }
                                                ],
                                                "taxSummaries": [
                                                    {
                                                        "ref": 12
                                                    },
                                                    {
                                                        "ref": 9
                                                    },
                                                    {
                                                        "ref": 11
                                                    },
                                                    {
                                                        "ref": 3
                                                    },
                                                    {
                                                        "ref": 7
                                                    },
                                                    {
                                                        "ref": 2
                                                    },
                                                    {
                                                        "ref": 6
                                                    },
                                                    {
                                                        "ref": 1
                                                    },
                                                    {
                                                        "ref": 5
                                                    },
                                                    {
                                                        "ref": 10
                                                    },
                                                    {
                                                        "ref": 8
                                                    },
                                                    {
                                                        "ref": 4
                                                    }
                                                ],
                                                "obFees": [
                                                    {
                                                        "ref": 1
                                                    }
                                                ],
                                                "currencyConversion": {
                                                    "from": "USD",
                                                    "to": "BDT",
                                                    "exchangeRateUsed": 97.35
                                                },
                                                "passengerTotalFare": {
                                                    "totalFare": 31731,
                                                    "totalTaxAmount": 12553,
                                                    "currency": "BDT",
                                                    "baseFareAmount": 197,
                                                    "baseFareCurrency": "USD",
                                                    "equivalentAmount": 19178,
                                                    "equivalentCurrency": "BDT",
                                                    "constructionAmount": 197,
                                                    "constructionCurrency": "NUC"
                                                },
                                                "baggageInformation": [
                                                    {
                                                        "provisionType": "A",
                                                        "airlineCode": "SQ",
                                                        "segments": [
                                                            {
                                                                "id": 0
                                                            },
                                                            {
                                                                "id": 1
                                                            }
                                                        ],
                                                        "allowance": {
                                                            "ref": 1
                                                        }
                                                    },
                                                    {
                                                        "provisionType": "A",
                                                        "airlineCode": "SQ",
                                                        "segments": [
                                                            {
                                                                "id": 2
                                                            },
                                                            {
                                                                "id": 3
                                                            }
                                                        ],
                                                        "allowance": {
                                                            "ref": 1
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    ],
                                    "totalFare": {
                                        "totalPrice": 63462,
                                        "totalTaxAmount": 25106,
                                        "currency": "BDT",
                                        "baseFareAmount": 394,
                                        "baseFareCurrency": "USD",
                                        "constructionAmount": 394,
                                        "constructionCurrency": "NUC",
                                        "equivalentAmount": 38356,
                                        "equivalentCurrency": "BDT"
                                    }
                                }
                            }
                        ],
                        "diversitySwapper": {
                            "weighedPrice": 196024.355
                        }
                    },
                    {
                        "id": 5,
                        "pricingSource": "ADVJR1",
                        "legs": [
                            {
                                "ref": 4
                            },
                            {
                                "ref": 2
                            }
                        ],
                        "pricingInformation": [
                            {
                                "pricingSubsource": "HPIS",
                                "fare": {
                                    "validatingCarrierCode": "SQ",
                                    "vita": true,
                                    "eTicketable": true,
                                    "lastTicketDate": "2022-10-30",
                                    "lastTicketTime": "23:55",
                                    "governingCarriers": "SQ SQ",
                                    "passengerInfoList": [
                                        {
                                            "passengerInfo": {
                                                "passengerType": "ADT",
                                                "passengerNumber": 2,
                                                "nonRefundable": true,
                                                "fareComponents": [
                                                    {
                                                        "ref": 6,
                                                        "beginAirport": "DAC",
                                                        "endAirport": "BKK",
                                                        "segments": [
                                                            {
                                                                "segment": {
                                                                    "bookingCode": "K",
                                                                    "cabinCode": "Y",
                                                                    "mealCode": "M",
                                                                    "seatsAvailable": 9
                                                                }
                                                            },
                                                            {
                                                                "segment": {
                                                                    "bookingCode": "K",
                                                                    "cabinCode": "Y",
                                                                    "mealCode": "M",
                                                                    "seatsAvailable": 9,
                                                                    "availabilityBreak": true
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "ref": 1,
                                                        "beginAirport": "BKK",
                                                        "endAirport": "DAC",
                                                        "segments": [
                                                            {
                                                                "segment": {
                                                                    "bookingCode": "K",
                                                                    "cabinCode": "Y",
                                                                    "mealCode": "M",
                                                                    "seatsAvailable": 0
                                                                }
                                                            },
                                                            {
                                                                "segment": {
                                                                    "bookingCode": "K",
                                                                    "cabinCode": "Y",
                                                                    "mealCode": "M",
                                                                    "seatsAvailable": 0,
                                                                    "availabilityBreak": true
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ],
                                                "taxes": [
                                                    {
                                                        "ref": 18
                                                    },
                                                    {
                                                        "ref": 12
                                                    },
                                                    {
                                                        "ref": 13
                                                    },
                                                    {
                                                        "ref": 6
                                                    },
                                                    {
                                                        "ref": 2
                                                    },
                                                    {
                                                        "ref": 11
                                                    },
                                                    {
                                                        "ref": 3
                                                    },
                                                    {
                                                        "ref": 3
                                                    },
                                                    {
                                                        "ref": 1
                                                    },
                                                    {
                                                        "ref": 1
                                                    },
                                                    {
                                                        "ref": 16
                                                    },
                                                    {
                                                        "ref": 14
                                                    },
                                                    {
                                                        "ref": 4
                                                    },
                                                    {
                                                        "ref": 17
                                                    },
                                                    {
                                                        "ref": 15
                                                    },
                                                    {
                                                        "ref": 5
                                                    }
                                                ],
                                                "taxSummaries": [
                                                    {
                                                        "ref": 12
                                                    },
                                                    {
                                                        "ref": 9
                                                    },
                                                    {
                                                        "ref": 11
                                                    },
                                                    {
                                                        "ref": 3
                                                    },
                                                    {
                                                        "ref": 7
                                                    },
                                                    {
                                                        "ref": 2
                                                    },
                                                    {
                                                        "ref": 6
                                                    },
                                                    {
                                                        "ref": 1
                                                    },
                                                    {
                                                        "ref": 5
                                                    },
                                                    {
                                                        "ref": 10
                                                    },
                                                    {
                                                        "ref": 8
                                                    },
                                                    {
                                                        "ref": 4
                                                    }
                                                ],
                                                "obFees": [
                                                    {
                                                        "ref": 1
                                                    }
                                                ],
                                                "currencyConversion": {
                                                    "from": "USD",
                                                    "to": "BDT",
                                                    "exchangeRateUsed": 97.35
                                                },
                                                "passengerTotalFare": {
                                                    "totalFare": 31731,
                                                    "totalTaxAmount": 12553,
                                                    "currency": "BDT",
                                                    "baseFareAmount": 197,
                                                    "baseFareCurrency": "USD",
                                                    "equivalentAmount": 19178,
                                                    "equivalentCurrency": "BDT",
                                                    "constructionAmount": 197,
                                                    "constructionCurrency": "NUC"
                                                },
                                                "baggageInformation": [
                                                    {
                                                        "provisionType": "A",
                                                        "airlineCode": "SQ",
                                                        "segments": [
                                                            {
                                                                "id": 0
                                                            },
                                                            {
                                                                "id": 1
                                                            }
                                                        ],
                                                        "allowance": {
                                                            "ref": 1
                                                        }
                                                    },
                                                    {
                                                        "provisionType": "A",
                                                        "airlineCode": "SQ",
                                                        "segments": [
                                                            {
                                                                "id": 2
                                                            },
                                                            {
                                                                "id": 3
                                                            }
                                                        ],
                                                        "allowance": {
                                                            "ref": 1
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    ],
                                    "totalFare": {
                                        "totalPrice": 63462,
                                        "totalTaxAmount": 25106,
                                        "currency": "BDT",
                                        "baseFareAmount": 394,
                                        "baseFareCurrency": "USD",
                                        "constructionAmount": 394,
                                        "constructionCurrency": "NUC",
                                        "equivalentAmount": 38356,
                                        "equivalentCurrency": "BDT"
                                    }
                                }
                            }
                        ],
                        "diversitySwapper": {
                            "weighedPrice": 197369.016
                        }
                    },
                    {
                        "id": 6,
                        "pricingSource": "ADVJR1",
                        "legs": [
                            {
                                "ref": 9
                            },
                            {
                                "ref": 1
                            }
                        ],
                        "pricingInformation": [
                            {
                                "pricingSubsource": "HPIS",
                                "fare": {
                                    "validatingCarrierCode": "SQ",
                                    "vita": true,
                                    "eTicketable": true,
                                    "lastTicketDate": "2022-10-30",
                                    "lastTicketTime": "23:55",
                                    "governingCarriers": "SQ SQ",
                                    "passengerInfoList": [
                                        {
                                            "passengerInfo": {
                                                "passengerType": "ADT",
                                                "passengerNumber": 2,
                                                "nonRefundable": true,
                                                "fareComponents": [
                                                    {
                                                        "ref": 6,
                                                        "beginAirport": "DAC",
                                                        "endAirport": "BKK",
                                                        "segments": [
                                                            {
                                                                "segment": {
                                                                    "bookingCode": "K",
                                                                    "cabinCode": "Y",
                                                                    "mealCode": "M",
                                                                    "seatsAvailable": 9
                                                                }
                                                            },
                                                            {
                                                                "segment": {
                                                                    "bookingCode": "K",
                                                                    "cabinCode": "Y",
                                                                    "mealCode": "M",
                                                                    "seatsAvailable": 9,
                                                                    "availabilityBreak": true
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "ref": 1,
                                                        "beginAirport": "BKK",
                                                        "endAirport": "DAC",
                                                        "segments": [
                                                            {
                                                                "segment": {
                                                                    "bookingCode": "K",
                                                                    "cabinCode": "Y",
                                                                    "mealCode": "M",
                                                                    "seatsAvailable": 9
                                                                }
                                                            },
                                                            {
                                                                "segment": {
                                                                    "bookingCode": "K",
                                                                    "cabinCode": "Y",
                                                                    "mealCode": "M",
                                                                    "seatsAvailable": 9,
                                                                    "availabilityBreak": true
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ],
                                                "taxes": [
                                                    {
                                                        "ref": 18
                                                    },
                                                    {
                                                        "ref": 12
                                                    },
                                                    {
                                                        "ref": 13
                                                    },
                                                    {
                                                        "ref": 6
                                                    },
                                                    {
                                                        "ref": 2
                                                    },
                                                    {
                                                        "ref": 11
                                                    },
                                                    {
                                                        "ref": 3
                                                    },
                                                    {
                                                        "ref": 3
                                                    },
                                                    {
                                                        "ref": 1
                                                    },
                                                    {
                                                        "ref": 1
                                                    },
                                                    {
                                                        "ref": 16
                                                    },
                                                    {
                                                        "ref": 14
                                                    },
                                                    {
                                                        "ref": 4
                                                    },
                                                    {
                                                        "ref": 17
                                                    },
                                                    {
                                                        "ref": 15
                                                    },
                                                    {
                                                        "ref": 5
                                                    }
                                                ],
                                                "taxSummaries": [
                                                    {
                                                        "ref": 12
                                                    },
                                                    {
                                                        "ref": 9
                                                    },
                                                    {
                                                        "ref": 11
                                                    },
                                                    {
                                                        "ref": 3
                                                    },
                                                    {
                                                        "ref": 7
                                                    },
                                                    {
                                                        "ref": 2
                                                    },
                                                    {
                                                        "ref": 6
                                                    },
                                                    {
                                                        "ref": 1
                                                    },
                                                    {
                                                        "ref": 5
                                                    },
                                                    {
                                                        "ref": 10
                                                    },
                                                    {
                                                        "ref": 8
                                                    },
                                                    {
                                                        "ref": 4
                                                    }
                                                ],
                                                "obFees": [
                                                    {
                                                        "ref": 1
                                                    }
                                                ],
                                                "currencyConversion": {
                                                    "from": "USD",
                                                    "to": "BDT",
                                                    "exchangeRateUsed": 97.35
                                                },
                                                "passengerTotalFare": {
                                                    "totalFare": 31731,
                                                    "totalTaxAmount": 12553,
                                                    "currency": "BDT",
                                                    "baseFareAmount": 197,
                                                    "baseFareCurrency": "USD",
                                                    "equivalentAmount": 19178,
                                                    "equivalentCurrency": "BDT",
                                                    "constructionAmount": 197,
                                                    "constructionCurrency": "NUC"
                                                },
                                                "baggageInformation": [
                                                    {
                                                        "provisionType": "A",
                                                        "airlineCode": "SQ",
                                                        "segments": [
                                                            {
                                                                "id": 0
                                                            },
                                                            {
                                                                "id": 1
                                                            }
                                                        ],
                                                        "allowance": {
                                                            "ref": 1
                                                        }
                                                    },
                                                    {
                                                        "provisionType": "A",
                                                        "airlineCode": "SQ",
                                                        "segments": [
                                                            {
                                                                "id": 2
                                                            },
                                                            {
                                                                "id": 3
                                                            }
                                                        ],
                                                        "allowance": {
                                                            "ref": 1
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    ],
                                    "totalFare": {
                                        "totalPrice": 63462,
                                        "totalTaxAmount": 25106,
                                        "currency": "BDT",
                                        "baseFareAmount": 394,
                                        "baseFareCurrency": "USD",
                                        "constructionAmount": 394,
                                        "constructionCurrency": "NUC",
                                        "equivalentAmount": 38356,
                                        "equivalentCurrency": "BDT"
                                    }
                                }
                            }
                        ],
                        "diversitySwapper": {
                            "weighedPrice": 197849.637
                        }
                    },
                    {
                        "id": 7,
                        "pricingSource": "ADVJR1",
                        "legs": [
                            {
                                "ref": 5
                            },
                            {
                                "ref": 2
                            }
                        ],
                        "pricingInformation": [
                            {
                                "pricingSubsource": "HPIS",
                                "fare": {
                                    "validatingCarrierCode": "SQ",
                                    "vita": true,
                                    "eTicketable": true,
                                    "lastTicketDate": "2022-10-30",
                                    "lastTicketTime": "23:55",
                                    "governingCarriers": "SQ SQ",
                                    "passengerInfoList": [
                                        {
                                            "passengerInfo": {
                                                "passengerType": "ADT",
                                                "passengerNumber": 2,
                                                "nonRefundable": true,
                                                "fareComponents": [
                                                    {
                                                        "ref": 6,
                                                        "beginAirport": "DAC",
                                                        "endAirport": "BKK",
                                                        "segments": [
                                                            {
                                                                "segment": {
                                                                    "bookingCode": "K",
                                                                    "cabinCode": "Y",
                                                                    "mealCode": "M",
                                                                    "seatsAvailable": 9
                                                                }
                                                            },
                                                            {
                                                                "segment": {
                                                                    "bookingCode": "K",
                                                                    "cabinCode": "Y",
                                                                    "mealCode": "M",
                                                                    "seatsAvailable": 9,
                                                                    "availabilityBreak": true
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "ref": 1,
                                                        "beginAirport": "BKK",
                                                        "endAirport": "DAC",
                                                        "segments": [
                                                            {
                                                                "segment": {
                                                                    "bookingCode": "K",
                                                                    "cabinCode": "Y",
                                                                    "mealCode": "M",
                                                                    "seatsAvailable": 0
                                                                }
                                                            },
                                                            {
                                                                "segment": {
                                                                    "bookingCode": "K",
                                                                    "cabinCode": "Y",
                                                                    "mealCode": "M",
                                                                    "seatsAvailable": 0,
                                                                    "availabilityBreak": true
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ],
                                                "taxes": [
                                                    {
                                                        "ref": 18
                                                    },
                                                    {
                                                        "ref": 12
                                                    },
                                                    {
                                                        "ref": 13
                                                    },
                                                    {
                                                        "ref": 6
                                                    },
                                                    {
                                                        "ref": 2
                                                    },
                                                    {
                                                        "ref": 11
                                                    },
                                                    {
                                                        "ref": 3
                                                    },
                                                    {
                                                        "ref": 3
                                                    },
                                                    {
                                                        "ref": 1
                                                    },
                                                    {
                                                        "ref": 1
                                                    },
                                                    {
                                                        "ref": 16
                                                    },
                                                    {
                                                        "ref": 14
                                                    },
                                                    {
                                                        "ref": 4
                                                    },
                                                    {
                                                        "ref": 17
                                                    },
                                                    {
                                                        "ref": 15
                                                    },
                                                    {
                                                        "ref": 5
                                                    }
                                                ],
                                                "taxSummaries": [
                                                    {
                                                        "ref": 12
                                                    },
                                                    {
                                                        "ref": 9
                                                    },
                                                    {
                                                        "ref": 11
                                                    },
                                                    {
                                                        "ref": 3
                                                    },
                                                    {
                                                        "ref": 7
                                                    },
                                                    {
                                                        "ref": 2
                                                    },
                                                    {
                                                        "ref": 6
                                                    },
                                                    {
                                                        "ref": 1
                                                    },
                                                    {
                                                        "ref": 5
                                                    },
                                                    {
                                                        "ref": 10
                                                    },
                                                    {
                                                        "ref": 8
                                                    },
                                                    {
                                                        "ref": 4
                                                    }
                                                ],
                                                "obFees": [
                                                    {
                                                        "ref": 1
                                                    }
                                                ],
                                                "currencyConversion": {
                                                    "from": "USD",
                                                    "to": "BDT",
                                                    "exchangeRateUsed": 97.35
                                                },
                                                "passengerTotalFare": {
                                                    "totalFare": 31731,
                                                    "totalTaxAmount": 12553,
                                                    "currency": "BDT",
                                                    "baseFareAmount": 197,
                                                    "baseFareCurrency": "USD",
                                                    "equivalentAmount": 19178,
                                                    "equivalentCurrency": "BDT",
                                                    "constructionAmount": 197,
                                                    "constructionCurrency": "NUC"
                                                },
                                                "baggageInformation": [
                                                    {
                                                        "provisionType": "A",
                                                        "airlineCode": "SQ",
                                                        "segments": [
                                                            {
                                                                "id": 0
                                                            },
                                                            {
                                                                "id": 1
                                                            }
                                                        ],
                                                        "allowance": {
                                                            "ref": 1
                                                        }
                                                    },
                                                    {
                                                        "provisionType": "A",
                                                        "airlineCode": "SQ",
                                                        "segments": [
                                                            {
                                                                "id": 2
                                                            },
                                                            {
                                                                "id": 3
                                                            }
                                                        ],
                                                        "allowance": {
                                                            "ref": 1
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    ],
                                    "totalFare": {
                                        "totalPrice": 63462,
                                        "totalTaxAmount": 25106,
                                        "currency": "BDT",
                                        "baseFareAmount": 394,
                                        "baseFareCurrency": "USD",
                                        "constructionAmount": 394,
                                        "constructionCurrency": "NUC",
                                        "equivalentAmount": 38356,
                                        "equivalentCurrency": "BDT"
                                    }
                                }
                            }
                        ],
                        "diversitySwapper": {
                            "weighedPrice": 198185.685
                        }
                    },
                    {
                        "id": 8,
                        "pricingSource": "ADVJR1",
                        "legs": [
                            {
                                "ref": 4
                            },
                            {
                                "ref": 1
                            }
                        ],
                        "pricingInformation": [
                            {
                                "pricingSubsource": "HPIS",
                                "fare": {
                                    "validatingCarrierCode": "SQ",
                                    "vita": true,
                                    "eTicketable": true,
                                    "lastTicketDate": "2022-10-30",
                                    "lastTicketTime": "23:55",
                                    "governingCarriers": "SQ SQ",
                                    "passengerInfoList": [
                                        {
                                            "passengerInfo": {
                                                "passengerType": "ADT",
                                                "passengerNumber": 2,
                                                "nonRefundable": true,
                                                "fareComponents": [
                                                    {
                                                        "ref": 6,
                                                        "beginAirport": "DAC",
                                                        "endAirport": "BKK",
                                                        "segments": [
                                                            {
                                                                "segment": {
                                                                    "bookingCode": "K",
                                                                    "cabinCode": "Y",
                                                                    "mealCode": "M",
                                                                    "seatsAvailable": 9
                                                                }
                                                            },
                                                            {
                                                                "segment": {
                                                                    "bookingCode": "K",
                                                                    "cabinCode": "Y",
                                                                    "mealCode": "M",
                                                                    "seatsAvailable": 9,
                                                                    "availabilityBreak": true
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "ref": 1,
                                                        "beginAirport": "BKK",
                                                        "endAirport": "DAC",
                                                        "segments": [
                                                            {
                                                                "segment": {
                                                                    "bookingCode": "K",
                                                                    "cabinCode": "Y",
                                                                    "mealCode": "M",
                                                                    "seatsAvailable": 9
                                                                }
                                                            },
                                                            {
                                                                "segment": {
                                                                    "bookingCode": "K",
                                                                    "cabinCode": "Y",
                                                                    "mealCode": "M",
                                                                    "seatsAvailable": 9,
                                                                    "availabilityBreak": true
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ],
                                                "taxes": [
                                                    {
                                                        "ref": 18
                                                    },
                                                    {
                                                        "ref": 12
                                                    },
                                                    {
                                                        "ref": 13
                                                    },
                                                    {
                                                        "ref": 6
                                                    },
                                                    {
                                                        "ref": 2
                                                    },
                                                    {
                                                        "ref": 11
                                                    },
                                                    {
                                                        "ref": 3
                                                    },
                                                    {
                                                        "ref": 3
                                                    },
                                                    {
                                                        "ref": 1
                                                    },
                                                    {
                                                        "ref": 1
                                                    },
                                                    {
                                                        "ref": 16
                                                    },
                                                    {
                                                        "ref": 14
                                                    },
                                                    {
                                                        "ref": 4
                                                    },
                                                    {
                                                        "ref": 17
                                                    },
                                                    {
                                                        "ref": 15
                                                    },
                                                    {
                                                        "ref": 5
                                                    }
                                                ],
                                                "taxSummaries": [
                                                    {
                                                        "ref": 12
                                                    },
                                                    {
                                                        "ref": 9
                                                    },
                                                    {
                                                        "ref": 11
                                                    },
                                                    {
                                                        "ref": 3
                                                    },
                                                    {
                                                        "ref": 7
                                                    },
                                                    {
                                                        "ref": 2
                                                    },
                                                    {
                                                        "ref": 6
                                                    },
                                                    {
                                                        "ref": 1
                                                    },
                                                    {
                                                        "ref": 5
                                                    },
                                                    {
                                                        "ref": 10
                                                    },
                                                    {
                                                        "ref": 8
                                                    },
                                                    {
                                                        "ref": 4
                                                    }
                                                ],
                                                "obFees": [
                                                    {
                                                        "ref": 1
                                                    }
                                                ],
                                                "currencyConversion": {
                                                    "from": "USD",
                                                    "to": "BDT",
                                                    "exchangeRateUsed": 97.35
                                                },
                                                "passengerTotalFare": {
                                                    "totalFare": 31731,
                                                    "totalTaxAmount": 12553,
                                                    "currency": "BDT",
                                                    "baseFareAmount": 197,
                                                    "baseFareCurrency": "USD",
                                                    "equivalentAmount": 19178,
                                                    "equivalentCurrency": "BDT",
                                                    "constructionAmount": 197,
                                                    "constructionCurrency": "NUC"
                                                },
                                                "baggageInformation": [
                                                    {
                                                        "provisionType": "A",
                                                        "airlineCode": "SQ",
                                                        "segments": [
                                                            {
                                                                "id": 0
                                                            },
                                                            {
                                                                "id": 1
                                                            }
                                                        ],
                                                        "allowance": {
                                                            "ref": 1
                                                        }
                                                    },
                                                    {
                                                        "provisionType": "A",
                                                        "airlineCode": "SQ",
                                                        "segments": [
                                                            {
                                                                "id": 2
                                                            },
                                                            {
                                                                "id": 3
                                                            }
                                                        ],
                                                        "allowance": {
                                                            "ref": 1
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    ],
                                    "totalFare": {
                                        "totalPrice": 63462,
                                        "totalTaxAmount": 25106,
                                        "currency": "BDT",
                                        "baseFareAmount": 394,
                                        "baseFareCurrency": "USD",
                                        "constructionAmount": 394,
                                        "constructionCurrency": "NUC",
                                        "equivalentAmount": 38356,
                                        "equivalentCurrency": "BDT"
                                    }
                                }
                            }
                        ],
                        "diversitySwapper": {
                            "weighedPrice": 198866.831
                        }
                    },
                    {
                        "id": 9,
                        "pricingSource": "ADVJR1",
                        "legs": [
                            {
                                "ref": 8
                            },
                            {
                                "ref": 13
                            }
                        ],
                        "pricingInformation": [
                            {
                                "pricingSubsource": "HPIS",
                                "fare": {
                                    "validatingCarrierCode": "UL",
                                    "vita": true,
                                    "eTicketable": true,
                                    "lastTicketDate": "2022-10-30",
                                    "lastTicketTime": "13:00",
                                    "governingCarriers": "UL UL",
                                    "passengerInfoList": [
                                        {
                                            "passengerInfo": {
                                                "passengerType": "ADT",
                                                "passengerNumber": 2,
                                                "nonRefundable": false,
                                                "fareComponents": [
                                                    {
                                                        "ref": 3,
                                                        "beginAirport": "DAC",
                                                        "endAirport": "BKK",
                                                        "segments": [
                                                            {
                                                                "segment": {
                                                                    "bookingCode": "O",
                                                                    "cabinCode": "Y",
                                                                    "mealCode": "H",
                                                                    "seatsAvailable": 7
                                                                }
                                                            },
                                                            {
                                                                "segment": {
                                                                    "bookingCode": "O",
                                                                    "cabinCode": "Y",
                                                                    "mealCode": "H",
                                                                    "seatsAvailable": 7,
                                                                    "availabilityBreak": true
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "ref": 8,
                                                        "beginAirport": "BKK",
                                                        "endAirport": "DAC",
                                                        "segments": [
                                                            {
                                                                "segment": {
                                                                    "bookingCode": "O",
                                                                    "cabinCode": "Y",
                                                                    "mealCode": "H",
                                                                    "seatsAvailable": 7
                                                                }
                                                            },
                                                            {
                                                                "segment": {
                                                                    "bookingCode": "O",
                                                                    "cabinCode": "Y",
                                                                    "mealCode": "H",
                                                                    "seatsAvailable": 7,
                                                                    "availabilityBreak": true
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ],
                                                "taxes": [
                                                    {
                                                        "ref": 18
                                                    },
                                                    {
                                                        "ref": 12
                                                    },
                                                    {
                                                        "ref": 13
                                                    },
                                                    {
                                                        "ref": 6
                                                    },
                                                    {
                                                        "ref": 2
                                                    },
                                                    {
                                                        "ref": 11
                                                    },
                                                    {
                                                        "ref": 16
                                                    },
                                                    {
                                                        "ref": 4
                                                    },
                                                    {
                                                        "ref": 15
                                                    },
                                                    {
                                                        "ref": 8
                                                    },
                                                    {
                                                        "ref": 7
                                                    }
                                                ],
                                                "taxSummaries": [
                                                    {
                                                        "ref": 12
                                                    },
                                                    {
                                                        "ref": 9
                                                    },
                                                    {
                                                        "ref": 2
                                                    },
                                                    {
                                                        "ref": 6
                                                    },
                                                    {
                                                        "ref": 1
                                                    },
                                                    {
                                                        "ref": 10
                                                    },
                                                    {
                                                        "ref": 8
                                                    },
                                                    {
                                                        "ref": 11
                                                    },
                                                    {
                                                        "ref": 3
                                                    }
                                                ],
                                                "currencyConversion": {
                                                    "from": "USD",
                                                    "to": "BDT",
                                                    "exchangeRateUsed": 97.35
                                                },
                                                "passengerTotalFare": {
                                                    "totalFare": 33516,
                                                    "totalTaxAmount": 9860,
                                                    "currency": "BDT",
                                                    "baseFareAmount": 243,
                                                    "baseFareCurrency": "USD",
                                                    "equivalentAmount": 23656,
                                                    "equivalentCurrency": "BDT",
                                                    "constructionAmount": 242.82,
                                                    "constructionCurrency": "NUC"
                                                },
                                                "baggageInformation": [
                                                    {
                                                        "provisionType": "A",
                                                        "airlineCode": "UL",
                                                        "segments": [
                                                            {
                                                                "id": 0
                                                            },
                                                            {
                                                                "id": 1
                                                            }
                                                        ],
                                                        "allowance": {
                                                            "ref": 2
                                                        }
                                                    },
                                                    {
                                                        "provisionType": "A",
                                                        "airlineCode": "UL",
                                                        "segments": [
                                                            {
                                                                "id": 2
                                                            },
                                                            {
                                                                "id": 3
                                                            }
                                                        ],
                                                        "allowance": {
                                                            "ref": 2
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    ],
                                    "totalFare": {
                                        "totalPrice": 67032,
                                        "totalTaxAmount": 19720,
                                        "currency": "BDT",
                                        "baseFareAmount": 486,
                                        "baseFareCurrency": "USD",
                                        "constructionAmount": 485.64,
                                        "constructionCurrency": "NUC",
                                        "equivalentAmount": 47312,
                                        "equivalentCurrency": "BDT"
                                    }
                                }
                            }
                        ],
                        "diversitySwapper": {
                            "weighedPrice": 194112.97
                        }
                    },
                    {
                        "id": 10,
                        "pricingSource": "ADVJR1",
                        "legs": [
                            {
                                "ref": 3
                            },
                            {
                                "ref": 11
                            }
                        ],
                        "pricingInformation": [
                            {
                                "pricingSubsource": "HPIS",
                                "fare": {
                                    "validatingCarrierCode": "TG",
                                    "vita": true,
                                    "eTicketable": true,
                                    "lastTicketDate": "2022-10-30",
                                    "lastTicketTime": "13:40",
                                    "governingCarriers": "TG TG",
                                    "passengerInfoList": [
                                        {
                                            "passengerInfo": {
                                                "passengerType": "ADT",
                                                "passengerNumber": 2,
                                                "nonRefundable": false,
                                                "fareComponents": [
                                                    {
                                                        "ref": 2,
                                                        "beginAirport": "DAC",
                                                        "endAirport": "BKK",
                                                        "segments": [
                                                            {
                                                                "segment": {
                                                                    "bookingCode": "W",
                                                                    "cabinCode": "Y",
                                                                    "mealCode": "M",
                                                                    "seatsAvailable": 9,
                                                                    "availabilityBreak": true
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "ref": 5,
                                                        "beginAirport": "BKK",
                                                        "endAirport": "DAC",
                                                        "segments": [
                                                            {
                                                                "segment": {
                                                                    "bookingCode": "W",
                                                                    "cabinCode": "Y",
                                                                    "mealCode": "M",
                                                                    "seatsAvailable": 9,
                                                                    "availabilityBreak": true
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ],
                                                "taxes": [
                                                    {
                                                        "ref": 18
                                                    },
                                                    {
                                                        "ref": 12
                                                    },
                                                    {
                                                        "ref": 13
                                                    },
                                                    {
                                                        "ref": 6
                                                    },
                                                    {
                                                        "ref": 2
                                                    },
                                                    {
                                                        "ref": 11
                                                    },
                                                    {
                                                        "ref": 16
                                                    },
                                                    {
                                                        "ref": 4
                                                    },
                                                    {
                                                        "ref": 15
                                                    },
                                                    {
                                                        "ref": 9
                                                    },
                                                    {
                                                        "ref": 10
                                                    }
                                                ],
                                                "taxSummaries": [
                                                    {
                                                        "ref": 12
                                                    },
                                                    {
                                                        "ref": 9
                                                    },
                                                    {
                                                        "ref": 2
                                                    },
                                                    {
                                                        "ref": 6
                                                    },
                                                    {
                                                        "ref": 1
                                                    },
                                                    {
                                                        "ref": 10
                                                    },
                                                    {
                                                        "ref": 8
                                                    },
                                                    {
                                                        "ref": 11
                                                    },
                                                    {
                                                        "ref": 3
                                                    }
                                                ],
                                                "currencyConversion": {
                                                    "from": "USD",
                                                    "to": "BDT",
                                                    "exchangeRateUsed": 97.35
                                                },
                                                "passengerTotalFare": {
                                                    "totalFare": 47438,
                                                    "totalTaxAmount": 9860,
                                                    "currency": "BDT",
                                                    "baseFareAmount": 386,
                                                    "baseFareCurrency": "USD",
                                                    "equivalentAmount": 37578,
                                                    "equivalentCurrency": "BDT",
                                                    "constructionAmount": 386,
                                                    "constructionCurrency": "NUC"
                                                },
                                                "baggageInformation": [
                                                    {
                                                        "provisionType": "A",
                                                        "airlineCode": "TG",
                                                        "segments": [
                                                            {
                                                                "id": 0
                                                            }
                                                        ],
                                                        "allowance": {
                                                            "ref": 3
                                                        }
                                                    },
                                                    {
                                                        "provisionType": "A",
                                                        "airlineCode": "TG",
                                                        "segments": [
                                                            {
                                                                "id": 1
                                                            }
                                                        ],
                                                        "allowance": {
                                                            "ref": 3
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    ],
                                    "totalFare": {
                                        "totalPrice": 94876,
                                        "totalTaxAmount": 19720,
                                        "currency": "BDT",
                                        "baseFareAmount": 772,
                                        "baseFareCurrency": "USD",
                                        "constructionAmount": 772,
                                        "constructionCurrency": "NUC",
                                        "equivalentAmount": 75156,
                                        "equivalentCurrency": "BDT"
                                    }
                                }
                            }
                        ],
                        "diversitySwapper": {
                            "weighedPrice": 28462.8
                        }
                    },
                    {
                        "id": 11,
                        "pricingSource": "ADVJR1",
                        "legs": [
                            {
                                "ref": 3
                            },
                            {
                                "ref": 6
                            }
                        ],
                        "pricingInformation": [
                            {
                                "pricingSubsource": "HPIS",
                                "fare": {
                                    "validatingCarrierCode": "TG",
                                    "vita": true,
                                    "eTicketable": true,
                                    "lastTicketDate": "2022-10-30",
                                    "lastTicketTime": "13:40",
                                    "governingCarriers": "TG TG",
                                    "passengerInfoList": [
                                        {
                                            "passengerInfo": {
                                                "passengerType": "ADT",
                                                "passengerNumber": 2,
                                                "nonRefundable": false,
                                                "fareComponents": [
                                                    {
                                                        "ref": 2,
                                                        "beginAirport": "DAC",
                                                        "endAirport": "BKK",
                                                        "segments": [
                                                            {
                                                                "segment": {
                                                                    "bookingCode": "W",
                                                                    "cabinCode": "Y",
                                                                    "mealCode": "M",
                                                                    "seatsAvailable": 9,
                                                                    "availabilityBreak": true
                                                                }
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "ref": 5,
                                                        "beginAirport": "BKK",
                                                        "endAirport": "DAC",
                                                        "segments": [
                                                            {
                                                                "segment": {
                                                                    "bookingCode": "W",
                                                                    "cabinCode": "Y",
                                                                    "mealCode": "M",
                                                                    "seatsAvailable": 9,
                                                                    "availabilityBreak": true
                                                                }
                                                            }
                                                        ]
                                                    }
                                                ],
                                                "taxes": [
                                                    {
                                                        "ref": 18
                                                    },
                                                    {
                                                        "ref": 12
                                                    },
                                                    {
                                                        "ref": 13
                                                    },
                                                    {
                                                        "ref": 6
                                                    },
                                                    {
                                                        "ref": 2
                                                    },
                                                    {
                                                        "ref": 11
                                                    },
                                                    {
                                                        "ref": 16
                                                    },
                                                    {
                                                        "ref": 4
                                                    },
                                                    {
                                                        "ref": 15
                                                    },
                                                    {
                                                        "ref": 9
                                                    },
                                                    {
                                                        "ref": 10
                                                    }
                                                ],
                                                "taxSummaries": [
                                                    {
                                                        "ref": 12
                                                    },
                                                    {
                                                        "ref": 9
                                                    },
                                                    {
                                                        "ref": 2
                                                    },
                                                    {
                                                        "ref": 6
                                                    },
                                                    {
                                                        "ref": 1
                                                    },
                                                    {
                                                        "ref": 10
                                                    },
                                                    {
                                                        "ref": 8
                                                    },
                                                    {
                                                        "ref": 11
                                                    },
                                                    {
                                                        "ref": 3
                                                    }
                                                ],
                                                "currencyConversion": {
                                                    "from": "USD",
                                                    "to": "BDT",
                                                    "exchangeRateUsed": 97.35
                                                },
                                                "passengerTotalFare": {
                                                    "totalFare": 47438,
                                                    "totalTaxAmount": 9860,
                                                    "currency": "BDT",
                                                    "baseFareAmount": 386,
                                                    "baseFareCurrency": "USD",
                                                    "equivalentAmount": 37578,
                                                    "equivalentCurrency": "BDT",
                                                    "constructionAmount": 386,
                                                    "constructionCurrency": "NUC"
                                                },
                                                "baggageInformation": [
                                                    {
                                                        "provisionType": "A",
                                                        "airlineCode": "TG",
                                                        "segments": [
                                                            {
                                                                "id": 0
                                                            }
                                                        ],
                                                        "allowance": {
                                                            "ref": 3
                                                        }
                                                    },
                                                    {
                                                        "provisionType": "A",
                                                        "airlineCode": "TG",
                                                        "segments": [
                                                            {
                                                                "id": 1
                                                            }
                                                        ],
                                                        "allowance": {
                                                            "ref": 3
                                                        }
                                                    }
                                                ]
                                            }
                                        }
                                    ],
                                    "totalFare": {
                                        "totalPrice": 94876,
                                        "totalTaxAmount": 19720,
                                        "currency": "BDT",
                                        "baseFareAmount": 772,
                                        "baseFareCurrency": "USD",
                                        "constructionAmount": 772,
                                        "constructionCurrency": "NUC",
                                        "equivalentAmount": 75156,
                                        "equivalentCurrency": "BDT"
                                    }
                                }
                            }
                        ],
                        "diversitySwapper": {
                            "weighedPrice": 42694.2
                        }
                    }
                ]
            }
        ]
    }
}
export default BookingCard;