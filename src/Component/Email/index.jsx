// NewsletterForm.jsx

import { useState } from 'react';
import './Email.css';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan sesuatu dengan email yang disubmit, misalnya kirim ke backend atau lakukan validasi
    console.log('Email submitted:', email);
    // Reset field email setelah submit
    setEmail('');
  };

  return (
    <div className="outer-boxemail">
    <div className="inner-box1email">
      <p className='pemail'>Join our newsletter to get our latest recommendation!</p>
    </div>
    <div className="inner-box2email">
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="✉ Enter your email" value={email}
          onChange={(e) => setEmail(e.target.value)}
          required/>
        <button type="submit" className="submit-btnemail">Submit</button>
      </form>
    </div>
  </div>
  );
};

export default NewsletterForm;
