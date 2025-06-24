import React, { useState } from 'react';

const Login = () => {
    const [currentState, setCurrentSatte] = useState('Sign Up');
    const onSubmitHandler = async (event) => {
        event.preventDeafult();
    };
    return (
        <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
            <div className='inline-flex gap-2 items-center mt-10 mb-2'>
                <p className='text-3xl prata-regular'>{currentState}</p>
                <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
            </div>
            {currentState === 'Login' ? '' : <input type='text' className='px-3 py-2 w-full border border-gray-800' placeholder='Name' required />}
            <input type='email' className='px-3 py-2 w-full border border-gray-800' placeholder='Email' required />
            <input type='password' className='px-3 py-2 w-full border border-gray-800' placeholder='Password' required />
            <div className='flex justify-between w-full text-sm mt-[-8px]'>
                <p className='cursor-pointer'>Forgot your password?</p>
                {currentState === 'Login' ? (
                    <p onClick={() => setCurrentSatte('Sign Up')} className='cursor-pointer'>
                        Create account
                    </p>
                ) : (
                    <p onClick={() => setCurrentSatte('Login')} className='cursor-pointer'>
                        Login Here
                    </p>
                )}
            </div>
            <button className='px-8 py-2 mt-4 font-light text-white bg-black'>{currentState === 'Login' ? 'Sign In' : 'Sign UP'}</button>
        </form>
    );
};

export default Login;
