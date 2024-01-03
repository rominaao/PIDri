const {Router} = require("express");
const getteamshandler = require("../handlers/handlerTeams");
const teamsRouter= Router();


teamsRouter.get("/", getteamshandler);
 
module.exports = teamsRouter;

