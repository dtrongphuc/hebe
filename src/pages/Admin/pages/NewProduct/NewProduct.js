import React, { useEffect, useState } from 'react';
import { Col, Form } from 'react-bootstrap';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FilesUpload from '../../components/FilesUpload/FilesUpload';
import FromWrapper from '../../components/FormWrapper/FromWrapper';
import Variant from './Variant';
import { getAllBrands, postNewProduct } from '../../../../services/api';

import './styles.scss';

const initialFormState = {
	name: '',
	brand: '',
	price: 0,
	saleprice: 0,
	description: '',
	variants: [
		{
			color: '',
			details: [
				{
					size: '',
					quantity: '',
				},
			],
		},
	],
	images: [],
	avatarIndex: 0,
};

export default function NewProduct() {
	const [formState, setFormState] = useState(initialFormState);

	const [brands, setBrands] = useState([]);
	const [filePreview, setFilePreview] = useState(null);
	const [status, setStatus] = useState({
		saleCheckBox: false,
		validated: false,
		loading: false,
		submitting: false,
		error: false,
	});

	useEffect(() => {
		(async function () {
			try {
				setStatus((state) => ({ ...state, loading: true }));
				const response = await getAllBrands();
				if (response.brands) {
					setBrands(response.brands);
					setFormState((state) => ({
						...state,
						brand: response.brands[0]._id,
					}));
				}
				setStatus((state) => ({ ...state, loading: false }));
			} catch (error) {
				setStatus((state) => ({ ...state, error: true }));
			}
		})();
	}, []);

	const submitForm = async (e) => {
		const form = e.currentTarget;
		e.preventDefault();
		if (form.checkValidity() === false) {
			e.stopPropagation();
		} else {
			// submit if valid
			const formData = new FormData();
			Object.keys(formState).forEach((key) => {
				if (key === 'images') {
					for (let i = 0; i < formState[key].length; i++) {
						formData.append('images', formState[key][i]);
					}
				} else {
					formData.append(key, JSON.stringify(formState[key]));
				}
			});
			// post data
			try {
				setStatus((state) => ({
					...state,
					submitting: true,
				}));
				const response = await postNewProduct(formData);
				if (response.success) {
					setFormState((state) => ({ ...state, ...initialFormState }));
					setFilePreview(null);
					toast('Successful!');
				}
			} catch (error) {
				setStatus((state) => ({ ...state, error: true }));
				toast('Something was wrong...');
			} finally {
				setStatus((state) => ({
					...state,
					submitting: false,
				}));
			}
		}

		setStatus((state) => ({ ...state, validated: true, saleCheckBox: false }));
	};

	const handleChangeInputForm = (e) => {
		let value = e.currentTarget.value.trim();
		if (!value) return;
		let inputName = e.currentTarget.name.split('-');
		setFormState({ ...formState, [inputName[1]]: value });
	};

	//Variant event
	const handleColorChange = (idx) => (e) => {
		const value = e.currentTarget.value;
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
		const newColor = initialFormState.variants[0];
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
				details: [...variant.details, initialFormState.variants[0].details[0]],
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
		setFilePreview(images);
		setFormState({ ...formState, images: e.target.files });
	};

	const handleRemoveFile = (e) => {
		let parent = e.currentTarget.closest('.images-preview__item');
		let fileRemove = parent.querySelector('img')?.src;
		setFilePreview((state) => state.filter((file) => file !== fileRemove));
		// setFormState({
		// 	...formState,
		// 	images: formState.images.filter((file) => file !== fileRemove),
		// });
		URL.revokeObjectURL(fileRemove);
	};

	const editorChange = (e, editor) => {
		const data = editor.getData();
		setFormState((state) => ({ ...state, description: data }));
	};

	const setAvatarIndex = (index) => () => {
		setFormState((state) => ({ ...state, avatarIndex: index }));
	};

	return (
		<FromWrapper
			heading='Create new product'
			backTo={{ link: '/admin/products', title: 'Product list' }}
			onSubmit={submitForm}
			validated={status.validated}
			isLoading={status.submitting}
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
						{brands &&
							brands.map((brand) => (
								<option key={brand._id} value={brand._id}>
									{brand.name}
								</option>
							))}
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
								value={status.saleCheckBox}
								onChange={() =>
									setStatus((state) => ({
										...state,
										saleCheckBox: !state.saleCheckBox,
									}))
								}
							/>
							<Form.Control
								type='number'
								name='product-saleprice'
								disabled={!status.saleCheckBox}
								onChange={handleChangeInputForm}
							/>
						</Form.Group>
					</Col>
				</Form.Row>
				<Form.Group controlId='formGroupDescription'>
					<Form.Label>Description</Form.Label>
					<Form.Control
						type='text'
						value={formState?.description}
						onChange={(e) =>
							setFormState((state) => ({
								...state,
								description: e.target.value,
							}))
						}
						hidden
						required
					/>
					<CKEditor editor={ClassicEditor} data='' onChange={editorChange} />
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
					files={filePreview || []}
					filesChange={filesChange}
					removeFile={handleRemoveFile}
					multiple={true}
					avatarIndex={formState.avatarIndex}
					setAvatarIndex={setAvatarIndex}
				/>
			</div>
		</FromWrapper>
	);
}
