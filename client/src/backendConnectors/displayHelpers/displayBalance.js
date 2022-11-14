const data = (num, decimal) => {
	if (num == "0") return "0";
	if (decimal == 0) return num;
	let temp = num.toString().length;
	let temp2 = "";
	let temp3 = decimal - temp;
	while (temp3 > 0) {
		temp2 += "0";
		temp3--;
	}
	temp2 = temp2 + num.toString();
	// console.log(temp2)
	num = temp2;
	const len = num.length;
	const point = len - decimal;
	if (point <= 0) {
		num = "0." + num.slice(0, 2);
	} else {
		let temp = num.slice(0, point);
		num = temp + "." + num.slice(point, point + 2);
	}
	if (num > 999999999) {
		num = (num / 1000000000).toFixed(2).toString() + " B";
	}
	if (num > 999999) {
		num = (num / 1000000).toFixed(2).toString() + " M";
	}
	if (num > 999) {
		num = (num / 1000).toFixed(2).toString() + " K";
	}
	return num;
};

export default data;
