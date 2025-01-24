import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Post from "./pages/Post";

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("../src/data/data.json"); // Fetching the properties data from the JSON file
                if (!response.ok) throw new Error("Failed to fetch JSON");
                const json = await response.json();
                setData(json.posts);
            } catch (error) {
                console.log("Error fetching data:", error); // Log any errors
            }
        };
        fetchData();
    }, []);

    return (
        <Router basename="/sanukadgblog">
            <Routes>
                <Route
                    path="/"
                    element={
                        <div className="main_container">
                            <div className="secondary_container">
                                <Nav />
                                <Hero data={data} />
                            </div>
                            <Footer />
                        </div>
                    }
                />

                <Route
                    path="/post/:id"
                    element={
                        <>
                            <Nav />
                            <Post data={data} />
                            <Footer />
                        </>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
