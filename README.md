# NODEJS-EXPRESS APPLICATION

## RUN APPLICATION

Use Docker Compose's command:

```
docker-compose -f docker-compose.yaml up -d
```

The server is listen at port 5000

### FEATURES

- Insert User
- Update User
- Delete User
- Search User

### Insert User - Method POST

```
localhost:3000/user/insert

body: {
    username: "anle",
    fullname: "Le Dang Hoang An",
    role: "Developer",
    projects: ["D&D", "Tiger"],
    activeYn: "Y",
}

Success -> Status: 201
Error -> Status: 400
```

### Update User - Method PATCH

```
localhost:3000/user/update/:username

param: username

body: {
    username: "anle",
    fullname: "Le Dang Hoang An",
    role 'Teacher',
    projects: ['D&D', 'Tiger'],
    activeYn: 'Y',
}

Success -> Status: 200
Error -> Status: 404
Error -> Status: 400
```

### Delete User - Method DELETE

```
localhost:3000/user/delete/:username

Success -> Status: 200
Error -> Status: 400
```

### Search Users - Method GET

```
localhost:3000/user/search

query: {
    username,
    fullname,
    role,
    projects,
    activeYn
}

Success -> Status: 200
```
