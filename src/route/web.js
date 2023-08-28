import express from "express";
import homeController from "../controllers/homeController";


let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    // get view home
    

    return app.use("/", router);
}



module.exports = initWebRoutes;
