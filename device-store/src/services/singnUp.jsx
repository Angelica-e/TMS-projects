import "firebase/auth";
import firebase from "./firebase";
import store from '../redux/store';
import {Link, useHistory} from "react-router-dom";
import React from 'react'


export const SignUp = () => {
    const globalState = React.useContext(store);
    const dispatch = globalState;
    const history = useHistory()

    const [email, setEmail] = React.useState()
    const [password, setPassword] = React.useState()
    const [error, setError] = React.useState('')

    const handleSignUp = async () => {
        try {

        const user = await firebase.auth().createUserWithEmailAndPassword(email, password)

        if(Object.keys(user).length > 0) {
            const user = await firebase.auth().signInWithEmailAndPassword(email, password)
            if (user.user.email === email) {
                dispatch({ type: 'LOGIN', email: user.user.email });
                history.push('/');
                localStorage.setItem('isLogin', 'true')
            } else {
                console.error('error')
            }
        }
        } catch(e) {
            console.log(e)
            setError(e.message)
        }
    }

    return (
        <>
            <input
                name='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <input
                name='password'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <input type="button" value='Sign Up' onClick={handleSignUp}/>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <div>
                <span>already have account ? </span>
                <Link to='/sign-in'>proceed</Link>
            </div>
        </>
    )
}