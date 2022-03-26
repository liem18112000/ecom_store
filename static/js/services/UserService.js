class UserService {
    getUserById(userId) {
        return fetch(`https://fakestoreapi.com/users/${userId}`)
            .then(res=>res.json())
            .catch(error => console.log(error));
    }

    getUsers(size = 10, sort = "desc") {
        return fetch(`https://fakestoreapi.com/users?limit=${size}&sort=${sort}`)
            .then(res=>res.json())
            .catch(error => console.log(error));
    }

    findUserByUsernameAndPassword(username, password) {
        return fetch('https://fakestoreapi.com/users')
            .then(res=>res.json())
            .then(users => users.filter(user => user.username === username && user.password === password))
            .catch(error => console.log(error));
    }

    addUser(newUser) {
        return fetch('https://fakestoreapi.com/users',{
            method:"POST",
            body:JSON.stringify(newUser)
        })
        .then(res=>res.json())
        .catch(error => console.log(error));
    }

    updateUser(updateUser) {
        return fetch(`https://fakestoreapi.com/users/${updateUser.id}`,{
            method:"PUT",
            body:JSON.stringify(updateUser)
        })
        .then(res=>res.json())
        .catch(error => console.log(error));
    }

    deleteUser(userId) {
        return fetch(`https://fakestoreapi.com/users/${userId}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .catch(error => console.log(error));
    }
}