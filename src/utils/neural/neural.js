import jsonData from './data.json';
import * as brain from 'brain.js';
const network = new brain.recurrent.LSTM();

network.fromJSON(JSON.parse(JSON.stringify(jsonData)));

export default network;
