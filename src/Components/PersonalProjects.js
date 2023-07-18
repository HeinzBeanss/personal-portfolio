import React, { useEffect } from "react";
import "../CSS/PersonalProjects.css";

import instagramgif from "../Assets/instagramgif.gif"
import battleshipgif from "../Assets/battleshipgif.gif";
import shoppingcartgif from "../Assets/shoppingcartgif.gif";
import mobileinstagramgif from "../Assets/mobile-instagram.gif"
import mobilebattleshipgif from "../Assets/mobile-battleship.gif";
import mobileshoppingcartgif from "../Assets/mobile-shoppingcart.gif";
import beebuddiesgif from "../Assets/beebuddieslarge-min.gif";
import beebuddiessmall from "../Assets/beebuddiessmall.png";

const PersonalProjects = () => {

    useEffect(() => {

        let primaryproject = document.querySelector(".primaryprojectinfo");
        let top = primaryproject.getBoundingClientRect().top;
        if (top < window.innerHeight - 200) {
            primaryproject.classList.add("alreadyonpage");
        } else {
            primaryproject.classList.add("notonpage");
        };


        let projects = document.querySelectorAll(".projectinfo");
        projects.forEach(project => {
            let top = project.getBoundingClientRect().top;
            if (top < window.innerHeight - 200) {
                project.classList.add("alreadyonpage");
            } else {
                project.classList.add("notonpage");
            }
        })
    
        window.addEventListener("scroll", () => {

            let primarytop = primaryproject.getBoundingClientRect().top;
            if (primarytop < window.innerHeight - 200 && primaryproject.classList.contains("notonpage")) {
                primaryproject.classList.add("fadeprojectright");
            }

            projects.forEach(project => {
                let top = project.getBoundingClientRect().top;
                if ( top < window.innerHeight - 200 && project.classList.contains("notonpage")) {
                    if (project.classList.contains("left")) {
                        project.classList.add("fadeprojectleft");
                    } else if (project.classList.contains("right")) {
                        project.classList.add("fadeprojectright");
                    }
                  }
            })
        })
      },[])

    return (
    <div className="PersonalProjects">
        <div id="Projects" className="anchorrefproject"></div>
        <h2 className="personalprojectsheader">Projects</h2>
        <p className="personalprojectdesc">A showcase of several projects I've created using a variety of technologies.</p>

        <div className="primaryproject">
            <div className="primaryprojectinfo left">
                <h3 className="projecttitle">BeeBuddies</h3>
                <p className="projectdesclarge">BeeBuddies is a social media platform crafted with a unique front-end client built on React, complemented by a powerful back-end API following RESTful practices. This dynamic combination utilizes NodeJS and Express, coupled with MongoDB for efficient database storage. Embracing its distinct identity, the platform boasts a custom design and captivating typeface. The user-friendly interface welcomes everyone to effortlessly create an account and engage with others as they desire. Embracing versatility, BeeBuddies seamlessly adapts to all screen layouts, ensuring an optimal experience across desktop, tablet, and mobile devices.
                </p>

                <p className="projectdesclarge">If you want to explore without the effort of creating an account, please utilise the <i>continue as guest</i> feature on the login page.</p>

                <p className="projectstacklarge">Created using React and NodeJS</p>
            </div>
            <div class="beebuddiesmedia">
            <div className="gifbackgroundprimary">
                    <a href="https://heinzbeanss.github.io/beebuddies/#/" target="_blank" rel="noopener noreferrer">
                        <img className="beebuddiessbig gif"
                            srcSet={`${beebuddiesgif} 600w, ${beebuddiesgif} 700w`}
                            sizes="(max-width: 860px) 480px, 700px" src={beebuddiesgif} alt="instagram clone">
                            </img>
                        </a>
                </div>
                <div className="gifbackgroundsecondary">
                    <a href="https://heinzbeanss.github.io/beebuddies/#/" target="_blank" rel="noopener noreferrer">
                        <img className="beebuddiessmall gif"
                            srcSet={`${beebuddiessmall} 600w, ${beebuddiessmall} 700w`}
                            sizes="(max-width: 300px) 480px, 700px" src={beebuddiessmall} alt="instagram clone">
                            </img>
                        </a>
                </div>
            </div>
        </div>
        <div className="projectarea">
            <div className="project instagram">
                <div className="gifbackground">
                    <a href="https://heinzbeanss.github.io/instagram/" target="_blank" rel="noopener noreferrer">
                        <img 
                            srcSet={`${mobileinstagramgif} 600w, ${instagramgif} 700w`}
                            sizes="(max-width: 600px) 480px, 700px" src={instagramgif} alt="instagram clone" className="gif">
                            </img>
                        </a>
                </div>
                <div className="projectinfo right">
                    <h3 className="projecttitle">Instagram Clone</h3>
                    <p className="projectdesc">A clone of the popular social media platform Instagram, the goal here was to achieve around 80% accuracy of the real website. Using React for the front end and Firebase for the backend, users can create an account, upload their own posts alongside captions, edit their profile picture and description, as well as follow and like other users and their posts respectively.</p>
                    <p className="projectstack">Created using React</p>
                </div>

            </div>
            <div className="project battleship">
                <div className="projectinfo left">
                        <h3 className="projecttitle">Battleship</h3>
                        <p className="projectdesc">A simple version of the popular strategy-type guessing game Battleship, players can place their shapes ranging from different sizes and orientations. The user then takes turns against an easy, however, not completely clueless computer in a competitive battle in which the first player to hit all the other's ships will be announced the victor.</p>
                        <p className="projectstack">Created using Vanilla JavaScript</p>

                </div>
                <div className="gifbackground">
                <a href="https://heinzbeanss.github.io/battleship/" target="_blank" rel="noopener noreferrer">                        
                    <img 
                    srcSet={`${mobilebattleshipgif} 600w, ${battleshipgif} 700w`}
                    sizes="(max-width: 600px) 480px, 700px" src={battleshipgif} alt="battleship game" className="gif">
                    </img></a>
                </div>
            </div>
            <div className="project shoppingcart">
            <div className="gifbackground">
            <a href="https://heinzbeanss.github.io/shopping-cart/" target="_blank" rel="noopener noreferrer">                        
                <img 
                    srcSet={`${mobileshoppingcartgif} 600w, ${shoppingcartgif} 700w`}
                    sizes="(max-width: 600px) 480px, 700px" src={shoppingcartgif} alt="shopping cart project" className="gif">
                </img>
            </a>
            </div>
                    <div className="projectinfo right">
                        <h3 className="projecttitle">Shopping Cart Mockup</h3>
                        <p className="projectdesc">A mockup of a card-selling store page alongside a functioning cart where the user can update the contents of their cart before heading to the checkout. The dynamically designed grid system responds perfectly to a multitude of devices ranging in resolution.</p>
                        <p className="projectstack">Created using React</p>

                    </div>
            </div>

        </div>
    </div>
)   

}

export default PersonalProjects;