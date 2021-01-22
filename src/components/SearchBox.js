import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div ClassName='pa2'>
			<input
				className='pa3 bg-lightest-blue ba b--green' 
				type='search' 	
				placeholder='search robots' 
				onChange = {searchChange}
			/>
		</div>
	);
}

export default SearchBox;