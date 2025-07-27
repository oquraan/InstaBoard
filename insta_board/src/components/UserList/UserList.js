"use client";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import UserCard from "../UserCard/UserCard";
import "./UserList.css";
export default function UserList() {
  const [listOfProfile, setListOfProfile] = useState([]);
  const [allProfile, setAllProfile] = useState(true);
  const darkModeContext = useContext(DarkModeContext);
  const [numberOfTeamMembers, setNumberOfTeamMembers] = useState(0);

  const [firstName, setFirstNmae] = useState("");
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?results=12"
        );
        setListOfProfile(response.data.results);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  async function determinTheTeam(e) {
    try {
      e.preventDefault();
      if (numberOfTeamMembers > 0) {
        const response = await axios.get(
          `https://randomuser.me/api/?results=${numberOfTeamMembers}`
        );
        setListOfProfile([...response.data.results]);
      }
      console.log(listOfProfile);
    } catch (err) {
      console.log(err);
    }
  }
  async function loadMore() {
    try {
      const response = await axios.get(
        `https://randomuser.me/api/?results=${
          numberOfTeamMembers > 0 ? numberOfTeamMembers : 12
        }`
      );
      setListOfProfile([...listOfProfile, ...response.data.results]);
      console.log(listOfProfile);
    } catch (err) {
      console.log(err);
    }
  }
  // const listCardProfile = listOfProfile.map((element) => {
  //   return (
  //     <UserCard
  //       style={style}
  //       name={
  //         element.name.title +
  //         "." +
  //         element.name.last +
  //         ", " +
  //         element.name.first
  //       }
  //       email={element.email}
  //       img={element.picture.medium}
  //     ></UserCard>
  //   );
  // });
  // let listOfProfileSearch;
  const [listOfProfileSearch, setListOfProfileSearch] = useState([]);

  function handleInputChange(e) {
    setFirstNmae(e.target.value);

    if (e.target.value.trim() === "") {
      setAllProfile(true);
      return;
    }
    setAllProfile(false);

    const listInSearch = listOfProfile.filter((user) =>
      user.name.first.includes(e.target.value)
    );
    setListOfProfileSearch([...listInSearch]);
  }

  return (
    <div style={{ display:"flex",flexDirection:"column", justifyContent: "center", alignItems:"center"}}>
      <div className="form-container">
        <div className="form-card">
          <h1 className="form-title">Contact Us</h1>

          <form /*onSubmit={handleSubmit}*/ method="post">
            <div className="form-group">
              <label htmlFor="firstName" className="form-label">
                First Name :
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={(e) => {
                  handleInputChange(e);
                }}
                className="form-input"
                placeholder="Search of the user using first name"
              />
              {/* {errors.firstName && <div className="error-message">{errors.firstName}</div>} */}
            </div>

            <div className="form-group">
              <label htmlFor="firstName" className="form-label">
                Team Number :
              </label>
              <input
                max={100}
                min={1}
                type="number"
                id="team"
                name="numberOfTeamMembers"
                value={numberOfTeamMembers}
                onChange={(e) => {
                  setNumberOfTeamMembers(e.target.value);
                }}
                className="form-input"
              />
              <button
                style={{ margin: "10px" }}
                onClick={(e) => {
                  determinTheTeam(e);
                }}
              >
                Find Team{" "}
              </button>
            </div>

            {/* <button type="submit" className="form-button" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {isSubmitted && <div className="success-message">Thank you! Your message has been sent successfully.</div>} */}
          </form>
        </div>
      </div>
      <div className="ss">
        {(allProfile ? listOfProfile : listOfProfileSearch).map(
          (element, index) => {
            return (
              <UserCard
                style={darkModeContext}
                name={
                  element.name.title +
                  "." +
                  element.name.last +
                  ", " +
                  element.name.first
                }
                email={element.email}
                img={element.picture.medium}
              ></UserCard>
            );
          }
        )}
      </div>
      <div>
        {" "}
        <button
          className={`btn btn-like `}
          onClick={() => {
            loadMore();
          }}
          // style={{ margin: "20px", width: "100%" }}
        >
          <span className="like-count">Load More</span>
        </button>
      </div>
    </div>
  );
}
