import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../../Components/Loading';
import auth from '../../../firebase.init';

const MyProfile = () => {
    const [pUser, loading] = useAuthState(auth)
    const [userData, setUserData] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/user/${pUser.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setUserData(data))
    }, [pUser])
    if (loading) {
        return <Loading />
    }
    return (
        <div className='w-full mx-auto'>
            <h2 className='text-4xl text-purple-200 bg-slate-400 text-center py-3'>My Profile</h2>
            <div className='sm:w-3/4 mx-auto'>
                    <div className="avatar border-2 rounded-xl">
                        <div className="w-36 mask mask-squircle">
                            <img src={pUser.image} style={{ width: '150px' }} alt='avatar' />
                        </div>
                    </div>
                <h3 className='text-2xl text-center'> User Name: { userData.displayName? userData.displayName: userData.email?.split('@')[0]}</h3>
            </div>

        </div>
    );
};

export default MyProfile;