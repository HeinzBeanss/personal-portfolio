import React, { useEffect } from "react";
import "../CSS/PersonalProjects.css";

import instagramgif from "../Assets/instagramgif.gif"
import battleshipgif from "../Assets/battleshipgif.gif";
import shoppingcartgif from "../Assets/shoppingcartgif.gif";

const PersonalProjects = () => {

    useEffect(() => {
        let projects = document.querySelectorAll(".projectinfo");

        projects.forEach(project => {
            let top = project.getBoundingClientRect().top;
            if (top < window.innerHeight - 250) {
                project.classList.add("alreadyonpage");
            } else {
                project.classList.add("notonpage");
            }
        })
    
        window.addEventListener("scroll", () => {
            projects.forEach(project => {
                let top = project.getBoundingClientRect().top;
                if ( top < window.innerHeight - 250 && project.classList.contains("notonpage")) {
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
        <h2 className="personalprojectsheader">Projects</h2>
        <p className="personalprojectdesc">A showcase of several projects I've created using a variety of technologies.</p>
        <div className="projectarea">
            <div className="project instagram">
                <div className="gifbackground">
                    <img src={instagramgif} alt="instagram clone" className="gif"></img>
                </div>
                <div className="projectinfo right">
                    <h3 className="projecttitle">Instagram Clone</h3>
                    <p className="projectdesc">A clone of the popular social media platform Instagram, the goal here was to achieve around 80% accuracy of the real website. Using React for the front end and Firebase for the backend, users can create an account, upload their own posts alongside captions, edit their profile picture and description, as well as follow and like other user's and their posts respectively.</p>
                    <p className="projectstack">Created using ReactJS</p>
                </div>

            </div>
            <div className="project battleship">
                <div className="projectinfo left">
                        <h3 className="projecttitle">Battleship</h3>
                        <p className="projectdesc">A simple version of the popular strategy type guessing game Battleship, players can place their shapes ranging from different sizes and orientations. The user then takes turns against an easy, however not completely clueless, computer in a battle in which the first player to hit all the other's ships achieves victory.</p>
                        <p className="projectstack">Created using Vanilla JavaScript</p>

                </div>
                <div className="gifbackground">
                    <img src={battleshipgif} alt="battleship project" className="gifright"></img>
                </div>
            </div>
            <div className="project shoppingcart">
            <div className="gifbackground">
                <img src={shoppingcartgif} alt="shopping cart project" className="gif"></img>
            </div>
                    <div className="projectinfo right">
                        <h3 className="projecttitle">Shopping Cart Mockup</h3>
                        <p className="projectdesc">A mockup of a card selling store page alongside a functioning cart where the user can update the contents of their cart before heading to the checkout. The dynamically designed grid system responds perfectly to a multitude of devices ranging in resolution.</p>
                        <p className="projectstack">Created using ReactJS</p>

                    </div>
            </div>

        </div>
    </div>
)   

}

export default PersonalProjects;