// @ts-nocheck
import React from "react";

const MARQUEE_CSS = `.marquee-container {
  overflow-x: hidden !important;
  display: flex !important;
  flex-direction: row !important;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.overlay::before, .overlay::after {
  background: linear-gradient(to right, var(--gradient-color));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
}
.overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.overlay::before {
  left: 0;
  top: 0;
}

.marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
}

.child {
  transform: var(--transform);
}`;

if (typeof window !== "undefined" && !document.getElementById("euphemia-marquee-css")) {
  const style = document.createElement("style");
  style.id = "euphemia-marquee-css";
  style.setAttribute("type", "text/css");
  style.innerHTML = MARQUEE_CSS;
  document.head.appendChild(style);
}

const Marquee = React.forwardRef(function Marquee(
  {
    style = {},
    className = "",
    autoFill = false,
    play = true,
    pauseOnHover = false,
    pauseOnClick = false,
    direction = "left",
    speed = 50,
    delay = 0,
    loop = 0,
    gradient = false,
    gradientColor = [255, 255, 255],
    gradientWidth = 200,
    onFinish,
    onCycleComplete,
    onMount,
    children
  }: any,
  ref: any
) {
  const [containerWidth, setContainerWidth] = React.useState(0);
  const [marqueeWidth, setMarqueeWidth] = React.useState(0);
  const [multiplier, setMultiplier] = React.useState(1);
  const [isMounted, setIsMounted] = React.useState(false);
  const rootRef = React.useRef<HTMLDivElement>(null);
  const containerRef = ref || rootRef;
  const marqueeRef = React.useRef<HTMLDivElement>(null);

  const calculateWidth = React.useCallback(() => {
    if (marqueeRef.current && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const marqueeRect = marqueeRef.current.getBoundingClientRect();
      let cWidth = containerRect.width;
      let mWidth = marqueeRect.width;

      if (direction === "up" || direction === "down") {
        cWidth = containerRect.height;
        mWidth = marqueeRect.height;
      }

      if (autoFill && cWidth && mWidth) {
        setMultiplier(mWidth < cWidth ? Math.ceil(cWidth / mWidth) : 1);
      } else {
        setMultiplier(1);
      }

      setContainerWidth(cWidth);
      setMarqueeWidth(mWidth);
    }
  }, [autoFill, containerRef, direction]);

  React.useEffect(() => {
    if (!isMounted) return;
    calculateWidth();
    if (marqueeRef.current && containerRef.current) {
      const resizeObserver = new ResizeObserver(() => calculateWidth());
      resizeObserver.observe(containerRef.current);
      resizeObserver.observe(marqueeRef.current);
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [calculateWidth, containerRef, isMounted]);

  React.useEffect(() => {
    calculateWidth();
  }, [calculateWidth, children]);

  React.useEffect(() => {
    setIsMounted(true);
    if (typeof onMount === "function") {
      onMount();
    }
  }, []);

  const duration = React.useMemo(() => {
    if (autoFill) {
      return (marqueeWidth * multiplier) / speed;
    }
    return marqueeWidth < containerWidth
      ? containerWidth / speed
      : marqueeWidth / speed;
  }, [autoFill, containerWidth, marqueeWidth, multiplier, speed]);

  const rgbaGradientColor = `rgba(${gradientColor[0]}, ${gradientColor[1]}, ${gradientColor[2]}`;

  const containerStyle = React.useMemo(
    () => ({
      ...style,
      ["--pause-on-hover"]: !play || pauseOnHover ? "paused" : "running",
      ["--pause-on-click"]:
        !play || (pauseOnHover && !pauseOnClick) || pauseOnClick
          ? "paused"
          : "running",
      ["--width"]: direction === "up" || direction === "down" ? "100vh" : "100%",
      ["--transform"]:
        direction === "up"
          ? "rotate(-90deg)"
          : direction === "down"
          ? "rotate(90deg)"
          : "none"
    }),
    [style, play, pauseOnHover, pauseOnClick, direction]
  );

  const gradientStyle = React.useMemo(
    () => ({
      ["--gradient-color"]: `${rgbaGradientColor}, 1), ${rgbaGradientColor}, 0)`,
      ["--gradient-width"]:
        typeof gradientWidth === "number" ? `${gradientWidth}px` : gradientWidth
    }),
    [rgbaGradientColor, gradientWidth]
  );

  const marqueeStyle = React.useMemo(
    () => ({
      ["--play"]: play ? "running" : "paused",
      ["--direction"]: direction === "left" ? "normal" : "reverse",
      ["--duration"]: `${duration || 20}s`,
      ["--delay"]: `${delay}s`,
      ["--iteration-count"]: loop ? `${loop}` : "infinite",
      ["--min-width"]: autoFill ? "auto" : "100%"
    }),
    [play, direction, duration, delay, loop, autoFill]
  );

  const childStyle = React.useMemo(
    () => ({
      ["--transform"]:
        direction === "up"
          ? "rotate(90deg)"
          : direction === "down"
          ? "rotate(-90deg)"
          : "none"
    }),
    [direction]
  );

  const multiplyChildren = React.useCallback(
    (mult: number) => {
      return [
        ...Array(Number.isFinite(mult) && mult >= 0 ? mult : 0)
      ].map((_, i) => (
        <React.Fragment key={i}>
          {React.Children.map(children, (child) => (
            <div style={childStyle} className="child">
              {child}
            </div>
          ))}
        </React.Fragment>
      ));
    },
    [childStyle, children]
  );

  if (!isMounted) return null;

  return (
    <div
      ref={containerRef}
      style={containerStyle}
      className={`marquee-container ${className}`.trim()}
    >
      {gradient && <div style={gradientStyle} className="overlay" />}
      <div
        className="marquee"
        style={marqueeStyle}
        onAnimationIteration={onCycleComplete}
        onAnimationEnd={onFinish}
      >
        <div className="initial-child-container" ref={marqueeRef}>
          {React.Children.map(children, (child) => (
            <div style={childStyle} className="child">
              {child}
            </div>
          ))}
        </div>
        {multiplyChildren(multiplier - 1)}
      </div>
      <div className="marquee" style={marqueeStyle}>
        {multiplyChildren(multiplier)}
      </div>
    </div>
  );
});

export default Marquee;
