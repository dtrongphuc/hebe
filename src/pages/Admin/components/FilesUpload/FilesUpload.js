import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import {
	Col,
	Container,
	Form,
	OverlayTrigger,
	Row,
	Tooltip,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faUpload } from '@fortawesome/free-solid-svg-icons';
import './styles.scss';

export default function FilesUpload({
	files,
	filesChange,
	removeFile,
	multiple,
}) {
	const filesRef = useRef(null);

	const openFileDialog = () => {
		filesRef.current.click();
	};

	return (
		<Form.Group>
			<Form.Label>{multiple ? 'Images' : 'Image'}</Form.Label>
			<div className='border p-3'>
				<div className='text-center mt-3' onClick={openFileDialog}>
					<FontAwesomeIcon icon={faUpload} className='mr-2' />
					<span style={{ cursor: 'default' }}>
						Select {multiple ? 'files' : 'file'}
					</span>
				</div>
				<input
					ref={filesRef}
					type='file'
					multiple={multiple}
					id='product-images'
					className='invisible'
					name='image'
					onChange={filesChange}
					required
				/>
				<Form.Control.Feedback type='invalid'>
					Please provide a {multiple ? 'images' : 'image'}.
				</Form.Control.Feedback>
			</div>
			<div className='images-preview'>
				<Container>
					<Row>
						{multiple
							? files &&
							  files.map((file) => (
									<Col md={3} key={file}>
										<div className='images-preview__item'>
											<img src={file} alt='' />
											<div className='images-preview__item__overlay'>
												<OverlayTrigger overlay={<Tooltip>Remove</Tooltip>}>
													<FontAwesomeIcon
														icon={faTrashAlt}
														className='images-preview__item__icon'
														onClick={removeFile}
													/>
												</OverlayTrigger>
											</div>
										</div>
									</Col>
							  ))
							: files && (
									<Col md={12} key={files}>
										<div className='d-flex align-items-center justify-content-center'>
											<div className='images-preview__item'>
												<img src={files} alt='' className='position-relative' />
												<div className='images-preview__item__overlay'>
													<OverlayTrigger overlay={<Tooltip>Remove</Tooltip>}>
														<FontAwesomeIcon
															icon={faTrashAlt}
															className='images-preview__item__icon'
															onClick={removeFile}
														/>
													</OverlayTrigger>
												</div>
											</div>
										</div>
									</Col>
							  )}
					</Row>
				</Container>
			</div>
		</Form.Group>
	);
}

FilesUpload.propTypes = {
	files: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
	filesChange: PropTypes.func,
	removeFile: PropTypes.func,
	multiple: PropTypes.bool,
};
