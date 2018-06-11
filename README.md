
# 401 JS --  Lab 39 Form Validation

## Overview
This is a lab assignment from Code Fellows 401 - Javascript. The objective was integrate form validation error checking into the front-end of a full-stack react/redux application.  
- Home 
    -  When a user navigates to the home route they are presented with three routes (home, login, and signup).  The also have access to the "Sign up to our app" and "Login to our app" links below a welcome message.
- Login
    - When a user navigates to the Login route, they are presented with the login view of the auth-form component.  They can enter a username and password which tiggers a get request to the database and returns a token if the username and password are valid.  These fields require a minimum of 7 characters on input.
- Signup
    - When a user navigates to the Signup route, they are shown the sign-up view of the auth-form component that contains three fields.
        - username:  this field must contain at least 7 characters to pass our validation check  
        - email:  This field must also contain a minimum of 7 characters in addition to passing the built in html5 form validation that ensures the email is in the correct form of an email with a @ symbol included.
        - password: the password field mush also contain a minimum of 7 characters.

  

## Getting Started
In order to get started with this code please fork and clone the repo. You will need a number of dependencies in order to run this project. See the package.json for a list of dependencies. The front end of this project runs via a webpack build.  The webpack.dev.js and webpack.common.js files are set to build the front end application to run in the browser using the npm run watch command.  Ensure you run this is the frontend directory. This script will run a development version of the project by enabling webpack-dev-server which hot reloads the build based on changes to the code and will open a local version of the project in your browser.  Note: webpack-dev-server is not suitable for production code.

##Architecture
This project is built using Javascript ES6 with transpilation using Babel. The code is bundled via webpack.

- Main.js contains an entry point to the React Application and contains the store which holds the application state.

- Reducer/token.js: This module contains the reducer function that takes in the previous state and returns a new application state. It can SET a token or REMOVE a token.

- Action/auth.js: This module contains the action functions which are part of the reducer. It defines two sync functions, setToken and removeTokenAction as well as two async functions, signupRequest and loginRequest.  These functions are async because they are waiting on a response from a RESTAPI.

- App.js: this component contains the routes to AuthLanding, for signup and login utilizing the Auth-form and dashboard components.

- Auth-form.js:  this component contains an input form for a user to sign up or login to the application.  The input fields trigger handleSubmit and handleAction member methods.  

- Auth-landing.js:  AuthLanding contains the rendering lifecycle hooks that will be displayed depending on which route is selected by the user including signup, login or /...

- Auth-redirect.js:  this component contains a key piece of logic that determines which determines if a destination route exists and if a token is present and returns a redirect displaying the appropriate component dependent on the route.

- Dashboard.js: This module is the destination route when a user has successfully entered information into the authFrom and made it passed /signup OR /login.  

- Redux Middleware

    - redux-reporter.js:  This module sets up redux middleware console message that reports out in the following cases:

        - ACTION: When an action is dispactched by a component a console message will log that includes the action type and payload.
        - STATE: When the redux store changes state, a console message will log detailing the updated state.
        - ERROR: IN the event that there is an error in the redux middleware chain, an error message will be logged to the console.
    - redux-session.js:
        - This module sets up a middleware function call that iterates over the redux store object and calls a next callback when an action is dispatched to change the state of the redux store. If does this by currying multiple callbacks and storing the result of an action into a result binding and current state of the store into a state binding.

##Change Log
- 06-09-2018 11:00am - 2:00pm - added actions and reducers and new validations to the Auth components
- 06-09-2018 2:00pm - 4:00pm -troubleshooting fetchCookie and deleteCookie
- 06-09-2018 05:00pm - 06:00pm - Project working
- 06-11-2018 1:00pm - 2:00pm - confirming functionality and documentation

##Credits and Collaborations
- Thanks Vinicio for the demo code.  
- Thanks to 'slugbyte/sluggram' which is the origin of the forked backend repo running in this project. 

