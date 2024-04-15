import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import BodySection from './BodySection';
import PropTypes from 'prop-types';


class BodySectionWithMarginBottom extends Component {
    render () {
        return (
            <div className={ css(styles.bodySectionWithMargin) }>
                <BodySection { ...this.props } />
            </div>
        );
    }
};

const styles = StyleSheet.create({
    bodySectionWithMargin: {
        marginBottom: '40px'
    }
})

BodySectionWithMarginBottom.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    title: PropTypes.string,
}

export default BodySectionWithMarginBottom;