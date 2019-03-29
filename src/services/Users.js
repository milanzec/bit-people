const fetchUsers = () => {
    return fetch('https://randomuser.me/api/?results=15')
        .then((rawData) => {
            return rawData.json();
        })
        .then((posts) => {
            return posts;
        })
}

export {
    fetchUsers
}