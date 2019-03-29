class User {
    constructor(id, avatar, firstName, lastName, email, birthday) {
        this.id = id;
        this.avatar = avatar;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = `${email.slice(0, 3)}......${email.slice(9)}`;
        this.birthday = birthday;
    }
}

export {
    User
}