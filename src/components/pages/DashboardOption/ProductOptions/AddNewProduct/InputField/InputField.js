import { Box, Button, Container, Typography } from '@mui/material';
import AssignmentIcon from "@mui/icons-material/Assignment";
import { NavLink } from "react-router-dom";
import React from 'react';
import styles from './InputField.module.css';
import { InputGroup } from "react-bootstrap";

const InputField = () => {
    return (
        <Container sx={{ width: "100%", mb: 5 }}>
            <Box className={`${styles.topContainer}`} sx={{ display: "flex", my: 3 }}>
                <Typography>
                    <AssignmentIcon className={`${styles.assignmentIcon}`} />{" "}
                </Typography>
                <Typography>
                    <span style={{ fontSize: "26px" }}>Product</span>{" "}
                    <br /> <span style={{ color: "#969494" }}>Add Product</span>
                </Typography>
            </Box>
            <Box sx={{ textAlign: "right", my: 2 }}>
                <NavLink
                    to="/dashboardhome/manageProduct"
                    style={{ textDecoration: "none" }}
                >
                    <Button className={`${styles.manageProductBtn}`}>Manage Products</Button>
                </NavLink>
            </Box>
            <Box className={`${styles.tableContainer}`}>
                <Typography sx={{ fontWeight: "bold", textAlign: "left" }}>
                    Add New Product
                </Typography>
                <hr />
                <div className="mt-2">
                    <div className="form-container">
                        <div>
                            <form>
                                <div className="row gx-3 mb-3 gy-3">

                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="p-3 border bg-light">
                                            <div className="mb-3">
                                                <label
                                                    className="form-label"
                                                    style={{ fontWeight: "bold" }}
                                                >
                                                    Product{" "}
                                                    <sup className="text-danger fw-bold fs-6">*</sup>
                                                </label>

                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Product"

                                                    style={{ background: "#E5E5E5" }}

                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="p-3 border bg-light">
                                            <div className="mb-3">
                                                <label
                                                    className="form-label"
                                                    style={{ fontWeight: "bold" }}
                                                >
                                                    Product ID{" "}
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Product ID"

                                                    style={{ background: "#E5E5E5" }}

                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row gx-3 mb-3 gy-3">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="p-3 border bg-light">
                                            <div className="mb-3">
                                                <label
                                                    className="form-label"
                                                    style={{ fontWeight: "bold" }}
                                                >
                                                    Category{" "}
                                                    <sup className="text-danger fw-bold fs-6">*</sup>
                                                </label>



                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Category"

                                                    style={{ background: "#E5E5E5" }}

                                                />


                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="p-3 border bg-light">
                                            <div className="mb-3">
                                                <label
                                                    className="form-label"
                                                    style={{ fontWeight: "bold" }}
                                                >
                                                    Details
                                                </label>
                                                <textarea
                                                    className="form-control"
                                                    rows="1"
                                                    placeholder="Product Details"
                                                    style={{ background: "#E5E5E5" }}

                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row gx-3 mb-3 gy-3">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="p-3 border bg-light">
                                            <div className="mb-3">
                                                <label
                                                    className="form-label"
                                                    style={{ fontWeight: "bold" }}
                                                >
                                                    Available In Stock{" "}
                                                    <sup className="text-danger fw-bold fs-6">*</sup>
                                                </label>

                                                <div className="d-flex">
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        placeholder="Available in Stock"
                                                        // defaultValue={singleProduct?.storeQuantity}
                                                        style={{ background: "#E5E5E5", borderRadius: '4px 0 0 4px' }}
                                                        // {...register("storeQuantity", { required: false })}
                                                        readOnly
                                                    />
                                                    <InputGroup.Text id="basic-addon2" style={{ background: "#E5E5E5", borderRadius: '0 4px 4px 0' }}>Unit</InputGroup.Text>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="p-3 border bg-light">
                                            <div className="mb-3">
                                                <label
                                                    className="form-label"
                                                    style={{ fontWeight: "bold" }}
                                                >
                                                    Add Quantity{" "}
                                                    <sup className="text-danger fw-bold fs-6">*</sup>
                                                </label>
                                                <div className="d-flex">
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        placeholder="Enter Quantity for Selling"
                                                        style={{ background: "#E5E5E5", borderRadius: '4px 0 0 4px' }}

                                                    />
                                                    <InputGroup.Text id="basic-addon2" style={{ background: "#E5E5E5", borderRadius: '0 4px 4px 0' }}>Unit</InputGroup.Text>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row gx-3 mb-3 gy-3">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="p-3 border bg-light">
                                            <div className="mb-3">
                                                <label
                                                    className="form-label"
                                                    style={{ fontWeight: "bold" }}
                                                >
                                                    Supplier Price{" "}
                                                    <sup className="text-danger fw-bold fs-6">*</sup>
                                                </label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder="Supplier Price"
                                                    style={{ background: "#E5E5E5" }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="p-3 border bg-light">
                                            <div className="mb-3">
                                                <label
                                                    className="form-label"
                                                    style={{ fontWeight: "bold" }}
                                                >
                                                    Sell Price{" "}
                                                    <sup className="text-danger fw-bold fs-6">*</sup>
                                                </label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    placeholder="Enter Product Sell Price"
                                                    style={{ background: "#E5E5E5" }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row gx-3 mb-3 gy-3">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <div className="p-3 border bg-light">
                                            <div className="mb-3">
                                                <span
                                                    className="mb-2 d-inline-block"
                                                    style={{ fontWeight: "bold" }}
                                                >
                                                    Image
                                                </span>
                                                <div className="input-group mb-4">
                                                    <input
                                                        type="file"
                                                        accept="image/*"
                                                        className="form-control"
                                                        style={{ background: "#E5E5E5" }}
                                                        id="inputGroupFile02"

                                                    />
                                                    <label
                                                        className="input-group-text"
                                                        htmlFor="inputGroupFile02"
                                                    >
                                                        <img
                                                            style={{ height: "35px" }}
                                                            src=""
                                                            alt=""
                                                        />{" "}
                                                        <span
                                                            style={{ color: "#251D58", fontWeight: "bold" }}
                                                        >
                                                            Upload document
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-3">
                                        <div className="p-3 border bg-light">
                                            <div className="mb-3">
                                                <Box sx={{ textAlign: "center", my: 4 }}>
                                                    <input
                                                        type="reset"
                                                        className={`${"btn"} ${styles.resetBtn}`}
                                                        style={{ background: "#251D58", color: "#fff" }}
                                                        value="Reset"
                                                    />
                                                    <input
                                                        type="submit"
                                                        className={`${"btn"} ${styles.saveBtn}`}
                                                        style={{ background: "#251D58", color: "#fff" }}
                                                        value="Save"
                                                    />
                                                </Box>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Box>
        </Container>
    );
};

export default InputField;