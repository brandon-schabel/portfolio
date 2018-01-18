import React from 'react';
import './PictureDisplay.css';
// change to functional component
import {Image, Transformation} from 'cloudinary-react';
import LazyLoad from 'react-lazy-load'
import {Col} from 'react-bootstrap'

const Picture = (props) => {
    //const imgWidth=300;
    //const imgHeight=200;
    return (
        
        <Col md={4} className="pictureDisplay">
            <LazyLoad>
                <center>
                <Image key={Math.rand} publicId={props.publicId}>
                    <Transformation
                        crop="scale"
                        width={props.imgWidth}
                        height={props.imgHeight}
                        dpr="auto"
                        responsive_placeholder="blank"/>
                </Image>
                </center>
            </LazyLoad>
        </Col>
    );
}

export default Picture;
