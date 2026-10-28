// @ts-nocheck
import React, { useContext, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType } from "embla-carousel";
import { useInView } from "react-intersection-observer";
import { useStaticQuery, graphql } from "gatsby";
import { AppContext, type IAppContext } from "../context/AppContext";

const bp: Record<string, string> = {
  desktop: "1340px",
  giant: "2200px",
  largeDesktop: "1600px",
  largeMobile: "500px",
  largeTablet: "1025px",
  mobile: "400px",
  smallDesktop: "1260px",
  smallMobile: "340px",
  smallTablet: "660px",
  tablet: "769px"
};

const DISABLE_SCROLL_CLASS = "disableScroll-module--disableScroll--9ce78";

export const useApp = (): IAppContext => {
  return useContext(AppContext);
};

export const useDisableFocus = (
  focusDisabled: boolean,
  containerRef: React.MutableRefObject<HTMLDivElement | HTMLUListElement | null>
) => {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const focusableElementTypes = `button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])`;
    const focusableContentNodesList = container.querySelectorAll(
      focusableElementTypes
    ) as NodeListOf<any>;

    const focusableElements = Array.from(focusableContentNodesList).filter(
      (element) => !element.disabled && !element.hasAttribute(`disabled`)
    );

    if (focusDisabled) {
      focusableElements.forEach((element) => {
        element.setAttribute(`tabindex`, `-1`);
      });
    } else {
      focusableElements.forEach((element) => {
        element.removeAttribute(`tabindex`);
      });
    }
  }, [focusDisabled, containerRef]);
};

export const useAccordion = (options?: { openByDefault?: boolean }) => {
  const [contentHeight, setContentHeight] = useState(0);
  const [isExpanded, setIsExpanded] = useState(options?.openByDefault || false);
  const contentRef = useRef<HTMLDivElement>(null);

  const calculateContentHeight = () => {
    const height = contentRef.current?.offsetHeight || 0;
    setContentHeight(height);
  };

  useDisableFocus(!isExpanded, contentRef);

  useEffect(() => {
    setTimeout(() => {
      calculateContentHeight();
    }, 200);
    window.addEventListener("resize", calculateContentHeight);
    return () => window.removeEventListener("resize", calculateContentHeight);
  }, []);

  useEffect(() => {
    if (isExpanded) {
      calculateContentHeight();
    }
  }, [isExpanded]);

  const containerHeight = isExpanded ? contentHeight : 0;

  return {
    contentRef,
    containerHeight,
    isExpanded,
    setIsExpanded,
    calculateContentHeight
  };
};

export const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1440,
    height: typeof window !== "undefined" ? window.innerHeight : 900
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    window.addEventListener(`resize`, handleResize);
    handleResize();
    return () => window.removeEventListener(`resize`, handleResize);
  }, []);

  return { width: windowDimensions.width, height: windowDimensions.height };
};

export const useBreakpoints = () => {
  const { width } = useWindowDimensions();
  const bpArray = Object.keys(bp);
  const parseBpStringToInt = (bpStringWithPx: string) =>
    parseInt(bpStringWithPx.replace(`px`, ``));

  const [breakpoints, setBreakpoints] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    for (let i = 0; i < bpArray.length; i += 1) {
      initial[bpArray[i]] = width >= parseBpStringToInt(bp[bpArray[i]]);
    }
    return initial;
  });

  useEffect(() => {
    const updatedBreakpoints: Record<string, boolean> = {};
    for (let i = 0; i < bpArray.length; i += 1) {
      updatedBreakpoints[bpArray[i]] =
        width >= parseBpStringToInt(bp[bpArray[i]]);
    }
    setBreakpoints(updatedBreakpoints);
  }, [width]);

  return breakpoints;
};

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      `(prefers-color-scheme: dark)`
    );
    setDarkMode(darkModeMediaQuery.matches || false);
    darkModeMediaQuery.addEventListener(`change`, (e) => {
      setDarkMode(e.matches);
    });
  }, []);

  return darkMode;
};

export const useDisablePageScroll = (disableScroll: boolean) => {
  const [
    lastScrollYBeforeDisablingScroll,
    setLastScrollYBeforeDisablingScroll
  ] = useState(0);

  useEffect(() => {
    if (disableScroll) {
      const scrollY = document.documentElement.scrollTop;
      setLastScrollYBeforeDisablingScroll(scrollY);
      document.body.style.top = `-${scrollY}px`;
      document.body.classList.add(DISABLE_SCROLL_CLASS);
    } else {
      document.body.style.top = `initial`;
      document.body.classList.remove(DISABLE_SCROLL_CLASS);
      document.documentElement.scrollTop = lastScrollYBeforeDisablingScroll;
      document.body.scrollTop = lastScrollYBeforeDisablingScroll;
    }
  }, [disableScroll]);
};

export const useEmbla = (numberOfItems: number, options?: EmblaOptionsType) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const scrollNext = () =>
    setActiveSlideIndex((prev) => Math.min(prev + 1, numberOfItems - 1));
  const scrollPrev = () => setActiveSlideIndex((prev) => Math.max(prev - 1, 0));

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      const index = emblaApi.selectedScrollSnap();
      setActiveSlideIndex(index);
    };
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.scrollTo(activeSlideIndex);
  }, [activeSlideIndex, emblaApi]);

  useEffect(() => {
    if (activeSlideIndex > numberOfItems - 1) {
      setActiveSlideIndex(numberOfItems - 1);
    }
  }, [numberOfItems, activeSlideIndex]);

  return {
    emblaRef,
    activeSlideIndex,
    setActiveSlideIndex,
    scrollNext,
    scrollPrev
  };
};

export const useExternalScript = (src: string) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
};

export const useIntersectionAnimation = (margin = "90px") => {
  const { ref, inView } = useInView({
    rootMargin: margin
  });
  return { ref, inView };
};

export const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef(() => {});

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    if (delay !== null) {
      const interval = setInterval(() => savedCallback.current(), delay || 0);
      return () => clearInterval(interval);
    }
    return undefined;
  }, [delay]);
};

export const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(true);
  const lastScrollYRef = useRef(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener(`scroll`, handleScroll);
    handleScroll();
    return () => window.removeEventListener(`scroll`, handleScroll);
  }, []);

  useEffect(() => {
    setIsScrollingDown(scrollY > lastScrollYRef.current);
    lastScrollYRef.current = scrollY;
  }, [scrollY]);

  return { scrollY, isScrollingDown };
};

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            description
            title
            siteUrl
          }
        }
      }
    `
  );
  return site.siteMetadata;
};

export const useTrapFocus = (
  isVisible: boolean,
  containerRef: React.MutableRefObject<HTMLDivElement | null>,
  bypass?: boolean
) => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const focusableElementTypes = `button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])`;
    const focusableContentNodesList = container.querySelectorAll(
      focusableElementTypes
    ) as NodeListOf<any>;

    const focusableElements = Array.from(focusableContentNodesList).filter(
      (element) =>
        !element.disabled &&
        !element.hasAttribute(`disabled`) &&
        !element.classList.contains(`honeypot-input`)
    );

    const firstFocusableElement = focusableElements[0] as any;
    const lastFocusableElement = focusableElements[
      focusableElements.length - 1
    ] as any;

    if (e.key !== `Tab`) return;

    let isContainerElementFocused = false;
    focusableElements.forEach((element) => {
      if (element === document.activeElement) isContainerElementFocused = true;
    });

    if (e.shiftKey && document.activeElement === firstFocusableElement) {
      e.preventDefault();
      lastFocusableElement?.focus();
    } else if (!e.shiftKey && document.activeElement === lastFocusableElement) {
      e.preventDefault();
      firstFocusableElement?.focus();
    } else if (!isContainerElementFocused) {
      e.preventDefault();
      firstFocusableElement?.focus();
    }
  };

  useEffect(() => {
    if (isVisible && !bypass) {
      window.addEventListener(`keydown`, handleKeyDown);
    } else {
      window.removeEventListener(`keydown`, handleKeyDown);
    }
    return () => window.removeEventListener(`keydown`, handleKeyDown);
  }, [isVisible, bypass]);
};
