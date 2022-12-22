import React from 'react';
import Alert from 'react-bootstrap/Alert'

const Status = ({ commission, enable }) => {
    return (
        <div>
            {enable ? <Alert variant="info">
                La comisión {commission} está habilitada
            </Alert> : null}
        </div>
    );
};

export default Status;