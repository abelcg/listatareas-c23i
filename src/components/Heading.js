import React from 'react';
import Status from './Status';

const Heading = (props) => {
    return (
        <div>
            <h1 className="display-4 text-center">Lista de tareas {props.comision}</h1>
            <Status comision={props.comision} estado={props.estado}></Status>
            <hr />
        </div>
    );
};

export default Heading;