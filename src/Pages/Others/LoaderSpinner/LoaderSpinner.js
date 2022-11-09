import React from 'react';
import { Spinner } from 'react-bootstrap';

const LoaderSpinner = () => {
    return (
        <div>
             <div id="loader" className="d-flex justify-content-center ">
          <Spinner className="text-center" animation="border" variant="info" />
        
        </div>
        </div>
    );
};

export default LoaderSpinner;