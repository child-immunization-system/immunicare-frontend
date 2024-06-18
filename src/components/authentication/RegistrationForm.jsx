import React, { useState } from "react";
import { Form, Button, Card, Spinner, Modal, InputGroup } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import icons
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../styles/RegistrationForm.css";

function RegistrationForm() {
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const [form, setForm] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showPassword, setShowPassword] = useState(false); // State for password visibility

    const handleSubmit = (event) => {
        event.preventDefault();
        const registrationForm = event.currentTarget;
        if (registrationForm.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
            return;
        }

        setValidated(true);
        setLoading(true);

        const data = {
            email: form.email,
            password: form.password,
            first_name: form.first_name,
            middle_name: form.middle_name,
            last_name: form.last_name,
            date_of_birth: form.date_of_birth,
        };

        axios
            .post('http://localhost:8000/api/v1/auth/register/', data)
            .then((res) => {
                setLoading(false);
                setShowSuccessModal(true);
            })
            .catch((err) => {
                setLoading(false);
                if (err.response) {
                    setError(err.response.data.detail);
                } else {
                    setError('An error occurred');
                }
            });
    };

    const handleModalClose = () => {
        setShowSuccessModal(false);
        navigate('/login');
    };

    return (
        <>
            <Card className="registration-card shadow">
                <Card.Body>
                    <Card.Title className="text-center mb-4">Register</Card.Title>
                    <Form
                        id="registration-form"
                        className="border p-4 rounded"
                        noValidate
                        validated={validated}
                        onSubmit={handleSubmit}
                    >
                        <Form.Group className="mb-3">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                value={form.first_name || ''}
                                onChange={(e) => setForm({ ...form, first_name: e.target.value })}
                                required
                                type="text"
                                placeholder="Enter first name"
                            />
                            <Form.Control.Feedback type="invalid">
                                This field is required.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Middle Name</Form.Label>
                            <Form.Control
                                value={form.middle_name || ''}
                                onChange={(e) => setForm({ ...form, middle_name: e.target.value })}
                                type="text"
                                placeholder="Enter middle name (optional)"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                value={form.last_name || ''}
                                onChange={(e) => setForm({ ...form, last_name: e.target.value })}
                                required
                                type="text"
                                placeholder="Enter last name"
                            />
                            <Form.Control.Feedback type="invalid">
                                This field is required.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                value={form.email || ''}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                required
                                type="email"
                                placeholder="Enter email"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid email.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <InputGroup>
                                <Form.Control
                                    value={form.password || ''}
                                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                                    required
                                    type={showPassword ? "text" : "password"} // Toggle input type
                                    placeholder="Password"
                                />
                                <Button
                                    variant="outline-secondary"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </Button>
                                <Form.Control.Feedback type="invalid">
                                    Please provide a valid password.
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Date of Birth</Form.Label>
                            <Form.Control
                                value={form.date_of_birth || ''}
                                onChange={(e) => setForm({ ...form, date_of_birth: e.target.value })}
                                required
                                type="date"
                                placeholder="Enter date of birth"
                            />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid date of birth.
                            </Form.Control.Feedback>
                        </Form.Group>

                        <div className="text-content text-danger">
                            {error && <p>{error}</p>}
                        </div>

                        <Button variant="primary" type="submit" className="w-100" disabled={loading}>
                            {loading ? (
                                <>
                                    <Spinner
                                        as="span"
                                        animation="border"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    />{' '}
                                    Registering...
                                </>
                            ) : (
                                'Register'
                            )}
                        </Button>
                    </Form>
                </Card.Body>
            </Card>

            <Modal show={showSuccessModal} onHide={handleModalClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Registration Successful</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Your account has been registered successfully!</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleModalClose}>
                        OK
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default RegistrationForm;
