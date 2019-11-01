export const normalizeCity = (city) => {
	return (city.trim()[0].toUpperCase() + city.trim().toLowerCase().slice(1)).trim();
};