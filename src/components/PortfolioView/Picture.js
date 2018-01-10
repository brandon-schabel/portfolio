import React, { Component } from 'react';
import './Picture.css';
// change to functional component
class Picture extends Component {
    render() {
        return (
            <div className="col-md-4">
                <img src={this.props.image} className="image"></img>
                <br/>
            </div>
        );
    }
}

export default Picture;