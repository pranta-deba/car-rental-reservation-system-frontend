import React from 'react';
import Banner from '../../Components/HomeCom/Banner';
import SectionHeader from '../../Components/SectionHeader/SectionHeader';
import Features from '../../Components/HomeCom/Features';
import Cars from '../../Components/HomeCom/Cars';

const Home = () => {
    return (
        <div className='m-0 p-0'>
            <Banner />
            <SectionHeader titleSplit={true} title='PXrent Features'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </SectionHeader>
            <Features />
            <SectionHeader titleSplit={true} title='All Car'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </SectionHeader>
            <Cars />
        </div>
    );
};

export default Home;