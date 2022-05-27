import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../Components/hooks/useAdmin';
import auth from '../../firebase.init';
import Navbar from '../Shared/Navbar/Navbar';

const DashBoard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    return (
        <div>
            <Navbar />
            <h1 className='text-4xl bg-slate-500 text-white font-bold text-center p-5'>Dashboard</h1>
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
                        <li><Link to="/dashboard/orders" className=' bg-red-200 py-2 mb-2'>My Orders</Link></li>
                        <li><Link to="/dashboard/review" className=' bg-red-200 py-2 mb-2'>My Reviews</Link></li>
                        {admin && <>
                            <li><Link to="/dashboard/users" className=' bg-red-200 py-2 mb-2'>All Users</Link></li>
                            <li><Link to="/dashboard/add_product" className=' bg-red-200 py-2 mb-2'>Add Product</Link></li>
                        </>}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;