var redis = require('redis');

var client = redis.createClient();

client.on("error", function (err) {
    console.log("Error " + err);
});

var DEFAULT_TITLE = '手机归属地查询';

/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: DEFAULT_TITLE })
};

/*
* GET query
*/
exports.query = function(req, res){
  var num = req.params.number;
  console.log("查询的手机号："+ num);
  
  if (num.length < 7) {
    res.render('result' , {title: DEFAULT_TITLE,  errorMsg: '必须填入手机号的前7位'});
  }
  console.log('test');
  //1300002
  client.hgetall(num.substr(0,7) , function (err, obj) {
      console.dir(obj);
      res.render('result', { title: DEFAULT_TITLE , errorMsg: '', number:num, data: obj});
  });
}