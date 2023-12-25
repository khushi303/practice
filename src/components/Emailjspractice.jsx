import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Btnpage from './Btnpage';
import BgColor from './BgColor';
import img3 from '../assets/images/png/img3.png'

const Emailjspractice = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.target.reset();

        emailjs.sendForm('service_31h180h', 'template_73gwagh', form.current, '1cJ95ExJ1P3ygeRiD')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div>
            <div className='container'>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" className='w-100' />
                    <label>Email</label>
                    <input type="email" name="user_email" className='w-100' />
                    <label>Contact No.</label>
                    <input type="text" name="user_phone" className='w-100' />
                    <label>Message</label>
                    <textarea name="message" className='w-100' />
                    <input type="submit" value="Send" className='bg-danger text-white py-2 px-3 rounded-1 border-0' />
                </form>

                <div className='mt-4 d-flex align-items-center justify-content-center'>
                    <Btnpage name="Services" />
                </div>
                <BgColor imgpath={img3} />
            </div>
        </div>
    )
}

export default Emailjspractice;