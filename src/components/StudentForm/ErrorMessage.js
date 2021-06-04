import React from 'react';

function ErrorMessage({ errors }) {
  return (
    <>
      <small className='text-danger'>{errors[0]}</small>
    </>
  );
}

export default ErrorMessage;
