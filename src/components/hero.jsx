import { Box } from "@mui/material";

const Hero = ()=>{
    return (
        <section class="hero">
            <h1>It's Orion Chowdhury</h1>
            <h2>Creative Developer & Designer</h2>
            <p>To me, your problems are as simple as my website. Let's figure that out!</p>
            <Box display={"flex"} > <button class="btn btn-primary">View My Work</button> <button class="btn btn-secondary">Get In Touch</button></Box>
            
        </section>
    )
}
export default Hero;