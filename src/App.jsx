import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import About from "./components/About"
import Skills from "./components/Skills";
import Project from "./components/Project"
import Contact from "./components/Contact"
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
                <Project />
                <Contact />
            </main>
        </>
    )
}


export default App;