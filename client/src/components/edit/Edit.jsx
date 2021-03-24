import React, {useState} from 'react';
import {editGet, editPost} from "../../actions/user";
import Input from "../utils/input/Input";
import "./edit.css"
import {NavLink} from "react-router-dom";

const Edit = () => {
    const [contentLoaded, setContentLoaded] = useState(false);
    const [brand, setBrand] = useState("")
    const [model, setModel] = useState("")
    const [carBody, setCarBody] = useState("")
    const [transmission, setTransmission] = useState("")
    const [engine, setEngin] = useState("")
    const [filePath, setFilePath] = useState("")

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

    const SelectChangeHandler = (e) => {
        setEngin(e.target.value);
    }

    function fileUploadHandler(event) {
        setFilePath(event.target.files);
    }
    if (!contentLoaded) {
        setContentLoaded(true);
        
        editGet(carId).then(car => {
            setBrand(car.brand);
            setModel(car.model);
            setCarBody(car.carBody);
            setTransmission(car.transmission);
            setEngin(car.engine)
            setFilePath(car.filePath);
        })
    }

    return (
        <form className="edit_form" encType="multipart/form-data"  action="/edit" method="post">
                    <h1>Добавление автомобиля</h1>
                    <div>
                        <Input value={brand} setValue={setBrand} type="text" placeholder="brand"/>
                    </div>
                    <div>
                        <Input value={model} setValue={setModel} type="text" placeholder="Модель"/>
                    </div>
                    <div>
                        <Input value={carBody} setValue={setCarBody} type="text" placeholder="Кузов"/>
                    </div>
                    <div>
                        <Input value={transmission} setValue={setTransmission} type="text" placeholder="Коробка передач"/>
                    </div>
                    <div>
                        <select name="engine" onChange={SelectChangeHandler}>
                            Тип двигателя
                            <option value="Бензин">Бензин</option>
                            <option value="Электро">Электро</option>
                            <option value="Гибрид">Гибрид</option>
                            <option value="Дизель">Дизель</option>
                        </select>
                    </div>
                    <div>
                        <input onChange={(event)=> fileUploadHandler(event)} type="file" placeholder="Прикрепить фото"/>
                    </div>
                    <NavLink to={`/view`}>
                        <button type="submit" onClick={(event) => editPost(event, carId, brand, model, carBody, transmission, engine,filePath)}>Изменить</button>
                    </NavLink>
                </form>
    );
};

export default Edit;
