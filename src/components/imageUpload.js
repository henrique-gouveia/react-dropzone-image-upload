import React, { Component } from 'react';

export default class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.state = { file: '', imageData: '' };
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('handle uploading -', this.state);
    }

    handleImageChange(e) {
        e.preventDefault();

        const reader = new FileReader();
        const file = e.target.files[0];

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
            imagePreview = (<img alt='' src={imageData} />);
        } else {
            imagePreview = (<div>Por favor, selecione uma imagem</div>);
        }

        return (
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input
                        type='file'
                        onChange={(e) => this.handleImageChange(e)} />
                    <button
                        type='submit'
                        onClick={(e) => this.handleSubmit(e)}>Upload Image</button>
                </form>
                <div>
                    {imagePreview}
                </div>
            </div>
        )
    }
}
