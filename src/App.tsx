import { Routes, Route, Navigate, useLocation } from "react-router";
import "./App.scss";
import { NavBar } from "./modules/NavBar";
import Feed from "./modules/Feed/Feed";
import Explore from "./modules/Explore/Explore";
import Discussions from "./modules/Discussions/Discussions";
import Profile from "./modules/Profile/Profile";

/*

  Remaining tasks:
    - README.MD

    - Work on better performance

*/

function App() {
  const { pathname } = useLocation();

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/">
          <Route path="" element={<Navigate to="/feed" />} />
          <Route path="home" element={<Navigate to="/feed" />} />

          <Route path="feed" element={<Feed />} />
          <Route path="explore" element={<Explore />} />
          <Route path="discussions" element={<Discussions />} />

          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>

      {pathname === "/feed" && (
        <footer>
          <div className="feed__stay-tuned-cards" />

          <div className="feed__stay-tuned-fog" />
        </footer>
      )}
    </>
  );
}

export default App;
