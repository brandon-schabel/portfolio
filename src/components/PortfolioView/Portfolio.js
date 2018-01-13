import React, {Component} from 'react';
import axios from 'axios'
import PictureRow from './PictureRow';
import './Portfolio.css';
import config from '../../config'

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            picureRows: []
        }
    }

    componentWillMount() {
        this.getCloudinaryPicturesList();
    }

    getCloudinaryPicturesList() {
        let componentThis = this;
        axios
            .get(config.cloundinaryPicturePortfolio, {
            Headers: {
                API_KEY: config.API_KEY
            }
        })
            .then((response) => {
                let pictures = response.data.resources;
                let pictureLinkArr = [];
                for (let i = 0; i < pictures.length; i++) {
                    pictureLinkArr.push(pictures[i].public_id);
                }

                pictureLinkArr = componentThis.splitIntoArrsOf3(pictureLinkArr);
                pictureLinkArr = componentThis.convToPictureRowsComponents(pictureLinkArr);

                componentThis.setState({picureRows: pictureLinkArr});

            })
            .catch((error) => {
                console.log(error);
            });
    }

    splitIntoArrsOf3(arr) {
        // will organize images into arrays of 3
        let tempImageLinkArr = [];
        let linksSorted = [];

        for (let i = 0; i < arr.length; i++) {
            tempImageLinkArr.push(arr[i]);
            if (i === arr.length) {
                linksSorted.push(tempImageLinkArr);
            }
            if (tempImageLinkArr.length === 3) {
                linksSorted.push(tempImageLinkArr);
                tempImageLinkArr = [];
            }
        }
        return linksSorted;

    }

    convToPictureRowsComponents(arr) {
        let allPictureRows = [];

        for (let i = 0; i < arr.length; i++) {
            // then we take the sorted arrays of 3 and pass them to PictureRow components
            allPictureRows.push(
                <PictureRow key={i} images={arr[i]}></PictureRow>
            );
        }
        return allPictureRows;
    }

    render() {
        return (
            <div className="portfolio">
                <div className="container-fluid portfolio">
                    {this.state.picureRows}
                </div>
            </div>
        );
    }
}

export default Portfolio;