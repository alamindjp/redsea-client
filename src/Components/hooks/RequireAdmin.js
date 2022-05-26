import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading';
import useAdmin from './useAdmin';

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    const navigate= useNavigate()
    if (loading || adminLoading) {
        return <Loading />
    }
    if (!user || !admin) {
        signOut(auth);
        toast.error('forbidden access please log in')
        localStorage.removeItem('accessToken')
        return navigate('/')
    }

    return children;
};

export default RequireAdmin;