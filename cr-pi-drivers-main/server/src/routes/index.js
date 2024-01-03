const { Router } = require("express");
const driversRouter = require("./routeDrivers");
const teamsRouter = require("./routerTeams");

const router = Router();

router.use("/drivers", driversRouter);
router.use("/teams", teamsRouter)


module.exports = router;
