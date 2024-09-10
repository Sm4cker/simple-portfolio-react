import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import './Contact.css'

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic form validation
    if (!name || !email || !message) {
      setError('All fields are required.');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email.');
    } else {
      setError('');
      alert('Message sent successfully!');
      // Clear form after submission
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div>
    <Navbar/>
      <h1 className='title-c'>Contact Me</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          className='inp'
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(x) => setName(x.target.value)}
        />
        <input
          className='inp'
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(x) => setEmail(x.target.value)}
        />
        <textarea
          className='inp'
          placeholder="Your Message"
          value={message}
          onChange={(x) => setMessage(x.target.value)}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button className='btn-c' type="submit">Send Message</button>
      </form>
    </div>
  );
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '400px',
  margin: '0 auto',
};

export default Contact;
