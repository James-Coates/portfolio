import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import ContactForm from '../contact-form';

import contactStyles from './contact-styles.module.scss';

const Contact = ({contactActive, setContactActive}) => {
  return (
    <div
      className={`${contactStyles.wrapper} ${contactActive ? contactStyles.active : ''}`}
      id="contact"
    >
      <button 
        className={contactStyles.nav}
        onClick={() => {setContactActive(!contactActive)}}
        type="button"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <div className={contactStyles.greet}>
        <div className={contactStyles.content}>
          <h2 className={contactStyles.heading}>
            Contact
          </h2>
          <p>
            Any questions, work inquiries or anything else really, please don’t 
            hesitate to get in touch using this form.
          </p>
          <p>
            I’m currently open to new projects, freelance work and full time positions.
          </p>
        </div>
      </div>
      <div className={contactStyles.form}>
        <ContactForm />
      </div>

    </div>
  )
}

Contact.propTypes = {

}

export default Contact
