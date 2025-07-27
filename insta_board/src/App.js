import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer, Navbar } from "./components/NavBar/NavBar";
import Team from "./components/Team";
import UserInfo from "./components/UserInfo";
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
import Notfound from "./pages/NotFound";
function App() {
  return (
    <div  className="App">
      {" "}
      <BrowserRouter>
        <Navbar></Navbar>
        <div className="content">
          <Routes>
            <Route path="/" element={<Team></Team>}></Route>

            <Route path="/homePage" element={<HomePage></HomePage>}></Route>
            <Route path="/about" element={<AboutPage></AboutPage>}></Route>
            <Route path="/team/profile" element={<UserInfo></UserInfo>}></Route>

            <Route path="*" element={<Notfound></Notfound>}></Route>
          </Routes>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
