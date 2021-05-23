import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Col, Form } from 'react-bootstrap';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FilesUpload from '../FilesUpload/FilesUpload';
import FromWrapper from '../FormWrapper/FromWrapper';
import Variant from './Variant';
import CloudImages from '../CloudImages/CloudImages';
import { getAllBrands, getAllGroups } from 'services/api';

import './styles.scss';

const initialFormState = {
	name: '',
	brand: '',
	group: '',
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

export default function FormProduct({ productState, submitRequest, title }) {
	const [editor, setEditor] = useState(null);
	const [formState, setFormState] = useState(productState);
	const [brands, setBrands] = useState([]);
	const [groups, setGroups] = useState([]);
	const [status, setStatus] = useState({
		saleCheckBox: false,
		validated: false,
		loading: false,
		submitting: false,
		error: false,
	});
	// ref
	const formRef = useRef(null);
	const filesRef = useRef(null);

	useEffect(() => {
		(async function () {
			try {
				setStatus((state) => ({ ...state, loading: true }));
				const [brandsRes, groupsRes] = await Promise.all([
					getAllBrands(),
					getAllGroups(),
				]);

				setBrands(brandsRes.brands);
				setGroups(groupsRes.groups);

				setFormState((state) => ({
					...state,
					brand: productState.brand || brandsRes.brands[0]._id,
					group: productState.group || groupsRes.groups[0]._id,
				}));

				setStatus((state) => ({ ...state, loading: false }));
			} catch (error) {
				setStatus((state) => ({ ...state, error: true }));
			}
		})();
	}, [productState]);

	const submitForm = async (e) => {
		const form = e.currentTarget;
		e.preventDefault();
		if (form.checkValidity() === false) {
			e.stopPropagation();
			setStatus((state) => ({ ...state, validated: true }));
		} else {
			// submit if valid
			const formData = new FormData();
			Object.keys(formState).forEach((key) => {
				if (key === 'images') {
					for (let i = 0; i < formState[key].length; i++) {
						formData.append('images', formState[key][i].file);
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
				const response = await submitRequest(formData);
				if (response.success) {
					editor.setData('');
					formRef.current.reset();
					setFormState((state) => ({ ...state, ...initialFormState }));
					toast.success('Successful!', {
						autoClose: 2000,
					});
				}
			} catch (error) {
				setStatus((state) => ({ ...state, error: true }));
				toast.error('Something was wrong...', {
					autoClose: 2000,
				});
			} finally {
				setStatus((state) => ({
					...state,
					submitting: false,
					validated: false,
				}));
			}
		}
	};

	const handleChangeInputForm = (e) => {
		let value = e.currentTarget.value.trim();
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
		const files = e.target.files;
		let images = [];

		for (let i = 0; i < files.length; i++) {
			images.push({
				name: files[i].name,
				file: files[i],
			});
		}
		setFormState({ ...formState, images: images });
	};

	const handleRemoveFile = (e) => {
		let parent = e.currentTarget.closest('.images-preview__item');
		let fileRemove = parent.querySelector('img')?.src;
		const { name } = parent.querySelector('img')?.dataset;
		let { images } = formState;

		let index = images.findIndex((image) => image.name === name);

		setFormState((state) => ({
			...state,
			images: [
				...state.images.slice(0, index),
				...state.images.slice(index + 1),
			],
		}));
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
			formRef={formRef}
			heading={title}
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
						value={formState?.name}
						required
					/>
					<Form.Control.Feedback type='invalid'>
						Please provide a product name.
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Row>
					<Col>
						<Form.Group>
							<Form.Label>Brand</Form.Label>
							<Form.Control
								name='product-brand'
								as='select'
								onChange={handleChangeInputForm}
								value={formState?.brand}
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
					</Col>
					<Col>
						<Form.Group>
							<Form.Label>Collection</Form.Label>
							<Form.Control
								name='product-group'
								as='select'
								onChange={handleChangeInputForm}
								value={formState?.group}
								custom
								required
							>
								{groups &&
									groups.map((group) => (
										<option key={group._id} value={group._id}>
											{group.name}
										</option>
									))}
							</Form.Control>
							<Form.Control.Feedback type='invalid'>
								Please choose a collection.
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
								value={formState?.price}
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
								value={formState?.saleprice}
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
					/>
					<CKEditor
						editor={ClassicEditor}
						data={formState?.description || ''}
						onChange={editorChange}
						onReady={(ckEditor) => {
							setEditor(ckEditor);
						}}
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
				{formState.hasOwnProperty('cloudImages') && (
					<CloudImages cloudImages={formState.cloudImages} />
				)}
				<FilesUpload
					files={formState?.images}
					filesRef={filesRef}
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

PropTypes.FormProduct = {
	productState: PropTypes.object,
	submitRequest: PropTypes.func,
	title: PropTypes.string,
};
