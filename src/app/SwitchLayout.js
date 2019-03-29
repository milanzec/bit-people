import React, { Component } from 'react';

class SwitchLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <button onClick={this.props.isToggleOn}><i className="fas fa-grip-horizontal"></i>Switch</button>
        );
    }
}

export default SwitchLayout;