import { useEffect, ReactNode, useState } from "react";
import styles from "./Container.module.css";

const Container = (props: {
  column?: Boolean | null;
  fluid?: Boolean | null;
  row?: Boolean | null;
  justifyContent?: String | null;
  columnIfMd?: Boolean | null;
  rowIfMd?: Boolean | null;
  rowIfSm?: Boolean | null;
  columnIfSm?: Boolean | null;
  alignItems?: String | null;
  size?: Number | null;
  className?: string | null;
  children: ReactNode;
}) => {
  const [cssClasses, setCssClasses] = useState<Array<string>>([]);
  useEffect(() => {
    const cssClassesInner = [];

    if (props.className){
      cssClassesInner.push(props.className);
    }
    if (props.column) {
      cssClassesInner.push(styles.column);
    }
    if (props.row) {
      cssClassesInner.push(styles.row);
    }
    if (props.columnIfMd) {
      cssClassesInner.push(styles['column-if-md']);
    }
    if (props.rowIfMd) {
      cssClassesInner.push(styles['row-if-md']);
    }
    if (props.rowIfSm) {
      cssClassesInner.push(styles['row-if-sm']);
    }
    if (props.columnIfSm) {
      cssClassesInner.push(styles['column-if-sm']);
    }
    if (props.fluid) {
      cssClassesInner.push(styles.container);
    }
    if (props.justifyContent) {
      switch (props.justifyContent) {
        case "center":
          cssClassesInner.push(styles['justify-content-center']);
          break;
        default:
          break;
      }
    }
    if (props.alignItems) {
      switch (props.alignItems) {
        case "center":
          cssClassesInner.push(styles['align-items-center']);
          break;
        default:
          break;
      }
    }
    if (props.size) {
      cssClassesInner.push(styles[`item-${props.size}`]);
    }
    setCssClasses(cssClassesInner);
  }, [props]);

  return <div className={cssClasses.join(" ")}>{props.children}</div>;
};

export default Container;