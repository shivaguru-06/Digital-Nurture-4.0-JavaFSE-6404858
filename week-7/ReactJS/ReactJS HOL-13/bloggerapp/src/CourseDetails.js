import React from 'react';

const courses = [
  { name: "Full Stack Web Dev", instructor: "Shivaguru", fee: "₹9999" },
  { name: "UI/UX Design", instructor: "Sam", fee: "₹5999" }
];

const CourseDetails = () => {
  return (
    <div style={styles.card}>
      <h2>🎓 Course List</h2>
      {courses.map((course, index) => (
        <div key={index} style={styles.item}>
          <p><strong>Course Name:</strong> {course.name}</p>
          <p><strong>Instructor:</strong> {course.instructor}</p>
          <p><strong>Fee:</strong> {course.fee}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

const styles = {
  card: {
    padding: '20px',
    background: '#f9f9f9',
    borderRadius: '8px',
    width: '60%',
    margin: '20px auto'
  },
  heading: {
    fontSize: '26px',
    marginBottom: '20px'
  },
  item: {
    fontSize: '18px',
    marginBottom: '10px',
    textAlign: 'left'
  }
};

export default CourseDetails;
