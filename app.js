var restify = require('restify');
var redis = require('redis').createClient();

var server = restify.createServer({
  name: 'moquery',
  version: '0.1.0'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

redis.on("error", function (err) {
    console.log("redis error : " + err);    
});

/**
* 查询手机号归属地
* 输入最少前7位的手机号
*/
server.get('/mobile/:number', function (req, res, next) {
  var num = req.params.number;
  console.log("查询的手机号："+ num);
  //1300002
  redis.hgetall(num.substr(0,7) , function (err, obj) {
      if (err){        
        next(err);
      }
      if (obj.area){
          obj.mobile = num;
          console.dir(obj);        
          res.send(obj);  
      } else {
         res.send(new restify.InvalidArgumentError("找不到对应的归属地")); 
      }
  });
  
  return next();
});

server.listen(3000, function () {
  console.log('%s listening at %s', server.name, server.url);
});


