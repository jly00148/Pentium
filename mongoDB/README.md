# mongodb使用说明：

## `mongodb官网`：https://www.mongodb.com/
## `mongodb安装官网`: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/
## `下载社区版`：https://www.mongodb.com/download-center/community?jmp=docs (mongoDB Download Center)
## `官方手册`：https://docs.mongodb.com/manual/reference/
## `中文文档`： http://www.mongodb.org.cn/tutorial/

### `安装步骤`：
installation->install on Windows->install using msiexec.exe->mongoDB Download Center

### `注意点`：
傻瓜式安装注意service configuration(配制服务)对话框选中install MongoDB as a service,其他默认，一般安装在C：Program files/MongoDB/server/4.0/data/

### `配制环境变量步骤` (在任意终端中可以找到输入的指令)：
右击我的电脑找到属性->高级系统设置->环境变量->系统变量->Path->编辑环境变量->把下载的MongoDB所在的路径地址复制到新建里面->确定后配制成功。
在C盘建立一个data文件夹，data文件里面再建一个db文件夹用来默认存放数据。

### `mongodb常用命令`：
新建数据库：use xxxs
显示数据库：show dbs
切换数据库：use xxx
删除数据库：db.dropDatabase()

插入数据：db.xxxs.insert({name:'xxx',age:18})
查看数据：db.xxxs.find()
新增和修改数据：db.xxxs.save({}) (是否有_id) 有_id是修改，无_id是新增。

查询返回值：
skip：db.xxxs.find.skip(num) 跳过第num条记录
limit:db.xxxs.find.limit(num) 只显示前num条记录
toArray:db.xxxs.find.toArray() 把记录转成数组形式
length/count:db.xxxs.find.length/count() 数据记录的条数
sort:db.xxxs.find.sort({age:1,major:-1}) 升序，反之降序
findOne:db.xxxs.find.findOne({"name",age:18}) 返回第一个查找到的数据

比较查询操作符：
等于：db.xxxs.find({age:18})
小于:db.xxxs.find({age:{$lt:18}})
小于等于：db.xxxs.find({age:{$lte:18}})
大于：db.xxxs.find({age:{$gt:18}})
大于等于：db.xxxs.find({age:{$gte:18}})
包含:db.xxxs.find(major:{$in:["atr","sport"]})

逻辑查询操作符：
$and:db.xxxs.find($and:[{age:{$lte:18}},{major:{$eq:'sport'}}])
$or:db.xxxs.find($or:[{age:{$lte:18}},{major:{$eq:'sport'}}])
$not:db.xxxs.find($not:{$gte:{age:18}})

查看数据库下集合：show collections = show tables
插入集合：db.xxxs.insert({price:18})
删除集合：db.xxxs.drop()

更新数据：
$set：db.xxxs.update({name:'jly'},{$set:{age:10}}) 找到name为jly的用户，修改他的年龄为10,前一个对象参数为空的时候只匹配第一个数据，增加age:10字段，不能设置所有的数据
$inc:db.users.update({name:'jly'},{$inc:{age:11}}) 找到name为jly的用户，在原来的基础上增加11，同理前一个对象参数为空的时候只匹配第一个数据，不能设置所有的数据
$unset:db.users.update({},{$unset:{age:''}}) 即可删除age字段
$updateMany:db.users.update({},{$set:{age:88}}) 更新多条数据

删除数据：
remove:db.users.remove({age:18},true) 加true是删除一条符合条件的一条数据，不加true是删除所有的符合条件的整条数据
deleteOne:db.users.deleteOne({age:18})

### `启动指定数据存储路径`：
example --dbpath pentium/mongodb/base/db/