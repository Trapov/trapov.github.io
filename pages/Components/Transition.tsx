import { useState, useEffect, ReactNode } from "react";
import styles from "./Transition.module.css";

export default function Transition(props: { children : ReactNode }) {
  const [displayChildren, setDisplayChildren] = useState(props.children);
  const [transitionStage, setTransitionStage] = useState("fadeOut");
  useEffect(() => {
    setTransitionStage("fadeIn");
  }, []);

  useEffect(() => {
    if (props.children !== displayChildren) setTransitionStage("fadeOut");
  }, [props.children, setDisplayChildren, displayChildren]);

  return (
    <div>
      <div
        onTransitionEnd={() => {
          if (transitionStage === "fadeOut") {
            setDisplayChildren(props.children);
            setTransitionStage("fadeIn");
          }
        }}
        className={`${styles.content} ${styles[transitionStage]}`}
      >
        {displayChildren}
      </div>
    </div>
  );
}
