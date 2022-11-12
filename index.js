const express = require("express");
const cors = require("cors");
// file upload handlers
const multer = require("multer");
const upload = multer({ dest: "./uploads" });
const app = express();

// routes
const csvRoute = require("./routes/converter");

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use("/api", upload.single("file"), csvRoute);

const port = 4000;
const start = async () => {
  app.listen(port, () => {
    console.log(`App running on port ${port} ......`);
  });
};
start();
