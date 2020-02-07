const express = require("express");

// models
const User = require("../models/user");

const router = new express.Router();

router.post("/api/users", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201);
    res.send({ user, token });
    console.log("User added");
  } catch (e) {
    console.log("Failed to add user");
    res.status(400);
    res.send(e);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (e) {
    res.status(400);
    res.send();
  }
});

module.exports = router;
