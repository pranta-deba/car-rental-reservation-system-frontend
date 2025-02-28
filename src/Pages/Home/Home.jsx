import React from 'react';
import Banner from '../../Components/HomeCom/Banner';
import SectionHeader from '../../Components/SectionHeader/SectionHeader';

const Home = () => {
    return (
        <div className='m-0 p-0'>
            <Banner />
            <SectionHeader titleSplit={true} title='PXrent Features'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </SectionHeader>
        </div>
    );
};

export default Home;