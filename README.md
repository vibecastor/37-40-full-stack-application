#401JS--Lab38Full-StackTokenManagement

## Overview
This is a lab assignment for Code Fellows 401 javascript.  The objective was to integrate token persistence into our existing React applicaiton using cookies.  When a user completes the Auth-form on the sign-up route, a POST request is made to the database.  If the request is successful, a token is returned on the response.  
That user can then logout and later return and login into the application.  Upon submit of the Auth-form on the login route, a GET request is made that contains the username and password.  If the username and password exist on the database then a token is generated ans returned to the session.  

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

