import express from "express";
let router = express.Router();
import apiController from '../controllers/api.controller';

let initApiRouter = (app) => {
    router.get('/employee', apiController.getAllEmployee)
    router.get('/employee/:id', apiController.getEmployeeId)
    router.post('/create-new-employee', apiController.createNewEmployee)
    router.put('/update-employee/:id', apiController.updateEmployee)
    router.delete('/delete-employee/:id', apiController.deleteEmployee)

    return app.use('/api', router)
}
export default initApiRouter