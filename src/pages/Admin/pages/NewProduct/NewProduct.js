import React, { useEffect, useState } from 'react';
import { Col, Button, Form, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import FilesUpload from '../../components/FilesUpload/FilesUpload';
import './styles.scss';
import FromWrapper from '../../components/FormWrapper/FromWrapper';

export default function NewProduct() {
	const [formState, setFormSate] = useState({
		name: '',
		category: '',
		topic: '',
		price: 0,
		saleprice: 0,
		description: '',
		colors: [''],
		variants: [
			{
				size: '',
				quantity: 0,
			},
		],
		images: [],
	});

	const [config, setConfig] = useState({
		saleCheckBox: false,
		validated: false,
		loading: false,
	});

	useEffect(() => {
		(async function () {})();
	}, []);

	const submitForm = (e) => {
		const form = e.currentTarget;
		e.preventDefault();
		if (form.checkValidity() === false) {
			e.stopPropagation();
		}

		setConfig((state) => ({ ...state, validated: true }));
	};

	const handleChangeInputForm = (e) => {
		let value = e.currentTarget.value.trim();
		if (!value) return;
		let inputName = e.currentTarget.name.split('-');
		setFormSate({ ...formState, [inputName[1]]: value });
	};

	const handleColorsChange = (idx) => (e) => {
		const value = e.currentTarget.value.trim();
		const newValue = formState.colors.map((color, index) => {
			if (idx !== index) return color;

			return value;
		});

		setFormSate({ ...formState, colors: newValue });
	};

	const handleAddColorInput = () => {
		setFormSate({ ...formState, colors: [...formState.colors, ''] });
	};

	const handleRemoveColorInput = (idx) => (e) => {
		setFormSate({
			...formState,
			colors: formState.colors.filter((color, index) => index !== idx),
		});
	};

	const handleAddSizeInput = () => {
		setFormSate({
			...formState,
			variants: [...formState.variants, { size: '', quantity: 0 }],
		});
	};

	const handleRemoveSize = (idx) => (e) => {
		setFormSate({
			...formState,
			variants: formState.variants.filter((variant, index) => index !== idx),
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

	const handleVariantChange = (idx) => (e) => {
		const inputName = e.currentTarget.name.split('variant-');
		const value = e.currentTarget.value.trim();
		const newVariant = formState.variants.map((variant, index) => {
			if (idx !== index) return variant;

			return {
				...variant,
				[inputName[1]]: value,
			};
		});
		setFormSate({ ...formState, variants: newVariant });
	};

	const filesChange = (e) => {
		let images = [];
		for (let i = 0; i < e.target.files.length; i++) {
			images.push(URL.createObjectURL(e.target.files[i]));
		}
		setFormSate({ ...formState, images });
	};

	const handleRemoveFile = (e) => {
		let parent = e.currentTarget.closest('.images-preview__item');
		let fileRemove = parent.querySelector('img')?.src;
		setFormSate({
			...formState,
			images: formState.images.filter((file) => file !== fileRemove),
		});
		URL.revokeObjectURL(fileRemove);
	};

	return (
		<FromWrapper
			heading='Create new product'
			backTo={{ link: '/admin/products', title: 'Product list' }}
			onSubmit={submitForm}
			validated={config.validated}
		>
			<>
				<Form.Group>
					<Form.Label>Product name</Form.Label>
					<Form.Control
						type='text'
						name='product-name'
						onChange={handleChangeInputForm}
						required
					/>
					<Form.Control.Feedback type='invalid'>
						Please provide a product name.
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Row>
					<Col>
						<Form.Group>
							<Form.Label>Category</Form.Label>
							<Form.Control
								name='product-category'
								as='select'
								onChange={handleChangeInputForm}
								custom
								required
							>
								{/* {fromServer &&
										fromServer.categories.map((category) => (
											<option key={category._id} value={category._id}>
												{category.name}
											</option>
										))} */}
							</Form.Control>
							<Form.Control.Feedback type='invalid'>
								Please choose a category.
							</Form.Control.Feedback>
						</Form.Group>
					</Col>
					<Col>
						<Form.Group>
							<Form.Label>Topic</Form.Label>
							<Form.Control
								onChange={handleChangeInputForm}
								as='select'
								custom
								name='product-topic'
								required
							>
								{/* {fromServer &&
										fromServer.topics.map((topic) => (
											<option key={topic._id} value={topic._id}>
												{topic.name}
											</option>
										))} */}
							</Form.Control>
							<Form.Control.Feedback type='invalid'>
								Please choose a topic.
							</Form.Control.Feedback>
						</Form.Group>
					</Col>
				</Form.Row>
				<Form.Row>
					<Col>
						<Form.Group>
							<Form.Label>Price</Form.Label>
							<Form.Control
								type='number'
								name='product-price'
								onChange={handleChangeInputForm}
								required
							/>
							<Form.Control.Feedback type='invalid'>
								Please provide a price.
							</Form.Control.Feedback>
						</Form.Group>
					</Col>
					<Col>
						<Form.Group>
							<Form.Check
								type='checkbox'
								id='sale-checkbox'
								label='Sale price'
								className='mb-2 user-select-none'
								value={config.saleCheckBox}
								onChange={() =>
									setConfig((state) => ({
										...state,
										saleCheckBox: !state.saleCheckBox,
									}))
								}
							/>
							<Form.Control
								type='number'
								name='product-saleprice'
								disabled={!config.saleCheckBox}
								onChange={handleChangeInputForm}
							/>
						</Form.Group>
					</Col>
				</Form.Row>
				<Form.Group>
					<Form.Label>Description</Form.Label>
					<Form.Control
						as='textarea'
						onChange={handleChangeInputForm}
						name='product-description'
						rows={3}
						required
					/>
					<Form.Control.Feedback type='invalid'>
						Please provide a description.
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Group>
					<Form.Label className='mb-0'>Color</Form.Label>
					{formState &&
						formState.colors.map((color, index) => (
							<div
								key={`color-${index}`}
								className='d-flex align-items-center justify-content-between dynamic-input-hover'
							>
								<Form.Control
									type='text'
									name='product-color'
									onFocus={handleDynamicInputFocus}
									onBlur={handleDynamicInputBlur}
									onChange={handleColorsChange(index)}
									value={color}
									className='mt-3'
									required
								/>
								<Form.Control.Feedback type='invalid'>
									Please provide a color.
								</Form.Control.Feedback>
								{index !== 0 && (
									<OverlayTrigger overlay={<Tooltip>Remove</Tooltip>}>
										<FontAwesomeIcon
											icon={faTimes}
											className='mt-3 ml-3 input-remove'
											onClick={handleRemoveColorInput(index)}
										/>
									</OverlayTrigger>
								)}
							</div>
						))}

					<Button
						type='button'
						variant='primary'
						className='px-3 mt-3'
						onClick={handleAddColorInput}
					>
						&#43; Color
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
					{formState &&
						formState.variants.map((variant, index) => (
							<Form.Row
								key={`variant-${index}`}
								className='dynamic-input-hover'
							>
								<Col>
									<Form.Group>
										<Form.Control
											type='number'
											name='product-variant-size'
											onFocus={handleDynamicInputFocus}
											onBlur={handleDynamicInputBlur}
											onChange={handleVariantChange(index)}
											required
										/>
										<Form.Control.Feedback type='invalid'>
											Please provide a size.
										</Form.Control.Feedback>
									</Form.Group>
								</Col>
								<Col>
									<Form.Group>
										<Form.Control
											type='number'
											name='product-variant-quantity'
											onFocus={handleDynamicInputFocus}
											onBlur={handleDynamicInputBlur}
											onChange={handleVariantChange(index)}
											required
										/>
										<Form.Control.Feedback type='invalid'>
											Please provide a quantity.
										</Form.Control.Feedback>
									</Form.Group>
								</Col>
								{index !== 0 && (
									<OverlayTrigger overlay={<Tooltip>Remove</Tooltip>}>
										<FontAwesomeIcon
											icon={faTimes}
											className='mt-2 ml-3 input-remove'
											onClick={handleRemoveSize(index)}
										/>
									</OverlayTrigger>
								)}
							</Form.Row>
						))}

					<Form.Group>
						<Button
							type='button'
							variant='primary'
							className='px-3'
							onClick={handleAddSizeInput}
						>
							&#43; Size
						</Button>
					</Form.Group>
				</Form.Group>
				<FilesUpload
					files={formState?.images || []}
					filesChange={filesChange}
					removeFile={handleRemoveFile}
				/>
			</>
		</FromWrapper>
	);
}
