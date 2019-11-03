import React, { useState } from "react";

import FooterFormStyles from './footer-form-styles.module.scss';

const FooterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <form>
      <label htmlFor="name" className="input-container">
        <input className="input-text" id="name" onChange={(e) => setName(e.target.value)}></input>
        <div className={`input-label ${name ? 'input-filled' : ''}`}>Name</div>
      </label>
      <label htmlFor="email" className="input-container">
        <input className="input-text" id="email" onChange={(e) => setEmail(e.target.value)}></input>
        <div className={`input-label ${email ? 'input-filled' : ''}`}>Email</div>
      </label>
      <label htmlFor="message" className="input-container">
        <div className="message-container">
          <textarea className="input-text" id="email" onChange={(e) => setMessage(e.target.value)}></textarea>
          <div className={`input-label ${message ? 'input-filled' : ''}`}>Your message...</div>
        </div>
      </label>
      <button className={`btn btn-primary-light ${FooterFormStyles.btn}`}>Submit</button>
    </form>
  );
}

export default FooterForm;
