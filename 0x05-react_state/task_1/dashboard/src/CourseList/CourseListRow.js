import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

function CourseListRow ({ isHeader, textFirstCell, textSecondCell }) {
    const color = { backgroundColor: isHeader? '#deb5b545' : '#f5f5f5ab'};
    const styling = css(isHeader ? styles.tr : null)
    return (
        <tr style={ color } className={ styling }>
            {
                isHeader ? (
                    textSecondCell ? (
                        <>
                            <th className={ css(styles.th) }>{ textFirstCell }</th>
                            <th className={ css(styles.th) }>{ textSecondCell }</th>
                        </>
                    ) : (
                        <th colSpan={ 2 }className={ css(styles.secTh) }>{ textFirstCell }</th>
                    )
                ) : (
                    <>
                        <td>{ textFirstCell }</td>
                        <td>{ textSecondCell }</td>
                    </>
                )
            }
        </tr>
    );
}

CourseListRow.defaultProps = {
    isHeader: false,
    textFirstCell: '',
    textSecondCell: '',
};

CourseListRow.propTypes = {
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};


const styles = StyleSheet.create({
    tr: {
        border: '1px solid lightgrey'
    },
    th: {
        borderBottom: '1px solid #ddd'
    },
    secTh: {
        textAlign: 'center'
    }
})
export default CourseListRow;