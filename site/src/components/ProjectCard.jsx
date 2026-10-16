import React from "react";

export function ProjectCard({ project, index }) {
  const cover = project.media.find((item) => item.type === "image");
  return (
    <article className="project-card reveal">
      <a
        href={`/projects/${project.slug}/`}
        className="project-card-link"
        aria-label={`Explore ${project.title}`}
      >
        <div className="project-image-frame">
          {cover && (
            <img
              src={cover.src}
              alt={cover.alt || project.title}
              loading="lazy"
            />
          )}
          <span className="card-index">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="card-arrow" aria-hidden="true">
            ↗
          </span>
        </div>
        <div className="project-card-meta">
          <span>{project.category}</span>
          <span>Case study ↗</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
      </a>
    </article>
  );
}
