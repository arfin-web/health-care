import React from 'react';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
import Offer from './Offer/Offer';
import Servicebanner from './Servicebanner/Servicebanner';
import Homework from './Howwork/Howwork';
import Doctors from '../Doctors/Doctors';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Servicebanner></Servicebanner>
            <Services></Services>
            <Offer></Offer>
            <Homework></Homework>
            <Doctors></Doctors>
        </>
    );
};

export default Home;