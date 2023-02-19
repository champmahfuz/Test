import { Container, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';

const Clock = () => {
    function countdown(elementName, minutes, seconds) {
        var element, endTime, hours, mins, msLeft, time;
        function twoDigits(n) { return (n <= 9 ? "0" + n : n); }

        element = document.getElementById(elementName);
        endTime = (+new Date()) + 1000 * (60 * minutes + seconds) + 500;
        updateTimer();


        function updateTimer() {
            msLeft = endTime - (+new Date());

            if (msLeft < 1000) {
                element.innerHTML = "Time's up!";
            } else {
                time = new Date(msLeft);
                hours = time.getUTCHours();
                mins = time.getUTCMinutes();
                element.innerHTML = (hours ? hours + ' : ' + twoDigits(mins) : mins) + ' : ' + twoDigits(time.getUTCSeconds());
                setTimeout(updateTimer, time.getUTCMilliseconds() + 500);
            }
        }
    }

    useEffect(() => {
        countdown("ten-countdown", 30, 0);
    })

    return (
        <Paper sx={ {
            textAlign: 'center',
            // border: '2px solid silver',
            p: 1,
            mb: 1
        } }>
            <Typography variant='caption'>
                Book Now before it gets sold out.
            </Typography>
            <Box id="ten-countdown" sx={ {
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                p: 1,
                color: '#000',
                fontFamily: 'Verdana, sans-serif, Arial',
                fontSize: { xs: '15px', sm: '25px', md: '35px', lg: '37px' },
                fontWeight: 'bold',
                textDecoration: 'none',
                boxShadow: '#DBDBDF 0 5px 25px',
                textShadow: '1px 1px 7px',


            } }></Box>

        </Paper>
    );
};

export default Clock;