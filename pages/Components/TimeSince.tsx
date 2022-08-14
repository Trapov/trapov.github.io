import { useState, createRef, MouseEvent, useEffect } from "react";
import styles from "./TimeSince.module.css";

const TimeSince = (props: { when: Date, emoji : string }) => {
  const [hover, setHover] = useState(false);
  const spanRef = createRef<HTMLSpanElement>();

  const moveHovered = (e: MouseEvent<HTMLSpanElement>) => {
    if (spanRef.current) {
      spanRef.current.style.marginLeft = +e.clientX - 500 + "px";
    }
  };

  const [date, setDate] = useState<number>(0)

  useEffect(() => setDate(new Date().valueOf()), [])
  const timeSince = () => {
    var obj: any = {};
    obj._milliseconds =  date - props.when?.valueOf() ?? 0;
    obj.milliseconds = obj._milliseconds % 1000;
    obj._seconds = (obj._milliseconds - obj.milliseconds) / 1000;
    obj.seconds = obj._seconds % 60;
    obj._minutes = (obj._seconds - obj.seconds) / 60;
    obj.minutes = obj._minutes % 60;
    obj._hours = (obj._minutes - obj.minutes) / 60;
    obj.hours = obj._hours % 24;
    obj._days = (obj._hours - obj.hours) / 24;
    obj.days = obj._days % 365;
    obj.years = (obj._days - obj.days) / 365;
    return `${obj.years}y ${obj.days}d ${obj.hours}h ${obj.minutes}m`;
  };
  return (
    <>
      {hover ? (
        <span ref={spanRef} className={styles['hover-on-top']}>
          {props.emoji + props.when.toLocaleString()}
        </span>
      ) : (
        <></>
      )}
      <span
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onMouseMove={moveHovered}
        className={styles['hover-to-show-the-date']}
      >
        {timeSince()}
      </span>
    </>
  );
};

export default TimeSince;
