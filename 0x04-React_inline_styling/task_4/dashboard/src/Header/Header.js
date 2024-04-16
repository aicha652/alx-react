import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton_logo.jpg'


function Header() {
    return(
    <div className={css(styles.app_header)}>
        <img src={logo} className={css(styles.app_logo)} alt="logo" />
        <h1>
          School dashboard
        </h1>
    </div>
    );
};

const styles = StyleSheet.create({
  app_header: {
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'left',
    justifyContent: 'left',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white'
  },

  app_logo: {
    width: '30%'
  }
})

export default Header;