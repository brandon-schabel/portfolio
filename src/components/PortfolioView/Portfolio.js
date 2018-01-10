import React, {Component} from 'react';
import PictureRow from './PictureRow';
import './Portfolio.css';

class Portfolio extends Component {
    constructor(props) {
        super(props);
    }
    
    // '../../assets/images'
    componentWillMount() {
        // below we give it the path and file types we want to import
        this.allImages = this.importAll(require.context('../../assets/images', false, /\.(png|jpe?g|svg)$/));
        
        //once we have all the pictures pass them to the organizeImages function
        this.allPictureRows = this.organizeImages(this.allImages);
    }
    
    // this will grab every image in our portfolio folder and put it into an object
    importAll (r) {
        let images = {};
        r.keys().map((item, index) => {
            images[item.replace('./', '')] = r(item);
        });
        return images;
    }
    
    organizeImages(images) {
        // will organize images into arrays of 3 to pass into the PictureRow component,
        // we also handle if the sort ends on a number that isn't a multiple of 3
        
        let tempImageLinkArr = [];
        let linksSorted = [];
        let allPictureRows = [];
        
        for(let key in images) {
            tempImageLinkArr.push(images[key]);
            // checks to see if on last object
            if(images[key] === images[Object.keys(images)[Object.keys(images).length -1]]) { 
                linksSorted.push(tempImageLinkArr);
            }
            if(tempImageLinkArr.length === 3) {
                linksSorted.push(tempImageLinkArr);
                tempImageLinkArr = [];
            }
        }

        for(let i = 0; i< linksSorted.length; i++) {
            // then we take the sorted arrays of 3 and pass them to PictureRow components
            allPictureRows.push(<PictureRow key={i} images={linksSorted[i]}></PictureRow>);
        }
        
        return allPictureRows;
    }

    render() {
        return (
            <div className="portfolio">
                <div className="container portfolio">
                    {this.allPictureRows}
                </div>
            </div>
        );
    }
}

export default Portfolio;