import ProjectCard from "./card"
import {Grid} from "@mui/material"
import aura from './images/aura.png'
import erp from './images/erp.png'
import food from './images/food.png'
import ndc from './images/ndc.png'
import bd from './images/bd.png'

const Projects = () => {
  return (
    <section className="project-section">
        <h2 className="project-heading">Featured Projects</h2>
            <Grid container>
            <Grid item xs={12} md={6} paddingTop={"2%"} >
                <ProjectCard
                    image={erp}
                    title="Modern ERP"
                    description="A custom ERP for Amity International (Multipurpose distribution company). ERP that you have never seen before!"
                    tech={[]}
                />
            </Grid>
            <Grid item xs={12} md={6} paddingTop={"2%"} >
                <ProjectCard
                    image={ndc}
                    title="Lab Software"
                    description="A system built for monitoring the activities of the students on their computer and for task management"
                    tech={[]}
                />
            </Grid>
            <Grid item xs={12} md={6} paddingTop={"2%"} >
                <ProjectCard
                    image={food}
                    title="Food Court Technology"
                    description="A food court management software with real time inventory and order tracking."
                    tech={["React", "Node.js", "PHP", "Realtime", "Maps"]}
                />
            </Grid>
            <Grid item xs={12} md={6} paddingTop={"2%"} >
                <ProjectCard
                    image={aura}
                    title="Project Aura"
                    description="An Andriod and iOS based mobile app for home automation. For an ongoing wireless power transmission project."
                    tech={["React Native", "Node.js", "Android", "IoT"]}
                />
            </Grid>
            <Grid item xs={12} md={6} paddingTop={"2%"} >
                <ProjectCard
                    image={bd}
                    title="Website Automation Bot"
                    description="A software for BD Trippers for web scrapping and automation"
                    tech={[]}
                />
            </Grid>
        
        </Grid>

    </section>
  );
};

export default Projects;
