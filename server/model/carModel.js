class CarModel {
    constructor(brand, model, carBody, transmission, engine, file) {
        this.brand = brand;
        this.model = model;
        this.carBody = carBody;
        this.transmission = transmission;
        this.engine = engine;
        this.file = file;
    }
}

module.exports = CarModel;