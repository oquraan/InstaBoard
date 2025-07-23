import { useContext, useState } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import "./UserCard.css";

export default function UserCard({
  // style = { color: "black" },
  img = "/imges/personal.png",
  name = "somone",
  email = "username@gmail.com",
}) {
  const darkModeContext = useContext(DarkModeContext);

  const [showEmail, setShowEmail] = useState(false);
  const [countLike, setCountLike] = useState(0);
  // const { color } = style;

  // return (
  //   <div>
  //     <img src={img}></img>
  //     <h2>{name}</h2>
  //     <h2>{showEmail ? email : null}</h2>

  //     <button
  //       onClick={() => {
  //         setCountLike(countLike + 1);
  //       }}
  //     >
  //       Like
  //     </button>
  //     <h3>{countLike}</h3>
  //     <button
  //       onClick={(e) => {
  //         setShowEmail(!showEmail);
  //       }}
  //     >
  //       Show Email{" "}
  //     </button>
  //   </div>
  // );

  return (
    <div className="user-card" style={darkModeContext}>
      <div className="card-content">
        <div className="profile-image-container">
          <img src={img} alt={name} className="profile-image" />
          <div className="status-indicator"></div>
        </div>

        <div className="user-info">
          <h2 className="user-name" style={darkModeContext}>
            {name}
          </h2>
          <div className="email-container">
            {showEmail && (
              <p className={`user-email ${showEmail ? "show" : ""}`}>{email}</p>
            )}
          </div>
        </div>

        <div className="action-buttons">
          <button
            className={`btn btn-like `}
            onClick={() => {
              setCountLike(countLike + 1);
            }}
          >
            <svg
              className={`heart-icon ${countLike > 0 ? "filled" : ""}`}
              viewBox="0 0 24 24"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <span className="like-count">{countLike}</span>
          </button>

          <button
            className={`btn btn-toggle ${showEmail ? "active" : ""}`}
            onClick={(e) => {
              setShowEmail(!showEmail);
            }}
          >
            <svg className="eye-icon" viewBox="0 0 24 24">
              {showEmail ? (
                <>
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                  <line x1="1" y1="1" x2="23" y2="23"></line>
                </>
              ) : (
                <>
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </>
              )}
            </svg>
            {showEmail ? "Hide Email" : "Show Email"}
          </button>
        </div>

        {countLike > 0 && (
          <div className={`like-counter ${countLike > 0 ? "show" : ""}`}>
            {countLike === 1 ? "1 like" : `${countLike} likes`}
          </div>
        )}
      </div>
    </div>
  );
}
