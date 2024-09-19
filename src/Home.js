import React, {useRef} from 'react';
import Navbar from "./components/Navbar";
import styles from "./index.css";
import {Link} from "react-router-dom";
import {createClient} from "@supabase/supabase-js";

const Home = () => {
    const nameRef = useRef();
    const textRef = useRef();


    const supabase = createClient(
        process.env.REACT_APP_SUPABASE_URL,
        process.env.REACT_APP_SUPABASE_ADMN
    )
    async function btnHandler(e) {
        e.preventDefault();
        console.log("Button Clicked");
        // get name from the field
        const uName = nameRef.current.value;
        const uText = textRef.current.value;
        // generate a random string
        const id = Math.random().toString(36).substring(7);
        const {data, error} = await supabase
            .from("text")
            .insert({id: id, name: uName, text: uText});
        // error handling and show the thing is submitted with id
    }

    return (
        <div className="min-h-screen bg-white px-16 py-8">
            <header className="flex justify-between items-center mb-12">
                <h1 className="text-4xl font-bold"><Link to={"/"}>MANAN</Link></h1>
                <div className="flex items-center space-x-4">
                    <a href="https://github.com/manan025/gdsc-induction" className="text-black">Github</a>
                    <button
                        className="btn-pr text-white px-4 py-2 rounded-md">
                        <Link to={"/panel"}>Access Responses</Link>
                    </button>
                </div>
            </header>

            <main>
                <form className="space-y-6">
                <div className="border border-gray-300 rounded-lg p-4">
            <textarea
                className="outline-dotted w-full h-64 resize-none outline-none text-gray-700 placeholder-gray-400"
                placeholder="Write text here..."
                ref={textRef}
            ></textarea>
                    </div>

                    <div className="flex">
                        <label
                            className="border border-gray-300 rounded-l-md px-4 py-2 bg-gray-100 text-gray-700">Name</label>
                        <input
                            type="text"
                            className="flex-grow border border-l-0 border-gray-300 rounded-r-md px-4 py-2 outline-none"
                            ref={nameRef}
                        />
                    </div>

                    <div className="flex justify-between">
                        <button
                            type="button"
                            className="bg-orange-200 text-orange-700 px-6 py-2 rounded-md"
                        >
                            Insert Files
                        </button>
                        <button
                            type="submit"
                            className="btn-pr text-white px-8 py-2 rounded-md"
                            onClick={btnHandler}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </main>
        </div>
    );
};

export default Home;