const express = require("express");
const auth = require("../middleware/auth");

// models
const Cell = require("../models/cell");

const router = new express.Router();

router.post("/cells/create", async (req, res) => {
  const cell = new Cell({
    ref: req.body.ref,
    Sheet: req.body.sheetId,
    value: req.body.value,
    font: req.body.font,
    fontSize: req.body.fontSize
  });

  try {
    await cell.save();
    res.status(201);
    res.send("Cell added");
  } catch (e) {
    console.log(e);
    res.status(400);
    res.send(e);
  }
});

router.get("/cells", async (req, res) => {
  try {
    let sheetId = req.body.sheetId;
    const sheetCells = await Cell.find({ Sheet: sheetId });
    // const cells = await Cell.find();
    // single.populate("user").execPopulate(function(err) {
    //   console.log(single.user.email);
    // });

    res.send({ sheetCells });
  } catch (e) {
    res.status(400);
    res.send(e);
  }
});

module.exports = router;
