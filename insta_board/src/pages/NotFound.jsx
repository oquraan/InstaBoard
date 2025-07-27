import { useNavigate } from "react-router-dom";
import "./NotFound.css";

export default function Notfound() {
  const navigate=useNavigate();
  return (
    <>
      <div className="error-message">
        <h2 className="error-title">Oops! Page Not Found</h2>
        <p className="error-description">
          The page you're looking for doesn't exist or has been moved to another
          location.
        </p>
      </div>{" "}
      <div className="button-container">
        {/* <button className="btn btn-outline" onClick={() => {}}>
          <span className="btn-icon">←</span>
          Go Back
        </button> */}

        <button className="btn btn-primary" onClick={() => {
          navigate("/");

        }}>
          <span className="btn-icon">🏠</span>
          Go Home
        </button>
      </div>
    </>
  );
}
