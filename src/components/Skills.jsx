
// import img from "../assets/images/htmlcss.webp";
import skill from "../skillsData";
import Box from "./Box";

const Skills = ()=>{
    return(
        <section className="skills fluid-container" id="skills">
            <div className="album py-5 skills-container">
                <div className="container">
                    <div className="skill-heading">
                        <h1 className="nav-heading">Expertise</h1>
                        <p>An impressive array of skills cultivated through dedication, experience, and continuous learning.</p>
                    </div>
                
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                    {skill.map((skill)=>(<Box key={skill.id} source={skill.source} title={skill.title} />
                    ))}
                    {/* <div className="col col-xl-4 col-md-6 box">
                        <div className="card shadow-sm">
                            <img src={img} alt="html css " className="bd-placeholder-img card-img-top" width="100%" height="225"  />
                            <div className="card-body">
                                <h3 className="card-text align-text-center">HTML, CSS</h3>
                            </div>
                        </div>
                    </div> */}

                </div>

                </div>
            </div>
        </section>
    );
}


export default Skills;