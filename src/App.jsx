import './styles/App.css';
import Home from "./pages/Home.jsx";
import {Routes, Route} from "react-router-dom";
import Posts from "./pages/Posts.jsx";
import CreatePost from "./pages/CreatePost.jsx";
import NotFound from "./pages/NotFound.jsx";
import PostDetails from "./pages/PostDetails.jsx";
import NavBar from "./components/navbar/NavBar.jsx";
import {useState} from "react";

import list from "./constants/data.json";


function App() {
    const [data, setData] = useState(list);

    function changeData(newData) {
        setData(newData);
    }

    return (
        <div className="page-container">
            <NavBar className="navigation" />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/posts" element={<Posts data={data}/>} />
                <Route path="/createpost" element={<CreatePost data={data} changeDataFunction={changeData}/>} />
                <Route path="/postdetails/:id" element={<PostDetails data={data}/>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default App
