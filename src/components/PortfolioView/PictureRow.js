import React, { Component } from 'react';
import PictureDisplay from './PictureDisplay';
import {CloudinaryContext} from 'cloudinary-react';
import config from '../../config'

// change to functional
class PictureRow extends Component {
    componentWillMount() {
        //instead of assigning this.picturesToDisplay, just invoke this.numOfPicsInRow();
        // then just push to this.picturesToDisplay
        this.picturesToDisplay = this.numOfPicsInRow();
    }
    
    numOfPicsInRow(){
        
        let pictures = [];
        
        pictures.push(
        <PictureDisplay key={pictures.length} publicId={this.props.images[0]}></PictureDisplay>)
        
        if(this.props.images.length > 1) {
            pictures.push(<PictureDisplay key={pictures.length} publicId={this.props.images[1]}></PictureDisplay>)
        } 
        
        if(this.props.images.length > 2) {
            pictures.push(<PictureDisplay key={pictures.length} publicId={this.props.images[2]}></PictureDisplay>)
        }
        
        return pictures;
    }
    
    render() {
        return (
            <div className="row" >
            <CloudinaryContext cloudName={config.cloudinaryCloudName}>
                {
                    this.picturesToDisplay
                }
            </CloudinaryContext>
            </div>
        );
    }
}

export default PictureRow;
