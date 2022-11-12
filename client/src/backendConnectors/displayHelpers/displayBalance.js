const data = (num, decimal) => {
	const len = num.length;
	const point = len - decimal;
	if (point === 0) {
		num = "0." + num.slice(0, 2);
	} else {
		let temp = num.slice(0, point);
		num = temp + "." + num.slice(point, point + 2);
	}

	return num;
};

export default data;
