import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your feedback, ${name}!`);
    setFeedback('');
    setName('');
  };

  return (
    <Container className="feedback-form mt-5">
      <h2>Feedback Form</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label className="form-label">Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formFeedback" className="mt-3">
          <Form.Label className="form-label">Feedback</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Your feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Feedback;
