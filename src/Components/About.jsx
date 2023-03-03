import {Animate} from "./Animate"
export default function About() {
  return (
  
    <Animate>
      <div className="about">
        <div className="logo">
          <h1>
            About<span> Me</span>
          </h1>
        </div>
        <div className="about-info">
          <div className="info">
            <p>
              Hi my name is Hussein , i'm i selftaught Web Developer specialize
              in Frontend development i enjoy creating web sites and web
              applications, i'm very proficient with solving coding problems and
              i'm a very friendly person that likes working with others. i focus
              on quality and proficient work that satisfies clients.
            </p>
          </div>
          <h1>
            My <span>Skills</span>
          </h1>
          <div className="myskills">
            <div>
              <i className="devicon-javascript-plain colored"></i>
              <p>JavaScript</p>
            </div>
            <div>
              <i className="devicon-html5-plain colored"></i>
              <p>HTML</p>
            </div>
            <div>
              <i className="devicon-css3-plain colored"></i>
              <p>CSS</p>
            </div>
            <div>
              <i className="devicon-react-plain colored"></i>
              <p>React</p>
            </div>
            <div>
              <i className="devicon-sass-plain colored"></i>
              <p>SASS</p>
            </div>
            <div>
              <i className="devicon-redux-plain colored"></i>
              <p>Redux</p>
            </div>
            <div id="about">
              <i className="devicon-mongodb-plain colored"></i>
              <p>MongoDB</p>
            </div>
            <div>
              <i className="devicon-express-original-wordmark"></i>
              <p>ExpressJs</p>
            </div>
            <div>
              <i className="devicon-python-plain colored"></i>
              <p>Python</p>
            </div>
          </div>
        </div>
      </div>
    </Animate>
  )
}
