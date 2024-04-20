import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


class NotificationItem extends PureComponent {
    render () {
        const { type, value, html, markAsRead, id } = this.props;
        const style = css(type === 'default' ? styles.default : styles.urgent);
        return (
            html ? (
                <li data-notification-type={ type } dangerouslySetInnerHTML={ html } onClick={ () => markAsRead(id) } className={ style }></li >
            ) : (
                <li data-notification-type={ type } onClick={ () => markAsRead(id) } className={ style }>{ value }</li>
            )
        );
    }
}

NotificationItem.propType = {
    html: PropTypes.shape({
        __html: PropTypes.string,
    }),
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    markAsRead: PropTypes.func,
    id: PropTypes.number,
};

NotificationItem.defaultProps = {
    type: 'default',
    value: '',
    markAsRead: () => { },
    id: 0,
}

const styles = StyleSheet.create({
    default: {
        color: 'blue',
        fontSize: '20px',
        padding: '10px 8px'
    },

    urgent: {
        color: 'red',
        fontSize: '20px',
        padding: '10px 8px'
    }
})

export default NotificationItem;