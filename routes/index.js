
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: '手机归属地查询' })
};