const setSearchHistory = (item) => {
	if (localStorage.searchHistory) {
		const history = JSON.parse(localStorage.getItem('searchHistory'));
		localStorage.searchHistory = JSON.stringify([...history, item]);
	} else {
		localStorage.searchHistory = JSON.stringify([item]);
	}
};

const getSearchHistory = () => {
	if (localStorage.searchHistory) {
		return JSON.parse(localStorage.getItem('searchHistory')).reverse();
	}
	return [];
};

export {
	setSearchHistory,
	getSearchHistory
};