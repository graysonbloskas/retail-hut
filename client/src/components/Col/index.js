import React from 'react'

function Col(props) {
    return (
      <div className={size}>
        {props.children}
      </div>
    );
  }

export default Col;