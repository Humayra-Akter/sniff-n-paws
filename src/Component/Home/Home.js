import React from 'react';
import Banner from './Banner';
import Services from './Services';
import FaqSection from './FaqSection';
import Donation from './Donation';

const Home = () => {
    return (
        <div className='pb-40'>
            <Banner></Banner>
            <Services></Services>
            <Donation></Donation>
            <FaqSection></FaqSection>
        </div>
    );
};

export default Home;