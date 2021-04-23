import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
function Variant({
	variants,
	colorChange,
	detailVariantChange,
	onAddColor,
	onAddDetail,
	onRemoveColor,
	onRemoveDetailColor,
}) {
	const singleDetail = (detail, colorIndex, rowSpan) => {
		return (
			<Fragment key={`variant-detail-${colorIndex}`}>
				<td>
					<Form.Control
						name={`variant-size-${colorIndex}`}
						value={detail.size}
						type='text'
						onChange={detailVariantChange(colorIndex, 0)}
					/>
				</td>
				<td>
					<Form.Control
						name={`variant-quantity-${colorIndex}`}
						value={detail.quantity}
						min={0}
						type='number'
						onChange={detailVariantChange(colorIndex, 0)}
					/>
				</td>
				<td>
					<Link to='#' onClick={onRemoveDetailColor(colorIndex, 0)}>
						<FontAwesomeIcon icon={faMinus} />
					</Link>
				</td>
				<td rowSpan={rowSpan}>
					<Link to='#' className='mr-3' onClick={onRemoveColor(colorIndex)}>
						<FontAwesomeIcon icon={faMinus} />
					</Link>
					<Link to='#' onClick={onAddDetail(colorIndex)}>
						<FontAwesomeIcon icon={faPlus} />
					</Link>
				</td>
			</Fragment>
		);
	};

	const multipleDetails = (details, colorIndex) => {
		return details.map((detail, index) => (
			<tr key={`variant-detail-${index}`}>
				<td>
					<Form.Control
						name={`variant-size-${index}`}
						value={detail.size}
						type='text'
						onChange={detailVariantChange(colorIndex, index + 1)}
					/>
				</td>
				<td>
					<Form.Control
						name={`variant-quantity-${index}`}
						value={detail.quantity}
						min={0}
						type='number'
						onChange={detailVariantChange(colorIndex, index + 1)}
					/>
				</td>
				<td>
					<Link to='#' onClick={onRemoveDetailColor(colorIndex, index + 1)}>
						<FontAwesomeIcon icon={faMinus} />
					</Link>
				</td>
			</tr>
		));
	};

	return (
		<table className='table table-bordered'>
			<thead>
				<tr>
					<th className='text-center'>Color</th>
					<th className='text-center'>Size</th>
					<th className='text-center'>Quantity</th>
					<th className='text-center' colSpan='2' style={{ minWidth: '120px' }}>
						Actions
					</th>
				</tr>
			</thead>
			<tbody>
				{variants &&
					variants.map((variant, index) => (
						<Fragment key={`variant-${index + 1}`}>
							<tr>
								<td rowSpan={variant?.details.length}>
									<Form.Control
										type='text'
										name={`variant-color-${index}`}
										value={variant.color}
										onChange={colorChange(index)}
									/>
								</td>
								{variant.details.length > 0 &&
									singleDetail(
										variant.details[0],
										index,
										variant?.details.length
									)}
							</tr>
							{variant?.details.length > 1 &&
								multipleDetails(variant.details.slice(1), index)}
						</Fragment>
					))}
			</tbody>
			<tfoot>
				<tr>
					<td className='text-center'>
						<Link to='#' onClick={onAddColor}>
							<FontAwesomeIcon icon={faPlus} />
						</Link>
					</td>
				</tr>
			</tfoot>
		</table>
	);
}

Variant.propTypes = {
	variants: PropTypes.array,
	detailVariantChange: PropTypes.func,
	colorChange: PropTypes.func,
	onAddColor: PropTypes.func,
	onAddDetail: PropTypes.func,
	onRemoveColor: PropTypes.func,
	onRemoveDetailColor: PropTypes.func,
};

export default Variant;
