import React, { Component } from "react";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <header>
                <h4 className='center-align'>Bit Persons</h4>
                <div style={{ paddingBottom: '15px' }}>
                    <i className="fas fa-redo right"></i>
                    <i onClick={this.props.onSwitchLayoutClick} className="fas fa-grip-horizontal right"></i>
                </div>
            </header >

        );
    }
}

export default Header;