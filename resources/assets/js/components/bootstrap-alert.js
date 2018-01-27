import React from 'react';

const Alert = ({ message, type = 'success', clickHandler }) => (
    <div className={`alert alert-${type} alert-dismissible fade show`} role="alert">
        <button
            onClick={clickHandler}
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        <strong>
            {type === 'success' ? <span>Congrats! 🎉</span> : <span>Uh-oh...😱</span>}

        </strong>
        &nbsp;{message}
    </div>
);

// TODO figure this ish out
Alert.propTypes = {};
Alert.defaultProps = {};

export default Alert;
