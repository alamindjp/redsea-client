import React from 'react';
import { toast } from 'react-toastify';

const User = ({ user, index, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://blooming-fortress-90492.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an admin')
                }
                return res.json()
            })
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success(`${email} successfully made an admin`)
                }
        })
    }
    const removeUser = (data) => {
        
    
    }

    return (
        <tr>
            <th>{index}</th>
            <td>{email}</td>
            <td>
                <div className='sm:flex justify-center'>
                    {role !== 'admin' && <div className='mb-1 mr-1'><button onClick={makeAdmin} className="btn btn-xs">Add Admin</button></div>}
                    {role === 'user' && <div><button className="btn btn-xs" onClick={removeUser}>remove</button></div>}
                </div>
            </td>
        </tr>
    );
};

export default User;