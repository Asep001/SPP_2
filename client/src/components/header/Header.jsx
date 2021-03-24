import React from 'react';
import {NavLink} from "react-router-dom";
import "./header.css"


const Header = () => {
    return (
        <header>
                <div className="header_title">
                    <NavLink to=""><h1 className="name">Автомобили</h1></NavLink>
                </div> 
                <div className="button_list">
                    <NavLink to="/add"><button type="button">Добавить</button></NavLink>
                    <NavLink to="/view"><button type="button">Просмотр</button></NavLink>
                </div>
        </header>
    );
};

export default Header;
