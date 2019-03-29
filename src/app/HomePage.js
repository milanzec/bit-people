import React, { Component } from "react";
import { fetchUsers } from "../services/usersService";
import './HomePage.css';
import ListItem from './ListItem';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        }
    }

    componentDidMount() {
        fetchUsers().then((users) => {
            return this.setState({
                users
            })
        })
    }

    render() {

        if (!this.state.users.length) {
            return <h3>Loading...</h3>
        }

        return this.state.users.map((user, index) => {
            return (
                <ListItem key={index} className='row' src={user.avatar} fullName={`${user.firstName} ${user.lastName}`} email={user.email} birthday={user.birthday} />
            )
        })
    }
}

export default HomePage;