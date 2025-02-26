import "./About.css";
import myImage from "../assets/me.jpg";

function About() {
    return (
      <>
        <div className="About">
            <div className="tag">
                <h1>About Me</h1>
            </div>
            <div className="wrapper">
                <p className="intro">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit diam at mauris ornare, vitae sagittis tellus iaculis. 
                    Nulla consectetur aliquet semper. Vestibulum nec quam posuere purus commodo consectetur eu in risus. Nam nec feugiat nisl. 
                    Phasellus fermentum felis vitae tincidunt molestie. Cras auctor mollis turpis a fermentum. In lobortis sem enim, sit amet blandit nunc elementum sit amet. 
                </p>
                <div className="me">
                    <img src={myImage} alt="" />
                </div>
            </div>
        </div>
      </>
    );
  }
  
  export default About;