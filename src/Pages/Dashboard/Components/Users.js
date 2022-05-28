import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Components/Loading';
import User from './User'

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }
    ).then(res => res.json()))
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='w-full mx-auto'>
            <h2 className='text-4xl text-white bg-slate-400 text-center py-3'>All Users: { users.length}</h2>
            <div className="overflow-x-auto sm:w-11/12 mx-auto mt-5">
                <table className="table table-normal w-full border">
                   
                    <tbody>
                        {
                            users?.map((user, index) => <User
                                key={user._id}
                                user={user}
                                refetch={refetch}
                                index={index+1}
                            />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;