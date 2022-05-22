import React from 'react';
import './scss/main.scss';
import {HashRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home"
import Test from "./components/Test";


const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/test"} element={<Test/>}/>
            </Routes>
        </HashRouter>
    )
}

export default App;