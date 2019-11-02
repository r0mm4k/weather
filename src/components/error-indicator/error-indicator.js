import React from 'react';

const ErrorIndicator = ({error = 'Error!'}) => {
  return (
    <div className="alert text-center alert-danger" role="alert">
      {error}
    </div>
  );
};

export default ErrorIndicator;
