import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';
const Contact = () => {
    return (
        <div>
            <div className='pt-10 text-2xl text-center border-top'>
                <Title text1={'CONTACT'} text2={'US'} />
            </div>
            <div className='flex flex-col gap-10 justify-center my-10 mb-28 md:flex-row'>
                <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt='' />
                <div className='flex flex-col gap-6 justify-center items-start'>
                    <p className='text-xl font-semibold text-gray-600'>Our Store</p>
                    <p className='text-gray-500'>
                        54709 Willms Station <br />
                        Suite 350, Washington, USA
                    </p>
                    <p className='text-gray-500'>
                        Tel: (84) 971‑014-407 <br />
                        Email: hungdev04@gmail.com
                    </p>
                    <p className='text-xl font-semibold text-gray-600'>CAREERS AT FOREVER</p>
                    <p className='text-gray-500'>Learn more about our teams and job openings.</p>
                    <button className='px-8 py-4 text-sm border border-black transition-all duration-500 hover:bg-black hover:text-white'>Explore Jobs</button>
                </div>
            </div>
            <NewsletterBox />
        </div>
    );
};

export default Contact;
