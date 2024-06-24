import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    firtsName: '',
    lastName: '',
    email: '',
    company: '',
    position: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://webinar-api-tota.onrender.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Registration successful! Check your email for confirmation.');
      } else {
        alert(`Registration failed: ${result.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during registration.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          <input
            type="text"
            name="firstName"
            placeholder='Nombre'
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          <input
            type="text"
            name="lastName"
            placeholder='Apellido'
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          <input
            type="email"
            name="email"
            placeholder='Correo Electrónico'
            value={formData.email}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          <input
            type="text"
            name="company"
            placeholder='Empresa'
            value={formData.company}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          <input
            type="text"
            name="position"
            placeholder='Cargo'
            value={formData.position}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">Registrar</button>
    </form>
  );
};

export default Form;