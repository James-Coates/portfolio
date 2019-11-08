import React, { useState } from "react";
import axios from 'axios';

const ContactForm = () => {

  const [sesAddress] = useState('james.coates@me.com'); 
  const [sendTo] = useState('James Coates <james.coates@me.com>'); 
  const [subject] = useState('Email from jamescoates.me'); 
  const [name, setName] = useState(''); 
  const [replyTo, setReplyTo] = useState(''); 
  const [message, setMessage] = useState(''); 
  const [messageSent, setMessageSent] = useState(false); 

  const clearForm = () => {
    setName('');
    setReplyTo('');
    setMessage('');
    setMessageSent(true);
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(name);
    console.log(message);
    // Form data
    const data = {
      ses_address: sesAddress,
      send_to: sendTo,
      subject: subject,
      name: name, 
      reply_to: replyTo,
      message: message
    };
    axios.post('https://mjxz0fdn8i.execute-api.us-east-1.amazonaws.com/dev/portfolio-mailer', data)
      .then(response => clearForm())
      .catch(err => console.log(err));
  }

  return(
    <form className="contact-form" onSubmit={handleSubmit}>
      {/* <input type="hidden" name="ses_address" value="james.coates@me.com" />
      <input type="hidden" name="send_to" value="James Coates <james.coates@me.com>" />
      <input type="hidden" name="subject" value="Email from Client" /> */}
      <input type="text" name="name" onChange={e => setName(e.target.value)} placeholder="Name" value={name} required />
      <input type="email" name="reply_to" onChange={e => setReplyTo(e.target.value)} placeholder="Email" value={replyTo} required />
      <textarea name="message" placeholder="Your message" onChange={e => setMessage(e.target.value)} value={message} required></textarea>
      <button className="btn" type="submit">Send Message</button>
      {messageSent ? <div className="alert success">Success! Message sent</div> : ''}
    </form>
  )};

export default ContactForm;