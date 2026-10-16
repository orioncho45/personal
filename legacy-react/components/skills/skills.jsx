import SkillCard from "./card";
import CodeIcon from "@mui/icons-material/Code";
import StorageIcon from "@mui/icons-material/Storage";
import BrushIcon from "@mui/icons-material/Brush";
import DnsIcon from "@mui/icons-material/Dns";
import RobotIcon from "@mui/icons-material/PrecisionManufacturing";
import MobileIcon from "@mui/icons-material/MobileOff";
import ComputerIcon from "@mui/icons-material/Computer";
import "./skills.css";

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-heading">Skills & Expertise</h2>

      <div className="skills-grid">
        <SkillCard
          icon={<CodeIcon fontSize="large" />}
          title="Frontend Development"
          description="React, TypeScript, Tailwind CSS, Next.js, Vue.js"
        />

        <SkillCard
          icon={<DnsIcon fontSize="large" />}
          title="Backend Development"
          description="Node.js, Python, PostgreSQL, MongoDB, REST APIs"
        />

        <SkillCard
          icon={<BrushIcon fontSize="large" />}
          title="UI/UX Design"
          description="Figma, Adobe XD, User Research, Prototyping (For project only)"
        />

        <SkillCard
          icon={<StorageIcon fontSize="large" />}
          title="Database Design"
          description="MySQL, PostgreSQL, MongoDB, Schema Design"
        />
        <SkillCard
          icon={<MobileIcon fontSize="large" />}
          title="Mobile App Development"
          description="Custom Native Mobile app development for iOS and Android"
        />
        <SkillCard
          icon={<ComputerIcon fontSize="large" />}
          title="Desktop App Development"
          description="Custom Native desktop app development for windows and mac"
        />
        
        <SkillCard
          icon={<RobotIcon fontSize="large" />}
          title="Automation"
          description="IoT, Robotics and Automation"
        />
      </div>
    </section>
  );
};

export default Skills;
