import React from 'react';
import { toast } from 'react-toastify';

const user = ({ user, index, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an admin')
                }
                res.json()
            })
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success(`${email} successfully made an admin`)
                }
        })
    }
    return (
        <tr>
            <th>{index}</th>
            <td>{email}</td>
            <td>
                <div className='sm:flex justify-center'>
                    {role !== 'admin' && <div className='mb-1 mr-1'><button onClick={makeAdmin} className="btn btn-xs">Add Admin</button></div>}
                    <div><button className="btn btn-xs">remove</button></div>
                </div>
            </td>
        </tr>
    );
};

export default user;