###简介 
手机归属地查询接口


###依赖
* node.js
* [restify](http://mcavage.github.com/node-restify)
* redis-server
* sqlite3 (可选)


###安装部署
首先安装`redis-server`，如果有`brew`

	brew install redis


同时安装`hiredis`可获得更高的性能

	brew install hiredis


安装依赖库 

	cd moquery
	npm install -d 

启动`redis-server`，导入数据
	
	./bin/export_to_csv.sh
	./bin/import_to_redis.sh


启动HTTP服务
	
	node app.js

通过`curl`命令测试
	
	curl -is http://localhost:3000/mobile/13800138000
	
	curl -is http://localhost:3000/mobile/19012312312334


###关于数据
归属地数据库从网上下载，共包含`249145`条记录。
`telocation.db`是下载的原始sqlite数据文件
`data.csv`是从`telocation.db`导出的`csv`文本格式

可以通过以下命令重新生成

	./bin/export_to_csv.sh

执行后`./db/data.csv`会被覆盖