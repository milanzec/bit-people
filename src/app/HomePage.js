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
                <li key={index} className='row'>
                    <div className='col s2'>
                        <img src={user[4]}></img>
                    </div>
                    <div className='col s10'>
                        <p>{`${user[0]} ${user[1]}`}</p>
                        <p><i className="fas fa-envelope"></i>{user[2]}</p>
                        <p><i class="fas fa-birthday-cake"></i>{user[3]}</p>
                    </div>
                </li>
            )
        })

        return (
            <main className='container'>
                <ul>
                    {bla}
                </ul>
            </main>
        );
    }
}

export default HomePage;