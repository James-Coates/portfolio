import React, { Component } from 'react';
import ScrollReveal from 'scrollreveal';

export default class index extends Component {

  componentDidMount() {
    ScrollReveal().reveal('.test');
  }

  render() {
    return (
      <div className="test" style={{ width: '100px', height: '100px', backgroundColor: 'red' }} />
    );
  }
}
