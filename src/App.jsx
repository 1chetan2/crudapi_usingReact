import { use, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const url = "https://localhost:7260/api/product";

  // read data
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setProducts(data));
  });

  // create data
  const addProduct = () => {
  if (!name || !price) return;
  
 // const id = products.length > 0 ? products[products.length - 1].id + 1 : 1;  -- only for store data in memory
  const product = {
    name,
    price: Number(price)
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(product)
  })
    .then(res => res.json())
    .then(newProduct => {
      setProducts(prev => [...prev, newProduct]);
      setName("");
      setPrice("");
    })
    .catch(err => console.error("Error:", err));
};

  // delete data
  const deleteProduct = (id) => {
    fetch(`${url}/${id}`, { method: "DELETE" })
      .then(res => res.json())
      .then(data => setProducts(data));
  };
  
  return (
    <div className="container">
      <h2 className="title">Product CRUD</h2>
      <div className="form">
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />

        <button onClick={addProduct}>Add Product</button>
      </div>
      <ul className="list">
        {products.map(p => (
          <li key={p.id} className="list-item">
            <span>{p.name} - Rs.{p.price}</span>
            <button
              className="delete-btn"
              onClick={() => deleteProduct(p.id)}>
              Delete
            </button> 
          </li>
        ))}
      </ul>
    
    </div>
  );
}

export default App;


