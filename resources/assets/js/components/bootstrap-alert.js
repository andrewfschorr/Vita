import React from 'react';

const Alert = ({ name, type, clickHandler }) => (
    <div className={`alert alert-${type} alert-dismissible fade show`} role="alert">
        <button
            onClick={clickHandler}
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
        >
            <span aria-hidden="true">&times;</span>
        </button>
        <strong>
            Congrats!{' '}
            <span role="img" aria-label="success">
                🎉
            </span>
        </strong>
        &nbsp;Your site is now named <strong>{name}</strong>.
    </div>
);

// TODO figure this ish out
Alert.propTypes = {};
Alert.defaultProps = {};

export default Alert;
