import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

function FetchedTopics({ topics }) {
  return (
    <div className="fetched-topics">
      <h3>Jump To</h3>

      {topics.length === 0
        ? <div className="topic text-secondary">No topics fetched yet.</div>
        : (
          <select>
            <option>Select topic...</option>
            {topics.map(t => <option value={t} key={t}>{t}</option>)}
          </select>
        )
      }
    </div>
  );
}

FetchedTopics.propTypes = {
  topics: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FetchedTopics;
