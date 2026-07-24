import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { saveToken } from "../utils/auth";

function Bootstrap() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get("token");
    const name = searchParams.get("name");

    if (token && name) {
      saveToken(token, name);
      navigate("/", { replace: true });
    } else {
      const frontendUrl = process.env.REACT_APP_FRONTEND_URL || "http://localhost:3002";
      window.location.href = `${frontendUrl}/login`;
    }
  }, [searchParams, navigate]);

  return null;
}

export default Bootstrap;