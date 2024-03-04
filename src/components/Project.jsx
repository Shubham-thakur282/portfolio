
// import img from "../assets/images/htmlcss.webp";
import project from "../projectData";
import Box from "./Box";

const Skills = ()=>{
    return(
        <section className="project fluid-container" id="project">
            <div className="album py-5 skills-container">
                <div className="container">
                    <div className="box-heading">
                        <h1 className="nav-heading">Expertise</h1>
                        <p>An impressive array of skills cultivated through dedication, experience, and continuous learning.</p>
                    </div>
                
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 boxes">

                    {project.map((project)=>(<Box key={project.id} source={project.source} title={project.title} url={project.url} />
                    ))}
                </div>

                </div>
            </div>
        </section>
    );
}


export default Skills;