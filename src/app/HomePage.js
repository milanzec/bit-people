import React, { Component } from "react";
import { fetchUsers } from "../services/Users";
import './HomePage.css';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: ['Loading...'],
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

        const bla = this.state.users.map((user, index) => {
            return (
                <div className='container' key={index}>
                    <p>{`${user[0]} ${user[1]}`}</p>
                    <p>{user[2]}</p>
                    <p>{user[3]}</p>
                </div>
            )
        })

        return (
            <main>
                {bla}
            </main>
        );
    }
}

export default HomePage;