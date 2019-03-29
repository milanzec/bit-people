import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <footer className='center-align'>
                <p>{new Date().getFullYear()} Copyright BIT</p>
            </footer>
        );
    }
}

export default Footer;