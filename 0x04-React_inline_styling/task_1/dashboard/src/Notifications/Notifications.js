import React from 'react';
import './Notifications.css'
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem.js'
import { getLatestNotification } from '../utils/utils.js';
import closeIcon from '../assets/close-icon.png'

function Notifications() {
    function buttonHandler() {
        console.log('Close button has been clicked');
    }

    return (
        <div className={ css(styles.notifications) }>
            <button style={{ float: 'right' }} aria-label='Close' onClick={buttonHandler}>
                <img src={closeIcon} alt='Close notifications' />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <NotificationItem type='default' value='New course available' />
                <NotificationItem type='urgent' value='New resume available' />
                <NotificationItem type='urgent' html={ getLatestNotification() } />
            </ul>
        </div >
    );
};

const styles = StyleSheet.create({
    notifications: {
        border: 'dotted',
        padding: '30px'
    }
})

export default Notifications