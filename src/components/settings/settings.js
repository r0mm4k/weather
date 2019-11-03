import React from 'react';

import './settings.css'
import { withRouter } from 'react-router-dom';

const Settings = ({history, markFunc, markNeuron, zoom = 1, addZoom, outZoom, setMarkNeuron, setMarkFunc}) => {

	const changeUrl = () => {
		history.push('/');
	};

	const onSave = () => {
		localStorage.setItem('zoom', zoom);
		localStorage.setItem('func', markFunc);
		localStorage.setItem('neuron', markNeuron);
		history.push('/');
	};

	return (
		<section className='card mb-3'>
			<div className='card-header text-center font-weight-bold'>
				<span className='close cursor-pointer' onClick={changeUrl} data-dismiss='alert'>×</span>
				Settings
			</div>
			<div className='card-body'>
				<fieldset>
					<legend>Change application font size:</legend>
					<div className='input-group mb-3'>
						<div className='input-group-prepend'>
							<button disabled={zoom === 1} onClick={outZoom} className='btn btn-outline-primary' type='button'>
								<i className='fas fa-angle-double-left'/>
							</button>
						</div>
						<input disabled type='text' className='form-control text-center'
									 placeholder={`Zoom: ${zoom}x`}/>
						<div className='input-group-append'>
							<button onClick={addZoom} className='btn btn-outline-primary' type='button'>
								<i className='fas fa-angle-double-right'/>
							</button>
						</div>
					</div>
				</fieldset>
				<fieldset>
					<legend>Word correction techniques:</legend>
					<div className='form-group'>
						<div className='custom-control custom-switch'>
							<input type='checkbox' checked={markFunc} className='custom-control-input' id='customSwitch1'
							onChange={setMarkFunc}/>
							<label className='custom-control-label' htmlFor='customSwitch1'>
								Superficial comparison with data from query history (LocalStorage).
							</label>
						</div>
						<div className='custom-control custom-switch'>
							<input type='checkbox' disabled checked={markNeuron} className='custom-control-input' id='customSwitch2'
							onChange={setMarkNeuron}/>
							<label className='custom-control-label' htmlFor='customSwitch2'>
								The neural network will correct mistakes. <sup>(demo)</sup>
							</label>
						</div>
					</div>
				</fieldset>
				<p className='text-center mt-4 block-info'>
					<button type='button' onClick={onSave} className='btn text-align btn-primary'>
						Save
					</button>
				</p>
			</div>
		</section>
	);
};

export default withRouter(Settings);