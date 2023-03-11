import React, { useState } from 'react';


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handleEmailChange = (event) => setEmail(event.target.value);

    const handlePasswordChange = (event) => setPassword(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();

        setError("Email ou senha inválidos")
    }

    return (
        <div>
            <h1>
                Login
            </h1>
            {error && <div className="error">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <label>Email: </label>
                        <input
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div>
                        <labell>Password: </labell>
                        <input
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                </div>
                <button type="submit">Login</button>"
            </form>
        </div>
    )
}

export default Login;
