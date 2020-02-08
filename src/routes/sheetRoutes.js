const express = require("express");
const auth = require("../middleware/auth");

// models
const Sheet = require("../models/sheet");
const User = require("../models/user");

const router = new express.Router();

router.post("/sheets/create", async (req, res) => {
  const sheet = new Sheet({
    title: req.body.title,
    user: req.body.userId
  });

  try {
    await sheet.save();
    res.status(201);
    res.send("Sheet added");
  } catch (e) {
    console.log("Failed to add sheet");
    res.status(400);
    res.send(e);
  }
});

router.get("/sheets", async (req, res) => {
  try {
    const sheets = await Sheet.find({ user: req.body.userId });
    // single.populate("user").execPopulate(function(err) {
    //   console.log(single.user.email);
    // });

    res.send({ sheets });
  } catch (e) {
    res.status(400);
    res.send();
  }
});

module.exports = router;
