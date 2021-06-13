import "firebase/auth";
import firebase from "./firebase";
import store from '../redux/store';
import {Link, useHistory} from "react-router-dom";
import React from 'react'

export const SignIn = () => {
    const globalState = React.useContext(store);
    const dispatch = globalState;
    const history = useHistory()

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState('')

    const handleSignIn = async () => {
        try {
            const user = await firebase.auth().signInWithEmailAndPassword(email, password)
            if (user.user.email === email) {
                dispatch({ type: 'LOGIN', email: user.user.email });
                history.push('/');
                localStorage.setItem('isLogin', 'true')
            } else {
                console.error('error')
            }
        } catch(e) {
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
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <input type="button" value='Sign In' onClick={handleSignIn}/>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <div>
                <span>don't have account ? </span>
                <Link to='/sign-up'>create</Link>
            </div>
        </>
    )
}
