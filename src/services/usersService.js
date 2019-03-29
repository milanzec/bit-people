import { User } from "../entities/User";

const fetchUsers = () => {
    return fetch('https://randomuser.me/api/?results=15')
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            return data.results.map((userElement, index) => {
                return new User(index, userElement.picture.medium, userElement.name.first, userElement.name.last, userElement.email, userElement.dob.date);
            })
        })
}

export {
    fetchUsers
}