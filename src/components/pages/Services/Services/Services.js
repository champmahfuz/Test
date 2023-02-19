import React from 'react';
import Navbarv2 from '../../../UserFile/UserLogin/Navbar/Navbarv2';
import Packages from '../../Home/Packages/Packages';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const Services = () => {
    return (
        <div>
            {/* <Navigation /> */}
            <Navbarv2 />
            <Packages />
            <Footer />
        </div>
    );
};

export default Services;