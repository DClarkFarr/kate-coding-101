var express = require("express");

var router = express.Router();

router.get("/todo", function (req, res) {
    res.json({
        todos: [
            { id: 23, name: "your mom" },
            { id: 24, name: "your dad" },
        ],
    });
});

router.get("/todo/:id", function (req, res) {
    var id = req.params.id;
    res.json({
        id,
        name: "ticket " + id,
    });
});

router.get("/todo", function (req, res) {
    res.json({
        id: 25,
        name: "created ticket 25",
    });
});

module.exports = router;
