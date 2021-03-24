import React, {useState} from 'react';
import Input from "../utils/input/Input";
import {add} from "../../actions/user";
import "./add.css"
import {NavLink} from "react-router-dom";

const Add = () => {
    const [brand, setBrand] = useState("")
    const [model, setModel] = useState("")
    const [carBody, setCarBody] = useState("")
    const [transmission, setTransmission] = useState("")
    const [engine, setEngin] = useState("Бензин")
    const [filePath, setFilePath] = useState("")

    const SelectChangeHandler = (e) => {
        setEngin(e.target.value);
    }

    function fileUploadHandler(event) {
        setFilePath(event.target.files);
    }

    return (
                <form className="add_form" encType="multipart/form-data"  action="/add" method="post">
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
                        <button type="submit" onClick={(event) => add(event, brand, model, carBody, transmission, engine, filePath)}>Добавить</button>
                    </NavLink>
                </form>
    );
};

export default Add;