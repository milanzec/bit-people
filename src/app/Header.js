import React, { Component } from "react";
import SwitchLayout from "./SwitchLayout";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <header className='center-align'>
                <h4>Bit Persons</h4>
                <SwitchLayout isToggleOn={this.props.isToggleOn} />
            </header>
        );
    }
}

export default Header;