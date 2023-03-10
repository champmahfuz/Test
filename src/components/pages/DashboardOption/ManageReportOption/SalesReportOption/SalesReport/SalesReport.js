import { Box, Button, Collapse, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import React from 'react';
import AssignmentIcon from "@mui/icons-material/Assignment";
import styles from './SalesReport.module.css';

const SalesReport = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <Container sx={{ width: "100%", mb: 5 }}>
            <Box className={`${styles.topContainer}`} sx={{ display: "flex", my: 3 }}>
                <Typography>
                    <AssignmentIcon className={`${styles.assignmentIcon}`} />{" "}
                </Typography>
                <Typography>
                    <span style={{ fontSize: "26px" }}>Sales Report</span> <br />{" "}
                    <span style={{ color: "#969494" }}>Total Sales Report</span>
                </Typography>
            </Box>
            <Box sx={{ textAlign: "left", mb: 1 }}>
                <Button className={`${styles.filterBtn}`} onClick={() => setOpen(!open)}>
                    Filter
                </Button>
                <Collapse
                    in={open}
                    sx={{ mt: 2, mb: 2 }}
                    timeout="auto"
                    unmountOnExit
                    className={`${styles.tableContainer}`}
                >
                    <form >

                        <TextField size="small" id="date" label="Start Date" type="date" sx={{ mr: 2 }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            required
                        />
                        <TextField size="small" id="date" label="End Date" type="date" sx={{ mr: 2 }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            required
                        />
                        <Button className={`${styles.searchBtn}`} type='submit'>Search</Button>
                    </form>
                </Collapse>
            </Box>
            <Box className={`${styles.tableContainer}`} sx={{ mt: 2 }}>
                <Typography sx={{ fontWeight: "bold" }}>Sales Report</Typography>
                <hr />
                <TableContainer
                    component={Paper}
                    sx={{ border: 1, borderColor: "grey.300" }}
                >
                    <Table aria-label="simple table">
                        <TableHead className={`${styles.tableHeader}`}>
                            <TableRow>
                                <TableCell align="left" className={`${styles.tableCell}`}>
                                    Sales Date
                                </TableCell>
                                <TableCell align="left" className={`${styles.tableCell}`}>
                                    Sell No
                                </TableCell>
                                <TableCell align="left" className={`${styles.tableCell}`}>
                                    Customer Name
                                </TableCell>
                                <TableCell align="right" className={`${styles.tableCell}`}>
                                    Total Amount
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell colSpan={3} align="right" sx={{ borderRight: 1 }}>
                                    Total Sales:
                                </TableCell>
                                <TableCell align="right">BDT 0.00</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Container>
    );
};

export default SalesReport;