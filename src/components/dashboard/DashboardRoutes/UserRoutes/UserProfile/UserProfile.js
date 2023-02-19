import { Button, FormControl, Paper } from '@mui/material';
import React from 'react';
import TextFieldOne from '../../../../styleComponents/TextFields/TextFieldOne';

const UserProfile = () => {
    return (
        <Paper elevation={ 2 }>
            <FormControl sx={ { width: '100%', p: 5 } }>
                <TextFieldOne fullWidth id="filled-basic" label="Full Name" margin="normal" />
                <TextFieldOne fullWidth id="filled-basic" label="Full Name" margin="normal" />
                <TextFieldOne fullWidth id="filled-basic" label="Full Name" margin="normal" />
                <TextFieldOne fullWidth id="filled-basic" label="Full Name" margin="normal" />
                <TextFieldOne fullWidth id="filled-basic" label="Full Name" margin="normal" />

                <Button type="submit" margin="normal">Edit Profile</Button>
            </FormControl>
        </Paper>
    );
};

export default UserProfile;