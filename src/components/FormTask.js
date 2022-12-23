import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import TaskList from './TaskList';

const FormTask = () => {
    //definir los state
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        //agregar c/u de las tareas en el array de tareas
        setTasks([...tasks, task]);
        //limpiar el input
        setTask('');
    }
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="m-3 text-center">
                    <Form.Control 
                       type="text" 
                       className="mb-3" 
                       placeholder="Ingrese una tarea" 
                       onChange={(e) => setTask( e.target.value)}
                       value={ task } 
                    />
                    <Button variant="primary" type="submit">
                        Agregar
                    </Button>
                </Form.Group>
            </Form>
            <section className="container">
                <TaskList taskArray={tasks}></TaskList>
            </section>
        </>
    );
};

export default FormTask;