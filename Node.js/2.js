//加载http核心模块
var http = require("http");
// 使用http.createServer方法建立一个web服务器
// 返回一个Server实例
var server = http.createServer();
//服务器要干嘛？ 提供服务
//注册request请求事件，然后执行第二个参数：事件处理函数有两个参数
//            Request 请求对象
//            请求对象可以用来获取客户端的一些请求信息，例如请求路径
//            Response 响应对象
//            响应对象可以用来给客户端发送响应消息
server.on("request", function (request, response) {
	console.log("收到客户端的的请求了,请求路径是：" + request.url);
	// response 对象有一个方法：write 可以用来给客户端发送响应数据
	// write 可以使用多次，但是最后一定要使用 end 来结束响应，否则客户端会一直等待
	response.write("hello");
	response.write("   nodejs");
	response.end();
});
//绑定端口号，启动服务器
server.listen(3000, function () {
	console.log("服务器启动成功了，可以通过 http://127.0.0.1:3000/  来访问了");
});
