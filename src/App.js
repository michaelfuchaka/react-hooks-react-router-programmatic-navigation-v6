import { useState, useEffect } from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/"); // after login, go home
    } else {
      navigate("/login"); // after logout, go to login
    }
  }, [isLoggedIn]);

  return (
    <div className="app">
      {/* Conditional render: NavBar only if logged in */}
      {isLoggedIn ? <NavBar logout={logout} /> : <Navigate to="/login" />}
      <Outlet context={login} />
    </div>
  );
}

export default App;
