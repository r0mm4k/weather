export const search = (items, search) => {
	if (!search) return [];
	return items.filter((item) => item.toLowerCase().indexOf(search.toLowerCase().trim()) > -1)
};