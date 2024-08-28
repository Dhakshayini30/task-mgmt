import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Form, Navbar, Nav, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      taskName: ''
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return null;
  }

  addTask = () => {
    const { tasks, taskName } = this.state;
    if (taskName.trim()) {
      this.setState({
        tasks: [...tasks, { id: tasks.length + 1, name: taskName }],
        taskName: ''
      });
    }
  };

  handleInputChange = (e) => {
    this.setState({ taskName: e.target.value });
  };

  handleMouseEnter = () => {
    console.log('Mouse entered the task area.');
  };

  handleMouseLeave = () => {
    console.log('Mouse left the task area.');
  };

  componentWillUnmount() {
    console.log('Component will unmount.');
  }

  static getDerivedStateFromError(error) {
    console.log('Error occurred:', error);
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log('Component did catch:', error, info);
  }

  render() {
    const { tasks, taskName } = this.state;

    return (
      <Router>
        <Navbar bg="dark" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/" bg='light'>
              TaskNexa
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/feedback">Feedback</Nav.Link>
                <NavLink className="nav-link" to="/tasks">Tasks</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/tasks" element={
            <Container>
              <Row>
                <Col>
                  <Form.Control
                    type="text"
                    value={taskName}
                    placeholder="Add a task"
                    onChange={this.handleInputChange}
                  />
                  <Button variant="primary" onClick={this.addTask} className="mt-2">Add Task</Button>
                </Col>
              </Row>
              <Row>
                {tasks.map(task => (
                  <Col md={4} key={task.id} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                    <Card className="mt-3">
                      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIqkc_ITjs4p6MYGctdjHJbS3np5tl5s26tQ&s" className="rounded-circle" />
                      <Card.Body>
                        <Card.Title>{task.name}</Card.Title>
                        <Button variant="danger">Delete</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Container>
          } />
        </Routes>

        <CardDeckComponent />
      </Router>
    );
  }
}

const Home = () => (
  <Container className="mt-3">
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://miro.medium.com/v2/resize:fit:1000/1*8G1vA7egoxrL4Bb7RAgnPQ.jpeg"
          alt="First slide"
        />
        <center>
        <div className="carousel-caption-below">
          <h3>Welcome to TaskNexa</h3>
          <p>Manage your tasks efficiently.</p>
        </div>
        </center>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://thedigitalprojectmanager.com/wp-content/uploads/2023/01/Task-Management-VS-Project-Management-featured-image.png"
          alt="Second slide"
        />
        <center>
        <div className="carousel-caption-below">
          <h3>Stay Organized</h3>
          <p>Keep track of all your tasks.</p>
        </div>
        </center>
      </Carousel.Item>
    </Carousel>
  </Container>
);

const Feedback = () => (
  <Container className="feedback-form mt-5">
    <h2>Feedback Form</h2>
    <Form>
      <Form.Group controlId="formName">
        <Form.Label className="form-label">Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
      </Form.Group>

      <Form.Group controlId="formFeedback" className="mt-3">
        <Form.Label className="form-label">Feedback</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Your feedback" />
      </Form.Group>

      <Button variant="primary" type="submit" className="mt-3">Submit</Button>
    </Form>
  </Container>
);


const CardDeckComponent = () => (
  <Container className="mt-3">
    <center><h1>List Of Tasks</h1></center>
    <Row>
      <Col md={4}>
        <Card>
          <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRH3USUjA13FEw6gL2K_CKo6JJtTm1hu53kQ&s" />
          <Card.Body>
            <Card.Title>Task 1</Card.Title>
            <Card.Text>Module Development</Card.Text>
            <Card.Text>Assignee: George</Card.Text>

          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Img variant="top" src="https://www.shutterstock.com/image-vector/communication-flat-icon-department-leaders-260nw-1693848094.jpg" />
          <Card.Body>
            <Card.Title>Task 2</Card.Title>
            <Card.Text>Designing Prototype</Card.Text>
            <Card.Text>Assignee: Bob</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT-IS-CIljzcaaudSqS2y7Gab7u89yFTEWyfi9VIhQX82FjMoYj0dzyYmpIYZLMFXWKXA&usqp=CAU" />
          <Card.Body>
            <Card.Title>Task 3</Card.Title>
            <Card.Text>Feedback Generation</Card.Text>
            <Card.Text>Assignee: Nirov</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
  
);

export default App;
