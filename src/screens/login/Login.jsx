import React, { useState } from "react";
import login from "./useAuth";

export default function Login() {
  const [attempt, setAttempt] = useState("");

  const signIn = (attempt) => {
    login(attempt);
  };

  return (
    <div>
      <div id="form" className="form-container">
        <h3 className="form-header">Password</h3>
        <div>
          <input
            type="text"
            id="rname"
            name="rname"
            className="form-input"
            onChange={(e) => {
              setAttempt(e.target.value);
            }}
            value={attempt}
          />
        </div>
        <br />
        <div>
          <button
            onClick={() => {
              signIn(attempt);
            }}
            className="form-button"
          >
            Sign In
          </button>
        </div>
        <br />
      </div>
    </div>
  );
}
