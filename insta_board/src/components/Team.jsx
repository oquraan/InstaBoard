import { useState } from "react";
import "../App.css";
import { DarkModeContext } from "../context/DarkModeContext";
import UserList from "./UserList/UserList";

export default function Team() {
  const [isDark, setIsDark] = useState(false);

  return (
    <DarkModeContext.Provider
      value={
        isDark
          ? undefined
          : { color: "white", background: "#342833ff", isDark: false }
      }
    >
      <div className="App">
        <header className={isDark ? "App-header" : "App-header1"}>
          <label className="toggle-switch">
            <input
              type="checkbox"
              className="toggle-input"
              checked={isDark}
              onChange={(e) => setIsDark(e.target.checked)}
            />
            <span className="toggle-slider"></span>
          </label>
          <div className="display-profile ">
            {" "}
            <UserList
              className="display-profile"
              // style={
              //   isDark ? undefined : { color: "white", background: "#282c34" }
              // }
            ></UserList>
          </div>
        </header>
      </div>
    </DarkModeContext.Provider>
  );
}
