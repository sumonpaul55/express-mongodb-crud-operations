import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Users = () => {
    const initialData = useLoaderData()
    const [user, setUser] = useState(initialData)
    const handleDelete = (_id) => {
        console.log(_id)
        fetch(`http://localhost:5000/users/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    Swal.fire(`User deleted successfully`)
                    const remainingData = user.filter(user => user._id !== _id)
                    setUser(remainingData)
                }
            })
    }
    return (
        <div style={{ padding: "0 100px" }}>
            <Link to="/">Home</Link>
            {
                user.map((user) => (
                    <div key={user._id} style={{ padding: "0 200px", border: "1px solid red", margin: "10px" }}>
                        <div>
                            <p><b>Name:</b> {user.name}</p>
                            <p><b>Email:</b> {user.email}</p>
                        </div>
                        <div>
                            <Link to={`/update/${user._id}`}>
                                <button>Update</button>
                            </Link>
                            <button onClick={() => handleDelete(user._id)}>X</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Users;