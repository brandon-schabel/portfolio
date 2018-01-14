import React, {Component} from 'react';
import PictureDisplay from './PictureDisplay';
import {CloudinaryContext} from 'cloudinary-react';
import config from '../../config'
import {Row} from 'react-bootstrap';
import './PictureRow.css'

// change to functional
class PictureRow extends Component {
    componentWillMount() {
        console.log(this.props);
        // instead of assigning this.picturesToDisplay, just invoke
        // this.numOfPicsInRow(); then just push to this.picturesToDisplay
        this.picturesToDisplay = this.numOfPicsInRow();
    }

    numOfPicsInRow() {

        let pictures = [];

        pictures.push(
            <PictureDisplay key={pictures.length} publicId={this.props.images[0]} imgHeight={this.props.imgHeight} imgWidth={this.props.imgWidth}></PictureDisplay>
        )

        if (this.props.images.length > 1) {
            pictures.push(
                <PictureDisplay key={pictures.length} publicId={this.props.images[1]} imgHeight={this.props.imgHeight} imgWidth={this.props.imgWidth}></PictureDisplay>
            )
        }

        if (this.props.images.length > 2) {
            pictures.push(
                <PictureDisplay key={pictures.length} publicId={this.props.images[2]} imgHeight={this.props.imgHeight} imgWidth={this.props.imgWidth}></PictureDisplay>
            )
        }

        return pictures;
    }

    render() {
        return (
            <Row>
                <CloudinaryContext cloudName={config.cloudinaryCloudName}>
                    {this.picturesToDisplay}
                </CloudinaryContext>
            </Row>
        );
    }
}

export default PictureRow;
