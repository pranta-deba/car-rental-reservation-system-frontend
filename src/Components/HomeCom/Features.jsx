import React from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';

const Features = () => {
    return (
        <div className='container mx-auto'>
            <SectionHeader titleSplit={true} title='PXrent Features'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </SectionHeader>
            <div>
                <div></div>
                <div>
                    <img className='w-[30%]' src="./png5.webp" alt="Image....." />
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Features;