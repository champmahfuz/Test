import { useEffect, useState } from 'react';
import axios from '../api/axios';



const useFetch = (url) => {
    const [data, setData] = useState([])
    const [airportData, setAirportData] = useState([])
    const [airlinesIata, setAirlinesIata] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    // API TESTs
    const [toValue, setToValue] = useState(toLoc)
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await axios.get(url);
                setData(response.data);
                window.localStorage.removeItem('time');
                // window.localStorage.removeItem('selectedFlight');

            } catch (err) {
                setError(err)
            }
            setLoading(false);
        };
        fetchData();
        // return () => console.log("first")

    }, [url]);

    const reFetch = async () => {
        setLoading(true)
        try {
            const response = await axios.get(url);
            setData(response.data);

        } catch (err) {
            setError(err)
        }
        setLoading(false);
    };

    useEffect(() => {
        const airportData = async () => {
            setLoading(true)
            try {
                const response = await axios.get(`api/airportsearch`);
                setAirportData(response?.data);

            } catch (err) {
                setError(err)
            }
            setLoading(false);
        };
        airportData();
        // return () => console.log(airportData)
    }, []);

    useEffect(() => {
        const airlinesIata = async () => {
            setLoading(true)
            try {
                const response = await axios.get(`api/airlinesIata`);
                setAirlinesIata(response?.data);

            } catch (err) {
                setError(err)
            }
            setLoading(false);
        };
        airlinesIata();
        // return () => console.log(airportData)
    }, []);


    return { data, loading, error, reFetch, airportData, airlinesIata }
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
export default useFetch;