import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";

function App() {
    return (
        <div className="main_container">
            <div className="secondary_container">
                <Nav />
                <Hero />
            </div>
            <Footer />
        </div>
    );
}

export default App;
