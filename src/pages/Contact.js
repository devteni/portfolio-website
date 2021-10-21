import React, { useState } from "react";
import Links from "../components/Links";

const Contact = () => {
    const [status, setStatus] = useState("Send itt!")
    const handleSubmit = async(e) => {
        e.preventDefault();
        setStatus("Sending...");
        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");
        let details = {
            name: name.value,
            email: email.value,
            message: message.value
        };
        let response = await fetch("http://localhost:5000/contact", {
                        method: "POST",
                        headers: {
                        "Content-Type": "application/json;charset=utf-8",
                        },
                        body: JSON.stringify(details),
                        });
    setStatus("Send itt!");
    let result = await response.json();
    console.log(result);
    alert(result.status);
    }
    return(
        <div className="m-10" data-aos="fade-right" data-aos-delay="300" id="#contact">
            <p className="font-extrabold lg:text-3xl text-xl text-white text-center mt-10 lg:m-2 lg:mb-5">
                Wanna say hi?
            </p>
            <div className="md:flex-1 flex-auto flex-wrap">
                <form onSubmit={handleSubmit} method="POST" className="border border-2 p-5 w-auto">
                <div className="grid gap-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
                    <div className="w-full">
                        <span className="px-5 py-1.5 text-white rounded-full text-sm font-semibold tracking-tighter">
                            Your Name*
                            </span>
                        <input id="name"  className="text-white py-3 px-5 bg-gray-700 w-full mt-4 border-none outline-none appearance-none focus:ring-4 focus:ring-gray-400" type="text" name="Name" required/>
                    </div>
                    <div className="w-full">
                        <span className="px-5 py-1.5 text-white rounded-full text-sm font-semibold tracking-tighter">
                            Your Email*
                            </span>
                        <input id="email" className="text-white py-3 px-5 bg-gray-700 w-full mt-4 outline-none appearance-none focus:ring-4 focus:ring-gray-400" type="email" name="Email" required/>
                    </div>
                </div>
                <div className="w-full mt-8">
                    <span className="px-5 py-1.5 text-white text-sm font-semibold tracking-tighter">
                        Your Message*
                        </span>
                    <textarea id="message" className="text-white py-3 px-5 bg-gray-700 w-full mt-4 h-48 outline-none appearance-none focus:ring-4 focus:ring-gray-400" name="Message"></textarea>
                </div>
                <button type="submit" className="text-white p-4 font-bold tracking-tighter bg-gray-700 w-full mt-8 outline-none appearance-none border-none focus:ring-4 focus:ring-gray-400">
                    {status}
                </button>
                </form>
                <div className="w-auto">
                    <Links />
                </div>
            </div>
        </div>
    )
}

export default Contact;