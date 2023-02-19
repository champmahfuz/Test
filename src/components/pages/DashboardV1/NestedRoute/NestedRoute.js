import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AddNewInvoice from '../../DashboardOption/ManageSellOption/ManagePosOption/AddNewInvoice/AddNewInvoice';
import NotFound from '../../NotFound/NotFound';
import AddNewInvoiceV1 from '../AddNewInvoiceV1';
import DashboardHomeV1 from '../DashboardHomeV1/DashboardHomeV1';
import DashboardV1 from '../DashboardV1';

const NestedRoute = () => {
    return (
        <>
            <Routes>
                <Route path="/userDashboardHomeV1/*" element={<DashboardHomeV1 />} />
                {/* <Route path='/userDashboardHomeV1' element={<DashboardV1 />}></Route> */}
                <Route path="invoice" element={<AddNewInvoiceV1 />}></Route>
                {/* <Route render={() => <Navigate to="/" />} /> */}
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </>
    );
};

export default NestedRoute;