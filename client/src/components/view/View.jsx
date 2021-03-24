import React, {useState} from 'react';
import {view} from "../../actions/user";
import "./view.css"
import {NavLink} from "react-router-dom";

const View = () => {
    const [contentLoaded, setContentLoaded] = useState(false);
    const [cars, setCars] = useState([]);
    let index = 0;

    if (!contentLoaded) {
        setContentLoaded(true);
        view().then(cars => {
            console.log(cars)
            setCars(cars);
        })
    }

    const IncreaseIndex = () => index++;

    return (
        <div>
            {cars.map((car) => (
                    <div className="info" key={index}> 
                        <h1 className="title">{car.brand + " " + car.model}</h1> 
                        {car.file && <img src={`http://localhost:5000/${car.file}`} alt={""}/>}
                        <ul className="zebra">
                            <li><strong>Кузов: {car.carBody} </strong></li>
                            <li><strong>Тип двигателя:  {car.engine}</strong></li>
                            <li><strong>Тип коробки передач: {car.transmission}</strong></li>
                        </ul>
                        <div className="buttons">
                            <NavLink to={`/edit?id=${index}`}>
                                <button className="edit-delete-button edit" name={IncreaseIndex()}>Изменить</button>
                            </NavLink>
                            <NavLink to={`/delete?id=${index-1}`}>
                                <button className="edit-delete-button delete" name={index-1}>Удалить</button>
                            </NavLink>
                        </div>
                        <hr/>
                    </div>
                )
            )}
        </div>
    );
};

export default View;
