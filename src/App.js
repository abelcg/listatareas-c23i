import React, { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Heading from './components/Heading';
import Subheading from './components/Subheading';
import Container from 'react-bootstrap/Container';
import FormTask from './components/FormTask';

function App() {
  //aqui va la lógica
  //definicion de los state
  const [enabled, setEnabled] = useState(true)

  return (
    <div>
      <Container>
        <Heading commission="23i" enable={enabled}></Heading>
        <Subheading></Subheading>
        <div className="text-center">
          <button className="btn btn-primary text-center" onClick={() => setEnabled(!enabled)}>Habilitar</button>
        </div>
      <FormTask></FormTask>
      </Container>
    </div>
  );
}

export default App;
