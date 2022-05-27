import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const Blogs = () => {
    return (
        <div>
            <Navbar />
            <div className='w-4/5 mx-auto my-5'>
                <div tabIndex="0" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Q1. How will you improve the performance of a React Application?
                    </div>
                    <div className="collapse-content">
                        <div className='flex'><span className='font-bold mr-3'>Ans:</span> <p>Keeping component state local where necessary. Memoizing React components to prevent unnecessary re-renders. Code-splitting in React using dynamic import Windowing or list virtualization in React. Lazy loading images in React.</p></div>
                    </div>
                </div>
                <div tabIndex="1" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Q2. What are the different ways to manage a state in a React application?
                    </div>
                    <div className="collapse-content">
                        <div className='flex'><span className='font-bold mr-3'>Ans:</span> <p>1. Data State, <br /> 2. Control State, <br /> 3. Session State, <br /> 4. Location State, <br /> 5. Conclusion.</p></div>
                    </div>
                </div>
                <div tabIndex="2" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Q3. How does prototypical inheritance work?
                    </div>
                    <div className="collapse-content">
                        <div className='flex'><span className='font-bold mr-3'>Ans:</span> <p>The Prototypical Inheritance is a feature in JavaScript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use object. getPrototypeOf and Object.</p></div>
                    </div>
                </div>
                <div tabIndex="3" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Q4. Why you do not set the state directly in React. For example, if you have `const [products, setProducts] = useState([])`. Why you do not set `products = [...]` instead, you use the `setProducts`?
                    </div>
                    <div className="collapse-content">
                        <div className='flex'><span className='font-bold mr-3'>Ans:</span> <p>When we directly update the state, it does not change this. state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value. we will lose control of the state across all components.</p></div>
                    </div>
                </div>
                <div tabIndex="4" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Q5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?
                    </div>
                    <div className="collapse-content">
                        <div className='flex'><span className='font-bold mr-3'>Ans:</span> <p>I need to find a name exists in an array, and I  use Array.includes(name)..</p></div>
                    </div>
                    <div tabIndex="5" className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                        <div className="collapse-title text-xl font-medium">
                            Q6 What is a unit test? Why should write unit tests?
                        </div>
                        <div className="collapse-content">
                            <div className='flex'><span className='font-bold mr-3'>Ans:</span> <p>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the developers. Unit tests help you find and fix bugs earlier.</p></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Blogs;