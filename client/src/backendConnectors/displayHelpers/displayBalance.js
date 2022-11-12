const data = (num, decimal) => {
	if (num === "0") return 0;

	const len = num.length;
	const point = len - decimal;

	if (point === 0) {
		num = "0." + num.slice(0, 2);
	} else {
		let temp = num.slice(0, point);
		num = temp + "." + num.slice(point, point + 2);
	}
	if (num > 999) {
		num = (num / 1000).toFixed(2).toString() + "K";
	}
	return num;
};

export default data;
