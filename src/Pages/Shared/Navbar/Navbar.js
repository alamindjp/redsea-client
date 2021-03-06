import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link} from 'react-router-dom';
import Loading from '../../../Components/Loading';
import auth from '../../../firebase.init';

const Navbar = () => {
    
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <Loading/>
    }
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken')
    };
    return (
        <div className="navbar bg-primary text-secondary">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52">
                        <li><Link className='btn btn-ghost' to="/home">Home</Link></li>
                        <li><Link className='btn btn-ghost' to="/blogs">Blogs</Link></li>
                        <li><Link className='btn btn-ghost' to="/portfolio">My Portfolio</Link></li>
                        {
                            user&&<li><Link className='btn btn-ghost' to="/dashboard">Dashboard</Link></li>
                        }
                        <li>
                            {user ? <button className="btn btn-ghost"onClick={logout}>Sign out</button> : <Link className='btn btn-ghost' to="/login">Login</Link> }
                        </li>
                    </ul>
                </div>
                <Link className="text-xl ml-5" to="/home">REDSEA Ltd</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link className='btn btn-ghost' to="/">Home</Link></li>
                    <li><Link className='btn btn-ghost' to="/blogs">Blogs</Link></li>
                    <li><Link className='btn btn-ghost' to="/portfolio">My Portfolio</Link></li>
                    {
                        user&&<li><Link className='btn btn-ghost' to="/dashboard">Dashboard</Link></li>
                    }
                        <li>
                        {user ? <button className="btn btn-ghost" onClick={logout}>Sign out</button> : <Link className='btn btn-ghost' to="/login">Login</Link>}
                        </li>
                </ul>
            </div>
            {
                user && <div className="navbar-end">
                    <label tabIndex="1" className="btn btn-ghost lg:hidden" htmlFor="dashboard-sidebar">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16M4 18h16" /></svg></label>
                </div>
            }
        </div>
    );
};

export default Navbar;