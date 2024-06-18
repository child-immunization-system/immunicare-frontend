import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import axios from "axios";
import "../../styles/ForgotPasswordForm.css";

function ForgotPasswordForm() {
    const [validated, setValidated] = useState(false);
    const [form, setForm] = useState({});
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const forgotPasswordForm = event.currentTarget;
        if (forgotPasswordForm.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
            return;
        }

        setValidated(true);

        const data = {
            email: form.email,
        };

        axios
            .post("http://localhost:8000/api/v1/auth/forgot-password/", data)
            .then((res) => {
                setSuccess("Password reset instructions have been sent to your email.");
                setError(null);
            })
            .catch((err) => {
                if (err.message) {
                    setError(err.response ? err.response.data.detail : "An error occurred");
                    setSuccess(null);
                }
            });
    };

    return (
        <Card className="forgot-password-card shadow">
            <Card.Body>
                <Card.Title className="text-center mb-4">Forgot Password</Card.Title>
                <Form
                    id="forgot-password-form"
                    className="border p-4 rounded"
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                >
                    <Form.Group className="mb-3">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            value={form.email || ""}
                            onChange={(e) =>
                                setForm({ ...form, email: e.target.value })
                            }
                            required
                            type="email"
                            placeholder="Enter email"
                        />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid email.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <div className="text-content text-danger">
                        {error && <p>{error}</p>}
                    </div>
                    <div className="text-content text-success">
                        {success && <p>{success}</p>}
                    </div>

                    <Button variant="primary" type="submit" className="w-100">
                        Send Reset Instructions
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default ForgotPasswordForm;
