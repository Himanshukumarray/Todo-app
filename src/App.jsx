import { useState, useEffect } from "react";
import Login from "./Login";
import Signup from "./Signup";
import Todo from "./Todo";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  useEffect(() => {
    const storedAuth = localStorage.getItem("isAuthenticated");
    if (storedAuth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  // Handle login
  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
  };

  // Handle logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  return (
    <div>
      {isAuthenticated ? (
        <Todo onLogout={handleLogout} />
      ) : showSignup ? (
        <Signup onSwitch={() => setShowSignup(false)} />
      ) : (
        <Login onLogin={handleLogin} onSwitch={() => setShowSignup(true)} />
      )}
    </div>
  );
};

export default App;
