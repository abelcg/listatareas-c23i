import React from 'react';
import Status from './Status';

const Heading = (props) => {
    return (
        <div>
            <h1 className="display-4 text-center">Lista de tareas {props.commission}</h1>
            <Status commission={props.commission} enable={props.enable}></Status>
            <hr />
        </div>
    );
};

export default Heading;