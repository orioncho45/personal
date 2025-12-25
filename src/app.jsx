import { Typography } from "@mui/material";
import AboutSection from "./components/about/about";
import ContactSection from "./components/contact/contact";
import Hero from "./components/hero"
import Projects from "./components/project/list"
import Skills from "./components/skills/skills";

const App = ()=>{
    return (
        <>
            <Hero/><br />
            <AboutSection/>
            <Skills/>
            <Projects></Projects>
            <ContactSection/>
            <footer style={{borderTop: "1px solid white", padding: "1% 10%"}} >
                <center><Typography sx={{color: "white"}} >© {(new Date()).getFullYear()}. All rights reserved by Orion Chowdhury</Typography></center>
            </footer>
            
        </>
    )
}
export default App;