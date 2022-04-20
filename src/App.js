import "bootstrap/dist/css/bootstrap.css";
import { Col, Container, Navbar, Row } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import ProductList from "./components/product/List";
import CreateProduct from "./components/product/Create";

function App() {
  return (
    <div>
      <Navbar bg="primary">
        <Container>
          <Link to={"/"} className="navbar-brand text-white">
            Basic Crud App
          </Link>
        </Container>
      </Navbar>

      <Container className="mt-5">
        <Row>
          <Col md={12}>
            <Routes>
              <Route path="/product/create" element={<CreateProduct />} />
              {/* <Route path="/product/edit/:id" element={<EditProduct />} /> */}
              <Route exact path="/" element={<ProductList />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
