var port = 3535;
var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");

var app = express();

var todoRouter = require("./routes/todo");

app.use(
    cors({
        credentials: true,
    })
);

app.use(todoRouter);

app.use(bodyParser.json());
app.use(cookieParser());

app.listen(port, function () {
    console.log("listening on port", port);
});
