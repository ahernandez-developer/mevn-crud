const routes = require("express").Router();
const controller = require("../controllers/controller");

routes.get("/",(req,res)=>controller.index(req,res));


module.exports = routes;