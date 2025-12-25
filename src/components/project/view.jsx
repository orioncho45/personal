import {
  Dialog,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./viewer.css";

const ProjectViewer = ({ open, onClose, project, onClick=()=>{} }) => {
  if (!project) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="lg"
      PaperProps={{
        style: {
          backgroundColor: "#000",
          color: "#fff",
        },
      }}
    >
      <div className="viewer-container hide-scrollbar">
        {/* Close Button */}
        <IconButton className="viewer-close" onClick={onClose}>
          <CloseIcon />
        </IconButton>

        {/* Gallery */}
      <div className="viewer-gallery">
  {project.media.map((item, index) => (
    <div className="viewer-item" key={index}>
      {item.type === "image" ? (
        <img src={item.src} alt="" />
      ) : (
        <video src={item.src} controls />
      )}
    </div>
  ))}
</div>


        {/* Content */}
        <div className="viewer-content">
          <h2>{project.title}</h2>
          <p>{project.description2 || project.description}</p>

          <button className="viewer-btn" onClick={e=>{
            e.preventDefault();
            onClick()
          }}>
            Contact me
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export default ProjectViewer;
