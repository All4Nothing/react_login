import React, { useState } from 'react';

function Login() {
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');

    const handleInputId = (event) => {
        setInputId(event.target.value);
    }

    const handleInputPw = (event) => {
        setInputPw(event.target.value);
    }

    
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            onClickLogin();
        }
    }

    const onClickLogin = () => {
        console.log("click Login Btn");
    }


    return(
        <div>
            <h1>Login</h1>
            <div>
                <label htmlFor="input_id">ID: </label>
                <input type = "text" name = "input_id" value = {inputId} onChange = {handleInputId} />
            </div>
            <div>
                <label htmlFor="input_pw">PassWord: </label>
                <input type = "password" name = "input_pw" value = {inputPw} onChange = {handleInputPw} onKeyPress = {handleKeyPress} />    
            </div>
            <div>
                <button type="button" onClick={onClickLogin}>Login</button>
            </div>
        </div>
    )
}

export default Login;