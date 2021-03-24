const Router = require("express");
const config = require("config")
const CarModel = require("../model/car")
const car = new CarModel();
car.initCars();
const router = new Router()


const workingDir = __dirname.slice(0, __dirname.lastIndexOf('\\'))

router.post('/add',
    async (req, res) => {
        try {
            console.log(req.files?.file)
            const file = req.files?.file
            let loadedFileName = null;
            if (file) {
                loadedFileName = `${car.getID()}.jpg`;
                
                await file.mv(workingDir + `\\uploads\\${loadedFileName}`);
            }
            console.log(req.body)
            car.newCar(req.body.brand, req.body.model, req.body.carBody, req.body.transmission, req.body.engine, loadedFileName);


            return res.status(200).json({message: `User ok`})
        } catch (e) {
            console.log(e)
            res.send({message: "Server error"})
        }
    })

router.get('/view',
    async (req, res) => {
        try {
            return res.status(200).json({cars: car.getCars()})
        } catch (e) {
            console.log(e)
            res.send({message: "Server error"})
        }
    })

router.get('/edit',
    async (req, res) => {
        try {
            const carId = req.headers.carid;
            const editedCar = car.getCarByID(carId)
            return res.status(200).json({car: editedCar})
        } catch (e) {
            console.log(e)
            res.send({message: "Server error"})
        }
    })

router.post('/edit',
    async (req, res) => {
        try {
            const file = req.files?.file
            let loadedFileName = null;
            if (file) {
                loadedFileName = `${car.getID()}.jpg`;
                await file.mv(workingDir + `\\uploads\\${loadedFileName}`);
            }
            console.log(req.body);

            car.editCarByID(req.body.carId, req.body.brand, req.body.model, req.body.carBody, req.body.transmission, req.body.engine, loadedFileName);

            return res.status(200).json({message: `User ok`})
        } catch (e) {
            console.log(e)
            res.send({message: "Server error"})
        }
    })

router.post('/delete',
    async (req, res) => {
        try {
            const carId = req.body.carId;

            car.deleteCarByID(carId)

            return res.status(200).json({message: `User ok`})
        } catch (e) {
            console.log(e)
            res.send({message: "Server error"})
        }
    })



module.exports = router
