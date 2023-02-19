import React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { Avatar, Box, Grid, Typography } from '@mui/material';

const blue = {
    50: '#F0F7FF',
    100: '#C2E0FF',
    200: '#80BFFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B2',
    800: '#004C99',
    900: '#003A75',
};

const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: white;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: bold;
  background-color: transparent;
  width: 100%;
  padding: 3px 4px;
  margin: 3px 3px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: ${blue[400]};
  }

  &:focus {
    color: #fff;
    border-radius: 3px;
    outline: 2px solid ${blue[200]};
    outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: ${blue[50]};
    color: ${blue[600]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

const TabsList = styled(TabsListUnstyled)`
  max-width: 100%;
  background-color: ${blue[500]};
  border-radius: 8px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: space-between;
`;
const FlightDetails = ({ itinerariesData, legDescs, scheduleDescs }) => {
    return (
        <TabsUnstyled defaultValue={ 0 }>
            <Box sx={ {
                // background: 'rgba(166, 166, 175, 0.40)',
                p: 3
            } }>
                <TabsList>
                    <Tab>
                        { itinerariesData?.legs.map((itinerary, index) =>

                        ((
                            <div style={ { padding: '5px', margin: '5px' } }>
                                { legDescs.find(legDesc => legDesc.id === itinerary.ref).schedules.map((schedule, index) => ((
                                    index === 0 &&
                                    <span key={ index }>

                                        { scheduleDescs.find(scheduleDesc => scheduleDesc.id === schedule.ref).departure.airport }
                                    </span>

                                ))) }
                            </div>
                        ))) }
                    </Tab>
                    <Tab>Baggage</Tab>
                </TabsList>
                <TabPanel value={ 0 }>
                    <Grid container spacing={ 0 } sx={ {
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    } }>
                        <Grid sx={ {
                            display: 'flex',
                            justifyContent: 'left',
                            alignItems: 'center',
                            py: 3
                        } }>
                            <Avatar
                                alt="Remy Sharp"
                                src="/static/images/avatar/1.jpg"
                                sx={ { width: 24, height: 24 } }
                            />
                            <Typography variant="caption" display="block" gutterBottom sx={ {
                                px: 3
                            } }>
                                Biman Bangladesh Airlines
                            </Typography>
                            <Typography variant="caption" display="block" gutterBottom sx={ {
                                px: 3
                            } }>
                                BG435
                            </Typography>
                            <Typography variant="overline" display="block" gutterBottom>
                                BOEING 737
                            </Typography>

                        </Grid>
                        <Grid item xs={ 5 }>
                            <Typography variant="h6" display="block" gutterBottom sx={ {

                            } }>
                                { itinerariesData?.legs.map((refData, index) => ((

                                    legDescs.find(item => item.id === refData.ref).schedules.map((schedule, index) => ((
                                        <span key={ index }>
                                            { scheduleDescs.find(scheduleDescs => scheduleDescs.id === schedule.ref).departure.airport }<> </>
                                            { scheduleDescs.find(scheduleDescs => scheduleDescs.id === schedule.ref).departure.time.split('+')[0] } <br />
                                        </span>

                                    )))

                                ))) }

                            </Typography>
                            <Typography variant="caption" display="block" gutterBottom sx={ {

                            } }>
                                Hazrat Shahjalal International Airport
                            </Typography>
                            <Typography variant="caption" display="block" gutterBottom sx={ {

                            } }>
                                {/* { legDescriptions.departureDate } */ }
                            </Typography>
                        </Grid>
                        <Grid item xs={ 2 }><Typography variant="caption" display="block" gutterBottom sx={ {

                        } }>
                            01h 15m
                        </Typography>

                        </Grid>
                        <Grid item xs={ 5 }>
                            <Typography variant="h6" display="block" gutterBottom sx={ {

                            } }>
                                { itinerariesData?.legs.map((refData, index) => ((

                                    legDescs.find(legDesc => legDesc.id === refData.ref).schedules.map((schedule, index) => ((
                                        <span key={ index }>
                                            { scheduleDescs.find(scheduleDescs => scheduleDescs.id === schedule.ref).arrival.airport }<> </>
                                            { scheduleDescs.find(scheduleDescs => scheduleDescs.id === schedule.ref).arrival.time.split('+')[0] } <br />
                                        </span>

                                    )))

                                ))) }
                            </Typography>
                            <Typography variant="caption" display="block" gutterBottom sx={ {
                            } }>
                                Hazrat Shahjalal International Airport
                            </Typography>
                            <Typography variant="caption" display="block" gutterBottom sx={ {
                            } }>
                                {/* { legDescriptions.departureDate } */ }
                            </Typography>

                        </Grid>
                    </Grid>

                </TabPanel>
                <TabPanel value={ 1 }>
                    <Typography variant="h6" display="block" gutterBottom>
                        DAC-CXB
                    </Typography>
                    <Grid container spacing={ 2 }>
                        <Grid item xs={ 6 }>
                            <Typography variant="caption" display="block" gutterBottom sx={ {
                            } }>
                                Baggage:
                            </Typography>
                        </Grid>
                        <Grid item xs={ 6 }>
                            <Typography variant="caption" display="block" gutterBottom sx={ {
                            } }>
                                20KG / person
                            </Typography>
                        </Grid>
                    </Grid>
                </TabPanel>
            </Box>
        </TabsUnstyled>
    );
};

export default FlightDetails;