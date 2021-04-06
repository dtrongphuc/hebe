import React, { useState } from 'react';
import { Pagination, Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './styles.scss';

export default function TableWrapper({ columns, dataSrcLength, children }) {
	const [activePage, setActivePage] = useState(1);
	let items = [];
	let maxPages = (dataSrcLength && Math.floor(dataSrcLength / 10)) || 0;

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
							columns.map((column) => (
								<th
									key={column.key}
									className='text-capitalize'
									style={
										(column.width && { width: column.width }) ||
										(column.maxWidth && { maxWidth: column.maxWidth })
									}
								>
									{column.title}
								</th>
							))}
						<th style={{ width: '120px' }}>Actions</th>
					</tr>
				</thead>
				<tbody>{children}</tbody>
			</Table>
			<div className='d-flex align-items-center justify-content-end'>
				<Pagination>{items}</Pagination>
			</div>
		</div>
	);
}

TableWrapper.propTypes = {
	columns: PropTypes.array,
	dataSrcLength: PropTypes.number,
	children: PropTypes.element,
};
