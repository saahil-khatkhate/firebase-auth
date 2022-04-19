import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth, logInWithEmailAndPassword, signInWithGoogle } from '../firebase';
import styles from './styles/login.module.css';

const Login: React.FC = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) navigate('/dashboard');
    }, [user]);

    const login = e => {
        e.preventDefault();
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        logInWithEmailAndPassword(email, password);
    }

    return (
        <div className={styles.loginWrapper}>
            <div className={styles.loginContainer}>
                <form onSubmit={login}>
                    <input type='text' name='email' placeholder='Email...' />
                    <input type='password' name='password' placeholder='Password...' />
                    <button>Login</button>
                </form>
                <button className={styles.loginGoogle} onClick={signInWithGoogle}>Login with Google</button>
                <span><Link to='/reset'>Forgot Password</Link></span>
                <span>Don't have an account?<Link to='/register'>Register</Link> now</span>
            </div>
        </div>
    );
};

export default Login;