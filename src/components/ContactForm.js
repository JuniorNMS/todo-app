// src/components/ContactForm.js
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    comments: ''
  });

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    alert('Form submitted successfully!');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      comments: ''
    });
  };

  return (
    <div className="contact-container">
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            value={formData.firstName}
            onChange={e => setFormData({ ...formData, firstName: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            value={formData.lastName}
            onChange={e => setFormData({ ...formData, lastName: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Comments:</label>
          <textarea
            value={formData.comments}
            onChange={e => setFormData({ ...formData, comments: e.target.value })}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;