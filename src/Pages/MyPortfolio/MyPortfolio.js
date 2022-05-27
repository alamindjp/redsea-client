import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import profile from '../../Assets/Images/images/Profile.png'

const MyPortfolio = () => {
    return (
        <div>
            <Navbar />
            <div>
                <div>
                    <img className="img-fluid border border-3 rounded-2xl my-6 w-full mx-auto" src={profile} style={{ width: '250px' }} alt="" />
                </div>
                <div className="w-11/12 mx-auto">
                    <h2 className='text-4xl text-primary text-center'><span className='font-semibold'>Name:</span> Md Alamin Hossain</h2>
                    <h2 className='text-xl text-center my-3'><span className='font-semibold'>Email:</span><span className='text-sky-700'> alaminhossaindjp@gmail.com</span></h2>
                    <h2 className='text-2xl font-semibold text-indigo-400 text-center my-5'>Educational Background</h2>
                    <div className='grid md:grid-cols-2 gap-5 sm:w-4/5 md:w-full mx-auto'>
                        <div className="overflow-x-auto border rounded-lg">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th className='font-bold'>Bachelor of Business Administration [B.B.A]</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='font-semibold'>Institute: Kushtia government collage</td>
                                    </tr>
                                    <tr>
                                        <td className='font-semibold'>Result: Appeared</td>
                                    </tr>
                                    <tr>
                                        <td className='font-semibold'>Passing Year: 2020</td>
                                    </tr>
                                    <tr>
                                        <td className='font-semibold'>Department: Management</td>
                                    </tr>
                                    <tr>

                                        <td className='font-semibold'>University: National University</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="overflow-x-auto border rounded-lg">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th className='font-bold'>Higher Secondary Certificate [H.S.C]</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='font-semibold'>Institute: Sagarkhali Ideal College</td>
                                    </tr>
                                    <tr>
                                        <td className='font-semibold'>Result: 4.10 (out of 5)</td>
                                    </tr>
                                    <tr>
                                        <td className='font-semibold'>Passing Year: 2016</td>
                                    </tr>
                                    <tr>
                                        <td className='font-semibold'>Department: Business Studies</td>
                                    </tr>
                                    <tr>

                                        <td className='font-semibold'>Board: Jashore</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="overflow-x-auto border rounded-lg">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th className='font-bold'>Secondary Secondary Certificate [S.S.C]</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='font-semibold'>Institute: Kamalpur Secondary School</td>
                                    </tr>
                                    <tr>
                                        <td className='font-semibold'>Result: 4.40 (out of 5)</td>
                                    </tr>
                                    <tr>
                                        <td className='font-semibold'>Passing Year: 2014</td>
                                    </tr>
                                    <tr>
                                        <td className='font-semibold'>Department: Humanities</td>
                                    </tr>
                                    <tr>

                                        <td className='font-semibold'>Board: Jashore</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <h2 className="text-3xl font-semibold text-indigo-400 text-center my-5">My Skills as a Developer</h2>
                    <div className="overflow-x-auto border rounded-lg">
                        <table className="table w-full">
                            <tbody>
                                <tr>
                                    <td className='font-bold'>Skill </td>
                                    <td>HTML, CSS, <br /> Bootstraps, Tailwind, <br /> JavaScript, React, <br /> Node, Express, <br />Mongodb.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <h2 className="text-3xl font-semibold text-indigo-400 text-center my-5">My Best Project</h2>
                    <div className="overflow-x-auto border rounded-lg">
                        <table className="table w-full">
                            <tbody>
                                <tr>
                                    <td className='font-bold'>Link </td>
                                    <td>
                                        <a className='text-sky-500' href="https://tvs-house.firebaseapp.com">TVS HOUSE</a> <br /> <a className='text-sky-500' href="https://photographer-7f389.web.app/">BEAUTY SHOOTER</a> <br />
                                        <a className='text-sky-500' href="https://meek-dasik-00de9a.netlify.app/">TOTO SHOP</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MyPortfolio;