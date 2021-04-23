import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link, useRouteMatch } from 'react-router-dom';
// import PropTypes from 'prop-types'

function Actions({ id }) {
	const { url } = useRouteMatch();

	return (
		<td>
			<OverlayTrigger overlay={<Tooltip id='tooltip-disabled'>Edit</Tooltip>}>
				<Link to={`${url}/edit/${id}`} className='mr-4'>
					<FontAwesomeIcon icon={faEdit} />
				</Link>
			</OverlayTrigger>
			<OverlayTrigger overlay={<Tooltip id='tooltip-disabled'>Delete</Tooltip>}>
				<Link to={`${url}/delete/${id}`}>
					<FontAwesomeIcon icon={faTrashAlt} />
				</Link>
			</OverlayTrigger>
		</td>
	);
}

// Actions.propTypes = {

// }

export default Actions;
