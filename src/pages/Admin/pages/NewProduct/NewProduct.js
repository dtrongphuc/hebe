import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Button, Form, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import FilesUpload from './components/FilesUpload/FilesUpload';
import './styles.scss';

export default function NewProduct() {
	const [saleCheckBox, setSaleCheckBox] = useState(false);
	const [dynamicInputName, setDynamicInputName] = useState({
		colorInput: ['input-color-0'],
		sizeAndQuantityInput: ['input-sq-0'],
	});

	const handleChangeColorInput = (e) => {
		// setColorInput([]);
		console.log(e.target.value);
	};

	const handleAddColorInput = () => {
		let { colorInput } = dynamicInputName;
		setDynamicInputName({
			...dynamicInputName,
			colorInput: [...colorInput, `input-color-${colorInput.length}`],
		});
	};

	const handleAddSizeAndQuantityInput = () => {
		let { sizeAndQuantityInput } = dynamicInputName;
		setDynamicInputName({
			...dynamicInputName,
			sizeAndQuantityInput: [
				...sizeAndQuantityInput,
				`input-sq-${sizeAndQuantityInput.length}`,
			],
		});
	};

	const handleRemoveColorInput = (e) => {
		let inputRemove = e.currentTarget.dataset.input;
		if (!inputRemove) return;
		let { colorInput } = dynamicInputName;

		setDynamicInputName({
			...dynamicInputName,
			colorInput: colorInput.filter((input) => input !== inputRemove),
		});
	};

	const handleRemoveSizeAndQuantityInput = (e) => {
		let inputRemove = e.currentTarget.dataset.input;
		if (!inputRemove) return;
		let { sizeAndQuantityInput } = dynamicInputName;

		setDynamicInputName({
			...dynamicInputName,
			sizeAndQuantityInput: sizeAndQuantityInput.filter(
				(input) => input !== inputRemove
			),
		});
	};

	const handleDynamicInputFocus = (e) => {
		e.currentTarget
			.closest('.dynamic-input-hover')
			.classList.add('dynamic-input-active');
	};

	const handleDynamicInputBlur = (e) => {
		e.currentTarget
			.closest('.dynamic-input-hover')
			.classList.remove('dynamic-input-active');
	};

	return (
		<Form>
			<h4 className='mb-3'>Create new product</h4>
			<div
				style={{ top: 0, zIndex: 100 }}
				className='d-flex align-items-center justify-content-between position-sticky top-0 z-index-1 py-3 px-4 bg-white rounded'
			>
				<Link to='/admin/products' className='text-decoration-none'>
					<span className='align-text-bottom lh-lg'>&#8592; </span>
					Product Input
				</Link>
				<div>
					<Button
						variant='danger'
						type='button'
						size='sm'
						className='mr-2 fs-3'
					>
						Cancel
					</Button>
					<Button variant='primary' type='submit' size='sm'>
						Submit
					</Button>
				</div>
			</div>
			<div className='px-4 mt-3'>
				<Form.Group>
					<Form.Label>Product name</Form.Label>
					<Form.Control type='text' name='product-name' />
				</Form.Group>
				<Form.Row>
					<Col>
						<Form.Group>
							<Form.Label>Category</Form.Label>
							<Form.Control as='select' custom>
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
							</Form.Control>
						</Form.Group>
					</Col>
					<Col>
						<Form.Group>
							<Form.Label>Topic</Form.Label>
							<Form.Control as='select' custom>
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
							</Form.Control>
						</Form.Group>
					</Col>
				</Form.Row>

				<Form.Row>
					<Col>
						<Form.Group>
							<Form.Label>Price</Form.Label>
							<Form.Control type='number' name='product-price' />
						</Form.Group>
					</Col>
					<Col>
						<Form.Group>
							<Form.Check
								type='checkbox'
								id='sale-checkbox'
								label='Sale price'
								className='mb-2'
								value={saleCheckBox}
								onChange={() => setSaleCheckBox(!saleCheckBox)}
							/>
							<Form.Control
								type='number'
								name='product-price'
								disabled={!saleCheckBox}
							/>
						</Form.Group>
					</Col>
				</Form.Row>

				<Form.Group>
					<Form.Label>Description</Form.Label>
					<Form.Control as='textarea' name='product-description' rows={3} />
				</Form.Group>
				<Form.Group>
					<Form.Label className='mb-0'>Color</Form.Label>
					{dynamicInputName &&
						dynamicInputName.colorInput.map((input, index) => (
							<div
								key={input}
								className='d-flex align-items-center justify-content-between dynamic-input-hover'
							>
								<Form.Control
									type='text'
									name='product-color'
									onFocus={handleDynamicInputFocus}
									onBlur={handleDynamicInputBlur}
									onChange={handleChangeColorInput}
									className='mt-3'
								/>
								{index !== 0 && (
									<OverlayTrigger overlay={<Tooltip>Remove</Tooltip>}>
										<FontAwesomeIcon
											data-input={input}
											icon={faTimes}
											className='mt-3 ml-3 input-remove'
											onClick={handleRemoveColorInput}
										/>
									</OverlayTrigger>
								)}
							</div>
						))}

					<Button
						type='button'
						variant='primary'
						className='px-4 mt-3'
						onClick={handleAddColorInput}
					>
						&#43; Add color
					</Button>
				</Form.Group>
				<Form.Group>
					<Form.Row>
						<Col>
							<Form.Label>Size</Form.Label>
						</Col>
						<Col>
							<Form.Label>Quantity</Form.Label>
						</Col>
					</Form.Row>
					{dynamicInputName &&
						dynamicInputName?.sizeAndQuantityInput.map((input, index) => (
							<Form.Row key={input} className='dynamic-input-hover'>
								<Col>
									<Form.Group>
										<Form.Control
											type='number'
											name='product-size'
											onFocus={handleDynamicInputFocus}
											onBlur={handleDynamicInputBlur}
										/>
									</Form.Group>
								</Col>
								<Col>
									<Form.Group>
										<Form.Control
											type='number'
											name='product-quantity'
											onFocus={handleDynamicInputFocus}
											onBlur={handleDynamicInputBlur}
										/>
									</Form.Group>
								</Col>
								{index !== 0 && (
									<OverlayTrigger overlay={<Tooltip>Remove</Tooltip>}>
										<FontAwesomeIcon
											data-input={input}
											icon={faTimes}
											className='mt-2 ml-3 input-remove'
											onClick={handleRemoveSizeAndQuantityInput}
										/>
									</OverlayTrigger>
								)}
							</Form.Row>
						))}

					<Form.Group>
						<Button
							type='button'
							variant='primary'
							className='px-4'
							onClick={handleAddSizeAndQuantityInput}
						>
							&#43; Add size
						</Button>
					</Form.Group>
				</Form.Group>
				<FilesUpload />
			</div>
		</Form>
	);
}
