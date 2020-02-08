const express = require("express");

// start db
require("./db/connect.js");

// Routes
const userRouter = require("./routes/userRoutes");
const sheetRouter = require("./routes/sheetRoutes");
const cellRouter = require("./routes/cellRoutes");

const app = express();
const port = process.env.PORT || 3001;

// Convert incoming json to javascript object
app.use(express.json());
app.use(userRouter);
app.use(sheetRouter);
app.use(cellRouter);

app.listen(port, () => {
  console.log("Server is up on " + port);
});
