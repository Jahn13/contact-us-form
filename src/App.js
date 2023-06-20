import './App.css';
import { Login } from './containers/login'
import { Container, Row, Col } from 'react-bootstrap'

function App() {
  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <Login/>
          </Col>        
        </Row>
      </Container>
    </>
  );
}

export default App;
