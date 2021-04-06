import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function Variant({ variants, onChange, onRemove }) {
	return (
		<table className='table'>
			<thead>
				<tr>
					<th>Color</th>
					<th>Size</th>
					<th>Quantity</th>
				</tr>
			</thead>
			<tbody>
				{variants &&
					variants.map((variant, index) => (
						<Fragment key={`variant-${index + 1}`}>
							<tr>
								<td rowSpan={variant?.details.length + 1}>{variant.color}</td>
							</tr>
							{variant.details.length > 1 &&
								variant?.details.map((detail, index) => (
									<tr key={`variant-${index + 1}-detail-${index}`}>
										<td>{detail.size}</td>
										<td>{detail.quantity}</td>
									</tr>
								))}
						</Fragment>
					))}
			</tbody>
		</table>
	);
}

Variant.propTypes = {
	variants: PropTypes.array,
	onChange: PropTypes.func,
	onRemove: PropTypes.func,
};

export default Variant;
