import React from 'react';
import Hero from '../components/Hero';
import LatestCollection from '../components/LatestCollection';
import { useContext } from 'react';
import BestSeller from '../components/BestSeller';
import Ourpolicy from '../components/OurPolicy';
import NewsletterBox from '../components/NewsletterBox';

const Home = () => {
    return (
        <div>
            <Hero />
            <LatestCollection />
            <BestSeller />
            <Ourpolicy />
            <NewsletterBox />
        </div>
    );
};

export default Home;
