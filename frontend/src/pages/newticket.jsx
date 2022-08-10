import { useState } from "react";
import { useSelector } from "react-redux";
import authService from "../features/auth/authService";

function NewTicket() {
  const { user } = useSelector((state) => state.auth);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [product, setProduct] = useState("iPhone");
  const [description, setDescription] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="heading">
        <h1>Create a New Ticket</h1>
        <p>Please fill out the form</p>
      </section>
      <section className="form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input className="form-control" type="text" value={name} disabled />
        </div>
        <div className="form-group">
          <label htmlFor="name">Email</label>
          <input className="form-control" type="text" value={email} disabled />
        </div>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="product">Product</label>
            <select
              name="product"
              id="product"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            >
              <option value="iPhone">iPhone</option>
              <option value="Mac">Mac</option>
              <option value="MacBook">MacBook</option>
              <option value="iPad">iPad</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description of the Issue</label>
            <textarea
              name="description"
              id="description"
              className="form-control"
              placeholder="Description of issue"
              value={description}
              onChange= {(e)=> setDescription(e.target.value)}
            />
          </div> 
          <div className="form-group">
            <button className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default NewTicket;
