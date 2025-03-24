import { useState } from "react";

const Login = ({ onLogin, onSwitch }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (event) => {
        event.preventDefault();

        // Get user from storage
        const storedUser = localStorage.getItem(`user_${username}`);
        if (!storedUser) {
            alert("User not found! Please sign up first.");
            return;
        }

        const userData = JSON.parse(storedUser);
        if (userData.password === password) {
            onLogin(); // Call login function from parent
        } else {
            alert("Incorrect password! Try again.");
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
                <p onClick={onSwitch} className="switch-link">Don't have an account? Sign up</p>
            </form>
        </div>
    );
};

export default Login;
