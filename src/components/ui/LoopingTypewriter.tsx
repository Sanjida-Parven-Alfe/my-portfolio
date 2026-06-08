"use client";

import { useEffect, useState } from "react";

interface LoopingTypewriterProps {
  text: string;
  speed?: number;
  pause?: number;
}

export function LoopingTypewriter({ text, speed = 120, pause = 1600 }: LoopingTypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      if (isDeleting) {
        setDisplayedText((value) => value.slice(0, -1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
        }
      } else {
        setDisplayedText((value) => text.slice(0, value.length + 1));
        if (displayedText === text) {
          setTimeout(() => setIsDeleting(true), pause);
          return;
        }
      }
    };

    const currentSpeed = isDeleting ? speed / 2 : speed;
    const timer = window.setTimeout(handleTyping, currentSpeed);
    return () => window.clearTimeout(timer);
  }, [displayedText, isDeleting, pause, speed, text]);

  return (
    <span className="inline-flex items-center gap-2 text-lg font-medium text-cyan-400">
      <span>{displayedText}</span>
      <span className="animate-pulse">|</span>
    </span>
  );
}
