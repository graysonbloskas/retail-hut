import React from 'react'

function Col(props) {
    return (
      <div className={props.size}>
        {props.children}
      </div>
    );
  }
export default Col;