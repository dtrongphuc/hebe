import React, { useRef } from 'react';
import { Col, Form, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faUpload } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

export default function FilesUpload({ files, filesChange, removeFile }) {
	const filesRef = useRef(null);

	const openFileDialog = () => {
		filesRef.current.click();
	};

	return (
		<Form.Group>
			<Form.Label>Images</Form.Label>
			<div className='border p-3'>
				<div className='text-center mt-3' onClick={openFileDialog}>
					<FontAwesomeIcon icon={faUpload} className='mr-2' />
					<span style={{ cursor: 'default' }}>Select files</span>
				</div>
				<input
					ref={filesRef}
					type='file'
					multiple
					id='product-images'
					className='invisible'
					onChange={filesChange}
					required
				/>
				<Form.Control.Feedback type='invalid'>
					Please provide a images.
				</Form.Control.Feedback>
			</div>
			<div className='images-preview'>
				<Row>
					{files &&
						files.map((file) => (
							<Col md={3} key={file}>
								<div className='images-preview__item'>
									<div className='images-preview__item__overlay'>
										<OverlayTrigger overlay={<Tooltip>Remove</Tooltip>}>
											<FontAwesomeIcon
												icon={faTrashAlt}
												className='images-preview__item__icon'
												onClick={removeFile}
											/>
										</OverlayTrigger>
									</div>
									<img src={file} alt='' />
								</div>
							</Col>
						))}
				</Row>
			</div>
		</Form.Group>
	);
}
