const express = require("express");

// start db
require("./db/mongoose");

// Routes
const 
const userRouter = require('./routes/userRoutes');
// const foodRouter = require('./routes/foodRoutes');
// const orderRouter = require('./routes/orderRoutes');

const app = express();
const port = process.env.PORT || 3001;

// Convert incoming json to javascript object
app.use(express.json());
// app.use(userRouter);
// app.use(foodRouter);
// app.use(orderRouter);

app.listen(port, () => {
  console.log("Server is up on " + port);
});
