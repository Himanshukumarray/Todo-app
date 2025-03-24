import { useState } from "react";

const Signup = ({ onSwitch }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (event) => {
    event.preventDefault();

    // Check if the user already exists
    const existingUser = localStorage.getItem(`user_${username}`);
    if (existingUser) {
      alert("User already exists! Try logging in.");
      return;
    }

    // Save new user
    localStorage.setItem(`user_${username}`, JSON.stringify({ username, password }));
    alert("Account created! You can now log in.");
    onSwitch(); // Switch to login page
  };

  return (
    <div className="login-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Choose a username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Choose a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
        <p onClick={onSwitch} className="switch-link">Already have an account? Log in</p>
      </form>
    </div>
  );
};

export default Signup;
