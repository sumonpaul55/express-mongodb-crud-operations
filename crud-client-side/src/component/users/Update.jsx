import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
    const loadedUser = useLoaderData()
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const updatedUser = { name, email }
        fetch(`http://localhost:5000/users/${loadedUser._id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    console.log(data)
                    Swal.fire(`User Updated successfully`)
                }

            })
    }
    return (
        <div style={{ padding: "0 100px" }}>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" defaultValue={loadedUser.name} /><br />
                <input type="email" name='email' defaultValue={loadedUser.email} /><br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;