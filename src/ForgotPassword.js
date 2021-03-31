import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../src/signup.css";
import { useAuth } from "./Context";

export default function ForgotPassword() {
  const emailRef = useRef();

  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(evt) {
    evt.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check yer mail");
    } catch {
      setError("Failed to reset password");
    }
    setLoading(false);
  }

  return (
    <div>
      <div id="sign_up">
        <h2> Reset Password </h2>
        {error && <alert>{error}</alert>}
        {message && <alert>{message}</alert>}
        <form onSubmit={handleSubmit}>
          <br />
          <label>
            Email:
            <br />
            <input
              className="form_field"
              type="email"
              ref={emailRef}
              required
            />
          </label>
          <br />
          <br />
          <button disabled={loading} className="button" type="submit">
            Reset Password
          </button>
        </form>
        <div>
          Don't have an account? <Link to="/signup">Sign Up</Link>{" "}
        </div>
        <br />
        <div>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}
