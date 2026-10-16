import React from "react";

export function ProjectActions({ actions }) {
  if (!actions?.length) {
    return (
      <a href="/book/" className="text-link">
        Discuss a similar challenge ↗
      </a>
    );
  }

  return (
    <div className="project-actions">
      {actions.map(({ label, url, newTab }) => (
        <a
          key={`${label}-${url}`}
          href={url}
          className="button button-outline"
          target={newTab ? "_blank" : undefined}
          rel={newTab ? "noopener noreferrer" : undefined}
        >
          {label} <span aria-hidden="true">↗</span>
        </a>
      ))}
    </div>
  );
}
