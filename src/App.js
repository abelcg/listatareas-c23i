import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Heading from './components/Heading';
import Subheading from './components/Subheading';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div>
      <Container>
        <Heading comision="23i" estado={true}></Heading>
        <Subheading></Subheading>
      </Container>
    </div>
  );
}

export default App;
