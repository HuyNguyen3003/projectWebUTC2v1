const express = require("express");
const router = express.Router();
const userController = require("./controllers/userController");

let initWebRoutes = (app) => {
  //login
  router.get("/checkserver", userController.checkserver);
  router.post("/senddata", userController.sendData);
  router.post("/readdata", userController.readData);

  return app.use("/", router);
};

module.exports = initWebRoutes;
