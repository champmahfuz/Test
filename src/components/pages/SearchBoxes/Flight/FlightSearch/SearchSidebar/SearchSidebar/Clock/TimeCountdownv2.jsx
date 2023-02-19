import { Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const TimeCountdownv2 = () => {

    const x = window.localStorage.getItem('time');
    const [time, setTime] = useState(x || 1800);
    window.localStorage.setItem('time', time);
    // console.log(x);


    useEffect(() => {
        let timer = setInterval(() => {
            setTime((time) => {
                if (time === 0) {
                    clearInterval(timer);
                    // window.localStorage.removeItem('selectedFlight');
                    return 0;
                } else if (time > 0) {
                    return time - 1;
                }
            });
        }, 1000);
    }, []);

    return (
        <Paper sx={ {
            textAlign: 'center',
            border: '2px solid silver',
            p: 1,
            mb: 1
        } }>
            <Typography variant='caption'>
                Book Now before it gets sold out.
            </Typography>
            <Paper>
                <span style={ { fontSize: '30px', color: 'red', fontWeight: '900' } }> { `${Math.floor(time / 60)}`.padStart(2, 0) }:
                    { `${time % 60}`.padStart(2, 0) }</span>
            </Paper>
        </Paper>
    );
};

export default TimeCountdownv2;