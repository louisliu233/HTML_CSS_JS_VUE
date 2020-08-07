const app = new Vue({
	el: "#app",
	data: {
		books: [
			{
				id: 1,
				name: "《计算机导论》",
				date: "2006-9",
				price: 65,
				count: 1,
			},
			{
				id: 2,
				name: "《数据结构》",
				date: "2004-8",
				price: 48,
				count: 1,
			},
			{
				id: 3,
				name: "《计算机网络》",
				date: "2010-4",
				price: 80,
				count: 1,
			},
			{
				id: 4,
				name: "《javascript高级程序设计》",
				date: "2015-9",
				price: 98,
				count: 1,
			},
		],
	},
	methods: {
		increment(index) {
			this.books[index].count++;
		},
		decrement(index) {
			this.books[index].count--;
		},
		removeHandle(index) {
			this.books.splice(index, 1);
		},
	},
	filters: {
		showPrice(price) {
			return "￥" + price.toFixed(2);
		},
	},
	computed: {
		totalPrice() {
			// let totalPrice = 0;

			// for (let i = 0; i < this.books.length; i++) {
			// 	totalPrice += this.books[i].price * this.books[i].count;
			// }
			// return totalPrice;

			// 2.for in
			// for (i in this.books) {
			// 	totalPrice += this.books[i].price * this.books[i].count;
			// }
			// return totalPrice;

			// 3.for of
			// for (item of this.books) {
			// 	totalPrice += item.price * item.count;
			// }
			// return totalPrice;

			// 4. reduce
			return this.books.reduce(function (pre, book) {
				return pre + book.price * book.count;
			}, 0);
		},
	},
});
