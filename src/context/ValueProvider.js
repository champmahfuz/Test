import { createContext, useCallback, useEffect, useState } from "react";

const ValueContext = createContext({});

export const ValueProvider = ({ children }) => {
    const [fromValue, setFromValue] = useState({
        "_id": "6334186a247c5bf04496e838",
        "name": "Dhaka,Hazrat Shahjalal International Airport (DAC)"
    })
    const [toValue, setToValue] = useState({
        "_id": "6334186a247c5bf044970863",
        "name": "Coxs Bazaar,Coxs Bazar Airport (CXB)"
    })

    const dateForJourney = new Date(new Date().getTime() + (1 * 24 * 60 * 60 * 1000));
    const dateForReturn = new Date(new Date().getTime() + (2 * 24 * 60 * 60 * 1000));
    const [journeyDate, setJourneyDate] = useState(dateForJourney);
    const [returnDate, setReturnDate] = useState(dateForReturn);

    // const [selectedFlight, setSelectedFlight] = useState({})

    const [passengerAndClassOpen, setPassengerAndClassOpen] = useState(false);
    const [passengersTotal, setPassengersTotal] = useState([{ "Code": "ADT", "Quantity": 1 }])
    const [passengerQuantittyForForm, setPassengerQuantittyForForm] = useState([{ "NameNumber": `${1 + 0}.1`, "Infant": false, "PassengerType": "ADT", "NameReference": "" }])



    const arrivalLocation = toValue?.name.split("(")[1].slice(0, 3);
    const departureLocation = fromValue?.name.split("(")[1].slice(0, 3);
    // const startDate = travelDate?.replaceAll("/", "-");
    const theJourneyDate = new Date(journeyDate.getTime() - (journeyDate.getTimezoneOffset() * 60000)).toISOString().split('T')[0];
    const theReturnDate = new Date(returnDate.getTime() - (returnDate.getTimezoneOffset() * 60000)).toISOString().split('T')[0];
    // console.log(theJourneyDate)
    const [flightType, setFlightType] = useState('roundTrip')
    const [orDiInfo, setOrDiInfo] = useState([{}])
    // useEffect(() => {

    //     if (flightType === 'oneWay') {
    //         setOrDiInfo([
    //             {
    //                 "DepartureDateTime": `${theJourneyDate}T00:00:00`, //
    //                 "DestinationLocation": {
    //                     "LocationCode": arrivalLocation
    //                 },
    //                 "OriginLocation": {
    //                     "LocationCode": departureLocation
    //                 },
    //                 "RPH": "0"
    //             }

    //         ])
    //     } else if (flightType === 'roundTrip') {
    //         setOrDiInfo(
    //             [
    //                 {
    //                     "DepartureDateTime": `${theJourneyDate}T00:00:00`,
    //                     "DestinationLocation": {
    //                         "LocationCode": arrivalLocation
    //                     },
    //                     "OriginLocation": {
    //                         "LocationCode": departureLocation
    //                     },
    //                     "RPH": "0"
    //                 },
    //                 {
    //                     "DepartureDateTime": `${theReturnDate}T00:00:00`,
    //                     "DestinationLocation": {
    //                         "LocationCode": departureLocation
    //                     },
    //                     "OriginLocation": {
    //                         "LocationCode": arrivalLocation
    //                     },
    //                     "RPH": "1"
    //                 }
    //             ]
    //         )
    //     }


    //     // return () => console.log("first")

    // }, [flightType, arrivalLocation, departureLocation, theJourneyDate, theReturnDate]);


    // const [passengerDetailsForm, setPassengerDetailsForm] = useState(passengerQuantittyForForm)


    const selectedCities = JSON.parse(localStorage.getItem("cities"));
    // with multiCity function start here
    const [cities, setCities] = useState(selectedCities || [{
        fromSelectedItem: 'Dhaka,Hazrat Shahjalal International Airport (DAC)',
        toSelectedItem: 'Dubai,Dubai Intl Arpt (DXB)',
        journeyDate: dateForJourney,
    }]);

    // console.log(selectedCities)
    localStorage.setItem("cities", JSON.stringify(cities));
    // console.log(cities)
    useEffect(() => {
        cities.map(({ fromSelectedItem, toSelectedItem, journeyDate, returnDate }) => {
            if (flightType === "oneWay") {
                setOrDiInfo([{
                    "DepartureDateTime": `${journeyDate}T00:00:00`,
                    "DestinationLocation": {
                        "LocationCode": toSelectedItem && toSelectedItem.split("(")[1].slice(0, 3)
                    },
                    "OriginLocation": {
                        "LocationCode": fromSelectedItem && fromSelectedItem.split("(")[1].slice(0, 3)
                    },
                    "RPH": `0`
                }])
            }
            if (flightType === "roundTrip") {
                setOrDiInfo([
                    {
                        "DepartureDateTime": `${journeyDate}T00:00:00`,
                        "DestinationLocation": {
                            "LocationCode": toSelectedItem && toSelectedItem.split("(")[1].slice(0, 3)
                        },
                        "OriginLocation": {
                            "LocationCode": fromSelectedItem && fromSelectedItem.split("(")[1].slice(0, 3)
                        },
                        "RPH": `0`
                    },
                    {
                        "DepartureDateTime": `${returnDate}T00:00:00`,
                        "DestinationLocation": {
                            "LocationCode": fromSelectedItem && fromSelectedItem.split("(")[1].slice(0, 3)
                        },
                        "OriginLocation": {
                            "LocationCode": toSelectedItem && toSelectedItem.split("(")[1].slice(0, 3)
                        },
                        "RPH": `1`
                    }
                ])
            }

        });

        if (flightType === "multiCity") {

            setOrDiInfo(cities.map(({ fromSelectedItem, toSelectedItem, journeyDate, returnDate }, i) => (
                {
                    "DepartureDateTime": `${journeyDate}T00:00:00`,
                    "DestinationLocation": {
                        "LocationCode": toSelectedItem && toSelectedItem.split("(")[1].slice(0, 3)
                    },
                    "OriginLocation": {
                        "LocationCode": fromSelectedItem && fromSelectedItem.split("(")[1].slice(0, 3)
                    },
                    "RPH": `${i}`
                }
            )))
        }






    }, [cities, flightType])
    // console.log(orDiInfo)
    return (
        <ValueContext.Provider value={ { toValue, setToValue, fromValue, setFromValue, returnDate, setReturnDate, journeyDate, setJourneyDate, flightType, setFlightType, orDiInfo, passengersTotal, setPassengersTotal, passengerQuantittyForForm, setPassengerQuantittyForForm, passengerAndClassOpen, setPassengerAndClassOpen, cities, setCities } }>
            { children }
        </ValueContext.Provider>

        // <ValueContext.Provider value={ { toValue, setToValue, fromValue, setFromValue, returnDate, setReturnDate, selectedFlight, setSelectedFlight, setPassengerDetails, journeyDate, setJourneyDate, flightType, setFlightType, orDiInfo, passengersTotal, setPassengersTotal } }>
        //     { children }
        // </ValueContext.Provider>
    )
}


export default ValueContext;