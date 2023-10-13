import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const App = () => {
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email }
    console.log(user)
    form.reset();
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user)

    }).then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire(
            'Good job!',
            'User Added Successfully',
            'success'
          )
        }
      })
  }
  return (
    <div style={{ padding: "0 100px" }}>
      <h1>React Crud</h1>
      <div>
        <Link to="/users">Users</Link>
      </div>
      <div style={{ margin: "auto", textAlign: "center" }}>
        <form onSubmit={handleSubmit}>
          <div>
            <input type="text" name='name' required />
            <br />
            <input type="email" name='email' required />
            <br />
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;