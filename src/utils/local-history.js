const setLocalData = (item, key) => {
	if (localStorage[key]) {
		const data = JSON.parse(localStorage.getItem(key));
		localStorage[key] = JSON.stringify([...data, item]);
	} else {
		localStorage[key] = JSON.stringify([item]);
	}
};

const getLocalData = (key) => {
	if (localStorage[key]) {
		return JSON.parse(localStorage.getItem(key)).reverse();
	}
	return [];
};

export {
	setLocalData,
	getLocalData
};