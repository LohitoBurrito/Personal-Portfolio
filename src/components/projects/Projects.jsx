import React from 'react'
import './projects.css'
import projectData from "./project.json"

const Projects = () => {
  

  return (
    <div className="Projects" id="Projects">
        <div className="ProjectHeader">
          <h6>My Projects</h6>
        </div>

        <section className="myProjects">
          <div className="cards" id="quote">
            <div className="projectImage1">
              <h2>
                A wise person once said "When in doubt, use Stack Overflow".
                I learned a lot about building websites from online resources,
                like Youtube Channels, Stack Overflow, and various other Websites.
              </h2>
            </div>
          </div>
          {
          projectData.map(project => {
            return(
                <>
                  <div className="cards">
                    <div className={ project.className } style={{
                      backgroundImage: "url(" + project.Image + ")",
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      height: '100%',
                      padding: '30px',
                      borderRadius: '40px',
                      transition: '0.3s'}
                    }>
                      <h2>{ project.projectName }</h2>
                      <h3>{ project.date }</h3>
                      <p>{ project.description }</p>
                      <p>Tools: { project.Tools }</p>
                      <div className="links">
                        <a href={ project.Github }>GitHub</a>
                        <br></br>
                        <a href={ project.Weblink }>Website</a>
                      </div>
                    </div>
                  </div>
                </>
            )
          }
          )
        }
        </section>
    </div>
  )
}

export default Projects