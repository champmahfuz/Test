import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import './Flights.css';
import OneWay from '../Trips/OneWay/OneWay';
import OneWayV1 from '../Trips/OneWay/OneWayV1';
import RoundTrip from '../Trips/RoundTrip/RoundTrip';
import MultiCity from '../Trips/MultiCity/MultiCity';
import FlightTypeMenu from './flightSearchv3/FlightTypeMenu';
import React from 'react';
import PlaylistAddCheckCircleIcon from '@mui/icons-material/PlaylistAddCheckCircle';
import { Typography } from '@mui/material';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Box>{children}</Box>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Flights() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <Box sx={{
            width: '100%',
            background: 'rgba(255, 255, 255, 0.7)',
            color: '#fff',
            p: 5,
            backdropFilter: 'blur(5.5px)',

        }}>
            <Box sx={{
                borderBottom: 1,
                borderColor: 'divider',
            }} >
                <Tabs className="way-tabs" value={value} onChange={handleChange} aria-label="basic tabs example" sx={{
                    justifyContent: 'space-between !important'
                }}>
                    <Tab label="One Way" {...a11yProps(0)} value={0} />
                    <Tab label="Round Trip" {...a11yProps(1)} value={1} />
                    <Tab label="Multi-City" {...a11yProps(2)} value={2} />
                </Tabs>
            </Box>
            <Box>
                <TabPanel value={value} index={0} >
                    <OneWay />
                    {/* <OneWayV1 /> */}
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <RoundTrip />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <MultiCity />
                </TabPanel>
            </Box>

            {/* <FlightTypeMenu /> */}


        </Box >

    );
} 