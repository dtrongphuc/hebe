import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import PropTypes from 'prop-types';
import FromWrapper from '../../components/FormWrapper/FromWrapper';
import FilesUpload from '../../components/FilesUpload/FilesUpload';
import { postNewBrand } from '../../../../services/api';

function NewBrand() {
	const [status, setStatus] = useState({
		validated: false,
		loading: false,
		error: false,
	});

	const [formState, setFormState] = useState({
		name: '',
		description: '',
		image: '',
	});

	const [filePreview, setFilePreview] = useState(null);

	const onSubmit = async (e) => {
		try {
			const form = e.currentTarget;
			e.preventDefault();
			if (form.checkValidity() === false) {
				e.stopPropagation();
			} else {
				// submit if valid
				const formData = new FormData();
				Object.keys(formState).map((key) =>
					formData.append(key, formState[key])
				);
				// post data
				const response = await postNewBrand(formData);
				console.log(response);
			}
			setStatus((state) => ({ ...state, validated: true }));
		} catch (error) {
			setStatus((state) => ({ ...state, error: true }));
		}
	};

	const handleChangeInputForm = (e) => {
		let value = e.currentTarget.value.trim();
		if (!value) return;
		let inputName = e.currentTarget.name.split('-');
		setFormState({ ...formState, [inputName[1]]: value });
	};

	const editorChange = (e, editor) => {
		const data = editor.getData();
		setFormState((state) => ({ ...state, description: data }));
	};

	const fileChange = (e) => {
		if (e.target.files.length <= 0) return;
		let image = URL.createObjectURL(e.target.files[0]);
		setFilePreview(image);
		setFormState((state) => ({ ...state, image: e.target.files[0] }));
	};

	const handleRemoveFile = (e) => {
		if (!formState?.image) return;
		URL.revokeObjectURL(formState.image);
		setFilePreview(null);
		setFormState((state) => ({ ...state, image: '' }));
	};

	return (
		<FromWrapper
			heading='Create new brand'
			onSubmit={onSubmit}
			validated={status.validated}
			backTo={{ link: '/admin/brands', title: 'Brand list' }}
		>
			<>
				<Form.Group controlId='formGroupName'>
					<Form.Label>Brand name</Form.Label>
					<Form.Control
						type='text'
						name='brand-name'
						onChange={handleChangeInputForm}
						required
					/>
					<Form.Control.Feedback type='invalid'>
						Please provide a brand name.
					</Form.Control.Feedback>
				</Form.Group>
				<Form.Group controlId='formGroupDescription'>
					<Form.Label>Description</Form.Label>
					<Form.Control
						type='text'
						value={formState?.description}
						onChange={() => setStatus((state) => ({ ...state, error: true }))}
						hidden
						required
					/>
					<CKEditor editor={ClassicEditor} data='' onChange={editorChange} />
					<Form.Control.Feedback type='invalid'>
						Please provide a description.
					</Form.Control.Feedback>
				</Form.Group>
				<FilesUpload
					files={filePreview}
					filesChange={fileChange}
					removeFile={handleRemoveFile}
					multiple={false}
				/>
			</>
		</FromWrapper>
	);
}

// NewBrand.propTypes = {};

export default NewBrand;
