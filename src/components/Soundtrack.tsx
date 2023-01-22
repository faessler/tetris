import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Soundtrack = () => {
  const ref = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "m") {
        if (ref?.current?.paused) {
          ref?.current?.play();
        } else {
          ref?.current?.pause();
        }
      }
    };
    addEventListener("keydown", onKeyDown);
    return () => removeEventListener("keydown", onKeyDown);
  }, [ref]);

  return createPortal(
    <audio ref={ref} loop>
      <source src="/audio/soundtrack.webm" type="audio/webm" />
    </audio>,
    document.body
  );
};

export default Soundtrack;
