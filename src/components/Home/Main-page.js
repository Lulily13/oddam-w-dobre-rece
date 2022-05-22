import React from 'react';
import {Link} from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';

const MainPage = () => {
    return (
        <>
            <div className='container main-page-container'>
                <div className='main-page-img'/>
                <div className='main-page-text'>
                    <header className="header">
                        <div className='header-login-menu'>
                            <Link to={"/logowanie"} className='btn-header btn-header-log'>Zaloguj się</Link>
                            <Link to={"/rejestracja"} className='btn-header btn-header-sign'>Załóż konto</Link>
                        </div>
                        <nav className='header-navigation'>
                            <ScrollLink to={"/"} className="nav-element">Start</ScrollLink>
                            <ScrollLink to={"/about"} className="nav-element">O co chodzi?</ScrollLink>
                            <ScrollLink to={"/about-us"} className="nav-element">O nas</ScrollLink>
                            <ScrollLink to={"/charity-and-organizations"} className="nav-element">Fundacja i organizacje</ScrollLink>
                            <ScrollLink to={"/contact"} className="nav-element">Kontakt</ScrollLink>
                        </nav>
                    </header>
                    <div className='main-page-content'>
                        <div className='main-page-titles'>
                            <p>Zacznij pomagać!</p>
                            <p>Oddaj niechciane rzeczy w zaufane ręce</p>
                        </div>
                        <img className='main-page-decoration' alt="page-decoration" src={require("../../assets/Decoration.svg").default}/>
                        <div className='main-page-buttons'>
                            <Link to={"/logowanie"} className='btn-content'>ODDAJ<br/>RZECZY</Link>
                            <Link to={"/logowanie"} className='btn-content'>ZORGANIZUJ <br/>ZBIÓRKĘ</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPage;