import { User } from "../entities/User";

const fetchUsers = () => {
    return fetch('https://randomuser.me/api/?results=15')
        .then((rawData) => {
            return rawData.json();
        })
        .then((posts) => {
            return posts;
        })
        .then((users) => {
            return users.results.map((userElement, index) => {
                return new User(index, userElement.picture.medium, userElement.name.first, userElement.name.last, userElement.email, userElement.dob.date);
            })
        })
        .then((users) => {
            return users.map((user) => {
                console.log(user.firstName);
                return (
                    [user.firstName, user.lastName, user.email, user.birthday, user.avatar]
                );
            })
        })
}

export {
    fetchUsers
}