import React from "react";
import "../CSS/Contact.css"

const Contact = () => {

    return (
        <div className="contact" >
                <h2 className="titlecontact">Get in touch!</h2>
                <p className="desccontact">Have any questions? I'd love nothing more than to answer them, feel free to drop me an email using the form below!</p>
                <form class="contactform" action="https://formsubmit.co/f9c5245a9e75583fb8ccc82f0885ca47" method="POST">

                    <label for="name">NAME</label>
                    <input id="name" type="text" name="name" placeholder="Jack Sparrow" required></input>
                    
                    <label for="email">EMAIL ADDRESS</label>
                    <input id="email" type="email" name="email" placeholder="whyistherumgone@gmail.com" required></input>
                    
                    <label for="subject">SUBJECT</label>
                    <input id="subject" name="subject" type="text" placeholder="The Black Pearl"></input>

                    <label for="message">MESSAGE</label>
                    <textarea id="message" type="text" name="message" cols="40" rows="5" placeholder="Write your message here..." required></textarea>
                    
                    <button className="submitbutton" type="submit">Send Message</button>
                </form>

        </div>
    )
}

export default Contact;