import './styles/App.css'
import Home from "./pages/Home.jsx";
import {Routes, Route} from "react-router-dom";
import PostOverview from "./pages/PostOverview.jsx";
import CreatePost from "./pages/CreatePost.jsx";
import NotFound from "./pages/NotFound.jsx";
import NavBar from "./components/navbar/NavBar.jsx";

function App() {
    return (
        <div className="page-container">
            <NavBar className="navigation" />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/postoverview" element={<PostOverview />} />
                <Route path="/createpost" element={<CreatePost />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default App
