import React, { Component } from 'react';
import Picture from './Picture';

// change to functional
class PictureRow extends Component {
    componentWillMount() {
        //instead of assigning this.picturesToDisplay, just invoke this.numOfPicsInRow();
        // then just push to this.picturesToDisplay
        this.picturesToDisplay = this.numOfPicsInRow();
    }
    
    numOfPicsInRow(){
        let pictures = [];
        
        pictures.push(<Picture key={Math.rand} image={this.props.images[0]}></Picture>)
        
        if(this.props.images.length > 1) {
            pictures.push(<Picture key={Math.rand} image={this.props.images[1]}></Picture>)
        } 
        
        if(this.props.images.length > 2) {
            pictures.push(<Picture key={Math.rand} image={this.props.images[2]}></Picture>)
        }
        
        return pictures;
    }
    
    render() {
        return (
            <div className="row" >
                {this.picturesToDisplay}
            </div>
        );
    }
}

export default PictureRow;