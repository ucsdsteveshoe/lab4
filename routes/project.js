
/*
 * GET project page.
 * From slide 40.
 */

exports.viewProject = function(req, res){
  var name = req.params.name;
  console.log("The project name is: " + name);
  res.render("project", {
    "projectName": name
  });
};