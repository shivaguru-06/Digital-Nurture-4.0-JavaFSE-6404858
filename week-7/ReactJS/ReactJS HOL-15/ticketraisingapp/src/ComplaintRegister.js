import React, { useState } from 'react';

const ComplaintRegister = () => {
  const [name, setName] = useState('');
  const [complaint, setComplaint] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === '' || complaint.trim() === '') {
      alert("Please fill in all fields.");
      return;
    }

    const referenceNumber = 'REF' + Math.floor(1000 + Math.random() * 9000);
    alert(`Complaint Registered!\nName: ${name}\nRef No: ${referenceNumber}`);

   
    setName('');
    setComplaint('');
  };

  return (
    <div style={styles.formContainer}>
      <h2>🛠️ Complaint Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          style={styles.input}
          onChange={(e) => setName(e.target.value)}
        /><br />
        <textarea
          placeholder="Enter your complaint"
          value={complaint}
          style={styles.textarea}
          onChange={(e) => setComplaint(e.target.value)}
        ></textarea><br />
        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
};

const styles = {
  formContainer: {
    padding: '30px',
    width: '50%',
    margin: 'auto',
    backgroundColor: '#f0f8ff',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    textAlign: 'center'
  },
  input: {
    padding: '10px',
    width: '80%',
    margin: '10px 0',
    fontSize: '16px'
  },
  textarea: {
    padding: '10px',
    width: '80%',
    height: '100px',
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
  }
};

export default ComplaintRegister;
