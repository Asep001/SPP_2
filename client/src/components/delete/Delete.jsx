import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {deletePost, editGet} from "../../actions/user";
import "./delete.css"

const Delete = () => {
    const [contentLoaded, setContentLoaded] = useState(false);
    let [car, setCar] = useState([])

    function getParam( name ) {
        let regexS = "[\\?&]"+name+"=([^&#]*)";
        let regex = new RegExp( regexS );
        let results = regex.exec( window.location.href );
        if( results == null )
            return "";
        else
            return results[1];
    }
    let carId = getParam( 'id' );

    if (!contentLoaded) {
        setContentLoaded(true);
        editGet(carId).then(car => {
            setCar(car);
        })
    }
    return (
        <div className="detele_form">
            <form encType="multipart/form-data">
            <h1 className="title">{car.brand + " " + car.model}</h1> 
                <NavLink to={`/view`}>
                    <button type="submit" onClick={(event) => deletePost(event, carId)} >Delete</button>
                </NavLink>
            </form>
        </div>
    );
};

export default Delete;
