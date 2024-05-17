import React, { useState } from "react";
import "./navbar.css";


const lightName = "garden"
const darkName = "forest"


function returnUserShownThemeName(themeName){
    switch(themeName){
        case lightName:
            return "Light Theme";
        case darkName:
            return "Dark Theme";
    }
}

function toggleMode(setButtonText) {
    // Update the button text when clicked
    

    const localTheme = localStorage.getItem("theme");

    if (localTheme === lightName) {
        localStorage.setItem("theme", darkName);
        document.querySelector("html").setAttribute("data-theme", darkName);
    } else if (localTheme === darkName) {
        localStorage.setItem("theme", lightName);
        document.querySelector("html").setAttribute("data-theme", lightName);
    }
    else{
        localStorage.setItem("theme", lightName);
        document.querySelector("html").setAttribute("data-theme", lightName);
    }
    const localThemeNew = localStorage.getItem("theme");
    setButtonText(returnUserShownThemeName(localThemeNew));
}



export default function Navbar() {
    // Initialize state to hold the text of the button
    const localTheme = localStorage.getItem("theme");

    var usershownthemename = returnUserShownThemeName(localTheme)
    const [buttonText, setButtonText] = useState(usershownthemename);


    // Function to handle button click
    const handleClick = () => {
        toggleMode(setButtonText);
    };

    return (
        <div className="navbar-parent">
            <div className="navbar">
                <div className="left">
                <a href="/">Prices</a>
                <a href="/demo">Demo</a>
                <a href="/">Wall of Love</a>
                <a href="/">Leaderboard</a>
                </div>
                <div className="right">
                <button onClick={handleClick} className="btn">{buttonText}</button>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn btn-outline btn-primary" onClick={()=>document.getElementById('my_modal_2').showModal()}>Log In</button>
                <dialog id="my_modal_2" className="modal">
                    <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click outside to close</p>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                    </form>
                </dialog>
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                </div>
            </div>
        </div>
    );
}
