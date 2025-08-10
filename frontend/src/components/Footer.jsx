import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
    return (
        <div className='my-10 mt-40 text-sm'>
            <div className='flex flex-col gap-14 sm:flex-row sm:justify-between'>
                {/* Logo và mô tả */}
                <div className='sm:w-1/3'>
                    <img src={assets.logo} className='w-32 mb-5' alt='' />
                    <p className='text-gray-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>

                {/* Company Links */}
                <div>
                    <p className='mb-5 text-xl font-medium'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <p className='mb-5 text-xl font-medium'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+84 - 971 - 014 - 405</li>
                        <li>contactforever@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div>
                <hr className='mt-10' />
                <p className='py-5 text-sm text-center'>Copyright 2024 © GreatStack.dev - All Right Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
