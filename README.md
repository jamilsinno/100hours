# My Awesome Project
The No Steam Game Left Behind application use your steam profile to pull games and their respective achievements. You can then access the games individually and add a to do list to each game.

**Link to project:** https://github.com/jamilsinno/100hours

![Login page](/public/images/Login.png)
![Dashboard Page](/public/images/Dashboard.png)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, EJS, Node.js, Express, Passport.js, Tailwind CSS, Daisy UI, MongoDB

The project is a Full Stack application built using JavaScript and Node.js. Login is through Steam using the Passport.js Steam profile. Styling used for the front end is provided from Tailwind and Daisy UI. 

Once to dos are added, can indicate completion through a simple click, and deleting the todo.

## Optimizations
 - Host the project
 - Add a sort function for games based on user input
 - Add completion of achievements. Colored vs gray-scale to indicate completion of achievement.
 - Favorite to dos
 - Favorite games
 - Import friends list
 - Indicate private vs public status from Steam 

## Lessons Learned:

Began building the application using EJS. Styling with CSS became a time consuming and demanding process. Started exploring the use of Tailwind CSS and DaisyUI to ease the front-end design decision making.

## To start:

Prior to hosting, you will need to `run npm start && npm run dev` in 2 different terminals and use http://localhost:2121 to access the application.

Create a .env file in your config folder with the following variables:

```
PORT =
DB_STRING =
STEAM_API_KEY =
BASE_URL =
```

You will need your own Steam API key to instert to `STEAM_API_KEY` and a MongoDB instance to add to `DB_STRING`.

## Dependencies:
@node-rs/bcrypt: 1.6.1,  
axios: 0.27.2,  
bcrypt: 5.0.1,  
connect-mongo: 3.2.0,  
daisyui: 2.31.0,  
dotenv: 8.2.0,  
ejs: 3.1.6,  
express: 4.17.1,  
express-flash: 0.0.2,  
express-session: 1.17.1,  
mongodb: 3.6.5,  
mongoose: 5.12.3,  
morgan: 1.10.0,  
node-fetch: 2.6.7,  
node-quickbooks: 2.0.39,  
node-steam-openid: 1.0.1,  
nodemon: 2.0.7,  
passport: 0.6.0,  
passport-local: 1.0.0,  
passport-openid: 0.4.0,  
passport-steam: 1.0.17,  
validator: 13.6.0  

# Dev Dependencies:  
tailwindcss": 3.1.8