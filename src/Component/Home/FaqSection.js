import React from 'react';
import img from '../../assets/images/Fosterpet.png'

const FaqSection = () => {
    return (
        <div>
            <div>
            <h1 className='font-extrabold text-center text-5xl text-pink-400 uppercase'>Frequently asked Question</h1>
            </div>
            
            <div class="grid grid-cols-2">
                <div class="mt-5 mb-5 ms-4 pt-16">
                <div class="collapse collapse-arrow bg-pink-200">
                    <input type="radio" name="my-accordion-2" checked="checked" /> 
                    <div class="collapse-title text-xl font-medium">
                        Click to open this one and close others
                    </div>
                    <div class="collapse-content"> 
                        <p>hello</p>
                    </div>
                    </div>
                    <div class="collapse collapse-arrow bg-pink-100">
                    <input type="radio" name="my-accordion-2" /> 
                    <div class="collapse-title text-xl font-medium">
                        Click to open this one and close others
                    </div>
                    <div class="collapse-content"> 
                        <p>hello</p>
                    </div>
                    </div>
                    <div class="collapse collapse-arrow bg-pink-50">
                    <input type="radio" name="my-accordion-2" /> 
                    <div class="collapse-title text-xl font-medium">
                        Click to open this one and close others
                    </div>
                    <div class="collapse-content"> 
                        <p>hello</p>
                    </div>
                    </div>
                </div>
                <div >
                    <img className="w-full" src={img} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default FaqSection;