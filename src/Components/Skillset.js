import React, { useEffect, useState } from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import "../CSS/Skillset.css"
import leftarrow from "../Assets/chevron-left.svg";
import rightarrow from "../Assets/chevron-right.svg";

const Skillset = () => {

    const [skillname, setSkillname] = useState("ReactJS")

    const changeSkillName = (e) => {
        setSkillname(e.target.getAttribute("alt"));
    }
    
    const [currentlyworkingonskill, setCurrentlyworkingonskill] = useState("Node.Js")
    const [currentlyWorkingOnArray, setCurrentlyWorkingOnArray] = useState([
        {
            name: "Node.JS",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            website: "https://nodejs.org/",
        },
        {
            name: "MongoDB",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
            website: "https://www.mongodb.com/",
        },
        {
            name: "Express",
            image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
            website: "https://expressjs.com/",
        }
    ])

    const moveForward = () => {
        const tempendofarray = currentlyWorkingOnArray.slice(2, 3);
        setCurrentlyWorkingOnArray(currentlyWorkingOnArray.slice(0, 2));
        setCurrentlyWorkingOnArray(oldArray => [tempendofarray[0], ...oldArray])
    }

    useEffect(() => {
        setCurrentlyworkingonskill(currentlyWorkingOnArray[1].name);
    }, [currentlyWorkingOnArray]);
        
    const moveBackward = () => {

    }

    return (
        <div className="Skillset">
            <h2 className="skillsettitle">Technology Stack</h2> 
            <p className="skillsetdesc">Just a description to change! Just a description to change! Just a description to change! Just a description to change! Just a description to change! Just a description to change! </p>
            <p className="skillname">{skillname}</p>
            <div className="skillscontainer">

                <div className="line-middle-one"></div>
                <div className="line-middle-two"></div>
                <div className="line-middle-three"></div>
                <div className="line-top-one"></div>
                <div className="line-top-two"></div>
                <div className="line-top-three"></div>
                <div className="line-top-four"></div>
                <div className="line-top-five"></div>
                <div className="line-bottom-one"></div>
                <div className="line-bottom-two"></div>
                <div className="line-bottom-three"></div>
                <div className="line-bottom-four"></div>
                <div className="line-bottom-five"></div>

                <a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer"><img className="skillsetlogo javascript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" onMouseOver={changeSkillName} alt="JavaScript"/></a>

                <a href="https://www.w3schools.com/html/" target="_blank" rel="noopener noreferrer"><img className="skillsetlogo html" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" onMouseOver={changeSkillName} alt="HTML"/></a>

                <a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank" rel="noopener noreferrer"><img className="skillsetlogo css" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" onMouseOver={changeSkillName} alt="CSS"/></a>

                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"><img className="skillsetlogo reactjs" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" onMouseOver={changeSkillName} alt="ReactJS"/></a>

                <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer"><img className="skillsetlogo git" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" onMouseOver={changeSkillName} alt="Git"/></a>

                <a href="https://webpack.js.org/" target="_blank" rel="noopener noreferrer"><img className="skillsetlogo webpack" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" onMouseOver={changeSkillName} alt="Webpack"/></a>

                <a href="https://jestjs.io/" target="_blank" rel="noopener noreferrer"><img className="skillsetlogo jest" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" onMouseOver={changeSkillName} alt="Jest"/></a>

                <a href="https://www.adobe.com/uk/products/photoshop.html" target="_blank" rel="noopener noreferrer"><img className="skillsetlogo photoshop" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg" onMouseOver={changeSkillName} alt="Adobe Photoshop"/></a>

                <a href="https://www.adobe.com/uk/products/illustrator.html" target="_blank" rel="noopener noreferrer"><img className="skillsetlogo illustrator" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-line.svg" onMouseOver={changeSkillName} alt="Adobe Illustrator"/></a>

                <a href="https://www.adobe.com/uk/products/aftereffects.html" target="_blank" rel="noopener noreferrer"><img className="skillsetlogo aftereffects" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg" onMouseOver={changeSkillName} alt="Adobe After Effects" /></a>
            
            </div>

            <h3> Currently working on</h3>
            <p className="currentlyworkingondesc">There will <i>always</i> be something to learn, at the moment I'm currently advancing my knowledge in:</p>
            <p>{currentlyworkingonskill}</p>
             <div className="slideshowarea">
                <img src={leftarrow} alt="left arrow" onClick={moveBackward}></img>
                <div className="slideshow">
                    {/* <Slide arrows="false" slidesToScroll={1} slidesToShow={2}> */}
                    {currentlyWorkingOnArray.map((skill, index) => (
                        <a href={skill.website} key={index} target="_blank" rel="noopener noreferrer"className="slideshowimagecontainer">
                            <img className="slideshowimage" src={skill.image} alt={skill.name} key={index}></img>
                        </a>
                        )
                    )}
                    {/* </Slide> */}
                </div>
                <img src={rightarrow} alt="right arrow" onClick={moveForward}></img>
            </div> 
        </div>


          
    )
}

export default Skillset;

// {currentlyWorkingOnArray.map((skill, index) => (
//     <div key={index} className="slideshowimagecontainer">
//     <img className="slideshowimage" src={skill.image} alt={skill.name} key={index}></img>
//     </div>
// )
// )}

/* <div className="slideshowarea">
                <img src={leftarrow} alt="left arrow" onClick={moveBackward}></img>
                <div className="slideshow">
                    <Slide slidesToScroll={1} slidesToShow={2}>
                    {currentlyWorkingOnArray.map((skill, index) => (
                            <div key={index} className="slideshowimagecontainer">
                            <img className="slideshowimage" src={skill.image} alt={skill.name} key={index}></img>
                            </div>
                        )
                    )}
                    </Slide>
                </div>
                <img src={rightarrow} alt="right arrow" onClick={moveForward}></img>
            </div> */