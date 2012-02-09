#!/bin/sh
##HMSET key field value [field value ...]

cat ./db/data.csv | awk -F "|" "BEGIN {x=1} {print \"HMSET\", \$1, \"telecom\", \$2, \"area\", \$3 ; x++ }" | redis-cli > /dev/null 


echo 'import data finished.'
echo 'try it now: '
echo '	$ redis-cli HGET 1300002 area'
echo '    "安徽巢湖"'
