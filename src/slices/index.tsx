// @ts-nocheck
// src/slices/Hero/index.tsx
import { SlicePadding, IntersectionAnimation } from "~components";

// src/slices/Hero/styles.module.ts
var container = "styles-module--container--d272a";
var padding = "styles-module--padding--7eace";

// src/slices/Hero/components/BackgroundGraphic/styles.module.ts
var container2 = "styles-module--container--9d1d1";
var desktop = "styles-module--desktop--7bd1b";
var mobile = "styles-module--mobile--8188e";

// src/slices/Hero/components/BackgroundGraphic/index.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var HeroBackgroundGraphic = ({ color }) => {
  const colorStyle = {
    background: color
  };
  return /* @__PURE__ */ jsxs("div", { className: container2, children: [
    /* @__PURE__ */ jsx("div", { className: mobile, style: colorStyle }),
    /* @__PURE__ */ jsx("div", { className: mobile }),
    /* @__PURE__ */ jsx("div", { className: mobile }),
    /* @__PURE__ */ jsx("div", { className: mobile, style: colorStyle }),
    /* @__PURE__ */ jsx("div", { className: mobile, style: colorStyle }),
    /* @__PURE__ */ jsx("div", { className: mobile }),
    /* @__PURE__ */ jsx("div", { className: mobile }),
    /* @__PURE__ */ jsx("div", { className: mobile, style: colorStyle }),
    /* @__PURE__ */ jsx("div", { className: desktop, style: colorStyle }),
    /* @__PURE__ */ jsx("div", { className: desktop }),
    /* @__PURE__ */ jsx("div", { className: desktop, style: colorStyle }),
    /* @__PURE__ */ jsx("div", { className: desktop }),
    /* @__PURE__ */ jsx("div", { className: desktop }),
    /* @__PURE__ */ jsx("div", { className: desktop, style: colorStyle }),
    /* @__PURE__ */ jsx("div", { className: desktop }),
    /* @__PURE__ */ jsx("div", { className: desktop, style: colorStyle })
  ] });
};
var BackgroundGraphic_default = HeroBackgroundGraphic;

// src/slices/Hero/index.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var Hero = ({
  data: { title: title11, backgroundColor, graphicColor, textColor }
}) => {
  const colorStyles = {
    background: backgroundColor?.hex || `var(--color-white)`,
    color: textColor?.hex || `var(--color-black)`
  };
  return /* @__PURE__ */ jsxs2("div", { className: container, style: colorStyles, children: [
    /* @__PURE__ */ jsx2(
      BackgroundGraphic_default,
      {
        color: graphicColor?.hex || `var(--color-black)`
      }
    ),
    /* @__PURE__ */ jsx2(SlicePadding, { xOnly: true, className: padding, children: /* @__PURE__ */ jsx2(IntersectionAnimation, { children: /* @__PURE__ */ jsx2("h1", { className: "d2", children: title11 }) }) })
  ] });
};
var Hero_default = Hero;

// src/slices/TextArticle/index.tsx
import {
  SliceConfig,
  Grid,
  PortableTextRenderer,
  IntersectionAnimation as IntersectionAnimation2,
  Button,
  LinkTag
} from "~components";
import { useInView } from "react-intersection-observer";
import cn from "classnames";

// src/slices/TextArticle/styles.module.ts
var bottomMargin = "styles-module--bottomMargin--f3363";
var buttons = "styles-module--buttons--d4d8c";
var grid = "styles-module--grid--2e2d2";
var leftColumn = "styles-module--leftColumn--3bcbe";
var linkTags = "styles-module--linkTags--8d979";
var rightColumn = "styles-module--rightColumn--36563";

// src/slices/TextArticle/index.tsx
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var TextArticle = ({
  data: { _rawLeftColumn, _rawRightColumn, links: links2, tags, sliceConfig }
}) => {
  const { ref, inView } = useInView({
    rootMargin: `-90px`,
    triggerOnce: true
  });
  const hasBottomPadding = sliceConfig.slicePadding?.paddingBottom !== `none`;
  return /* @__PURE__ */ jsx3("div", { ref, children: /* @__PURE__ */ jsx3(SliceConfig, { config: sliceConfig, children: /* @__PURE__ */ jsxs3(
    Grid,
    {
      className: cn(grid, {
        [bottomMargin]: hasBottomPadding
      }),
      children: [
        _rawLeftColumn && /* @__PURE__ */ jsxs3("div", { className: leftColumn, children: [
          /* @__PURE__ */ jsx3(IntersectionAnimation2, { trigger: inView, children: /* @__PURE__ */ jsx3(
            PortableTextRenderer,
            {
              rawText: _rawLeftColumn,
              textElement: "h2"
            }
          ) }),
          tags?.[0] && /* @__PURE__ */ jsx3(IntersectionAnimation2, { delay: 150, className: linkTags, children: tags.map((tag, i) => /* @__PURE__ */ jsx3(
            LinkTag,
            {
              linkType: tag.linkType,
              hoverColor: tag.hoverColor,
              linkExternal: tag.linkExternal,
              linkInternal: tag.linkInternal
            },
            i
          )) })
        ] }),
        _rawRightColumn && /* @__PURE__ */ jsxs3("div", { className: rightColumn, children: [
          /* @__PURE__ */ jsx3(IntersectionAnimation2, { delay: 150, trigger: inView, children: /* @__PURE__ */ jsx3(
            PortableTextRenderer,
            {
              rawText: _rawRightColumn,
              textElement: "p"
            }
          ) }),
          links2?.[0] && /* @__PURE__ */ jsx3(IntersectionAnimation2, { delay: 300, className: buttons, children: links2?.map((link5, i) => {
            if (link5._type === `linkInternal`) {
              return /* @__PURE__ */ jsx3(
                IntersectionAnimation2,
                {
                  animation: "fadeGrow",
                  delay: 300 + 100 * i,
                  children: /* @__PURE__ */ jsx3(
                    Button,
                    {
                      to: `/${link5.reference.slug.current}`,
                      children: link5.title
                    },
                    i
                  )
                }
              );
            }
            if (link5._type === `linkExternal`) {
              return /* @__PURE__ */ jsx3(
                IntersectionAnimation2,
                {
                  animation: "fadeGrow",
                  delay: 300 + 100 * i,
                  children: /* @__PURE__ */ jsx3(Button, { href: link5.url, children: link5.title }, i)
                }
              );
            }
            return null;
          }) })
        ] })
      ]
    }
  ) }) });
};
var TextArticle_default = TextArticle;

// src/slices/FeaturedText/index.tsx
import {
  Button as Button2,
  SliceConfig as SliceConfig2,
  PortableTextRenderer as PortableTextRenderer2,
  IntersectionAnimation as IntersectionAnimation3
} from "~components";

// src/slices/FeaturedText/styles.module.ts
var content = "styles-module--content--2c0ed";
var links = "styles-module--links--79291";

// src/slices/FeaturedText/index.tsx
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
var FeaturedText = ({ data: { links: links2, _rawText, sliceConfig } }) => /* @__PURE__ */ jsx4(SliceConfig2, { config: sliceConfig, children: /* @__PURE__ */ jsxs4("div", { className: content, children: [
  /* @__PURE__ */ jsx4(IntersectionAnimation3, { children: /* @__PURE__ */ jsx4(PortableTextRenderer2, { rawText: _rawText }) }),
  links2?.[0] && /* @__PURE__ */ jsx4(IntersectionAnimation3, { delay: 150, children: /* @__PURE__ */ jsx4("div", { className: links, children: links2?.map((link5, i) => {
    if (link5._type === `linkInternal`) {
      return /* @__PURE__ */ jsx4(Button2, { to: `/${link5.reference?.slug.current}`, children: link5.title }, i);
    }
    if (link5._type === `linkExternal`) {
      return /* @__PURE__ */ jsx4(Button2, { href: link5.url, children: link5.title }, i);
    }
    return null;
  }) }) })
] }) });
var FeaturedText_default = FeaturedText;

// src/slices/SimpleImage/index.tsx
import { IntersectionAnimation as IntersectionAnimation4, SlicePadding as SlicePadding2 } from "~components";
import { GatsbyImage } from "gatsby-plugin-image";

// src/slices/SimpleImage/styles.module.ts
var captionContainer = "styles-module--captionContainer--5c1e1";
var container3 = "styles-module--container--7b681";

// src/slices/SimpleImage/index.tsx
import { useInView as useInView2 } from "react-intersection-observer";
import { jsx as jsx5, jsxs as jsxs5 } from "react/jsx-runtime";
var SimpleImage = ({ data: { image: image5, caption: caption2 } }) => {
  if (!image5) {
    return null;
  }
  const { ref, inView } = useInView2({
    rootMargin: `-90px`,
    triggerOnce: true
  });
  return /* @__PURE__ */ jsxs5("div", { className: container3, ref, children: [
    /* @__PURE__ */ jsx5(
      GatsbyImage,
      {
        style: { width: `100%` },
        alt: "",
        image: image5.asset.gatsbyImageData,
        objectFit: "contain"
      }
    ),
    caption2 && /* @__PURE__ */ jsx5(SlicePadding2, { xOnly: true, className: captionContainer, children: /* @__PURE__ */ jsx5(IntersectionAnimation4, { trigger: inView, delay: 200, animation: "fade", children: /* @__PURE__ */ jsx5("p", { className: "b2", children: caption2 }) }) })
  ] });
};
var SimpleImage_default = SimpleImage;

// src/slices/Video/index.tsx
import { useEffect, useRef, useState } from "react";
import { IntersectionAnimation as IntersectionAnimation5, SlicePadding as SlicePadding3, SVG } from "~components";

// src/slices/Video/styles.module.ts
var absoluteContent = "styles-module--absoluteContent--0f562";
var captionContainer2 = "styles-module--captionContainer--8e1cc";
var container4 = "styles-module--container--48249";
var hidden = "styles-module--hidden--4a82f";
var icon = "styles-module--icon--1699a";
var playPauseButton = "styles-module--playPauseButton--b825e";
var video = "styles-module--video--379c0";
var visible = "styles-module--visible--ac0bf";

// src/slices/Video/index.tsx
import cn2 from "classnames";
import { jsx as jsx6, jsxs as jsxs6 } from "react/jsx-runtime";
var Video = ({
  data: { videoURL, caption: caption2, placeholderImage, videoSource, videoFile }
}) => {
  const [hasVideoPlaybackBegun, setHasVideoPlaybackBegun] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const videoRef = useRef(null);
  const videoSrc = videoSource === `url` ? videoURL : videoFile?.asset.url;
  const handleClick = () => {
    setHasVideoPlaybackBegun(true);
    setIsVideoPlaying((prev) => !prev);
  };
  useEffect(() => {
    if (isVideoPlaying) {
      videoRef.current?.play();
      setIsAtEnd(false);
    } else {
      videoRef.current?.pause();
    }
  }, [isVideoPlaying]);
  const handleVideoEnd = () => {
    setIsVideoPlaying(false);
    setIsAtEnd(true);
  };
  useEffect(() => {
    videoRef.current?.addEventListener(`ended`, handleVideoEnd);
    return () => videoRef.current?.removeEventListener(`ended`, handleVideoEnd);
  }, [videoRef.current?.currentTime]);
  const buttonIcon = () => {
    if (isAtEnd) {
      return `reset`;
    }
    if (isVideoPlaying) {
      return `pauseCircle`;
    }
    return `playCircle`;
  };
  const poster = placeholderImage?.asset.url;
  const showControls = hasVideoPlaybackBegun && !isAtEnd;
  return /* @__PURE__ */ jsxs6(
    "div",
    {
      className: container4,
      style: { backgroundImage: poster ? `url(${poster})` : void 0 },
      children: [
        /* @__PURE__ */ jsx6(
          "video",
          {
            playsInline: true,
            onPause: () => setIsVideoPlaying(false),
            onPlay: () => setIsVideoPlaying(true),
            controls: showControls,
            className: cn2(video, {
              [visible]: hasVideoPlaybackBegun
            }),
            ref: videoRef,
            src: poster ? videoSrc : `${videoSrc}#t=0.1`
          }
        ),
        /* @__PURE__ */ jsxs6("div", { className: absoluteContent, children: [
          caption2 && /* @__PURE__ */ jsx6("div", { className: captionContainer2, children: /* @__PURE__ */ jsx6(SlicePadding3, { xOnly: true, children: /* @__PURE__ */ jsx6(IntersectionAnimation5, { children: /* @__PURE__ */ jsx6("p", { className: "b2", children: caption2 }) }) }) }),
          /* @__PURE__ */ jsx6(
            "button",
            {
              type: "button",
              onClick: handleClick,
              className: cn2(playPauseButton, {
                [hidden]: hasVideoPlaybackBegun && !isAtEnd
              }),
              children: /* @__PURE__ */ jsx6(SVG, { svg: buttonIcon(), className: icon })
            }
          )
        ] })
      ]
    }
  );
};
var Video_default = Video;

// src/slices/ImageGrid/index.tsx
import { SliceConfig as SliceConfig3, IntersectionAnimation as IntersectionAnimation6 } from "~components";

// src/slices/ImageGrid/styles.module.ts
var grid2 = "styles-module--grid--4d9db";
var image = "styles-module--image--f527c";

// src/slices/ImageGrid/index.tsx
import { GatsbyImage as GatsbyImage2 } from "gatsby-plugin-image";
import { jsx as jsx7 } from "react/jsx-runtime";
var ImageGrid = ({ data: { images, sliceConfig } }) => {
  if (!images?.[0]) {
    return null;
  }
  return /* @__PURE__ */ jsx7(IntersectionAnimation6, { children: /* @__PURE__ */ jsx7(SliceConfig3, { config: sliceConfig, children: /* @__PURE__ */ jsx7("div", { className: grid2, children: images.map((image5, i) => /* @__PURE__ */ jsx7(
    IntersectionAnimation6,
    {
      animation: "fadeGrow",
      delay: i * 100,
      className: image,
      children: /* @__PURE__ */ jsx7(
        GatsbyImage2,
        {
          style: { width: `100%`, height: `100%` },
          alt: "",
          image: image5.asset.gatsbyImageData
        }
      )
    },
    i
  )) }) }) });
};
var ImageGrid_default = ImageGrid;

// src/slices/HomepageAtf/index.tsx
import {
  Button as Button3,
  PortableTextRenderer as PortableTextRenderer3,
  SlicePadding as SlicePadding4,
  Grid as Grid2,
  IntersectionAnimation as IntersectionAnimation7
} from "~components";

// src/slices/HomepageAtf/styles.module.ts
var button = "styles-module--button--3c5f5";
var container5 = "styles-module--container--67838";
var textAndButton = "styles-module--textAndButton--bb79e";
var textAndButtonContent = "styles-module--textAndButtonContent--868e7";

// src/slices/HomepageAtf/index.tsx
import { useBreakpoints } from "~hooks";

// src/slices/HomepageAtf/components/Desktop/index.tsx
import { useEffect as useEffect2, useRef as useRef2, useState as useState2 } from "react";

// src/slices/HomepageAtf/components/Desktop/styles.module.ts
var absoluteContainer = "styles-module--absoluteContainer--80886";
var container6 = "styles-module--container--db51e";
var quadrantsDesktop = "styles-module--quadrantsDesktop--8b4ee";

// src/slices/HomepageAtf/components/Letters/1M/styles.module.ts
var active = "styles-module--active--72ea5";
var bottom = "styles-module--bottom--b4e35";
var col1 = "styles-module--col1--1ea89";
var col2 = "styles-module--col2--a95a8";
var col3 = "styles-module--col3--f92e0";
var col4 = "styles-module--col4--aaa5f";
var col5 = "styles-module--col5--7547a";
var container7 = "styles-module--container--f752b";
var top = "styles-module--top--9d26d";

// src/slices/HomepageAtf/components/Letters/1M/index.tsx
import cn3 from "classnames";
import { jsx as jsx8, jsxs as jsxs7 } from "react/jsx-runtime";
var AtfLetter1M = ({ active: active18 }) => {
  return /* @__PURE__ */ jsxs7("div", { className: cn3(container7, { [active]: active18 }), children: [
    /* @__PURE__ */ jsxs7("div", { className: top, children: [
      /* @__PURE__ */ jsx8("div", { className: col1 }),
      /* @__PURE__ */ jsx8("div", { className: col2 }),
      /* @__PURE__ */ jsx8("div", { className: col3 }),
      /* @__PURE__ */ jsx8("div", { className: col4 }),
      /* @__PURE__ */ jsx8("div", { className: col5 })
    ] }),
    /* @__PURE__ */ jsxs7("div", { className: bottom, children: [
      /* @__PURE__ */ jsx8("div", { className: col1 }),
      /* @__PURE__ */ jsx8("div", { className: col2 }),
      /* @__PURE__ */ jsx8("div", { className: col3 }),
      /* @__PURE__ */ jsx8("div", { className: col4 }),
      /* @__PURE__ */ jsx8("div", { className: col5 })
    ] })
  ] });
};
var M_default = AtfLetter1M;

// src/slices/HomepageAtf/components/Letters/2A/styles.module.ts
var active2 = "styles-module--active--b688c";
var bottom2 = "styles-module--bottom--e62b2";
var bottomBottom = "styles-module--bottomBottom--8d2ad";
var bottomTop = "styles-module--bottomTop--2fc92";
var col12 = "styles-module--col1--2507e";
var col22 = "styles-module--col2--9d4b6";
var col32 = "styles-module--col3--52ef2";
var container8 = "styles-module--container--7280a";
var top2 = "styles-module--top--ae708";
var topBottom = "styles-module--topBottom--72f71";
var topTop = "styles-module--topTop--00543";

// src/slices/HomepageAtf/components/Letters/2A/index.tsx
import cn4 from "classnames";
import { jsx as jsx9, jsxs as jsxs8 } from "react/jsx-runtime";
var AtfLetter2A = ({ active: active18 }) => {
  return /* @__PURE__ */ jsxs8("div", { className: cn4(container8, { [active2]: active18 }), children: [
    /* @__PURE__ */ jsxs8("div", { className: top2, children: [
      /* @__PURE__ */ jsxs8("div", { className: topTop, children: [
        /* @__PURE__ */ jsx9("div", { className: col12 }),
        /* @__PURE__ */ jsx9("div", { className: col22 }),
        /* @__PURE__ */ jsx9("div", { className: col32 })
      ] }),
      /* @__PURE__ */ jsxs8("div", { className: topBottom, children: [
        /* @__PURE__ */ jsx9("div", { className: col12 }),
        /* @__PURE__ */ jsx9("div", { className: col22 }),
        /* @__PURE__ */ jsx9("div", { className: col32 })
      ] })
    ] }),
    /* @__PURE__ */ jsxs8("div", { className: bottom2, children: [
      /* @__PURE__ */ jsxs8("div", { className: bottomTop, children: [
        /* @__PURE__ */ jsx9("div", { className: col12 }),
        /* @__PURE__ */ jsx9("div", { className: col22 }),
        /* @__PURE__ */ jsx9("div", { className: col32 })
      ] }),
      /* @__PURE__ */ jsxs8("div", { className: bottomBottom, children: [
        /* @__PURE__ */ jsx9("div", { className: col12 }),
        /* @__PURE__ */ jsx9("div", { className: col22 }),
        /* @__PURE__ */ jsx9("div", { className: col32 })
      ] })
    ] })
  ] });
};
var A_default = AtfLetter2A;

// src/slices/HomepageAtf/components/Letters/3K/styles.module.ts
var active3 = "styles-module--active--ba8f9";
var bottom3 = "styles-module--bottom--56743";
var bottomBottom2 = "styles-module--bottomBottom--5c243";
var bottomTop2 = "styles-module--bottomTop--24473";
var col13 = "styles-module--col1--e9601";
var col23 = "styles-module--col2--e963e";
var col33 = "styles-module--col3--0b646";
var container9 = "styles-module--container--bebc0";
var top3 = "styles-module--top--eb403";

// src/slices/HomepageAtf/components/Letters/3K/index.tsx
import cn5 from "classnames";
import { jsx as jsx10, jsxs as jsxs9 } from "react/jsx-runtime";
var AtfLetter3K = ({ active: active18 }) => {
  return /* @__PURE__ */ jsxs9("div", { className: cn5(container9, { [active3]: active18 }), children: [
    /* @__PURE__ */ jsxs9("div", { className: top3, children: [
      /* @__PURE__ */ jsx10("div", { className: col13 }),
      /* @__PURE__ */ jsx10("div", { className: col23 }),
      /* @__PURE__ */ jsx10("div", { className: col33 })
    ] }),
    /* @__PURE__ */ jsxs9("div", { className: bottom3, children: [
      /* @__PURE__ */ jsxs9("div", { className: bottomTop2, children: [
        /* @__PURE__ */ jsx10("div", { className: col13 }),
        /* @__PURE__ */ jsx10("div", { className: col23 }),
        /* @__PURE__ */ jsx10("div", { className: col33 })
      ] }),
      /* @__PURE__ */ jsxs9("div", { className: bottomBottom2, children: [
        /* @__PURE__ */ jsx10("div", { className: col13 }),
        /* @__PURE__ */ jsx10("div", { className: col23 }),
        /* @__PURE__ */ jsx10("div", { className: col33 })
      ] })
    ] })
  ] });
};
var K_default = AtfLetter3K;

// src/slices/HomepageAtf/components/Letters/4E/styles.module.ts
var active4 = "styles-module--active--8368f";
var container10 = "styles-module--container--0df90";
var left = "styles-module--left--9cce0";
var right = "styles-module--right--8f3e6";
var row1 = "styles-module--row1--2df11";
var row2 = "styles-module--row2--7fc01";
var row3 = "styles-module--row3--6639e";
var row4 = "styles-module--row4--ad12c";
var row5 = "styles-module--row5--26e44";

// src/slices/HomepageAtf/components/Letters/4E/index.tsx
import cn6 from "classnames";
import { jsx as jsx11, jsxs as jsxs10 } from "react/jsx-runtime";
var AtfLetter4E = ({ active: active18 }) => {
  return /* @__PURE__ */ jsxs10("div", { className: cn6(container10, { [active4]: active18 }), children: [
    /* @__PURE__ */ jsxs10("div", { className: left, children: [
      /* @__PURE__ */ jsx11("div", { className: row1 }),
      /* @__PURE__ */ jsx11("div", { className: row2 }),
      /* @__PURE__ */ jsx11("div", { className: row3 })
    ] }),
    /* @__PURE__ */ jsxs10("div", { className: right, children: [
      /* @__PURE__ */ jsx11("div", { className: row1 }),
      /* @__PURE__ */ jsx11("div", { className: row2 }),
      /* @__PURE__ */ jsx11("div", { className: row3 }),
      /* @__PURE__ */ jsx11("div", { className: row4 }),
      /* @__PURE__ */ jsx11("div", { className: row5 })
    ] })
  ] });
};
var E_default = AtfLetter4E;

// src/slices/HomepageAtf/components/Desktop/components/Quadrant/styles.module.ts
var active5 = "styles-module--active--e4df4";
var container11 = "styles-module--container--3af31";
var content2 = "styles-module--content--bbe70";
var contentContainer = "styles-module--contentContainer--ae290";
var enableAnimation = "styles-module--enableAnimation--1bbd8";
var leftColumn2 = "styles-module--leftColumn--52420";
var link = "styles-module--link--16b20";
var linkIcon = "styles-module--linkIcon--f9eda";
var quadrantPatternContainer = "styles-module--quadrantPatternContainer--0234d";
var subheading = "styles-module--subheading--859cf";

// src/slices/HomepageAtf/components/Desktop/components/Quadrant/index.tsx
import { GatsbyImage as GatsbyImage3 } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { SVG as SVG2 } from "~components";
import cn7 from "classnames";

// src/slices/HomepageAtf/components/Desktop/components/Quadrant/getQuadrantSizeStyles.ts
var getQuadrantSizeStyles = (quadrantNumber, quadrantContainerSize, expandedQuadrantSizeMultipler, activeQuadrant) => {
  const { height, width } = quadrantContainerSize;
  const smallRatio = 1 / (expandedQuadrantSizeMultipler + 1);
  const expandedRatio = 1 - smallRatio;
  switch (activeQuadrant) {
    case 0:
      return { height: height / 2, width: width / 2 };
    case 1:
      switch (quadrantNumber) {
        case 1:
          return {
            height: height * expandedRatio,
            width: width * expandedRatio
          };
        case 2:
          return {
            height: height * expandedRatio,
            width: width * smallRatio
          };
        case 3:
          return {
            height: height * smallRatio,
            width: width * expandedRatio
          };
        case 4:
          return {
            height: height * smallRatio,
            width: width * smallRatio
          };
        default:
          return { height: 0, width: 0 };
      }
    case 2:
      switch (quadrantNumber) {
        case 1:
          return {
            height: height * expandedRatio,
            width: width * smallRatio
          };
        case 2:
          return {
            height: height * expandedRatio,
            width: width * expandedRatio
          };
        case 3:
          return {
            height: height * smallRatio,
            width: width * smallRatio
          };
        case 4:
          return {
            height: height * smallRatio,
            width: width * expandedRatio
          };
        default:
          return { height: 0, width: 0 };
      }
    case 3:
      switch (quadrantNumber) {
        case 1:
          return {
            height: height * smallRatio,
            width: width * expandedRatio
          };
        case 2:
          return {
            height: height * smallRatio,
            width: width * smallRatio
          };
        case 3:
          return {
            height: height * expandedRatio,
            width: width * expandedRatio
          };
        case 4:
          return {
            height: height * expandedRatio,
            width: width * smallRatio
          };
        default:
          return { height: 0, width: 0 };
      }
    case 4:
      switch (quadrantNumber) {
        case 1:
          return {
            height: height * smallRatio,
            width: width * smallRatio
          };
        case 2:
          return {
            height: height * smallRatio,
            width: width * expandedRatio
          };
        case 3:
          return {
            height: height * expandedRatio,
            width: width * smallRatio
          };
        case 4:
          return {
            height: height * expandedRatio,
            width: width * expandedRatio
          };
        default:
          return { height: 0, width: 0 };
      }
    default:
      return { height: 0, width: 0 };
  }
};
var getQuadrantSizeStyles_default = getQuadrantSizeStyles;

// src/slices/HomepageAtf/components/Desktop/components/Quadrant/index.tsx
import { jsx as jsx12, jsxs as jsxs11 } from "react/jsx-runtime";
var Quadrant = ({
  number: number2,
  activeQuadrant,
  setActiveQuadrant,
  contentData,
  quadrantContentSize,
  quadrantContainerSize,
  expandedQuadrantSizeMultiplier,
  isAnimationEnabled,
  setIsAnimationEnabled
}) => {
  let QuadrantPattern;
  switch (number2) {
    case 1:
      QuadrantPattern = M_default;
      break;
    case 2:
      QuadrantPattern = A_default;
      break;
    case 3:
      QuadrantPattern = K_default;
      break;
    case 4:
      QuadrantPattern = E_default;
      break;
    default:
      QuadrantPattern = M_default;
  }
  const getQuadrantBackgroundColor = () => {
    switch (number2) {
      case 1:
        return `var(--color-light-pink)`;
      case 2:
        return `var(--color-gold)`;
      case 3:
        return `var(--color-beige)`;
      case 4:
        return `var(--color-construction-orange)`;
      default:
        return `var(--color-light-pink)`;
    }
  };
  const getQuadrantPosition = () => {
    switch (number2) {
      case 1:
        return { top: 0, left: 0 };
      case 2:
        return { top: 0, right: 0 };
      case 3:
        return { bottom: 0, left: 0 };
      case 4:
        return { bottom: 0, right: 0 };
      default:
        return null;
    }
  };
  const isActiveQuadrant = number2 === activeQuadrant;
  const title11 = contentData?.title;
  let category2 = ``;
  let image5;
  let link5;
  const isCaseStudy = (data) => {
    return data._type === "caseStudy";
  };
  if (isCaseStudy(contentData)) {
    category2 = "Case Study";
    image5 = contentData.linkTileImage;
    const linkData = {
      _key: contentData.slug.current,
      _type: `caseStudyReference`,
      caseStudy: {
        slug: {
          current: contentData.slug.current
        }
      }
    };
    link5 = linkData;
  } else {
    category2 = contentData.category;
    image5 = contentData.image;
    link5 = contentData.link[0];
  }
  const handleFocus = () => {
    setActiveQuadrant(number2);
  };
  const handleBlur = () => {
    setActiveQuadrant(0);
  };
  const handleMouseMove = () => {
    setIsAnimationEnabled(true);
    setActiveQuadrant(number2);
  };
  return /* @__PURE__ */ jsxs11(
    "div",
    {
      className: cn7(container11, {
        [enableAnimation]: isAnimationEnabled
      }),
      style: getQuadrantSizeStyles_default(
        number2,
        quadrantContainerSize,
        expandedQuadrantSizeMultiplier,
        activeQuadrant
      ),
      onMouseMove: handleMouseMove,
      children: [
        /* @__PURE__ */ jsx12(
          QuadrantLink,
          {
            handleBlur,
            handleFocus,
            link: link5,
            title: title11,
            children: /* @__PURE__ */ jsx12(
              "div",
              {
                className: contentContainer,
                style: {
                  background: getQuadrantBackgroundColor(),
                  height: `${quadrantContentSize.height}px`,
                  width: `${quadrantContentSize.width}px`,
                  ...getQuadrantPosition()
                },
                children: /* @__PURE__ */ jsxs11(
                  "div",
                  {
                    className: cn7(content2, {
                      [active5]: isActiveQuadrant
                    }),
                    children: [
                      /* @__PURE__ */ jsxs11("div", { className: leftColumn2, children: [
                        /* @__PURE__ */ jsxs11("div", { children: [
                          /* @__PURE__ */ jsx12("div", { className: cn7(`b1`, subheading), children: category2 }),
                          /* @__PURE__ */ jsx12("h3", { className: "h2", children: title11 })
                        ] }),
                        /* @__PURE__ */ jsx12(SVG2, { className: linkIcon, svg: "arrowRightCircle" })
                      ] }),
                      /* @__PURE__ */ jsx12("div", { children: image5 && /* @__PURE__ */ jsx12(
                        GatsbyImage3,
                        {
                          image: image5.asset.gatsbyImageData,
                          alt: image5.altText || ``,
                          style: { height: `50%` }
                        }
                      ) })
                    ]
                  }
                )
              }
            )
          }
        ),
        /* @__PURE__ */ jsx12("div", { className: quadrantPatternContainer, children: /* @__PURE__ */ jsx12(QuadrantPattern, { active: isActiveQuadrant }) })
      ]
    }
  );
};
var Quadrant_default = Quadrant;
var QuadrantLink = ({
  children,
  link: link5,
  handleBlur,
  handleFocus,
  title: title11
}) => {
  if (link5._type === "externalUrl") {
    return /* @__PURE__ */ jsx12(
      "a",
      {
        onBlur: handleBlur,
        onFocus: handleFocus,
        href: link5.url,
        className: link,
        target: "_blank",
        rel: "noreferrer noopener",
        "aria-label": `Go to link: ${title11}`,
        children
      }
    );
  }
  if (link5._type === `pageReference`) {
    return /* @__PURE__ */ jsx12(
      Link,
      {
        onBlur: handleBlur,
        onFocus: handleFocus,
        className: link,
        to: `/${link5.page.slug.current}`,
        "aria-label": `Go to page: ${title11}`,
        children
      }
    );
  }
  if (link5._type === `caseStudyReference`) {
    return /* @__PURE__ */ jsx12(
      Link,
      {
        onBlur: handleBlur,
        onFocus: handleFocus,
        className: link,
        to: `/awesome-stories/${link5.caseStudy.slug.current}`,
        "aria-label": `Go to case study: ${title11}`,
        children
      }
    );
  }
  return null;
};

// src/slices/HomepageAtf/components/Desktop/index.tsx
import { jsx as jsx13 } from "react/jsx-runtime";
var HomepageAtfDesktop = ({
  quadrant1,
  quadrant2,
  quadrant3,
  quadrant4
}) => {
  const [activeQuadrant, setActiveQuadrant] = useState2(0);
  const [quadrantContainerSize, setQuadrantContainerSize] = useState2({
    height: 0,
    width: 0
  });
  const [quadrantContentSize, setQuadrantContentSize] = useState2({
    height: 0,
    width: 0
  });
  const [isAnimationEnabled, setIsAnimationEnabled] = useState2(false);
  const QuadrantContainerRef = useRef2(null);
  const expandedQuadrantSizeMultipler = 4;
  const calculateSizes = () => {
    const getExpandedSize = (size) => {
      const numberOfSegments = expandedQuadrantSizeMultipler + 1;
      const percentageLengthPerSegment = 100 / numberOfSegments / 100;
      const expandedAreaPercentageLength = percentageLengthPerSegment * expandedQuadrantSizeMultipler;
      return size * expandedAreaPercentageLength;
    };
    const containerSizeInfo = QuadrantContainerRef.current?.getBoundingClientRect();
    if (!containerSizeInfo) return;
    const { width, height } = containerSizeInfo;
    setQuadrantContainerSize({
      height,
      width
    });
    setQuadrantContentSize({
      height: getExpandedSize(height) || 0,
      width: getExpandedSize(width) || 0
    });
  };
  const handleResize = () => {
    calculateSizes();
    setIsAnimationEnabled(false);
  };
  useEffect2(() => {
    calculateSizes();
    window.addEventListener(`resize`, handleResize);
    return () => window.removeEventListener(`resize`, handleResize);
  }, []);
  const quadrantDataArray = [quadrant1, quadrant2, quadrant3, quadrant4];
  return /* @__PURE__ */ jsx13("div", { className: container6, ref: QuadrantContainerRef, children: /* @__PURE__ */ jsx13("div", { className: absoluteContainer, children: /* @__PURE__ */ jsx13(
    "div",
    {
      className: quadrantsDesktop,
      onMouseLeave: () => setActiveQuadrant(0),
      children: quadrantDataArray.map((quadrantData, i) => /* @__PURE__ */ jsx13(
        Quadrant_default,
        {
          contentData: quadrantData,
          quadrantContentSize,
          number: i + 1,
          activeQuadrant,
          setActiveQuadrant,
          expandedQuadrantSizeMultiplier: expandedQuadrantSizeMultipler,
          quadrantContainerSize,
          isAnimationEnabled,
          setIsAnimationEnabled
        },
        i
      ))
    }
  ) }) });
};
var Desktop_default = HomepageAtfDesktop;

// src/slices/HomepageAtf/components/Mobile/index.tsx
import { useState as useState3 } from "react";

// src/slices/HomepageAtf/components/Mobile/styles.module.ts
var container12 = "styles-module--container--e3d41";

// src/slices/HomepageAtf/components/Mobile/index.tsx
import { SwiperCarousel } from "~components";

// src/slices/HomepageAtf/components/Mobile/components/Slide/styles.module.ts
var active6 = "styles-module--active--6e957";
var container13 = "styles-module--container--54ef2";
var image2 = "styles-module--image--6d4fb";
var letterGraphic = "styles-module--letterGraphic--b0c35";
var link2 = "styles-module--link--a5a90";
var linkIcon2 = "styles-module--linkIcon--7b735";
var mainContent = "styles-module--mainContent--28df7";
var subtitle = "styles-module--subtitle--5d41d";
var text = "styles-module--text--59ed8";
var textAndLink = "styles-module--textAndLink--b2123";
var title = "styles-module--title--483e7";

// src/slices/HomepageAtf/components/Mobile/components/Slide/index.tsx
import { GatsbyImage as GatsbyImage4 } from "gatsby-plugin-image";
import { SVG as SVG3 } from "~components";
import { Link as Link2 } from "gatsby";
import cn8 from "classnames";
import { jsx as jsx14, jsxs as jsxs12 } from "react/jsx-runtime";
var Slide = ({ contentData, slideIndex, activeIndex }) => {
  const title11 = contentData?.title;
  let category2 = ``;
  let image5;
  let link5;
  const isCaseStudy = (data) => {
    return data._type === "caseStudy";
  };
  if (isCaseStudy(contentData)) {
    category2 = "Case Study";
    image5 = contentData.linkTileImage;
    const linkData = {
      _key: contentData.slug.current,
      _type: `caseStudyReference`,
      caseStudy: {
        slug: {
          current: contentData.slug.current
        }
      }
    };
    link5 = linkData;
  } else {
    category2 = contentData.category;
    image5 = contentData.image;
    link5 = contentData.link[0];
  }
  const getSlideBackgroundColor = (index = slideIndex) => {
    switch (index) {
      case 0:
        return `var(--color-light-pink)`;
      case 1:
        return `var(--color-gold)`;
      case 2:
        return `var(--color-beige)`;
      case 3:
        return `var(--color-construction-orange)`;
      default:
        return `var(--color-light-pink)`;
    }
  };
  let LetterPattern;
  switch (slideIndex) {
    case 0:
      LetterPattern = M_default;
      break;
    case 1:
      LetterPattern = A_default;
      break;
    case 2:
      LetterPattern = K_default;
      break;
    case 3:
      LetterPattern = E_default;
      break;
    default:
      LetterPattern = M_default;
  }
  return /* @__PURE__ */ jsxs12(
    "div",
    {
      className: cn8(container13, {
        [active6]: activeIndex === slideIndex
      }),
      style: { background: getSlideBackgroundColor() },
      children: [
        /* @__PURE__ */ jsxs12("div", { className: mainContent, children: [
          /* @__PURE__ */ jsx14(
            GatsbyImage4,
            {
              className: image2,
              image: image5.asset.gatsbyImageData,
              alt: image5.altText || ``,
              style: { height: `40vh` }
            }
          ),
          /* @__PURE__ */ jsxs12("div", { className: textAndLink, children: [
            /* @__PURE__ */ jsxs12("div", { className: text, children: [
              /* @__PURE__ */ jsx14("div", { className: cn8(`b2`, subtitle), children: category2 }),
              /* @__PURE__ */ jsx14("h3", { className: cn8(`h2`, title), children: title11 })
            ] }),
            link5._type === "externalUrl" && /* @__PURE__ */ jsx14(
              "a",
              {
                className: link2,
                href: link5.url,
                target: "_blank",
                rel: "noreferrer noopener",
                children: /* @__PURE__ */ jsx14(SVG3, { className: linkIcon2, svg: "arrowRightCircle" })
              }
            ),
            link5._type === `caseStudyReference` && /* @__PURE__ */ jsx14(
              Link2,
              {
                className: link2,
                to: `/awesome-stories/${link5.caseStudy.slug.current}`,
                children: /* @__PURE__ */ jsx14(SVG3, { className: linkIcon2, svg: "arrowRightCircle" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx14(
          "div",
          {
            className: letterGraphic,
            style: { background: getSlideBackgroundColor() },
            children: /* @__PURE__ */ jsx14(LetterPattern, { active: activeIndex !== slideIndex })
          }
        )
      ]
    }
  );
};
var Slide_default = Slide;

// src/slices/HomepageAtf/components/Mobile/index.tsx
import { Fragment, jsx as jsx15, jsxs as jsxs13 } from "react/jsx-runtime";
var HomepageAtfMobile = ({
  quadrant1,
  quadrant2,
  quadrant3,
  quadrant4
}) => {
  const [activeIndex, setActiveIndex] = useState3(0);
  return /* @__PURE__ */ jsx15(Fragment, { children: /* @__PURE__ */ jsx15("div", { className: container12, children: /* @__PURE__ */ jsxs13(SwiperCarousel, { withTimer: true, setActiveIndex, children: [
    /* @__PURE__ */ jsx15(
      Slide_default,
      {
        contentData: quadrant1,
        slideIndex: 0,
        activeIndex
      }
    ),
    /* @__PURE__ */ jsx15(
      Slide_default,
      {
        contentData: quadrant2,
        slideIndex: 1,
        activeIndex
      }
    ),
    /* @__PURE__ */ jsx15(
      Slide_default,
      {
        contentData: quadrant3,
        slideIndex: 2,
        activeIndex
      }
    ),
    /* @__PURE__ */ jsx15(
      Slide_default,
      {
        contentData: quadrant4,
        slideIndex: 3,
        activeIndex
      }
    )
  ] }) }) });
};
var Mobile_default = HomepageAtfMobile;

// src/slices/HomepageAtf/index.tsx
import { jsx as jsx16, jsxs as jsxs14 } from "react/jsx-runtime";
var HomepageAtf = ({
  data: {
    _rawText,
    link: linkArray,
    quadrant1,
    quadrant2,
    quadrant3,
    quadrant4
  }
}) => {
  const link5 = linkArray[0];
  const { largeTablet } = useBreakpoints();
  return /* @__PURE__ */ jsxs14(Grid2, { className: container5, children: [
    !largeTablet && /* @__PURE__ */ jsx16(
      Mobile_default,
      {
        quadrant1,
        quadrant2,
        quadrant3,
        quadrant4
      }
    ),
    /* @__PURE__ */ jsx16(
      SlicePadding4,
      {
        config: {
          paddingBottom: `small`,
          paddingTop: `small`
        },
        className: textAndButton,
        children: /* @__PURE__ */ jsxs14("div", { className: textAndButtonContent, children: [
          /* @__PURE__ */ jsx16(IntersectionAnimation7, { trigger: true, children: /* @__PURE__ */ jsx16(PortableTextRenderer3, { textElement: "h1", rawText: _rawText }) }),
          /* @__PURE__ */ jsxs14(IntersectionAnimation7, { delay: 200, trigger: true, children: [
            link5._type === `linkExternal` && /* @__PURE__ */ jsx16(Button3, { className: button, href: link5.url, children: link5.title }),
            link5._type === `linkInternal` && /* @__PURE__ */ jsx16(
              Button3,
              {
                className: button,
                to: link5.reference.slug.current,
                children: link5.title
              }
            )
          ] })
        ] })
      }
    ),
    largeTablet && /* @__PURE__ */ jsx16(
      Desktop_default,
      {
        quadrant1,
        quadrant2,
        quadrant3,
        quadrant4
      }
    )
  ] });
};
var HomepageAtf_default = HomepageAtf;

// src/slices/LinkTiles/index.tsx
import { useState as useState5 } from "react";
import {
  IntersectionAnimation as IntersectionAnimation9,
  Button as Button4,
  SliceIntroText,
  SlicePadding as SlicePadding6
} from "~components";
import { useInView as useInView4 } from "react-intersection-observer";

// src/slices/LinkTiles/styles.module.ts
var linkTile = "styles-module--linkTile--53f94";
var linkTiles = "styles-module--linkTiles--95439";
var loadMoreButton = "styles-module--loadMoreButton--1fb4f";

// src/slices/LinkTiles/components/LinkTile/styles.module.ts
var blockGraphic = "styles-module--blockGraphic--4e361";
var bottomLeft = "styles-module--bottomLeft--b9ae8";
var bottomMiddle = "styles-module--bottomMiddle--bf803";
var bottomRight = "styles-module--bottomRight--9524c";
var content3 = "styles-module--content--29b8e";
var icon2 = "styles-module--icon--123c8";
var iconContainer = "styles-module--iconContainer--b09fb";
var image3 = "styles-module--image--af19e";
var imageContainer = "styles-module--imageContainer--7a9da";
var linkTile2 = "styles-module--linkTile--385a6";
var middleLeft = "styles-module--middleLeft--776be";
var middleRight = "styles-module--middleRight--3e27a";
var subheading2 = "styles-module--subheading--3a828";
var text2 = "styles-module--text--9c37b";
var topLeft = "styles-module--topLeft--9f2d1";

// src/slices/LinkTiles/components/LinkTile/index.tsx
import cn9 from "classnames";
import { SVG as SVG4 } from "~components";
import { GatsbyImage as GatsbyImage5 } from "gatsby-plugin-image";
import { Link as Link3 } from "gatsby";
import { jsx as jsx17, jsxs as jsxs15 } from "react/jsx-runtime";
var LinkTile = ({
  globalLink,
  caseStudy,
  backgroundColor,
  textColor,
  className
}) => {
  if (globalLink) {
    const { link: linkArray } = globalLink;
    const link5 = linkArray?.[0];
    if (!link5) return null;
    const { category: category2, image: image5, title: title11 } = globalLink;
    const Content = () => /* @__PURE__ */ jsx17(
      LinkTileContent,
      {
        backgroundColor,
        textColor,
        category: category2,
        image: image5,
        title: title11
      }
    );
    return /* @__PURE__ */ jsx17(
      "a",
      {
        className: cn9(className, linkTile2),
        href: link5.url,
        target: "_blank",
        rel: "noreferrer noopener",
        children: /* @__PURE__ */ jsx17(Content, {})
      }
    );
  }
  if (caseStudy) {
    const { slug, title: title11, linkTileImage } = caseStudy;
    return /* @__PURE__ */ jsx17(
      Link3,
      {
        to: `/awesome-stories/${slug.current}`,
        className: cn9(className, linkTile2),
        children: /* @__PURE__ */ jsx17(
          LinkTileContent,
          {
            backgroundColor,
            textColor,
            category: "Case Study",
            title: title11,
            image: { ...linkTileImage, altText: title11 }
          }
        )
      }
    );
  }
  return null;
};
var LinkTile_default = LinkTile;
var LinkTileContent = ({
  backgroundColor,
  textColor,
  image: image5,
  category: category2,
  title: title11
}) => {
  const backgroundStyle = {
    background: backgroundColor || `var(--color-black)`
  };
  return /* @__PURE__ */ jsxs15(
    "div",
    {
      className: content3,
      style: {
        background: backgroundColor || `var(--color-black)`,
        color: textColor || `var(--color-white)`
      },
      children: [
        /* @__PURE__ */ jsxs15("div", { className: text2, children: [
          /* @__PURE__ */ jsx17("div", { className: cn9(subheading2, `b2`), children: category2 }),
          /* @__PURE__ */ jsx17("h3", { className: "h3", children: title11 })
        ] }),
        /* @__PURE__ */ jsxs15("div", { className: imageContainer, children: [
          image5?.asset && /* @__PURE__ */ jsx17(
            GatsbyImage5,
            {
              alt: image5.altText || ``,
              image: image5.asset.gatsbyImageData,
              className: image3,
              style: { position: `absolute`, inset: 0 }
            }
          ),
          /* @__PURE__ */ jsx17("div", { className: iconContainer, style: backgroundStyle, children: /* @__PURE__ */ jsx17(SVG4, { svg: "arrowRightCircle", className: icon2 }) }),
          /* @__PURE__ */ jsx17(
            "div",
            {
              className: cn9(blockGraphic, topLeft),
              style: backgroundStyle
            }
          ),
          /* @__PURE__ */ jsx17(
            "div",
            {
              className: cn9(blockGraphic, middleLeft),
              style: backgroundStyle
            }
          ),
          /* @__PURE__ */ jsx17(
            "div",
            {
              className: cn9(blockGraphic, bottomLeft),
              style: backgroundStyle
            }
          ),
          /* @__PURE__ */ jsx17(
            "div",
            {
              className: cn9(blockGraphic, bottomMiddle),
              style: backgroundStyle
            }
          ),
          /* @__PURE__ */ jsx17(
            "div",
            {
              className: cn9(blockGraphic, bottomRight),
              style: backgroundStyle
            }
          ),
          /* @__PURE__ */ jsx17(
            "div",
            {
              className: cn9(blockGraphic, middleRight),
              style: backgroundStyle
            }
          )
        ] })
      ]
    }
  );
};

// src/slices/LinkTiles/index.tsx
import { doesRawTextHaveContent } from "~utils";
import { graphql, useStaticQuery } from "gatsby";

// src/slices/LinkTiles/components/HeaderAndFilter/styles.module.ts
var leftColumn3 = "styles-module--leftColumn--00d30";
var rightColumn2 = "styles-module--rightColumn--76a47";

// src/slices/LinkTiles/components/HeaderAndFilter/index.tsx
import {
  Grid as Grid3,
  IntersectionAnimation as IntersectionAnimation8,
  PortableTextRenderer as PortableTextRenderer4,
  SlicePadding as SlicePadding5
} from "~components";
import { useInView as useInView3 } from "react-intersection-observer";

// src/slices/LinkTiles/components/HeaderAndFilter/components/Filter/index.tsx
import { useEffect as useEffect3, useRef as useRef3, useState as useState4 } from "react";
import { SVG as SVG5 } from "~components";
import cn10 from "classnames";

// src/slices/LinkTiles/components/HeaderAndFilter/components/Filter/styles.module.ts
var active7 = "styles-module--active--70014";
var categoryButton = "styles-module--categoryButton--1b291";
var chevronIcon = "styles-module--chevronIcon--f403c";
var dropdown = "styles-module--dropdown--2b1ae";
var dropdownButton = "styles-module--dropdownButton--7581d";
var dropdownContainer = "styles-module--dropdownContainer--d1e72";
var dropdownContent = "styles-module--dropdownContent--67008";
var dropdownListItem = "styles-module--dropdownListItem--1fe81";
var filterLabel = "styles-module--filterLabel--97f58";
var selectedFilter = "styles-module--selectedFilter--65dc2";

// src/slices/LinkTiles/components/HeaderAndFilter/components/Filter/index.tsx
import { useDisableFocus } from "~hooks";
import { Fragment as Fragment2, jsx as jsx18, jsxs as jsxs16 } from "react/jsx-runtime";
var Filter = ({
  selectedCategory,
  categories,
  setSelectedCategory
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState4(false);
  const [dropdownContentHeight, setDropdownContentHeight] = useState4(0);
  const dropdownRef = useRef3(
    null
  );
  const calculateContentHeight = () => {
    const height = dropdownRef.current?.offsetHeight || 0;
    setDropdownContentHeight(height);
  };
  useEffect3(() => {
    calculateContentHeight();
    window.addEventListener(`resize`, calculateContentHeight);
    return () => window.removeEventListener(`resize`, calculateContentHeight);
  }, []);
  const handleClickFilterItem = (newActiveCategory) => {
    setIsFilterOpen(false);
    setSelectedCategory(newActiveCategory);
  };
  const totalNumberOfLinks = categories.reduce(
    (acc, category2) => acc + category2.tally,
    0
  );
  const selectedCategoryName = selectedCategory?.name || "All";
  const selectedCategoryTally = selectedCategory?.tally || totalNumberOfLinks;
  useDisableFocus(!isFilterOpen, dropdownRef);
  return /* @__PURE__ */ jsxs16(Fragment2, { children: [
    /* @__PURE__ */ jsxs16(
      "button",
      {
        className: dropdownButton,
        onClick: () => setIsFilterOpen((prev) => !prev),
        children: [
          /* @__PURE__ */ jsx18("div", { className: cn10(`button-text`, filterLabel), children: "Filter" }),
          /* @__PURE__ */ jsxs16("div", { className: selectedFilter, children: [
            /* @__PURE__ */ jsx18("span", { className: "button-text", children: `${selectedCategoryName} (${selectedCategoryTally})` }),
            /* @__PURE__ */ jsx18(
              SVG5,
              {
                svg: "chevronDown",
                className: cn10(chevronIcon, {
                  [active7]: isFilterOpen
                })
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx18("div", { className: dropdownContainer, children: /* @__PURE__ */ jsx18("div", { className: dropdown, children: /* @__PURE__ */ jsx18(
      "div",
      {
        className: dropdownContent,
        style: {
          height: `${isFilterOpen ? dropdownContentHeight : 0}px`
        },
        children: /* @__PURE__ */ jsxs16("ul", { ref: dropdownRef, children: [
          /* @__PURE__ */ jsx18("li", { className: dropdownListItem, children: /* @__PURE__ */ jsx18(
            "button",
            {
              className: categoryButton,
              onClick: () => handleClickFilterItem(null),
              children: "All"
            }
          ) }),
          categories.map((category2, i) => /* @__PURE__ */ jsx18("li", { className: dropdownListItem, children: /* @__PURE__ */ jsxs16(
            "button",
            {
              className: categoryButton,
              onClick: () => handleClickFilterItem(category2),
              children: [
                category2.name,
                ` `,
                "(",
                category2.tally,
                ")"
              ]
            }
          ) }, i))
        ] })
      }
    ) }) })
  ] });
};
var Filter_default = Filter;

// src/slices/LinkTiles/components/HeaderAndFilter/index.tsx
import { jsx as jsx19, jsxs as jsxs17 } from "react/jsx-runtime";
var HeaderAndFilter = ({
  _rawHeaderText,
  categories,
  selectedCategory,
  setSelectedCategory
}) => {
  const { ref, inView } = useInView3({
    rootMargin: `-90px`
  });
  return /* @__PURE__ */ jsx19("div", { ref, children: /* @__PURE__ */ jsx19(SlicePadding5, { children: /* @__PURE__ */ jsxs17(Grid3, { children: [
    _rawHeaderText && /* @__PURE__ */ jsx19("div", { className: leftColumn3, children: /* @__PURE__ */ jsx19(IntersectionAnimation8, { trigger: inView, animation: "fade", children: /* @__PURE__ */ jsx19(
      PortableTextRenderer4,
      {
        textElement: "h2",
        rawText: _rawHeaderText,
        className: "h1"
      }
    ) }) }),
    categories.length > 1 && /* @__PURE__ */ jsx19("div", { className: rightColumn2, children: /* @__PURE__ */ jsx19(
      IntersectionAnimation8,
      {
        trigger: inView,
        animation: "fade",
        delay: 150,
        children: /* @__PURE__ */ jsx19(
          Filter_default,
          {
            categories,
            selectedCategory,
            setSelectedCategory
          }
        )
      }
    ) })
  ] }) }) });
};
var HeaderAndFilter_default = HeaderAndFilter;

// src/slices/LinkTiles/index.tsx
import { useBreakpoints as useBreakpoints2 } from "~hooks";
import { Fragment as Fragment3, jsx as jsx20, jsxs as jsxs18 } from "react/jsx-runtime";
var LinkTiles = ({
  data: {
    variation,
    introText,
    _rawHeaderText,
    linkTiles: sanityLinkTiles,
    allCaseStudies: includeAllCaseStudies,
    allGlobalLinks: includeAllExternalLinks,
    showAllTilesByDefault
  }
}) => {
  const allTilesQuery = useStaticQuery(query);
  const allExternalLinks = allTilesQuery?.allSanityGlobalLink?.nodes || [];
  const allCaseStudies = allTilesQuery?.allSanityCaseStudy?.nodes;
  const getLinkTiles = () => {
    const linkTiles3 = [];
    if (includeAllCaseStudies) {
      linkTiles3.push(...allCaseStudies);
    }
    if (includeAllExternalLinks) {
      linkTiles3.push(...allExternalLinks);
    }
    if (!includeAllCaseStudies && !includeAllExternalLinks) {
      linkTiles3.push(...sanityLinkTiles);
    }
    const linkTilesWithCaseStudyCategory = linkTiles3.map((tile2) => {
      if (tile2._type === `caseStudy`) {
        return {
          ...tile2,
          category: `Case Study`
        };
      }
      return tile2;
    });
    return linkTilesWithCaseStudyCategory;
  };
  const { largeTablet } = useBreakpoints2();
  const minimumTiles = largeTablet ? 3 : 4;
  const linkTiles2 = getLinkTiles();
  const initialShowAllLinks = variation === `filter` || showAllTilesByDefault || linkTiles2.length <= minimumTiles;
  const [showAllTiles, setShowAllTiles] = useState5(initialShowAllLinks);
  const { ref, inView } = useInView4({
    rootMargin: `-90px`,
    triggerOnce: true
  });
  const hasRawTextContent = doesRawTextHaveContent(
    introText?._rawLeftColumn,
    introText?._rawRightColumn
  );
  const colorThemes = [
    {
      backgroundColor: `var(--color-dark-purple)`,
      textColor: `var(--color-white)`
    },
    {
      backgroundColor: `var(--color-forest-green)`,
      textColor: `var(--color-white)`
    },
    {
      backgroundColor: `var(--color-construction-orange)`,
      textColor: `var(--color-black)`
    },
    {
      backgroundColor: `var(--color-dark-blue)`,
      textColor: `var(--color-white)`
    },
    {
      backgroundColor: `var(--color-beige)`,
      textColor: `var(--color-black)`
    },
    {
      backgroundColor: `var(--color-gold)`,
      textColor: `var(--color-black)`
    }
  ];
  const getTileColors = (index) => {
    return colorThemes[index % colorThemes.length];
  };
  const categories = linkTiles2.map((tile2) => tile2.category);
  const categoriesWithTally = [];
  categories.forEach((category2) => {
    const categoryExists = categoriesWithTally.find(
      (item) => item.name === category2
    );
    if (categoryExists) {
      categoryExists.tally++;
    } else {
      categoriesWithTally.push({ name: category2, tally: 1 });
    }
  });
  const [selectedCategory, setSelectedCategory] = useState5(null);
  const filteredLinks = linkTiles2.filter((tile2) => {
    if (!selectedCategory) return true;
    return tile2.category === selectedCategory.name;
  });
  const visibleLinks = showAllTiles ? filteredLinks : filteredLinks.slice(0, minimumTiles);
  const transitionDelay = (index) => {
    if (variation === `text`) {
      if (initialShowAllLinks) {
        return 150 * index;
      }
      return showAllTiles ? 150 * (index - minimumTiles) : 150 * index;
    }
    if (variation === `filter`) {
      return 150 * index;
    }
    return 0;
  };
  return /* @__PURE__ */ jsxs18(Fragment3, { children: [
    variation === `text` && introText && /* @__PURE__ */ jsx20(SliceIntroText, { content: introText }),
    variation === `filter` && /* @__PURE__ */ jsx20(
      HeaderAndFilter_default,
      {
        _rawHeaderText,
        categories: categoriesWithTally,
        selectedCategory,
        setSelectedCategory
      }
    ),
    /* @__PURE__ */ jsx20("div", { ref, children: /* @__PURE__ */ jsxs18(
      SlicePadding6,
      {
        config: { paddingTop: hasRawTextContent ? `none` : `regular` },
        children: [
          /* @__PURE__ */ jsx20(
            "div",
            {
              className: linkTiles,
              children: visibleLinks.map((tile2, i) => {
                const { backgroundColor, textColor } = getTileColors(i);
                return /* @__PURE__ */ jsx20(
                  IntersectionAnimation9,
                  {
                    delay: transitionDelay(i),
                    animation: "fadeGrow",
                    trigger: inView,
                    className: linkTile,
                    children: /* @__PURE__ */ jsx20(
                      LinkTile_default,
                      {
                        caseStudy: tile2._type === "caseStudy" ? tile2 : void 0,
                        globalLink: tile2._type === "globalLink" ? tile2 : void 0,
                        backgroundColor,
                        textColor
                      }
                    )
                  },
                  tile2._id
                );
              })
            },
            selectedCategory?.name || `none`
          ),
          variation !== `filter` && !showAllTiles && /* @__PURE__ */ jsx20(
            Button4,
            {
              onClick: () => setShowAllTiles(true),
              className: loadMoreButton,
              iconRight: "plus",
              children: "Load More"
            }
          )
        ]
      }
    ) })
  ] });
};
var LinkTiles_default = LinkTiles;
var query = graphql`
  query AllLinkTilesQuery {
    allSanityGlobalLink(sort: { orderRank: ASC }) {
      nodes {
        ...GlobalLinkFragment
      }
    }
    allSanityCaseStudy(sort: { orderRank: ASC }) {
      nodes {
        ...CaseStudyLinkFragment
      }
    }
  }
`;

// src/slices/Advisors/index.tsx
import { useEffect as useEffect6, useState as useState8 } from "react";

// src/slices/Advisors/components/Mobile/components/Category/index.tsx
import { useEffect as useEffect4, useRef as useRef4, useState as useState6 } from "react";

// src/slices/Advisors/components/Mobile/components/Category/styles.module.ts
var advisorsContainer = "styles-module--advisorsContainer--156ae";
var noAdvisors = "styles-module--noAdvisors--ca371";

// src/slices/Advisors/components/Mobile/components/Category/components/CategoryButton/styles.module.ts
var active8 = "styles-module--active--f419f";
var container14 = "styles-module--container--91a68";
var content4 = "styles-module--content--3b770";
var graphic = "styles-module--graphic--3d073";
var plusIcon = "styles-module--plusIcon--c0618";

// src/slices/Advisors/components/Mobile/components/Category/components/CategoryButton/index.tsx
import { NetworkLetterGraphic, SVG as SVG6 } from "~components";
import { getAdvisorCategoryInfo } from "~utils";
import cn11 from "classnames";
import { jsx as jsx21, jsxs as jsxs19 } from "react/jsx-runtime";
var CategoryButton = ({ category: category2, active: active18, setActiveBlockIndex }) => {
  const { categoryPlural, graphic: graphic5, textColor, index } = getAdvisorCategoryInfo(category2);
  const handleClick = () => {
    setActiveBlockIndex((prev) => {
      if (prev === index) return null;
      return index;
    });
  };
  return /* @__PURE__ */ jsxs19(
    "button",
    {
      onClick: handleClick,
      className: cn11(container14, { [active8]: active18 }),
      children: [
        /* @__PURE__ */ jsx21(
          NetworkLetterGraphic,
          {
            graphic: graphic5,
            active: active18,
            className: graphic
          }
        ),
        /* @__PURE__ */ jsxs19("div", { className: content4, style: { color: textColor }, children: [
          /* @__PURE__ */ jsx21("h3", { className: cn11(`h2`), children: categoryPlural }),
          /* @__PURE__ */ jsx21(SVG6, { svg: "plusCircle", className: plusIcon })
        ] })
      ]
    }
  );
};
var CategoryButton_default = CategoryButton;

// src/slices/Advisors/components/Mobile/components/Category/index.tsx
import { getAdvisorCategoryInfo as getAdvisorCategoryInfo2 } from "~utils";

// src/slices/Advisors/components/Mobile/components/Category/components/Advisor/styles.module.ts
var bio = "styles-module--bio--27275";
var container15 = "styles-module--container--9c4b4";
var name = "styles-module--name--2ca4f";
var subcategory = "styles-module--subcategory--9c5f0";
var topRow = "styles-module--topRow--fc40b";

// src/slices/Advisors/components/Mobile/components/Category/components/Advisor/index.tsx
import cn12 from "classnames";
import { Button as Button5 } from "~components";
import { useApp } from "~hooks";
import { jsx as jsx22, jsxs as jsxs20 } from "react/jsx-runtime";
var Advisor = ({
  advisor: {
    category: category2,
    description: description4,
    name: name3,
    type,
    additionalResources,
    link: link5,
    subcategories,
    subheading1: subheading12,
    subheading2: subheading23,
    _id
  }
}) => {
  const { setToolbox, setIsToolboxOpen } = useApp();
  const addToList = () => {
    setToolbox((prev) => {
      const existingItem = prev.find((item) => item._id === _id);
      if (existingItem) {
        return prev;
      }
      const newItem = {
        _id,
        category: category2,
        description: description4,
        name: name3,
        type,
        additionalResources,
        link: link5,
        subcategories,
        subheading1: subheading12,
        subheading2: subheading23
      };
      return [...prev, newItem];
    });
    setIsToolboxOpen(true);
  };
  const getCaptions = () => {
    const caption12 = [subheading12, subheading23].filter(Boolean).join(", ");
    let caption22 = "";
    if (subcategories?.length) {
      caption22 = subcategories?.map((subcategory3) => subcategory3.title)?.join(", ");
    }
    return {
      caption1: caption12,
      caption2: caption22
    };
  };
  const { caption1, caption2 } = getCaptions();
  return /* @__PURE__ */ jsxs20("div", { className: container15, children: [
    /* @__PURE__ */ jsx22("div", { className: topRow, children: /* @__PURE__ */ jsxs20("div", { children: [
      /* @__PURE__ */ jsx22("h4", { className: cn12(`h4`, name), children: name3 }),
      caption1 && /* @__PURE__ */ jsx22("div", { className: cn12(`caption`), children: caption1 }),
      caption2 && /* @__PURE__ */ jsx22("div", { className: cn12(`caption`, subcategory), children: caption2 })
    ] }) }),
    /* @__PURE__ */ jsx22("p", { className: cn12(`b2`, bio), children: description4 }),
    /* @__PURE__ */ jsx22(Button5, { onClick: addToList, lightTheme: true, fluid: true, iconRight: "plus", children: "Add to Backpack" })
  ] });
};
var Advisor_default = Advisor;

// src/slices/Advisors/components/Mobile/components/Category/index.tsx
import cn14 from "classnames";
import { useApp as useApp3, useBreakpoints as useBreakpoints3 } from "~hooks";

// src/slices/Advisors/components/AdvisorLarge/styles.module.ts
var button2 = "styles-module--button--31921";
var container16 = "styles-module--container--0ded0";
var name2 = "styles-module--name--d96a3";
var plusIcon2 = "styles-module--plusIcon--6ffd3";
var subcategory2 = "styles-module--subcategory--3c482";
var text3 = "styles-module--text--785fb";
var topText = "styles-module--topText--1aab4";

// src/slices/Advisors/components/AdvisorLarge/index.tsx
import cn13 from "classnames";
import { SVG as SVG7 } from "~components";
import { useApp as useApp2 } from "~hooks";
import { jsx as jsx23, jsxs as jsxs21 } from "react/jsx-runtime";
var AdvisorLarge = ({
  advisor: {
    category: category2,
    description: description4,
    name: name3,
    type,
    additionalResources,
    link: link5,
    subcategories,
    subheading1: subheading12,
    subheading2: subheading23,
    _id
  }
}) => {
  const { setToolbox, setIsToolboxOpen } = useApp2();
  const addToList = () => {
    setToolbox((prev) => {
      const existingItem = prev.find((contact) => contact._id === _id);
      if (existingItem) {
        return prev;
      }
      const newItem = {
        _id,
        category: category2,
        description: description4,
        name: name3,
        type,
        additionalResources,
        link: link5,
        subcategories,
        subheading1: subheading12,
        subheading2: subheading23
      };
      return [...prev, newItem];
    });
    setIsToolboxOpen(true);
  };
  const getCaptions = () => {
    const caption12 = [subheading12, subheading23].filter(Boolean).join(", ");
    let caption22 = "";
    if (subcategories?.length) {
      caption22 = subcategories?.map((subcategory3) => subcategory3.title)?.join(", ");
    }
    return {
      caption1: caption12,
      caption2: caption22
    };
  };
  const { caption1, caption2 } = getCaptions();
  return /* @__PURE__ */ jsxs21("div", { className: container16, children: [
    /* @__PURE__ */ jsxs21("div", { className: text3, children: [
      /* @__PURE__ */ jsxs21("div", { className: topText, children: [
        /* @__PURE__ */ jsx23("h4", { className: cn13(`h4`, name2), children: name3 }),
        caption1 && /* @__PURE__ */ jsx23("div", { className: cn13(`caption`), children: caption1 }),
        caption2 && /* @__PURE__ */ jsx23("div", { className: cn13(`caption`, subcategory2), children: caption2 })
      ] }),
      /* @__PURE__ */ jsx23("p", { className: cn13(`b2`), children: description4 })
    ] }),
    /* @__PURE__ */ jsxs21(
      "button",
      {
        onClick: addToList,
        type: "button",
        className: cn13(`button-text`, button2),
        children: [
          "Add to Backpack",
          /* @__PURE__ */ jsx23(SVG7, { svg: "plus", className: plusIcon2 })
        ]
      }
    )
  ] });
};
var AdvisorLarge_default = AdvisorLarge;

// src/slices/Advisors/components/Mobile/components/Category/index.tsx
import { jsx as jsx24, jsxs as jsxs22 } from "react/jsx-runtime";
var Category = ({
  activeBlockIndex,
  category: category2,
  setActiveBlockIndex,
  advisors: advisors2
}) => {
  const [contentHeight, setContentHeight] = useState6(0);
  const contentRef = useRef4(null);
  const containerRef = useRef4(null);
  const { index } = getAdvisorCategoryInfo2(category2);
  const { tablet } = useBreakpoints3();
  const { setIsHeaderVisible } = useApp3();
  const isActive = activeBlockIndex === index;
  const calculateContentHeight = () => {
    setTimeout(() => {
      const height = contentRef.current?.offsetHeight || 0;
      setContentHeight(height);
    }, 100);
  };
  const scrollToTopOfContainer = () => {
    const node = containerRef.current;
    if (!node) return;
    setTimeout(() => {
      node.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }, 350);
    setTimeout(() => {
      setIsHeaderVisible(false);
    }, 1e3);
  };
  const AdvisorComponent = tablet ? AdvisorLarge_default : Advisor_default;
  useEffect4(() => {
    calculateContentHeight();
    window.addEventListener(`resize`, calculateContentHeight);
    return () => window.removeEventListener(`resize`, calculateContentHeight);
  }, []);
  useEffect4(() => {
    if (isActive) {
      scrollToTopOfContainer();
    }
  }, [isActive]);
  return /* @__PURE__ */ jsxs22("div", { ref: containerRef, children: [
    /* @__PURE__ */ jsx24(
      CategoryButton_default,
      {
        active: isActive,
        category: category2,
        setActiveBlockIndex
      }
    ),
    /* @__PURE__ */ jsx24(
      "div",
      {
        className: advisorsContainer,
        style: { height: isActive ? `${contentHeight}px` : 0 },
        children: /* @__PURE__ */ jsxs22("div", { ref: contentRef, children: [
          advisors2?.[0] && advisors2.map((advisor, i) => /* @__PURE__ */ jsx24(AdvisorComponent, { advisor }, i)),
          !advisors2?.[0] && /* @__PURE__ */ jsx24("p", { className: cn14(`h4`, noAdvisors), children: "No people in this category... yet" })
        ] })
      }
    )
  ] });
};
var Category_default = Category;

// src/slices/Advisors/components/Mobile/index.tsx
import { Fragment as Fragment4, jsx as jsx25 } from "react/jsx-runtime";
var Mobile = ({
  advisors: advisors2,
  activeBlockIndex,
  setActiveBlockIndex,
  categories
}) => {
  const getCategoryAdvisors = (category2) => {
    const categoryAdvisors = advisors2.filter(
      (advisor) => advisor.category.title === category2
    );
    return categoryAdvisors;
  };
  const categoryComponent = (category2) => /* @__PURE__ */ jsx25(
    Category_default,
    {
      category: category2,
      activeBlockIndex,
      setActiveBlockIndex,
      advisors: getCategoryAdvisors(category2)
    }
  );
  return /* @__PURE__ */ jsx25(Fragment4, { children: categories.map((category2, i) => /* @__PURE__ */ jsx25("div", { children: categoryComponent(category2) }, i)) });
};
var Mobile_default2 = Mobile;

// src/slices/Advisors/components/Desktop/index.tsx
import { useEffect as useEffect5, useRef as useRef6, useState as useState7 } from "react";

// src/slices/Advisors/components/Desktop/styles.module.ts
var active0 = "styles-module--active0--c6495";
var active1 = "styles-module--active1--8b788";
var active22 = "styles-module--active2--0ef86";
var active32 = "styles-module--active3--ad376";
var category = "styles-module--category--2b33b";
var container17 = "styles-module--container--c2407";

// src/slices/Advisors/components/Desktop/components/Category/index.tsx
import { useRef as useRef5 } from "react";

// src/slices/Advisors/components/Desktop/components/Category/styles.module.ts
var active9 = "styles-module--active--078e6";
var advisors = "styles-module--advisors--89506";
var advisorsContainer2 = "styles-module--advisorsContainer--4259c";
var backButton = "styles-module--backButton--f2845";
var backButtonIcon = "styles-module--backButtonIcon--54610";
var buttonContainer = "styles-module--buttonContainer--0d362";
var container18 = "styles-module--container--d1fa6";
var noAdvisors2 = "styles-module--noAdvisors--c8439";

// src/slices/Advisors/components/Desktop/components/Category/components/CategoryButton/styles.module.ts
var arrowIcon = "styles-module--arrowIcon--e04c8";
var back = "styles-module--back--7df5d";
var button3 = "styles-module--button--b6b80";
var content5 = "styles-module--content--8640a";
var graphic2 = "styles-module--graphic--4ef58";
var title2 = "styles-module--title--96e7d";
var visible2 = "styles-module--visible--993c7";

// src/slices/Advisors/components/Desktop/components/Category/components/CategoryButton/index.tsx
import { NetworkLetterGraphic as NetworkLetterGraphic2, SVG as SVG8 } from "~components";
import { getAdvisorCategoryInfo as getAdvisorCategoryInfo3 } from "~utils";
import cn15 from "classnames";
import { jsx as jsx26, jsxs as jsxs23 } from "react/jsx-runtime";
var CategoryButton2 = ({
  category: category2,
  active: active18,
  hovered,
  setActiveBlockIndex
}) => {
  const { categoryPlural, graphic: graphic5, textColor, index } = getAdvisorCategoryInfo3(category2);
  const handleClick = () => {
    setActiveBlockIndex((prev) => {
      if (prev === index) return null;
      return index;
    });
  };
  return /* @__PURE__ */ jsxs23("button", { onClick: handleClick, className: button3, type: "button", children: [
    /* @__PURE__ */ jsx26(
      NetworkLetterGraphic2,
      {
        active: active18 || hovered,
        graphic: graphic5,
        className: graphic2
      }
    ),
    /* @__PURE__ */ jsxs23("div", { className: content5, style: { color: textColor }, children: [
      /* @__PURE__ */ jsx26("h3", { className: cn15(`h2`, title2), children: categoryPlural }),
      /* @__PURE__ */ jsxs23("div", { className: cn15(back, { [visible2]: active18 }), children: [
        /* @__PURE__ */ jsx26(SVG8, { svg: "arrowLeft", className: arrowIcon }),
        /* @__PURE__ */ jsx26("span", { className: cn15(`button-text`), children: "Back" })
      ] })
    ] })
  ] });
};
var CategoryButton_default2 = CategoryButton2;

// src/slices/Advisors/components/Desktop/components/Category/index.tsx
import cn16 from "classnames";
import { getAdvisorCategoryInfo as getAdvisorCategoryInfo4 } from "~utils";
import { useDisableFocus as useDisableFocus2 } from "~hooks";
import { SVG as SVG9 } from "~components";
import { Fragment as Fragment5, jsx as jsx27, jsxs as jsxs24 } from "react/jsx-runtime";
var Category2 = ({
  activeBlockIndex,
  advisors: advisors2,
  category: category2,
  setActiveBlockIndex,
  containerWidth,
  hoveredBlockIndex,
  setHoveredBlockIndex
}) => {
  const { index } = getAdvisorCategoryInfo4(category2);
  const isActive = activeBlockIndex === index;
  const isHovered = hoveredBlockIndex === index;
  const containerRef = useRef5(null);
  useDisableFocus2(!isActive, containerRef);
  const handleMouseMove = () => {
    setHoveredBlockIndex(index);
  };
  const closeCategory = () => {
    setActiveBlockIndex(null);
  };
  return /* @__PURE__ */ jsxs24(
    "div",
    {
      className: cn16(container18, { [active9]: isActive }),
      onMouseMove: handleMouseMove,
      children: [
        /* @__PURE__ */ jsx27("div", { className: buttonContainer, children: /* @__PURE__ */ jsx27(
          CategoryButton_default2,
          {
            category: category2,
            setActiveBlockIndex,
            active: isActive,
            hovered: isHovered
          }
        ) }),
        /* @__PURE__ */ jsx27("div", { className: advisorsContainer2, ref: containerRef, children: /* @__PURE__ */ jsxs24(
          "div",
          {
            className: advisors,
            style: { width: `${containerWidth * 0.6}px` },
            children: [
              advisors2?.[0] && /* @__PURE__ */ jsxs24(Fragment5, { children: [
                advisors2.map((advisor, i) => /* @__PURE__ */ jsx27(AdvisorLarge_default, { advisor }, i)),
                /* @__PURE__ */ jsxs24(
                  "button",
                  {
                    onClick: closeCategory,
                    className: cn16("button-text", backButton),
                    children: [
                      /* @__PURE__ */ jsx27(SVG9, { svg: "arrowLeft", className: backButtonIcon }),
                      /* @__PURE__ */ jsx27("span", { children: "Back" })
                    ]
                  }
                )
              ] }),
              !advisors2?.[0] && /* @__PURE__ */ jsx27("p", { className: cn16(`h4`, noAdvisors2), children: "No people in this category... yet" })
            ]
          }
        ) })
      ]
    }
  );
};
var Category_default2 = Category2;

// src/slices/Advisors/components/Desktop/index.tsx
import cn17 from "classnames";
import { jsx as jsx28 } from "react/jsx-runtime";
var Desktop = ({
  advisors: advisors2,
  activeBlockIndex,
  setActiveBlockIndex,
  categories
}) => {
  const [containerWidth, setContainerWidth] = useState7(0);
  const [hoveredBlockIndex, setHoveredBlockIndex] = useState7(null);
  const containerRef = useRef6(null);
  const calculateContainerWidth = () => {
    if (!containerRef.current) return;
    setContainerWidth(containerRef.current.clientWidth);
  };
  useEffect5(() => {
    calculateContainerWidth();
    window.addEventListener(`resize`, calculateContainerWidth);
    return () => window.removeEventListener(`resize`, calculateContainerWidth);
  }, []);
  const getCategoryAdvisors = (category2) => {
    const categoryAdvisors = advisors2.filter(
      (advisor) => advisor.category.title === category2
    );
    return categoryAdvisors;
  };
  const categoryComponent = (category2) => /* @__PURE__ */ jsx28(
    Category_default2,
    {
      category: category2,
      activeBlockIndex,
      setActiveBlockIndex,
      advisors: getCategoryAdvisors(category2),
      containerWidth,
      hoveredBlockIndex,
      setHoveredBlockIndex
    }
  );
  const handleMouseLeave = () => {
    setHoveredBlockIndex(null);
  };
  return /* @__PURE__ */ jsx28(
    "div",
    {
      className: container17,
      ref: containerRef,
      onMouseLeave: handleMouseLeave,
      children: categories.map((category2, i) => /* @__PURE__ */ jsx28(
        "div",
        {
          className: cn17(category, {
            [active0]: activeBlockIndex === 0,
            [active1]: activeBlockIndex === 1,
            [active22]: activeBlockIndex === 2,
            [active32]: activeBlockIndex === 3
          }),
          children: categoryComponent(category2)
        },
        i
      ))
    }
  );
};
var Desktop_default2 = Desktop;

// src/slices/Advisors/index.tsx
import { graphql as graphql2, useStaticQuery as useStaticQuery2 } from "gatsby";

// src/slices/Advisors/styles.module.ts
var container19 = "styles-module--container--84f49";
var visible3 = "styles-module--visible--6c9a6";

// src/slices/Advisors/index.tsx
import { useBreakpoints as useBreakpoints4 } from "~hooks";
import cn18 from "classnames";
import { jsx as jsx29 } from "react/jsx-runtime";
var Advisors = () => {
  const [loaded, setLoaded] = useState8(false);
  const [activeBlockIndex, setActiveBlockIndex] = useState8(null);
  useEffect6(() => {
    setLoaded(true);
  }, []);
  const {
    allSanityToolboxResource: { nodes: advisors2 }
  } = useStaticQuery2(query2);
  const { desktop: desktop3 } = useBreakpoints4();
  const categories = [
    "Accountants",
    "Lawyers",
    "Advisory",
    "Peers"
  ];
  return /* @__PURE__ */ jsx29("div", { className: cn18(container19, { [visible3]: loaded }), children: desktop3 ? /* @__PURE__ */ jsx29(
    Desktop_default2,
    {
      advisors: advisors2,
      activeBlockIndex,
      setActiveBlockIndex,
      categories
    }
  ) : /* @__PURE__ */ jsx29(
    Mobile_default2,
    {
      advisors: advisors2,
      activeBlockIndex,
      setActiveBlockIndex,
      categories
    }
  ) });
};
var Advisors_default = Advisors;
var query2 = graphql2`
  query AdvisorQuery {
    allSanityToolboxResource(sort: { orderRank: ASC }) {
      nodes {
        ...ToolboxResourceFragment
      }
    }
  }
`;

// src/slices/NetworkPreview/index.tsx
import { useEffect as useEffect7, useState as useState9 } from "react";

// src/slices/NetworkPreview/styles.module.ts
var blockContainer = "styles-module--blockContainer--1c026";
var button4 = "styles-module--button--6d1a7";
var container20 = "styles-module--container--ee15a";
var header = "styles-module--header--7ff23";
var text4 = "styles-module--text--56199";
var textContainer = "styles-module--textContainer--a1629";

// src/slices/NetworkPreview/index.tsx
import {
  IntersectionAnimation as IntersectionAnimation10,
  PortableTextRenderer as PortableTextRenderer5,
  SlicePadding as SlicePadding7,
  UniversalLink
} from "~components";
import { useInView as useInView5 } from "react-intersection-observer";
import { useBreakpoints as useBreakpoints5, useInterval } from "~hooks";
import cn20 from "classnames";

// src/slices/NetworkPreview/components/NetworkBlock/styles.module.ts
var container21 = "styles-module--container--5203c";
var letterGraphic2 = "styles-module--letterGraphic--dd242";
var title3 = "styles-module--title--553f5";

// src/slices/NetworkPreview/components/NetworkBlock/index.tsx
import cn19 from "classnames";
import { NetworkLetterGraphic as NetworkLetterGraphic3 } from "~components";
import { jsx as jsx30, jsxs as jsxs25 } from "react/jsx-runtime";
var NetworkBlock = ({
  textColor,
  title: title11,
  index,
  letterGraphic: letterGraphic3,
  activeBlockIndex,
  setActiveBlockIndex,
  hasPassedBreakpoint
}) => {
  const handleMouseMove = () => {
    if (hasPassedBreakpoint && setActiveBlockIndex) {
      setActiveBlockIndex(index);
    }
  };
  return /* @__PURE__ */ jsxs25(
    "div",
    {
      className: container21,
      onMouseMove: handleMouseMove,
      style: {
        color: textColor || `var(--color-white)`
      },
      children: [
        /* @__PURE__ */ jsx30(
          NetworkLetterGraphic3,
          {
            className: letterGraphic2,
            graphic: letterGraphic3,
            active: activeBlockIndex === index
          }
        ),
        /* @__PURE__ */ jsx30("h4", { className: cn19(`h2`, title3), children: title11 })
      ]
    }
  );
};
var NetworkBlock_default = NetworkBlock;

// src/slices/NetworkPreview/index.tsx
import { jsx as jsx31, jsxs as jsxs26 } from "react/jsx-runtime";
var Preview = ({
  data: { _rawText, header: header5, universalLink: link5 }
}) => {
  const { ref, inView } = useInView5({
    rootMargin: `-90px`,
    triggerOnce: true
  });
  const blocks = [
    {
      textColor: `var(--color-black)`,
      title: `Accountants`,
      letterGraphic: `1A`
    },
    {
      textColor: `var(--color-white)`,
      title: `Lawyers`,
      letterGraphic: `2L`
    },
    {
      textColor: `var(--color-white)`,
      title: `Advisors`,
      letterGraphic: `3A`
    },
    {
      textColor: `var(--color-black)`,
      title: `Peers`,
      letterGraphic: `4P`
    }
  ];
  const [activeBlockIndex, setActiveBlockIndex] = useState9(null);
  const { largeTablet } = useBreakpoints5();
  useEffect7(() => {
    if (largeTablet) {
      setActiveBlockIndex(null);
    }
  }, [largeTablet]);
  const updateActiveBlock = () => {
    setActiveBlockIndex((prev) => {
      if (prev === null || prev === 3) {
        return 0;
      }
      return prev + 1;
    });
  };
  useInterval(updateActiveBlock, largeTablet ? null : 1e3);
  const handleMouseLeave = () => {
    if (largeTablet) {
      setActiveBlockIndex(null);
    }
  };
  return /* @__PURE__ */ jsxs26("div", { ref, className: container20, children: [
    /* @__PURE__ */ jsx31("div", { className: blockContainer, onMouseLeave: handleMouseLeave, children: blocks.map((block, i) => /* @__PURE__ */ jsx31(
      IntersectionAnimation10,
      {
        animation: "fadeGrow",
        trigger: inView,
        delay: largeTablet ? 100 + i * 100 : 400 + i * 100,
        children: /* @__PURE__ */ jsx31(
          NetworkBlock_default,
          {
            index: i,
            letterGraphic: block.letterGraphic,
            title: block.title,
            textColor: block.textColor,
            activeBlockIndex,
            setActiveBlockIndex,
            hasPassedBreakpoint: largeTablet
          }
        )
      },
      i
    )) }),
    /* @__PURE__ */ jsxs26(SlicePadding7, { className: textContainer, children: [
      /* @__PURE__ */ jsx31(IntersectionAnimation10, { delay: largeTablet ? 600 : 100, trigger: inView, children: /* @__PURE__ */ jsx31("h2", { className: cn20(`h1`, header), children: header5 }) }),
      /* @__PURE__ */ jsxs26(IntersectionAnimation10, { delay: largeTablet ? 750 : 250, trigger: inView, children: [
        /* @__PURE__ */ jsx31(
          PortableTextRenderer5,
          {
            textElement: "p",
            className: cn20(`b1`, text4),
            rawText: _rawText
          }
        ),
        link5?.link[0] && /* @__PURE__ */ jsx31(
          UniversalLink,
          {
            iconRight: "arrowRight",
            text: link5.text,
            link: link5.link,
            className: button4
          }
        )
      ] })
    ] })
  ] });
};
var NetworkPreview_default = Preview;

// src/slices/FounderProfiles/components/Desktop/index.tsx
import { useEffect as useEffect8, useRef as useRef7, useState as useState10 } from "react";

// src/slices/FounderProfiles/components/Desktop/components/ProfileBlock/styles.module.ts
var container22 = "styles-module--container--51348";
var imageAndTitles = "styles-module--imageAndTitles--9adbc";

// src/slices/FounderProfiles/components/Desktop/components/ProfileBlock/index.tsx
import { GatsbyImage as GatsbyImage6 } from "gatsby-plugin-image";

// src/slices/FounderProfiles/components/Desktop/components/ProfileBlock/components/OverlayGraphic/styles.module.ts
var container23 = "styles-module--container--1d3af";
var hideText = "styles-module--hideText--154c0";
var position = "styles-module--position--ded2f";
var rightSide = "styles-module--rightSide--e691b";
var textContent = "styles-module--textContent--475ac";
var textPadding = "styles-module--textPadding--660a1";
var variant1 = "styles-module--variant1--ae400";
var variant2 = "styles-module--variant2--0ec7f";

// src/slices/FounderProfiles/components/Desktop/components/ProfileBlock/components/OverlayGraphic/index.tsx
import { IntersectionAnimation as IntersectionAnimation11 } from "~components";
import cn21 from "classnames";
import { SlicePadding as SlicePadding8 } from "~components";
import { Fragment as Fragment6, jsx as jsx32, jsxs as jsxs27 } from "react/jsx-runtime";
var OverlayGraphic = ({
  color,
  variant,
  name: name3,
  position: position3,
  hideText: hideText2
}) => {
  const backgroundStyle = { backgroundColor: color };
  return /* @__PURE__ */ jsxs27(
    "div",
    {
      className: cn21(container23, {
        [variant1]: variant === 1,
        [variant2]: variant === 2
      }),
      children: [
        variant === 1 && /* @__PURE__ */ jsxs27(Fragment6, { children: [
          /* @__PURE__ */ jsx32("div", { style: backgroundStyle }),
          /* @__PURE__ */ jsx32("div", { style: backgroundStyle }),
          /* @__PURE__ */ jsx32("div", {}),
          /* @__PURE__ */ jsx32("div", { style: backgroundStyle }),
          /* @__PURE__ */ jsx32("div", {}),
          /* @__PURE__ */ jsx32("div", { style: backgroundStyle }),
          /* @__PURE__ */ jsx32("div", { style: backgroundStyle, className: textContent, children: /* @__PURE__ */ jsx32(TextContent, { name: name3, position: position3, hideText: hideText2 }) })
        ] }),
        variant === 2 && /* @__PURE__ */ jsxs27(Fragment6, { children: [
          /* @__PURE__ */ jsx32("div", {}),
          /* @__PURE__ */ jsx32("div", { style: backgroundStyle }),
          /* @__PURE__ */ jsx32("div", { style: backgroundStyle, className: textContent, children: /* @__PURE__ */ jsx32(
            TextContent,
            {
              name: name3,
              position: position3,
              rightSide: true,
              hideText: hideText2
            }
          ) })
        ] })
      ]
    }
  );
};
var OverlayGraphic_default = OverlayGraphic;
var TextContent = ({ name: name3, position: position3, rightSide: rightSide2, hideText: hideText2 }) => {
  return /* @__PURE__ */ jsxs27(
    SlicePadding8,
    {
      xOnly: true,
      className: cn21(textPadding, {
        [rightSide]: rightSide2,
        [hideText]: hideText2
      }),
      children: [
        /* @__PURE__ */ jsx32(IntersectionAnimation11, { delay: 150, children: /* @__PURE__ */ jsx32("div", { className: cn21(`b2`, position), children: position3 }) }),
        /* @__PURE__ */ jsx32(IntersectionAnimation11, { delay: 300, children: /* @__PURE__ */ jsx32("h3", { className: "h2", children: name3 }) })
      ]
    }
  );
};

// src/slices/FounderProfiles/components/Desktop/components/ProfileBlock/index.tsx
import cn22 from "classnames";
import { jsx as jsx33, jsxs as jsxs28 } from "react/jsx-runtime";
var ProfileBlock = ({
  headshot,
  name: name3,
  position: position3,
  backgroundColor,
  textColor,
  variant,
  className,
  activeProfile
}) => {
  return /* @__PURE__ */ jsx33(
    "div",
    {
      className: cn22(container22, className),
      style: {
        background: backgroundColor?.hex || `var(--color-black)`,
        color: textColor?.hex || `var(--color-white)`
      },
      children: /* @__PURE__ */ jsxs28("div", { className: imageAndTitles, children: [
        /* @__PURE__ */ jsx33(
          GatsbyImage6,
          {
            image: headshot.asset.gatsbyImageData,
            alt: headshot.altText || ``,
            style: { width: `100%`, height: `100%` }
          }
        ),
        /* @__PURE__ */ jsx33(
          OverlayGraphic_default,
          {
            variant,
            name: name3,
            position: position3,
            color: backgroundColor?.hex || `black`,
            hideText: activeProfile !== null && activeProfile !== variant
          }
        )
      ] })
    }
  );
};
var ProfileBlock_default = ProfileBlock;

// src/slices/FounderProfiles/components/Desktop/styles.module.ts
var active10 = "styles-module--active--8b1b2";
var bottomContent = "styles-module--bottomContent--19982";
var bottomContentContainer = "styles-module--bottomContentContainer--84c14";
var profile = "styles-module--profile--fbcf3";
var showRight = "styles-module--showRight--0264a";
var topProfiles = "styles-module--topProfiles--29907";

// src/slices/FounderProfiles/components/Desktop/index.tsx
import cn25 from "classnames";

// src/slices/FounderProfiles/components/Desktop/components/BottomContent/styles.module.ts
var bio2 = "styles-module--bio--db877";
var content6 = "styles-module--content--77bd8";
var linkList = "styles-module--linkList--4a30b";

// src/slices/FounderProfiles/components/Desktop/components/BottomContent/index.tsx
import { PortableTextRenderer as PortableTextRenderer6, SlicePadding as SlicePadding10 } from "~components";

// src/slices/FounderProfiles/components/FounderLink/styles.module.ts
var caption = "styles-module--caption--de77d";
var link3 = "styles-module--link--fdb6d";
var linkContent = "styles-module--linkContent--e6841";
var linkIcon3 = "styles-module--linkIcon--e104f";

// src/slices/FounderProfiles/components/FounderLink/index.tsx
import { SVG as SVG10, SlicePadding as SlicePadding9 } from "~components";
import cn23 from "classnames";
import { useBreakpoints as useBreakpoints6 } from "~hooks";
import { jsx as jsx34, jsxs as jsxs29 } from "react/jsx-runtime";
var FounderLink = ({ caption: caption2, title: title11, url, isVisible }) => {
  const { largeTablet } = useBreakpoints6();
  return /* @__PURE__ */ jsx34(
    "a",
    {
      tabIndex: isVisible ? 0 : -1,
      href: url,
      rel: "noopener noreferrer",
      target: "_blank",
      className: link3,
      children: /* @__PURE__ */ jsxs29(SlicePadding9, { xOnly: true, className: linkContent, children: [
        /* @__PURE__ */ jsxs29("div", { children: [
          /* @__PURE__ */ jsx34("div", { className: cn23(`caption`, caption), children: caption2 }),
          /* @__PURE__ */ jsx34("span", { className: largeTablet ? `h4` : `b2`, children: title11 })
        ] }),
        /* @__PURE__ */ jsx34(SVG10, { svg: "arrowRightCircle", className: linkIcon3 })
      ] })
    }
  );
};
var FounderLink_default = FounderLink;

// src/slices/FounderProfiles/components/Desktop/components/BottomContent/index.tsx
import cn24 from "classnames";
import { jsx as jsx35, jsxs as jsxs30 } from "react/jsx-runtime";
var BottomContent = ({ profile: profile2, innerRef, active: active18 }) => {
  return /* @__PURE__ */ jsx35(
    "div",
    {
      className: content6,
      style: {
        background: profile2.backgroundColor?.hex || `var(--color-white)`,
        color: profile2.textColor?.hex || `var(--color-black)`
      },
      children: /* @__PURE__ */ jsxs30("div", { ref: innerRef, children: [
        /* @__PURE__ */ jsx35(SlicePadding10, { config: { paddingBottom: `small`, paddingTop: `small` }, children: /* @__PURE__ */ jsx35(
          PortableTextRenderer6,
          {
            className: cn24(`b1`, bio2),
            rawText: profile2._rawBio,
            textElement: "p"
          }
        ) }),
        profile2.links?.[0] && /* @__PURE__ */ jsx35("ul", { className: linkList, children: profile2.links.map((link5, i) => /* @__PURE__ */ jsx35("li", { children: /* @__PURE__ */ jsx35(FounderLink_default, { ...link5, isVisible: active18 }) }, i)) })
      ] })
    }
  );
};
var BottomContent_default = BottomContent;

// src/slices/FounderProfiles/components/Desktop/index.tsx
import { Fragment as Fragment7, jsx as jsx36, jsxs as jsxs31 } from "react/jsx-runtime";
var FounderProfilesDesktop = ({ profile1, profile2 }) => {
  const [activeProfile, setActiveProfile] = useState10(null);
  const [mostRecentActiveProfile, setMostRecentActiveProfile] = useState10(1);
  const [profile1BottomHeight, setProfile1BottomHeight] = useState10(0);
  const [profile2BottomHeight, setProfile2BottomHeight] = useState10(0);
  const profile1BottomRef = useRef7(null);
  const profile2BottomRef = useRef7(null);
  const calculateContentHeight = () => {
    const profile1Height = profile1BottomRef.current?.offsetHeight || 0;
    const profile2Height = profile2BottomRef.current?.offsetHeight || 0;
    setProfile1BottomHeight(profile1Height);
    setProfile2BottomHeight(profile2Height);
  };
  useEffect8(() => {
    calculateContentHeight();
    window.addEventListener(`resize`, calculateContentHeight);
    return () => window.removeEventListener(`resize`, calculateContentHeight);
  }, []);
  useEffect8(() => {
    calculateContentHeight();
  }, [activeProfile]);
  const bottomContentHeight = () => {
    switch (activeProfile) {
      case null:
        return 0;
      case 1:
        return profile1BottomHeight;
      case 2:
        return profile2BottomHeight;
      default:
        return 0;
    }
  };
  const handleClick = (profile3) => {
    if (profile3 === activeProfile) {
      setActiveProfile(null);
      return;
    }
    setActiveProfile(profile3);
  };
  useEffect8(() => {
    if (activeProfile) {
      setMostRecentActiveProfile(activeProfile);
    }
  }, [activeProfile]);
  return /* @__PURE__ */ jsxs31(Fragment7, { children: [
    /* @__PURE__ */ jsxs31("div", { className: topProfiles, children: [
      /* @__PURE__ */ jsx36(
        "button",
        {
          onClick: () => handleClick(1),
          className: cn25(profile, {
            [active10]: activeProfile === 1
          }),
          children: /* @__PURE__ */ jsx36(
            ProfileBlock_default,
            {
              ...profile1,
              variant: 1,
              activeProfile
            }
          )
        }
      ),
      /* @__PURE__ */ jsx36(
        "button",
        {
          onClick: () => handleClick(2),
          className: cn25(profile, {
            [active10]: activeProfile === 2
          }),
          children: /* @__PURE__ */ jsx36(
            ProfileBlock_default,
            {
              ...profile2,
              variant: 2,
              activeProfile
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ jsx36(
      "div",
      {
        className: bottomContentContainer,
        style: { height: bottomContentHeight() },
        children: /* @__PURE__ */ jsxs31(
          "div",
          {
            className: cn25(bottomContent, {
              [showRight]: mostRecentActiveProfile === 2
            }),
            children: [
              /* @__PURE__ */ jsx36(
                BottomContent_default,
                {
                  active: activeProfile === 1,
                  innerRef: profile1BottomRef,
                  profile: profile1
                }
              ),
              /* @__PURE__ */ jsx36(
                BottomContent_default,
                {
                  active: activeProfile === 2,
                  innerRef: profile2BottomRef,
                  profile: profile2
                }
              )
            ]
          }
        )
      }
    )
  ] });
};
var Desktop_default3 = FounderProfilesDesktop;

// src/slices/FounderProfiles/components/Mobile/components/ProfileBlock/styles.module.ts
var imageAndTitles2 = "styles-module--imageAndTitles--67a64";

// src/slices/FounderProfiles/components/Mobile/components/ProfileBlock/index.tsx
import { GatsbyImage as GatsbyImage7 } from "gatsby-plugin-image";
import {
  PortableTextRenderer as PortableTextRenderer7,
  SlicePadding as SlicePadding13,
  IntersectionAnimation as IntersectionAnimation13
} from "~components";

// src/slices/FounderProfiles/components/Mobile/components/OverlayGraphic/styles.module.ts
var container24 = "styles-module--container--5d74b";
var position2 = "styles-module--position--51551";
var textContent2 = "styles-module--textContent--54a03";
var textPadding2 = "styles-module--textPadding--09663";
var variant12 = "styles-module--variant1--0497f";
var variant22 = "styles-module--variant2--f4ec3";

// src/slices/FounderProfiles/components/Mobile/components/OverlayGraphic/index.tsx
import { IntersectionAnimation as IntersectionAnimation12 } from "~components";
import cn26 from "classnames";
import { SlicePadding as SlicePadding11 } from "~components";
import { Fragment as Fragment8, jsx as jsx37, jsxs as jsxs32 } from "react/jsx-runtime";
var TextContent2 = ({ name: name3, position: position3, triggerAnimation }) => {
  return /* @__PURE__ */ jsxs32(SlicePadding11, { xOnly: true, className: textPadding2, children: [
    /* @__PURE__ */ jsx37(IntersectionAnimation12, { trigger: triggerAnimation, delay: 0, children: /* @__PURE__ */ jsx37("div", { className: cn26(`b2`, position2), children: position3 }) }),
    /* @__PURE__ */ jsx37(IntersectionAnimation12, { trigger: triggerAnimation, delay: 150, children: /* @__PURE__ */ jsx37("h3", { className: "h2", children: name3 }) })
  ] });
};
var OverlayGraphic2 = ({
  color,
  variant,
  name: name3,
  position: position3,
  triggerAnimation
}) => {
  const backgroundStyle = { backgroundColor: color };
  return /* @__PURE__ */ jsxs32(
    "div",
    {
      className: cn26(container24, {
        [variant12]: variant === 1,
        [variant22]: variant === 2
      }),
      children: [
        variant === 1 && /* @__PURE__ */ jsxs32(Fragment8, { children: [
          /* @__PURE__ */ jsx37("div", {}),
          /* @__PURE__ */ jsx37("div", { style: backgroundStyle }),
          /* @__PURE__ */ jsx37("div", {}),
          /* @__PURE__ */ jsx37("div", { style: backgroundStyle }),
          /* @__PURE__ */ jsx37("div", {}),
          /* @__PURE__ */ jsx37("div", { style: backgroundStyle }),
          /* @__PURE__ */ jsx37("div", { style: backgroundStyle, className: textContent2, children: /* @__PURE__ */ jsx37(
            TextContent2,
            {
              triggerAnimation,
              name: name3,
              position: position3
            }
          ) })
        ] }),
        variant === 2 && /* @__PURE__ */ jsxs32(Fragment8, { children: [
          /* @__PURE__ */ jsx37("div", {}),
          /* @__PURE__ */ jsx37("div", { style: backgroundStyle }),
          /* @__PURE__ */ jsx37("div", { style: backgroundStyle, className: textContent2, children: /* @__PURE__ */ jsx37(
            TextContent2,
            {
              triggerAnimation,
              name: name3,
              position: position3
            }
          ) })
        ] })
      ]
    }
  );
};
var OverlayGraphic_default2 = OverlayGraphic2;

// src/slices/FounderProfiles/components/LinksAccordion/index.tsx
import { useEffect as useEffect9, useRef as useRef8, useState as useState11 } from "react";

// src/slices/FounderProfiles/components/LinksAccordion/styles.module.ts
var button5 = "styles-module--button--590d4";
var buttonPadding = "styles-module--buttonPadding--2528c";
var chevronIcon2 = "styles-module--chevronIcon--2ecfb";
var content7 = "styles-module--content--b0f1f";
var contentContainer2 = "styles-module--contentContainer--2cb2f";
var rotate = "styles-module--rotate--25393";

// src/slices/FounderProfiles/components/LinksAccordion/index.tsx
import { SVG as SVG11, SlicePadding as SlicePadding12 } from "~components";
import cn27 from "classnames";
import { Fragment as Fragment9, jsx as jsx38, jsxs as jsxs33 } from "react/jsx-runtime";
var LinksAccordion = ({ links: links2, nameShort }) => {
  if (!links2?.[0]) return null;
  const [contentHeight, setContentHeight] = useState11(0);
  const [isExpanded2, setIsExpanded] = useState11(false);
  const contentRef = useRef8(null);
  const calculateContentHeight = () => {
    const height = contentRef.current?.offsetHeight || 0;
    setContentHeight(height);
  };
  useEffect9(() => {
    calculateContentHeight();
    window.addEventListener(`resize`, calculateContentHeight);
    return () => window.removeEventListener(`resize`, calculateContentHeight);
  }, []);
  const handleClick = () => {
    setIsExpanded((prev) => !prev);
  };
  return /* @__PURE__ */ jsxs33(Fragment9, { children: [
    /* @__PURE__ */ jsx38(
      "button",
      {
        onClick: handleClick,
        type: "button",
        className: cn27(`button-text`, button5),
        children: /* @__PURE__ */ jsxs33(SlicePadding12, { className: buttonPadding, xOnly: true, children: [
          /* @__PURE__ */ jsxs33("span", { children: [
            "Learn more about ",
            nameShort
          ] }),
          /* @__PURE__ */ jsx38(
            SVG11,
            {
              svg: "chevronDown",
              className: cn27(chevronIcon2, { [rotate]: isExpanded2 })
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsx38(
      "div",
      {
        className: contentContainer2,
        "aria-hidden": !isExpanded2,
        style: { height: isExpanded2 ? `${contentHeight}px` : 0 },
        children: /* @__PURE__ */ jsx38("ul", { className: content7, ref: contentRef, children: links2.map((link5, i) => /* @__PURE__ */ jsx38("li", { children: /* @__PURE__ */ jsx38(FounderLink_default, { ...link5, isVisible: isExpanded2 }) }, i)) })
      }
    )
  ] });
};
var LinksAccordion_default = LinksAccordion;

// src/slices/FounderProfiles/components/Mobile/components/ProfileBlock/index.tsx
import { useInView as useInView6 } from "react-intersection-observer";
import { jsx as jsx39, jsxs as jsxs34 } from "react/jsx-runtime";
var ProfileBlock2 = ({
  _rawBio,
  headshot,
  links: links2,
  name: name3,
  nameShort,
  position: position3,
  backgroundColor,
  textColor,
  variant
}) => {
  const { ref, inView } = useInView6({
    rootMargin: `-50%`,
    triggerOnce: true
  });
  return /* @__PURE__ */ jsxs34(
    "div",
    {
      ref,
      style: {
        background: backgroundColor?.hex || `var(--color-black)`,
        color: textColor?.hex || `var(--color-white)`
      },
      children: [
        /* @__PURE__ */ jsxs34("div", { className: imageAndTitles2, children: [
          /* @__PURE__ */ jsx39(
            GatsbyImage7,
            {
              image: headshot.asset.gatsbyImageData,
              alt: headshot.altText || ``,
              style: { background: `red`, position: `absolute`, inset: 0 }
            }
          ),
          /* @__PURE__ */ jsx39(
            OverlayGraphic_default2,
            {
              variant,
              name: name3,
              position: position3,
              color: backgroundColor?.hex || `black`,
              triggerAnimation: inView
            }
          )
        ] }),
        /* @__PURE__ */ jsx39(SlicePadding13, { config: { paddingBottom: `small` }, children: /* @__PURE__ */ jsx39(IntersectionAnimation13, { trigger: inView, delay: 300, children: /* @__PURE__ */ jsx39(
          PortableTextRenderer7,
          {
            className: "b1",
            rawText: _rawBio,
            textElement: "p"
          }
        ) }) }),
        /* @__PURE__ */ jsx39(LinksAccordion_default, { links: links2, nameShort })
      ]
    }
  );
};
var ProfileBlock_default2 = ProfileBlock2;

// src/slices/FounderProfiles/components/Mobile/index.tsx
import { Fragment as Fragment10, jsx as jsx40, jsxs as jsxs35 } from "react/jsx-runtime";
var FounderProfilesMobile = ({ profile1, profile2 }) => {
  return /* @__PURE__ */ jsxs35(Fragment10, { children: [
    /* @__PURE__ */ jsx40(ProfileBlock_default2, { ...profile1, variant: 1 }),
    /* @__PURE__ */ jsx40(ProfileBlock_default2, { ...profile2, variant: 2 })
  ] });
};
var Mobile_default3 = FounderProfilesMobile;

// src/slices/FounderProfiles/index.tsx
import { useBreakpoints as useBreakpoints7 } from "~hooks";
import { Fragment as Fragment11, jsx as jsx41, jsxs as jsxs36 } from "react/jsx-runtime";
var FounderProfiles = ({ data: { profile1, profile2 } }) => {
  const { largeTablet } = useBreakpoints7();
  return /* @__PURE__ */ jsxs36(Fragment11, { children: [
    largeTablet && /* @__PURE__ */ jsx41(Desktop_default3, { profile1, profile2 }),
    !largeTablet && /* @__PURE__ */ jsx41(Mobile_default3, { profile1, profile2 })
  ] });
};
var FounderProfiles_default = FounderProfiles;

// src/slices/FeaturedCaseStudy/styles.module.ts
var blockGraphic2 = "styles-module--blockGraphic--4c274";
var bottomLeft2 = "styles-module--bottomLeft--101b8";
var bottomMiddle2 = "styles-module--bottomMiddle--70a73";
var bottomRight2 = "styles-module--bottomRight--88cc3";
var container25 = "styles-module--container--4aa96";
var icon3 = "styles-module--icon--e8e3f";
var iconContainer2 = "styles-module--iconContainer--3d7bb";
var image4 = "styles-module--image--69dc0";
var imageContainer2 = "styles-module--imageContainer--d3a10";
var linkTile3 = "styles-module--linkTile--2b36d";
var middleLeft2 = "styles-module--middleLeft--f524c";
var middleRight2 = "styles-module--middleRight--37a5a";
var subheading3 = "styles-module--subheading--3a7fd";
var text5 = "styles-module--text--7e710";
var title4 = "styles-module--title--94a24";
var topLeft2 = "styles-module--topLeft--7b791";

// src/slices/FeaturedCaseStudy/index.tsx
import cn28 from "classnames";
import { GatsbyImage as GatsbyImage8 } from "gatsby-plugin-image";
import { IntersectionAnimation as IntersectionAnimation14, SVG as SVG12 } from "~components";
import { Link as Link4 } from "gatsby";
import { SliceConfig as SliceConfig4 } from "~components";
import { useInView as useInView7 } from "react-intersection-observer";
import { jsx as jsx42, jsxs as jsxs37 } from "react/jsx-runtime";
var FeaturedCaseStudy = ({
  data: { caseStudy, backgroundColor, textColor, sliceConfig }
}) => {
  if (caseStudy._type === `globalLink`) {
    const { link: linkArray } = caseStudy;
    const link5 = linkArray?.[0];
    if (!link5) return null;
    const Content = () => /* @__PURE__ */ jsx42(
      FeaturedCaseStudyContent,
      {
        backgroundColor,
        textColor,
        category: caseStudy.category,
        description: caseStudy.description,
        image: caseStudy.image,
        title: caseStudy.title
      }
    );
    return /* @__PURE__ */ jsx42(SliceConfig4, { config: sliceConfig, children: /* @__PURE__ */ jsx42(
      "a",
      {
        className: linkTile3,
        href: link5.url,
        target: "_blank",
        rel: "noreferrer noopener",
        children: /* @__PURE__ */ jsx42(Content, {})
      }
    ) });
  }
  if (caseStudy._type === `caseStudy`) {
    return /* @__PURE__ */ jsx42(SliceConfig4, { config: sliceConfig, children: /* @__PURE__ */ jsx42(
      Link4,
      {
        to: `/awesome-stories/${caseStudy.slug.current}`,
        className: linkTile3,
        children: /* @__PURE__ */ jsx42(
          FeaturedCaseStudyContent,
          {
            backgroundColor,
            textColor,
            category: "Case Study",
            image: { ...caseStudy.linkTileImage, altText: caseStudy.title },
            title: caseStudy.title
          }
        )
      }
    ) });
  }
  return null;
};
var FeaturedCaseStudy_default = FeaturedCaseStudy;
var FeaturedCaseStudyContent = ({
  backgroundColor,
  textColor,
  category: category2,
  description: description4,
  image: image5,
  title: title11
}) => {
  const backgroundStyle = {
    background: backgroundColor?.hex || `var(--color-black)`
  };
  const { ref, inView } = useInView7({
    rootMargin: `-90px`,
    triggerOnce: true
  });
  return /* @__PURE__ */ jsxs37(
    "div",
    {
      style: {
        background: backgroundColor?.hex || `var(--color-black)`,
        color: textColor?.hex || `var(--color-black)`
      },
      className: container25,
      ref,
      children: [
        /* @__PURE__ */ jsxs37("div", { className: text5, children: [
          /* @__PURE__ */ jsxs37("div", { children: [
            /* @__PURE__ */ jsx42(IntersectionAnimation14, { trigger: inView, delay: 150, children: /* @__PURE__ */ jsx42("div", { className: cn28(subheading3, `b1`), children: category2 }) }),
            /* @__PURE__ */ jsx42(IntersectionAnimation14, { trigger: inView, delay: 300, children: /* @__PURE__ */ jsx42("h3", { className: cn28(title4, `h2`), children: title11 }) })
          ] }),
          description4 && /* @__PURE__ */ jsx42("p", { className: "b1", children: description4 })
        ] }),
        /* @__PURE__ */ jsxs37("div", { className: imageContainer2, children: [
          /* @__PURE__ */ jsx42(
            GatsbyImage8,
            {
              alt: image5.altText || ``,
              image: image5.asset.gatsbyImageData,
              className: image4,
              style: { position: `absolute`, inset: 0 }
            }
          ),
          /* @__PURE__ */ jsx42("div", { className: iconContainer2, style: backgroundStyle, children: /* @__PURE__ */ jsx42(SVG12, { svg: "arrowRightCircle", className: icon3 }) }),
          /* @__PURE__ */ jsx42(
            "div",
            {
              className: cn28(blockGraphic2, topLeft2),
              style: backgroundStyle
            }
          ),
          /* @__PURE__ */ jsx42(
            "div",
            {
              className: cn28(blockGraphic2, middleLeft2),
              style: backgroundStyle
            }
          ),
          /* @__PURE__ */ jsx42(
            "div",
            {
              className: cn28(blockGraphic2, bottomLeft2),
              style: backgroundStyle
            }
          ),
          /* @__PURE__ */ jsx42(
            "div",
            {
              className: cn28(blockGraphic2, bottomMiddle2),
              style: backgroundStyle
            }
          ),
          /* @__PURE__ */ jsx42(
            "div",
            {
              className: cn28(blockGraphic2, bottomRight2),
              style: backgroundStyle
            }
          ),
          /* @__PURE__ */ jsx42(
            "div",
            {
              className: cn28(blockGraphic2, middleRight2),
              style: backgroundStyle
            }
          )
        ] })
      ]
    }
  );
};

// src/slices/CountUp/styles.module.ts
var container26 = "styles-module--container--63e46";
var fourItems = "styles-module--fourItems--4123d";

// src/slices/CountUp/index.tsx
import cn30 from "classnames";

// src/slices/CountUp/components/CountUpItem/index.tsx
import { useState as useState12 } from "react";

// src/slices/CountUp/components/CountUpItem/styles.module.ts
var arrowIcon2 = "styles-module--arrowIcon--98153";
var graphic3 = "styles-module--graphic--86dc2";
var graphicContainer = "styles-module--graphicContainer--9acb7";
var linkContainer = "styles-module--linkContainer--e5965";
var linkTextContainer = "styles-module--linkTextContainer--41f1b";
var number = "styles-module--number--147ce";
var numberAndGraphic = "styles-module--numberAndGraphic--14159";
var padding2 = "styles-module--padding--df5d1";
var title5 = "styles-module--title--96dab";

// src/slices/CountUp/components/CountUpItem/index.tsx
import cn29 from "classnames";
import {
  SlicePadding as SlicePadding14,
  MagicGraphic,
  CountUp,
  UniversalLinkWrapper,
  SVG as SVG13
} from "~components";
import { getMagicGraphicColorStyles } from "~utils";
import { Fragment as Fragment12, jsx as jsx43, jsxs as jsxs38 } from "react/jsx-runtime";
var CountUpItemContent = ({
  item: { graphic: graphic5, number: number2, showPlus, title: title11, postNumberText, preNumberText }
}) => {
  const [overrideNumber] = useState12(0);
  return /* @__PURE__ */ jsx43(
    "div",
    {
      className: "countUpItemTileContainer",
      style: getMagicGraphicColorStyles(graphic5.variation),
      children: /* @__PURE__ */ jsxs38(SlicePadding14, { xOnly: true, className: padding2, children: [
        /* @__PURE__ */ jsx43("div", { className: cn29(`b1`, title5), children: title11 }),
        /* @__PURE__ */ jsxs38("div", { className: numberAndGraphic, children: [
          /* @__PURE__ */ jsx43(
            CountUp,
            {
              number: overrideNumber || number2,
              className: cn29(`h1`, number),
              showPlus: showPlus && !overrideNumber,
              postNumberText,
              preNumberText
            }
          ),
          /* @__PURE__ */ jsx43("div", { className: graphicContainer, children: /* @__PURE__ */ jsx43("div", { className: graphic3, children: /* @__PURE__ */ jsx43(MagicGraphic, { graphicVariation: graphic5.variation }) }) })
        ] })
      ] })
    }
  );
};
var CountUpLink = ({ item }) => {
  const itemLink = item.link;
  const linkText2 = itemLink?.text;
  const graphicStyles = getMagicGraphicColorStyles(item.graphic.variation);
  return /* @__PURE__ */ jsxs38(UniversalLinkWrapper, { className: linkContainer, link: itemLink, children: [
    /* @__PURE__ */ jsx43(CountUpItemContent, { item }),
    linkText2 && /* @__PURE__ */ jsxs38("div", { style: graphicStyles, className: linkTextContainer, children: [
      /* @__PURE__ */ jsx43("p", { className: cn29("button-text"), children: linkText2 }),
      /* @__PURE__ */ jsx43(SVG13, { svg: "arrowRight", className: arrowIcon2 })
    ] })
  ] });
};
var CountUpItem = ({ item }) => {
  const itemLink = item.link;
  return /* @__PURE__ */ jsx43(Fragment12, { children: itemLink ? /* @__PURE__ */ jsx43(CountUpLink, { item }) : /* @__PURE__ */ jsx43(CountUpItemContent, { item }) });
};
var CountUpItem_default = CountUpItem;

// src/slices/CountUp/index.tsx
import { jsx as jsx44 } from "react/jsx-runtime";
var CountUp2 = ({ data: { items } }) => {
  return /* @__PURE__ */ jsx44(
    "div",
    {
      className: cn30(container26, {
        [fourItems]: items.length === 4
      }),
      children: items?.[0] && items.map((countUpItem, i) => {
        return /* @__PURE__ */ jsx44(CountUpItem_default, { item: countUpItem }, i);
      })
    }
  );
};
var CountUp_default = CountUp2;

// src/slices/InvestmentAreas/styles.module.ts
var container27 = "styles-module--container--99612";

// src/slices/InvestmentAreas/components/InvestmentAreaTile/styles.module.ts
var container28 = "styles-module--container--101d6";
var graphicContainer2 = "styles-module--graphicContainer--3690a";
var overflowContainer = "styles-module--overflowContainer--b9aad";
var title6 = "styles-module--title--1572d";

// src/slices/InvestmentAreas/components/InvestmentAreaTile/index.tsx
import cn31 from "classnames";
import { MagicGraphic as MagicGraphic2 } from "~components";
import { getMagicGraphicColorStyles as getMagicGraphicColorStyles2 } from "~utils";
import { jsx as jsx45, jsxs as jsxs39 } from "react/jsx-runtime";
var InvestmentAreaTile = ({ area, variation }) => {
  return /* @__PURE__ */ jsx45("div", { className: overflowContainer, children: /* @__PURE__ */ jsxs39(
    "div",
    {
      className: `${container28} investmentAreaTileContainer`,
      style: getMagicGraphicColorStyles2(variation),
      children: [
        /* @__PURE__ */ jsx45("div", { className: cn31(`h2`, title6), children: area }),
        /* @__PURE__ */ jsx45("div", { className: graphicContainer2, children: /* @__PURE__ */ jsx45(MagicGraphic2, { graphicVariation: variation }) })
      ]
    }
  ) });
};
var InvestmentAreaTile_default = InvestmentAreaTile;

// src/slices/InvestmentAreas/index.tsx
import { useInView as useInView8 } from "react-intersection-observer";
import { IntersectionAnimation as IntersectionAnimation15, SliceIntroText as SliceIntroText2 } from "~components";
import { Fragment as Fragment13, jsx as jsx46, jsxs as jsxs40 } from "react/jsx-runtime";
var InvestmentAreas = ({ data: { areas, introText } }) => {
  const { ref, inView } = useInView8({
    rootMargin: `-90px`,
    triggerOnce: true
  });
  return /* @__PURE__ */ jsxs40(Fragment13, { children: [
    /* @__PURE__ */ jsx46(SliceIntroText2, { content: introText }),
    /* @__PURE__ */ jsx46("div", { ref, className: container27, children: areas?.[0] && areas.map(({ title: title11, graphic: { variation } }, i) => {
      return /* @__PURE__ */ jsx46(
        IntersectionAnimation15,
        {
          trigger: inView,
          animation: "fadeGrow",
          delay: 100 + 150 * i,
          children: /* @__PURE__ */ jsx46(InvestmentAreaTile_default, { area: title11, variation })
        },
        i
      );
    }) })
  ] });
};
var InvestmentAreas_default = InvestmentAreas;

// src/slices/Entities/index.tsx
import { useBreakpoints as useBreakpoints8 } from "~hooks";

// src/slices/Entities/components/Mobile/index.tsx
import { useState as useState14 } from "react";
import { SlicePadding as SlicePadding15 } from "~components";

// src/slices/Entities/components/Mobile/components/EntityAccordion/index.tsx
import { useEffect as useEffect11, useRef as useRef9, useState as useState13 } from "react";

// src/slices/Entities/components/Mobile/components/EntityAccordion/styles.module.ts
var active11 = "styles-module--active--5b762";
var button6 = "styles-module--button--30398";
var content8 = "styles-module--content--93e7d";
var contentContainer3 = "styles-module--contentContainer--af35f";
var description = "styles-module--description--4abfb";
var expandIcon = "styles-module--expandIcon--007d5";
var sideColor = "styles-module--sideColor--051a6";
var tabContainer = "styles-module--tabContainer--c1e77";
var tabContent = "styles-module--tabContent--2b2d7";
var title7 = "styles-module--title--43181";

// src/slices/Entities/components/Mobile/components/EntityAccordion/index.tsx
import cn32 from "classnames";
import { SVG as SVG14 } from "~components";
import { jsx as jsx47, jsxs as jsxs41 } from "react/jsx-runtime";
var EntityAccordion = ({
  isActive,
  entity: entity5,
  mainColor,
  textColor,
  leftColor,
  rightColor,
  handleClick
}) => {
  const [contentHeight, setContentHeight] = useState13(0);
  const contentRef = useRef9(null);
  const calculateContentHeight = () => {
    const height = contentRef.current?.offsetHeight || 0;
    setContentHeight(height);
  };
  useEffect11(() => {
    calculateContentHeight();
    window.addEventListener(`resize`, calculateContentHeight);
    return () => window.removeEventListener(`resize`, calculateContentHeight);
  }, []);
  return /* @__PURE__ */ jsxs41(
    "button",
    {
      type: "button",
      onClick: handleClick,
      className: cn32(button6, { [active11]: isActive }),
      style: { color: textColor, background: mainColor },
      children: [
        /* @__PURE__ */ jsxs41("div", { className: tabContainer, children: [
          leftColor && /* @__PURE__ */ jsx47("div", { style: { background: leftColor }, className: sideColor }),
          /* @__PURE__ */ jsxs41("div", { className: tabContent, children: [
            /* @__PURE__ */ jsxs41("div", { children: [
              /* @__PURE__ */ jsx47("h4", { className: cn32(`h2`, title7), children: entity5.title }),
              /* @__PURE__ */ jsx47("div", { className: cn32(`b1`), children: entity5.statistic })
            ] }),
            /* @__PURE__ */ jsx47(SVG14, { svg: "plusCircle", className: expandIcon })
          ] }),
          rightColor && /* @__PURE__ */ jsx47(
            "div",
            {
              style: { background: rightColor },
              className: sideColor
            }
          )
        ] }),
        /* @__PURE__ */ jsx47(
          "div",
          {
            className: contentContainer3,
            style: { height: isActive ? `${contentHeight}px` : `0px` },
            children: /* @__PURE__ */ jsxs41("div", { className: content8, ref: contentRef, children: [
              leftColor && /* @__PURE__ */ jsx47(
                "div",
                {
                  style: { background: leftColor },
                  className: sideColor
                }
              ),
              /* @__PURE__ */ jsx47("p", { className: cn32(`b2`, description), children: entity5.description }),
              rightColor && /* @__PURE__ */ jsx47(
                "div",
                {
                  style: { background: rightColor },
                  className: sideColor
                }
              )
            ] })
          }
        )
      ]
    }
  );
};
var EntityAccordion_default = EntityAccordion;

// src/slices/Entities/components/Mobile/index.tsx
import { jsx as jsx48 } from "react/jsx-runtime";
import { createElement } from "react";
var MobileEntities = ({ entity1: entity12, entity2: entity22, entity3: entity32, entity4: entity42 }) => {
  const [activeEntity, setActiveEntity] = useState14(null);
  const entityAccordions = [
    {
      entity: entity12,
      isActive: activeEntity === 1,
      mainColor: `var(--color-regent-grey)`,
      textColor: `var(--color-white)`,
      handleClick: () => setActiveEntity((prev) => prev === 1 ? null : 1)
    },
    {
      entity: entity22,
      isActive: activeEntity === 2,
      mainColor: `#A7204C`,
      textColor: `var(--color-white)`,
      leftColor: `var(--color-regent-grey)`,
      handleClick: () => setActiveEntity((prev) => prev === 2 ? null : 2)
    },
    {
      entity: entity32,
      isActive: activeEntity === 3,
      mainColor: `#A75F03`,
      textColor: `var(--color-white)`,
      rightColor: `#A7204C`,
      handleClick: () => setActiveEntity((prev) => prev === 3 ? null : 3)
    },
    {
      entity: entity42,
      isActive: activeEntity === 4,
      mainColor: `#1C1D3A`,
      textColor: `var(--color-white)`,
      leftColor: `#A75F03`,
      handleClick: () => setActiveEntity((prev) => prev === 4 ? null : 4)
    }
  ];
  return /* @__PURE__ */ jsx48(SlicePadding15, { xOnly: true, children: entityAccordions.map((accordion3, i) => /* @__PURE__ */ createElement(EntityAccordion_default, { ...accordion3, key: i })) });
};
var Mobile_default4 = MobileEntities;

// src/slices/Entities/components/Desktop/index.tsx
import { useState as useState15 } from "react";

// src/slices/Entities/components/Desktop/styles.module.ts
var active12 = "styles-module--active1--3774a";
var active23 = "styles-module--active2--e3ea7";
var active33 = "styles-module--active3--92fe9";
var active42 = "styles-module--active4--beaee";
var background = "styles-module--background--c06a8";
var container29 = "styles-module--container--e2ee8";
var description2 = "styles-module--description--7ad8e";
var entity = "styles-module--entity--5d9ac";
var entity1 = "styles-module--entity1--3809d";
var entity2 = "styles-module--entity2--af4b2";
var entity3 = "styles-module--entity3--af77b";
var entity4 = "styles-module--entity4--f725b";
var entityContent = "styles-module--entityContent--70d96";
var statistic = "styles-module--statistic--b0b9b";
var textContent3 = "styles-module--textContent--56d6f";
var title8 = "styles-module--title--db317";

// src/slices/Entities/components/Desktop/index.tsx
import cn33 from "classnames";
import { jsx as jsx49, jsxs as jsxs42 } from "react/jsx-runtime";
var DesktopEntities = ({ entity1: entity12, entity2: entity22, entity3: entity32, entity4: entity42 }) => {
  const [activeEntity, setActiveEntity] = useState15(null);
  const reset = () => setActiveEntity(null);
  return /* @__PURE__ */ jsxs42(
    "div",
    {
      onMouseLeave: reset,
      className: cn33(container29, {
        [active12]: activeEntity === 1,
        [active23]: activeEntity === 2,
        [active33]: activeEntity === 3,
        [active42]: activeEntity === 4
      }),
      children: [
        /* @__PURE__ */ jsx49(
          EntityBlock,
          {
            className: cn33(entity, entity1),
            handleMouseMove: () => setActiveEntity(1),
            entity: entity12
          }
        ),
        /* @__PURE__ */ jsx49(
          EntityBlock,
          {
            className: cn33(entity, entity2),
            handleMouseMove: () => setActiveEntity(2),
            entity: entity22
          }
        ),
        /* @__PURE__ */ jsx49(
          EntityBlock,
          {
            className: cn33(entity, entity3),
            handleMouseMove: () => setActiveEntity(3),
            entity: entity32
          }
        ),
        /* @__PURE__ */ jsx49(
          EntityBlock,
          {
            className: cn33(entity, entity4),
            handleMouseMove: () => setActiveEntity(4),
            entity: entity42
          }
        )
      ]
    }
  );
};
var Desktop_default4 = DesktopEntities;
var EntityBlock = ({ className, entity: entity5, handleMouseMove }) => /* @__PURE__ */ jsx49("div", { onMouseMove: handleMouseMove, className: cn33(className), children: /* @__PURE__ */ jsxs42("div", { className: entityContent, children: [
  /* @__PURE__ */ jsx49("div", { className: background }),
  /* @__PURE__ */ jsxs42("div", { className: textContent3, children: [
    /* @__PURE__ */ jsx49("h4", { className: cn33(`h2`, title8), children: entity5.title }),
    /* @__PURE__ */ jsx49("div", { className: cn33(`b1`, statistic), children: entity5.statistic }),
    /* @__PURE__ */ jsx49("p", { className: description2, children: entity5.description })
  ] })
] }) });

// src/slices/Entities/index.tsx
import { SliceIntroText as SliceIntroText3 } from "~components";
import { Fragment as Fragment14, jsx as jsx50, jsxs as jsxs43 } from "react/jsx-runtime";
var Entities = ({
  data: { introText, entity1: entity12, entity2: entity22, entity3: entity32, entity4: entity42 }
}) => {
  const { smallDesktop } = useBreakpoints8();
  return /* @__PURE__ */ jsxs43(Fragment14, { children: [
    /* @__PURE__ */ jsx50(SliceIntroText3, { content: introText }),
    !smallDesktop && /* @__PURE__ */ jsx50(
      Mobile_default4,
      {
        entity1: entity12,
        entity2: entity22,
        entity3: entity32,
        entity4: entity42
      }
    ),
    smallDesktop && /* @__PURE__ */ jsx50(
      Desktop_default4,
      {
        entity1: entity12,
        entity2: entity22,
        entity3: entity32,
        entity4: entity42
      }
    )
  ] });
};
var Entities_default = Entities;

// src/slices/Quote/styles.module.ts
var container30 = "styles-module--container--d4ab2";
var graphic4 = "styles-module--graphic--2b38c";
var grid3 = "styles-module--grid--f2fd3";
var quote = "styles-module--quote--a8cdd";
var text6 = "styles-module--text--cfa03";

// src/slices/Quote/index.tsx
import { SlicePadding as SlicePadding16, Grid as Grid4, IntersectionAnimation as IntersectionAnimation16 } from "~components";

// src/slices/Quote/components/QuoteGraphic/styles.module.ts
var container31 = "styles-module--container--67478";
var grid4 = "styles-module--grid--017ff";

// src/slices/Quote/components/QuoteGraphic/index.tsx
import cn34 from "classnames";
import { jsx as jsx51, jsxs as jsxs44 } from "react/jsx-runtime";
var QuoteGraphic = ({ color, className }) => {
  const colorStyle = {
    background: color
  };
  return /* @__PURE__ */ jsx51("div", { className: cn34(container31, className), children: /* @__PURE__ */ jsxs44("div", { className: grid4, children: [
    /* @__PURE__ */ jsx51("div", { style: colorStyle }),
    /* @__PURE__ */ jsx51("div", { style: colorStyle }),
    /* @__PURE__ */ jsx51("div", {}),
    /* @__PURE__ */ jsx51("div", { style: colorStyle }),
    /* @__PURE__ */ jsx51("div", { style: colorStyle }),
    /* @__PURE__ */ jsx51("div", {}),
    /* @__PURE__ */ jsx51("div", { style: colorStyle }),
    /* @__PURE__ */ jsx51("div", {}),
    /* @__PURE__ */ jsx51("div", {}),
    /* @__PURE__ */ jsx51("div", { style: colorStyle }),
    /* @__PURE__ */ jsx51("div", { style: colorStyle }),
    /* @__PURE__ */ jsx51("div", {}),
    /* @__PURE__ */ jsx51("div", {}),
    /* @__PURE__ */ jsx51("div", { style: colorStyle }),
    /* @__PURE__ */ jsx51("div", {})
  ] }) });
};
var QuoteGraphic_default = QuoteGraphic;

// src/slices/Quote/index.tsx
import cn35 from "classnames";
import { useInView as useInView9 } from "react-intersection-observer";
import { jsx as jsx52, jsxs as jsxs45 } from "react/jsx-runtime";
var Quote = ({
  data: { attribution, backgroundColor, graphicColor, quote: quote3, textColor }
}) => {
  const colorStyles = {
    background: backgroundColor?.hex || `var(--color-white)`,
    color: textColor?.hex || `var(--color-black)`
  };
  const { ref, inView } = useInView9({
    rootMargin: `-90px`,
    triggerOnce: true
  });
  return /* @__PURE__ */ jsx52("div", { className: container30, style: colorStyles, ref, children: /* @__PURE__ */ jsxs45(Grid4, { className: grid3, children: [
    /* @__PURE__ */ jsx52(
      IntersectionAnimation16,
      {
        className: graphic4,
        animation: "fadeGrow",
        trigger: inView,
        children: /* @__PURE__ */ jsx52(QuoteGraphic_default, { color: graphicColor?.hex || `var(--color-black)` })
      }
    ),
    /* @__PURE__ */ jsx52(SlicePadding16, { className: text6, children: /* @__PURE__ */ jsxs45(IntersectionAnimation16, { trigger: inView, delay: 300, children: [
      /* @__PURE__ */ jsx52("p", { className: cn35(`h3`, quote), children: quote3 }),
      /* @__PURE__ */ jsx52("p", { className: "caption", children: attribution })
    ] }) })
  ] }) });
};
var Quote_default = Quote;

// src/slices/Contact/index.tsx
import { useState as useState16 } from "react";
import cn36 from "classnames";

// src/slices/Contact/styles.module.ts
var abc = "styles-module--abc--9071b";
var buttonCaption = "styles-module--buttonCaption--85235";
var fileUpload = "styles-module--fileUpload--56eb2";
var form = "styles-module--form--08dd0";
var inlineFields = "styles-module--inlineFields--27b44";
var input = "styles-module--input--48d55";
var submitButton = "styles-module--submitButton--feda0";
var text7 = "styles-module--text--6ce7e";
var visible4 = "styles-module--visible--e0872";

// src/slices/Contact/index.tsx
import {
  Button as Button6,
  Grid as Grid5,
  PortableTextRenderer as PortableTextRenderer8,
  SliceConfig as SliceConfig5,
  TextInput,
  IntersectionAnimation as IntersectionAnimation17,
  FileUpload
} from "~components";
import { regex } from "~constants";

// src/slices/Contact/contactFormData.ts
var contactFormData = {
  name: {
    label: "Name",
    placeholder: "What's your name?"
  },
  email: {
    label: "Email address",
    placeholder: "Enter your email address"
  },
  how: {
    label: "How are you making awesome?",
    placeholder: "Tell us what you're working on",
    maxLength: 100
  },
  message: {
    label: "What do you need to make it awesome?",
    placeholder: "Funding, Hugs, Networking, Advice, Mentorship?",
    maxLength: 150
  },
  honeypot: {
    label: "Ignore this if you are a human",
    placeholder: "Type your message here..."
  }
};
var contactFormData_default = contactFormData;

// src/slices/Contact/index.tsx
import { jsx as jsx53, jsxs as jsxs46 } from "react/jsx-runtime";
var Contact = ({ data: { _rawText } }) => {
  const formFields = [
    `name`,
    `email`,
    `how`,
    `message`,
    `honeypot`
  ];
  const initialFormValues = {};
  const initialFormErrors = {};
  for (const field of formFields) {
    initialFormValues[field] = ``;
    initialFormErrors[field] = false;
  }
  const [formValues, setFormValues] = useState16(initialFormValues);
  const [formErrors, setFormErrors] = useState16(initialFormErrors);
  const [isSubmitting, setIsSubmitting] = useState16(false);
  const [hasErrorSubmitting, setHasErrorSubmitting] = useState16(false);
  const [hasSubmitted, setHasSubmitted] = useState16(false);
  const [file, setFile] = useState16(null);
  const handleUpdateValue = (value, formField) => {
    setHasErrorSubmitting(false);
    setFormValues((prev) => ({ ...prev, [formField]: value }));
    setFormErrors((prev) => ({ ...prev, [formField]: false }));
  };
  const handleBlur = (field) => {
    if (!regex[field]?.test(formValues[field] || ``)) {
      setFormErrors((prev) => ({
        ...prev,
        [field]: true
      }));
    }
  };
  const formHasError = () => {
    const relevantFormFields = formFields.filter(
      (field) => field !== `honeypot`
    );
    for (const field of relevantFormFields) {
      if (!formValues[field]) return true;
      if (formErrors[field]) return true;
    }
    return false;
  };
  const isButtonDisabled = () => {
    if (hasSubmitted || isSubmitting || formHasError()) return true;
    return false;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formHasError()) return;
    if (formValues.honeypot) return;
    setHasErrorSubmitting(false);
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 450));
      void file;
      setHasSubmitted(true);
    } catch (error) {
      console.error(error);
      setHasErrorSubmitting(true);
    } finally {
      setIsSubmitting(false);
    }
  };
  const captionText = () => {
    if (hasErrorSubmitting) {
      return `Sorry, something went wrong. Please try again in a few minutes.`;
    }
    if (hasSubmitted) {
      return `Thanks for your message.`;
    }
    return `placeholder`;
  };
  const howFieldHint = formValues.how?.length === contactFormData_default.how.maxLength ? `${contactFormData_default.how.maxLength} character limit` : ``;
  const messageFieldHint = formValues.message?.length === contactFormData_default.message.maxLength ? `${contactFormData_default.message.maxLength} character limit` : ``;
  const disableFormFields = isSubmitting || hasSubmitted;
  return /* @__PURE__ */ jsx53(SliceConfig5, { children: /* @__PURE__ */ jsxs46(Grid5, { children: [
    /* @__PURE__ */ jsx53(IntersectionAnimation17, { className: text7, delay: 150, children: /* @__PURE__ */ jsx53(PortableTextRenderer8, { rawText: _rawText, textElement: "p" }) }),
    /* @__PURE__ */ jsx53(IntersectionAnimation17, { className: form, delay: 300, children: /* @__PURE__ */ jsxs46("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxs46("div", { className: inlineFields, children: [
        /* @__PURE__ */ jsx53(
          TextInput,
          {
            className: input,
            required: true,
            label: contactFormData_default.name.label,
            placeholder: contactFormData_default.name.placeholder,
            value: formValues["name"],
            onChange: (value) => handleUpdateValue(value, "name"),
            hasError: formErrors["name"],
            onBlur: () => handleBlur("name"),
            disabled: disableFormFields
          }
        ),
        /* @__PURE__ */ jsx53(
          TextInput,
          {
            className: input,
            required: true,
            label: contactFormData_default.email.label,
            placeholder: contactFormData_default.email.placeholder,
            value: formValues["email"],
            onChange: (value) => handleUpdateValue(value, "email"),
            hasError: formErrors["email"],
            onBlur: () => handleBlur("email"),
            disabled: disableFormFields
          }
        )
      ] }),
      /* @__PURE__ */ jsx53(
        TextInput,
        {
          className: input,
          required: true,
          textarea: true,
          label: contactFormData_default.how.label,
          placeholder: contactFormData_default.how.placeholder,
          maxLength: contactFormData_default.how.maxLength,
          value: formValues["how"],
          onChange: (value) => handleUpdateValue(value, "how"),
          hasError: formErrors["how"],
          onBlur: () => handleBlur("how"),
          disabled: disableFormFields,
          hint: howFieldHint
        }
      ),
      /* @__PURE__ */ jsx53(
        TextInput,
        {
          className: input,
          required: true,
          textarea: true,
          label: contactFormData_default.message.label,
          placeholder: contactFormData_default.message.placeholder,
          maxLength: contactFormData_default.message.maxLength,
          value: formValues["message"],
          onChange: (value) => handleUpdateValue(value, "message"),
          hasError: formErrors["message"],
          onBlur: () => handleBlur("message"),
          disabled: disableFormFields,
          hint: messageFieldHint
        }
      ),
      /* @__PURE__ */ jsx53(
        FileUpload,
        {
          label: "Upload a file (optional)",
          setFile,
          className: fileUpload,
          disabled: disableFormFields
        }
      ),
      /* @__PURE__ */ jsx53(
        TextInput,
        {
          className: cn36(input, abc),
          label: contactFormData_default.honeypot.label,
          placeholder: contactFormData_default.honeypot.placeholder,
          isHoneypot: true
        }
      ),
      /* @__PURE__ */ jsxs46(
        Button6,
        {
          className: submitButton,
          disabled: isButtonDisabled(),
          buttonType: "submit",
          iconRight: "arrowRight",
          loading: isSubmitting,
          children: [
            "Submit",
            " "
          ]
        }
      ),
      /* @__PURE__ */ jsx53(
        "p",
        {
          "aria-hidden": !(hasErrorSubmitting || hasSubmitted),
          className: cn36(`caption`, buttonCaption, {
            [visible4]: hasErrorSubmitting || hasSubmitted
          }),
          children: captionText()
        }
      )
    ] }) })
  ] }) });
};
var Contact_default = Contact;

// src/slices/Scratchie/index.tsx
import { useEffect as useEffect12, useRef as useRef10, useState as useState17 } from "react";

// src/slices/Scratchie/styles.module.ts
var barrier = "styles-module--barrier--ca2a5";
var columns = "10";
var container32 = "styles-module--container--b9245";
var hidden2 = "styles-module--hidden--6c91e";
var quote2 = "styles-module--quote--7b435";
var rows = "5";
var tapGif = "styles-module--tapGif--27d7d";
var tapGifContainer = "styles-module--tapGifContainer--c3261";
var tile = "styles-module--tile--0d6b0";
var topLine = "styles-module--topLine--e486c";

// src/slices/Scratchie/index.tsx
import cn37 from "classnames";
import { useBreakpoints as useBreakpoints9 } from "~hooks";
import { SliceConfig as SliceConfig6 } from "~components";
import { jsx as jsx54, jsxs as jsxs47 } from "react/jsx-runtime";
var Scratchie = ({ data: { quotes } }) => {
  const [hasTapped, setHasTapped] = useState17(false);
  const [hasMouseEntered, setHasMouseEntered] = useState17(false);
  const { smallTablet } = useBreakpoints9();
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };
  const randomQuoteRef = useRef10(getRandomQuote());
  const { attribution, quote: quote3 } = randomQuoteRef.current;
  const quoteNumber = quotes.indexOf(randomQuoteRef.current) + 1;
  const gridColumns = columns;
  const gridRows = rows;
  const gridSlots = gridColumns * gridRows;
  const gridSlotArray = [...Array(gridSlots)];
  const scratchieTileClassName = `scratchie-tile`;
  const fallenTileClassName = `fallen`;
  const handleMouseEnter = (e) => {
    if (!smallTablet) return;
    setHasMouseEntered(true);
    const tileDiv = e.target;
    tileDiv.style.transition = `transform 2s, opacity 2s, box-shadow 0.5s`;
    tileDiv.style.transform = `translateY(800%) rotate(360deg) `;
    tileDiv.style.pointerEvents = `none`;
    tileDiv.style.opacity = `0.4`;
    tileDiv.style.boxShadow = `0 0 0px 5px rgba(0, 0, 0, 0.1)`;
    tileDiv.classList.add(fallenTileClassName);
  };
  const containerRef = useRef10(null);
  useEffect12(() => {
    if (!hasTapped) return;
    const tiles = containerRef.current?.querySelectorAll(
      `.${scratchieTileClassName}`
    );
    const makeTilesFall = (tileIndex = 0, skippedTiles = 0) => {
      if (!tiles?.[tileIndex]) return;
      const tile2 = tiles[tileIndex];
      if (tile2.classList.contains(fallenTileClassName)) {
        makeTilesFall(tileIndex + 1, skippedTiles + 1);
        return;
      }
      const tileTransitionDelay = (tileIndex - skippedTiles) * 50;
      setTimeout(() => {
        tile2.style.transition = `transform 2s, opacity 2s, box-shadow 0.5s`;
        tile2.style.transform = `translateY(800%) rotate(360deg) `;
        tile2.style.pointerEvents = `none`;
        tile2.style.opacity = `0.4`;
        tile2.style.boxShadow = `0 0 0px 5px rgba(0, 0, 0, 0.1)`;
      }, tileTransitionDelay);
      makeTilesFall(tileIndex + 1, skippedTiles);
    };
    makeTilesFall();
  }, [hasTapped]);
  const padNumber = (number2) => {
    return number2.toString().padStart(2, "0");
  };
  return /* @__PURE__ */ jsxs47(
    "div",
    {
      ref: containerRef,
      className: container32,
      onClick: () => setHasTapped(true),
      children: [
        /* @__PURE__ */ jsx54(
          SliceConfig6,
          {
            config: {
              slicePadding: { paddingTop: "small", paddingBottom: "none" }
            },
            children: /* @__PURE__ */ jsxs47("div", { className: cn37(`h4`, topLine), children: [
              /* @__PURE__ */ jsx54("h2", { children: "Awesome Excerpt" }),
              /* @__PURE__ */ jsxs47("div", { children: [
                "#",
                padNumber(quoteNumber)
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ jsx54("div", { className: barrier, children: gridSlotArray.map((_e, i) => /* @__PURE__ */ jsx54(
          "div",
          {
            onMouseEnter: handleMouseEnter,
            className: cn37(scratchieTileClassName, tile)
          },
          i
        )) }),
        /* @__PURE__ */ jsxs47(
          "div",
          {
            className: cn37(tapGifContainer, {
              [hidden2]: hasTapped || hasMouseEntered
            }),
            children: [
              /* @__PURE__ */ jsx54(
                "img",
                {
                  className: tapGif,
                  src: "https://euphemia.com/images/tap-prompt.gif",
                  alt: "Tap prompt animation"
                }
              ),
              /* @__PURE__ */ jsx54("div", { className: "h2", children: "Tap to reveal" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs47(
          SliceConfig6,
          {
            config: {
              slicePadding: { paddingTop: "none", paddingBottom: "small" }
            },
            children: [
              /* @__PURE__ */ jsx54("p", { className: cn37(`d2`, quote2), children: quote3 }),
              /* @__PURE__ */ jsxs47("div", { className: "h4", children: [
                "\u2013 ",
                attribution
              ] })
            ]
          }
        )
      ]
    }
  );
};
var Scratchie_default = Scratchie;

// src/slices/PortfolioGallery/index.tsx
import { graphql as graphql3, useStaticQuery as useStaticQuery3 } from "gatsby";

// src/slices/PortfolioGallery/components/GridGallery/index.tsx
import { useRef as useRef12, useState as useState19 } from "react";

// src/slices/PortfolioGallery/components/GridGallery/styles.module.ts
var grid5 = "styles-module--grid--1e3b4";
var loadMoreButtonContainer = "styles-module--loadMoreButtonContainer--47a21";

// src/slices/PortfolioGallery/components/GridGallery/index.tsx
import { Button as Button7, IntersectionAnimation as IntersectionAnimation19, SlicePadding as SlicePadding18 } from "~components";

// src/slices/PortfolioGallery/components/PortfolioItem/styles.module.ts
var arrowIcon3 = "styles-module--arrowIcon--b7146";
var container33 = "styles-module--container--f5a84";
var content9 = "styles-module--content--4f795";
var label = "styles-module--label--2b733";
var labelAndLink = "styles-module--labelAndLink--60cf1";
var linkBadge = "styles-module--linkBadge--a076c";
var linkText = "styles-module--linkText--b706d";

// src/slices/PortfolioGallery/components/PortfolioItem/index.tsx
import { GatsbyImage as GatsbyImage9 } from "gatsby-plugin-image";
import { Link as Link5 } from "gatsby";
import cn38 from "classnames";
import { SVG as SVG15 } from "~components";
import { useBreakpoints as useBreakpoints10 } from "~hooks";
import { jsx as jsx55, jsxs as jsxs48 } from "react/jsx-runtime";
var PortfolioItem = ({
  item: { logo, title: title11, link: linkArray, category: category2, type },
  index
}) => {
  const link5 = linkArray?.[0];
  const getHoverColor = () => {
    const hoverColors = [
      `--color-red`,
      `--color-sky-blue`,
      `--color-forest-green`,
      `--color-construction-orange`,
      `--color-dark-blue`,
      `--color-teal`,
      `--color-dark-purple`
    ];
    return hoverColors[index % hoverColors.length];
  };
  const hoverStyles = {
    "--hover-color": `var(${getHoverColor()})`
  };
  const hoverText = link5?._type === `caseStudyReference` ? `Read story` : `Learn more`;
  const label2 = category2 || type;
  const { largeTablet } = useBreakpoints10();
  const labelTypestyle = largeTablet ? `button-text` : `caption`;
  const content10 = /* @__PURE__ */ jsxs48("div", { style: hoverStyles, className: container33, children: [
    /* @__PURE__ */ jsx55("div", { className: content9, children: logo?.asset && /* @__PURE__ */ jsx55(
      GatsbyImage9,
      {
        alt: `${title11} logo`,
        image: logo.asset.gatsbyImageData
      }
    ) }),
    /* @__PURE__ */ jsxs48("div", { className: labelAndLink, children: [
      /* @__PURE__ */ jsx55("div", { className: cn38(labelTypestyle, label), children: label2 }),
      link5 && /* @__PURE__ */ jsxs48("div", { className: cn38(`button-text`, linkBadge), children: [
        /* @__PURE__ */ jsx55("span", { className: linkText, children: hoverText }),
        /* @__PURE__ */ jsx55(SVG15, { svg: "arrowRight", className: arrowIcon3 })
      ] })
    ] })
  ] });
  if (!link5) {
    return content10;
  }
  if (link5._type === `caseStudyReference`) {
    return /* @__PURE__ */ jsx55(Link5, { to: `/awesome-stories/${link5.caseStudy.slug.current}`, children: content10 });
  }
  if (link5._type === `externalUrl`) {
    return /* @__PURE__ */ jsx55("a", { href: link5.url, target: "_blank", rel: "noreferrer noopener", children: content10 });
  }
  return null;
};
var PortfolioItem_default = PortfolioItem;

// src/slices/PortfolioGallery/components/GridGallery/components/HeaderAndCheckboxFilter/styles.module.ts
var leftColumn4 = "styles-module--leftColumn--ade8f";
var rightColumn3 = "styles-module--rightColumn--d5116";

// src/slices/PortfolioGallery/components/GridGallery/components/HeaderAndCheckboxFilter/index.tsx
import {
  Grid as Grid6,
  IntersectionAnimation as IntersectionAnimation18,
  PortableTextRenderer as PortableTextRenderer9,
  SlicePadding as SlicePadding17
} from "~components";
import { useInView as useInView10 } from "react-intersection-observer";

// src/slices/PortfolioGallery/components/GridGallery/components/HeaderAndCheckboxFilter/components/CheckboxFilter/index.tsx
import { useEffect as useEffect13, useRef as useRef11, useState as useState18 } from "react";
import { SVG as SVG16 } from "~components";
import cn40 from "classnames";

// src/slices/PortfolioGallery/components/GridGallery/components/HeaderAndCheckboxFilter/components/CheckboxFilter/styles.module.ts
var active13 = "styles-module--active--76e5e";
var chevronIcon3 = "styles-module--chevronIcon--751c5";
var dropdown2 = "styles-module--dropdown--4a4f3";
var dropdownButton2 = "styles-module--dropdownButton--f01b4";
var dropdownContainer2 = "styles-module--dropdownContainer--b28ce";
var dropdownContent2 = "styles-module--dropdownContent--7d9ab";
var dropdownListItem2 = "styles-module--dropdownListItem--f0eb1";
var filterLabel2 = "styles-module--filterLabel--86fbe";
var selectedFilter2 = "styles-module--selectedFilter--c5e11";

// src/slices/PortfolioGallery/components/GridGallery/components/HeaderAndCheckboxFilter/components/CheckboxFilter/components/CheckboxFilterItem/index.tsx
import cn39 from "classnames";

// src/slices/PortfolioGallery/components/GridGallery/components/HeaderAndCheckboxFilter/components/CheckboxFilter/components/CheckboxFilterItem/styles.module.ts
var active14 = "styles-module--active--53e1c";
var button7 = "styles-module--button--07f32";
var checkbox = "styles-module--checkbox--e8dd3";

// src/slices/PortfolioGallery/components/GridGallery/components/HeaderAndCheckboxFilter/components/CheckboxFilter/components/CheckboxFilterItem/index.tsx
import { jsx as jsx56, jsxs as jsxs49 } from "react/jsx-runtime";
var CheckboxFilterItem = ({
  active: active18,
  onClick,
  text: text11,
  numberOfItems
}) => {
  return /* @__PURE__ */ jsxs49("button", { className: button7, onClick, children: [
    /* @__PURE__ */ jsxs49("div", { children: [
      /* @__PURE__ */ jsx56("span", { children: text11 }),
      ` `,
      /* @__PURE__ */ jsxs49("span", { children: [
        "(",
        numberOfItems,
        ")"
      ] })
    ] }),
    /* @__PURE__ */ jsx56("div", { className: cn39(checkbox, { [active14]: active18 }) })
  ] });
};
var CheckboxFilterItem_default = CheckboxFilterItem;

// src/slices/PortfolioGallery/components/GridGallery/components/HeaderAndCheckboxFilter/components/CheckboxFilter/index.tsx
import { Fragment as Fragment15, jsx as jsx57, jsxs as jsxs50 } from "react/jsx-runtime";
var CheckboxFilter = ({
  filterOptions,
  activeCategories,
  onClickCategory,
  allPortfolioItems,
  numberOfFilteredItems
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState18(false);
  const [dropdownContentHeight, setDropdownContentHeight] = useState18(0);
  const dropdownRef = useRef11(null);
  const calculateContentHeight = () => {
    const height = dropdownRef.current?.offsetHeight || 0;
    const MAX_DROPDOWN_HEIGHT_PX = 300;
    const newDropdownHeight = Math.min(height, MAX_DROPDOWN_HEIGHT_PX);
    setDropdownContentHeight(newDropdownHeight);
  };
  useEffect13(() => {
    calculateContentHeight();
    window.addEventListener(`resize`, calculateContentHeight);
    return () => window.removeEventListener(`resize`, calculateContentHeight);
  }, []);
  const isFilteringEnabled = activeCategories.length > 0;
  const selectedCategoryName = isFilteringEnabled ? `Selected` : `All`;
  const selectedCategoryTally = isFilteringEnabled ? numberOfFilteredItems : allPortfolioItems.length;
  const numberOfExitedItems = allPortfolioItems.filter(
    ({ exit }) => exit
  ).length;
  return /* @__PURE__ */ jsxs50(Fragment15, { children: [
    /* @__PURE__ */ jsxs50(
      "button",
      {
        className: dropdownButton2,
        onClick: () => setIsFilterOpen((prev) => !prev),
        children: [
          /* @__PURE__ */ jsx57("div", { className: cn40(`button-text`, filterLabel2), children: "Filter" }),
          /* @__PURE__ */ jsxs50("div", { className: selectedFilter2, children: [
            /* @__PURE__ */ jsx57("span", { className: "button-text", children: `${selectedCategoryName} (${selectedCategoryTally})` }),
            /* @__PURE__ */ jsx57(
              SVG16,
              {
                svg: "chevronDown",
                className: cn40(chevronIcon3, {
                  [active13]: isFilterOpen
                })
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx57("div", { className: dropdownContainer2, children: /* @__PURE__ */ jsx57("div", { className: dropdown2, children: /* @__PURE__ */ jsx57(
      "div",
      {
        className: dropdownContent2,
        style: {
          height: `${isFilterOpen ? dropdownContentHeight : 0}px`
        },
        children: /* @__PURE__ */ jsxs50("ul", { ref: dropdownRef, children: [
          /* @__PURE__ */ jsx57("li", { className: dropdownListItem2, children: /* @__PURE__ */ jsx57(
            CheckboxFilterItem_default,
            {
              active: !isFilteringEnabled,
              text: "All",
              onClick: () => onClickCategory(),
              numberOfItems: allPortfolioItems.length
            }
          ) }),
          /* @__PURE__ */ jsx57("li", { className: dropdownListItem2, children: /* @__PURE__ */ jsx57(
            CheckboxFilterItem_default,
            {
              active: activeCategories.includes(`exit`),
              text: "Exit",
              onClick: () => onClickCategory(`exit`),
              numberOfItems: numberOfExitedItems
            }
          ) }),
          filterOptions.map(({ name: name3, tally }, i) => {
            const isActive = activeCategories.includes(name3);
            return /* @__PURE__ */ jsx57("li", { className: dropdownListItem2, children: /* @__PURE__ */ jsx57(
              CheckboxFilterItem_default,
              {
                active: isActive,
                text: name3,
                onClick: () => onClickCategory(name3),
                numberOfItems: tally
              }
            ) }, i);
          })
        ] })
      }
    ) }) })
  ] });
};
var CheckboxFilter_default = CheckboxFilter;

// src/slices/PortfolioGallery/components/GridGallery/components/HeaderAndCheckboxFilter/index.tsx
import { jsx as jsx58, jsxs as jsxs51 } from "react/jsx-runtime";
var HeaderAndCheckboxFilter = ({
  _rawHeaderText,
  filterOptions,
  activeCategories,
  onClickCategory,
  allPortfolioItems,
  numberOfFilteredItems
}) => {
  const { ref, inView } = useInView10({
    rootMargin: `-90px`
  });
  return /* @__PURE__ */ jsx58("div", { ref, children: /* @__PURE__ */ jsx58(SlicePadding17, { children: /* @__PURE__ */ jsxs51(Grid6, { children: [
    _rawHeaderText && /* @__PURE__ */ jsx58("div", { className: leftColumn4, children: /* @__PURE__ */ jsx58(IntersectionAnimation18, { trigger: inView, animation: "fade", children: /* @__PURE__ */ jsx58(
      PortableTextRenderer9,
      {
        textElement: "h2",
        rawText: _rawHeaderText,
        className: "h1"
      }
    ) }) }),
    /* @__PURE__ */ jsx58("div", { className: rightColumn3, children: /* @__PURE__ */ jsx58(
      IntersectionAnimation18,
      {
        trigger: inView,
        animation: "fade",
        delay: 150,
        children: /* @__PURE__ */ jsx58(
          CheckboxFilter_default,
          {
            filterOptions,
            activeCategories,
            onClickCategory,
            allPortfolioItems,
            numberOfFilteredItems
          }
        )
      }
    ) })
  ] }) }) });
};
var HeaderAndCheckboxFilter_default = HeaderAndCheckboxFilter;

// src/slices/PortfolioGallery/components/GridGallery/index.tsx
import { Fragment as Fragment16, jsx as jsx59, jsxs as jsxs52 } from "react/jsx-runtime";
var GridGallery = ({ portfoliloItems, inView, _rawTextGrid }) => {
  const talliedCountries = [];
  portfoliloItems.forEach(({ country }) => {
    const existingCountry = talliedCountries.find(
      ({ name: name3 }) => name3 === country
    );
    if (existingCountry) {
      existingCountry.tally++;
    } else {
      talliedCountries.push({ name: country, tally: 1 });
    }
  });
  const talliedTypes = [];
  portfoliloItems.forEach(({ type }) => {
    const existingCountry = talliedTypes.find(({ name: name3 }) => name3 === type);
    if (existingCountry) {
      existingCountry.tally++;
    } else {
      talliedTypes.push({ name: type, tally: 1 });
    }
  });
  const talliedFilterItems = [
    ...talliedCountries,
    ...talliedTypes
  ];
  const [activeCategories, setActiveCategories] = useState19([]);
  const isFilteringEnabled = activeCategories?.[0];
  const getFilteredItems = () => {
    if (!isFilteringEnabled) return portfoliloItems;
    const isItemActive = (item) => {
      if (activeCategories.includes(item.country)) return true;
      if (activeCategories.includes(item.type)) return true;
      if (activeCategories.includes(`exit`) && item.exit) return true;
      return false;
    };
    return portfoliloItems.filter(isItemActive);
  };
  const filteredItems = getFilteredItems();
  const ITEM_INCREMENT_NUMBER = 8;
  const [numberOfItemsToShow, setNumberOfItemsToShow] = useState19(
    ITEM_INCREMENT_NUMBER
  );
  const itemsToShow = filteredItems.slice(0, numberOfItemsToShow);
  const allItemsOfCurrentFilterAreShown = numberOfItemsToShow >= filteredItems.length;
  const handleLoadMore = () => {
    lastActionRef.current = `loadMore`;
    setNumberOfItemsToShow((prev) => prev + ITEM_INCREMENT_NUMBER);
  };
  const lastActionRef = useRef12();
  const getTileAnimationDelay = (index) => {
    const DELAY_INCREMENT = 150;
    if (!lastActionRef.current || lastActionRef.current === `filter`) {
      return index * DELAY_INCREMENT;
    }
    const numberOfItemsAlreadyVisible = numberOfItemsToShow - ITEM_INCREMENT_NUMBER;
    return (index - numberOfItemsAlreadyVisible) * DELAY_INCREMENT;
  };
  const onClickCategory = (category2) => {
    lastActionRef.current = `filter`;
    if (!category2) {
      setActiveCategories([]);
      return;
    }
    setActiveCategories((prev) => {
      if (prev.includes(category2)) {
        return prev.filter((activeCategory) => activeCategory !== category2);
      } else {
        return [...prev, category2];
      }
    });
  };
  return /* @__PURE__ */ jsxs52(Fragment16, { children: [
    /* @__PURE__ */ jsx59(
      HeaderAndCheckboxFilter_default,
      {
        _rawHeaderText: _rawTextGrid,
        filterOptions: talliedFilterItems,
        activeCategories,
        onClickCategory,
        allPortfolioItems: portfoliloItems,
        numberOfFilteredItems: filteredItems.length
      }
    ),
    /* @__PURE__ */ jsxs52(SlicePadding18, { config: { paddingTop: "none" }, children: [
      /* @__PURE__ */ jsx59("div", { className: grid5, children: itemsToShow.map((item, i) => /* @__PURE__ */ jsx59(
        IntersectionAnimation19,
        {
          delay: getTileAnimationDelay(i),
          trigger: inView,
          children: /* @__PURE__ */ jsx59(PortfolioItem_default, { item, index: i })
        },
        item._id
      )) }, `key-${activeCategories.join(``)} `),
      !allItemsOfCurrentFilterAreShown && /* @__PURE__ */ jsx59("div", { className: loadMoreButtonContainer, children: /* @__PURE__ */ jsx59(Button7, { iconRight: "plus", onClick: handleLoadMore, children: "Load More" }) })
    ] })
  ] });
};
var GridGallery_default = GridGallery;

// src/slices/PortfolioGallery/components/CarouselGallery/styles.module.ts
var marqueeItem = "styles-module--marqueeItem--14c99";

// src/slices/PortfolioGallery/components/CarouselGallery/index.tsx
import Marquee from "react-fast-marquee";
import { SliceIntroText as SliceIntroText4, SlicePadding as SlicePadding19 } from "~components";
import { Fragment as Fragment17, jsx as jsx60, jsxs as jsxs53 } from "react/jsx-runtime";
var CarouselGallery = ({ portfoliloItems, sliceIntroContent }) => {
  const numberOfDuplications = portfoliloItems.length < 8 ? 2 : 1;
  const duplicatedArray = [];
  for (let i = 0; i < numberOfDuplications; i++) {
    duplicatedArray.push(portfoliloItems);
  }
  const flatDuplicatedArray = duplicatedArray.flat();
  return /* @__PURE__ */ jsxs53(Fragment17, { children: [
    /* @__PURE__ */ jsx60(SliceIntroText4, { content: sliceIntroContent }),
    /* @__PURE__ */ jsx60(
      SlicePadding19,
      {
        config: {
          paddingBottom: "regular",
          paddingTop: "none",
          paddingX: "none"
        },
        children: /* @__PURE__ */ jsx60(Marquee, { gradient: false, speed: 70, children: flatDuplicatedArray.map((item, i) => /* @__PURE__ */ jsx60("div", { className: marqueeItem, children: /* @__PURE__ */ jsx60(PortfolioItem_default, { item, index: i }) }, i)) })
      }
    )
  ] });
};
var CarouselGallery_default = CarouselGallery;

// src/slices/PortfolioGallery/index.tsx
import { useInView as useInView11 } from "react-intersection-observer";
import { jsx as jsx61, jsxs as jsxs54 } from "react/jsx-runtime";
var PortfolioGallery = ({
  data: {
    variant,
    _rawTextGrid,
    textCarousel,
    includeAllItems,
    portfolioItems: sanityItems
  }
}) => {
  const portfolioQueryResults = useStaticQuery3(query3);
  const portfolioItems = includeAllItems ? portfolioQueryResults.allSanityPortfolioItem.nodes : sanityItems;
  const { ref, inView } = useInView11({
    rootMargin: `-90px`,
    triggerOnce: true
  });
  return /* @__PURE__ */ jsxs54("div", { ref, children: [
    variant === `carousel` && textCarousel && /* @__PURE__ */ jsx61(
      CarouselGallery_default,
      {
        portfoliloItems: portfolioItems,
        sliceIntroContent: textCarousel
      }
    ),
    variant === `grid` && /* @__PURE__ */ jsx61(
      GridGallery_default,
      {
        _rawTextGrid,
        portfoliloItems: portfolioItems,
        inView
      }
    )
  ] });
};
var PortfolioGallery_default = PortfolioGallery;
var query3 = graphql3`
  query PortfolioQuery {
    allSanityPortfolioItem {
      nodes {
        _id
        title
        logo {
          asset {
            gatsbyImageData
          }
        }
        country
        type
        category
        exit
        link {
          ... on SanityCaseStudyReference {
            _key
            _type
            caseStudy {
              slug {
                current
              }
            }
          }
          ... on SanityExternalUrl {
            _key
            _type
            url
          }
        }
      }
    }
  }
`;

// src/slices/CallToAdventure/styles.module.ts
var container34 = "styles-module--container--74532";
var desktop2 = "styles-module--desktop--58ac9";
var filled1 = "styles-module--filled1--b0904";
var filled2 = "styles-module--filled2--27ccb";
var filled3 = "styles-module--filled3--c27da";
var graphicGrid = "styles-module--graphicGrid--2d6c8";
var header2 = "styles-module--header--79e44";
var mainContent2 = "styles-module--mainContent--c9eea";
var mainContentContainer = "styles-module--mainContentContainer--61d29";
var scrollingText = "styles-module--scrollingText--83f3f";
var text8 = "styles-module--text--31a66";
var wordScroller = "styles-module--wordScroller--7f672";

// src/slices/CallToAdventure/index.tsx
import cn42 from "classnames";

// src/slices/CallToAdventure/components/WordScroller/styles.module.ts
var container35 = "styles-module--container--ca376";
var down = "styles-module--down--fb698";
var up = "styles-module--up--8a6f3";
var word = "styles-module--word--14bb0";
var words = "styles-module--words--bc6ea";

// src/slices/CallToAdventure/components/WordScroller/index.tsx
import cn41 from "classnames";
import { jsx as jsx62 } from "react/jsx-runtime";
var WordScroller = ({ words: words2, direction = "down", className }) => {
  const doubleWords = [...words2, ...words2, ...words2];
  return /* @__PURE__ */ jsx62("div", { className: cn41(container35, className), children: /* @__PURE__ */ jsx62(
    "div",
    {
      className: cn41(words, {
        [down]: direction === "down",
        [up]: direction === "up"
      }),
      children: doubleWords.map((word2, i) => /* @__PURE__ */ jsx62("div", { className: cn41(`d2`, word), children: word2 }, i))
    }
  ) });
};
var WordScroller_default = WordScroller;

// src/slices/CallToAdventure/index.tsx
import { IntersectionAnimation as IntersectionAnimation20, UniversalLink as UniversalLink2 } from "~components";
import { useInView as useInView12 } from "react-intersection-observer";
import { jsx as jsx63, jsxs as jsxs55 } from "react/jsx-runtime";
var CallToAdventure = ({ data: { header: header5, text: text11, universalLink } }) => {
  const marqueeWords = [
    `Funding`,
    `Support`,
    `Mentorship`,
    `Community`,
    `Advice`
  ];
  const { ref, inView } = useInView12({
    rootMargin: `-90px`,
    triggerOnce: true
  });
  return /* @__PURE__ */ jsxs55("div", { className: container34, ref, children: [
    /* @__PURE__ */ jsxs55("div", { className: scrollingText, children: [
      /* @__PURE__ */ jsx63(WordScroller_default, { className: wordScroller, words: marqueeWords }),
      /* @__PURE__ */ jsx63(
        WordScroller_default,
        {
          className: cn42(wordScroller, desktop2),
          words: marqueeWords,
          direction: "up"
        }
      ),
      /* @__PURE__ */ jsx63(
        WordScroller_default,
        {
          className: cn42(wordScroller, desktop2),
          words: marqueeWords
        }
      )
    ] }),
    /* @__PURE__ */ jsxs55("div", { className: graphicGrid, children: [
      /* @__PURE__ */ jsx63("div", { className: mainContentContainer, children: /* @__PURE__ */ jsxs55("div", { className: mainContent2, children: [
        /* @__PURE__ */ jsx63(IntersectionAnimation20, { trigger: inView, delay: 300, children: /* @__PURE__ */ jsx63("h2", { className: cn42(`h1`, header2), children: header5 }) }),
        /* @__PURE__ */ jsx63(IntersectionAnimation20, { trigger: inView, delay: 450, children: /* @__PURE__ */ jsx63("p", { className: cn42(`b1`, text8), children: text11 }) }),
        universalLink?.link && /* @__PURE__ */ jsx63(IntersectionAnimation20, { trigger: inView, delay: 600, children: /* @__PURE__ */ jsx63(
          UniversalLink2,
          {
            link: universalLink.link,
            jumpToSection: universalLink?.jumpToSection,
            text: universalLink.text
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsx63("div", { className: filled1 }),
      /* @__PURE__ */ jsx63("div", { className: filled2 }),
      /* @__PURE__ */ jsx63("div", { className: filled3 })
    ] })
  ] });
};
var CallToAdventure_default = CallToAdventure;

// src/slices/Syndicate/index.tsx
import { Button as Button8, PortableTextRenderer as PortableTextRenderer11, SlicePadding as SlicePadding21 } from "~components";
import cn45 from "classnames";

// src/slices/Syndicate/styles.module.ts
var buttons2 = "styles-module--buttons--cbf34";
var container36 = "styles-module--container--63f02";
var header3 = "styles-module--header--940c6";
var learnMoreInfo = "styles-module--learnMoreInfo--c8f6d";
var section1 = "styles-module--section1--37aa1";
var section1Content = "styles-module--section1Content--6989d";
var statLabel = "styles-module--statLabel--1957f";
var stats = "styles-module--stats--9c2e8";
var text1 = "styles-module--text1--b8a4d";

// src/slices/Syndicate/components/SyndicateCompanies/index.tsx
import { useEffect as useEffect14 } from "react";
import cn44 from "classnames";
import { PortableTextRenderer as PortableTextRenderer10, SVG as SVG18, SlicePadding as SlicePadding20 } from "~components";

// src/slices/Syndicate/components/SyndicateCompanies/styles.module.ts
var accordionContent = "styles-module--accordionContent--c3786";
var active15 = "styles-module--active--8b287";
var arrowCircleIcon = "styles-module--arrowCircleIcon--db13c";
var arrowIconContainer = "styles-module--arrowIconContainer--cec11";
var carousel = "styles-module--carousel--f2ab6";
var carouselContainer = "styles-module--carouselContainer--047d3";
var carouselContent = "styles-module--carouselContent--0283a";
var carouselSlide = "styles-module--carouselSlide--5a39b";
var container37 = "styles-module--container--ba160";
var flexContainer = "styles-module--flexContainer--48883";
var navButton = "styles-module--navButton--4fe0f";
var navButtons = "styles-module--navButtons--d7c24";
var text9 = "styles-module--text--84816";
var textAccordion = "styles-module--textAccordion--f5324";
var textSection = "styles-module--textSection--c56aa";

// src/slices/Syndicate/components/SyndicateCompanies/index.tsx
import { useAccordion, useEmbla } from "~hooks";

// src/slices/Syndicate/components/SyndicateCompanies/components/CompanySlide/index.tsx
import cn43 from "classnames";

// src/slices/Syndicate/components/SyndicateCompanies/components/CompanySlide/styles.module.ts
var arrowRightIcon = "styles-module--arrowRightIcon--bd8d9";
var desktopLinkLabel = "styles-module--desktopLinkLabel--0bae1";
var hoverBlock = "styles-module--hoverBlock--18d6b";
var hoverBlock1 = "styles-module--hoverBlock1--25f3e";
var hoverBlock2 = "styles-module--hoverBlock2--d7545";
var hoverBlock3 = "styles-module--hoverBlock3--1e360";
var hoverBlock4 = "styles-module--hoverBlock4--2dd5b";
var hoverBlock5 = "styles-module--hoverBlock5--3844b";
var logoLink = "styles-module--logoLink--38c92";
var logoLinkImage = "styles-module--logoLinkImage--bbcf7";

// src/slices/Syndicate/components/SyndicateCompanies/components/CompanySlide/index.tsx
import { GatsbyImage as GatsbyImage10 } from "gatsby-plugin-image";
import { SVG as SVG17 } from "~components";
import { jsx as jsx64, jsxs as jsxs56 } from "react/jsx-runtime";
var CompanySlide = ({ company, className }) => {
  const { link: link5, logo, name: name3 } = company;
  return /* @__PURE__ */ jsxs56(
    "a",
    {
      href: link5,
      target: "_blank",
      rel: "noopener noreferrer",
      className: cn43(className, logoLink),
      children: [
        /* @__PURE__ */ jsx64("div", { className: logoLinkImage, children: /* @__PURE__ */ jsx64(
          GatsbyImage10,
          {
            alt: `Visit ${name3}`,
            image: logo.asset.gatsbyImageData,
            objectFit: "contain",
            style: { height: "100%", width: "100%" }
          }
        ) }),
        /* @__PURE__ */ jsxs56("div", { className: cn43("button-text", desktopLinkLabel), children: [
          "Visit ",
          name3,
          /* @__PURE__ */ jsx64(SVG17, { svg: "arrowRight", className: arrowRightIcon })
        ] }),
        /* @__PURE__ */ jsx64("div", { className: cn43(hoverBlock, hoverBlock1) }),
        /* @__PURE__ */ jsx64("div", { className: cn43(hoverBlock, hoverBlock2) }),
        /* @__PURE__ */ jsx64("div", { className: cn43(hoverBlock, hoverBlock3) }),
        /* @__PURE__ */ jsx64("div", { className: cn43(hoverBlock, hoverBlock4) }),
        /* @__PURE__ */ jsx64("div", { className: cn43(hoverBlock, hoverBlock5) })
      ]
    }
  );
};
var CompanySlide_default = CompanySlide;

// src/slices/Syndicate/components/SyndicateCompanies/index.tsx
import { getThemeColors } from "~utils";
import { jsx as jsx65, jsxs as jsxs57 } from "react/jsx-runtime";
var SyndicateCompanies = ({ _rawDisclaimer, companies }) => {
  const { calculateContentHeight, containerHeight, contentRef } = useAccordion({
    openByDefault: true
  });
  const { activeSlideIndex, emblaRef, scrollNext, scrollPrev } = useEmbla(
    companies.length
  );
  const colorThemes = [
    "Forest Green",
    "Dark Purple",
    "Gold",
    "Dark Blue",
    "Orange",
    "Beige"
  ];
  const getCompanyColors = (index) => {
    const colorTheme = colorThemes[index % colorThemes.length];
    return getThemeColors(colorTheme);
  };
  const { backgroundColor, textColor } = getCompanyColors(activeSlideIndex);
  const style = {
    "--syndicate-background-color": backgroundColor,
    "--syndicate-text-color": textColor
  };
  useEffect14(() => {
    calculateContentHeight();
  }, [activeSlideIndex]);
  return /* @__PURE__ */ jsxs57("div", { style, className: container37, children: [
    /* @__PURE__ */ jsxs57(SlicePadding20, { className: flexContainer, children: [
      /* @__PURE__ */ jsxs57("div", { className: textSection, children: [
        /* @__PURE__ */ jsx65(
          "div",
          {
            style: { height: containerHeight },
            className: textAccordion,
            children: /* @__PURE__ */ jsx65("div", { ref: contentRef, className: accordionContent, children: companies.map((company, i) => /* @__PURE__ */ jsx65(
              "p",
              {
                className: cn44("b1", text9, {
                  [active15]: activeSlideIndex === i
                }),
                children: company.text
              },
              i
            )) })
          }
        ),
        /* @__PURE__ */ jsx65(
          PortableTextRenderer10,
          {
            className: cn44("caption"),
            rawText: _rawDisclaimer
          }
        )
      ] }),
      companies.length > 1 && /* @__PURE__ */ jsxs57("div", { className: navButtons, children: [
        /* @__PURE__ */ jsx65(
          "button",
          {
            disabled: activeSlideIndex === 0,
            onClick: scrollPrev,
            className: navButton,
            children: /* @__PURE__ */ jsx65(SVG18, { svg: "chevronLeft" })
          }
        ),
        /* @__PURE__ */ jsx65(
          "button",
          {
            disabled: activeSlideIndex === companies.length - 1,
            onClick: scrollNext,
            className: navButton,
            children: /* @__PURE__ */ jsx65(SVG18, { svg: "chevronRight" })
          }
        )
      ] })
    ] }),
    companies.length > 1 && /* @__PURE__ */ jsxs57("div", { className: carouselContainer, children: [
      /* @__PURE__ */ jsx65("div", { ref: emblaRef, className: carousel, children: /* @__PURE__ */ jsx65("div", { className: carouselContent, children: companies.map((company, i) => /* @__PURE__ */ jsx65(
        CompanySlide_default,
        {
          company,
          className: carouselSlide
        },
        i
      )) }) }),
      /* @__PURE__ */ jsx65("div", { className: arrowIconContainer, children: /* @__PURE__ */ jsx65(SVG18, { className: arrowCircleIcon, svg: "arrowRightCircle" }) })
    ] }),
    companies.length === 1 && /* @__PURE__ */ jsx65(CompanySlide_default, { company: companies[0] })
  ] });
};
var SyndicateCompanies_default = SyndicateCompanies;

// src/slices/Syndicate/index.tsx
import { jsx as jsx66, jsxs as jsxs58 } from "react/jsx-runtime";
var Syndicate = ({
  data: {
    _rawDisclaimer,
    _rawLearnMoreInfo,
    header: header5,
    stats: stats2,
    syndicateLink,
    companies,
    text: text11
  }
}) => {
  return /* @__PURE__ */ jsxs58("div", { className: container36, children: [
    /* @__PURE__ */ jsx66("div", { className: section1, children: /* @__PURE__ */ jsxs58(SlicePadding21, { className: section1Content, children: [
      /* @__PURE__ */ jsx66("h2", { className: cn45("h1", header3), children: header5 }),
      /* @__PURE__ */ jsxs58("div", { children: [
        /* @__PURE__ */ jsx66("p", { className: cn45("b1", text1), children: text11 }),
        /* @__PURE__ */ jsx66("div", { className: stats, children: stats2.map(({ title: title11, value }, i) => /* @__PURE__ */ jsxs58("div", { children: [
          /* @__PURE__ */ jsx66("div", { className: cn45("caption", statLabel), children: title11 }),
          /* @__PURE__ */ jsx66("div", { className: cn45("h2"), children: value })
        ] }, i)) }),
        /* @__PURE__ */ jsxs58("div", { className: buttons2, children: [
          /* @__PURE__ */ jsx66(Button8, { href: syndicateLink, iconRight: "arrowRight", children: "Join Our Syndicate" }),
          /* @__PURE__ */ jsx66(Button8, { variant: "secondary", to: "/about", children: "About Us" })
        ] }),
        _rawLearnMoreInfo && /* @__PURE__ */ jsx66(
          PortableTextRenderer11,
          {
            className: cn45("caption", learnMoreInfo),
            rawText: _rawLearnMoreInfo
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx66(
      SyndicateCompanies_default,
      {
        _rawDisclaimer,
        companies
      }
    )
  ] });
};
var Syndicate_default = Syndicate;

// src/slices/Typeform/index.tsx
import { useExternalScript } from "~hooks";
import { SliceConfig as SliceConfig7 } from "~components";

// src/slices/Typeform/styles.module.ts
var formContainer = "styles-module--formContainer--4e4a5";
var hideIframeTopBorder = "styles-module--hideIframeTopBorder--bf4c4";

// src/slices/Typeform/index.tsx
import { jsx as jsx67, jsxs as jsxs59 } from "react/jsx-runtime";
var Typeform = ({ data: { formId } }) => {
  useExternalScript("//embed.typeform.com/next/embed.js");
  return /* @__PURE__ */ jsx67(SliceConfig7, { children: /* @__PURE__ */ jsxs59("div", { className: formContainer, children: [
    /* @__PURE__ */ jsx67("div", { "data-tf-live": formId }),
    /* @__PURE__ */ jsx67("div", { className: hideIframeTopBorder })
  ] }) });
};
var Typeform_default = Typeform;

// src/slices/Statistics/styles.module.ts
var container38 = "styles-module--container--f0560";
var fullHeight = "styles-module--fullHeight--88b69";
var graphicContainer3 = "styles-module--graphicContainer--b6660";
var graphicSegment = "styles-module--graphicSegment--2376c";
var header4 = "styles-module--header--13449";
var heroStat = "styles-module--heroStat--14f38";
var heroStatContainer = "styles-module--heroStatContainer--eec26";
var segment1 = "styles-module--segment1--843bd";
var segment2 = "styles-module--segment2--7e219";
var segment3 = "styles-module--segment3--b4c7b";
var segment4 = "styles-module--segment4--68af1";
var statItems = "styles-module--statItems--d5222";
var statsContainer = "styles-module--statsContainer--bc917";
var textContainer2 = "styles-module--textContainer--a466b";

// src/slices/Statistics/index.tsx
import cn47 from "classnames";
import { CountUp as CountUp4, SlicePadding as SlicePadding22 } from "~components";
import { getThemeColors as getThemeColors2 } from "~utils";

// src/slices/Statistics/components/BreakdownItem/index.tsx
import { useState as useState20 } from "react";
import cn46 from "classnames";

// src/slices/Statistics/components/BreakdownItem/styles.module.ts
var background2 = "styles-module--background--3c050";
var statItem = "styles-module--statItem--631bd";
var statText = "styles-module--statText--5d343";
var statTitle = "styles-module--statTitle--58e39";

// src/slices/Statistics/components/BreakdownItem/index.tsx
import { CountUp as CountUp3 } from "~components";
import { useBreakpoints as useBreakpoints11 } from "~hooks";
import { jsx as jsx68, jsxs as jsxs60 } from "react/jsx-runtime";
var BreadkdownItem = ({
  disableProportions,
  stat,
  index,
  hasHeroStatistic
}) => {
  const [isHovered, setIsHovered] = useState20(false);
  const { largeDesktop } = useBreakpoints11();
  const largeTextTypestyle = largeDesktop ? "d2" : "h1";
  const getStatOpacity = (index2) => {
    switch (index2) {
      case 0:
        return 0.8;
      case 1:
        return 0.7;
      case 2:
        return 0.6;
      case 3:
        return 0.5;
      default:
        return 1;
    }
  };
  const getStatFlex = (value2) => {
    if (disableProportions) return 1;
    const numericValue2 = value2.replace(/\D/g, "");
    const parsedValue2 = parseInt(numericValue2);
    return isHovered ? parsedValue2 + 10 : parsedValue2;
  };
  const { title: title11, value } = stat;
  const numericValue = value.replace(/\D/g, "");
  const parsedValue = parseInt(numericValue);
  const nonNumericValue = value.replace(/\d/g, "");
  const largeTextMinWidth = largeDesktop ? 200 : 120;
  const minWidth = hasHeroStatistic ? 120 : largeTextMinWidth;
  return /* @__PURE__ */ jsxs60(
    "div",
    {
      className: statItem,
      style: {
        flex: getStatFlex(value),
        minWidth
      },
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      children: [
        /* @__PURE__ */ jsx68(
          "div",
          {
            className: background2,
            style: {
              opacity: getStatOpacity(index)
            }
          }
        ),
        /* @__PURE__ */ jsxs60("div", { className: statText, children: [
          /* @__PURE__ */ jsx68("h3", { className: cn46("b1", statTitle), children: title11 }),
          hasHeroStatistic ? /* @__PURE__ */ jsx68("div", { className: cn46("h2"), children: value }) : /* @__PURE__ */ jsx68(
            CountUp3,
            {
              number: parsedValue,
              className: largeTextTypestyle,
              postNumberText: nonNumericValue,
              delayMs: index * 200
            }
          )
        ] })
      ]
    }
  );
};
var BreakdownItem_default = BreadkdownItem;

// src/slices/Statistics/index.tsx
import { jsx as jsx69, jsxs as jsxs61 } from "react/jsx-runtime";
var Statistics = ({
  data: {
    disableProportions,
    header: header5,
    colorTheme,
    heroStatistic,
    statistics,
    subheader: subheader2
  }
}) => {
  const { backgroundColor, highlightColor, textColor } = getThemeColors2(colorTheme);
  const themeColorsStyle = {
    "--statistics-background-color": backgroundColor,
    "--statistics-text-color": textColor,
    "--statistics-highlight-color": highlightColor
  };
  return /* @__PURE__ */ jsxs61("div", { className: container38, children: [
    /* @__PURE__ */ jsxs61(SlicePadding22, { className: textContainer2, children: [
      /* @__PURE__ */ jsx69("h2", { className: cn47("h2", header4), children: header5 }),
      subheader2 && /* @__PURE__ */ jsx69("p", { className: cn47("b1"), children: subheader2 })
    ] }),
    /* @__PURE__ */ jsxs61("div", { style: themeColorsStyle, className: statsContainer, children: [
      heroStatistic && /* @__PURE__ */ jsxs61("div", { className: cn47(heroStatContainer), children: [
        /* @__PURE__ */ jsx69(
          CountUp4,
          {
            className: cn47("d1", heroStat),
            number: parseInt(heroStatistic)
          }
        ),
        /* @__PURE__ */ jsxs61("div", { className: graphicContainer3, children: [
          /* @__PURE__ */ jsx69("div", { className: cn47(graphicSegment, segment1) }),
          /* @__PURE__ */ jsx69("div", { className: cn47(graphicSegment, segment2) }),
          /* @__PURE__ */ jsx69("div", { className: cn47(graphicSegment, segment3) }),
          /* @__PURE__ */ jsx69("div", { className: cn47(graphicSegment, segment4) })
        ] })
      ] }),
      statistics && /* @__PURE__ */ jsx69(
        "div",
        {
          className: cn47(statItems, {
            [fullHeight]: !heroStatistic
          }),
          children: statistics.map((stat, i) => /* @__PURE__ */ jsx69(
            BreakdownItem_default,
            {
              disableProportions,
              index: i,
              hasHeroStatistic: heroStatistic ? true : false,
              stat
            },
            i
          ))
        }
      )
    ] })
  ] });
};
var Statistics_default = Statistics;

// src/slices/ToolboxResources/index.tsx
import { useState as useState22 } from "react";
import cn53 from "classnames";

// src/slices/ToolboxResources/styles.module.ts
var cardGrid = "styles-module--cardGrid--74f62";
var filterButtonContainer = "styles-module--filterButtonContainer--44b23";
var filters = "styles-module--filters--12986";
var headerSection = "styles-module--headerSection--74113";
var layoutGrid = "styles-module--layoutGrid--00f73";
var loadButtonContainer = "styles-module--loadButtonContainer--bffa3";
var loadMoreButton2 = "styles-module--loadMoreButton--0b316";
var resultsSummary = "styles-module--resultsSummary--86b88";
var subheader = "styles-module--subheader--5a0ca";
var title9 = "styles-module--title--5c480";

// src/slices/ToolboxResources/index.tsx
import { graphql as graphql4, useStaticQuery as useStaticQuery4 } from "gatsby";
import { Button as Button10, IntersectionAnimation as IntersectionAnimation21, SlicePadding as SlicePadding23 } from "~components";

// src/slices/ToolboxResources/components/ResourceCard/index.tsx
import { useEffect as useEffect15, useState as useState21 } from "react";
import cn48 from "classnames";

// src/slices/ToolboxResources/components/ResourceCard/styles.module.ts
var border = "styles-module--border--fd6ca";
var bottomItems = "styles-module--bottomItems--94008";
var cardContent = "styles-module--cardContent--e8ebd";
var categoryTag = "styles-module--categoryTag--59c49";
var circleIcon = "styles-module--circleIcon--88a82";
var description3 = "styles-module--description--0dfac";
var isInToolbox = "styles-module--isInToolbox--f3495";
var link4 = "styles-module--link--d1b8d";
var linkIcon4 = "styles-module--linkIcon--04cf1";
var subheading1 = "styles-module--subheading1--9423a";
var subheading22 = "styles-module--subheading2--679fb";
var title10 = "styles-module--title--cc269";
var toolboxButton = "styles-module--toolboxButton--079a0";
var toolboxButtonContainer = "styles-module--toolboxButtonContainer--15534";
var toolboxButtonText = "styles-module--toolboxButtonText--397d0";
var tooltip = "styles-module--tooltip--faebe";
var tooltipText = "styles-module--tooltipText--ca01d";
var triangle = "styles-module--triangle--d498f";
var wrapper = "styles-module--wrapper--0f748";

// src/slices/ToolboxResources/components/ResourceCard/index.tsx
import { SVG as SVG19 } from "~components";
import { useApp as useApp4, useBreakpoints as useBreakpoints12 } from "~hooks";
import { jsx as jsx70, jsxs as jsxs62 } from "react/jsx-runtime";
var ResourceCard = ({
  resource: {
    category: category2,
    description: description4,
    subheading1: subheading12,
    subheading2: subheading23,
    name: name3,
    link: link5,
    _id,
    type,
    additionalResources,
    subcategories
  }
}) => {
  const [tooltipText2, setTooltipText] = useState21("Add to Backpack");
  const { largeTablet } = useBreakpoints12();
  const { toolbox, setToolbox, updateNotification } = useApp4();
  const addToToolbox = () => {
    setToolbox((prev) => {
      const existingItem = prev.find((contact) => contact._id === _id);
      if (existingItem) {
        return prev;
      }
      const newItem = {
        _id,
        category: category2,
        description: description4,
        name: name3,
        type,
        additionalResources,
        link: link5,
        subcategories,
        subheading1: subheading12,
        subheading2: subheading23
      };
      return [...prev, newItem];
    });
    updateNotification("Added to your Backpack!");
  };
  const removeFromToolbox = () => {
    setToolbox((prev) => {
      return prev.filter((resource) => resource._id !== _id);
    });
  };
  const handleButtonClick = () => {
    isInToolbox2 ? removeFromToolbox() : addToToolbox();
  };
  const isInToolbox2 = toolbox.find((resource) => resource._id === _id);
  const hasLink = link5?.title && link5.url;
  useEffect15(() => {
    const TIME_FOR_ASIDE_TO_APPEAR = 500;
    if (isInToolbox2) {
      setTimeout(() => {
        setTooltipText("Remove from Backpack");
      }, TIME_FOR_ASIDE_TO_APPEAR);
    } else {
      setTooltipText("Add to Backpack");
    }
  }, [isInToolbox2]);
  return /* @__PURE__ */ jsxs62(
    "div",
    {
      className: cn48(wrapper, {
        [isInToolbox]: isInToolbox2
      }),
      children: [
        /* @__PURE__ */ jsx70("div", { className: border, "aria-hidden": true }),
        /* @__PURE__ */ jsxs62("div", { className: cardContent, children: [
          /* @__PURE__ */ jsxs62("div", { children: [
            /* @__PURE__ */ jsx70("div", { className: cn48("caption", categoryTag), children: category2.title }),
            /* @__PURE__ */ jsx70("h1", { className: cn48(largeTablet ? "h3" : "h2", title10), children: name3 }),
            /* @__PURE__ */ jsx70("div", { className: cn48("b2", subheading1), children: subheading12 }),
            /* @__PURE__ */ jsx70("div", { className: cn48("b2", subheading22), children: subheading23 }),
            /* @__PURE__ */ jsx70("p", { className: cn48("b2", description3), children: description4 })
          ] }),
          /* @__PURE__ */ jsxs62("div", { className: bottomItems, children: [
            hasLink && /* @__PURE__ */ jsxs62(
              "a",
              {
                className: cn48("b2", link4),
                href: link5?.url,
                target: "_blank",
                children: [
                  link5?.title,
                  /* @__PURE__ */ jsx70(SVG19, { svg: "externalLink", className: linkIcon4 })
                ]
              }
            ),
            /* @__PURE__ */ jsx70("div", { className: toolboxButtonContainer, children: /* @__PURE__ */ jsxs62(
              "button",
              {
                onClick: handleButtonClick,
                className: cn48("b2", toolboxButton, {
                  [isInToolbox]: isInToolbox2
                }),
                children: [
                  /* @__PURE__ */ jsx70("span", { className: toolboxButtonText, children: isInToolbox2 ? "Added to Backpack" : "Add to Backpack" }),
                  /* @__PURE__ */ jsx70(
                    SVG19,
                    {
                      svg: isInToolbox2 ? "checkCircle" : "plusCircle",
                      className: circleIcon
                    }
                  ),
                  /* @__PURE__ */ jsxs62("div", { className: tooltip, children: [
                    /* @__PURE__ */ jsx70("span", { className: cn48("b2", tooltipText), children: tooltipText2 }),
                    /* @__PURE__ */ jsx70("div", { className: triangle })
                  ] })
                ]
              }
            ) })
          ] })
        ] })
      ]
    }
  );
};
var ResourceCard_default = ResourceCard;

// src/slices/ToolboxResources/index.tsx
import { useBreakpoints as useBreakpoints13, useIntersectionAnimation } from "~hooks";

// src/slices/ToolboxResources/components/Filters/index.tsx
import cn51 from "classnames";

// src/slices/ToolboxResources/components/Filters/styles.module.ts
var accordion = "styles-module--accordion--2e71b";
var accordionContent2 = "styles-module--accordionContent--35e4b";
var chevronDown = "styles-module--chevronDown--3ce6f";
var expandButton = "styles-module--expandButton--0c4b8";
var filterContainer = "styles-module--filterContainer--456f4";
var filterItem = "styles-module--filterItem--bd6c0";
var isExpanded = "styles-module--isExpanded--7b10b";

// src/slices/ToolboxResources/components/Filters/index.tsx
import { SVG as SVG20 } from "~components";
import { useAccordion as useAccordion2 } from "~hooks";

// src/slices/ToolboxResources/components/FilterItem/index.tsx
import cn49 from "classnames";

// src/slices/ToolboxResources/components/FilterItem/styles.module.ts
var active16 = "styles-module--active--5fea2";
var customBox = "styles-module--customBox--5a475";
var filterItem2 = "styles-module--filterItem--eb66e";
var input2 = "styles-module--input--41e08";
var text10 = "styles-module--text--f65ee";

// src/slices/ToolboxResources/components/FilterItem/index.tsx
import { jsx as jsx71, jsxs as jsxs63 } from "react/jsx-runtime";
var FilterItem = ({ isActive, onChange, text: text11, className }) => {
  return /* @__PURE__ */ jsxs63("label", { className: cn49("button-text", filterItem2, className), children: [
    /* @__PURE__ */ jsx71("div", { className: cn49(customBox, { [active16]: isActive }) }),
    /* @__PURE__ */ jsx71(
      "input",
      {
        className: input2,
        onChange,
        checked: isActive,
        type: "checkbox"
      }
    ),
    /* @__PURE__ */ jsx71("span", { className: text10, children: text11 })
  ] });
};
var FilterItem_default = FilterItem;

// src/slices/ToolboxResources/components/CategoryFilterItem/index.tsx
import { useEffect as useEffect16 } from "react";
import cn50 from "classnames";

// src/slices/ToolboxResources/components/CategoryFilterItem/styles.module.ts
var accordion2 = "styles-module--accordion--6e427";
var subcategoryFilterItem = "styles-module--subcategoryFilterItem--80951";

// src/slices/ToolboxResources/components/CategoryFilterItem/index.tsx
import { jsx as jsx72, jsxs as jsxs64 } from "react/jsx-runtime";
var CategoryFilterItem = ({
  category: { active: active18, title: title11, subcategories },
  className,
  setFilters,
  calculateCategoriesContentHeight
}) => {
  const getAllSubcategoriesUnchecked = (subcategories2) => {
    if (!subcategories2) return [];
    return subcategories2?.map((subcategory3) => ({
      ...subcategory3,
      active: false
    }));
  };
  const updateCategory = (category2, isActive) => ({
    ...category2,
    active: isActive,
    subcategories: isActive ? getAllSubcategoriesUnchecked(category2.subcategories) : category2.subcategories
  });
  const updateCategories = (filters3, isChecked) => ({
    ...filters3,
    categories: filters3.categories.map(
      (category2) => category2.title === title11 ? updateCategory(category2, isChecked) : category2
    )
  });
  const handleCategoryChange = (e) => {
    const isChecked = e.target.checked;
    setFilters((prevFilters) => updateCategories(prevFilters, isChecked));
  };
  const handleSubcategoryChange = (e, subcategoryTitle) => {
    const isChecked = e.target.checked;
    setFilters((prev) => ({
      ...prev,
      categories: prev.categories.map((currentCategory) => {
        if (currentCategory.title === title11) {
          return {
            ...currentCategory,
            subcategories: currentCategory.subcategories?.map(
              (currentSubcategory) => {
                if (currentSubcategory.title === subcategoryTitle) {
                  return {
                    ...currentSubcategory,
                    active: isChecked
                  };
                }
                return currentSubcategory;
              }
            )
          };
        }
        return currentCategory;
      })
    }));
  };
  useEffect16(() => {
    calculateCategoriesContentHeight();
  }, [active18]);
  return /* @__PURE__ */ jsxs64("div", { className: cn50(className), children: [
    /* @__PURE__ */ jsx72(
      FilterItem_default,
      {
        isActive: active18,
        text: title11,
        onChange: handleCategoryChange
      }
    ),
    subcategories?.[0] && active18 && /* @__PURE__ */ jsx72("div", { className: accordion2, children: subcategories.map((subcategory3) => /* @__PURE__ */ jsx72(
      FilterItem_default,
      {
        isActive: subcategory3.active,
        text: subcategory3.title,
        onChange: (e) => handleSubcategoryChange(e, subcategory3.title),
        className: subcategoryFilterItem
      },
      subcategory3.title
    )) })
  ] });
};
var CategoryFilterItem_default = CategoryFilterItem;

// src/slices/ToolboxResources/components/Filters/index.tsx
import { jsx as jsx73, jsxs as jsxs65 } from "react/jsx-runtime";
var Filters = ({
  className,
  filters: { categories, types },
  setFilters
}) => {
  const {
    containerHeight: categoriesContainerHeight,
    contentRef: categoriesContentRef,
    isExpanded: isCategoriesExpanded,
    setIsExpanded: setIsCategoriesExpanded,
    calculateContentHeight: calculateCategoriesContentHeight
  } = useAccordion2();
  const {
    containerHeight: typesContainerHeight,
    contentRef: typesContentRef,
    isExpanded: isTypesExpanded,
    setIsExpanded: setIsTypesExpanded
  } = useAccordion2();
  const areAnyCategoryFiltersActive = categories?.some(
    (category2) => category2.active
  );
  const areAnyTypeFiltersActive = types?.some((type) => type.active);
  const clearAllCategoryFilters = () => {
    setFilters((prev) => ({
      ...prev,
      categories: prev.categories.map((category2) => ({
        ...category2,
        active: false,
        subcategories: category2.subcategories?.map((subcategory3) => ({
          ...subcategory3,
          active: false
        }))
      }))
    }));
  };
  const clearAllTypeFilters = () => {
    setFilters((prev) => ({
      ...prev,
      types: prev.types.map((type) => ({
        ...type,
        active: false
      }))
    }));
  };
  return /* @__PURE__ */ jsxs65("div", { className: cn51(className), children: [
    categories?.[1] && /* @__PURE__ */ jsxs65(
      "div",
      {
        className: cn51(filterContainer, {
          [isExpanded]: isCategoriesExpanded
        }),
        children: [
          /* @__PURE__ */ jsxs65(
            "button",
            {
              onClick: () => setIsCategoriesExpanded((prev) => !prev),
              className: cn51("b1", expandButton),
              children: [
                "Category",
                /* @__PURE__ */ jsx73(SVG20, { svg: "chevronDown", className: chevronDown })
              ]
            }
          ),
          /* @__PURE__ */ jsx73(
            "div",
            {
              className: accordion,
              style: { height: categoriesContainerHeight },
              children: /* @__PURE__ */ jsxs65("div", { ref: categoriesContentRef, className: accordionContent2, children: [
                /* @__PURE__ */ jsx73(
                  FilterItem_default,
                  {
                    className: filterItem,
                    isActive: !areAnyCategoryFiltersActive,
                    onChange: clearAllCategoryFilters,
                    text: "All"
                  }
                ),
                categories.map((category2) => /* @__PURE__ */ jsx73(
                  CategoryFilterItem_default,
                  {
                    className: filterItem,
                    category: category2,
                    setFilters,
                    calculateCategoriesContentHeight
                  },
                  category2.title
                ))
              ] })
            }
          )
        ]
      }
    ),
    types?.[1] && /* @__PURE__ */ jsxs65(
      "div",
      {
        className: cn51(filterContainer, {
          [isExpanded]: isTypesExpanded
        }),
        children: [
          /* @__PURE__ */ jsxs65(
            "button",
            {
              onClick: () => setIsTypesExpanded((prev) => !prev),
              className: cn51("b1", expandButton),
              children: [
                "Types",
                /* @__PURE__ */ jsx73(SVG20, { svg: "chevronDown", className: chevronDown })
              ]
            }
          ),
          /* @__PURE__ */ jsx73(
            "div",
            {
              className: accordion,
              style: { height: typesContainerHeight },
              children: /* @__PURE__ */ jsxs65("div", { ref: typesContentRef, className: accordionContent2, children: [
                /* @__PURE__ */ jsx73(
                  FilterItem_default,
                  {
                    className: filterItem,
                    isActive: !areAnyTypeFiltersActive,
                    onChange: clearAllTypeFilters,
                    text: "All"
                  }
                ),
                types.map((type) => /* @__PURE__ */ jsx73(
                  FilterItem_default,
                  {
                    className: filterItem,
                    isActive: type.active,
                    text: type.title,
                    onChange: (e) => {
                      setFilters((prev) => ({
                        ...prev,
                        types: prev.types.map((t) => {
                          if (t.title === type.title) {
                            return {
                              ...t,
                              active: e.target.checked
                            };
                          }
                          return t;
                        })
                      }));
                    }
                  },
                  type.title
                ))
              ] })
            }
          )
        ]
      }
    )
  ] });
};
var Filters_default = Filters;

// src/slices/ToolboxResources/components/MobileFilterMenu/index.tsx
import cn52 from "classnames";

// src/slices/ToolboxResources/components/MobileFilterMenu/styles.module.ts
var active17 = "styles-module--active--6c2e1";
var cardContent2 = "styles-module--cardContent--9e998";
var container39 = "styles-module--container--734bd";
var contrastBackdrop = "styles-module--contrastBackdrop--19d40";
var filters2 = "styles-module--filters--8d203";
var filtersContainer = "styles-module--filtersContainer--8f50f";
var flexContainer2 = "styles-module--flexContainer--c9a6d";
var headerContainer = "styles-module--headerContainer--e82a9";
var relativeContainer = "styles-module--relativeContainer--83a9d";
var xButton = "styles-module--xButton--33a43";

// src/slices/ToolboxResources/components/MobileFilterMenu/index.tsx
import { Button as Button9, SVG as SVG21 } from "~components";
import { useDisablePageScroll } from "~hooks";
import { jsx as jsx74, jsxs as jsxs66 } from "react/jsx-runtime";
var MobileFilterMenu = ({
  isOpen,
  setIsOpen,
  filters: filters3,
  setFilters
}) => {
  const closeMenu = () => {
    setIsOpen(false);
  };
  useDisablePageScroll(isOpen);
  return /* @__PURE__ */ jsx74("div", { className: cn52(container39, { [active17]: isOpen }), children: /* @__PURE__ */ jsxs66("div", { className: relativeContainer, children: [
    /* @__PURE__ */ jsx74(
      "div",
      {
        "aria-hidden": true,
        onClick: closeMenu,
        className: contrastBackdrop
      }
    ),
    /* @__PURE__ */ jsxs66("div", { className: cardContent2, children: [
      /* @__PURE__ */ jsxs66("div", { className: headerContainer, children: [
        /* @__PURE__ */ jsx74("h2", { className: cn52("h3"), children: "Filters" }),
        /* @__PURE__ */ jsx74(
          "button",
          {
            "aria-label": "Close filters menu",
            onClick: closeMenu,
            className: xButton,
            children: /* @__PURE__ */ jsx74(SVG21, { svg: "x" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs66("div", { className: flexContainer2, children: [
        /* @__PURE__ */ jsx74("div", { className: filtersContainer, children: /* @__PURE__ */ jsx74(
          Filters_default,
          {
            className: filters2,
            filters: filters3,
            setFilters
          }
        ) }),
        /* @__PURE__ */ jsx74(Button9, { fluid: true, onClick: closeMenu, children: "Apply Filters" })
      ] })
    ] })
  ] }) });
};
var MobileFilterMenu_default = MobileFilterMenu;

// src/slices/ToolboxResources/index.tsx
import { Fragment as Fragment18, jsx as jsx75, jsxs as jsxs67 } from "react/jsx-runtime";
var ToolboxResources = ({ data: { header: header5, subheader: subheader2 } }) => {
  const {
    allSanityToolboxResource: { nodes: toolboxResources }
  } = useStaticQuery4(query4);
  const getInitialFilters = () => {
    const categories = [];
    const types = [];
    toolboxResources.forEach((resource) => {
      const typeAlreadyExists = Boolean(
        types.find((type) => type.title === resource.type.title)
      );
      if (!typeAlreadyExists) {
        types.push({
          active: false,
          title: resource.type.title
        });
      }
      const categoryAlreadyExists = Boolean(
        categories.find(
          (category2) => category2.title === resource.category.title
        )
      );
      if (!categoryAlreadyExists) {
        categories.push({
          active: false,
          title: resource.category.title,
          subcategories: []
        });
      }
      resource.subcategories?.forEach((subcategory3) => {
        const category2 = categories.find(
          (category3) => category3.title === resource.category.title
        );
        if (!category2) return;
        const subcategoryAlreadyExists = Boolean(
          category2.subcategories?.find(
            (currentSubcategory) => currentSubcategory.title === subcategory3.title
          )
        );
        if (!subcategoryAlreadyExists) {
          category2.subcategories?.push({
            active: false,
            title: subcategory3.title
          });
        }
      });
    });
    return {
      categories,
      types
    };
  };
  const initialFilters = getInitialFilters();
  const RESULTS_PER_PATCH = 6;
  const [numberOfResultsToDisplay, setNumberOfResultsToDisplay] = useState22(RESULTS_PER_PATCH);
  const [filters3, setFilters] = useState22(initialFilters);
  const [isMobileFilteMenuOpen, setIsMobileFilterMenuOpen] = useState22(false);
  const [staggerTileAnimation, setStaggerTileAnimation] = useState22(true);
  const activeCategoryFilters = filters3.categories.filter((category2) => category2.active).map((category2) => category2.title);
  const activeTypeFilters = filters3.types.filter((type) => type.active).map((type) => type.title);
  const areActiveFilters = activeCategoryFilters?.[0] || activeTypeFilters?.[0];
  const isResourceInActiveSubcategory = (resource) => {
    const resourceCategoryTitle = resource.category.title;
    const resourceCategorySubcategories = filters3.categories.find(
      (category2) => category2.title === resourceCategoryTitle
    )?.subcategories;
    const activeSubcategoryFilters = resourceCategorySubcategories?.filter((subcategory3) => subcategory3.active).map((subcategory3) => subcategory3.title);
    if (!activeSubcategoryFilters?.[0]) return true;
    if (!resource.subcategories?.[0]) return false;
    let isResourceInActiveSubcategory2 = false;
    resource.subcategories?.forEach((subcategory3) => {
      if (activeSubcategoryFilters.includes(subcategory3.title)) {
        isResourceInActiveSubcategory2 = true;
      }
    });
    return isResourceInActiveSubcategory2;
  };
  const filterResourcesByActiveCategory = (resources) => {
    if (!activeCategoryFilters?.[0]) return resources;
    return resources.filter((resource) => {
      const isResourceCategoryActive = activeCategoryFilters.includes(
        resource.category.title
      );
      if (!isResourceCategoryActive) return false;
      return isResourceInActiveSubcategory(resource);
    });
  };
  const filterResourcesByActiveType = (resources) => {
    if (!activeTypeFilters?.[0]) return resources;
    return resources.filter(
      (resource) => activeTypeFilters.includes(resource.type.title)
    );
  };
  const getFilteredResources = () => {
    if (!areActiveFilters) return toolboxResources;
    const resourcesMatchingCategoryFilters = filterResourcesByActiveCategory(toolboxResources);
    const resourcesMatchingTypeFilters = filterResourcesByActiveType(
      resourcesMatchingCategoryFilters
    );
    return resourcesMatchingTypeFilters;
  };
  const filteredResources = getFilteredResources();
  const { smallDesktop } = useBreakpoints13();
  const showMoreResults = () => {
    setStaggerTileAnimation(true);
    setNumberOfResultsToDisplay((prev) => prev + RESULTS_PER_PATCH);
  };
  const { inView, ref } = useIntersectionAnimation();
  const calculateDelay = (index) => {
    return staggerTileAnimation ? (index - (numberOfResultsToDisplay - RESULTS_PER_PATCH)) * 150 : 0;
  };
  const handleUpdateFilters = (setStateAction) => {
    setFilters(setStateAction);
    setStaggerTileAnimation(false);
  };
  return /* @__PURE__ */ jsxs67(Fragment18, { children: [
    /* @__PURE__ */ jsxs67(SlicePadding23, { children: [
      /* @__PURE__ */ jsxs67("div", { className: headerSection, children: [
        /* @__PURE__ */ jsx75("h2", { className: cn53("h2", title9), children: header5 }),
        /* @__PURE__ */ jsx75("p", { className: cn53("h3", subheader), children: subheader2 })
      ] }),
      /* @__PURE__ */ jsx75("div", { className: filterButtonContainer, children: /* @__PURE__ */ jsx75(Button10, { onClick: () => setIsMobileFilterMenuOpen(true), fluid: true, children: "Filter" }) }),
      /* @__PURE__ */ jsxs67("div", { className: layoutGrid, children: [
        /* @__PURE__ */ jsx75("div", { children: /* @__PURE__ */ jsx75(
          Filters_default,
          {
            setFilters: handleUpdateFilters,
            filters: filters3,
            className: filters
          }
        ) }),
        /* @__PURE__ */ jsxs67("div", { children: [
          /* @__PURE__ */ jsx75("div", { ref, className: cardGrid, children: filteredResources.slice(0, numberOfResultsToDisplay).map((resource, i) => /* @__PURE__ */ jsx75(
            IntersectionAnimation21,
            {
              animation: "fadeGrow",
              delay: calculateDelay(i),
              trigger: inView,
              children: /* @__PURE__ */ jsx75(ResourceCard_default, { resource })
            },
            resource._id
          )) }),
          /* @__PURE__ */ jsxs67("div", { className: loadButtonContainer, children: [
            numberOfResultsToDisplay < filteredResources.length && /* @__PURE__ */ jsx75(
              Button10,
              {
                onClick: showMoreResults,
                className: loadMoreButton2,
                fluid: !smallDesktop,
                children: "Load More"
              }
            ),
            /* @__PURE__ */ jsxs67("p", { className: cn53("b2", resultsSummary), children: [
              "Displaying",
              " ",
              Math.min(numberOfResultsToDisplay, filteredResources.length),
              " ",
              "of ",
              filteredResources.length,
              " results"
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx75(
      MobileFilterMenu_default,
      {
        setIsOpen: setIsMobileFilterMenuOpen,
        isOpen: isMobileFilteMenuOpen,
        filters: filters3,
        setFilters: handleUpdateFilters
      }
    )
  ] });
};
var ToolboxResources_default = ToolboxResources;
var query4 = graphql4`
  query ToolboxResourcesQuery {
    allSanityToolboxResource(sort: { orderRank: ASC }) {
      nodes {
        ...ToolboxResourceFragment
      }
    }
  }
`;

// src/slices/index.ts
var slices = Object.freeze({
  Hero: Hero_default,
  TextArticle: TextArticle_default,
  Typeform: Typeform_default,
  FeaturedText: FeaturedText_default,
  SimpleImage: SimpleImage_default,
  Syndicate: Syndicate_default,
  Video: Video_default,
  ImageGrid: ImageGrid_default,
  HomepageAtf: HomepageAtf_default,
  LinkTiles: LinkTiles_default,
  Advisors: Advisors_default,
  NetworkPreview: NetworkPreview_default,
  FounderProfiles: FounderProfiles_default,
  FeaturedCaseStudy: FeaturedCaseStudy_default,
  CountUp: CountUp_default,
  InvestmentAreas: InvestmentAreas_default,
  Entities: Entities_default,
  Quote: Quote_default,
  Contact: Contact_default,
  Scratchie: Scratchie_default,
  PortfolioGallery: PortfolioGallery_default,
  CallToAdventure: CallToAdventure_default,
  Statistics: Statistics_default,
  ToolboxResources: ToolboxResources_default
});
var index_default = slices;
export {
  index_default as default
};
