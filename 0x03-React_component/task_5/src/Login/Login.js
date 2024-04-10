import React from 'react';

function Login() {
    return(
    <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label>email</label>
        <input type="text"></input>
        <label>password</label>
        <input type="text"></input>
        <button>OK</button>
        <hr color="pink"></hr>
    </div>
    );
}

export default Login