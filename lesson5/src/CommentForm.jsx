import React, { useState } from 'react';

const CommentForm = () => {
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!comment.trim()) {
      setError('Please enter a comment.');
      return;
    }

    alert('Comment submitted: ' + comment);
    setError('');
    setComment('');
  };

  return (
    <section aria-labelledby="comment-form" aria-live="assertive">
      <h2 id="comment-form">Post Comment:</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="comment">Your Comment:</label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          aria-describedby="comment-error"
          aria-required="true"
          rows="4"
          placeholder="Write Your Comment Here"
        />

        {error && (
          <p id="comment-error" style={{ color: 'red' }} aria-live="assertive">
            {error}
          </p>
        )}

        <button type="submit">Submit:</button>
      </form>
    </section>
  );
};

export default CommentForm;
