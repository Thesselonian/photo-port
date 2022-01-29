import React from 'react';

function ContactForm() {
    return ( 
        <section>
            <h1>Contact me</h1>
            <form id="contact-form">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label htmlFor="message">message:</label>
                    <textarea name="message" rows="5" />
                </div>
            </form>
        </section>
    )
}

export default ContactForm;