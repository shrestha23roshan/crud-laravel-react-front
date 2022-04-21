import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";

export default function List() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    await axios.get(`http://localhost:8000/api/products`).then(({ data }) => {
      setProducts(data);
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Link
            className="btn btn-primary mb-2 float-end"
            to={"/product/create"}
          >
            Create Product
          </Link>
        </div>
        <div className="col-12">
          <div className="card card-body">
            <div className="table-responsive">
              <table className="table table-bordered mb-0 text-center">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Mandatory Image</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.length > 0 &&
                    products.map((row, key) => (
                      <tr key={key}>
                        <td>{row.title}</td>
                        <td>{row.description}</td>
                        <td>
                          <img
                            width="50px"
                            src={`http://localhost:8000/uploads/products/${row.image}`}
                          />
                        </td>
                        <td>
                          <img
                            width="50px"
                            src={`http://localhost:8000/uploads/products/${row.required_image}`}
                          />
                        </td>
                        <td>
                          <Link
                            to={`/product/edit/${row.id}`}
                            className="btn btn-success me-2"
                          >
                            Edit
                          </Link>
                          <Button
                          // variant="danger"
                          // onClick={() => deleteProduct(row.id)}
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
