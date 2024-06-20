const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const router = require("./src/routes");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", router);

app.use("/", (req, res) => {
  res.send("Hello world");
});

app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});

app.listen(process.env.SERVER_PORT || 3002, () => {
  console.log(`Listening on port ${process.env.SERVER_PORT || 3002}`);
});
