import React, { useEffect } from "react";
import "../CSS/Introduction.css";
import downarrow from "../Assets/arrow-down.svg";
import Typewriter from "typewriter-effect";

const Introduction = () => {
  useEffect(() => {
    let IntroDesc = document.querySelector(".introductiondesc");
    let Arrow = document.querySelector(".arrow");

    let top = IntroDesc.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      IntroDesc.classList.add("alreadyonpage");
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
      if (
        top < window.innerHeight - 100 &&
        IntroDesc.classList.contains("notonpage")
      ) {
        IntroDesc.classList.add("fadeclass");
      }
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("animating process begins");
      const wordstoanimate = document.querySelectorAll(".spantoanimate");
      wordstoanimate.forEach((word) => {
        word.classList.add("animate");
      });
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="introduction">
      <img className="arrow" src={downarrow} alt="down-arrow"></img>

      <div className="introductioncontainer">
        <div className="introductiontextcontainer">
          <h1 className="introtitlehello">
            <Typewriter
              options={{
                autoStart: true,
                loop: false,
                delay: 45,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Hello!")
                  .pauseFor(800)
                  .callFunction(() => {
                    const cursorType = document.querySelector(
                      ".Typewriter__cursor",
                    );
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
                    const cursorTypeOne = document.querySelectorAll(
                      ".Typewriter__cursor",
                    )[1];
                    cursorTypeOne.style = "display:none";
                  })
                  .pauseFor(1600)
                  .callFunction(() => {
                    const cursorTypeOne = document.querySelectorAll(
                      ".Typewriter__cursor",
                    )[1];
                    cursorTypeOne.style = "visibility:visible";
                  })
                  .pauseFor(200)
                  .changeDelay(50)
                  .typeString("<p>I'm </p>")
                  .callFunction(() => {
                    if (window.innerWidth < 600) {
                      const cursorTypeOne = document.querySelectorAll(
                        ".Typewriter__cursor",
                      )[1];
                      cursorTypeOne.style = "display:none";
                    } else {
                      const timer = setTimeout(() => {
                        console.log("clearing typewriter cursor");
                        const cursorTypeOne = document.querySelectorAll(
                          ".Typewriter__cursor",
                        )[1];
                        cursorTypeOne.style = "display:none";
                      }, 2700);
                      return () => clearTimeout(timer);
                    }
                  })
                  .typeString(
                    '<div class="words"><span class="spantoanimate">an aspiring developer.</span><span class="spantoanimate">a programming enthusiast.</span><span class="spantoanimate">your next employee.</span><span class="spantoanimate">David.</span><span class="spantoanimate">an aspiring developer.</span></div>',
                  )

                  .start();
              }}
            />
          </h1>
        </div>
      </div>

      <div id="About" className="anchorrefintro"></div>
      <div className="introductiondesccontainer">
        <h3 className="introductiondescsub">
          A little about <i>me...</i>
        </h3>
        <p className="introductiondesc">
          Hi I'm David Bean, and you won't find a more committed individual than
          myself with regard to mastering the art of web development. Starting
          my independent journey over a year ago I have since self-studied
          consistently, achieving proficiency in HTML, CSS, and JavaScript
          alongside its most popular Framework, React. Then continuing my
          progress I explored server-side programming with Node and Express to
          become a full-stack developer. These skills, alongside a combination
          of experience with several Adobe Design software from my Graphic
          Design degree from the University of Huddersfield, make me both a
          versatile developer <i>and</i> designer.
        </p>
      </div>
    </div>
  );
};

export default Introduction;
