import axios from 'axios'
import {API_URL} from "../config";

export const add = async (event, brand, model, carBody, transmission, engine, filePath) => {
    event.preventDefault();
    const data = new FormData();
    data.append('brand', brand);
    data.append('model', model);
    data.append('carBody', carBody);
    data.append('transmission', transmission);
    data.append('engine', engine);
    data.append('file', filePath ? filePath[0] : null);

    await axios.post(`${API_URL}api/add`, data, {});
}

export const view = async () => {
    return (await axios.get(`${API_URL}api/view`, {})).data.cars;
}

export const editGet = async (id) => {
    
    return (await axios.get(`${API_URL}api/edit`,
        {headers:{carId: id}}
        )).data.car;
}

export const editPost = async (event, carId, brand, model, carBody, transmission, engine,filePath) => {
    event.preventDefault();
    const data = new FormData();
    data.append('carId', carId);
    data.append('brand', brand);
    data.append('model', model);
    data.append('carBody', carBody);
    data.append('transmission', transmission);
    data.append('engine', engine);
    data.append('file', filePath ? filePath[0] : null);

    await axios.post(`${API_URL}api/edit`, data, {});
}

export const deletePost = async (event, carId) => {
    const data = new FormData();
    data.append('carId', carId);
    await axios.post(`${API_URL}api/delete`, data, {}
    );

}