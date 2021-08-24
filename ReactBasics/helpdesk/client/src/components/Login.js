import React, {useState} from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";

function Login () {
    let history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        const data = { email: email, password: password};
        axios.post("http://localhost:3001/auth/login", data).then((response) => {
            /*Aware system is vulnerable to xss attacks, system is just for demo*/
            if (response.data.error) {
                alert(response.data.error);
            } else {
                sessionStorage.setItem("accessToken", response.data);
                history.push("/ticket");
                alert("Logged in");
                history.push('/tickets');
            }            
        });
    };

    return (
        <div>
            <h3>Log in</h3>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                    type="text" 
                    className="form-control" 
                    name="email"
                    placeholder="username@email.com" 
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                />
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    className="form-control" 
                    name="password"
                    placeholder="password" 
                    onChange={(event) => {
                        setPassword(event.target.value);
                    }}
                />
            </div>

            <div class="d-grid gap-2">
                <button 
                    onClick={login} 
                    className="btn btn-dark btn-lg btn-block">
                        Sign in
                </button>
            </div>
        </div>
    )
}

export default Login;
