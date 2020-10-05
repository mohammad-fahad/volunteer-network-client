import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { Button, Form } from 'react-bootstrap';
import logo from '../../logos/Group 1329.png';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };
 
      
    

    const { setLoggedInUser } = useContext(UserContext);    
    const auth = firebase.auth();
    const googleProvider = new firebase.auth.GoogleAuthProvider()
    const signInWithGoogle = () => {
        auth.signInWithPopup(googleProvider)
            .then((res) => {
                const {displayName, email} = (res.user)
                const signInUser = {name: displayName, email}
                setLoggedInUser(signInUser)
                history.replace(from);
            })
            .catch((error) => {
                console.log(error.message)
            })
    }
    return (
        <div className="text-center bg-light" style={{ height: '100%' }}>
            <img className="text-center" src={logo} style={{ height: '10vh', marginTop: '5vh' }} alt="" />
            <Form className="container border mt-5 p-5 bg-white" style={{ height: '75vh' }}>
                <h3>Login In with Google </h3>
                <br />
                <Button onClick={signInWithGoogle} variant="warning">
                    Google Login
                </Button>
            </Form>
        </div>
    );
};

export default Login;