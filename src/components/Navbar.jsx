import { Link, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import UpcomingAnime from "../pages/UpcomingAnime";

const Navbar = () => {
    return (
        <>
        <nav>
            <div className="homertitle">
                <h2 className="homerinto">AnimeFlow</h2>
            </div>
            <ul>
                <li className="flex justify-end space-x-4 text-2xl font-bold underline">
                    <Link to="/">Home</Link>
                    <Link to="/UpcomingAnime">UpcomingAnime</Link>
                </li>
            </ul>
        </nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/UpcomingAnime" element={<UpcomingAnime />} />
        </Routes>
        </>
    );
};

export default Navbar;
