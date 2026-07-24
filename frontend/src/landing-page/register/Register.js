import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";





function Register() {
    const [name, setName]         = useState("");
    const [email, setEmail]       = useState("");
    const [password, setPassword] = useState("");
    const [error, setError]       = useState("");
    const navigate = useNavigate();

    const handleRegister = async () => {
        setError("");
        try {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password }),
            });
            const data = await res.json();

            if (res.ok) {
                navigate("/login");     // go to login after registering
            } else {
                setError(data.message);
            }
        } catch (err) {
            setError("Something went wrong. Try again.");
        }
    };

    return (
        <div className="container mt-5" style={{ maxWidth: "420px" }}>
            <h3 className="mb-4">Create your Zerodha account</h3>

            {error && <div className="alert alert-danger">{error}</div>}

            <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    onChange={e => setName(e.target.value)}
                />
            </div>
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
                    placeholder="Create a password"
                    onChange={e => setPassword(e.target.value)}
                />
            </div>

            <button className="btn btn-primary w-100" onClick={handleRegister}>
                Register
            </button>

            <p className="mt-3 text-center">
                Already have an account? <Link to="/login">Login here</Link>
            </p>
        </div>
    );
}

export default Register;