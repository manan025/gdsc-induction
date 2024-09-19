import React, {useEffect, useState} from 'react';
import {X} from 'react-feather';
import {Link} from "react-router-dom";
import {createClient} from "@supabase/supabase-js";


const Panel = () => {

    const supabase = createClient(
        process.env.REACT_APP_SUPABASE_URL,
        process.env.REACT_APP_SUPABASE_ADMN
    )

    const [res, setRes] = useState([]);
    /*const responses = [
        {id: 1, name: "<Name>", date: "<Date, Time>", content: "Content hidden for appropriateness"},
        {id: 2, name: "<Name>", date: "<Date, Time>", content: "Content hidden for appropriateness"}
    ]*/

    useEffect(() => {
        async function fetchData() {
            const {data, error} = await supabase
                .from("text")
                .select("*");
            console.log(data);
            console.log(error);
            // reverse data
            data.reverse()
            setRes(data);
        }

        fetchData()
    }, []);

    const pass = localStorage.getItem("passcode");
    if (pass !== "acesucks") {
        window.location.href = "/login";
    }

    return (
        <div className="min-h-screen bg-white px-16 py-8">
            <header className="flex justify-between items-center mb-12">
                <h1 className="text-4xl font-bold"><Link to={"/"}>MANAN</Link></h1>
                <div className="flex items-center space-x-4">
                    <a href="https://github.com/manan025/gdsc-induction" className="text-black">Github</a>
                    <button
                        className="btn-pr text-white px-4 py-2 rounded-md">
                        <Link to={"/"}>Put Response</Link>
                    </button>
                </div>
            </header>

            <main>
                <h2 className="text-2xl font-bold mb-6">RESPONSES</h2>
                <div className="space-y-4">
                    {res.map(response => (
                        <div key={response.id} className="border border-gray-300 rounded-lg p-4 relative">
                            <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                                <X size={20}/>
                            </button>
                            <p className="font-semibold mb-2">{response.name} wrote on {response.created_at}</p>
                            <p className="text-gray-700 whitespace-pre-wrap">{response.text}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Panel;