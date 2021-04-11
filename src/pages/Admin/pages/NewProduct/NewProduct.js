import React, { useEffect, useState } from 'react';
import { Col, Form } from 'react-bootstrap';
import FilesUpload from '../../components/FilesUpload/FilesUpload';
import FromWrapper from '../../components/FormWrapper/FromWrapper';
import Variant from './Variant';

import './styles.scss';

const initDetailColor = {
	size: '',
	quantity: '',
};

export default function NewProduct() {
	const [formState, setFormState] = useState({
		name: '',
		price: 0,
		saleprice: 0,
		description: '',
		variants: [
			{
				color: 'color1',
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

	//Variant event
	const handleColorChange = (idx) => (e) => {
		const value = e.currentTarget.value.trim();
		const newVariants = formState.variants.map((variant, index) => {
			if (idx !== index) return variant;

			return {
				...variant,
				color: value,
			};
		});
		setFormState({ ...formState, variants: newVariants });
	};

	const handleDetailVariantChange = (colorIndex, detailIndex) => (e) => {
		const inputName = e.currentTarget.name.split('-');
		const value = e.currentTarget.value.trim();
		const newVariant = formState.variants.map((variant, index) => {
			if (colorIndex !== index) return variant;

			return {
				...variant,
				details: [
					...variant.details.slice(0, detailIndex),
					{
						...variant.details[detailIndex],
						[inputName[1]]: value,
					},
					...variant.details.slice(detailIndex + 1),
				],
			};
		});
		setFormState({ ...formState, variants: newVariant });
	};

	const handleAddColor = () => {
		const newColor = {
			color: '',
			details: [initDetailColor],
		};
		setFormState((state) => ({
			...formState,
			variants: [...state.variants, newColor],
		}));
	};

	// Add new detail color with color index
	const handleAddDetailColor = (idx) => () => {
		const newVariants = formState.variants.map((variant, index) => {
			if (idx !== index) {
				return variant;
			}

			// Add new detail to color matched
			return {
				...variant,
				details: [...variant.details, initDetailColor],
			};
		});

		setFormState((state) => ({
			...state,
			variants: newVariants,
		}));
	};

	// Remove color event with color index
	const handleRemoveColor = (idx) => () => {
		const newVariants = formState.variants.filter(
			(variant, index) => index !== idx
		);

		setFormState((state) => ({
			...state,
			variants: newVariants,
		}));
	};

	// Remove detail color event
	const handleRemoveDetailColor = (colorIndex, detailIndex) => () => {
		const newVariants = formState.variants.reduce(
			(accumulator, variant, index) => {
				if (index !== colorIndex) {
					return accumulator.concat(variant);
				} else if (index === colorIndex && variant.details.length <= 1) {
					return accumulator;
				}

				return accumulator.concat({
					...variant,
					details: [
						...variant.details.slice(0, detailIndex),
						...variant.details.slice(detailIndex + 1),
					],
				});
			},
			[]
		);

		setFormState((state) => ({
			...state,
			variants: newVariants,
		}));
	};

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
					<Variant
						variants={formState?.variants}
						detailVariantChange={handleDetailVariantChange}
						colorChange={handleColorChange}
						onAddColor={handleAddColor}
						onAddDetail={handleAddDetailColor}
						onRemoveColor={handleRemoveColor}
						onRemoveDetailColor={handleRemoveDetailColor}
					/>
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
