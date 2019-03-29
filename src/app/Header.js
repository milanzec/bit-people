import React, { Component } from "react";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <header className='center-align'>
                <h4>Bit Persons</h4>
            </header>
        );
    }
}

export default Header;