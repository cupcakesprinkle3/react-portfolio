import React from 'react';
import "./contact.scss"
import { useState } from 'react';


function Contact() {

    const [message, setMessage] = useState(false)

    const handleSubmit = (e)=> {
        e.preventDefault();
        setMessage(true);
    }


    return (
        <div className="contact" id="contact">
            <div className="left">
           < img src="https://user-images.githubusercontent.com/79061264/128789704-2568dddf-3635-4b3f-9807-bb9432f8a0d7.jpg" alt="Message me - Photo by Alok Sharma from Pexels" />
           </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit} >
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Name"/>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I will be in touch soon :)</span>}
                </form>
            </div>

        </div>
    );
}

export default Contact;