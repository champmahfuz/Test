import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Divider, Grid } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const RefundModal = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Box sx={ {
        } }>
            <Typography onClick={ handleOpen } sx={ {
                py: 3,
                color: '#007FFF',
                cursor: 'pointer',
                ":focus": ''
            } }>Show More Information</Typography>
            <Modal
                open={ open }
                onClose={ handleClose }
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={ style }>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Refund Policy
                    </Typography>
                    <Divider light />
                    <Box sx={ {
                        position: 'relative',
                        maxHeight: '80vh',
                        overflowY: 'scroll'
                    } } >

                        <Grid container spacing={ 2 } sx={ {
                            py: 3

                        } }>
                            <Grid item xs={ 12 } sm={ 12 } md={ 8 } lg={ 8 }>
                                <Typography variant="h6" display="block" gutterBottom>
                                    DAC-CXB
                                </Typography>
                                <Typography variant="h6" display="block" gutterBottom>
                                    PENALTIES/GENERAL
                                </Typography>
                                <Typography id="modal-modal-description" sx={ { mt: 2 } }>
                                    <ol>
                                        <li>T - Economy Saver | Domestic Fare basis code</li>
                                        <li>HK Status</li>
                                        <li>9 Available seat(s)</li>
                                        <li>allowed One way</li>
                                        <li>not allowed Open ticket</li>
                                        <li>The duration of the stay must be included between 0 and 180 days</li>
                                        <li>Modifiable with fee Ticket 1000 BDT Before 24 hour(s) of the flight departure</li>
                                        <li>Refundable with fee Ticket 1500 BDT Before 24 hour(s) of the flight departure</li>
                                        <li>Bag allowance 20 Kg AD</li>
                                    </ol>
                                </Typography>
                            </Grid>
                            <Grid item xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                                <Box sx={ {
                                    background: 'rgba(166, 166, 175, 0.40)',
                                    p: 3
                                } }>
                                    <Typography variant="h6" component="h2">
                                        How to read rules
                                    </Typography>

                                    <Typography variant="body1" component="p" sx={ { py: 2 } }>
                                        Pay attention to the following notifications in the CANCELLATIONS section:
                                    </Typography>
                                    <Typography variant="body1" component="p" sx={ { py: 2 } }>
                                        TICKET IS NON-REFUNDABLE — the ticket is non-refundable;
                                        TICKET IS NON-REFUNDABLE FOR CANCEL/REFUND — the ticket is non-refundable; REFUND IS NOT PERMITTED — the ticket is non-refundable;
                                        ANY TIME TICKET IS NON-REFUNDABLE — the ticket is non-refundable;
                                        TICKET IS NON-REFUNDABLE IN CASE OF NO-SHOW — the ticket cannot be refunded in case of no-show.
                                        Change rules are described in the section with the CHANGES subtitle.
                                    </Typography>
                                    <Typography variant="body1" component="p" sx={ { py: 2 } }>
                                        The CHANGES ARE NOT PERMITTED line means that you cannot make any changes and in such a case, you are not allowed to change the date/time/route of the flight.
                                    </Typography>




                                </Box>
                            </Grid>

                        </Grid>
                    </Box>

                </Box>
            </Modal >
        </Box >
    );
};

export default RefundModal;