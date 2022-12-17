import React from 'react';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import UTurnRightIcon from '@mui/icons-material/UTurnRight';
import PaidIcon from '@mui/icons-material/Paid';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';


const Services = () => {
    return (
        <div className='flex mt-10 align-center'>
            <div className='flex w-72 border  p-10'>
                <DirectionsCarIcon style={{ width: '80px', height: '80px', color: 'red' }} />
                <div className='mt-5'>
                    <p className='text-xl font-bold'>Free Delivery</p>
                    <p>from $50</p>
                </div>
            </div>
            <div className='flex w-72 border  p-10'>
                <PeopleAltIcon style={{ width: '80px', height: '80px', color: 'red' }} />
                <div className='mt-5'>
                    <p className='text-xl font-bold'>99% Customer</p>
                    <p>feedbacks</p>
                </div>
            </div>
            <div className='flex w-72 border  p-10'>
                <UTurnRightIcon style={{ width: '80px', height: '80px', color: 'red' }} />
                <div className='mt-5 '>
                    <p className='text-xl font-bold'>10 Days</p>
                    <p>for free return</p>
                </div>
            </div>
            <div className='flex w-72 border  p-10'>
                <PaidIcon style={{ width: '80px', height: '80px', color: 'red' }} />
                <div className='mt-5'>
                    <p className='text-xl font-bold'>Payment</p>
                    <p>secure system</p>
                </div>
            </div>
            <div className='flex w-72 border p-10'>
                <HeadsetMicIcon style={{ width: '80px', height: '80px', color: 'red' }} />
                <div className='mt-5 '>
                    <p className='text-xl font-bold'>24/7</p>
                    <p>online supports</p>
                </div>
            </div>
        </div>
    );
};

export default Services;