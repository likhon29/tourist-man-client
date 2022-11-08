import React from 'react';
import image from '../../../Assets/images/logo.jpg'
const About = () => {
    return (
        <div>
           <div className="container d-flex">
                <div className='relative w-50'>
                    <img src={image} alt="" className="w-100 h-full rounded-lg shadow-2xl" />
                    <img src={image}  alt="" className="absolute right-5 top-3 w-50 border-8 rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <p className="text-2xl font-bold text-orange-600">About Us</p>
                    <h1 className="my-5 text-5xl font-bold">
                        We are qualified <br />
                        & of experience <br />
                        in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-primary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;