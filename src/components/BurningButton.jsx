import React from "react";
import { fire } from "../assets/images/index"; // Adjust imports as needed


const BurningButton = () => {
    return (
        <button className="burning-btn text-white h-20 w-20">

            <video className="burning-video text-white" loop muted>
                <source src={fire} type="video/mp4" />
                Hover Me
            </video>
        </button>
    );
};

export default BurningButton;
