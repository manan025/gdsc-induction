import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Navbar from "./components/Navbar";
import Panel from "./Panel";
import Login from "./Login";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /*<React.StrictMode>
    <App />
  </React.StrictMode>*/
    <BrowserRouter>
        <Routes>
            {/*<Route path="/" element={<Layout />}>*/}
                <Route index element={<Home />} />
                <Route element={<Navbar />} />
                <Route element={<Panel />} path={"panel"} />
            <Route element={<Login />} path={"login"} />
                {/*<Route path="blogs" element={<Blogs />} />*/}
                {/*<Route path="contact" element={<Contact />} />*/}
                {/*<Route path="*" element={<NoPage />} />*/}
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
