import React from 'react';
import PropTypes from 'prop-types';
import TextSecondary from '../TextSecondary';

function SessionTime({ className, sessionTime }) {
  return (
    <div className={`session-time ${className}`}>
      <TextSecondary>{`session time ${sessionTime}s`}</TextSecondary>
    </div>
  );
}

SessionTime.defaultProps = {
  className: '',
};

SessionTime.propTypes = {
  className: PropTypes.string,
  sessionTime: PropTypes.number.isRequired,
};

export default SessionTime;
