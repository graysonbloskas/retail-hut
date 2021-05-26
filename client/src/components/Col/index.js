import React from 'react'

function Col(props) {
    return (
      <div className="col-md">
        {props.children}
      </div>
    );
  }

export default Col;