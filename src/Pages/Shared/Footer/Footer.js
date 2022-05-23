import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='bg-primary text-secondary mt-10'>
            <div className="footer footer-center grid-cols-3 p-4 ">
                <div>
                    <span className="footer-title">Company</span>
                    <Link className="link link-hover" to="/home">About us</Link>
                    <Link className="link link-hover" to="/home">Contact</Link>
                    <Link className="link link-hover" to="/home">Jobs</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link className="link link-hover" to="/home">Terms of use</Link>
                    <Link className="link link-hover" to="/home">Privacy policy</Link>
                    <Link className="link link-hover" to="/home">Cookie policy</Link>
                </div>
                <div>
                    <span className="footer-title">Social</span>
                    <Link className="link link-hover" to="/home">Twitter</Link>
                    <a className="link link-hover" href='https://www.facebook.com/alamindjp/' target="_blank">Facebook</a>
                    <Link className="link link-hover" to="/home">Github</Link>
                </div>
            </div>
            <div className="divider m-0"></div>
            <div className="footer footer-center p-4 ">
                <p>Copyright © {year} - All right reserved by REDSEA Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;