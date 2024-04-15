import React from 'react';

function NotificationItem({type, value, html}) {
    return(
        <li data-notification-type={type} dangerouslySetInnerHTML={html ? { __html: html } : null}>{value}</li>
    )
}

export default NotificationItem;