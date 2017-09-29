var express = require('express');
var router = express.Router();
var fs = require('fs');
var nodeExcel = require('excel-export');

function writeXls(studentInfo) {
	var confs = [];
	const conf = JSON.parse(studentInfo);
	conf.name = 'sheet01';
	confs.push(conf);
	var result = nodeExcel.execute(confs);
	fs.writeFileSync("public/student.csv", result, 'binary');
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/uploadStudent', function(req, res, next) {
	const { studentInfo } = req.body;
	if (studentInfo) {
    writeXls(studentInfo);
	}
});

module.exports = router;
