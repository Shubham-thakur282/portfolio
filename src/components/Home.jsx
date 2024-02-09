
import "bootstrap/dist/css/bootstrap.min.css";
import img from "../assets/images/img.jpg";
import { ReactTyped } from "react-typed";

const Home = ()=>{
    return(
        <section className="container home">
      <div className="container col-xxl-8">
        <div className="row flex-lg-row-reverse align-items-center g-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={img}
              className="d-block mx-lg-auto img-fluid hero-img"
              id="hero-img"
              style={{ borderRadius: "110px" }}
              alt="Shubham img"
              width="700"
              height={500}
              loading="lazy"
            ></img>
          </div>
          <div className="col-lg-6">
            <div className="discription-content">
              <h5 className="sub-title">Hello</h5>
              <h2 className="title">
                <span>I'm </span>
                Shubham Thakur
              </h2>
              <h2 className="title-about">
                a{" "}
                <ReactTyped
                  strings={["Web Developer", "Student", "Learner"]}
                  typeSpeed={160}
                  loop
                  backSpeed={60}
                  cursorChar="|"
                  showCursor={true}
                  className="words"
                />
              </h2>
              <p>Passionate MERN Developer with a thirst for knowledge, constantly pushing boundaries to
                create innovative and user-centric websites.</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start button-class"> 
                <a href="/#" type="button" className="btn btn-lg px-4 me-md-2" fdprocessedid="z1w3da" id="btn1">Hire Me</a>
                <a href="/#" type="button" className="btn btn-lg px-4" id="btn2" fdprocessedid="yno3ta">Expertise</a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}


export default Home;