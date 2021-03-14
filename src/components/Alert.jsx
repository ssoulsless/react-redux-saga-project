/* eslint-disable react/prop-types */
import React from 'react';

function Alert({ text }) {
	return (
		<div className='alert alert-warning' role='alert'>
			{text}
		</div>
	);
}

export { Alert };
