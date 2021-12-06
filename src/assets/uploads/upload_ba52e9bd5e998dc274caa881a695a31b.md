# MongoDb

## 1.NoSql 介绍

NoSQL(NoSQL = Not Only SQL), 意即“不仅仅是SQL”，它指的是非关系型的数据库，是以`key-value`形式存储，和传统的关系型数据库不一样，不一定遵循传统数据库的一些基本要求，比如说遵循`SQL标准`ACID属性、表结构等等。NoSQL 最早被提出实在20世纪80年代，在当时更多是强调的是与关系数据库区别对待，最近这些年被提及的更多是强调协助解决大数据等相关问题。NoSQL在大数据时代有自己的意义。

### 1.1 NoSQL 应用情况介绍

国内的互联网蓬勃发展，不仅涌现出 BAT（百度，阿里巴巴，腾讯）之类的巨头，也带动了整个互联 网行业的发展，大量的创业型公司如春笋般的涌出，在国家层面也提出了“互联网+”和“万众创业”的口 号。更多传统的行业也开始拥抱互联网。但是无论是做所谓的生态平台还是传统业务的转型，涉及到的业 务是多种多样的。这个时候企业架构师对于应用系统的核心——数据库管理 不仅有传统的 SQL 选项也有了 NoSQL 这种适合特定场景需求的选项。

**NoSQL 数据库在以下的这几种情况下比较适用：**

1. 数据模型比较简单；
2. 需要灵活性更强的IT系统；
3. 对数据库性能要求较高；
4. 不需要高度得到数据一致性；
5. 对于给定的key，比较容易映射复杂值的环境。

### 1.2 NoSQL 发展

**国外** : Google 的 BigTable 和 Amazon 的 Dynamo 使用的就是 NoSQL 型数据库。

**国内** : 百度、阿里、腾讯、新浪微博、视觉中国、优酷运营数据分析、飞信空间、豆瓣社区等..

### 1.3 NoSQL 和传统数据库简单对比

非结构型数据库。**没有行、列的概念。用 JSON 来存储数据。 集合就相当于“表”，文档就相当于“行”**。

![](https://www.hualigs.cn/image/614fe21a765b5.jpg)

## 2.MongoDB 介绍

MongoDB 是一个介于关系型数据库和非关系型数据库之间的产品，**是非关系数据库当中功能最丰富，最像关系数据库的 NOSQL 数据库**。他支持的数据结构非常松散，是类似 json 和 bson 格式，因此可以存储比较复杂的数据类型。MongoDb 最大的特点就是他**支持的查询语言非常强大**，其语法有点类似于面向对象的查询语 言，几乎可以实现类似关系数据库单表查询的绝大部分功能，而且还支持对数据建立索引。它的特点是高 性能、易部署、易使用，存储数据非常方便。

## 3.MongoDB 数据库创建、删除、表（集合） 创建删除、数据的增、删、改、查

### 3.1 连接数据库

```
// 连接数据库
mongo
// 清屏
cls
// 查看所有数据库列表
show dbs
```

### 3.2 创建数据库、查看、删除数据库

<img src="https://www.hualigs.cn/image/6150158caeba3.jpg"/>

1. 使用数据库、创建数据库

   ```
   use itying
   ```

   如果真的想把这个数据库创建成功，那么必须插入一个数据。 数据库中不能直接插入数据，只能往集合(collections)中插入数据。下面命令表示给 itying 数 据库的 user 表中插入数据。

   ```
   db.user.insert({"name":"xiaoming"})
   ```

2. 查看数据库

   ```
   show dbs
   ```

3. 显示当前的数据集合(mysql中叫表)

   ```
   show collections
   ```

4. 删除集合，删除指定的集合 删除表

   ```
   删除集合 db.COLLECTION_NAME.drop()
   db.user.drop()
   ```

5. 删除数据库，删除当前所在的数据库

   ```
   db.dropDatabase()
   ```

### 3.3 查找数据

1. 查询所有记录

   ```
   db.user.find()
   ```

   相当于：select * from user;

2. 查询去掉后的当前聚集集合中的某列的重复数据

   ```
   db.user.distinct("name")
   ```

   会过滤掉 name 中的相同数据

   相当于: select distict name from user;

3. 查询 age = 22 的记录

   ```
   db.user.find({"age":22})
   ```

   相当于：select * from user where age = 22

4. 查询 age > 22 的记录

   ```
   db.user.find({age: {$gt: 22}})
   ```

   相当于：select * from user where age <22

5. 查询 age < 22 的记录

   ```
   db.user.find({age: {$lt: 22}})
   ```

   相当于：select * from user where age <22

6. 查询 age >= 25 的记录

   ```
   db.user.find({age: {$gte: 25}})
   ```

   相当于：select * from user where age >= 25

7. 查询 age <= 25 的记录

   ```
   db.user.find({age: {$lte: 25}})
   ```

8. 查询 age >= 23 并且 age <= 26 注意书写格式

   ```
   db.user.find({age: {$gte: 23, $lte: 26}})
   ```

9. 查询 name 中包含 mongo 的数据 模糊查询用于搜索

   ```
   db.user.find({name: /mongo/})
   ```

   //相当于%% select * from user where name like ‘%mongo%

10. 查询 name 中以 mongo 开头的

    ```
    db.user.find({name: /^mongo/})
    ```

    select * from user where name like ‘mongo%'

11. 查询指定列 name、age 数据

    ```
    db.user.find({}, {name: 1, age: 1})
    ```

    相当于： select name , age from user

    当然 name 也可以用 true 或 false,当用 ture 的情况下河 name:1 效果一样，如果用 false 就 是排除 name，显示 name 以外的列信息。

12. 查询指定列 name、age 数据, age > 25

    ```
    db.user.find({age: {$gt: 25}}, {name: 1, age: 1})
    ```

    相当于：select name, age from user where age >25

13. 按照年龄排序 1 升序 -1 降序

    升序：

    ```
    db.user.find().sort({age: 1})
    ```

    降序：

    ```
    db.user.find().sort({age: -1})
    ```

14. 查询 name = zhangsan, age = 22 的数据

    ```
    db.user.find({name: 'zhangsan', age: 22})
    ```

    相当于：select * from user where name = ‘zhangsan’ and age = ‘22’

15. 查询前 5 条数据

    ```
    db.user.find().limit(5)
    ```

    相当于：selecttop 5 * from user

16. 查询 10 条以后的数据

    ```
    db.user.find().skip(10)
    ```

17. 查询在 5-10 之间的数据

    ```
    db.user.find().limit(10).skip(5)
    ```

    可用于分页，limit 是 pageSize，skip 是(page-1)*pageSize

18. or 与 查询

    ```
    db.user.find({$or: [{age: 22}, {age: 25}]})
    ```

    相当于：select * from user where age = 22 or age = 25

19. findOne 查询第一条数据

    ```
    db.user.findOne()
    ```

    相当于：selecttop 1 * from user; db.user.find().limit(1)

20. 查询某个结果集的记录条数 统计数量

    ```
    db.user.find({age: {$gte: 25}}).count()
    ```

    相当于：select count(*) from user where age >= 20; 如果要返回限制之后的记录数量，要使用 count(true)或者 count(非 0) db.users.find().skip(10).limit(5).count(true)

### 3.4 修改数据

修改里面还有查询条件。你要改谁，就告诉mongo。

查找名字叫做小明的，把年龄更改为 16 岁：

```
db.student.update({"name":"小明"},{$set:{"age":16}})
```

查找数学成绩是 70，把年龄更改为 33 岁：

```
db.student.update({"score.shuxue":70},{$set:{"age":33}})
```

更改所有匹配项目：在后面加上 multi : true 即可

```
db.student.update({"sex":"男"},{$set:{"age":33}},{multi: true})
```

完整替换，不出现$set 关键字了： 注意

```
db.student.update({"name":"小明"},{"name":"大明","age":16})
```

### 3.5 删除数据

```
db.collectionsNames.remove( { "borough": "Manhattan" } )
db.users.remove({age: 132})
```

```
db.restaurants.remove( { "borough": "Queens" }, { justOne: true } )
```

## 4.MongoDb 大数据查询优化、 MongoDB 索引、复合索引、唯一索引、 explain 分 析查询速度

### 4.1 索引基础

索引是对数据库表中一列或多列的值进行排序的一种结构，可以让我们查询数据库变得更快。MongoDB的索引几乎与传统的关系型数据库一摸一样，这其中也包括一些基本的查询优化技巧。

下面是创建索引的命令:

```
db.user.ensureindex({"username":1})
```

获取当前集合的索引:

```
db.user.getindexes()
```

删除索引的命令是：

```
db.user.dropindex({"username":1})
```

在 MongoDB 中，我们同样可以创建复合索引，如： 数字 1 表示 username 键的索引按升序存储，-1 表示 age 键的索引按照降序方式存储。

```
db.user.ensureIndex({"username":1, "age":-1})
```

该索引被创建后，基于 username 和 age 的查询将会用到该索引，或者是基于 username 的查询也会用到该索引，**但是只是基于 age 的查询将不会用到该复合索引。因此可以说， 如果想用到复合索引，必须在查询条件中包含复合索引中的前 N 个索引列。**然而如果查询 条件中的键值顺序和复合索引中的创建顺序不一致的话，MongoDB 可以智能的帮助我们调 整该顺序，以便使复合索引可以为查询所用。如：

```
db.user.find({"age": 30, "username": "stephen"})
```

对于上面示例中的查询条件，MongoDB 在检索之前将会动态的调整查询条件文档的顺 序，以使该查询可以用到刚刚创建的复合索引。 对于上面创建的索引，MongoDB 都会根据索引的 keyname 和索引方向为新创建的索引 自动分配一个索引名，**下面的命令可以在创建索引时为其指定索引名**，如

```
db.user.ensureIndex({"username":1},{"name":"userindex"})
```

**随着集合的增长，需要针对查询中大量的排序做索引。如果没有对索引的键调用 sort， MongoDB 需要将所有数据提取到内存并排序。因此在做无索引排序时，如果数据量过大以 致无法在内存中进行排序，此时 MongoDB 将会报错。**

### 4.2 唯一索引

在缺省情况下创建的索引均不是唯一索引。下面的示例将创建唯一索引，如：

```
db.user.ensureindex({"userid":1},{"unique:true"})
```

如果再次插入 userid 重复的文档时，MongoDB 将报错，以提示插入重复键，如:

```
db.user.insert({"userid":5})
db.user.insert({"userid":5})
```

如果插入的文档中不包含 userid 键，那么该文档中该键的值为 null，如果多次插入类似 的文档，MongoDB 将会报出同样的错误，如：

```
db.user.insert({"userid1":5})
db.user.insert({"userid1":5})
```

如果在创建唯一索引时已经存在了重复项，我们可以通过下面的命令帮助我们在创建唯 一索引时消除重复文档，仅保留发现的第一个文档，如： 先删除刚刚创建的唯一索引。

```
db.user.dropIndex({"userid":1}
```

插入测试数据，以保证集合中有重复键存在。

```
db.user.remove()
db.user.insert({"userid":5})
db.user.insert({"userid":5})
```

重新创建唯一索引

```
db.user.ensureIndex({"userid":1},{"unique":true })
```

我们同样可以创建复合唯一索引，即保证复合键值唯一即可。如：

```
db.user.ensureIndex({"userid":1,"age":1},{"unique":true})
```

### 4.3 索引的一些参数

| Parameter  | Type    | Description                                                  |
| ---------- | ------- | ------------------------------------------------------------ |
| background | Boolean | 建索引过程会阻塞其它数据库操作，background可指定以后台方式创建索引，即增加"background"可选参数。"background"默认值为false |
| unique     | Boolean | 建立的索引是否唯一。指定为true创建唯一索引。默认值为false    |
| name       | string  | 索引的名称。如果未指定，MongoDB的通过连接索引的字段和排序顺序生成一个索引名称 |
| dropDups   | Boolean | 在建立唯一索引时是否删除重复记录，指定true创建唯一索引。默认值为false |

如果在为已有数据的文档创建索引时，可以执行下面的命令，**以使 MongoDB 在后台创 建索引**，这样的创建时就不会阻塞其他操作。但是相比而言，以阻塞方式创建索引，会使整 个创建过程效率更高，但是在创建时 MongoDB 将无法接收其他的操作。

```
db.user.ensureIndex({"username":1},{"background":true})
```

### 4.4 使用 explain

explain 是非常有用的工具，会帮助你获得查询方面诸多有用的信息。只要对游标调用该方法，就可以得到查询细节。explain会返回一个文档，而不是游标本身。

explain 会返回查询使用的索引情况，耗时和扫描文档数的统计信息。

### 4.5 explain executionStats 查询具体的执行时间

```
db.tablename.find().explain( "executionStats" )
关注输出的如下数值：explain.executionStats.executionTimeMillis
```

## 5.Mongodb 账户权限配置

### 5.1 创建一个超级管理用户

```
use admin
db.createUser({
user:'admin', pwd:'123456', roles:[{role:'root',db:'admin'}]
})
```

### 5.2 修改 MongoDB 数据库配置文件

路径:在安装目录下的 bin 文件夹 的 mongod.fig 文件

```
配置：
security:
  authorization: enabled // 注意规范 空两格

```

### 5.3 重启 MongoDB 服务

![](https://www.hualigs.cn/image/6150411b6f4f0.jpg)

### 5.4 用超级管理员账户连接数据库

```
mongo admin -u 用户名 -p 密码
mongo 192.168.1.200:27017/test -u user -p password
```

### 5.5 MongoDB 账户权限配置中常用的命令

```
show users; // 查看当前库下的用户

db.dropUser("admin") // 删除用户

db.updateUser("admin",{pwd:"password"}) // 修改用户密码

db.auth("admin","password")  //密码认证
```

### 5.6 连接数据库时需要配置用户密码

```js
const url = 'mongodb://admin:123456@localhost:27017/'
```

## 6.关系型数据库表(集合)与表(集合)之间的几种关系

### 6.1 简述关系数据库中表与表的3中2关系

1. 一对一的关系

   例如：一个人对应一个唯一的身份证号，即为一对一得到关系

2. 一对多关系

   例如：一个班级对应多名学生，一个学生只能属于一个班级，即为一对多关系

3. 多对多关系

   例如：一个学生可以选多门课程，而一门课程可以被多个学生选修，彼此的对应关系 即是多对多关系

### 6.2 一对一关系

![](https://www.hualigs.cn/image/615050a11ccc8.jpg)

### 6.3 一对多的关系

![](https://www.hualigs.cn/image/6150515a226b9.jpg)

![](https://www.hualigs.cn/image/6150517e5dbe3.jpg)

### 6.4 多对多的关系

![](https://www.hualigs.cn/image/615051afd382c.jpg)

## 7.MongoDB 聚合管道（Aggregation Pipeline）

使用聚合管道可以对集合中的文档进行变换组合。

**实际项目**: 表关联查询、数据统计

MongoDB 中使用 db.COLLECTION_NAME.aggregate([{},...]) 方法来构建和使用聚合管道。

### 7.1 MongoDB Aggregation 管道操作符与表达式

| 管道操作符 | Description                                        |
| :--------- | :------------------------------------------------- |
| $project   | 增加、删除、重命名字段                             |
| $match     | 条件匹配。只满足条件的文档才能进入下一阶段         |
| $limit     | 限制结果的数量                                     |
| $skip      | 跳过文档的数量                                     |
| $sort      | 条件排序                                           |
| $group     | 条件组合结果 统计                                  |
| $lookup    | $lookup 操作符 用以引入其它集合的数据 (表关联查询) |

**管道表达式：**

管道操作符作为"键"，所对应的"值"叫做管道表达式。

例如{$match:{status:"A"}},$match 称为管道操作符，而 status:"A" 称为管道表达式，是管道操作符的操作树(Operand)。

每个管道表达式是一个文档结构，它是由字段名、字段值、和一些白哦大是操作符组成的。

| 常用表达式操作符 | Description          |
| :--------------- | :------------------- |
| $addToSet        | 将文档阻断的值去重   |
| $max             | 文档指定字段的最大值 |
| $min             | 文档指定字段的最小值 |
| $sum             | 文档指定字段求和     |
| $avg             | 文档指定字段求平均   |
| $gt              | 大于给定值           |
| $lt              | 小于给定值           |
| $eq              | 等于给定值           |

### 7.2 数据模拟

```
db.order.insert({"order_id":"1","uid":10,"trade_no":"111","all_price":100,"all_num":2})
db.order.insert({"order_id":"2","uid":7,"trade_no":"222","all_price":90,"all_num":2})
db.order.insert({"order_id":"3","uid":9,"trade_no":"333","all_price":20,"all_num":6})
db.order_item.insert({"order_id":"1","title":"商品鼠标 1","price":50,num:1})
db.order_item.insert({"order_id":"1","title":"商品键盘 2","price":50,num:1})
db.order_item.insert({"order_id":"1","title":"商品键盘 3","price":0,num:1})
db.order_item.insert({"order_id":"2","title":"牛奶","price":50,num:1})
db.order_item.insert({"order_id":"2","title":"酸奶","price":40,num:1})
db.order_item.insert({"order_id":"3","title":"矿泉水","price":2,num:5})
db.order_item.insert({"order_id":"3","title":"毛巾","price":10,num:1})
```

### 7.3 $project

修改文档的结构，可以用来重命名、增加或删除文档中的字段。

要查找 order 只返回文档中 trade_no 和 all_price 字段

```
db.order.aggregate([
	{
		$project:{ trade_no:1, all_price:1 }
	}
])
```

![](https://www.hualigs.cn/image/61512d1d29052.jpg)

### 7.4 $match

用于过滤文档。用法类似于 find() 方法中的参数。

```
db.order.aggregate([
	{	
		$project:{ trade_no:1, all_price:1 }
	}, 
	{
		$match:{"all_price":{$gte:90}}
	}
])
```



![](https://www.hualigs.cn/image/61512eb6cb855.jpg)

### 7.5 $group

将集合中的文档进行分组，可用于统计结果。

统计每个订单的数量，按照订单号分组

```
db.order_item.aggregate(
	[
		{
			$group: {_id: "$order_id", total: {$sum: "$num"}}
		}
	]
)
```

![](https://www.hualigs.cn/image/6151303289144.jpg)

### 7.6 $sort

将集合中的文档进行排序

```
db.order.aggregate([
	{
		$project:{ trade_no:1, all_price:1 }
	}, 
	{
		$match:{"all_price":{$gte:90}}
	}, 
	{
		$sort:{"all_price":-1}
	}
])
```

![](https://www.hualigs.cn/image/615130d3e7e48.jpg)

### 7.7 $limit

限制结果的数量

```
db.order.aggregate([
	{
		$project:{ trade_no:1, all_price:1 }
	}, 
	{
		$match:{"all_price":{$gte:90}}
	}, 
	{
		$sort:{"all_price":-1}
	}, 
	{
		$limit:1
	}
])
```

### 7.8 $skip

跳过文档的数量

```
db.order.aggregate([
	{
		$project:{ trade_no:1, all_price:1 }
	}, 
	{
		$match:{"all_price":{$gte:90}}
	}, 
	{
		$sort:{"all_price":-1}
	},
	{
		$skip:1
	}
])
```

### 7.9 $lookup 表关联

**from**：要关联的表

**localField**：主表id

**foreignField**：关联表id

**as**：查询完成的数据放的位置

```
db.order.aggregate([
	{
		$lookup:
		{
			from: "order_item", 
			localField: "order_id", 
			foreignField: "order_id", 
			as: "items"
		}
	}
])
```

