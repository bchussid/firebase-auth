import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../src/all.css";
import { useAuth } from "./Context";

//very similar to signup component - see comments in that file

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(evt) {
    evt.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to sign in");
    }
    setLoading(false);
  }

  return (
    <div>
      <div id="sign_up">
        <h2> Login </h2>
        {error && <div className="error">{error}</div>}
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
          <button disabled={loading} className="button" type="submit">
            Log In
          </button>
        </form>
        <br />
        <div>
          Don't have an account? <Link to="/signup">Sign Up</Link>{" "}
        </div>
        <br />
        <div>
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
      </div>
    </div>
  );
}
