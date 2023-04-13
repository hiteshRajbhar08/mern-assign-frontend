import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { useState } from 'react';
import FormContainer from '../components/FormContainer';
import { toast } from 'react-toastify';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    if (email.trim() === '') return toast.error('Email is required');
    if (password.trim() === '') return toast.error('Password is required');

    // dispatch(loginUser(email, password));
  };

  //   if (loading) {
  //     return <Loader />;
  //   }

  return (
    <FormContainer>
      <h1 className="text-center">Sign In</h1>
      <div>
        {/* {error && <Message variant="danger">{error}</Message>} */}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <div className="d-grid mt-3">
            <Button type="submit" variant="primary">
              Sign In
            </Button>
          </div>
        </Form>
        <Row className="py-3">
          <Col>
            New to an Account?
            <Link to="/register">Register</Link>
          </Col>
        </Row>
      </div>
    </FormContainer>
  );
};

export default LoginPage;
