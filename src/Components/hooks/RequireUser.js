import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading';
import useUser from './useUser';

const RequireUser = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const [mUser, mUserLoading] = useUser(user);
    const navigate = useNavigate()
    if (loading || mUserLoading) {
        return <Loading />
    }
    if (!user || !mUser) {
        signOut(auth);
        toast.error('forbidden access please login again')
        localStorage.removeItem('accessToken')
        return navigate('/')
    }

    return children;
};

export default RequireUser;