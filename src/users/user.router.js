const router = require("express").Router();

const userServices = require("./user.services");

router.get("/users", userServices.getUsers);

router.post("/users", userServices.createUser);

router.get("/users/:id", userServices.getOneUser);

module.exports = router;
