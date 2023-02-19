import React from 'react';
import Clock from '../SearchSidebar/Clock/Clock';
import TimeCountdownv2 from '../SearchSidebar/Clock/TimeCountdownv2';
import PriceRange from '../SearchSidebar/PriceRange/PriceRange';
import Schedules from '../SearchSidebar/PriceRange/Schedule/Schedules/Schedules';
import SortAndFilter from '../SearchSidebar/SortAndFilter/SortAndFilter';

const SearchSidebar = ({ data }) => {
    return (
        <div>
            {/* <Clock /> */ }
            {
                data?.groupedItineraryResponse && <TimeCountdownv2 />
            }
            <PriceRange />
            <Schedules />
            <SortAndFilter />
        </div>
    );
};

export default SearchSidebar;