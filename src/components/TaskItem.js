import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const TaskItem = (props) => {
    return (

        <ListGroup.Item className="d-flex justify-content-between">{props.data}
        <button 
          className="btn btn-danger"
          onClick={()=>props.deleteTask(props.data)}
          >X
        </button>
        </ListGroup.Item>
    );
};

export default TaskItem;
