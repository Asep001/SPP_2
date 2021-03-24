const CarModel = require("./carModel");


class Car {
    id = 0;
    cars= [];

    increaseID() {
        this.id++;
    }

    initCars() {
        this.newCar(
            "Bugatti",
            "Chiron",
            "Спорткупе",
            "Автомат",
            "Бензин",
            "0.jpg"
        );
        this.newCar(
            "ВАЗ",
            "2107",
            "Седан",
            "Механическая",
            "Бензин",
            "1.jpg"
        )
    }

    selectedCarId = -1;

    getID() {
        return this.id
    }

    newCar(brand, model, carBody, transmission, engine, file) {
        this.increaseID();
        let car = new CarModel(brand, model, carBody, transmission, engine, file)
        this.cars.push(car);
        console.log(car.file);
    }

    getCars() {
        return this.cars;
    }

    selectCarID(id) {
        this.selectedCarId = this.cars[id] ? id : -1;
    }

    getCarByID(id) {
        return this.cars[id];
    }

    editCarByID(id, brand, model, carBody, transmission, engine, file) {
        let selectedCar = this.cars[id];
        selectedCar.brand = brand;
        selectedCar.model = model;
        selectedCar.carBody = carBody;
        selectedCar.transmission = transmission;
        selectedCar.engine = engine;
        if (file) {
            selectedCar.file = file;
        }
        this.cars[id] = selectedCar;
        this.increaseID();
    }

    deleteCarByID(id) {
        this.cars.splice(id, 1);
    }
}

module.exports = Car
