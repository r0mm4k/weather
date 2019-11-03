import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../redux/actions';

import Settings from '../components/settings/settings';

const SettingsContainer = ({zoom, addZoom, markNeuron, markFunc, outZoom, setMarkFunc, setMarkNeuron}) => {

	return (
		<>
			<Settings zoom={zoom} addZoom={addZoom} outZoom={outZoom} markFunc={markFunc} markNeuron={markNeuron}
								setMarkFunc={setMarkFunc} setMarkNeuron={setMarkNeuron}/>
		</>
	);
};

const mapStateToProps = ({settings: {zoom, markFunc, markNeuron}}) => {
	return {zoom, markFunc, markNeuron};
};

export default connect(mapStateToProps, actions)(SettingsContainer);