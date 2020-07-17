import React from 'react';
import '../Contact/contact.css';

const Contact = () => {
    return (
        <div>
            <section id="contact">
                <div class="container">
                    <h1>Contact Me</h1>

                    <p>If you ever wanna reach out, just fill this out</p>
                    <form class="cf" name="myForm" action="https://formsubmit.co/kelvin.ramos125@gmail.com" method="POST">
                        <label for="name">Name</label>
                        <input type="text" id="name" />

                        <label for="email">Email</label>
                        <input type="email" id="email" />

                        <label for="message">Message</label>
                        <textarea id="message" placeholder="What's up?"></textarea>

                        <button type="submit" id="submit" class="button">Submit</button>
                    </form>

                </div>
            </section>
        </div>
    )
}

export default Contact;
