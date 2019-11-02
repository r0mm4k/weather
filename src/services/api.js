import * as axios from 'axios';

class ApiService {
	constructor(BASE_URL, KEY) {
		this._apiKey = KEY;
		this._initialAPI = axios.create({baseURL: BASE_URL});
	}

	_imgURL = 'https://openweathermap.org';
	_mapURL = 'https://www.google.com/maps/@?api=1&map_action=map&zoom=10';

	_getResource = async (endpoint) => {
		const res = await this._initialAPI.get(endpoint);
		return res.data;
	};

	getWeather = async (city) => {
		const res = await this._getResource(`/find?q=${city}&units=metric&appid=${this._apiKey}`);
		if (!res.count) throw new Error('Not found! Try again!');
		return res.list
			.reduce((acc, item) => { //del dublicate api
				if (acc.some((el) => el.sys.country === item.sys.country)) {
					return acc;
				}
				return [...acc, item]
			}, [])
			.map((item) => this._transformWeather(item)); //transform object weather
	};

	_transformWeather = (item) => {
		return {
			id: item.id,
			name: item.name,
			country: item.sys.country,
			temp: item.main.temp.toFixed(),
			humidity: item.main.humidity,
			pressure: item.main.pressure,
			speed: item.wind.speed,
			clouds: item.clouds.all,
			map: `${this._mapURL}&center=${item.coord.lat},${item.coord.lon}`,
			description: item.weather[0].description,
			img: `${this._imgURL}/img/wn/${item.weather[0].icon}@2x.png`,
			flag: `${this._imgURL}/images/flags/${item.sys.country.toLowerCase()}.png`,
			time: new Date().toLocaleDateString() + ' - ' + new Date().toLocaleTimeString()
		};
	};
}

export const apiService = new ApiService('https://api.openweathermap.org/data/2.5', 'd838706376fb2260023051be6c319ef7');