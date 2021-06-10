import React, { useEffect, useState } from 'react';
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
	filesRef,
	filesChange,
	removeFile,
	multiple,
	avatarIndex,
	setAvatarIndex,
}) {
	const [filesPreview, setFilesPreview] = useState([]);

	useEffect(() => {
		if (!files || files.length === 0) {
			setFilesPreview([]);
		} else {
			let arr = [];
			for (let i = 0; i < files.length; i++) {
				arr.push({
					name: files[i].name,
					link: URL.createObjectURL(files[i].file),
				});
			}

			setFilesPreview(arr);
		}
	}, [files]);
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
						{filesPreview &&
							filesPreview.map((file, index) => (
								// file is object {url, name}
								<Col md={multiple ? 3 : 12} key={file?.name || file}>
									<div className={`images-preview__item`}>
										<OverlayTrigger
											placement='top'
											overlay={<Tooltip>Set avatar</Tooltip>}
										>
											<div
												className='avatar-box'
												{...(multiple && { onClick: setAvatarIndex(index) })}
											>
												{(avatarIndex || 0) === index && (
													<div className='set-avatar'></div>
												)}
											</div>
										</OverlayTrigger>

										<img
											src={file?.link || file}
											alt={file?.name}
											data-name={file?.name}
										/>
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
							))}
					</Row>
				</Container>
			</div>
		</Form.Group>
	);
}

FilesUpload.propTypes = {
	files: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
	filesChange: PropTypes.func,
	removeFile: PropTypes.func,
	multiple: PropTypes.bool,
	avatarIndex: PropTypes.number,
	setAvatarIndex: PropTypes.func,
};
