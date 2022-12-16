import React from 'react';
import Alert from 'react-bootstrap/Alert'

const Status = ({ comision, estado }) => {
    return (
        <div>
            {estado ? <Alert variant="info">
                La comisión {comision} está habilitada
            </Alert> : null}
        </div>
    );
};

export default Status;