import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


const App = ()=>{
    return(
        <>
            <Navbar />
            <main>
                <Home />
                <About />
                <Skills />
            </main>
        </>
    )
}


export default App;