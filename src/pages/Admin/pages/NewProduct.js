import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Col, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

export default function NewProduct() {
	const [saleCheckBox, setSaleCheckBox] = useState(false);
	const filesRef = useRef(null);

	const openFileDialog = () => {
		filesRef.current.click();
	};

	const handleAddColorField = () => {
		console.log('add field');
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
					Product list
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
					<Form.Label>Color</Form.Label>
					<Form.Control type='text' name='product-color' />
					<Button
						type='button'
						variant='primary'
						className='px-4 mt-3'
						onClick={handleAddColorField}
					>
						&#43; Add color
					</Button>
				</Form.Group>
				<Form.Group>
					<Form.Row>
						<Col>
							<Form.Group>
								<Form.Label>Size</Form.Label>
								<Form.Control type='number' name='product-size' />
							</Form.Group>
						</Col>
						<Col>
							<Form.Group>
								<Form.Label>Quantity</Form.Label>
								<Form.Control type='number' name='product-quantity' />
							</Form.Group>
						</Col>
						<Col xs={12}>
							<Form.Group>
								<Button type='button' variant='primary' className='px-4'>
									&#43; Add size
								</Button>
							</Form.Group>
						</Col>
					</Form.Row>
				</Form.Group>
				<Form.Group>
					<div className='border p-3'>
						<div className='text-center mt-3' onClick={openFileDialog}>
							<FontAwesomeIcon icon={faUpload} className='mr-2' />
							<span style={{ cursor: 'default' }}>Select files</span>
						</div>
						<input
							ref={filesRef}
							type='file'
							id='product-images'
							className='invisible'
						/>
					</div>
				</Form.Group>
			</div>
		</Form>
	);
}
