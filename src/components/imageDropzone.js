import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

export default class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = { file: '', imageData: '' };
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('handle uploading -', this.state);
    }

    onDrop(files) {
        const file = files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            this.setState({
                file: file,
                imageData: reader.result
            });
        }

        reader.readAsDataURL(file)
    }

    render() {
        const { imageData } = this.state;
        let imagePreview = null;
        
        if (imageData) {
            imagePreview = (<img src={imageData} />);
        } else {
            imagePreview = (<div>Por favor, selecione uma imagem para preview</div>);
        }

        return (
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <button
                        type='submit'
                        onClick={(e) => this.handleSubmit(e)}>Upload Image</button>
                    <Dropzone onDrop={this.onDrop.bind(this)}>
                        {imagePreview}
                    </Dropzone>
                </form>
            </div>
        )
    }
}
