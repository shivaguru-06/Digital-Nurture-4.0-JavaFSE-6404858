import React from 'react';

const books = [
  { title: "React for Beginners", author: "Shivaguru", price: "₹499" },
  { title: "Mastering JavaScript", author: "Ravi", price: "₹699" },
  { title: "Java for Beginners", author: "Kumar", price: "₹879" }
];

const BookDetails = () => {
  return (
    <div style={styles.card}>
      <h2>📚 Book List</h2>
      {books.map((book, index) => (
        <div key={index} style={styles.item}>
          <p><strong>Title:</strong> {book.title}</p>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Price:</strong> {book.price}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

const styles = {
  card: {
    padding: '20px',
    background: '#e8faff',
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

export default BookDetails;
