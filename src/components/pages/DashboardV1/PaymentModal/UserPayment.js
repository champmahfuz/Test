import React from 'react';

const UserPayment = () => {
    return (
        <>
            <button
                type="button"
                className="btn btn-light"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
            >
                Payment
            </button>

            <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered  modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="row">
                                <h5 className="modal-title mb-2 text-center" id="exampleModalLabel">
                                    Your Deal DOMFLY0223 Will Change!
                                </h5>

                                <p style={{ marginBottom: "-5px" }} className='text-center'>
                                    Your previously selected deal DOMFLY0223 is not available for
                                    bkash{" "}
                                </p>
                            </div>
                            <button
                                type="button"
                                className="btn-close mr-5 mb-5"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <div className="card" style={{ width: "20rem" }}>
                                <div className="card-body">
                                    <h6 className="card-title">FLYDOMFLY0223</h6>
                                    <p className="card-text text-start">
                                        8% discount on bkash nogad rocket tap and upay payment
                                    </p>
                                    <p className="card-link text-start text-primary ">
                                        Terms and Condition
                                    </p>
                                </div>
                            </div>
                            <div
                                style={{ justifyContent: "space-between" }}
                                className="d-flex mt-5"
                            >
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Have a coupon?"
                                    aria-label="Example text with button addon"
                                    aria-describedby="button-addon1"
                                />
                                <button
                                    className="ms-4 btn btn-outline-secondary mr-2"
                                    type="button"
                                    id="button-addon1"
                                >
                                    Apply
                                </button>
                            </div>
                        </div>
                        <div
                            style={{ justifyContent: "space-between" }}
                            className="d-flex p-2 modal-footer "
                        >
                            <p className="mt-4">Go back to payment page</p>

                            <div className="d-grid">
                                <p>You pay BDT 4090</p>
                                <button type="button" className="btn btn-primary">
                                    Done
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserPayment;