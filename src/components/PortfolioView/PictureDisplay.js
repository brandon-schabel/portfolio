import React from 'react';
import './PictureDisplay.css';
// change to functional component
import {Image, Transformation} from 'cloudinary-react';
import LazyLoad from 'react-lazy-load'

const Picture = (props) => {
    return (
        <div className="col-md-4 pictureDisplay">
            <LazyLoad height={200}>
                <Image key={Math.rand} publicId={props.publicId}>
                    <Transformation
                        crop="scale"
                        width="300"
                        height="200"
                        dpr="auto"
                        responsive_placeholder="blank"/>
                </Image>
            </LazyLoad>
        </div>
    );
}

export default Picture;
