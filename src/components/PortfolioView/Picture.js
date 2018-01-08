import React, { Component } from 'react';

// change to functional component
class Picture extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="col-md-4">
                <img src={this.props.image} height="250" width="310"></img>
                <br/>
            </div>
        );
    }
}

export default Picture;