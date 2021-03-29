import React, { useState } from 'react';
import { OverlayTrigger, Pagination, Table, Tooltip } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import './styles.scss';

export default function DashboardTable({ columns, dataSource }) {
	const [activePage, setActivePage] = useState(1);
	let items = [];
	let maxPages = (dataSource && Math.floor(dataSource.length / 10)) || 0;

	for (let number = 1; number < maxPages; number++) {
		items.push(
			<Pagination.Item
				key={number}
				active={number === activePage}
				onClick={() => setActivePage(number)}
			>
				{number}
			</Pagination.Item>
		);
	}

	return (
		<div className='bt-table'>
			<Table striped bordered hover className='admin-table product-table'>
				<thead>
					<tr>
						{columns &&
							columns.map((column) => <th key={column.key}>{column.title}</th>)}
						<th style={{ width: '120px' }}>Actions</th>
					</tr>
				</thead>
				<tbody>
					{dataSource &&
						dataSource.map((row, index) => (
							<tr key={row._id}>
								<td>{index + 1}</td>
								<td className='text-uppercase'>{row.name}</td>
								<td>
									<OverlayTrigger
										overlay={<Tooltip id='tooltip-disabled'>Edit</Tooltip>}
									>
										<Link to={`./edit/category/${row._id}`} className='mr-4'>
											<FontAwesomeIcon icon={faEdit} />
										</Link>
									</OverlayTrigger>
									<OverlayTrigger
										overlay={<Tooltip id='tooltip-disabled'>Delete</Tooltip>}
									>
										<Link to={`./delete/category/${row._id}`}>
											<FontAwesomeIcon icon={faTrashAlt} />
										</Link>
									</OverlayTrigger>
								</td>
							</tr>
						))}
				</tbody>
			</Table>
			<div className='d-flex align-items-center justify-content-end'>
				<Pagination>{items}</Pagination>
			</div>
		</div>
	);
}

DashboardTable.propTypes = {
	columns: PropTypes.array,
	dataSource: PropTypes.array,
};
