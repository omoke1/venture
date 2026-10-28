// @ts-nocheck
// src/pages/404/styles.module.ts
var container = "styles-module--container--27aac";
var content = "styles-module--content--8d582";
var description = "styles-module--description--4ff46";
var floatingBlock = "styles-module--floatingBlock--ca675";
var floatingBlock1 = "styles-module--floatingBlock1--5d67f";
var floatingBlock10 = "styles-module--floatingBlock10--26cac";
var floatingBlock2 = "styles-module--floatingBlock2--729cb";
var floatingBlock3 = "styles-module--floatingBlock3--ce4a8";
var floatingBlock4 = "styles-module--floatingBlock4--18be8";
var floatingBlock5 = "styles-module--floatingBlock5--3177d";
var floatingBlock6 = "styles-module--floatingBlock6--b7262";
var floatingBlock7 = "styles-module--floatingBlock7--10a81";
var floatingBlock8 = "styles-module--floatingBlock8--2f97a";
var floatingBlock9 = "styles-module--floatingBlock9--c74f0";
var noWrap = "styles-module--noWrap--eeb03";
var title = "styles-module--title--68013";

// src/pages/404/index.tsx
import cn from "classnames";
import { Button, SEO } from "~components";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var FourOhFour = (props) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: container, children: [
    /* @__PURE__ */ jsxs("div", { className: content, children: [
      /* @__PURE__ */ jsx("div", { className: "b1", children: "404" }),
      /* @__PURE__ */ jsx("h1", { className: cn(`h1`, title), children: "This is not awesome." }),
      /* @__PURE__ */ jsxs("p", { className: cn(`b1`, description), children: [
        "But failure is a massive part of the story when it comes to building",
        " ",
        /* @__PURE__ */ jsx("span", { className: noWrap, children: "something new." }),
        " ",
        /* @__PURE__ */ jsx("span", { className: noWrap, children: "The important" }),
        " thing is that",
        " ",
        /* @__PURE__ */ jsx("span", { className: noWrap, children: "we learn." })
      ] }),
      /* @__PURE__ */ jsx(Button, { iconRight: "arrowRight", to: "/", children: "Back to home" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: cn(floatingBlock, floatingBlock6) }),
    /* @__PURE__ */ jsx("div", { className: cn(floatingBlock, floatingBlock1) }),
    /* @__PURE__ */ jsx("div", { className: cn(floatingBlock, floatingBlock2) }),
    /* @__PURE__ */ jsx("div", { className: cn(floatingBlock, floatingBlock3) }),
    /* @__PURE__ */ jsx("div", { className: cn(floatingBlock, floatingBlock4) }),
    /* @__PURE__ */ jsx("div", { className: cn(floatingBlock, floatingBlock5) }),
    /* @__PURE__ */ jsx("div", { className: cn(floatingBlock, floatingBlock7) }),
    /* @__PURE__ */ jsx("div", { className: cn(floatingBlock, floatingBlock8) }),
    /* @__PURE__ */ jsx("div", { className: cn(floatingBlock, floatingBlock9) }),
    /* @__PURE__ */ jsx("div", { className: cn(floatingBlock, floatingBlock10) })
  ] }) });
};
var index_default = FourOhFour;
var Head = () => {
  return /* @__PURE__ */ jsx(SEO, { pageTitle: "404" });
};
export {
  Head,
  index_default as default
};
