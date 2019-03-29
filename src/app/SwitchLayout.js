import React, { Component } from 'react';

class SwitchLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: this.props.isToggleOn
        }

        // this.handleClick = this.handleClick.bind(this);
    }

    // handleClick() {
    //     this.setState(state => ({
    //         isToggleOn: !state.isToggleOn
    //     }));
    // }

    render() {
        return (
            <button onClick={this.props.isToggleOn}><i className="fas fa-grip-horizontal"></i>Switch</button>
        );
    }
}

export default SwitchLayout;