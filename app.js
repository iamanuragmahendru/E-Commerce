const path = require("path");
const express = require("express");

const app = express();
const port = 3000;

const db = require("./data/database");
const authRoutes = require("./routes/auth.routes");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use(authRoutes);

db.connectToDatabase()
  .then(() => {
    app.listen(port, () =>
      console.log(`Example app listening on port ${port}!`)
    );
  })
  .catch((err) => {
    console.log("Failed to connect to the database!");
    console.log(err);
  });
