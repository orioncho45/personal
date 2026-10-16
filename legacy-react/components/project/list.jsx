import ProjectCard from "./card"
import {Grid} from "@mui/material"
import ProjectViewer from "./view"
import { forwardRef, useState } from "react"
import { projects } from "./projects"

const Projects = forwardRef(({onContact=()=>{}}, ref) => {
    const [selectedProject, setSelectedProject] = useState(null)
  return (
    <section className="project-section" ref={ref}>
        <h2 className="project-heading">Featured Projects</h2>
            <Grid container>
            {projects.map((project, idx) => (
              <Grid item xs={12} md={6} paddingTop={"2%"} key={idx}>
                <ProjectCard
                  image={project.media?.[0]?.src || project.image || ""}
                  title={project.title}
                  description={project.description}
                  tech={project.tech || []}
                  onClick={() => setSelectedProject(project)}
                />
              </Grid>
            ))}
        </Grid>
        <ProjectViewer
            open={Boolean(selectedProject)}
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            onClick={()=>{setSelectedProject(null); onContact()}}
        />

    </section>
  );
});

export default Projects;
