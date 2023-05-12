const express = require("express");
const router = express.Router();

const addUser = require("./addUser");
router.use("/add_user", addUser);


const listUser = require("./listUser");
router.use("/list_user", listUser)

const idUser = require("./idUser");
router.use("/id_user", idUser);

module.exports = router;
