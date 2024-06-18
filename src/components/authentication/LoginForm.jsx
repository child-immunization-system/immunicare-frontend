import React, { useState } from "react";
import { Form, Button, Card, Modal, Spinner, InputGroup } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import icons
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/LoginForm.css";

function LoginForm() {
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const [form, setForm] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showPassword, setShowPassword] = useState(false); // State for password visibility

    const handleSubmit = (event) => {
        event.preventDefault();
        const loginForm = event.currentTarget;
        if (loginForm.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
            return;
        }

        setValidated(true);
        setLoading(true);

        const data = new URLSearchParams({
            grant_type: '',
            username: form.email,
            password: form.password,
            scope: '',
            client_id: '',
            client_secret: '',
        });

        axios
            .post('http://localhost:8000/api/v1/auth/token/', data, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            })
            .then((res) => {
                localStorage.setItem('auth', JSON.stringify({
                    access: res.data.access_token,
                    refresh: res.data.refresh_token,
                    user: res.data.token_type,
                }));
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
        navigate('/');
    };

    return (
        <>
            <Card className="login-card shadow">
                <Card.Body>
                    <Card.Title className="text-center mb-4">Login</Card.Title>
                    <Form
                        id="login-form"
                        className="border p-4 rounded"
                        noValidate
                        validated={validated}
                        onSubmit={handleSubmit}
                    >
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
                                    Logging in...
                                </>
                            ) : (
                                'Login'
                            )}
                        </Button>

                        <div className="text-center mt-3">
                            <Link to="/forgot-password/">Forgot Password?</Link>
                        </div>
                    </Form>
                </Card.Body>
            </Card>

            <Modal show={showSuccessModal} onHide={handleModalClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Login Successful</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>You have logged in successfully!</p>
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

export default LoginForm;
