import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import TaskList from './TaskList';

const FormTask = () => {
    //definir los state
    let taskFromLocalStorage = JSON.parse(localStorage.getItem('taskslist')) || [];
    const [tasks, setTasks] = useState(taskFromLocalStorage);
    const [task, setTask] = useState('');
    
    //aqui uso el ciclo de vida del componente
   /*  useEffect(() => {
     //aqui se ejecuta tanto en montaje como actualización
     console.log('Ejecutando el ciclo de vida del componente FormTask');
    }); */
    /* useEffect(() => {
     //aqui se ejecuta solo en montaje
     console.log('Ejecutando el ciclo de vida del componente FormTask');
    }, []); */
    useEffect(() => {
     //aqui se ejecuta tanto en montaje como actualización pero dependiendo de un state
     // console.log('Ejecutando el ciclo de vida del componente FormTask');
     localStorage.setItem('taskslist', JSON.stringify(tasks))
    }, [tasks]); //array de dependencias


    const handleSubmit = (e)=>{
        e.preventDefault();
        //agregar c/u de las tareas en el array de tareas
        setTasks([...tasks, task]);
        //limpiar el input
        setTask('');
    }

    const deleteTask = (taskName) =>{
        let filterArray = tasks.filter(task => task !== taskName);
        setTasks(filterArray);
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="m-3 text-center">
                    <Form.Control 
                       type="text" 
                       className="mb-3" 
                       placeholder="Ingrese una tarea" 
                       onChange={(e) => setTask(e.target.value)}
                       value={ task } 
                    />
                    <Button variant="primary" type="submit">
                        Agregar
                    </Button>
                </Form.Group>
            </Form>
            <section className="container">
                <TaskList taskArray={tasks} deleteTask={deleteTask}></TaskList>
            </section>
        </>
    );
};

export default FormTask;
