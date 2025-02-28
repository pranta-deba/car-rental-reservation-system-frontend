import React from 'react';
import Banner from '../../Components/HomeCom/Banner';
import SectionHeader from '../../Components/SectionHeader/SectionHeader';
import Features from '../../Components/HomeCom/Features';

const Home = () => {
    return (
        <div className='m-0 p-0'>
            <Banner />
            <SectionHeader titleSplit={true} title='PXrent Features'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </SectionHeader>
            <Features />
        </div>
    );
};

export default Home;