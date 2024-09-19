import React, {useRef, useState} from 'react';
import {Link} from "react-router-dom";
import {createClient} from "@supabase/supabase-js";

const Login = () => {

    const login = useRef();

    async function loginHandler() {
        const passkey = login.current.value;
        // set passkey in localstorage
        localStorage.setItem("passcode", passkey);
        window.location.href = "/panel";
    }

    return (
        <div className="min-h-screen bg-white px-16 py-8">
            <header className="flex justify-between items-center mb-12">
                <h1 className="text-4xl font-bold"><Link to={"/"}>MANAN</Link></h1>
                <div className="flex items-center space-x-4">
                    <a href="#" className="text-black hover:underline">Github</a>
                    <button
                        className="btn-pr text-white px-4 py-2 rounded-md">
                        Put Response
                    </button>
                </div>
            </header>

            <main className="flex justify-center items-center">
            <div className="bg-gray-400 rounded-lg p-8 w-full max-w-md">
                    <h2 className="text-3xl font-bold text-white text-center mb-6">ADMIN ACCESS</h2>
                    <input
                        type="password"
                        className="w-full p-3 rounded-md mb-4"
                        placeholder="Enter password"
                        ref={login}
                    />
                    <button
                        className="w-full btn-pr text-white py-3 rounded-md text-lg font-semibold"
                    onClick={loginHandler}>
                        LOGIN
                    </button>
                </div>
            </main>
        </div>
    );
};

export default Login;