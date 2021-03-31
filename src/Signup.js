import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../src/signup.css";
import { useAuth } from "./Context";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(evt) {
    evt.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to create account");
    }
    setLoading(false);
  }

  return (
    <div>
      <div id="sign_up">
        <h2> Sign Up </h2>
        {error && <alert id="alert">{error}</alert>}
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
          <label>
            Password:
            <br />
            <input
              className="form_field"
              type="password"
              ref={passwordRef}
              required
            />
          </label>
          <br />
          <br />
          <label>
            Password Confirmation:
            <br />
            <input
              className="form_field"
              type="password"
              ref={passwordConfirmRef}
              required
            />
          </label>
          <br />
          <br />
          <button disabled={loading} className="button" type="submit">
            Sign Up
          </button>
          <div>
            Already have an account? <Link to="/login">Log in</Link>{" "}
          </div>
        </form>
      </div>
    </div>
  );
}
