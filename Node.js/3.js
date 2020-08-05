var http = require("http");
var server = http.createServer();
server.on("request", function (req, rep) {
	console.log("收到了请求，请求的路径是：" + req.url);
	// rep.write("hello world");
	// 上面的方式比较麻烦，推荐使用更简单的方式，直接 end 的同时发送响应数据
	// res.end('hello nodejs')
	// rep.end("     nodejs");

	// 根据不同的请求路径发送不同的响应结果
	// 1. 获取请求路径
	//    req.url 获取到的是端口号之后的那一部分路径
	//    也就是说所有的 url 都是以 / 开头的
	// 2. 判断路径处理响应
	var url = req.url;
	if (url === "/") {
		rep.end("index page");
	} else if (url === "/login") {
		rep.end("login page");
	} else if (url === "/products") {
		var products = [
			{
				name: "苹果 X",
				price: 8888,
			},
			{
				name: "菠萝 X",
				price: 5000,
			},
			{
				name: "小辣椒 X",
				price: 1999,
			},
		];

		// 响应内容只能是二进制数据或者字符串
		//  数字 对象 数组 布尔值都不行
		res.end(JSON.stringify(products));
	} else {
		rep.end("404 Not Found.");
	}
});

server.listen(3000, function () {
	console.log("服务器启动成功了，你可以通过http://127.0.0.1:3000/ 来访问了");
});
