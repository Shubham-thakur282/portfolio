import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import About from "./components/About"
import "./App.css";



const App = ()=>{
    return(
        <>
            <Navbar />
            <main>
                <Home />
                <About />
            </main>
        </>
    )
}


export default App;