import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import "../CSS/Introduction.css"
import downarrow from "../Assets/arrow-down.svg"

import Typewriter from 'typewriter-effect';

const Introduction = () => {

  useEffect(() => {
    let IntroDesc = document.querySelector(".introductiondesc");
    let Arrow = document.querySelector(".arrow");

    window.addEventListener("scroll", () => {
      if (Arrow.classList.contains("hidden")) {
        // do nothing
      } else {
        let arrowtop = Arrow.getBoundingClientRect().top;

        let arrowmovelimit = window.innerHeight - arrowtop - 800;
        if (Arrow.getBoundingClientRect().top < arrowmovelimit) {
          Arrow.classList.add("hidden");
          Arrow.classList.remove("arrow");
        }
      }
      let top = IntroDesc.getBoundingClientRect().top;
      if ( top < window.innerHeight - 250) {
        IntroDesc.classList.add("fadeclass");
      }
    })
  },[])

    return (
        <div className="introduction">
          <img className="arrow" src={downarrow} alt="down-arrow"></img>
            <div className="introductiontitle">
                <h1 className="introtitlehello">
                    <Typewriter options={{
                      autoStart: true,
                      loop: false,
                      delay: 80,
                    }}
                      onInit={(typewriter) => {

                        typewriter.typeString('Hello!')
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
                          cursorTypeOne.style = "visibility:hidden";
                      })
                      .pauseFor(2000)
                      .callFunction(() => {
                        const cursorTypeOne = document.querySelectorAll(".Typewriter__cursor")[1];
                        cursorTypeOne.style = "visibility:visible";
                    })
                    .pauseFor(200)
                    .typeString('I\'m an aspiring developer.')
                    .pauseFor(1200)
                    .deleteChars(23)
                    .pauseFor(500)
                      .typeString(' a programming enthusiast!')
                      .pauseFor(1200)
                      .deleteChars(25)
                      .pauseFor(500)
                      .typeString('your next employee?')
                      .pauseFor(1200)
                      .deleteChars(19)
                      .pauseFor(500)
                      .typeString('<strong><span style="color: var(--primary)">David. </span></strong>')
                      .pauseFor(1500)
                      .typeString('<strong><span style="color: var(--primary)">:)</span></strong>')
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