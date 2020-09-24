/**
 * http://usejsdoc.org/
 */

var express = require('express');
var router = express.Router();
	
router.post('/', function(req, res){
	res.status(200).json(		
		{
			"name" : "NodejsTest",
		}
	);	
});

router.get('/test/:id', function(req, res){
	let id = req.params.id;
	res.status(200).json(		
			{

				"id" : id,
			}
	);	
});


module.exports = router;