import React, { useEffect } from "react";
import { Header, Footer } from "./components/Layout.jsx";

function usePageMotion() {
  useEffect(() => {
    const elements = [...document.querySelectorAll(".reveal")];
    if (
      "IntersectionObserver" in window &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries)
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
        },
        { threshold: 0.08, rootMargin: "0px 0px 40px 0px" },
      );
      elements.forEach((element) => observer.observe(element));
      return () => observer.disconnect();
    }
    elements.forEach((element) => element.classList.add("is-visible"));
  }, []);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      const available =
        document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty(
        "--scroll-progress",
        `${available > 0 ? (window.scrollY / available) * 100 : 0}%`,
      );
      frame = 0;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => {
      removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);
}

export function App({ route }) {
  usePageMotion();
  const { Component, props } = route;
  return (
    <>
      <Header currentPath={route.path} />
      <main id="main">
        <Component {...props} />
      </main>
      <Footer />
    </>
  );
}
