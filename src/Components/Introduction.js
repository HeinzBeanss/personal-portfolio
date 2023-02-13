import React, { useEffect } from "react";
import "../CSS/Introduction.css"
import downarrow from "../Assets/arrow-down.svg"

import Typewriter from 'typewriter-effect';

const Introduction = () => {

  useEffect(() => {
    let IntroDesc = document.querySelector(".introductiondesc");
    let Arrow = document.querySelector(".arrow");

    let top = IntroDesc.getBoundingClientRect().top;
    if ( top < window.innerHeight - 100) {
      IntroDesc.classList.add("alreadyonpage")
    } else {
      IntroDesc.classList.add("notonpage");
    }

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
      if ( top < window.innerHeight - 100 && IntroDesc.classList.contains("notonpage")) {
        IntroDesc.classList.add("fadeclass");
      }
    })
  },[])

  useEffect(() => {
      const timer = setTimeout(() => {
        console.log("animating process begins")
        const wordstoanimate = document.querySelectorAll(".spantoanimate");
        wordstoanimate.forEach((word => {
          word.classList.add("animate")
        }))
      }, 8000);
      return () => clearTimeout(timer);
  }, [])

    return (
        <div className="introduction">
          <img className="arrow" src={downarrow} alt="down-arrow"></img>

            <div className="introductioncontainer">
              <div className="introductiontextcontainer">
                <h1 className="introtitlehello">
                    <Typewriter options={{
                      autoStart: true,
                      loop: false,
                      delay: 45,
                    }}
                      onInit={(typewriter) => {

                        typewriter.typeString('Hello!')
                        .pauseFor(800)
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
                        loop: false,
                        delay: 45,
                        deleteSpeed: 0,
                      }}

                    onInit={(typewriter) => {
                    typewriter
                      .callFunction(() => {
                          const cursorTypeOne = document.querySelectorAll(".Typewriter__cursor")[1];
                          cursorTypeOne.style = "display:none";
                      })
                      .pauseFor(1600)
                      .callFunction(() => {
                        const cursorTypeOne = document.querySelectorAll(".Typewriter__cursor")[1];
                        cursorTypeOne.style = "visibility:visible";
                    })
                    .pauseFor(200)
                    .changeDelay(50)
                    .typeString('<p>I\'m </p>')
                    .callFunction(() => {
                      const timer = setTimeout(() => {
                        console.log("clearing typewriter cursor")
                        const cursorTypeOne = document.querySelectorAll(".Typewriter__cursor")[1];
                        cursorTypeOne.style = "display:none";
                      }, 2700);
                      return () => clearTimeout(timer);
                  })
                    .typeString('<div class="words"><span class="spantoanimate">an aspiring developer.</span><span class="spantoanimate">a programming enthusiast.</span><span class="spantoanimate">your next employee.</span><span class="spantoanimate">David. :)</span><span class="spantoanimate">an aspiring developer.</span></div>')
                    // .pauseFor(1200)

                    .start();
                  }}
                />
            </h1>
                {/* <h1 className="introtitledavid"></h1> */}
                </div>
            </div>

            <div className="introductiondesccontainer">
                <h3 className="introductiondescsub">A little about <i>me...</i></h3>
                <p className="introductiondesc">You won't find a more committed individual than myself with regards to mastering the art of web development. Starting my independent journey over half a year ago I have since self-studied consistently, achieving profiency in HTML, CSS, and JavaScript alongside its most popular Framework, ReactJS. These skills, alongside a combination of experience with several Adobe Design software from my Graphic Design degree from the University of Huddersfield, make me both a versatile developer <i>and</i> designer.</p>
            </div>
        </div>
    )
}

export default Introduction;


// .pauseFor(200)
// .typeString('<span>I\'m an aspiring developer.</span>')
// .pauseFor(1200)
// .deleteChars(23)
// .pauseFor(500)
//   .typeString(' a programming enthusiast!')
//   .pauseFor(1200)
//   .deleteChars(25)
//   .pauseFor(500)
//   .typeString('your next employee?')
//   .pauseFor(1200)
//   .deleteChars(19)
//   .pauseFor(500)
//   .typeString('<strong><span style="color: var(--primary)">David. </span></strong>')
//   .pauseFor(1500)
//   .typeString('<strong><span style="color: var(--primary)">:)</span></strong>')
//   .pauseFor(10000)
//   .start();