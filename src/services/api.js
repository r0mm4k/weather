import * as axios from 'axios';

class ApiService {
	constructor(BASE_URL, KEY) {
		this._apiKey = KEY;
		this._initialAPI = axios.create({baseURL: BASE_URL});
	}

	_imgURL = 'http://openweathermap.org/img/wn';
	_flagURL = 'https://openweathermap.org/images/flags';

	_getResource = async (endpoint) => {
		const res = await this._initialAPI.get(endpoint);
		return res.data;
	};

	getWeather = async (city) => {
		const res = await this._getResource(`/find?q=${city}&units=metric&appid=${this._apiKey}`);
		if (!res.count) throw new Error('Not found! Try again!');
		return res.list.map((item) => this._transformWeather(item));
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
			description: item.weather[0].description,
			img: `${this._imgURL}/${item.weather[0].icon}@2x.png`,
			flag: `${this._flagURL}/${item.sys.country.toLowerCase()}.png`,
			time: new Date().toLocaleDateString() + ' - ' + new Date().toLocaleTimeString()
		};
	};
}

export const apiService = new ApiService('https://api.openweathermap.org/data/2.5', 'd838706376fb2260023051be6c319ef7');