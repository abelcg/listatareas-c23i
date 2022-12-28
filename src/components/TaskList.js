import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import TaskItem from './TaskItem';

const TaskList = (props) => {
    return (
        <ListGroup>
            {props.taskArray.map((task, index) => <TaskItem key={index} data={task} deleteTask={props.deleteTask}></TaskItem>)}
        </ListGroup>
    );
};

export default TaskList;
