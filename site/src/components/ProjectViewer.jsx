import React, { useState } from "react";

function VimeoFrame({ item }) {
  if (!/^\d+$/.test(String(item.id))) return <p>Video unavailable.</p>;
  const url = new URL(`https://player.vimeo.com/video/${item.id}`);
  if (item.hash && /^[a-zA-Z0-9]+$/.test(item.hash))
    url.searchParams.set("h", item.hash);
  url.searchParams.set("dnt", "1");
  return (
    <iframe
      src={url.toString()}
      title={item.title || "Project video on Vimeo"}
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
      loading="lazy"
    />
  );
}

function Media({ item }) {
  switch (item.type) {
    case "image":
      return <img src={item.src} alt={item.alt || "Project image"} />;
    case "video":
      return (
        <video
          src={item.src}
          controls
          playsInline
          preload="metadata"
          aria-label={item.title || "Project video"}
        />
      );
    case "vimeo":
      return <VimeoFrame item={item} />;
    default:
      return <p>Media unavailable.</p>;
  }
}

export function ProjectViewer({ media }) {
  const [index, setIndex] = useState(0);
  if (!media.length) return null;
  const select = (next) => setIndex((next + media.length) % media.length);
  return (
    <div
      className="viewer"
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") select(index - 1);
        if (event.key === "ArrowRight") select(index + 1);
      }}
    >
      <div className="viewer-stage">
        <Media key={index} item={media[index]} />
      </div>
      <div className="viewer-controls">
        <div className="viewer-thumbs">
          {media.map((item, position) => (
            <button
              key={position}
              type="button"
              className="viewer-thumb"
              aria-label={`Show media ${position + 1}: ${item.title || item.alt || item.type}`}
              aria-pressed={position === index}
              onClick={() => select(position)}
            >
              {item.type === "image" ? (
                <img src={item.src} alt="" loading="lazy" />
              ) : (
                <span>{item.type === "vimeo" ? "VIMEO ↗" : "PLAY ▶"}</span>
              )}
            </button>
          ))}
        </div>
        <div className="viewer-arrows">
          <button
            type="button"
            aria-label="Previous media"
            onClick={() => select(index - 1)}
          >
            ←
          </button>
          <span>
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(media.length).padStart(2, "0")}
          </span>
          <button
            type="button"
            aria-label="Next media"
            onClick={() => select(index + 1)}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
