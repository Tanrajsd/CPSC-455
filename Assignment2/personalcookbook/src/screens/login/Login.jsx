import React, { useState } from "react";

export default function Login() {
  const password = "open sesame";
  const [attempt, setAttempt] = useState("");

  const signIn = () => {
    if (attempt === password) {
      window.location.href = "/home";
    } else {
      alert("Password is incorrect please try again!");
    }
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
              signIn();
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
