import { useEffect, useState } from 'react';

const useAdmin = user => {
    const [mUser, setMUser] = useState(false);
    const [mUserLoading, setMUserLoading] = useState(true)
    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`http://localhost:5000/role/user/${email}`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
            })
                .then(res => res.json())
                .then(data => {
                    setMUser(data);
                    setMUserLoading(false)
                })
        }
    }, [user])
    return [mUser, mUserLoading]
};

export default useAdmin;