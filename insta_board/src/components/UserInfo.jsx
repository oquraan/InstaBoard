import { useLocation } from "react-router-dom";
import "./UserCard/UserCard.css";
export default function UserInfo() {
  const location = useLocation();

  const { name, img, email } = location.state;

  return (
    <div>
      <div className="user-card" /*style={darkModeContext}*/>
        <div className="card-content">
          <div className="profile-image-container">
            <img src={img} alt={name} className="profile-image" />
            <div className="status-indicator"></div>
          </div>

          <div className="user-info">
            <h2 className="user-name" /*style={darkModeContext}*/>{name}</h2>
            <div className="email-container">
              <p>{email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
