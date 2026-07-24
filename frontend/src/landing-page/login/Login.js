import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
    const [email, setEmail]       = useState("");
    const [password, setPassword] = useState("");
    const [error, setError]       = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        setError("");
        try {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            const data = await res.json();

           if (res.ok) {
                localStorage.setItem("token", data.token);
                localStorage.setItem("name", data.name);
                 // Redirect to the dashboard app, passing the token through the URL
                    // so the dashboard (different port = different origin) can pick it up
                 const dashboardUrl = process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3001";
                 window.location.href = `${dashboardUrl}/bootstrap?token=${data.token}&name=${encodeURIComponent(data.name)}`;
        } else {
            setError(data.message);
            }
        } catch (err) {
            setError("Something went wrong. Try again.");
        }
    };

    return (
        <div className="container mt-5" style={{ maxWidth: "420px" }}>
            <h3 className="mb-4">Login to Zerodha</h3>

            {error && <div className="alert alert-danger">{error}</div>}

            <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Enter your password"
                    onChange={e => setPassword(e.target.value)}
                />
            </div>

            <button className="btn btn-primary w-100" onClick={handleLogin}>
                Login
            </button>

            <p className="mt-3 text-center">
                Don't have an account? <Link to="/register">Register here</Link>
            </p>
        </div>
    );
}

export default Login;