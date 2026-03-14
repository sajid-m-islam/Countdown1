import { useState } from "react";
import "./App.css";
import headshot from "./assets/LinkedIn Headshot.jpg";
function App() {
    return (
        <>
            <div
                style={{
                    backgroundColor: "lightblue",
                    padding: "20px",
                    color: "black",
                }}
            >
                <img
                    className="img"
                    src={headshot}
                    alt="Photo of me"
                    width="300"
                />
                <h1
                    className="header"
                    style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
                >
                    All About Me!
                </h1>
                <a
                    href="https://www.linkedin.com/in/sajid-m-islam/"
                    target="_blank"
                >
                    My LinkedIn
                </a>
                <p id="main-paragraph">
                    Hi! My name is Sajid and I am first year at UVA. I am from
                    Vienna, Virginia. One of my favorite hobbies is
                    cooking/baking, and my favorite food is shrimp alfredo
                    pasta.
                </p>
                <h3>Hobbies</h3>
                <ul>
                    <li>Soccer</li>
                    <li>Running</li>
                    <li>Baking</li>
                </ul>
            </div>
        </>
    );
}

export default App;
