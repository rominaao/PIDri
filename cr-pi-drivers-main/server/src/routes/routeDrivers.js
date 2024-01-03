const {Router} = require("express");
const { getDriversHandler, getDetailHandler, createtDriverHandler } = require("../handlers/handlerDrivers");
const driversRouter= Router();


driversRouter.get("/",getDriversHandler);
driversRouter.get("/:id",getDetailHandler );
driversRouter.post("/", createtDriverHandler );

module.exports = driversRouter;