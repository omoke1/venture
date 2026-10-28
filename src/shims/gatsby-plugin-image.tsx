// @ts-nocheck
import React from "react";

const STATIC_FLAG_MAP: Record<string, { src: string; width: number; height: number; bg: string }> = {
  "./flags/flag-aboriginal.png": {
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAPCAMAAADJev/pAAAAMFBMVEXKAADKAADMAADMAADYAgAAAAD//gB/AAD46gAmJgCoqADkegCbNABRUQC/iADQxgCI6WQZAAAAA3RSTlPExsPzHRmAAAAACXBIWXMAACxLAAAsSwGlPZapAAAAV0lEQVR42qWNSRKAMAgEUSJCiP//rpWFBC082SdmugA4PoBfQi4JRSaiHIjaOzOFtJ7YrsE5KF1QGRmSwX3DIqChTajFJVCZePZeICY3P4RnPX8BMft2A04RBmNkDXIRAAAAAElFTkSuQmCC",
    width: 97,
    height: 59,
    bg: "#080808"
  },
  "./flags/flag-torres-strait.png": {
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGkAAAA8CAMAAABSH2RMAAAAOVBMVEUALI0Ao2AAAAAApWIFL1sAALD///8AALAAAQoDA6gCAxYCQyoGPCVnZ9A0NMCRkt3l5vfExOwVFbbH/Q0XAAAACnRSTlMg////nv//39/fZNuJ8wAAAAlwSFlzAAAsSwAALEsBpT2WqQAAAa9JREFUeNrtmNluAyEMRWkj6JJ6/f+PLbPCTBVkGgepVfwyhAef2L4yhhBextglPEl/hHQZZCFcB1kIr2PsfSTpc4xlUuw1jb+xj24SEmOMINAJfOsjKUhKCWKcPoKPI82clCgqz4seVg8JF04GKK6rRPoAEvDmnhG2pT0sO6k4z4WismZ0JtWgRJy6UVYS1qDEx1/qSFJJDSNHErRAtvzZSO2QbEHZSO2QbJWykejgVwCAjlGCF6l2O3UFrDuGMX0mkhZV8/zvCU+RihMJCwkXgdApqexFOtUDN8/yOBJuseBJk/4koGw5mTJ9S0tn9zqhUq1Cd1LRHpZjalIheGuvVB73CEXrOpF7j8A9QjkoAtz7Hi764LV/7/tufQ9rEuXZIWcQKpL4nxo4JY/mHalIfqfGXqhMQlhnTC0k8CPhoUec6yfqOLFIi+Q5R2w+0bJ757zHt0kSXUl0mwSeJG1lj9F/3jvPQGu3ZTeVL0eFEP5Qs+Iyonv1vQxigtvXRLagLKTc6NqX2ulOCveTlCx3ZyTwvVHf8XbwNvLl4z++G32NsevIl8Tni++TVJO+AYv+ec0fDUreAAAAAElFTkSuQmCC",
    width: 98,
    height: 59,
    bg: "#189868"
  },
  "./flags/flag-pride.png": {
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGkAAAA7CAMAAABPGlT0AAAAhFBMVEVnB3bVBgXwnQIKvwH/9/cJGZnl/wRMaXH39ve9w9p2AIpgORQCAQF01+77+fb/r8hxA4riUgnsrgULfD8IvwIoxgkUEA7+sMiIx9pQJhBhWC/8tMtofnTDwdj2s8v62OH76e7tmwkMpwnk+wrj+Qvb8QujBkC2HAoXEzxSw31hOktQg1Ol3HKrAAAACnRSTlMg////IP//ACAgfOibBAAAAAlwSFlzAAAsSwAALEsBpT2WqQAAAW5JREFUeNq92GtWwjAQBeAo1hhKbVUkQOUlsP8tmme1gZzxNDNzu4Dv3JnMnwrVrLe1y2bhs3mgiBSq4aGc1DQMVJAYWgWJgYoSPWWkNQ9lpD0PZSSdpd4wY6S23e/uU/XpES9W0m0fWt3c1QlXMskNELFVkBgo+yI8Rb0rKZ4OltKaupUUL68HzTFAK3lKE1NOiq363f3HjkJ5KVBaZ+6qfi9PkKABbi/PpYlSbEVHDVK6qxvqiiaBAzyjSeAAz2gSdMJluxpJcYDZu7qgSbFV7q5KWiUS4V2lEkhd0aRj7+cXV/XlpXrlpdXn1KQSBH3PlhOTSCC0nE3NWDr2mgoaS3AjJImy0Uj6x2PAkUhH91cifHVjiRyKEvQYPsrjJahRhRAnQY0qLImjkZMAaFGhSSyNrKR4oCjRQ0Gi3tEgMTTyEgtkpSzUdd0c7euMlIXmqBn+ulFDvxI1NEjkUJTooSAxQF7igIwklRIckT9SL9GMKJ49kgAAAABJRU5ErkJggg==",
    width: 105,
    height: 59,
    bg: "#e89808"
  }
};

export const GatsbyImage: React.FC<{
  image: any;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
  objectFit?: React.CSSProperties["objectFit"];
  imgStyle?: React.CSSProperties;
}> = ({ image, alt = "", className = "", style, objectFit = "cover", imgStyle }) => {
  const data = image?.asset?.gatsbyImageData || image;
  const fallback = data?.images?.fallback;
  const src = fallback?.src || "";
  const width = data?.width || 800;
  const height = data?.height || 600;
  const bg = data?.backgroundColor || "transparent";

  const svgSizer = `data:image/svg+xml;charset=utf-8,%3Csvg height='${height}' width='${width}' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E`;

  return (
    <div
      data-gatsby-image-wrapper=""
      className={`gatsby-image-wrapper gatsby-image-wrapper-constrained ${className}`.trim()}
      style={{ backgroundColor: bg, ...style }}
    >
      <div style={{ maxWidth: `${width}px`, display: "block" }}>
        <img
          alt=""
          role="presentation"
          aria-hidden="true"
          src={svgSizer}
          style={{ maxWidth: "100%", display: "block", position: "static" }}
        />
      </div>
      {src && (
        <img
          data-gatsby-image-ssr=""
          data-main-image=""
          src={src}
          alt={alt}
          decoding="async"
          loading="lazy"
          referrerPolicy="no-referrer"
          style={{
            opacity: 1,
            objectFit,
            ...imgStyle
          }}
        />
      )}
    </div>
  );
};

export const StaticImage: React.FC<{
  src: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
}> = ({ src, alt = "", className = "", style }) => {
  const mapped = STATIC_FLAG_MAP[src] || {
    src,
    width: 100,
    height: 60,
    bg: "transparent"
  };
  const svgSizer = `data:image/svg+xml;charset=utf-8,%3Csvg height='${mapped.height}' width='${mapped.width}' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E`;

  return (
    <div
      data-gatsby-image-wrapper=""
      className={`gatsby-image-wrapper gatsby-image-wrapper-constrained ${className}`.trim()}
      style={style}
    >
      <div style={{ maxWidth: `${mapped.width}px`, display: "block" }}>
        <img
          alt=""
          role="presentation"
          aria-hidden="true"
          src={svgSizer}
          style={{ maxWidth: "100%", display: "block", position: "static" }}
        />
      </div>
      <img
        data-gatsby-image-ssr=""
        data-main-image=""
        src={mapped.src}
        alt={alt}
        decoding="async"
        loading="lazy"
        style={{ opacity: 1 }}
      />
    </div>
  );
};
