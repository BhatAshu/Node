const express = require("express");
const router = express.Router();
const userModel = require("../models/user");

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    let data = await userModel.findById(id);

    data = {
      name: data.name,
      email: data.email,
      phone: data.phone,
    };

    return res.status(200).send(data);
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
