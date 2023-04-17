import React, { useState } from "react";
import { login } from "../api/login";
import { useParams } from "react-router-dom";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    const data={
      username:username,
      password:password
    }
    login(data).then(res=>{
        console.log(res);
    })
    
    event.preventDefault();
    if (isRegistering) {
      // handle registration logic
    } else {
      // handle login logic
    }
  };

  return (
    <form onSubmit={handleSubmit}>
     <span> <label style={{marginRight: '10px'}}>
        账号:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      < br />
      </span>
      <span> <label style={{marginRight: '10px'}}>
        密码:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      </span>
      <button type="submit" style={{marginRight: '10px'}}>{isRegistering ? "注册" : "登录"}</button>
      <button type="button" onClick={() => setIsRegistering(!isRegistering)}>
        {isRegistering ? "已有账号？立即登录" : "暂无账号? 注册"}
      </button>
    </form>
  );
}

export default Login;
