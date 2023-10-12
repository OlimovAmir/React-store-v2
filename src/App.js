import './App.css';
import AppRoutes from './routes/AppRoutes';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from './components/sidebar/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCategories } from './features/categories/categoriesSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getCategories());
  },[dispatch])
  return (
    <div className="App">
      <Header />
      <Container>
        <Row>
          <Col xs={3} sm={3}> <Sidebar /> </Col>
          <Col xs={9} sm={9}> <AppRoutes /> </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
