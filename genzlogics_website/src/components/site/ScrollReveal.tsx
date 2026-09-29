"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const observeElements = (elements: NodeListOf<HTMLElement>) => {
      if (!window.IntersectionObserver) {
        elements.forEach((element) => element.classList.add("visible"));
        return null;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
      );

      elements.forEach((element) => observer.observe(element));
      return observer;
    };

    let observer = observeElements(document.querySelectorAll<HTMLElement>(".reveal"));

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const element = node as HTMLElement;
            if (element.classList.contains("reveal")) {
              observer?.observe(element);
            }
            element.querySelectorAll<HTMLElement>(".reveal").forEach((el) => observer?.observe(el));
          }
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer?.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}