import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function CloseButton({ show, setOpen }) {
	return (
		<div
			className={`admin-sidebar__close ${!show ? 'd-none' : ''}`}
			onClick={() => setOpen(false)}
		>
			<FontAwesomeIcon icon={faTimes} color='#fff' size='lg' />
		</div>
	);
}

CloseButton.propTypes = {
	show: PropTypes.bool,
};

export default CloseButton;
