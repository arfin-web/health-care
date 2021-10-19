import React from 'react';
import Services from '../Services/Services';
import Banner from './Banner/Banner';
import Offer from './Offer/Offer';
import Servicebanner from './Servicebanner/Servicebanner';
import Homework from './Howwork/Howwork';
import Doctors from '../Doctors/Doctors';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Zoom>
                <Servicebanner></Servicebanner>
            </Zoom>
            <Services></Services>
            <Offer></Offer>
            <Bounce>
                <Homework></Homework>
            </Bounce>
            <Zoom>
                <Doctors></Doctors>
            </Zoom>
        </>
    );
};

export default Home;