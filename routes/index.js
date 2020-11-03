var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('layout', { title: 'Bé tập tính' });
});

router.post('/', function(req, res, next) {
    const value1 = parseFloat(req.body.num1);
    const value2 = parseFloat(req.body.num2);
    const calculation = req.body.calculation;
    let result;

    let sumChecked;
    let subtractChecked;
    let multipleChecked;
    let divideChecked;

    if (calculation == "sum") {
        result = value1 + value2;
        sumChecked = "checked";
    } else
    if (calculation == "subtract") {
        result = value1 - value2;
        subtractChecked = "checked";
    } else if (calculation == "multiple") {
        result = value1 * value2;
        multipleChecked = "checked";
    } else {
        result = value1 / value2;
        divideChecked = "checked";
    }


    res.render('layout', { title: 'Bé tập tính', value1, value2, result, sumChecked, subtractChecked, multipleChecked, divideChecked });
});
module.exports = router;