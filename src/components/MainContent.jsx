import React from 'react';
import { Card, Row, Col, ListGroup } from 'react-bootstrap';

function MainContent() {
    return (
        <div className="container-fluid">
            <h1 className="mt-4">Welcome to Immunio</h1>
            <p>This is your dashboard where you can track and manage child immunizations.</p>

            <Row className="mt-4">
                <Col md={4}>
                    <Card className="mb-4 shadow-sm">
                        <Card.Body>
                            <Card.Title>Total Children Registered</Card.Title>
                            <Card.Text>
                                <h2>120</h2>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mb-4 shadow-sm">
                        <Card.Body>
                            <Card.Title>Upcoming Immunizations</Card.Title>
                            <Card.Text>
                                <h2>15</h2>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="mb-4 shadow-sm">
                        <Card.Body>
                            <Card.Title>Missed Immunizations</Card.Title>
                            <Card.Text>
                                <h2>3</h2>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mt-4">
                <Col md={6}>
                    <Card className="mb-4 shadow-sm">
                        <Card.Header>Recent Activities</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Child A immunized for Polio</ListGroup.Item>
                            <ListGroup.Item>Child B registered</ListGroup.Item>
                            <ListGroup.Item>Reminder sent for Child C</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className="mb-4 shadow-sm">
                        <Card.Header>Upcoming Appointments</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Child D - June 10, 2024</ListGroup.Item>
                            <ListGroup.Item>Child E - June 12, 2024</ListGroup.Item>
                            <ListGroup.Item>Child F - June 15, 2024</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default MainContent;
