require("dotenv").config();
// comment to push stuff again
// tealsdkfa
const express = require("express");
const app = express();

const rating = require("./controllers/ratingsController");
const user = require("./controllers/userController");
const profile = require("./controllers/profileControler");

const sequelize = require("./db");
sequelize.sync(); // to drop table do {force: true}
app.use(express.json());
app.use(require("./middleware/headers"));

app.use("/user", user);
app.use(require("./middleware/validate-session"));
app.use("/rating", rating);
app.use("/profile", profile);

app.listen(process.env.PORT, () =>
  console.log(`app is listening on ${process.env.PORT}`)
);
