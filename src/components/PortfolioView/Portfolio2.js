import React, {Component} from 'react';
import axios from 'axios' 
import PictureRow from './PictureRow';
import './Portfolio.css';
import PicturesLink from './PicturesLink';

class Portfolio extends Component {
    constructor(props) {
        super(props);

        /*
        let imgurPictureLinks = [];
        this.imgurPictureLinks = this.getImgurPictureLinks(PicturesLink.imgur, PicturesLink.clientID);
        console.log(this.imgurPictureLinks);
        */
        
        this.state = {imgurPictureLinks: this.getImgurPictureLinks(PicturesLink.imgur, PicturesLink.clientID)};
    }

    componentWillMount() {
        this.checkImgurAPICredits(PicturesLink.clientID);
    }

    componentDidMount(){
    }

    checkImgurAPICredits(clientID){
        axios.get('https://api.imgur.com/3/credits', {headers: {Authorization: clientID}})
        .then( (response) => {
            console.log(response);
        })
        .catch( (error) =>{
            console.log(error);
        }); 
    }
    
    getImgurPictureLinks(url, clientID) {
        axios.get(url, {headers: {Authorization: clientID}})
        .then( (response) => {
            let returnedPictures = response.data.data;
            let picturesLinkArr = []

            for(let i = 0; i < returnedPictures.length; i++) {
                picturesLinkArr.push(returnedPictures[i].link);
            }
            return picturesLinkArr;
        })
        .catch( (error) =>{
            console.log(error);
        }); 
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