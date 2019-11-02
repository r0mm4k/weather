import React from 'react';

const Search = ({searchData = '', changeSearchData, submitForm, searchHistory = [], loading}) => {

	const onChangeValue = ({target: {value}}) => {
		changeSearchData(value);
	};
	const onSubmitForm = (e) => {
		e.preventDefault();
		submitForm(searchData);
	};

	const onClickHistory = (e) => {
		e.preventDefault();
		submitForm(e.target.getAttribute('data-city'));
	};

	const isDisabledButton = !searchData || loading;
	const hasHistory = searchHistory.map((city, i) => (
		<li key={i} className='list-group-item'>
			<a data-city={city} onClick={onClickHistory} className='text-dark d-block' href='/'>{city}</a>
		</li>));

	return (
		<section className='search-form'>
			<form onSubmit={onSubmitForm}>
				<div className='input-group'>
					<input type='text' className='form-control' name='text' list='cities' placeholder='Add a city...'
								 value={searchData} onChange={onChangeValue} autoComplete='off' required/>
					<div className='input-group-append'>
						<button className='btn btn-primary' disabled={isDisabledButton}>Search</button>
					</div>
				</div>
			</form>
			<ul className='list-group mt-2 mb-2'>
				{hasHistory}
			</ul>
		</section>
	);
};

export default Search;