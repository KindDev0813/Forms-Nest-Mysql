# Forms
**project in progress**

# This Project Include:
* MySQL
* react
* nestJS
* typeORM <sub>//connecting to mysql//</sub>
* bootstrap
* bcrypt

# Which Forms?
- [x] sign in 
- [x] sign up

# How to Connect Your MySQL?
Go to the web-server folder = > src folder = > config folder => config file
![image](https://user-images.githubusercontent.com/108211669/198382456-b2e9e295-8405-45ff-b58d-12a1ca83bdf1.png)

# How to add/change validation?
### What is already optional?
Two validations already exsist: 
- [x] require <sub>checks if any input was added</sub>
- [x] email <sub>checks if the input is the correct format for an email using regax</sub>
- [x] minLen <sub>checks if the input lengths is at least the amount you asked for</sub>
- [x] numbers <sub>checks if the input has at least 1 number</sub>
### How to add a new validation?
Go to the validation file (website folder => src folder => common folder => validation) add your if statement to check your validation
### How to add a validation to a field?
To add them simply go to the api file (website folder => src folder => DAL folder => api) and change the data object for example:
![image](https://user-images.githubusercontent.com/108211669/198567878-b28285b9-0842-4bb5-b07c-375342a7d0a2.png)

# Pictures
<details>
    <summary>Log in form</summary>
    <ul>
        <li><img src='https://user-images.githubusercontent.com/108211669/201931396-66583297-984e-4b0e-a3e9-3d987eff82dc.png'/> </li>
    </ul>
</details>
<details>
    <summary>Sign in form</summary>
    <ul>
        <li><img src='https://user-images.githubusercontent.com/108211669/201932187-65842bd9-0bc6-42b1-a1aa-e4c86381978a.png'/></li>
    </ul>
</details>
<details open>
    <summary>Home page</summary>
    <ul>
      <details>
         <summary>before login in</summary>
         <ul>
            <li><img src='https://user-images.githubusercontent.com/108211669/201932483-b0052ff0-d8e1-407b-81ca-2d586eb22fd7.png'/>
            <p>a click on the light blue text would take the user back to the log in form</p></li>
         </ul>
      </details>
      <details>
         <summary>after login in</summary>
         <ul>
            <li><img src='https://user-images.githubusercontent.com/108211669/201935182-a9f2e4e1-d94f-422d-9ddb-fce19cad6421.png'/>
            <p>after pressing enter in the login form the user would be transfered to the home page and the user first name would be used</p></li>
         </ul>
      </details>
    </ul>
</details>

# More
please read the inside README of both web-server and website files
web-server is more information about nestJS
and website is more information about react
