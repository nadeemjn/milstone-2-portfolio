import React from "react";
import { Navbar } from "./Navbar";

export const Hero = () => {
    return (
        <div id="hero" className="min-h-screen bg-no-repeat bg-[url(/nadeem.jpg)] bg-left lg:bg-[15%] bg-cover"
            style={{backgroundSize: "35%"}}
        >
            <div>
                <Navbar />
                <div>
                    <div className="container grid lg:grid-cols-2 h-[calc(100vh-60px)]">
                        <div className="hidden lg:block"></div>
                        <div className="text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center">
                            <div>
                                <p data-aos="fade-down-left">I'm</p>
                                <p data-aos="fade-down-left">Nadeem</p>
                                <p data-aos="fade-down-left">Ali</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </div>


        
    );
}

