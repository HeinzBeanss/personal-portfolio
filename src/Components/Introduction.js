import React from "react";
import "../CSS/Introduction.css"

import Typewriter from 'typewriter-effect';

const Introduction = () => {

    return (
        <div className="introduction">
            <div className="introductiontitle">
                <h1 className="introtitlehello">
                    <Typewriter options={{
                      autoStart: true,
                      loop: false,
                      delay: 80,
                    }}
                      onInit={(typewriter) => {

                        typewriter.typeString('<div class="abc123">Hello!</div>')
                        .pauseFor(1200)
                        .callFunction(() => {
                            const cursorType = document.querySelector(".Typewriter__cursor");
                            cursorType.style = "visibility:hidden";
                        })
                          .start();
                      }}
                    />
                </h1>

                <h1 className="introtitlemynameis">
                    <Typewriter
                    options={{
                        loop: true,
                        delay: 80,
                        deleteSpeed: 0,
                      }}

                    onInit={(typewriter) => {
                    typewriter
                      .callFunction(() => {
                          const cursorTypeOne = document.querySelectorAll(".Typewriter__cursor")[1];
                          console.log(cursorTypeOne);
                          cursorTypeOne.style = "visibility:hidden";
                      })
                      .pauseFor(2000)
                      .callFunction(() => {
                        const cursorTypeOne = document.querySelectorAll(".Typewriter__cursor")[1];
                        cursorTypeOne.style = "visibility:visible";
                    })
                    .pauseFor(200)
                      .typeString('<div class="abc123">I\'m a programming enthusiast!</div>')
                      .pauseFor(1200)
                      .deleteChars(25)
                      .pauseFor(500)
                      .typeString("an aspiring developer.")
                      .pauseFor(1200)
                      .deleteChars(22)
                      .pauseFor(500)
                      .typeString("your next employee?")
                      .pauseFor(1200)
                      .deleteChars(19)
                      .pauseFor(500)
                      .typeString('<strong><h1 style="color: var(--primary)">David</h1></strong>')
                      .pauseFor(1500)
                      .typeString(" :)")
                      .pauseFor(10000)
                      .start();
                  }}
                />
            </h1>
                {/* <h1 className="introtitledavid"></h1> */}
            </div>

            <div>
                <p className="introductiondesc">I'm an aspiring web developer located in the United Kingdom! I'm an aspiring web developer located in the United Kingdom! I'm an aspiring web developer located in the United Kingdom! I'm an aspiring web developer located in the United Kingdom!</p>
            </div>
        </div>
    )
}

export default Introduction;