import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../Components/hooks/useAdmin';
import useUser from '../../Components/hooks/useUser';
import auth from '../../firebase.init';
import Navbar from '../Shared/Navbar/Navbar';

const DashBoard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    const [mUser] = useUser(user)
    return (
        <div>
            <Navbar />
            <div className='bg-slate-500 flex justify-between px-5 items-center'>
                <h1 className='text-4xl text-white font-bold text-center p-5'>Dashboard</h1>
            <div className="avatar">
                <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={user.photoURL} alt='avatar' />
                </div>
            </div>
            </div>
            
            <div className="drawer drawer-mobile">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* <!-- Page content here --> */}

                    <Outlet />

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80 pt-10 bg-slate-500 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to="/dashboard" className=' bg-red-200 py-2 mb-2'>My Profile</Link></li>
                        {mUser && <>
                            <li><Link to="/dashboard/orders" className=' bg-red-200 py-2 mb-2'>My Orders</Link></li>
                            <li><Link to="/dashboard/add_review" className=' bg-red-200 py-2 mb-2'>Add Reviews</Link></li>
                        </>}
                        {admin && <>
                            <li><Link to="/dashboard/users" className=' bg-red-200 py-2 mb-2'>All Users</Link></li>
                            <li><Link to="/dashboard/add_product" className=' bg-red-200 py-2 mb-2'>Add Product</Link></li>
                            <li><Link to="/dashboard/manage_product" className=' bg-red-200 py-2 mb-2'>Manage Product</Link></li>
                            <li><Link to="/dashboard/manage_orders" className=' bg-red-200 py-2 mb-2'>Manage orders</Link></li>
                        </>}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;