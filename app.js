const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");
const app = express();

const auth = require("./router/auth");
const instansi = require("./router/instansi");
const user = require("./router/user");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(compression());
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);
app.use(cors({
  origin: true,
  credentials: true,
}));

app.use("/", auth);
app.use("/instansi", instansi);
app.use("/profile", user);

module.exports = app;