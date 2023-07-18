import React, { useEffect, useState } from "react";
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
            name: "PHP",
            image: <svg className={`PHP slideshowimage`} alt="PHP" viewBox="0 0 128 128">
            <path fill="#96ccff" d="M64 33.039C30.26 33.039 2.906 46.901 2.906 64S30.26 94.961 64 94.961 125.094 81.099 125.094 64 97.74 33.039 64 33.039zM48.103 70.032c-1.458 1.364-3.077 1.927-4.86 2.507-1.783.581-4.052.461-6.811.461h-6.253l-1.733 10h-7.301l6.515-34H41.7c4.224 0 7.305 1.215 9.242 3.432 1.937 2.217 2.519 5.364 1.747 9.337-.319 1.637-.856 3.159-1.614 4.515a15.118 15.118 0 01-2.972 3.748zM69.414 73l2.881-14.42c.328-1.688.208-2.942-.361-3.555-.57-.614-1.782-1.025-3.635-1.025h-5.79l-3.731 19h-7.244l6.515-33h7.244l-1.732 9h6.453c4.061 0 6.861.815 8.402 2.231s2.003 3.356 1.387 6.528L76.772 73h-7.358zm40.259-11.178c-.318 1.637-.856 3.133-1.613 4.488-.758 1.357-1.748 2.598-2.971 3.722-1.458 1.364-3.078 1.927-4.86 2.507-1.782.581-4.053.461-6.812.461h-6.253l-1.732 10h-7.301l6.514-34h14.041c4.224 0 7.305 1.215 9.241 3.432 1.935 2.217 2.518 5.418 1.746 9.39zM95.919 54h-5.001l-2.727 14h4.442c2.942 0 5.136-.29 6.576-1.4 1.442-1.108 2.413-2.828 2.918-5.421.484-2.491.264-4.434-.66-5.458-.925-1.024-2.774-1.721-5.548-1.721zm-56.985 0h-5.002l-2.727 14h4.441c2.943 0 5.136-.29 6.577-1.4 1.441-1.108 2.413-2.828 2.917-5.421.484-2.491.264-4.434-.66-5.458S41.708 54 38.934 54z"></path>
            </svg>,
            website: "https://www.php.net/",
        },
        {
            name: "Laravel",
            image: 
            <svg className={`Laravel slideshowimage`} alt="Laravel" viewBox="0 0 128 128">
            <path fill-rule="evenodd" clip-rule="evenodd" fill="#96ccff" d="M16.934 1.719c-1.127.088-2.234.074-3.325.373-2.387.655-4.508 1.702-6.379 3.316-1.1.948-2.06 1.97-2.875 3.174-1.258 1.859-2.115 3.857-2.545 6.106.172.301.353.617.545.938 1.219 2.038 2.439 4.062 3.661 6.098l3.212 5.341c.988 1.646 1.974 3.293 2.96 4.939l4.608 7.688 3.143 5.244c1.527 2.545 3.058 5.088 4.583 7.634l5.609 9.371c1.617 2.699 3.237 5.396 4.857 8.093l.216.314c.235.075.422.011.616-.035 2.134-.512 4.268-1.021 6.402-1.531 3.461-.827 6.922-1.651 10.383-2.479l5.421-1.297c3.499-.836 6.999-1.67 10.498-2.508 3.537-.846 7.073-1.696 10.611-2.543 1.788-.429 3.576-.856 5.365-1.283 3.461-.826 6.922-1.65 10.383-2.474l11.308-2.693.611-.165-.167-.331-3.086-4.362-3.048-4.315-3.26-4.604-3.116-4.413-3.088-4.361-3.188-4.507c-1.041-1.47-2.084-2.938-3.126-4.407l-1.647-2.326a4.275 4.275 0 01-.587-1.159c-.326-1.011.046-1.684.636-2.181.382-.323.822-.56 1.298-.7a20.898 20.898 0 012.01-.51c1.359-.257 2.727-.475 4.091-.702l4.624-.754c.975-.161 1.949-.33 2.924-.495 1.325-.224 2.65-.449 3.976-.67 1.287-.216 2.574-.43 3.861-.642l4.213-.689 2.924-.491c1.112-.186 2.223-.371 3.334-.553 1.386-.226 2.771-.454 4.157-.671.826-.129 1.652-.174 2.472.062a5.63 5.63 0 011.696.833l.721.503c.072-.166-.032-.256-.08-.351a16.543 16.543 0 00-4.26-5.422 16.399 16.399 0 00-5.636-3.09c-1.229-.389-2.492-.208-3.778-.305M55.689 127c-.062 0-.117-.45-.187-.569-1.5-2.56-3.016-5.308-4.498-7.877a1335.74 1335.74 0 01-5.557-9.74c-1.965-3.478-3.913-6.966-5.863-10.452a5709.989 5709.989 0 01-5.549-9.948c-1.115-2.005-2.223-4.014-3.337-6.02l-.296-.459-.542.107c-1.072.277-2.142.556-3.212.838-1.49.392-2.979.791-4.47 1.18-3.347.871-6.694 1.737-10.041 2.605-3.404.884-6.951 1.77-10.356 2.65-.207.053.219.071-.781.106v21.145c.412.656.373.347.399.563.079.626.207 1.257.317 1.877.412 2.31 1.339 4.425 2.679 6.351 1.965 2.826 4.582 4.846 7.788 6.082 1.145.44 2.34.75 3.562.9l1.241.328"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#96ccff" d="M4.976 77.742c3.939-.937 7.879-1.873 11.818-2.808 1.73-.41 3.461-.815 5.191-1.227.865-.206 1.732-.402 2.59-.634.764-.206.858-.459.465-1.148-.568-.996-1.146-1.986-1.721-2.979l-5.064-8.72-5.062-8.721c-1.717-2.958-3.436-5.916-5.154-8.873l-4.412-7.59c-.636-1.094-1.408-2.191-2.047-3.284-.119-.199.42-.437-.58-.543v47.396c0-.032.453-.059.606-.096l3.37-.773zm121.248 33.878c-1.544.549-3.089 1.102-4.632 1.655l-10.545 3.781c-1.953.701-3.902 1.41-5.856 2.108-3.982 1.421-7.966 2.837-11.949 4.255-2.308.822-4.617 1.838-6.924 2.664-.632.227-1.255.917-1.881.917h26.49l.57-.327c.674-.029 1.337-.229 1.999-.35 2.719-.497 5.154-1.673 7.311-3.392 1.657-1.321 3.005-2.936 4.061-4.778 1.086-1.896 1.731-3.947 2.041-6.101.027-.186.085-.397-.071-.589-.22-.017-.414.086-.614.157zm-2.275-35.571c-1.168-1.598-2.339-3.193-3.505-4.792-1.609-2.207-3.215-4.416-4.822-6.624-.653-.896-1.315-1.785-1.952-2.691-.192-.273-.411-.346-.71-.265l-.171.049c-2.958.719-5.917 1.436-8.876 2.153l-5.302 1.287-10.372 2.519c-3.419.831-6.838 1.663-10.258 2.492l-10.662 2.582c-3.497.849-6.992 1.701-10.488 2.551l-10.142 2.462c-1.787.434-3.574.866-5.359 1.302-.263.064-.546.08-.826.292l.239.455a5999.968 5999.968 0 009.598 16.529c1.874 3.213 3.753 6.424 5.63 9.636 1.079 1.845 2.151 3.692 3.239 5.532a661.851 661.851 0 003.653 6.115c.369.607.788 1.187 1.21 1.759a3.64 3.64 0 001.046.957c.426.257.885.338 1.369.229.25-.057.495-.139.737-.223l.89-.33c3.237-1.107 6.473-2.214 9.711-3.317 2.526-.86 5.055-1.716 7.583-2.571 2.509-.851 5.02-1.698 7.53-2.545l7.474-2.524c2.548-.861 5.095-1.722 7.642-2.585 3.126-1.061 6.251-2.126 9.379-3.185 3.015-1.02 6.033-2.034 9.049-3.052.185-.062.389-.088.542-.291l.019-.439c.001-6.255-.001-12.511.006-18.766a1.38 1.38 0 00-.289-.873c-.948-1.269-1.877-2.551-2.812-3.828zm-.519-58.938c-.702-.889-1.596-1.171-2.692-.885-.477.125-.967.204-1.453.293-1.594.292-3.19.579-4.784.868-2.334.424-4.667.852-7.001 1.272-1.848.332-3.697.659-5.546.983l-7.418 1.298c-.311.054-.625.108-.925.204-.437.14-.563.414-.363.825.163.336.366.657.586.959 1.534 2.114 3.075 4.223 4.616 6.333 2.124 2.909 4.249 5.817 6.374 8.724 1.798 2.46 3.598 4.92 5.397 7.379 1.414 1.932 2.828 3.864 4.244 5.795l.279.338 12.271-3.033.029-.636c.001-8.511-.001-17.022.006-25.534 0-.376-.091-.678-.328-.976-1.032-1.303-2.045-2.621-3.066-3.933l-.226-.274zm3.301 41.241c-1.856.446-3.719.87-5.62 1.373.201.357 5.415 7.395 5.718 7.729l.19.105.021-.429.001-2.963c.001-1.719.005-3.438.001-5.157 0-.209.059-.434-.085-.646l-.226-.012z"></path>
            </svg>,
            website: "https://laravel.com/",
        },
    ])

    const moveForward = () => {
        const tempendofarray = currentlyWorkingOnArray.slice(1, 2);
        setCurrentlyWorkingOnArray(currentlyWorkingOnArray.slice(0, 1));
        setCurrentlyWorkingOnArray(oldArray => [tempendofarray[0], ...oldArray])
    }

    useEffect(() => {
        setCurrentlyworkingonskill(currentlyWorkingOnArray[0].name);
    }, [currentlyWorkingOnArray]);
        
    const moveBackward = () => {

    }

    return (
        <div className="Skillset">
            <div id="TechStack" className="anchorrefskill"></div>
            <h2 className="skillsettitle">Technology Stack</h2> 
            <p className="skillsetdesc">Throughout the course of my studying, I've come across many core technologies of web development, the majority of which are shown below.</p>
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
            <div className="currentlyworkingoncontainer">
          
                <h3 className="currentlyworkingontitle">Currently learning about...</h3>
                <p className="currentlyworkingondesc">As technologies continue to evolve, I'm a firm believer that there will <i>always</i> be something to learn. At the moment, I'm currently working towards educating myself on back-end development, therefore, advancing my knowledge in:</p>
                <h3 className="currentlyworkingonskill">{currentlyworkingonskill}</h3>
                 <div className="slideshowarea">
                    <img className="leftarrow" src={leftarrow} alt="leftarrow" onClick={moveBackward}></img>
                    <div className="slideshow">
                        <a href={currentlyWorkingOnArray[0].website} target="_blank" rel="noopener noreferrer" className="slideshowimagecontainer">
                                {currentlyWorkingOnArray[0].image}
                            </a>
                        {/* {currentlyWorkingOnArray.map((skill, index) => (
                            <a href={skill.website} key={index} target="_blank" rel="noopener noreferrer" className="slideshowimagecontainer">
                                {skill.image}
                            </a>
                            )
                        )} */}
                    </div>
                    <img className="rightarrow" src={rightarrow} alt="rightarrow" onClick={moveForward}></img>
                </div> 
            </div>
        </div>


          
    )
}

export default Skillset;
