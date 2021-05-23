import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Col, Container, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

function CloudImages({ cloudImages }) {
	const [images] = useState(cloudImages);

	return (
		<div className='images-preview'>
			<Container>
				<Row>
					{images &&
						images.map((file, index) => (
							<Col md='3' key={file.publicId}>
								<div className={`images-preview__item`}>
									{/* <OverlayTrigger
										placement='top'
										overlay={<Tooltip>Set avatar</Tooltip>}
									>
										<div
                  className='avatar-box'
                  onClick={setAvatarIndex(index)}
                >
                  {(avatarIndex || 0) === index && (
                    <div className='set-avatar'></div>
                  )}
                </div>
									</OverlayTrigger> */}

									<img
										src={file?.link}
										alt={file?.name}
										data-name={file?.name}
									/>
									<div className='images-preview__item__overlay'>
										<OverlayTrigger overlay={<Tooltip>Remove</Tooltip>}>
											<FontAwesomeIcon
												icon={faTrashAlt}
												className='images-preview__item__icon'
												// onClick={removeFile}
											/>
										</OverlayTrigger>
									</div>
								</div>
							</Col>
						))}
				</Row>
			</Container>
		</div>
	);
}

CloudImages.propTypes = {
	cloudImages: PropTypes.array,
};

export default CloudImages;
