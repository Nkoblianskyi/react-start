import {useState} from 'react';

const LoginForm = () => {
    const[login, setLogin] = useState('');
    const[password, setPassword] = useState('');

    const handleChangeLogin = (e) => setLogin(e.target.value);
    const handleChangePassword = (e) => setPassword(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('login', login);
        console.log('password', password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <span>Login</span>
                <input type="text" value={login} onChange={handleChangeLogin}/>
            </label>
            <label>
                <span>Password</span>
                <input type="password" value={password} onChange={handleChangePassword}/>
            </label>

            <button type='submit'>login</button>
        </form>
    );
};

export default LoginForm;