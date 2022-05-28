import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../../Components/Loading';
import auth from '../../../firebase.init';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth)
    const [userData, setUserData] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/user/${user.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setUserData(data))
    }, [])
    if (loading) {
        return <Loading />
    }
    console.log(userData)
    return (
        <div className='w-full mx-auto'>
            <h2 className='text-4xl text-purple-200 bg-slate-400 text-center py-3'>My Profile</h2>
            <div>
                <h3> User Name: { userData.displayName? userData.displayName: userData.email?.split('@')[0]}</h3>
            </div>

        </div>
    );
};

export default MyProfile;