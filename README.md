###简介 
手机归属地查询

###依赖
* node.js
* express
* redis-server
* sqlite3 (可选)

###安装部署
首先安装`redis-server`，如果有`brew`
	brew install redis

###关于数据
归属地数据库从网上下载，共包含`249145`条记录。
`telocation.db`是下载的原始sqlite数据文件
`data.csv`是从`telocation.db`导出的`csv`文本格式

可以通过以下命令重新生成

	./bin/export_to_csv.sh

执行后`./db/data.csv`会被覆盖