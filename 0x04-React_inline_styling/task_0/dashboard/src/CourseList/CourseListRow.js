import React from 'react';
import PropTypes from 'prop-types';

function CourseListRow ({ isHeader, textFirstCell, textSecondCell }) {
    const color = { backgroundColor: isHeader? '#deb5b545' : '#f5f5f5ab'};
    return (
        <tr style={ color }>
            {
                isHeader ? (
                    textSecondCell ? (
                        <>
                            <th>{ textFirstCell }</th>
                            <th>{ textSecondCell }</th>
                        </>
                    ) : (
                        <th colSpan={ 2 } >{ textFirstCell }</th>
                    )
                ) : (
                    <>
                        <td style="{{ bbackgroundColor: #f5f5f5ab}}">{ textFirstCell }</td>
                        <td style="{{ bbackgroundColor: #f5f5f5ab}}">{ textSecondCell }</td>
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

export default CourseListRow;