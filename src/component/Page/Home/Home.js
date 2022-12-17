import React from 'react';
import RecentlyAdded from '../RecentlyAdded/RecentlyAdded';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Services></Services>
            <RecentlyAdded></RecentlyAdded>
        </div>
    );
};

export default Home;