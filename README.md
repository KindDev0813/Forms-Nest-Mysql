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
- [x] email <sub>checks if the input is the correct format for an email using regax</sub>
- [x] minLen <sub>checks if the input has at least the amount of symbols and letters you asked for </sub>
- [x] numbers <sub>checks if the input has at least 1 number</sub>
### How to add a new validation?
Go to the validation file (website folder => src folder => common folder => validation) add your if statement to check your validation
### How to add a validation to a field?
To add them simply go to the api file (website folder => src folder => DAL folder => api) and change the data object for example:
![image](https://user-images.githubusercontent.com/108211669/198567878-b28285b9-0842-4bb5-b07c-375342a7d0a2.png)

# Pictures
<img src='https://user-images.githubusercontent.com/108211669/198566230-b2cd15a7-a10d-4ef2-8309-1142e947fbe3.png' width=300 height=300/>    <img src='https://user-images.githubusercontent.com/108211669/198566375-f9630788-4f7a-4551-95ca-5764fa8d1332.png' width=400 height=300 />    <img src='https://user-images.githubusercontent.com/108211669/198381158-6e281f28-6be6-44b7-92d5-8143353af41e.png' width=300 height=300/>    <img src='https://user-images.githubusercontent.com/108211669/198566571-79d35018-1a37-418e-90f7-146aeeeaa46b.png' width=300 height=300/>


# More
please read the inside README of both web-server and website files
web-server is more information about nestJS
and website is more information about react
