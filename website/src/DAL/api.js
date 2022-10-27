const data = {
    username: {
        id: 0,
        serverName: 'name',
        placeholder: "Enter Username",
        label: "Username", iconName: "person-fill",
        validations: { require: true, minLen: 5, numbers: true },
        eror: "",
        type: "text",
        options: [],
        class: "singleLine",
        value: ""
    },
    password: {
        id: 1,
        serverName: 'password',
        placeholder: "Enter Password",
        label: "Password", iconName: "key-fill",
        validations: { require: true, minLen: 2 },
        eror: "",
        type: "password",
        class: "singleLine",
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
    Address: {
        id: 3,
        serverName: 'address',
        placeholder: "Street,number,city,zip",
        label: "Address", iconName: "building",
        validations: { require: true, minLen: 10 },
        eror: "",
        type: "text",
        options: [],
        class: "singleLine",
        value: ""
    },
    firstName: {
        id: 4,
        serverName: 'firstName',
        placeholder: "first name",
        label: "First Name", iconName: "person-circle",
        validations: { require: true, minLen: 2 },
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
        validations: { require: true, minLen: 2 },
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
        validations: { require: true, minLen: 9 },
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
        validations: { require: false },
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
        validations: { require: false },
        eror: "",
        type: "text",
        options: [],
        class: "col-6",
        value: ""
    },
}

export async function getLoginFormData() {
    return { username: { ...data.username }, password: { ...data.password } }
}

export async function getLoginFormDataByEmail() {
    const Email = { ...data.Email }
    Email.class = 'singleLine'
    return { email: Email, password: { ...data.password } }
}

export async function getSignUpFormData() {
    const Adres = { ...data.Address }
    Adres.validations = {}
    return {
        firstname: { ...data.firstName }, lastname: { ...data.lastName }, username: { ...data.username },
        password: { ...data.password }, email: { ...data.Email }, phone: { ...data.phone }, country: {...data.Country}, 
        city:{...data.City}, Address: Adres
    }
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