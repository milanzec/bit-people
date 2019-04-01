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
                <button onClick={this.props.onSwitchLayoutClick}><i className="fas fa-grip-horizontal"></i>Switch</button>
            </header>
        );
    }
}

export default Header;