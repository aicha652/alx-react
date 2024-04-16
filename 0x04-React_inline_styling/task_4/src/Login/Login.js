import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
    return(
    <div className={ css(styles.app_body) }>
        <p>Login to access the full dashboard</p>
        <label>email</label>
        <input type="text"></input>
        <label>password</label>
        <input type="text"></input>
        <button>OK</button>
        <hr color="pink"></hr>
    </div>
    );
};

const styles = StyleSheet.create({
    app_body: {
        marginLeft: '50px',
        marginTop: '40px'
    }
})

export default Login