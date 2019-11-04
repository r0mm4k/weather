import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../redux/actions';

import { search } from '../utils/search-item';

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

const mapStateToProps = ({searchData, status, weathers}) => ({
	searchData: searchData.searchData,
	searchHistory: search(searchData.searchHistory, searchData.searchData),
	weathers,
	loading: status.loading,
	error: status.error
});

export default connect(mapStateToProps, actions)(SearchContainer);

SearchContainer.propTypes = {
	searchData: PropTypes.string,
	changeSearchData: PropTypes.func,
	weathers: PropTypes.arrayOf(PropTypes.object),
	submitForm: PropTypes.func,
	searchHistory: PropTypes.arrayOf(PropTypes.string),
	loading: PropTypes.bool
};