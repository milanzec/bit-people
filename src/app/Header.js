import React, { Component } from "react";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <header className='center-align'>
                <h1>Bit Persons</h1>
            </header>
        );
    }
}

export default Header;