import React, { Component } from 'react';
import './PictureDisplay.css';
// change to functional component
import {Image, Transformation } from 'cloudinary-react';

class Picture extends Component {
    render() {
        return (
            <div className="col-md-4 pictureDisplay">
                <Image key={Math.rand} publicId={this.props.publicId}>
                    <Transformation
                    crop="scale"
                    width = "300"
                    height = "200"
                    dpr = "auto"
                    responsive_placeholder = "blank"/>
                </Image>
            </div>
        );
    }
}

export default Picture;