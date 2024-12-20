import { Routes, Route, useLocation } from "react-router-dom";
import Admin from "./admin_main";
import Footer from "./footer";
import Crew from "./crew_main";
import Login from "./login";
import FindId from "./find_id";
import FindPw from "./find_pw";
import Profile from "./profile";
import Trip from "./trip";

const Page = () => {
  const location = useLocation();

  // Footer를 제외할 경로 리스트
  const noFooterRoutes = ["/", "/findid", "/findpw"];

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/findId" element={<FindId />} />
        <Route path="/findPw" element={<FindPw />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/trip" element={<Trip />} />
      </Routes>
      {!noFooterRoutes.includes(location.pathname.toLowerCase()) && <Footer />}
    </>
  );
};

export default Page;
