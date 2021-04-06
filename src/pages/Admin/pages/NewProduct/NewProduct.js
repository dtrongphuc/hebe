import React, { useEffect, useState } from 'react';
import { Col, Form } from 'react-bootstrap';
import FilesUpload from '../../components/FilesUpload/FilesUpload';
import './styles.scss';
import FromWrapper from '../../components/FormWrapper/FromWrapper';
import Variant from './Variant';

export default function NewProduct() {
	const [formState, setFormState] = useState({
		name: '',
		price: 0,
		saleprice: 0,
		description: '',
		variants: [
			{
				color: 'black',
				details: [
					{
						size: '12',
						quantity: 20,
					},
					{
						size: '13',
						quantity: 20,
					},
				],
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
		setFormState({ ...formState, [inputName[1]]: value });
	};

	// const handleColorsChange = (idx) => (e) => {
	// 	const value = e.currentTarget.value.trim();
	// 	const newValue = formState.colors.map((color, index) => {
	// 		if (idx !== index) return color;

	// 		return value;
	// 	});

	// 	setFormState({ ...formState, colors: newValue });
	// };

	// const handleAddColorInput = () => {
	// 	setFormState({ ...formState, colors: [...formState.colors, ''] });
	// };

	// const handleRemoveColorInput = (idx) => (e) => {
	// 	setFormState({
	// 		...formState,
	// 		colors: formState.colors.filter((color, index) => index !== idx),
	// 	});
	// };

	// const handleAddSizeInput = () => {
	// 	setFormState({
	// 		...formState,
	// 		variants: [...formState.variants, { size: '', quantity: 0 }],
	// 	});
	// };

	// const handleRemoveSize = (idx) => (e) => {
	// 	setFormState({
	// 		...formState,
	// 		variants: formState.variants.filter((variant, index) => index !== idx),
	// 	});
	// };

	// const handleDynamicInputFocus = (e) => {
	// 	e.currentTarget
	// 		.closest('.dynamic-input-hover')
	// 		.classList.add('dynamic-input-active');
	// };

	// const handleDynamicInputBlur = (e) => {
	// 	e.currentTarget
	// 		.closest('.dynamic-input-hover')
	// 		.classList.remove('dynamic-input-active');
	// };

	// const handleVariantChange = (idx) => (e) => {
	// 	const inputName = e.currentTarget.name.split('variant-');
	// 	const value = e.currentTarget.value.trim();
	// 	const newVariant = formState.variants.map((variant, index) => {
	// 		if (idx !== index) return variant;

	// 		return {
	// 			...variant,
	// 			[inputName[1]]: value,
	// 		};
	// 	});
	// 	setFormState({ ...formState, variants: newVariant });
	// };

	const filesChange = (e) => {
		let images = [];
		for (let i = 0; i < e.target.files.length; i++) {
			images.push(URL.createObjectURL(e.target.files[i]));
		}
		setFormState({ ...formState, images });
	};

	const handleRemoveFile = (e) => {
		let parent = e.currentTarget.closest('.images-preview__item');
		let fileRemove = parent.querySelector('img')?.src;
		setFormState({
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
			<div>
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
				<Form.Group>
					<Form.Label>Brand</Form.Label>
					<Form.Control
						name='product-brand'
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
						Please choose a brand.
					</Form.Control.Feedback>
				</Form.Group>
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
					<Variant variants={formState?.variants} />
				</Form.Group>
				<FilesUpload
					files={formState?.images || []}
					filesChange={filesChange}
					removeFile={handleRemoveFile}
					multiple={true}
				/>
			</div>
		</FromWrapper>
	);
}
