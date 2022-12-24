import React, {useState} from "react";
import Axios from "axios";
import Cookies from "universal-cookie";

function Login({ setIsAuth }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const cookies = new Cookies();
    const login = ()=> {
        Axios.post("http://localhost:3001/login", {
            username,
            password,
          }).then((res) => {
            const { firstName, lastName, username, token, userId } = res.data;
            cookies.set("token", token);
            cookies.set("userId", userId);
            cookies.set("username", username);
            cookies.set("firstName", firstName);
            cookies.set("lastName", lastName);
            setIsAuth(true);
        });
    };
    return(
        <div className="login">
            <h2 id="h22">Log In</h2><br/>
            <input placeholder="Username" onChange={(event)=>{
                setUsername(event.target.value);
            }} />
            <input placeholder="Password" onChange={(event)=>{
                setPassword(event.target.value);
            }} />
            <button onClick={login}>Log In</button>
        </div>
    )
}

export default Login;