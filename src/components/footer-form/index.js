import React, { useState } from "react";
import axios from 'axios';

import FooterFormStyles from './footer-form-styles.module.scss';

const FooterForm = () => {
  const sesAddress = 'james.coates@me.com'; 
  const sendTo = 'James Coates <james.coates@me.com>'; 
  const subject = 'Email from jamescoates.me'; 
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
      .then(response => {
        clearForm()
        console.log(response);
      })
      .catch(err => console.log(err));
  }


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name" className="input-container">
        <input className="input-text" name="name" id="name" value={name} required onChange={(e) => setName(e.target.value)} />
        <div className={`input-label ${name ? 'input-filled' : ''}`}>Name</div>
      </label>
      <label htmlFor="replyTo" className="input-container">
        <input className="input-text" name="reply_to" id="replyTo" value={replyTo} required onChange={(e) => setReplyTo(e.target.value)} />
        <div className={`input-label ${replyTo ? 'input-filled' : ''}`}>Email</div>
      </label>
      <label htmlFor="message" className="input-container">
        <div className="message-container">
          <textarea className="input-text" name="message" id="email" value={message} required onChange={(e) => setMessage(e.target.value)} />
          <div className={`input-label ${message ? 'input-filled' : ''}`}>Your message...</div>
        </div>
      </label>
      <button className={`btn btn-primary-light ${FooterFormStyles.btn}`} type="submit">Submit</button>
    </form>
  );
}

export default FooterForm;
