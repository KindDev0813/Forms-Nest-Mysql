const data = {
    firstName: {
        id: 4,
        serverName: 'firstName',
        placeholder: "first name",
        label: "First Name", iconName: "person-circle",
        validations: { minLen: 2, require: true },
        eror: "",
        type: "text",
        options: [],
        class: "col-6",
        value: ""
    },
    lastName: {
        id: 5,
        serverName: 'lastName',
        placeholder: "last name",
        label: "Last Name", iconName: "person-circle",
        validations: { minLen: 2, require:true },
        eror: "",
        type: "text",
        options: [],
        class: "col-6",
        value: ""
    },
    username: {
        id: 0,
        serverName: 'name',
        placeholder: "Enter Username",
        label: "Username", iconName: "person-fill",
        validations: { minLen: 5, numbers: true, require: true },
        eror: "",
        type: "text",
        options: [],
        class: "col-6",
        value: ""
    },
    password: {
        id: 1,
        serverName: 'password',
        placeholder: "Enter Password",
        label: "Password", iconName: "key-fill",
        validations: { require:true, minLen: 2 },
        eror: "",
        type: "password",
        class: "col-6",
        value: ""
    },
    Email: {
        id: 2,
        serverName: 'email',
        placeholder: "Enter Email",
        label: "Email", iconName: "inbox-fill",
        validations: { require: true, email: true },
        eror: "",
        type: "text",
        options: [],
        class: "col-6",
        value: ""
    },
    phone: {
        id: 6,
        serverName: 'phone',
        placeholder: "phone number",
        label: "Phone Number", iconName: "telephone-fill",
        validations: { minLen: 9 },
        eror: "",
        type: "phone",
        options: [],
        class: "col-6",
        value: ""
    },
    City: {
        id: 7,
        serverName: 'city',
        placeholder: "city",
        label: "City", iconName: "pin-map-fill",
        validations: {},
        eror: "",
        type: "text",
        options: [],
        class: "col-6",
        value: ""
    },
    Country: {
        id: 8,
        serverName: 'country',
        placeholder: "country",
        label: "Country", iconName: "map",
        validations: {},
        eror: "",
        type: "text",
        options: [],
        class: "col-6",
        value: ""
    },
    Address: {
        id: 3,
        serverName: 'address',
        placeholder: "Street,number,city,zip",
        label: "Address", iconName: "building",
        validations: { minLen: 10 },
        eror: "",
        type: "text",
        options: [],
        class: "singleLine",
        value: ""
    },
}

export async function getLoginFormData() {
    const Username = { ...data.username }
    const Password = { ...data.password }
    Username.class = 'singleLine'
    Username.label = Username.label.concat([' or Email'])
    Username.placeholder = Username.placeholder.concat([' or Email'])
    Password.class = 'singleLine'
    return { usernameOrEmail: Username, password: Password }
}

export async function getSignUpFormData() {
    return data
}

export async function checkUser(user) {
    return await fetch('http://localhost:4005/users/login', {
        credentials: 'include', method: 'POST'
        , headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, body: JSON.stringify(user)
    })
}

export async function setUser(newuser) {
    return await fetch('http://localhost:4005/users/signup', {
        credentials: 'include', method: 'POST'
        , headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }, body: JSON.stringify(newuser)
    })
}

export async function saveUser(userdata){
    data.user= userdata
    return 'user saved'
}

export function getUser(){
    return data.user
}