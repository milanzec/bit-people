import React, { Component } from 'react';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <li key={this.props.key} className='row'>
                <div className='col s1'>
                    <img src={this.props.src}></img>
                </div>
                <div className='col s11'>
                    <p>{this.props.fullName}</p>
                    <p><i className="fas fa-envelope"></i>{this.props.email}</p>
                    <p><i class="fas fa-birthday-cake"></i>{this.props.birthday}</p>
                </div>
            </li>
        );
    }
}

export default ListItem;