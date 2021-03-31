import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../src/all.css";
import { useAuth } from "./Context";

export default function Signup() {
  //references to user's email, password, and password confirmation
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  //signup fxn from Context.js
  const { signup } = useAuth();
  //variables to account for errors and loading state
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  //useHistory hook to assist in routing/redirecting
  const history = useHistory();

  async function handleSubmit(evt) {
    evt.preventDefault();

    //validation check for passwords when signing up
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      //loading is set to true to prevent user from creating multiple accounts
      //button below is disabled when there is loading happening (aka while this async submit evt is happening)
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
        {/* if there's an error, render it out as an alert */}
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
