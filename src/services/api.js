import * as axios from 'axios';

class ApiService {
	constructor(BASE_URL, KEY) {
		this._apiKey = KEY;
		this._initialAPI = axios.create({baseURL: BASE_URL});
	}

	_imgURL = 'http://openweathermap.org/img/wn';

	_getResource = async (endpoint) => {
		const res = await this._initialAPI.get(endpoint);
		return res.data;
	};

	getWeather = async (city) => {
		const res = await this._getResource(`/weather?q=${city}&appid=${this._apiKey}`);
		return this._transformWeather(res);
	};

	_transformWeather = (item) => {
		return {
			id: Math.floor(Math.random()*1000000000),
			name: item.name,
			country: item.sys.country,
			temp: Math.floor(item.main.temp - 273),
			humidity: item.main.humidity,
			pressure: item.main.pressure,
			speed: item.wind.speed,
			clouds: item.clouds.all,
			description: item.weather[0].description,
			img: `${this._imgURL}/${item.weather[0].icon}@2x.png`,
			time: new Date().toLocaleDateString() + ' - ' + new Date().toLocaleTimeString()
		};
	};
}

export const apiService = new ApiService('http://api.openweathermap.org/data/2.5', 'd838706376fb2260023051be6c319ef7');