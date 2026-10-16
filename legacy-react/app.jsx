import { Typography } from "@mui/material";
import AboutSection from "./components/about/about";
import ContactSection from "./components/contact/contact";
import Hero from "./components/hero"
import Projects from "./components/project/list"
import Skills from "./components/skills/skills";
import { useRef } from "react";

const App = ()=>{
    const ref = useRef();
    const proRef = useRef();
    const onContact = ()=>{
        ref.current?.scrollIntoView({ behavior: "smooth" });

        // delay focus slightly (important)
        setTimeout(() => {
        ref.current?.focus();
        }, 300);
    }
    const onProject = ()=>{
        proRef.current?.scrollIntoView({ behavior: "smooth" });

        
    }
    return (
        <>
            <Hero onContact={onContact} onProject={onProject}/><br />
            <AboutSection/>
            <Skills/>
            <Projects onContact={onContact} ref={proRef}></Projects>
            <ContactSection ref={ref}/>
            <footer style={{borderTop: "1px solid white", padding: "1% 10%"}} >
                <center><Typography sx={{color: "white"}} >© {(new Date()).getFullYear()}. All rights reserved by Orion Chowdhury</Typography></center>
            </footer>
            
        </>
    )
}
export default App;