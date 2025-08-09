import React, { useState } from 'react';

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (form.name.length < 5) {
      newErrors.name = 'Name must be at least 5 characters';
    }

    if (!form.email.includes('@') || !form.email.includes('.')) {
      newErrors.email = 'Email must contain "@" and "."';
    }

    if (form.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert(`✅ Registered Successfully!\nName: ${form.name}`);
      setForm({ name: '', email: '', password: '' });
      setErrors({});
    }
  };

  return (
    <div style={styles.formContainer}>
      <h2>📩 Mail Register Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          style={styles.input}
          type="text"
          name="name"
          placeholder="Enter your name"
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && <p style={styles.error}>{errors.name}</p>}

        <input
          style={styles.input}
          type="email"
          name="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <p style={styles.error}>{errors.email}</p>}

        <input
          style={styles.input}
          type="password"
          name="password"
          placeholder="Enter password"
          value={form.password}
          onChange={handleChange}
        />
        {errors.password && <p style={styles.error}>{errors.password}</p>}

        <button style={styles.button} type="submit">Register</button>
      </form>
    </div>
  );
};

const styles = {
  formContainer: {
    padding: '30px',
    width: '400px',
    margin: '40px auto',
    backgroundColor: '#f0f8ff',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    textAlign: 'center'
  },
  input: {
    padding: '10px',
    width: '90%',
    margin: '10px 0',
    fontSize: '16px'
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  error: {
    color: 'red',
    margin: '0 0 10px 0',
    fontSize: '14px'
  }
};

export default Register;
