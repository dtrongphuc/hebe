import React, { useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { toast } from 'react-toastify';
import FromWrapper from '../../components/FormWrapper/FromWrapper';
import FilesUpload from '../../components/FilesUpload/FilesUpload';

const initialFormState = {
	name: '',
	description: '',
	image: [],
};

function FormBrand({ brandState, submitRequest, titlle }) {
	const [status, setStatus] = useState({
		validated: false,
		loading: false,
		error: false,
		submitting: false,
	});
	const [editor, setEditor] = useState(null);

	const [formState, setFormState] = useState(brandState);

	const formRef = useRef(null);
	const filesRef = useRef(null);

	const onSubmit = async (e) => {
		try {
			const form = e.currentTarget;
			e.preventDefault();
			if (form.checkValidity() === false) {
				e.stopPropagation();
				setStatus((state) => ({ ...state, validated: true }));
			} else {
				// submit if valid
				setStatus((state) => ({
					...state,
					submitting: true,
				}));

				const formData = new FormData();
				Object.keys(formState).map((key) =>
					formData.append(key, formState[key])
				);
				// post data
				const response = await submitRequest(formData);
				if (response.success) {
					formRef.current.reset();
					editor.setData('');
					setFormState(initialFormState);
					toast.success('Successful!', {
						autoClose: 2000,
					});
				}
			}
		} catch (error) {
			console.log(error);
			setStatus((state) => ({ ...state, error: true }));
			toast.error('Something was wrong...', {
				autoClose: 2000,
			});
		} finally {
			setStatus((state) => ({ ...state, submitting: false, validated: false }));
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
		const files = e.target.files;
		let image = [];

		for (let i = 0; i < files.length; i++) {
			image.push({
				name: files[i].name,
				file: files[i],
			});
		}
		setFormState((state) => ({ ...state, image: image }));
	};

	const handleRemoveFile = (e) => {
		if (!formState?.image) return;
		URL.revokeObjectURL(formState.image[0]);
		filesRef.current.value = '';
		setFormState((state) => ({ ...state, image: [] }));
	};

	return (
		<FromWrapper
			formRef={formRef}
			heading={titlle}
			onSubmit={onSubmit}
			validated={status.validated}
			backTo={{ link: '/admin/brands', title: 'Brand list' }}
			isLoading={status.submitting}
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
						data={formState?.description}
						onChange={editorChange}
						onReady={(ckEditor) => {
							setEditor(ckEditor);
						}}
					/>
					<Form.Control.Feedback type='invalid'>
						Please provide a description.
					</Form.Control.Feedback>
				</Form.Group>
				<FilesUpload
					filesRef={filesRef}
					files={formState?.image}
					filesChange={fileChange}
					removeFile={handleRemoveFile}
					multiple={false}
				/>
			</>
		</FromWrapper>
	);
}

export default FormBrand;
