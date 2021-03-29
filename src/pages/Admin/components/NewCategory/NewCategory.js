import React, { useState } from 'react';
import { postNewCategory } from '../../../../services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function NewCategory() {
	const [categoryName, setCategoryName] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (categoryName.trim() === '') return;
		try {
			const response = await postNewCategory(categoryName.trim());
			if (response) {
				setCategoryName('');
				toast('Successfull');
			}
		} catch (error) {
			toast('Something was wrong');
		}
	};

	return (
		<>
			<form
				method='post'
				className='new-form new-category-form'
				onSubmit={handleSubmit}
			>
				<label htmlFor='category-name'>Add new category:</label>
				<div className='input-group'>
					<input
						type='text'
						name='category-name'
						id='category-name'
						className='form-control mr-3'
						value={categoryName}
						onChange={(e) => setCategoryName(e.target.value)}
					/>
					<button type='submit' className='btn btn-primary'>
						Add
					</button>
				</div>
			</form>
			<ToastContainer />
		</>
	);
}
