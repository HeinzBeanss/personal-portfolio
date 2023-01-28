import React from "react";
import "../CSS/Introduction.css"

const Introduction = () => {

    return (
        <div className="introduction">
            <div className="introductiontitle">
                <h1 className="introtitlehello">Hello!</h1>
                <h1 className="introtitlemynameis">I'm David.</h1>
                {/* <h1 className="introtitledavid"></h1> */}
            </div>

            <div>
                <p className="introductiondesc">I'm an aspiring web developer located in the United Kingdom! I'm an aspiring web developer located in the United Kingdom! I'm an aspiring web developer located in the United Kingdom! I'm an aspiring web developer located in the United Kingdom!</p>
            </div>
        </div>
    )
}

export default Introduction;