import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

type SplitTextProps = {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: "chars" | "words" | "lines";
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  onComplete?: () => void;
};

export default function SplitTextAnim({
  text,
  className = "",
  delay = 0.1,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  onComplete,
}: SplitTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const split = new SplitText(ref.current, { type: splitType });
    let targets: Element[];

    switch (splitType) {
      case "words":
        targets = split.words;
        break;
      case "lines":
        targets = split.lines;
        break;
      case "chars":
      default:
        targets = split.chars;
    }

    gsap.fromTo(
      targets,
      from,
      {
        ...to,
        duration,
        ease,
        stagger: delay,
        onComplete: () => {
          onComplete && onComplete();
          split.revert();
        },
      }
    );

    return () => {
      split.revert();
      gsap.killTweensOf(targets);
    };
  }, [text, delay, duration, ease, splitType, from, to, onComplete]);

  return (
    <p
      ref={ref}
      className={className}
      style={{ overflow: "hidden", display: "inline-block" }}
    >
      {text}
    </p>
  );
}
