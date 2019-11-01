import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../redux/actions';

import Search from '../components/search/search';
import InformationIndicator from '../components/information-indicator/information-indicator';

const SearchContainer = ({searchData, error, changeSearchData, weathers, submitForm, searchHistory, loading}) => {
	const hasData = !(loading || searchData.length || weathers.length || error);
	const information = hasData ? <InformationIndicator/> : null;

	return (
		<>
			<Search searchData={searchData} submitForm={submitForm} searchHistory={searchHistory}
							loading={loading} changeSearchData={changeSearchData}/>
			{information}
		</>
	);
};

const mapStateToProps = ({searchData, error, searchHistory, loading, weathers}) => ({
	searchData,
	searchHistory,
	weathers,
	loading,
	error
});

export default connect(mapStateToProps, actions)(SearchContainer);