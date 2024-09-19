import React from 'react';
import {Link} from "react-router-dom";

const Navbar = (props) => (
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src="../logo.svg"/>
        </a>
        <div className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5">First Link</a>
            <a className="mr-5">Second Link</a>
            <a className="mr-5">Third Link</a>
            <a className="mr-5">Fourth Link</a>
        </div>
        <button className="inline-flex items-center bg-yellow-500 border-0 py-1 px-3 mt-4 md:mt-0">Click Me</button>
    </div>
);

export default Navbar;