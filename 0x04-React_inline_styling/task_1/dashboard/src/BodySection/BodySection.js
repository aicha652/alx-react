import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';


class BodySection extends Component {
    render () {
        return (
            <div className={ css(styles.bodySection) }>
                <h2>{ this.props.title }</h2>
                { this.props.children }
            </div>
        );
    }
};

const styles = StyleSheet.create({
    bodySection: {
        marginBottom: '40px'
    }
})

BodySection.propTypes = {
    title: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default BodySection;