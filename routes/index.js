/*
 * GET home page.
 */
var labs = require('../labs.json');

exports.view = function(req, res){

  res.render('index', {
  'labs': labs
  });

  /*
  if(labs.length < 9) {
  	var todaysLab = [{
		"id": "lab-9",
		"title": "Debugging 101",
		"date": "March 7",
		"image": "debug.png"
	}];


  	labs.push(todaysLab);
  }
  */
};
