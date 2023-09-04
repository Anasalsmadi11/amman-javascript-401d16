import superagent from 'superagent'; // this is exactly as axios
import base64 from 'base-64';
// import jwt from 'jsonwebtoken';

import jwt_decode from "jwt-decode";

import React, { useEffect, useState } from "react";
export const LoginContext = React.createContext();
import cookie from 'react-cookies';
const API = `https://midproject.onrender.com`

export default function LoginProvider(props) {
    const [loginStatus, setLoginStatus] = useState(false);
    
    const [user, setUser] = useState({ username: cookie.load('username'),capabilities: cookie.load('capabilities')});


// scenairo: once the loginFunction is triggered it send the login data to the backend and then these data go through the basicAuth and Users.authBasic to check if the user exist in the DB and then return the data if existed
// the space after the Basic is very important
//.set(headerName, headerValue) is a method provided by the superagent library to set an HTTP header in the request being constructed.
// in the backend we used to get the logging info from authorization in this formula: (Basic laklskdfsa), then split them on space to get ["Basic","laklskdfsa"] the second index is the username and password encoded
    
const loginFunction = async (username, password) => { // check the basicAuth function in class-08 in backend  while you write this function,
        try {
            console.log('* wait.. it takes time to get the data from backend*')
            const response = await superagent // we already signed up in postman , now we are dealing with logging the existed user
                .post(`${API}/signin`) // authorization is from class-08 in back-end 
                .set('authorization', `Basic ${base64.encode(`${username}:${password}`)}`) // .set('authorization' ... sets the 'authorization' header for the HTTP request, method is specifically used to set HTTP headers for the request being made. 

                console.log("body>>>>>", response.body) /// the data stored in the body
            validateMyUser(response.body); // we need to validate to see if the user i logged with exists in DB or not
        } catch (err) {
            console.log('///////')
        }
    }

    const logoutFunction = () => {
        setLoginStatus(false);
        setUser({})
        cookie.remove('token');
        cookie.remove('username');
        cookie.remove('capabilities');

    }
    const validateMyUser = (user) => {
        if (user.token) {
            console.log('user token', user.token)
            // const userFromToken = base64.decode(user.token);
            const userFromToken = jwt_decode(user.token);
           
            console.log('user >>>>> ', userFromToken);
            setLoginStatus(true); // this to make the form disappear once i logged in
            setUser(userFromToken);
            // setUser(user)

            // the cookie is another way like localStorage to save data in case i refreshed the page 
            cookie.save('username', userFromToken.username); // we put user twice cus the ones who did the user in the backend the returned the user inside a user object
            cookie.save('capabilities', user.user.capabilities);
            cookie.save('token', user.token);

        } else {
            setLoginStatus(false);
            setUser({})
        }
    }
    useEffect(() => { // we used the useEffect here to make sure the setLoginStatus still true if i refrech the page bcause if it get back to its initia
        const myToken = cookie.load('token');
        if (myToken) { 
            // const userToken = jwt.decode(myToken)

            setLoginStatus(true);
            // setUser(user)
        } else {
            setLoginStatus(false);
            // setUser({});
        }
    }, []) // [] means this useEffect will only work once the page is refreshed
    
    const can = (action) => {
        // if (user.user.capabilities.includes(action)) {
        //     return true;
        // }
        // else { return false }

        // we read this from the returned user in backend
        return user?.user?.capabilities?.includes(action)  //instead of if statement we use this called safety check

    }
    const state = {
        loginStatus: loginStatus,
        user: user,
        loginFunction: loginFunction,
        logoutFunction: logoutFunction,
        can: can
    }
    return (
        <LoginContext.Provider value={state} >
            {props.children}
        </LoginContext.Provider>
    )
}