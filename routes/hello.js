
/*
 * GET home page.
 */

exports.view = function(req, res){
  var nameToShows = req.params.userName;
  res.render('index', {
  	'name': nameToShow,
  });
};
