import "./About.css";
import myImage from "../assets/me.jpg";
import { useEffect, useRef } from "react";

function About() {
    const aboutRef = useRef(null);
    useEffect(() => {
        if (aboutRef.current) {
            aboutRef.current.scrollIntoView({ block: "start" });
        }
    }, []);
    return (
      <>
        <div ref={aboutRef} className="About">
            <div className="tag" style={{border: 'none'}}>
                <h1>About Me</h1>
            </div>
            <div className="wrapper">
                <p className="intro">
                    Hi, I'm Vihaan Patel—a full stack developer passionate about building clean, efficient, and impactful digital experiences. I enjoy working across the stack, from crafting intuitive UIs to architecting robust backend systems. When I'm not coding, you'll find me exploring music, reading, or tinkering with new tech.
                </p>
                <div className="me">
                    <img src={myImage} alt="Vihaan Patel" />
                </div>
            </div>
        </div>
      </>
    );
}
  
export default About;