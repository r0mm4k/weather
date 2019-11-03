const fuzzyString = (mistake, term, ratio) => {
	const string = mistake.toLowerCase();
	const compare = term.toLowerCase();
	let matches = 0;
	if (string.indexOf(compare) > -1) return true;
	for (let i = 0; i < compare.length; i++) {
		string.indexOf(compare[i]) > -1 ? matches += 1 : matches -= 1;
	}
	return (matches / mistake.length >= ratio || term === "")
};

export const fuzzySearch = (text, arr) => {
	return arr.find((el) => fuzzyString(el, text, 0.70)) || text;
};