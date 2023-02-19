import React from 'react';
import { styled } from '@mui/system';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import TabUnstyled, { tabUnstyledClasses } from '@mui/base/TabUnstyled';
import { Box, Grid, Typography } from '@mui/material';
import RefundModal from './RefundModal';

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
  padding: 12px 16px;
  margin: 6px 6px;
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

const RefundAndBaggage = () => {
    return (
        <TabsUnstyled defaultValue={ 0 }>
            <Box sx={ {
                background: 'rgba(166, 166, 175, 0.40)',
                p: 3
            } }>
                <TabsList>
                    <Tab>Refund Policy</Tab>
                    <Tab>Baggage</Tab>
                </TabsList>
                <TabPanel value={ 0 }>
                    Refund and Date Change are done as per the following policies.

                    Refund Amount= Refund Charge (as per airline policy + Othooy Convenience Fee).

                    Date Change Amount= Date Change Fee (as per Airline Policy + Othooy Convenience Fee).


                    <RefundModal />
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

export default RefundAndBaggage;