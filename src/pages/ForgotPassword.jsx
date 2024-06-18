import React from "react";
import { Link } from "react-router-dom";
import ForgotPasswordForm from "../components/authentication/ForgotPasswordForm";

function ForgotPassword() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 d-flex align-items-center">
                    <div className="content text-center">
                        <h1 className="text-primary">Forgot Password</h1>
                        <p className="content">
                            Enter your email address below to receive password reset instructions. <br />
                            Remembered your password?{" "}
                            <Link to="/login/">Login</Link>.
                        </p>
                    </div>
                </div>
                <div className="col-md-6">
                    <ForgotPasswordForm />
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
