export const searchDublicate = (item, arr) => {
	return !!arr.find((el) => el.toLowerCase() === item.toLowerCase());
};