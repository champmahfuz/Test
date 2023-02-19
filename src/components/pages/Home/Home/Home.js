import React from 'react';
import Navbar from '../../../UserFile/UserLogin/Navbar/Navbar';
import Navbarv2 from '../../../UserFile/UserLogin/Navbar/Navbarv2';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banners from '../Banner/Banners/Banners';
import LightningDeals from '../LightningDeals/LightningDeals/LightningDeals';
import Packages from '../Packages/Packages';

const Home = () => {
    return (
        <div>
            {/* <Navigation /> */}
            {/* <Navbar /> */}
            <Navbarv2 />
            <Banners />
            {/* <SearchFlight /> */}
            <LightningDeals />
            <Packages />
            <Footer />
        </div>
    );
};

export default Home;