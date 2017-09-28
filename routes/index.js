var express = require('express');
var router = express.Router();
var fs = require('fs');
var nodeExcel = require('excel-export');

function writeXls(datas) {
    var confs = [];
    var conf = {};
    conf.cols = [{
        caption: 'string',
        type: 'string'
    },
	{
		caption: 'date',
		type: 'date'
	},
	{
		caption: 'bool',
		type: 'bool'
	},
	{
		caption: 'number 2',
		type: 'number'
	}];
    conf.rows = [['hahai', (new Date(Date.UTC(2013, 4, 1))).oaDate(), true, 3.14], ["e", (new Date(2012, 4, 1)).oaDate(), false, 2.7182], ["M&M<>'", (new Date(Date.UTC(2013, 6, 9))).oaDate(), false, 1.2], ["null", null, null, null]];
    for (var i = 0; i < 3; i++) {
        conf = JSON.parse(JSON.stringify(conf));   //clone
        conf.name = 'sheet'+i;
        confs.push(conf);
    }
    var result = nodeExcel.execute(confs);
	fs.writeFileSync("public/Group.csv", result, 'binary');
}

/* GET home page. */
router.get('/', function(req, res, next) {
	writeXls('newdata');
  res.render('index', { title: 'Express' });
});

router.post('/uploadStudent', function(req, res, next) {
  console.log(req);
  // writeXls('newdata');
});

module.exports = router;
