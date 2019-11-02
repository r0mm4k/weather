import React from 'react';

const ErrorIndicator = ({error = 'Error!'}) => {
  return (
    <div className="alert text-center alert-primary" role="alert">
      {error}
    </div>
  );
};

export default ErrorIndicator;
