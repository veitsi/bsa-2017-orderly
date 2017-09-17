import React from 'react';
import FileInput from 'react-file-input';
import { Image, Modal, Button, Icon } from 'semantic-ui-react';
;

import Field from '../field';
import './attachment.scss';
import AppConfig from '../../../../../config';

const bgImage = (urlImage) => ({
	backgroundImage: `url(${urlImage})`
})

let tempKey = 0;

class Attachment extends Field {
	constructor(props) {
		super(props, 'attachment')
		this.state = {
			imageModalOpen: false
		}
	}

	handleOpen = (event, fileName) => {
		event.preventDefault()
		event.stopPropagation()
		this.setState({imageModalOpen: fileName})
	}

	handleClose = () => this.setState({imageModalOpen: false})

	deleteFile = (fileName) => {
		const newValue = R.reject(item => item === fileName)(this.props.value.split(',')).join(',')
		this.props.deleteFile('image', this.props.id, this.props.tableId, newValue)
	}

	handleFile = (event) => {
        //this.props.onMouseDownRecordItem(event, this.props.id, this.props.recordIdx, this.props.fieldIdx);
		const file = event.target.files[0];
		let type;
		if (R.test(/^image/, file.type)) type = 'image';
		else {
			alert ('please upload the file in accepted format (image)')
			return
		}
		const fd = new FormData()
		fd.append('attachment', file)
		this.props.uploadAttachment(fd, type, this.props.id, this.props.tableId)
	}

	renderField() {
		return (
			<div className='attachment_default'>
				<div className='preview_wrapper'>
					{R.map(fileName => <div key={++tempKey * 34}
											style={bgImage(`${AppConfig.host}/files/attachment/${this.props.id}/image/${fileName}`)}
											className='image_icon'/>)(R.reject(R.isEmpty)(this.props.value.split(',')) || [])}
				</div>

			</div>
		)
	}

	fieldSelectedClass() {
        return this.props.selected ? ' selected' : '';
	}

	fieldActiveClass() {
		return '';
	}

	renderSelectedField() {
		return this.renderActiveField()
	}

	renderActiveField() {
		return (			
			<div className='attachment_cell' tabIndex="0">
				<div className="attachment_selected" onMouseUp={(event) => this.props.onMouseDownRecordItem(event, this.props.id, this.props.recordIdx, this.props.fieldIdx)}>
					<FileInput name="attachment"
							   accept="image/*"
							   onChange={this.handleFile}
							   className="add_file_btn"/>
					<div className='images_wrapper'>
						{console.log(R.reject(R.isEmpty)(this.props.value.split(',')), 'dfdfdfdfddd!!!!!!!!!!!!')}
						{R.map(fileName => <div key={++tempKey} className='around_image'>
												<Image
												  size='mini'
												  onMouseDown={ event => {
													this.handleOpen(event, fileName)
												  }}
												  className='attachment_file'
													   src={`${AppConfig.host}/files/attachment/${this.props.id}/image/${fileName}`} /></div>)
						(R.reject(R.isEmpty)(this.props.value.split(',')) || [])}
					</div>


				</div>
				<Modal
					open={Boolean(this.state.imageModalOpen)}
					onClose={this.handleClose}
					basic
					closeOnDimmerClick={true}
					size='small'
				>
					<Modal.Content className='image_modal_content'>
					   <div style={bgImage(`${AppConfig.host}/files/attachment/${this.props.id}/image/${this.state.imageModalOpen}`)}
							className='image_modal'/>
					</Modal.Content>
					<Modal.Actions>
						<p>Would you want to delete this file?</p>
						<Button onClick={this.handleClose} basic color='red' inverted>
							<Icon name='remove' /> No
						</Button>
						<Button onClick={() => {
							this.deleteFile(this.state.imageModalOpen)
							this.handleClose()
						}} color='green' inverted>
							<Icon name='checkmark' /> Yes
						</Button>
					</Modal.Actions>
				</Modal>
			</div>
		)
	}
}

export default Attachment;
