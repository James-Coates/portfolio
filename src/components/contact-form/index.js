/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import contactFormStyles from './contact-form-styles.module.scss';

const Contact = props => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(message);
    // Form data
    const data = {
      ses_address: sesAddress,
      send_to: sendTo,
      subject,
      name,
      reply_to: replyTo,
      message,
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
      <div className={contactFormStyles.input}>
        <input className="input-text" name="name" id="name" value={name} required onChange={(e) => setName(e.target.value)} />
        <label className={name ? contactFormStyles.filled : ''} htmlFor="name">Name</label>
      </div>
      <div className={contactFormStyles.input}>
        <input className="input-text" name="reply_to" id="replyTo" value={replyTo} required onChange={(e) => setReplyTo(e.target.value)} />
        <label className={replyTo ? contactFormStyles.filled : ''} htmlFor="replyTo">Email</label>
      </div>
      <div className={contactFormStyles.input}>
        <textarea className="input-text" name="message" id="message" value={message} required onChange={(e) => setMessage(e.target.value)} />
        <label className={message ? contactFormStyles.filled : ''} htmlFor="message">Your message...</label>
      </div>
      <button className="btn" type="submit">Submit</button>
    </form>
  )
}

Contact.propTypes = {

}

export default Contact;
