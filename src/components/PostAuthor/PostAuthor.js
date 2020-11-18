import React from 'react';

export default ({ author, date }) => (
  <div>
    <span style={{ marginRight: 10 }}>{author}</span>
    <span>{date}</span>
  </div>
);
