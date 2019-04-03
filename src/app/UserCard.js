import React, { Component } from 'react';
import './UserCard.css';

class UserCard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="row">
                <div className="col s12" >
                    <div className={`card ${this.props.gender === 'female' ? '#ffebee red lighten-5' : ''}`} >
                        <div className="card-image" >
                            <img src={this.props.src} alt='User card' style={{ height: '220px' }} />
                            <span className="card-title">{this.props.fullName}</span>
                        </div>
                        <div className="card-content">
                            <p>{this.props.email}</p>
                            <p>{this.props.birthday}</p>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export {
    UserCard
}