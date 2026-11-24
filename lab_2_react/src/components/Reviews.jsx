import React, { useState, useEffect } from 'react';

export default function Reviews() {
  const [comments, setComments] = useState([]);
  const myVariant = 4;

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${myVariant}/comments`)
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section>
      <h2>Відгуки</h2>
      {comments.map((comment) => (
        <div key={comment.id} style={{ border: '1px solid #ddd', margin: '10px 0', padding: '10px' }}>
          <h4>{comment.name}</h4>
          <p><strong>Email:</strong> {comment.email}</p>
          <p>{comment.body}</p>
        </div>
      ))}
    </section>
  );
}
