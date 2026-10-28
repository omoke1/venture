// @ts-nocheck
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/components/Common/Button/index.tsx
import cn from "classnames";
import { Link } from "gatsby";

// src/components/Common/Button/styles.module.ts
var styles_module_exports = {};
__export(styles_module_exports, {
  button: () => button,
  content: () => content,
  disabled: () => disabled,
  fluid: () => fluid,
  icon: () => icon,
  left: () => left,
  light: () => light,
  loader: () => loader,
  loaderContainer: () => loaderContainer,
  loading: () => loading,
  primary: () => primary,
  right: () => right,
  secondary: () => secondary,
  spin: () => spin,
  text: () => text
});
var button = "styles-module--button--55bbd";
var content = "styles-module--content--f35e3";
var disabled = "styles-module--disabled--77e92";
var fluid = "styles-module--fluid--ff499";
var icon = "styles-module--icon--d808d";
var left = "styles-module--left--803e3";
var light = "styles-module--light--659b4";
var loader = "styles-module--loader--48112";
var loaderContainer = "styles-module--loaderContainer--ec53c";
var loading = "styles-module--loading--0d47d";
var primary = "styles-module--primary--d3b23";
var right = "styles-module--right--61b01";
var secondary = "styles-module--secondary--d4388";
var spin = "styles-module--spin--d36e5";
var text = "styles-module--text--214b9";

// src/components/Common/Button/index.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var Button = ({
  children,
  variant = `primary`,
  buttonType = `button`,
  to,
  href,
  iconLeft,
  iconRight,
  color,
  lightTheme,
  disabled: disabled4,
  fluid: fluid2,
  loading: loading2,
  display,
  onClick,
  className
}) => {
  let BtnElement;
  if (display) BtnElement = `div`;
  if (to) BtnElement = Link;
  else if (href) BtnElement = `a`;
  else BtnElement = `button`;
  return /* @__PURE__ */ jsxs(
    BtnElement,
    {
      type: to || href ? `` : buttonType,
      href,
      target: "_blank",
      rel: "noreferrer noopener",
      disabled: disabled4,
      onClick: () => onClick && onClick(),
      tabIndex: disabled4 ? `-1` : 0,
      to,
      style: { backgroundColor: color },
      className: cn(button, className, styles_module_exports[variant], {
        [light]: lightTheme,
        [fluid]: fluid2,
        [loading]: loading2,
        [disabled]: disabled4
      }),
      children: [
        /* @__PURE__ */ jsxs("div", { className: content, children: [
          iconLeft && /* @__PURE__ */ jsx(SVG_default, { svg: iconLeft, className: cn(icon, left) }),
          /* @__PURE__ */ jsx("span", { className: variant === `caption` ? `caption` : `button-text`, children }),
          iconRight && /* @__PURE__ */ jsx(SVG_default, { svg: iconRight, className: cn(icon, right) })
        ] }),
        !display && /* @__PURE__ */ jsx("div", { className: loaderContainer, children: /* @__PURE__ */ jsx("div", { className: loader }) })
      ]
    }
  );
};
var Button_default = Button;

// src/assets/svg/arrow-down.tsx
import * as React from "react";
var _path;
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var SvgArrowDown = function SvgArrowDown2(props) {
  return /* @__PURE__ */ React.createElement("svg", _extends({
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path || (_path = /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 0a1 1 0 0 1 1 1v11.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 1.414-1.414L7 12.586V1a1 1 0 0 1 1-1Z",
    fill: "currentColor"
  })));
};

// src/assets/svg/arrow-left.tsx
import * as React2 from "react";
var _path2;
function _extends2() {
  _extends2 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends2.apply(this, arguments);
}
var SvgArrowLeft = function SvgArrowLeft2(props) {
  return /* @__PURE__ */ React2.createElement("svg", _extends2({
    viewBox: "0 0 18 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path2 || (_path2 = /* @__PURE__ */ React2.createElement("path", {
    d: "M8.5.293.793 8l1 1h15.414V7H4.621l5.293-5.293L8.5.293ZM6.621 11H3.793L8.5 15.707l1.414-1.414L6.621 11Z",
    fill: "currentColor"
  })));
};

// src/assets/svg/arrow-right.tsx
import * as React3 from "react";
var _path3;
function _extends3() {
  _extends3 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends3.apply(this, arguments);
}
var SvgArrowRight = function SvgArrowRight2(props) {
  return /* @__PURE__ */ React3.createElement("svg", _extends3({
    viewBox: "0 0 18 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path3 || (_path3 = /* @__PURE__ */ React3.createElement("path", {
    d: "M14.207 11H11.38l-3.293 3.293L9.5 15.707 14.207 11ZM16.207 9H.793V7h12.586L8.086 1.707 9.5.293 17.207 8l-1 1Z",
    fill: "currentColor"
  })));
};

// src/assets/svg/chevron-down.tsx
import * as React4 from "react";
var _path4;
function _extends4() {
  _extends4 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends4.apply(this, arguments);
}
var SvgChevronDown = function SvgChevronDown2(props) {
  return /* @__PURE__ */ React4.createElement("svg", _extends4({
    viewBox: "0 0 14 8",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path4 || (_path4 = /* @__PURE__ */ React4.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M.293.293a1 1 0 0 1 1.414 0L7 5.586 12.293.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414Z",
    fill: "currentColor"
  })));
};

// src/assets/svg/chevron-left.tsx
import * as React5 from "react";
var _path5;
function _extends5() {
  _extends5 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends5.apply(this, arguments);
}
var SvgChevronLeft = function SvgChevronLeft2(props) {
  return /* @__PURE__ */ React5.createElement("svg", _extends5({
    viewBox: "0 0 10 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path5 || (_path5 = /* @__PURE__ */ React5.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "m8.147 15.56 1.414-1.414-6.293-6.293L9.56 1.562 8.147.146.439 7.854l7.708 7.707Z",
    fill: "currentColor"
  })));
};

// src/assets/svg/chevron-right.tsx
import * as React6 from "react";
var _path6;
function _extends6() {
  _extends6 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends6.apply(this, arguments);
}
var SvgChevronRight = function SvgChevronRight2(props) {
  return /* @__PURE__ */ React6.createElement("svg", _extends6({
    viewBox: "0 0 10 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path6 || (_path6 = /* @__PURE__ */ React6.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1.853.146.44 1.561l6.293 6.293L.44 14.146l1.414 1.415 7.708-7.707L1.853.146Z",
    fill: "currentColor"
  })));
};

// src/assets/svg/looking-glass.tsx
import * as React7 from "react";
var _path7;
function _extends7() {
  _extends7 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends7.apply(this, arguments);
}
var SvgLookingGlass = function SvgLookingGlass2(props) {
  return /* @__PURE__ */ React7.createElement("svg", _extends7({
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path7 || (_path7 = /* @__PURE__ */ React7.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.333 8.166a5.833 5.833 0 1 1 10.035 4.047.85.85 0 0 0-.154.154 5.833 5.833 0 0 1-9.88-4.201Zm10.515 5.86a7.5 7.5 0 1 1 1.179-1.178l3.062 3.062a.833.833 0 1 1-1.178 1.179l-3.063-3.063Z",
    fill: "currentColor"
  })));
};

// src/assets/svg/minus.tsx
import * as React8 from "react";
var _path8;
function _extends8() {
  _extends8 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends8.apply(this, arguments);
}
var SvgMinus = function SvgMinus2(props) {
  return /* @__PURE__ */ React8.createElement("svg", _extends8({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path8 || (_path8 = /* @__PURE__ */ React8.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z",
    fill: "currentColor"
  })));
};

// src/assets/svg/plus.tsx
import * as React9 from "react";
var _path9;
function _extends9() {
  _extends9 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends9.apply(this, arguments);
}
var SvgPlus = function SvgPlus2(props) {
  return /* @__PURE__ */ React9.createElement("svg", _extends9({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path9 || (_path9 = /* @__PURE__ */ React9.createElement("path", {
    d: "M20 11h-7V4h-2v7H4v2h16v-2ZM11 15v5h2v-5h-2Z",
    fill: "currentColor"
  })));
};

// src/assets/svg/warning-triangle.tsx
import * as React10 from "react";
var _path10;
function _extends10() {
  _extends10 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends10.apply(this, arguments);
}
var SvgWarningTriangle = function SvgWarningTriangle2(props) {
  return /* @__PURE__ */ React10.createElement("svg", _extends10({
    viewBox: "0 0 16 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path10 || (_path10 = /* @__PURE__ */ React10.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.019.52a2 2 0 0 1 2.691.706l.002.004 5.647 9.426.005.01a2 2 0 0 1-1.71 3H2.347a2 2 0 0 1-1.71-3l.005-.01 5.648-9.43A2 2 0 0 1 7.02.521ZM8 1.598a.667.667 0 0 0-.569.32l-5.642 9.42a.666.666 0 0 0 .569.995h11.285a.667.667 0 0 0 .569-.996L8.57 1.918v-.001a.667.667 0 0 0-.57-.32Zm0 2.735c.368 0 .667.299.667.667v2.667a.667.667 0 1 1-1.333 0V4.998c0-.368.298-.667.666-.667Zm-.666 6c0-.368.298-.667.666-.667h.007a.667.667 0 0 1 0 1.334H8a.667.667 0 0 1-.666-.667Z",
    fill: "currentColor"
  })));
};

// src/assets/svg/x.tsx
import * as React11 from "react";
var _path11;
function _extends11() {
  _extends11 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends11.apply(this, arguments);
}
var SvgX = function SvgX2(props) {
  return /* @__PURE__ */ React11.createElement("svg", _extends11({
    viewBox: "0 0 14 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path11 || (_path11 = /* @__PURE__ */ React11.createElement("path", {
    d: "m.293 1.707 12 12 1.414-1.414-5.292-5.292 5.292-5.292L12.293.295 7 5.587 1.707.293.293 1.707ZM5.707 9.707l-4 4-1.414-1.414 4-4 1.414 1.414Z",
    fill: "currentColor"
  })));
};

// src/assets/svg/arrow-right-circle.tsx
import * as React12 from "react";
var _path12;
function _extends12() {
  _extends12 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends12.apply(this, arguments);
}
var SvgArrowRightCircle = function SvgArrowRightCircle2(props) {
  return /* @__PURE__ */ React12.createElement("svg", _extends12({
    viewBox: "0 0 30 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path12 || (_path12 = /* @__PURE__ */ React12.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15 0C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15ZM6.793 16h15.414l1-1L15.5 7.293l-1.414 1.414L19.379 14H6.793v2Zm10.586 2h2.828L15.5 22.707l-1.414-1.414L17.379 18Z",
    fill: "currentColor"
  })));
};

// src/assets/svg/contacts.tsx
import * as React13 from "react";
var _path13;
var _path22;
var _path32;
function _extends13() {
  _extends13 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends13.apply(this, arguments);
}
var SvgContacts = function SvgContacts2(props) {
  return /* @__PURE__ */ React13.createElement("svg", _extends13({
    viewBox: "0 0 28 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path13 || (_path13 = /* @__PURE__ */ React13.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
    fill: "currentColor"
  })), _path22 || (_path22 = /* @__PURE__ */ React13.createElement("path", {
    d: "M14 16v-5H4v5h2v-3h6v3h2ZM24 9h-8V7h8v2ZM16 13h8v-2h-8v2Z",
    fill: "currentColor"
  })), _path32 || (_path32 = /* @__PURE__ */ React13.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M28 20V0H0v18h2v2h26Zm-2-2H2V2h24v16Z",
    fill: "currentColor"
  })));
};

// src/assets/svg/hamburger.tsx
import * as React14 from "react";
var _path14;
function _extends14() {
  _extends14 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends14.apply(this, arguments);
}
var SvgHamburger = function SvgHamburger2(props) {
  return /* @__PURE__ */ React14.createElement("svg", _extends14({
    viewBox: "0 0 20 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path14 || (_path14 = /* @__PURE__ */ React14.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20 2H0V0h20v2ZM20 8H0V6h20v2ZM20 14H2v-2h18v2Z",
    fill: "currentColor"
  })));
};

// src/assets/svg/pause-circle.tsx
import * as React15 from "react";
var _g;
function _extends15() {
  _extends15 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends15.apply(this, arguments);
}
var SvgPauseCircle = function SvgPauseCircle2(props) {
  return /* @__PURE__ */ React15.createElement("svg", _extends15({
    viewBox: "0 0 30 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _g || (_g = /* @__PURE__ */ React15.createElement("g", {
    clipPath: "url(#pause-circle_svg__clip0_9480_33225)"
  }, /* @__PURE__ */ React15.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15 30c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15ZM12 8h-2v14h2V8Zm8 0h-2v14h2V8Z",
    fill: "currentColor"
  }))));
};

// src/assets/svg/play-circle.tsx
import * as React16 from "react";
var _g2;
function _extends16() {
  _extends16 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends16.apply(this, arguments);
}
var SvgPlayCircle = function SvgPlayCircle2(props) {
  return /* @__PURE__ */ React16.createElement("svg", _extends16({
    viewBox: "0 0 30 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _g2 || (_g2 = /* @__PURE__ */ React16.createElement("g", {
    clipPath: "url(#play-circle_svg__clip0_8808_58115)"
  }, /* @__PURE__ */ React16.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15 0C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15Zm9.27 15.001-14.455 7.95v-11.31l2 1.1v6.828L20.12 15l-8.305-4.568-2-1.088V7.05L24.27 15Z",
    fill: "currentColor"
  }))));
};

// src/assets/svg/plus-circle.tsx
import * as React17 from "react";
var _path15;
function _extends17() {
  _extends17 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends17.apply(this, arguments);
}
var SvgPlusCircle = function SvgPlusCircle2(props) {
  return /* @__PURE__ */ React17.createElement("svg", _extends17({
    viewBox: "0 0 28 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path15 || (_path15 = /* @__PURE__ */ React17.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14 0C6.268 0 0 6.268 0 14s6.268 14 14 14 14-6.268 14-14S21.732 0 14 0Zm.933 13.067h6.534v1.866H6.533v-1.866h6.534V6.533h1.866v6.534Zm-1.866 8.4V16.8h1.866v4.667h-1.866Z",
    fill: "currentColor"
  })));
};

// src/assets/svg/reset.tsx
import * as React18 from "react";
var _path16;
function _extends18() {
  _extends18 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends18.apply(this, arguments);
}
var SvgReset = function SvgReset2(props) {
  return /* @__PURE__ */ React18.createElement("svg", _extends18({
    viewBox: "0 0 30 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path16 || (_path16 = /* @__PURE__ */ React18.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15 0C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15Zm8.303 6.902v6.655h-6.655v-2h3.267a6 6 0 1 0 .839 5.151l1.919.564a8 8 0 1 1-1.37-7.2v-3.17h2Z",
    fill: "currentColor"
  })));
};

// src/assets/svg/triangle.tsx
import * as React19 from "react";
var _path17;
function _extends19() {
  _extends19 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends19.apply(this, arguments);
}
var SvgTriangle = function SvgTriangle2(props) {
  return /* @__PURE__ */ React19.createElement("svg", _extends19({
    viewBox: "0 0 436 438",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "none"
  }, props), _path17 || (_path17 = /* @__PURE__ */ React19.createElement("path", {
    d: "M436 437H0L218 0l218 437Z",
    fill: "currentColor"
  })));
};

// src/assets/svg/wordmark.tsx
import * as React20 from "react";
var _path18;
function _extends20() {
  _extends20 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends20.apply(this, arguments);
}
var SvgWordmark = function SvgWordmark2(props) {
  return /* @__PURE__ */ React20.createElement("svg", _extends20({
    viewBox: "0 0 93 21",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path18 || (_path18 = /* @__PURE__ */ React20.createElement("path", {
    d: "M2.435 14.557V16.7h8.988v-2.143H2.435v-5.12h7.682V7.292H2.435v-4.58h8.767V.57H0v13.987h2.435ZM16.482 17.016c1.948 0 3.121-.88 3.719-1.76h.044V16.7h2.17V5.195h-2.17v7.061c0 1.737-1.195 2.888-3.055 2.888-1.638 0-2.302-1.038-2.302-2.595V5.195h-2.17v7.963c0 2.64 1.683 3.858 3.764 3.858ZM30.317 17.016c2.878 0 5.07-2.278 5.07-6.068 0-3.79-2.192-6.091-5.07-6.091-1.771 0-2.856.88-3.476 1.691h-.044V5.196h-2.17v15.498h2.17V15.28h.044c.62.925 1.705 1.737 3.476 1.737Zm-3.498-6.068c0-2.617 1.196-4.242 3.144-4.242 2.125 0 3.143 1.986 3.143 4.241 0 2.257-1.018 4.242-3.143 4.242-1.948 0-3.144-1.647-3.144-4.242ZM44.559 9.323V16.7h2.17V8.714c0-2.64-1.683-3.857-3.764-3.857-1.948 0-3.122.902-3.72 1.782h-.044V.57h-2.17V16.7h2.17V9.64c0-1.738 1.196-2.888 3.056-2.888 1.638 0 2.302 1.037 2.302 2.571ZM53.856 17.038c2.966 0 4.627-1.669 5.224-3.88h-2.213c-.2.767-.975 2.076-2.967 2.076-2.236 0-3.343-1.782-3.387-3.7h6.442V9.797h2.215c-.304-3.046-2.182-4.963-5.314-4.963-3.454 0-5.58 2.482-5.58 6.091 0 3.52 1.993 6.113 5.58 6.113Zm-3.343-7.241c.133-1.895 1.46-3.158 3.276-3.158 1.926 0 3.166 1.353 3.166 3.158h-6.442ZM67.599 9.323V16.7h2.17V9.64c0-1.738 1.018-2.888 2.634-2.888 1.66 0 1.97 1.037 1.97 2.571V16.7h2.17V8.714c0-2.459-1.152-3.857-3.432-3.857-1.727 0-2.878.902-3.697 2.007h-.044c-.443-1.286-1.417-2.007-2.989-2.007-1.704 0-2.745.902-3.343 1.782h-.044V5.195h-2.17V16.7h2.17V9.64c0-1.738 1.018-2.888 2.634-2.888 1.66 0 1.97 1.037 1.97 2.571ZM78.698 16.7h2.17V5.195h-2.17V16.7Zm-.132-13.558h2.457V.751h-2.457v2.391ZM86.204 17.016c1.837 0 3.121-.744 3.852-1.94h.044c.133 1.308.708 1.737 1.793 1.737.354 0 .73-.045 1.107-.135v-1.354c-.133.023-.2.023-.266.023-.42 0-.531-.429-.531-1.264V8.804c0-2.977-1.86-3.97-4.184-3.97-3.454 0-4.87 1.737-4.981 3.948h2.214c.11-1.534.708-2.166 2.678-2.166 1.66 0 2.148.7 2.148 1.534 0 1.128-1.085 1.354-2.856 1.692-2.812.542-4.715 1.309-4.715 3.88 0 1.963 1.438 3.294 3.697 3.294Zm-1.44-3.452c0-1.195.842-1.76 2.834-2.165 1.151-.248 2.126-.497 2.48-.835v1.647c0 2.008-1.44 3.023-3.387 3.023-1.35 0-1.926-.587-1.926-1.67Z",
    fill: "currentColor"
  })));
};

// src/assets/svg/toolbox.tsx
import * as React21 from "react";
var _path19;
var _path23;
function _extends21() {
  _extends21 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends21.apply(this, arguments);
}
var SvgToolbox = function SvgToolbox2(props) {
  return /* @__PURE__ */ React21.createElement("svg", _extends21({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path19 || (_path19 = /* @__PURE__ */ React21.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 2,
    d: "M3 9h18v11H3zM6 4h12v5H6z"
  })), _path23 || (_path23 = /* @__PURE__ */ React21.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 2,
    d: "M9 9h6v4H9z"
  })));
};

// src/assets/svg/backpack.tsx
import * as React22 from "react";
var _path20;
var _path24;
var _path33;
var _path42;
function _extends22() {
  _extends22 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends22.apply(this, arguments);
}
var SvgBackpack = function SvgBackpack2(props) {
  return /* @__PURE__ */ React22.createElement("svg", _extends22({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path20 || (_path20 = /* @__PURE__ */ React22.createElement("path", {
    d: "M10 11.007h4",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "square"
  })), _path24 || (_path24 = /* @__PURE__ */ React22.createElement("path", {
    d: "M8 20v-4.945h8V20M9.08 7.344V5.037a2 2 0 0 1 2-2h1.838a2 2 0 0 1 2 2v2.307",
    stroke: "currentColor",
    strokeWidth: 2
  })), _path33 || (_path33 = /* @__PURE__ */ React22.createElement("path", {
    d: "M14 16h-2v2h2v-2Z",
    fill: "currentColor"
  })), _path42 || (_path42 = /* @__PURE__ */ React22.createElement("path", {
    d: "M4 20V9.03a2 2 0 0 1 2-2h11.979a2 2 0 0 1 2 2V21H5",
    stroke: "currentColor",
    strokeWidth: 2
  })));
};

// src/assets/svg/external-link.tsx
import * as React23 from "react";
var _path21;
var _path25;
function _extends23() {
  _extends23 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends23.apply(this, arguments);
}
var SvgExternalLink = function SvgExternalLink2(props) {
  return /* @__PURE__ */ React23.createElement("svg", _extends23({
    viewBox: "0 0 10 10",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path21 || (_path21 = /* @__PURE__ */ React23.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1.5 2.5A.5.5 0 0 0 1 3v5.5a.5.5 0 0 0 .5.5H7a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 1 0v3A1.5 1.5 0 0 1 7 10H1.5A1.5 1.5 0 0 1 0 8.5V3a1.5 1.5 0 0 1 1.5-1.5h3a.5.5 0 0 1 0 1h-3ZM6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1H6.5A.5.5 0 0 1 6 .5Z",
    fill: "currentColor"
  })), _path25 || (_path25 = /* @__PURE__ */ React23.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.854.146a.5.5 0 0 1 0 .708l-5.5 5.5a.5.5 0 1 1-.708-.708l5.5-5.5a.5.5 0 0 1 .708 0Z",
    fill: "currentColor"
  })));
};

// src/assets/svg/check-circle.tsx
import * as React24 from "react";
var _path26;
function _extends24() {
  _extends24 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends24.apply(this, arguments);
}
var SvgCheckCircle = function SvgCheckCircle2(props) {
  return /* @__PURE__ */ React24.createElement("svg", _extends24({
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _path26 || (_path26 = /* @__PURE__ */ React24.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12ZM4.53 12.274l5.224 5.225 1.305-1.305-1.33-1.33.002-.001-3.895-3.895-1.306 1.306Zm6.304 1.533 1.306 1.306 7.33-7.33-1.306-1.307-7.33 7.33Z",
    fill: "currentColor"
  })));
};

// src/components/Common/SVG/index.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var svgs = Object.freeze({
  arrowDown: SvgArrowDown,
  arrowLeft: SvgArrowLeft,
  arrowRight: SvgArrowRight,
  chevronDown: SvgChevronDown,
  chevronLeft: SvgChevronLeft,
  checkCircle: SvgCheckCircle,
  externalLink: SvgExternalLink,
  chevronRight: SvgChevronRight,
  lookingGlass: SvgLookingGlass,
  minus: SvgMinus,
  plus: SvgPlus,
  warningTriangle: SvgWarningTriangle,
  x: SvgX,
  arrowRightCircle: SvgArrowRightCircle,
  contacts: SvgContacts,
  hamburger: SvgHamburger,
  pauseCircle: SvgPauseCircle,
  playCircle: SvgPlayCircle,
  plusCircle: SvgPlusCircle,
  reset: SvgReset,
  toolbox: SvgToolbox,
  backpack: SvgBackpack,
  triangle: SvgTriangle,
  wordmark: SvgWordmark
});
var SVG = ({ svg, ...props }) => {
  if (!svgs[svg]) return null;
  const SVGElement = svgs[svg];
  return /* @__PURE__ */ jsx2(SVGElement, { ...props, "aria-hidden": true });
};
var SVG_default = SVG;

// src/components/Common/NoJs/styles.module.ts
var container = "styles-module--container--b88ba";

// src/components/Common/NoJs/index.tsx
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var NoJs = () => /* @__PURE__ */ jsx3("noscript", { children: /* @__PURE__ */ jsxs2("div", { className: container, children: [
  /* @__PURE__ */ jsx3("p", { children: "For full functionality of this site it is necessary to enable JavaScript." }),
  /* @__PURE__ */ jsx3("a", { href: "https://www.enable-javascript.com/", "aria-label": "Enable JS", children: "Here are the instructions how to enable JavaScript in your web browser." })
] }) });
var NoJs_default = NoJs;

// src/components/Common/SliceConfig/styles.module.ts
var content2 = "styles-module--content--c6108";

// src/components/Common/SliceConfig/index.tsx
import cn2 from "classnames";
import { jsx as jsx4 } from "react/jsx-runtime";
var SliceConfig = ({ children, config, className }) => {
  const { backgroundColor, textColor, slicePadding } = config || {};
  const colorStyles = {};
  if (textColor?.hex) {
    colorStyles.color = textColor.hex;
  }
  if (backgroundColor?.hex) {
    colorStyles.backgroundColor = backgroundColor.hex;
  }
  return /* @__PURE__ */ jsx4("div", { style: colorStyles, className: cn2(className), children: /* @__PURE__ */ jsx4(SlicePadding_default, { config: slicePadding, children: /* @__PURE__ */ jsx4("div", { className: content2, children }) }) });
};
var SliceConfig_default = SliceConfig;

// src/components/Common/SlicePadding/index.tsx
import cn3 from "classnames";

// src/components/Common/SlicePadding/styles.module.ts
var container2 = "styles-module--container--ce2bf";
var paddingBottomRegular = "styles-module--paddingBottomRegular--b8ef2";
var paddingBottomSmall = "styles-module--paddingBottomSmall--df1b3";
var paddingTopRegular = "styles-module--paddingTopRegular--c8f34";
var paddingTopSmall = "styles-module--paddingTopSmall--290c5";
var paddingXRegular = "styles-module--paddingXRegular--4003b";
var paddingXSmall = "styles-module--paddingXSmall--7f941";

// src/components/Common/SlicePadding/index.tsx
import { jsx as jsx5 } from "react/jsx-runtime";
var SlicePadding = ({
  children,
  className,
  config,
  xOnly,
  yOnly
}) => {
  const {
    paddingTop = `regular`,
    paddingBottom = `regular`,
    paddingX = `regular`
  } = config || {};
  return /* @__PURE__ */ jsx5(
    "div",
    {
      className: cn3(container2, className, {
        [paddingTopRegular]: paddingTop === `regular` && !xOnly,
        [paddingTopSmall]: paddingTop === `small` && !xOnly,
        [paddingBottomRegular]: paddingBottom === `regular` && !xOnly,
        [paddingBottomSmall]: paddingBottom === `small` && !xOnly,
        [paddingXRegular]: paddingX === `regular` && !yOnly,
        [paddingXSmall]: paddingX === `small` && !yOnly
      }),
      children
    }
  );
};
var SlicePadding_default = SlicePadding;

// src/components/Common/Grid/index.tsx
import cn4 from "classnames";

// src/components/Common/Grid/styles.module.ts
var grid = "styles-module--grid--6afa9";

// src/components/Common/Grid/index.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
var Grid = ({ children, className, element }) => {
  const Element = element || `div`;
  return /* @__PURE__ */ jsx6(Element, { className: cn4(grid, className), children });
};
var Grid_default = Grid;

// src/components/Common/IntersectionAnimation/index.tsx
import { useEffect, useState } from "react";
import cn5 from "classnames";
import { useInView } from "react-intersection-observer";

// src/components/Common/IntersectionAnimation/styles.module.ts
var container3 = "styles-module--container--99bfc";
var fade = "styles-module--fade--62d01";
var fadeGrow = "styles-module--fadeGrow--3692c";
var fadeUp = "styles-module--fadeUp--c0810";
var visible = "styles-module--visible--1d5e5";

// src/components/Common/IntersectionAnimation/index.tsx
import { jsx as jsx7 } from "react/jsx-runtime";
var IntersectionAnimation = ({
  children,
  animation = `fadeUp`,
  transition = 0.6,
  margin = `-90px`,
  delay = 0,
  trigger,
  className
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    rootMargin: margin
  });
  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);
  useEffect(() => {
    if (trigger) {
      setIsVisible(true);
    }
  }, [trigger]);
  return /* @__PURE__ */ jsx7(
    "div",
    {
      ref,
      style: {
        transitionDelay: `${delay}ms`,
        transitionDuration: `${transition}s`
      },
      className: cn5(className, container3, {
        [fade]: animation === `fade`,
        [fadeUp]: animation === `fadeUp`,
        [fadeGrow]: animation === `fadeGrow`,
        [visible]: isVisible
      }),
      children
    }
  );
};
var IntersectionAnimation_default = IntersectionAnimation;

// src/components/Common/TextInput/index.tsx
import cn6 from "classnames";

// src/components/Common/TextInput/styles.module.ts
var button2 = "styles-module--button--d33d1";
var buttonContainer = "styles-module--buttonContainer--8f2db";
var container4 = "styles-module--container--46dee";
var disabled2 = "styles-module--disabled--d62f9";
var error = "styles-module--error--45a97";
var hasArrow = "styles-module--hasArrow--c7554";
var hasSearch = "styles-module--hasSearch--40732";
var hint = "styles-module--hint--999c1";
var icon2 = "styles-module--icon--18b9e";
var iconContainer = "styles-module--iconContainer--3dd95";
var input = "styles-module--input--098ef";
var inputContainer = "styles-module--inputContainer--a9fdb";
var label = "styles-module--label--6fadb";
var searchIcon = "styles-module--searchIcon--852b8";
var textarea = "styles-module--textarea--fc1be";
var topText = "styles-module--topText--aa1a3";
var warning = "styles-module--warning--b56c8";

// src/components/Common/TextInput/index.tsx
import { jsx as jsx8, jsxs as jsxs3 } from "react/jsx-runtime";
var TextInput = ({
  placeholder,
  id,
  value,
  label: label4,
  hint: hint3,
  maxLength,
  warningMessage,
  hasSearchIcon,
  hasError,
  required,
  disabled: disabled4,
  onClick,
  onChange,
  className,
  textarea: textarea2,
  onEnter,
  onBlur,
  type = "text",
  autocomplete,
  isHoneypot
}) => {
  const MAX_LENGTH = 300;
  const handleChange = (e) => {
    if (onChange) onChange(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (!onEnter) return;
    if (e.key === `Enter`) onEnter();
  };
  const warningIconColor = `var(--color-black-40)`;
  const InputElement = textarea2 ? `textarea` : `input`;
  return /* @__PURE__ */ jsxs3(
    "div",
    {
      className: cn6(container4, className, {
        [error]: hasError,
        [disabled2]: disabled4,
        [hasSearch]: hasSearchIcon,
        [hasArrow]: onClick
      }),
      children: [
        (label4 || hint3 || required) && /* @__PURE__ */ jsxs3("div", { className: topText, children: [
          /* @__PURE__ */ jsx8("div", { children: label4 && /* @__PURE__ */ jsxs3("label", { className: cn6(`caption`, label), htmlFor: id, children: [
            required && `* `,
            label4
          ] }) }),
          /* @__PURE__ */ jsx8("div", { children: hint3 && /* @__PURE__ */ jsx8("span", { className: cn6(`caption`, hint), children: hint3 }) })
        ] }),
        /* @__PURE__ */ jsxs3("div", { className: inputContainer, children: [
          hasSearchIcon && /* @__PURE__ */ jsx8("div", { className: iconContainer, children: /* @__PURE__ */ jsx8(SVG_default, { className: searchIcon, svg: "lookingGlass" }) }),
          /* @__PURE__ */ jsx8(
            InputElement,
            {
              maxLength: maxLength || MAX_LENGTH,
              tabIndex: disabled4 ? -1 : 0,
              id,
              className: cn6(`b2`, input, {
                [textarea]: textarea2,
                [hasSearch]: hasSearchIcon,
                [hasArrow]: onClick,
                [`honeypot-input`]: isHoneypot
              }),
              type,
              placeholder,
              onChange: handleChange,
              autoComplete: autocomplete,
              value,
              onKeyDown: handleKeyDown,
              onBlur: () => onBlur && onBlur(),
              required
            }
          ),
          onClick && /* @__PURE__ */ jsx8("div", { className: buttonContainer, children: /* @__PURE__ */ jsx8(
            "button",
            {
              tabIndex: disabled4 ? -1 : 0,
              type: "submit",
              "aria-label": "Submit",
              onClick: (e) => {
                e.preventDefault();
                onClick();
              },
              className: button2,
              children: /* @__PURE__ */ jsx8(SVG_default, { className: icon2, svg: "arrowRight" })
            }
          ) })
        ] }),
        warningMessage && hasError && /* @__PURE__ */ jsxs3("span", { className: cn6(`caption`, warning), children: [
          /* @__PURE__ */ jsx8(
            SVG_default,
            {
              svg: "warningTriangle",
              className: icon2,
              style: {
                color: hasError ? `var(--color-ux-error)` : warningIconColor
              }
            }
          ),
          warningMessage
        ] })
      ]
    }
  );
};
var TextInput_default = TextInput;

// src/components/Common/LAMAscii/index.tsx
import { useEffect as useEffect2 } from "react";
var LAMAscii = () => {
  const ascii = ` 
This site was made with

\u2588\u2588\u2557\u2591\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588\u2588\u2588\u2557\u2591\u2588\u2588\u2557\u2591\u2591\u2591\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2588\u2557\u2591\u2591\u2591\u2588\u2588\u2588\u2557\u2591\u2588\u2588\u2588\u2588\u2588\u2557\u2591\u2588\u2588\u2588\u2557\u2591\u2591\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2588\u2588\u2557\u2591\u2591\u2591\u2588\u2588\u2557
\u2588\u2588\u2551\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2551\u2591\u2591\u2591\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u2591\u2591\u2591\u2591\u2588\u2588\u2557\u2591\u2591\u2591\u2591\u2588\u2588\u2588\u2588\u2557\u2591\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2557\u2591\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u2550\u2550\u255D\u255A\u2588\u2588\u2557\u2591\u2588\u2588\u2554\u255D
\u2588\u2588\u2551\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2551\u2591\u2591\u2588\u2588\u2551\u255A\u2588\u2588\u2557\u2591\u2588\u2588\u2554\u255D\u2588\u2588\u2588\u2588\u2588\u2557\u2591\u2591\u2591\u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2591\u2591\u2588\u2588\u2554\u2588\u2588\u2588\u2588\u2554\u2588\u2588\u2551\u2588\u2588\u2551\u2591\u2591\u2588\u2588\u2551\u2588\u2588\u2554\u2588\u2588\u2557\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2557\u2591\u2591\u2591\u255A\u2588\u2588\u2588\u2588\u2554\u255D\u2591
\u2588\u2588\u2551\u2591\u2591\u2591\u2591\u2591\u2588\u2588\u2551\u2591\u2591\u2588\u2588\u2551\u2591\u255A\u2588\u2588\u2588\u2588\u2554\u255D\u2591\u2588\u2588\u2554\u2550\u2550\u255D\u2591\u2591\u2591\u2591\u255A\u2550\u2588\u2588\u2554\u2550\u255D\u2591\u2591\u2588\u2588\u2551\u255A\u2588\u2588\u2554\u255D\u2588\u2588\u2551\u2588\u2588\u2551\u2591\u2591\u2588\u2588\u2551\u2588\u2588\u2551\u255A\u2588\u2588\u2588\u2588\u2551\u2588\u2588\u2554\u2550\u2550\u255D\u2591\u2591\u2591\u2591\u255A\u2588\u2588\u2554\u255D\u2591\u2591
\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u255A\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2591\u2591\u255A\u2588\u2588\u2554\u255D\u2591\u2591\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2591\u2591\u2591\u2591\u255A\u2550\u255D\u2591\u2591\u2591\u2591\u2588\u2588\u2551\u2591\u255A\u2550\u255D\u2591\u2588\u2588\u2551\u255A\u2588\u2588\u2588\u2588\u2588\u2554\u255D\u2588\u2588\u2551\u2591\u255A\u2588\u2588\u2588\u2551\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2557\u2591\u2591\u2591\u2588\u2588\u2551\u2591\u2591\u2591
\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u2591\u255A\u2550\u2550\u2550\u2550\u255D\u2591\u2591\u2591\u2591\u255A\u2550\u255D\u2591\u2591\u2591\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u2591\u255A\u2550\u255D\u2591\u2591\u2591\u2591\u2591\u255A\u2550\u255D\u2591\u255A\u2550\u2550\u2550\u2550\u255D\u2591\u255A\u2550\u255D\u2591\u2591\u255A\u2550\u2550\u255D\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u255D\u2591\u2591\u2591\u255A\u2550\u255D\u2591\u2591\u2591

https://www.loveandmoney.agency
`;
  useEffect2(() => {
    const comment = document.createComment(`
${ascii}
`);
    document.body.insertBefore(comment, document.body.firstChild);
  }, [ascii]);
  return null;
};

// src/components/Common/FileUpload/index.tsx
import cn7 from "classnames";

// src/components/Common/FileUpload/styles.module.ts
var container5 = "styles-module--container--2fef9";
var disabled3 = "styles-module--disabled--36ffe";
var error2 = "styles-module--error--a5541";
var fileUpload = "styles-module--fileUpload--2f77c";
var hint2 = "styles-module--hint--aebb9";
var icon3 = "styles-module--icon--b34c6";
var label2 = "styles-module--label--fc8a8";
var topText2 = "styles-module--topText--d0634";
var warning2 = "styles-module--warning--86fdd";

// src/components/Common/FileUpload/index.tsx
import { jsx as jsx9, jsxs as jsxs4 } from "react/jsx-runtime";
var FileUpload = ({
  id,
  setFile,
  label: label4,
  hint: hint3,
  warningMessage,
  hasError,
  required,
  disabled: disabled4,
  className
}) => {
  const handleChangeFile = (e) => {
    setFile(e.target.files?.[0] || null);
  };
  const warningIconColor = `var(--color-black-40)`;
  return /* @__PURE__ */ jsxs4(
    "div",
    {
      className: cn7(container5, className, {
        [error2]: hasError,
        [disabled3]: disabled4
      }),
      children: [
        (label4 || hint3 || required) && /* @__PURE__ */ jsxs4("div", { className: topText2, children: [
          /* @__PURE__ */ jsx9("div", { children: (label4 || required) && /* @__PURE__ */ jsxs4("label", { className: cn7(`caption`, label2), htmlFor: id, children: [
            required && `* `,
            label4
          ] }) }),
          /* @__PURE__ */ jsx9("div", { children: hint3 && /* @__PURE__ */ jsx9("span", { className: cn7(`caption`, hint2), children: hint3 }) })
        ] }),
        /* @__PURE__ */ jsx9(
          "input",
          {
            className: cn7(`b2`, fileUpload),
            type: "file",
            accept: "application/pdf",
            onChange: handleChangeFile
          }
        ),
        warningMessage && hasError && /* @__PURE__ */ jsxs4("span", { className: cn7(`caption`, warning2), children: [
          /* @__PURE__ */ jsx9(
            SVG_default,
            {
              svg: "warningTriangle",
              className: icon3,
              style: {
                color: hasError ? `var(--color-ux-error)` : warningIconColor
              }
            }
          ),
          warningMessage
        ] })
      ]
    }
  );
};
var FileUpload_default = FileUpload;

// src/components/Common/Theme/Colors/index.tsx
import { colors } from "~data";
import { Helmet } from "react-helmet";
import { jsx as jsx10 } from "react/jsx-runtime";
var Colors = () => {
  let colorsCss = `:root{`;
  colors.forEach((color) => {
    colorsCss += `--color-${color.id}: ${color.hex};`;
  });
  colorsCss += `--cubic-easing: cubic-bezier(0.215, 0.61, 0.355, 1);`;
  colorsCss += `}`;
  return /* @__PURE__ */ jsx10(Helmet, { children: /* @__PURE__ */ jsx10("style", { children: colorsCss }) });
};
var Colors_default = Colors;

// src/components/Common/Theme/Fonts/index.tsx
import { Helmet as Helmet2 } from "react-helmet";

// src/components/Common/Theme/Fonts/fontCSS.ts
var FONT_FAMILY_CSS = "";
var FONT_CLASSES = "";

// src/components/Common/Theme/Fonts/index.tsx
import { jsx as jsx11, jsxs as jsxs5 } from "react/jsx-runtime";
var Fonts = () => /* @__PURE__ */ jsxs5(Helmet2, { children: [
  /* @__PURE__ */ jsx11("style", { children: FONT_FAMILY_CSS }),
  /* @__PURE__ */ jsx11("style", { children: FONT_CLASSES })
] });
var Fonts_default = Fonts;

// src/components/Common/Theme/index.tsx
import { Fragment, jsx as jsx12, jsxs as jsxs6 } from "react/jsx-runtime";
var Theme = () => /* @__PURE__ */ jsxs6(Fragment, { children: [
  /* @__PURE__ */ jsx12(Colors_default, {}),
  /* @__PURE__ */ jsx12(Fonts_default, {})
] });
var Theme_default = Theme;

// src/components/Common/Header/index.tsx
import { useRef } from "react";
import cn9 from "classnames";
import { useApp as useApp2, useTrapFocus } from "~hooks";

// src/components/Common/Header/styles.module.ts
var active = "styles-module--active--e2999";
var bgOverlay = "styles-module--bgOverlay--3cf6d";
var contactsCount = "styles-module--contactsCount--9a53d";
var container6 = "styles-module--container--a5403";
var header = "styles-module--header--6fe10";
var homeLink = "styles-module--homeLink--f5260";
var menuButton = "styles-module--menuButton--ac6d6";
var menuButtonIcon = "styles-module--menuButtonIcon--07877";
var menuButtonIconX = "styles-module--menuButtonIconX--9bd97";
var nav = "styles-module--nav--566f7";
var navContainer = "styles-module--navContainer--0a41d";
var open = "styles-module--open--7defd";
var rightButtons = "styles-module--rightButtons--8edba";
var smaller = "styles-module--smaller--ac7d8";
var visible2 = "styles-module--visible--7add3";
var wordmark = "styles-module--wordmark--2745d";

// src/components/Common/Header/index.tsx
import { Link as Link3, graphql, useStaticQuery } from "gatsby";

// src/components/Common/Header/components/MenuItem/styles.module.ts
var colorBlock = "styles-module--colorBlock--9c094";
var container7 = "styles-module--container--eda1a";
var graphicContainer = "styles-module--graphicContainer--64186";
var leftColumn = "styles-module--leftColumn--9314c";
var rightColumn = "styles-module--rightColumn--93ee5";
var text2 = "styles-module--text--679df";

// src/components/Common/Header/components/MenuItem/index.tsx
import { Link as Link2 } from "gatsby";
import cn8 from "classnames";
import { useApp } from "~hooks";
import { jsx as jsx13, jsxs as jsxs7 } from "react/jsx-runtime";
var MenuItem = ({
  backgroundColor,
  highlightColor,
  page,
  textColor,
  title: title2
}) => {
  const { isMenuOpen, setIsMenuOpen, pathname } = useApp();
  const handleClick = () => {
    if (pathname === `/${page.slug.current}/`) {
      setIsMenuOpen(false);
    }
  };
  return /* @__PURE__ */ jsxs7(
    Link2,
    {
      to: `/${page.slug.current}`,
      onClick: handleClick,
      "aria-hidden": !isMenuOpen,
      tabIndex: isMenuOpen ? 0 : -1,
      className: container7,
      style: {
        background: backgroundColor.hex || `var(--color-white)`,
        color: textColor.hex || `var(--color-black)`
      },
      children: [
        /* @__PURE__ */ jsxs7("div", { className: graphicContainer, children: [
          /* @__PURE__ */ jsx13("div", { className: leftColumn, children: /* @__PURE__ */ jsx13(
            "div",
            {
              className: colorBlock,
              style: { background: highlightColor.hex }
            }
          ) }),
          /* @__PURE__ */ jsx13("div", { className: rightColumn, children: /* @__PURE__ */ jsx13(
            "div",
            {
              className: colorBlock,
              style: { background: highlightColor.hex }
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx13("div", { className: cn8(`h1`, text2), children: title2 })
      ]
    }
  );
};
var MenuItem_default = MenuItem;

// src/components/Common/Header/index.tsx
import { jsx as jsx14, jsxs as jsxs8 } from "react/jsx-runtime";
var Header = () => {
  const {
    isMenuOpen,
    setIsMenuOpen,
    setIsToolboxOpen,
    toolbox,
    isHeaderVisible,
    setIsHeaderVisible
  } = useApp2();
  const {
    sanitySettings: { menuItems }
  } = useStaticQuery(query);
  const containerRef = useRef(null);
  useTrapFocus(isMenuOpen, containerRef);
  const headerTransformPosition = () => {
    if (isHeaderVisible) {
      return { transform: `translateY(0)` };
    }
    return { transform: `translateY(-100%)` };
  };
  return /* @__PURE__ */ jsxs8("div", { ref: containerRef, className: container6, children: [
    /* @__PURE__ */ jsx14(
      "div",
      {
        onClick: () => setIsMenuOpen(false),
        "aria-hidden": true,
        className: cn9(bgOverlay, { [visible2]: isMenuOpen })
      }
    ),
    /* @__PURE__ */ jsxs8("header", { className: header, style: headerTransformPosition(), children: [
      /* @__PURE__ */ jsx14(
        Link3,
        {
          onClick: () => setIsMenuOpen(false),
          to: "/",
          className: homeLink,
          "aria-label": "Home",
          onFocus: () => setIsHeaderVisible(true),
          children: /* @__PURE__ */ jsx14(SVG_default, { svg: "wordmark", className: wordmark })
        }
      ),
      /* @__PURE__ */ jsxs8("div", { className: rightButtons, children: [
        /* @__PURE__ */ jsxs8(
          "button",
          {
            className: menuButton,
            onClick: () => setIsToolboxOpen((prev) => !prev),
            "aria-label": "Open/close toolbox menu",
            children: [
              /* @__PURE__ */ jsx14(
                SVG_default,
                {
                  svg: "backpack",
                  className: cn9(menuButtonIcon, active)
                }
              ),
              toolbox?.[0] && /* @__PURE__ */ jsx14("div", { className: contactsCount, children: toolbox.length })
            ]
          }
        ),
        /* @__PURE__ */ jsxs8(
          "button",
          {
            onClick: () => setIsMenuOpen((prev) => !prev),
            type: "button",
            className: cn9(menuButton, smaller),
            "aria-label": "Open/close navigation menu",
            onFocus: () => setIsHeaderVisible(true),
            children: [
              /* @__PURE__ */ jsx14(
                SVG_default,
                {
                  svg: "hamburger",
                  className: cn9(menuButtonIcon, {
                    [active]: !isMenuOpen
                  })
                }
              ),
              /* @__PURE__ */ jsx14(
                SVG_default,
                {
                  svg: "x",
                  className: cn9(menuButtonIcon, menuButtonIconX, {
                    [active]: isMenuOpen
                  })
                }
              )
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx14("div", { className: cn9(navContainer, { [open]: isMenuOpen }), children: /* @__PURE__ */ jsx14("nav", { className: nav, children: /* @__PURE__ */ jsx14("ul", { children: menuItems.map((menuItem) => /* @__PURE__ */ jsx14("li", { children: /* @__PURE__ */ jsx14(
      MenuItem_default,
      {
        title: menuItem.title,
        page: menuItem.page,
        backgroundColor: menuItem.backgroundColor,
        textColor: menuItem.textColor,
        highlightColor: menuItem.highlightColor
      }
    ) }, menuItem._key)) }) }) })
  ] });
};
var Header_default = Header;
var query = graphql`
  query HeaderQuery {
    sanitySettings {
      menuItems {
        _key
        title
        textColor {
          hex
        }
        page {
          slug {
            current
          }
        }
        highlightColor {
          hex
        }
        backgroundColor {
          hex
        }
      }
    }
  }
`;

// src/components/Common/SEO/index.tsx
import { useSiteMetadata } from "~hooks";

// src/components/Common/SEO/Facebook.tsx
import { Fragment as Fragment2, jsx as jsx15, jsxs as jsxs9 } from "react/jsx-runtime";
var FacebookSEO = ({
  title: title2,
  siteUrl,
  description: description2,
  ogImageUrl
}) => {
  return /* @__PURE__ */ jsxs9(Fragment2, { children: [
    /* @__PURE__ */ jsx15("meta", { property: "og:site_name", content: title2 }),
    /* @__PURE__ */ jsx15("meta", { property: "og:url", content: siteUrl }),
    /* @__PURE__ */ jsx15("meta", { property: "og:type", content: "website" }),
    /* @__PURE__ */ jsx15("meta", { property: "og:title", content: title2 }),
    /* @__PURE__ */ jsx15("meta", { property: "og:description", content: description2 }),
    /* @__PURE__ */ jsx15("meta", { property: "og:image", content: ogImageUrl }),
    /* @__PURE__ */ jsx15("meta", { property: "og:image:alt", content: title2 })
  ] });
};
var Facebook_default = FacebookSEO;

// src/components/Common/SEO/Twitter.tsx
import { Fragment as Fragment3, jsx as jsx16, jsxs as jsxs10 } from "react/jsx-runtime";
var TwitterSEO = ({ description: description2, ogImageUrl, title: title2 }) => {
  return /* @__PURE__ */ jsxs10(Fragment3, { children: [
    /* @__PURE__ */ jsx16("meta", { name: "twitter:title", content: title2 }),
    /* @__PURE__ */ jsx16("meta", { name: "twitter:description", content: description2 }),
    /* @__PURE__ */ jsx16("meta", { name: "twitter:image", content: ogImageUrl }),
    /* @__PURE__ */ jsx16("meta", { name: "twitter:image:alt", content: title2 })
  ] });
};
var Twitter_default = TwitterSEO;

// src/components/Common/SEO/index.tsx
import { Fragment as Fragment4, jsx as jsx17, jsxs as jsxs11 } from "react/jsx-runtime";
var SEO = ({ pageTitle, pathname }) => {
  const meta = useSiteMetadata();
  const siteTitle = meta.title;
  const tagline = `Making Australia\u2019s startup scene Awesome`;
  const titleText = pageTitle === `Home` ? `${siteTitle} | ${tagline}` : `${pageTitle} | ${siteTitle}`;
  const ogImageUrl = "/images/og-image.png";
  return /* @__PURE__ */ jsxs11(Fragment4, { children: [
    /* @__PURE__ */ jsx17("title", { children: titleText }),
    /* @__PURE__ */ jsx17("link", { rel: "canonical", href: `${meta.siteUrl}${pathname}` }),
    /* @__PURE__ */ jsx17("meta", { name: "description", content: meta.description }),
    /* @__PURE__ */ jsx17(
      Facebook_default,
      {
        description: meta.description,
        ogImageUrl,
        siteUrl: meta.siteUrl,
        title: titleText
      }
    ),
    /* @__PURE__ */ jsx17(
      Twitter_default,
      {
        description: meta.description,
        ogImageUrl,
        title: titleText
      }
    )
  ] });
};
var SEO_default = SEO;

// src/components/Common/Favicon/index.tsx
import { useDarkMode } from "~hooks";
import { Helmet as Helmet3 } from "react-helmet";
import { jsx as jsx18 } from "react/jsx-runtime";
var Favicon = () => {
  const isDarkMode = useDarkMode();
  const favicon = isDarkMode ? `https://euphemia.com/images/favicon-darkmode.png` : `https://euphemia.com/images/favicon-default.png`;
  return (
    // Need to use Helmet to allow for dynamic favicons
    /* @__PURE__ */ jsx18(Helmet3, { children: /* @__PURE__ */ jsx18("link", { rel: "icon", type: "image/png", href: favicon }) })
  );
};
var Favicon_default = Favicon;

// src/components/Common/Footer/index.tsx
import { Link as Link4, graphql as graphql2, useStaticQuery as useStaticQuery2 } from "gatsby";
import { useEffect as useEffect6, useState as useState4 } from "react";

// src/components/Common/Footer/styles.module.ts
var allLinksHorizontal = "styles-module--allLinksHorizontal--742c5";
var container8 = "styles-module--container--1b805";
var flag = "styles-module--flag--cdeb8";
var footerText = "styles-module--footerText--84547";
var interactionButton = "styles-module--interactionButton--bf884";
var interactionButtonIcon = "styles-module--interactionButtonIcon--22931";
var lamLink = "styles-module--lamLink--c3cc2";
var lamMark = "styles-module--lamMark--118d5";
var link = "styles-module--link--512c0";
var linkListGrid = "styles-module--linkListGrid--744e9";
var linkListItem = "styles-module--linkListItem--04abd";
var linkListMobileLeftCol = "styles-module--linkListMobileLeftCol--80233";
var linkListMobileRightCol = "styles-module--linkListMobileRightCol--6c453";
var nav2 = "styles-module--nav--851c1";
var visible3 = "styles-module--visible--d3a2c";
var wordmark2 = "styles-module--wordmark--04cbc";

// src/components/Common/Footer/index.tsx
import { StaticImage } from "gatsby-plugin-image";
import cn11 from "classnames";
import { useBreakpoints } from "~hooks";

// src/components/Common/Footer/animations/Stripes/styles.module.ts
var container9 = "styles-module--container--01d8e";
var row = "styles-module--row--7c653";
var row1 = "styles-module--row1--e8933";
var row2 = "styles-module--row2--96001";
var row3 = "styles-module--row3--a709a";
var row4 = "styles-module--row4--9dd4c";
var row5 = "styles-module--row5--1b8de";
var row6 = "styles-module--row6--40d8a";

// src/components/Common/Footer/animations/Stripes/index.tsx
import cn10 from "classnames";
import { jsx as jsx19, jsxs as jsxs12 } from "react/jsx-runtime";
var FooterStripes = () => {
  return /* @__PURE__ */ jsxs12("div", { className: container9, children: [
    /* @__PURE__ */ jsx19("div", { className: cn10(row, row1) }),
    /* @__PURE__ */ jsx19("div", { className: cn10(row, row2) }),
    /* @__PURE__ */ jsx19("div", { className: cn10(row, row3) }),
    /* @__PURE__ */ jsx19("div", { className: cn10(row, row4) }),
    /* @__PURE__ */ jsx19("div", { className: cn10(row, row5) }),
    /* @__PURE__ */ jsx19("div", { className: cn10(row, row6) })
  ] });
};
var Stripes_default = FooterStripes;

// src/components/Common/Footer/animations/Portal/index.tsx
import { useEffect as useEffect3, useRef as useRef2, useState as useState2 } from "react";
import * as THREE from "three";

// src/components/Common/Footer/animations/Portal/styles.module.ts
var canvas = "styles-module--canvas--ef00f";
var container10 = "styles-module--container--dc28c";

// src/components/Common/Footer/animations/Portal/index.tsx
import { jsx as jsx20 } from "react/jsx-runtime";
var FooterPortal = () => {
  const canvasRef = useRef2(null);
  const containerRef = useRef2(null);
  const [containerSize, setContainerSize] = useState2({ width: 0, height: 0 });
  const calculateContainerSize = () => {
    const container26 = containerRef.current;
    if (!container26) return;
    const { width, height } = container26.getBoundingClientRect();
    setContainerSize({ width, height });
  };
  useEffect3(() => {
    window.addEventListener(`resize`, calculateContainerSize);
    setTimeout(calculateContainerSize, 100);
    return () => {
      window.removeEventListener(`resize`, calculateContainerSize);
    };
  }, []);
  useEffect3(() => {
    const canvas3 = canvasRef.current;
    const container26 = containerRef.current;
    if (!canvas3 || !container26) return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      containerSize.width / containerSize.height,
      0.1,
      100
    );
    camera.position.z = 5;
    scene.add(camera);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas3,
      alpha: true,
      precision: `lowp`
    });
    renderer.setSize(containerSize.width, containerSize.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    const colors2 = [
      `#5FFF95`,
      `#77007C`,
      `#FF8731`,
      `#FFABAB`,
      `#FFDE31`,
      `#007F4F`,
      `#50DBEE`,
      `#6E3E20`,
      `#C3423D`
    ];
    const circleRefs = [];
    const geometry = new THREE.CircleGeometry(10, 30);
    for (let i = 0; i < colors2.length; i++) {
      const material = new THREE.MeshBasicMaterial({ color: colors2[i] });
      const circle6 = new THREE.Mesh(geometry, material);
      circle6.position.z = i * -0.1;
      circleRefs.push(circle6);
      scene.add(circle6);
    }
    circleRefs.reverse();
    const clock = new THREE.Clock();
    const tick = () => {
      const elapsedTime = clock.getElapsedTime();
      const DELAY = 0.5;
      const SIZE_MULTIPLIER = 0.75;
      for (let i = 0; i < circleRefs.length; i++) {
        const calculatedScale = (elapsedTime - DELAY * i) * SIZE_MULTIPLIER;
        let scale = 0;
        if (calculatedScale > 0) {
          scale = Math.min(calculatedScale, 2);
        }
        const circle6 = circleRefs[i];
        circle6.scale.x = scale;
        circle6.scale.y = scale;
      }
      renderer.render(scene, camera);
      window.requestAnimationFrame(tick);
    };
    tick();
    const calculateCanvasSizes = () => {
      camera.aspect = containerSize.width / containerSize.height;
      camera.updateProjectionMatrix();
      renderer.setSize(containerSize.width, containerSize.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    calculateCanvasSizes();
    window.addEventListener(`resize`, calculateCanvasSizes);
    return () => window.removeEventListener(`resize`, calculateCanvasSizes);
  }, [containerSize.height, containerSize.width]);
  return /* @__PURE__ */ jsx20("div", { className: container10, ref: containerRef, children: /* @__PURE__ */ jsx20("canvas", { className: canvas, ref: canvasRef }) });
};
var Portal_default = FooterPortal;

// src/components/Common/Footer/animations/Spinner/index.tsx
import { useEffect as useEffect4, useRef as useRef3, useState as useState3 } from "react";
import * as THREE2 from "three";

// src/components/Common/Footer/animations/Spinner/styles.module.ts
var canvas2 = "styles-module--canvas--567a0";
var container11 = "styles-module--container--909af";

// src/components/Common/Footer/animations/Spinner/index.tsx
import { jsx as jsx21, jsxs as jsxs13 } from "react/jsx-runtime";
var FooterSpinner = () => {
  const canvasRef = useRef3(null);
  const containerRef = useRef3(null);
  const [containerSize, setContainerSize] = useState3({ width: 0, height: 0 });
  const calculateContainerSize = () => {
    const container26 = containerRef.current;
    if (!container26) return;
    const { width, height } = container26.getBoundingClientRect();
    setContainerSize({ width, height });
  };
  useEffect4(() => {
    window.addEventListener(`resize`, calculateContainerSize);
    setTimeout(calculateContainerSize, 100);
    return () => {
      window.removeEventListener(`resize`, calculateContainerSize);
    };
  }, []);
  useEffect4(() => {
    const canvas3 = canvasRef.current;
    const container26 = containerRef.current;
    if (!canvas3 || !container26) return;
    const scene = new THREE2.Scene();
    const camera = new THREE2.PerspectiveCamera(
      75,
      containerSize.width / containerSize.height,
      0.1,
      100
    );
    camera.position.y = 1;
    camera.rotation.x = -1.56;
    scene.add(camera);
    const renderer = new THREE2.WebGLRenderer({
      canvas: canvas3
    });
    renderer.setSize(containerSize.width, containerSize.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    const colors2 = [
      `#FF8731`,
      `#C6B792`,
      `#C3423D`,
      `#50DBEE`,
      `#FFABAB`,
      `#007171`,
      `#00394F`,
      `#5FFF95`,
      `#77007C`,
      `#FFDE31`
    ];
    const cylinderGroup = new THREE2.Group();
    const SEGMENTS = 20;
    const RADIUS = 5;
    for (let i = 0; i < SEGMENTS; i++) {
      var geometry = new THREE2.CylinderGeometry(
        RADIUS,
        RADIUS,
        0.1,
        1,
        1,
        false,
        i * (2 * Math.PI / SEGMENTS),
        2 * Math.PI / SEGMENTS
      );
      const material = new THREE2.MeshBasicMaterial({
        color: colors2[i % colors2.length]
      });
      const cylinder = new THREE2.Mesh(geometry, material);
      cylinderGroup.add(cylinder);
      cylinder.position.y = 0.5;
    }
    scene.add(cylinderGroup);
    const clock = new THREE2.Clock();
    const tick = () => {
      const elapsedTime = clock.getElapsedTime();
      cylinderGroup.rotation.y = -elapsedTime;
      renderer.render(scene, camera);
      window.requestAnimationFrame(tick);
    };
    tick();
    const calculateCanvasSizes = () => {
      camera.aspect = containerSize.width / containerSize.height;
      camera.updateProjectionMatrix();
      renderer.setSize(containerSize.width, containerSize.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    calculateCanvasSizes();
    window.addEventListener(`resize`, calculateCanvasSizes);
    return () => window.removeEventListener(`resize`, calculateCanvasSizes);
  }, [containerSize.height, containerSize.width]);
  return /* @__PURE__ */ jsxs13("div", { className: container11, ref: containerRef, children: [
    /* @__PURE__ */ jsx21("canvas", { className: canvas2, ref: canvasRef }),
    ";"
  ] });
};
var Spinner_default = FooterSpinner;

// src/components/Common/Footer/animations/HoverTiles/styles.module.ts
var columns = "20";
var container12 = "styles-module--container--c81fe";
var rows = "10";
var tile = "styles-module--tile--c8408";

// src/components/Common/Footer/animations/HoverTiles/index.tsx
import { jsx as jsx22 } from "react/jsx-runtime";
var FooterHoverTiles = () => {
  const gridColumns = columns;
  const gridRows = rows;
  const gridSlots = gridColumns * gridRows;
  const gridSlotArray = [...Array(gridSlots)];
  return /* @__PURE__ */ jsx22("div", { className: container12, children: gridSlotArray.map((_e, i) => /* @__PURE__ */ jsx22("div", { className: tile }, i)) });
};
var HoverTiles_default = FooterHoverTiles;

// src/components/Common/Footer/animations/AnimateTiles/index.tsx
import { useEffect as useEffect5, useRef as useRef4 } from "react";

// src/components/Common/Footer/animations/AnimateTiles/styles.module.ts
var columns2 = "10";
var container13 = "styles-module--container--0d735";
var rows2 = "12";

// src/components/Common/Footer/animations/AnimateTiles/index.tsx
import { jsx as jsx23 } from "react/jsx-runtime";
var FooterAnimateTiles = () => {
  const gridColumns = columns2;
  const gridRows = rows2;
  const gridSlots = gridColumns * gridRows;
  const gridSlotArray = [...Array(gridSlots)];
  const tileClassName = `footer-mobile-magic-tile`;
  const containerRef = useRef4(null);
  useEffect5(() => {
    const tiles = containerRef.current?.querySelectorAll(
      `.${tileClassName}`
    );
    const animateTiles = (tileIndex = 0) => {
      if (!tiles?.[tileIndex]) return;
      const tile2 = tiles[tileIndex];
      const tileTransitionDelay = tileIndex * 20;
      setTimeout(() => {
        tile2.style.transition = `0.2s`;
        tile2.style.background = `var(--color-mint-green)`;
      }, tileTransitionDelay);
      setTimeout(() => {
        tile2.style.transition = `2s`;
        tile2.style.background = `none`;
      }, tileTransitionDelay + 400);
      animateTiles(tileIndex + 1);
    };
    animateTiles();
  }, []);
  return /* @__PURE__ */ jsx23("div", { ref: containerRef, className: container13, children: gridSlotArray.map((_e, i) => /* @__PURE__ */ jsx23("div", { className: tileClassName }, i)) });
};
var AnimateTiles_default = FooterAnimateTiles;

// src/components/Common/Footer/animation-duration.module.ts
var animationDuration = "5000ms";

// src/components/Common/Footer/index.tsx
import { jsx as jsx24, jsxs as jsxs14 } from "react/jsx-runtime";
var Footer = () => {
  const [animationIndex, setAnimationIndex] = useState4(-1);
  const [isAnimationActive, setIsAnimationActive] = useState4(false);
  const [hasMounted, setHasMounted] = useState4(false);
  useEffect6(() => {
    setHasMounted(true);
  }, []);
  const {
    sanitySettings: { footer }
  } = useStaticQuery2(query2);
  const { links, _rawFooterText } = footer || {};
  const animations = [`portal`, `stripes`, `spinner`, `tiles`];
  const updateAnimationIndex = () => {
    setAnimationIndex((prev) => {
      if (prev === void 0) {
        return 0;
      }
      if (prev === animations.length - 1) {
        return 0;
      }
      return prev + 1;
    });
  };
  const animationDuration2 = parseInt(animationDuration.replace(`ms`, ``));
  const playAnimation = () => {
    updateAnimationIndex();
    setIsAnimationActive(true);
    setTimeout(() => {
      setIsAnimationActive(false);
    }, animationDuration2);
  };
  const Animation = () => {
    switch (animations[animationIndex]) {
      case `portal`:
        return /* @__PURE__ */ jsx24(Portal_default, {});
      case `spinner`:
        return /* @__PURE__ */ jsx24(Spinner_default, {});
      case `stripes`:
        return /* @__PURE__ */ jsx24(Stripes_default, {});
      case `tiles`:
        return smallDesktop ? /* @__PURE__ */ jsx24(HoverTiles_default, {}) : /* @__PURE__ */ jsx24(AnimateTiles_default, {});
      default:
        return null;
    }
  };
  const { smallDesktop } = useBreakpoints();
  return /* @__PURE__ */ jsxs14("section", { className: cn11(container8, { [visible3]: hasMounted }), children: [
    /* @__PURE__ */ jsxs14(
      "button",
      {
        onClick: playAnimation,
        type: "button",
        className: interactionButton,
        children: [
          /* @__PURE__ */ jsxs14("div", { className: "h3", children: [
            "Make",
            /* @__PURE__ */ jsx24("br", {}),
            "Awesome"
          ] }),
          /* @__PURE__ */ jsx24(SVG_default, { svg: "reset", className: interactionButtonIcon })
        ]
      }
    ),
    /* @__PURE__ */ jsxs14(Grid_default, { children: [
      /* @__PURE__ */ jsx24(
        PortableTextRenderer_default,
        {
          textElement: "p",
          className: footerText,
          rawText: _rawFooterText
        }
      ),
      /* @__PURE__ */ jsx24(SVG_default, { className: wordmark2, svg: "wordmark" }),
      /* @__PURE__ */ jsx24("nav", { className: nav2, children: /* @__PURE__ */ jsxs14(
        Grid_default,
        {
          className: cn11(linkListGrid, {
            [allLinksHorizontal]: links.length <= 5
          }),
          element: "ul",
          children: [
            /* @__PURE__ */ jsxs14(
              "li",
              {
                className: cn11(linkListItem, linkListMobileLeftCol),
                onClick: () => window.dispatchEvent(
                  new CustomEvent("euphemia-open-splashscreen")
                ),
                style: { cursor: "pointer" },
                title: "View Acknowledgement of Country",
                children: [
                  /* @__PURE__ */ jsx24(
                    StaticImage,
                    {
                      className: flag,
                      src: "./flags/flag-aboriginal.png",
                      alt: "Aboriginal flag"
                    }
                  ),
                  /* @__PURE__ */ jsx24(
                    StaticImage,
                    {
                      className: flag,
                      src: "./flags/flag-torres-strait.png",
                      alt: "Torres Strait flag"
                    }
                  ),
                  /* @__PURE__ */ jsx24(
                    StaticImage,
                    {
                      className: flag,
                      src: "./flags/flag-pride.png",
                      alt: "Pride flag"
                    }
                  )
                ]
              }
            ),
            links?.map((link2, i) => /* @__PURE__ */ jsxs14(
              "li",
              {
                className: cn11(`b2`, linkListItem, {
                  // The first half of the links should be on the left, second half on the right.
                  // The first item in the list is the flags, so we account for this (length - 1)
                  [linkListMobileLeftCol]: i < (links.length - 1) / 2,
                  [linkListMobileRightCol]: i >= (links.length - 1) / 2
                }),
                children: [
                  link2._type === `linkExternal` && /* @__PURE__ */ jsx24(
                    "a",
                    {
                      href: link2.url,
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: link,
                      children: link2.title
                    }
                  ),
                  link2._type === `linkInternal` && /* @__PURE__ */ jsx24(
                    Link4,
                    {
                      className: link,
                      to: `/${link2.reference.slug.current}`,
                      children: link2.title
                    }
                  )
                ]
              },
              link2._key
            ))
          ]
        }
      ) }),
      /* @__PURE__ */ jsxs14("p", { className: cn11("b2", lamMark), children: [
        "Made with",
        " ",
        /* @__PURE__ */ jsx24("a", { className: lamLink, href: "https://loveandmoney.agency/", children: "Love + Money" })
      ] })
    ] }),
    /* @__PURE__ */ jsx24("div", { "aria-hidden": true, children: isAnimationActive && /* @__PURE__ */ jsx24(Animation, {}) })
  ] });
};
var Footer_default = Footer;
var query2 = graphql2`
  query FooterQuery {
    sanitySettings {
      footer {
        links {
          ... on SanityLinkExternal {
            _key
            _type
            url
            title
          }
          ... on SanityLinkInternal {
            _key
            _type
            title
            reference {
              title
              slug {
                current
              }
            }
          }
        }
        _rawFooterText
      }
    }
  }
`;

// src/components/Common/Notification/index.tsx
import { useApp as useApp3 } from "~hooks";
import cn12 from "classnames";

// src/components/Common/Notification/styles.module.ts
var container14 = "styles-module--container--38351";
var notification = "styles-module--notification--3334c";

// src/components/Common/Notification/index.tsx
import { jsx as jsx25 } from "react/jsx-runtime";
var Notification = () => {
  const { notification: notification2 } = useApp3();
  if (!notification2.message) return null;
  return /* @__PURE__ */ jsx25("div", { className: container14, children: /* @__PURE__ */ jsx25("p", { className: cn12("b1", notification), children: notification2.message }) }, notification2.keyToggle);
};
var Notification_default = Notification;

// src/components/Common/LinkTag/index.tsx
import { Link as Link5 } from "gatsby";
import cn13 from "classnames";

// src/components/Common/LinkTag/styles.module.ts
var linkTag = "styles-module--linkTag--936e5";

// src/components/Common/LinkTag/index.tsx
import { jsx as jsx26, jsxs as jsxs15 } from "react/jsx-runtime";
var LinkTag = ({
  linkType,
  hoverColor,
  linkInternal,
  linkExternal
}) => {
  const customHoverStyle = {
    "--hover-bg-color": hoverColor.hex
  };
  return /* @__PURE__ */ jsxs15("div", { style: customHoverStyle, children: [
    linkType === `internal` && /* @__PURE__ */ jsx26(
      Link5,
      {
        to: `/${linkInternal.reference.slug.current}`,
        className: cn13(`caption`, linkTag),
        children: linkInternal.title
      }
    ),
    linkType === `external` && /* @__PURE__ */ jsx26(
      "a",
      {
        href: linkExternal.url,
        target: "_blank",
        rel: "noopener noreferrer",
        className: cn13(`caption`, linkTag),
        children: linkExternal.title
      }
    )
  ] });
};
var LinkTag_default = LinkTag;

// src/components/Common/SwiperCarousel/index.tsx
import { Children, cloneElement, useRef as useRef5 } from "react";
import cn14 from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

// src/components/Common/SwiperCarousel/components/PaginationTimer/index.tsx
import { useEffect as useEffect7, useState as useState5 } from "react";

// src/components/Common/SwiperCarousel/components/PaginationTimer/styles.module.ts
var container15 = "styles-module--container--62884";
var fill = "styles-module--fill--ac873";
var timerLine = "styles-module--timerLine--ab71a";

// src/components/Common/SwiperCarousel/components/PaginationTimer/index.tsx
import { jsx as jsx27, jsxs as jsxs16 } from "react/jsx-runtime";
var PaginationTimer = ({ swiperRef, numberOfSlides }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState5(0);
  const [currentSlidePercentage, setCurrentSlidePercentage] = useState5(0);
  const [key, setKey] = useState5(0);
  const updateKey = () => {
    setKey((prev) => prev === 0 ? 1 : 0);
  };
  const goToNextSlide = () => {
    updateKey();
    setActiveSlideIndex((prev) => {
      if (prev === numberOfSlides - 1) {
        return 0;
      }
      return prev + 1;
    });
  };
  useEffect7(() => {
    const interval = setInterval(() => {
      setCurrentSlidePercentage((prev) => {
        if (prev === 100) {
          goToNextSlide();
          return 0;
        }
        return prev + 10;
      });
    }, 300);
    return () => clearInterval(interval);
  }, []);
  useEffect7(() => {
    swiperRef.current?.slideTo(activeSlideIndex);
  }, [activeSlideIndex]);
  useEffect7(() => {
    setActiveSlideIndex(swiperRef.current?.activeIndex || 0);
    setCurrentSlidePercentage(0);
    updateKey();
  }, [swiperRef.current?.activeIndex]);
  const getWidth = (correspondingSlideIndex) => {
    if (activeSlideIndex < correspondingSlideIndex) {
      return `0%`;
    }
    if (activeSlideIndex > correspondingSlideIndex) {
      return `100%`;
    }
    return `${currentSlidePercentage}%`;
  };
  return /* @__PURE__ */ jsxs16("div", { className: container15, children: [
    /* @__PURE__ */ jsx27("div", { className: timerLine, children: /* @__PURE__ */ jsx27("div", { className: fill, style: { width: getWidth(0) } }) }),
    /* @__PURE__ */ jsx27("div", { className: timerLine, children: /* @__PURE__ */ jsx27("div", { className: fill, style: { width: getWidth(1) } }) }),
    /* @__PURE__ */ jsx27("div", { className: timerLine, children: /* @__PURE__ */ jsx27("div", { className: fill, style: { width: getWidth(2) } }) }),
    /* @__PURE__ */ jsx27("div", { className: timerLine, children: /* @__PURE__ */ jsx27("div", { className: fill, style: { width: getWidth(3) } }) })
  ] }, key);
};
var PaginationTimer_default = PaginationTimer;

// src/components/Common/SwiperCarousel/index.tsx
import { Fragment as Fragment5, jsx as jsx28, jsxs as jsxs17 } from "react/jsx-runtime";
var SwiperCarousel = ({
  children,
  className,
  withTimer,
  setActiveIndex
}) => {
  const childrenArray = Children.toArray(children);
  const swiperRef = useRef5(null);
  const handleIndexChange = (e) => {
    setActiveIndex && setActiveIndex(e.activeIndex);
  };
  return /* @__PURE__ */ jsxs17(Fragment5, { children: [
    /* @__PURE__ */ jsx28(
      Swiper,
      {
        onSwiper: (swiper) => swiperRef.current = swiper,
        onRealIndexChange: handleIndexChange,
        className: cn14(className),
        speed: 500,
        children: Children.map(childrenArray, (child, i) => /* @__PURE__ */ jsx28(SwiperSlide, { children: cloneElement(child) }, i))
      }
    ),
    withTimer && /* @__PURE__ */ jsx28(
      PaginationTimer_default,
      {
        swiperRef,
        numberOfSlides: Children.count(children)
      }
    )
  ] });
};
var SwiperCarousel_default = SwiperCarousel;

// src/components/Common/Splashscreen/index.tsx
import { useEffect as useEffect8, useRef as useRef6, useState as useState6 } from "react";

// src/components/Common/Splashscreen/styles.module.ts
var arrowIcon = "styles-module--arrowIcon--bca38";
var button3 = "styles-module--button--8c6fa";
var container16 = "styles-module--container--a8e56";
var content3 = "styles-module--content--a39d8";
var disableScroll = "styles-module--disableScroll--b736a";
var fractureContainer = "styles-module--fractureContainer--f937d";
var fracturePiece = "styles-module--fracturePiece--023b0";
var fractureRelative = "styles-module--fractureRelative--a9b7b";
var hidden = "styles-module--hidden--a49f3";
var relative = "styles-module--relative--a541c";
var textBlock = "styles-module--textBlock--562dd";

// src/components/Common/Splashscreen/index.tsx
import { useTrapFocus as useTrapFocus2 } from "~hooks";
import { graphql as graphql3, useStaticQuery as useStaticQuery3 } from "gatsby";
import { localStorage } from "~utils";
import cn15 from "classnames";
import { jsx as jsx29, jsxs as jsxs18 } from "react/jsx-runtime";
var Splashscreen = () => {
  const LAST_SESSION_KEY = `euphemia_last_session_abc`;
  const NUMBER_OF_FRACTURE_PIECES = 12;
  const updateLastSessionLocalStorage = () => {
    const currentTimeMilliseconds = (/* @__PURE__ */ new Date()).getTime();
    localStorage.setItem(LAST_SESSION_KEY, currentTimeMilliseconds);
  };
  const [isSplashScreenVisible, setIsSpashscreenVisible] = useState6(false);
  useEffect8(() => {
    const handleOpen = () => setIsSpashscreenVisible(true);
    window.addEventListener("euphemia-open-splashscreen", handleOpen);
    return () => window.removeEventListener("euphemia-open-splashscreen", handleOpen);
  }, []);
  const {
    sanitySettings: { _rawSplashscreenText }
  } = useStaticQuery3(query3);
  const contentRef = useRef6(null);
  useTrapFocus2(isSplashScreenVisible, contentRef);
  useEffect8(() => {
    if (isSplashScreenVisible) {
      document.body.classList.add(disableScroll);
    } else {
      document.body.classList.remove(disableScroll);
    }
  }, [isSplashScreenVisible]);
  const fractureArray = [...Array(NUMBER_OF_FRACTURE_PIECES)];
  const handleClick = () => {
    setIsSpashscreenVisible(false);
    updateLastSessionLocalStorage();
  };
  return /* @__PURE__ */ jsx29(
    "div",
    {
      "aria-hidden": !isSplashScreenVisible,
      className: cn15(container16, {
        [hidden]: !isSplashScreenVisible
      }),
      onClick: handleClick,
      children: /* @__PURE__ */ jsxs18("div", { className: relative, children: [
        /* @__PURE__ */ jsx29("div", { className: fractureContainer, children: /* @__PURE__ */ jsx29("div", { className: fractureRelative, children: fractureArray.map((_e, i) => /* @__PURE__ */ jsx29("div", { className: fracturePiece }, i)) }) }),
        /* @__PURE__ */ jsxs18(
          "div",
          {
            className: content3,
            ref: contentRef,
            "aria-hidden": !isSplashScreenVisible,
            children: [
              /* @__PURE__ */ jsx29(
                PortableTextRenderer_default,
                {
                  rawText: _rawSplashscreenText,
                  className: textBlock,
                  textElement: "p"
                }
              ),
              /* @__PURE__ */ jsxs18(
                "button",
                {
                  type: "button",
                  disabled: !isSplashScreenVisible,
                  className: cn15(`button-text`, button3),
                  onClick: handleClick,
                  children: [
                    "Click anywhere to continue",
                    /* @__PURE__ */ jsx29(SVG_default, { svg: "arrowRight", className: arrowIcon })
                  ]
                }
              )
            ]
          }
        )
      ] })
    }
  );
};
var Splashscreen_default = Splashscreen;
var query3 = graphql3`
  query SplashscreenQuery {
    sanitySettings {
      _rawSplashscreenText
    }
  }
`;

// src/components/Common/MagicGraphic/Graphic1/index.tsx
import cn16 from "classnames";

// src/components/Common/MagicGraphic/Graphic1/styles.module.ts
var circle = "styles-module--circle--fe11a";
var circle1 = "styles-module--circle1--bb12d";
var circle2 = "styles-module--circle2--720b2";
var circle3 = "styles-module--circle3--f90df";

// src/components/Common/MagicGraphic/Graphic1/index.tsx
import { Fragment as Fragment6, jsx as jsx30, jsxs as jsxs19 } from "react/jsx-runtime";
var Graphic1 = (props) => {
  return /* @__PURE__ */ jsxs19(Fragment6, { children: [
    /* @__PURE__ */ jsx30("div", { className: cn16(circle, circle1) }),
    /* @__PURE__ */ jsx30("div", { className: cn16(circle, circle2) }),
    /* @__PURE__ */ jsx30("div", { className: cn16(circle, circle3) })
  ] });
};
var Graphic1_default = Graphic1;

// src/components/Common/MagicGraphic/Graphic2/index.tsx
import cn17 from "classnames";

// src/components/Common/MagicGraphic/Graphic2/styles.module.ts
var shape = "styles-module--shape--14d97";
var square = "styles-module--square--be357";
var triangle = "styles-module--triangle--3d25b";
var triangleBottom = "styles-module--triangleBottom--a9947";
var triangleTop = "styles-module--triangleTop--94c4f";

// src/components/Common/MagicGraphic/Graphic2/index.tsx
import { Fragment as Fragment7, jsx as jsx31, jsxs as jsxs20 } from "react/jsx-runtime";
var Graphic2 = (props) => {
  return /* @__PURE__ */ jsxs20(Fragment7, { children: [
    /* @__PURE__ */ jsx31("div", { className: cn17(shape, square) }),
    /* @__PURE__ */ jsx31(
      SVG_default,
      {
        svg: "triangle",
        className: cn17(shape, triangle, triangleTop)
      }
    ),
    /* @__PURE__ */ jsx31(
      SVG_default,
      {
        svg: "triangle",
        className: cn17(shape, triangle, triangleBottom)
      }
    )
  ] });
};
var Graphic2_default = Graphic2;

// src/components/Common/MagicGraphic/Graphic3/index.tsx
import cn18 from "classnames";

// src/components/Common/MagicGraphic/Graphic3/styles.module.ts
var square2 = "styles-module--square--a8341";
var square1 = "styles-module--square1--813e8";
var square22 = "styles-module--square2--20ea1";
var square3 = "styles-module--square3--a9d33";

// src/components/Common/MagicGraphic/Graphic3/index.tsx
import { Fragment as Fragment8, jsx as jsx32, jsxs as jsxs21 } from "react/jsx-runtime";
var Graphic3 = (props) => {
  return /* @__PURE__ */ jsxs21(Fragment8, { children: [
    /* @__PURE__ */ jsx32("div", { className: cn18(square2, square1) }),
    /* @__PURE__ */ jsx32("div", { className: cn18(square2, square22) }),
    /* @__PURE__ */ jsx32("div", { className: cn18(square2, square3) })
  ] });
};
var Graphic3_default = Graphic3;

// src/components/Common/MagicGraphic/Graphic4/styles.module.ts
var triangle2 = "styles-module--triangle--f9c3a";
var triangle1 = "styles-module--triangle1--f99ef";
var triangle22 = "styles-module--triangle2--81535";
var triangle3 = "styles-module--triangle3--21049";
var triangle4 = "styles-module--triangle4--2ac98";

// src/components/Common/MagicGraphic/Graphic4/index.tsx
import cn19 from "classnames";
import { Fragment as Fragment9, jsx as jsx33, jsxs as jsxs22 } from "react/jsx-runtime";
var Graphic4 = (props) => {
  return /* @__PURE__ */ jsxs22(Fragment9, { children: [
    /* @__PURE__ */ jsx33(SVG_default, { svg: "triangle", className: cn19(triangle2, triangle1) }),
    /* @__PURE__ */ jsx33(SVG_default, { svg: "triangle", className: cn19(triangle2, triangle22) }),
    /* @__PURE__ */ jsx33(SVG_default, { svg: "triangle", className: cn19(triangle2, triangle3) }),
    /* @__PURE__ */ jsx33(SVG_default, { svg: "triangle", className: cn19(triangle2, triangle4) })
  ] });
};
var Graphic4_default = Graphic4;

// src/components/Common/MagicGraphic/Graphic5/styles.module.ts
var circle4 = "styles-module--circle--82dc7";
var circle12 = "styles-module--circle1--c34c8";
var circle22 = "styles-module--circle2--cea5f";
var circle32 = "styles-module--circle3--bdd38";

// src/components/Common/MagicGraphic/Graphic5/index.tsx
import cn20 from "classnames";
import { Fragment as Fragment10, jsx as jsx34, jsxs as jsxs23 } from "react/jsx-runtime";
var Graphic5 = (props) => {
  return /* @__PURE__ */ jsxs23(Fragment10, { children: [
    /* @__PURE__ */ jsx34("div", { className: cn20(circle4, circle12) }),
    /* @__PURE__ */ jsx34("div", { className: cn20(circle4, circle22) }),
    /* @__PURE__ */ jsx34("div", { className: cn20(circle4, circle32) })
  ] });
};
var Graphic5_default = Graphic5;

// src/components/Common/MagicGraphic/Graphic6/styles.module.ts
var semicircle = "styles-module--semicircle--39f0a";
var semicircle1 = "styles-module--semicircle1--e8320";
var semicircle2 = "styles-module--semicircle2--f325f";
var semicircle3 = "styles-module--semicircle3--8d663";
var semicircle4 = "styles-module--semicircle4--ee370";

// src/components/Common/MagicGraphic/Graphic6/index.tsx
import cn21 from "classnames";
import { Fragment as Fragment11, jsx as jsx35, jsxs as jsxs24 } from "react/jsx-runtime";
var Graphic6 = (props) => {
  return /* @__PURE__ */ jsxs24(Fragment11, { children: [
    /* @__PURE__ */ jsx35("div", { className: cn21(semicircle, semicircle1) }),
    /* @__PURE__ */ jsx35("div", { className: cn21(semicircle, semicircle2) }),
    /* @__PURE__ */ jsx35("div", { className: cn21(semicircle, semicircle3) }),
    /* @__PURE__ */ jsx35("div", { className: cn21(semicircle, semicircle4) })
  ] });
};
var Graphic6_default = Graphic6;

// src/components/Common/MagicGraphic/Graphic7/styles.module.ts
var shape2 = "styles-module--shape--ec103";
var shape1 = "styles-module--shape1--81884";
var shape22 = "styles-module--shape2--d3aeb";
var shape3 = "styles-module--shape3--22de6";
var shape4 = "styles-module--shape4--01acf";

// src/components/Common/MagicGraphic/Graphic7/index.tsx
import cn22 from "classnames";
import { Fragment as Fragment12, jsx as jsx36, jsxs as jsxs25 } from "react/jsx-runtime";
var Graphic7 = (props) => {
  return /* @__PURE__ */ jsxs25(Fragment12, { children: [
    /* @__PURE__ */ jsx36("div", { className: cn22(shape2, shape1) }),
    /* @__PURE__ */ jsx36("div", { className: cn22(shape2, shape22) }),
    /* @__PURE__ */ jsx36("div", { className: cn22(shape2, shape3) }),
    /* @__PURE__ */ jsx36("div", { className: cn22(shape2, shape4) })
  ] });
};
var Graphic7_default = Graphic7;

// src/components/Common/MagicGraphic/Graphic8/styles.module.ts
var circle5 = "styles-module--circle--01588";
var circle13 = "styles-module--circle1--d40c8";
var circle23 = "styles-module--circle2--c5e08";
var circle33 = "styles-module--circle3--bcfe7";
var circle42 = "styles-module--circle4--132da";
var circle52 = "styles-module--circle5--a5025";

// src/components/Common/MagicGraphic/Graphic8/index.tsx
import cn23 from "classnames";
import { Fragment as Fragment13, jsx as jsx37, jsxs as jsxs26 } from "react/jsx-runtime";
var Graphic8 = (props) => {
  return /* @__PURE__ */ jsxs26(Fragment13, { children: [
    /* @__PURE__ */ jsx37("div", { className: cn23(circle5, circle13) }),
    /* @__PURE__ */ jsx37("div", { className: cn23(circle5, circle23) }),
    /* @__PURE__ */ jsx37("div", { className: cn23(circle5, circle33) }),
    /* @__PURE__ */ jsx37("div", { className: cn23(circle5, circle42) }),
    /* @__PURE__ */ jsx37("div", { className: cn23(circle5, circle52) })
  ] });
};
var Graphic8_default = Graphic8;

// src/components/Common/MagicGraphic/Graphic9/styles.module.ts
var square4 = "styles-module--square--ee40f";
var square12 = "styles-module--square1--cf6a2";
var square23 = "styles-module--square2--6526e";
var square32 = "styles-module--square3--6999c";
var square42 = "styles-module--square4--599c9";

// src/components/Common/MagicGraphic/Graphic9/index.tsx
import cn24 from "classnames";
import { Fragment as Fragment14, jsx as jsx38, jsxs as jsxs27 } from "react/jsx-runtime";
var Graphic9 = (props) => {
  return /* @__PURE__ */ jsxs27(Fragment14, { children: [
    /* @__PURE__ */ jsx38("div", { className: cn24(square4, square12) }),
    /* @__PURE__ */ jsx38("div", { className: cn24(square4, square23) }),
    /* @__PURE__ */ jsx38("div", { className: cn24(square4, square32) }),
    /* @__PURE__ */ jsx38("div", { className: cn24(square4, square42) })
  ] });
};
var Graphic9_default = Graphic9;

// src/components/Common/MagicGraphic/Graphic10/styles.module.ts
var square5 = "styles-module--square--c8ad4";
var square13 = "styles-module--square1--9d393";
var square24 = "styles-module--square2--0543e";
var square33 = "styles-module--square3--fb04b";
var square43 = "styles-module--square4--f0a64";

// src/components/Common/MagicGraphic/Graphic10/index.tsx
import cn25 from "classnames";
import { Fragment as Fragment15, jsx as jsx39, jsxs as jsxs28 } from "react/jsx-runtime";
var Graphic10 = (props) => {
  return /* @__PURE__ */ jsxs28(Fragment15, { children: [
    /* @__PURE__ */ jsx39("div", { className: cn25(square5, square13) }),
    /* @__PURE__ */ jsx39("div", { className: cn25(square5, square24) }),
    /* @__PURE__ */ jsx39("div", { className: cn25(square5, square33) }),
    /* @__PURE__ */ jsx39("div", { className: cn25(square5, square43) })
  ] });
};
var Graphic10_default = Graphic10;

// src/components/Common/MagicGraphic/index.tsx
import { jsx as jsx40 } from "react/jsx-runtime";
var MagicGraphic = ({ graphicVariation }) => {
  switch (graphicVariation) {
    case `1`:
      return /* @__PURE__ */ jsx40(Graphic1_default, {});
    case `2`:
      return /* @__PURE__ */ jsx40(Graphic2_default, {});
    case `3`:
      return /* @__PURE__ */ jsx40(Graphic3_default, {});
    case `4`:
      return /* @__PURE__ */ jsx40(Graphic4_default, {});
    case `5`:
      return /* @__PURE__ */ jsx40(Graphic5_default, {});
    case `6`:
      return /* @__PURE__ */ jsx40(Graphic6_default, {});
    case `7`:
      return /* @__PURE__ */ jsx40(Graphic7_default, {});
    case `8`:
      return /* @__PURE__ */ jsx40(Graphic8_default, {});
    case `9`:
      return /* @__PURE__ */ jsx40(Graphic9_default, {});
    case `10`:
      return /* @__PURE__ */ jsx40(Graphic10_default, {});
    default:
      return /* @__PURE__ */ jsx40("div", { children: "No matching graphic, check configuration" });
  }
};
var MagicGraphic_default = MagicGraphic;

// src/components/Common/SliceIntroText/styles.module.ts
var leftColumn2 = "styles-module--leftColumn--cbfc2";
var rightColumn2 = "styles-module--rightColumn--38395";
var rightColumnText = "styles-module--rightColumnText--880ce";

// src/components/Common/SliceIntroText/index.tsx
import { doesRawTextHaveContent } from "~utils";
import { useInView as useInView2 } from "react-intersection-observer";
import { jsx as jsx41, jsxs as jsxs29 } from "react/jsx-runtime";
var SliceIntroText = ({ content: content5 }) => {
  const { _rawLeftColumn, _rawRightColumn, universalLink: link2 } = content5;
  const hasRawTextContent = doesRawTextHaveContent(
    _rawLeftColumn,
    _rawRightColumn
  );
  if (!hasRawTextContent) return null;
  const hasLink = link2?.link?.[0];
  const { ref, inView } = useInView2({
    rootMargin: `-90px`
  });
  return /* @__PURE__ */ jsx41("div", { ref, children: /* @__PURE__ */ jsx41(SlicePadding_default, { children: /* @__PURE__ */ jsxs29(Grid_default, { children: [
    _rawLeftColumn && /* @__PURE__ */ jsx41("div", { className: leftColumn2, children: /* @__PURE__ */ jsx41(IntersectionAnimation_default, { trigger: inView, children: /* @__PURE__ */ jsx41(
      PortableTextRenderer_default,
      {
        textElement: "h2",
        rawText: _rawLeftColumn,
        className: "h1"
      }
    ) }) }),
    _rawRightColumn && /* @__PURE__ */ jsxs29("div", { className: rightColumn2, children: [
      /* @__PURE__ */ jsx41(
        IntersectionAnimation_default,
        {
          className: rightColumnText,
          delay: 150,
          trigger: inView,
          children: /* @__PURE__ */ jsx41(
            PortableTextRenderer_default,
            {
              textElement: "p",
              className: "b1",
              rawText: _rawRightColumn
            }
          )
        }
      ),
      hasLink && /* @__PURE__ */ jsx41(IntersectionAnimation_default, { delay: 300, trigger: inView, children: /* @__PURE__ */ jsx41(
        UniversalLink_default,
        {
          jumpToSection: link2.jumpToSection,
          link: link2.link,
          text: link2.text || `Learn more`,
          iconRight: "arrowRight"
        }
      ) })
    ] })
  ] }) }) });
};
var SliceIntroText_default = SliceIntroText;

// src/components/Common/ToolboxAside/index.tsx
import { useRef as useRef7 } from "react";
import { useApp as useApp5, useTrapFocus as useTrapFocus3, useDisableFocus } from "~hooks";
import cn27 from "classnames";

// src/components/Common/ToolboxAside/styles.module.ts
var active2 = "styles-module--active--3b97f";
var advisorNetworkLink = "styles-module--advisorNetworkLink--08980";
var backdrop = "styles-module--backdrop--c6881";
var closeButton = "styles-module--closeButton--08428";
var contactItem = "styles-module--contactItem--bbb76";
var contactName = "styles-module--contactName--1596c";
var contactsList = "styles-module--contactsList--76e25";
var container17 = "styles-module--container--990c5";
var content4 = "styles-module--content--ec2ab";
var removeButton = "styles-module--removeButton--2fbef";
var text3 = "styles-module--text--62ba8";
var topRow = "styles-module--topRow--8139e";

// src/components/Common/ToolboxAside/components/RequestContactsForm/index.tsx
import { useEffect as useEffect9, useState as useState7 } from "react";
import cn26 from "classnames";

// src/components/Common/ToolboxAside/components/RequestContactsForm/styles.module.ts
var abc = "styles-module--abc--8c619";
var buttonCaption = "styles-module--buttonCaption--954a6";
var container18 = "styles-module--container--91c3c";
var disclaimer = "styles-module--disclaimer--dca49";
var hidden2 = "styles-module--hidden--15a71";
var inlineFields = "styles-module--inlineFields--22d04";
var input2 = "styles-module--input--42dd7";
var submitButton = "styles-module--submitButton--e8726";
var submitButtonContainer = "styles-module--submitButtonContainer--27ce3";
var text4 = "styles-module--text--72d6f";
var visible4 = "styles-module--visible--7bcb8";

// src/components/Common/ToolboxAside/components/RequestContactsForm/requestContactsFormData.ts
var requestContactsFormData = {
  name: {
    placeholder: "Full name"
  },
  email: {
    placeholder: "Email"
  },
  message: {
    placeholder: "Tell us about your business",
    maxLength: 150
  },
  honeypot: {
    placeholder: "Type your message here..."
  }
};
var requestContactsFormData_default = requestContactsFormData;

// src/components/Common/ToolboxAside/components/RequestContactsForm/index.tsx
import { useApp as useApp4 } from "~hooks";
import { jsx as jsx42, jsxs as jsxs30 } from "react/jsx-runtime";
var RequestContactsForm = () => {
  const formFields = [`name`, `email`, `honeypot`];
  const initialFormValues = {};
  for (const field of formFields) {
    initialFormValues[field] = ``;
  }
  const [formValues, setFormValues] = useState7(initialFormValues);
  const [state, setState] = useState7(`idle`);
  const { isToolboxOpen, setIsToolboxOpen, setToolbox, toolbox } = useApp4();
  const handleUpdateValue = (value, formField) => {
    setFormValues((prev) => ({ ...prev, [formField]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formValues.honeypot) return;
    setState(`submitting`);
    const messageContent = {
      email: formValues.email || ``,
      name: formValues.name || ``,
      toolbox
    };
    try {
      await new Promise((resolve) => setTimeout(resolve, 400));
      void messageContent;
      setState(`submitted`);
    } catch (error3) {
      console.error(error3);
      setState(`error`);
    }
  };
  const isSubmitting = state === `submitting`;
  const hasSubmitted = state === `submitted`;
  const hasError = state === `error`;
  const captionText = () => {
    if (hasError) {
      return `Sorry, something went wrong. Please try again in a few minutes.`;
    }
    if (hasSubmitted) {
      return `Your connection request has been sent. Congratulations on tapping into the power of the network effect!`;
    }
    return `PLACEHOLDER`;
  };
  const disableFormFields = isSubmitting || hasSubmitted;
  const isButtonDisabled = () => {
    if (hasSubmitted || isSubmitting) return true;
    return false;
  };
  const resetAllFields = () => {
    setFormValues(initialFormValues);
    setToolbox([]);
    setState("idle");
  };
  const resetIfContactsIsClosed = () => {
    setIsToolboxOpen((current) => {
      if (!current) resetAllFields();
      return current;
    });
  };
  useEffect9(() => {
    if (!isToolboxOpen && hasSubmitted) {
      setTimeout(resetIfContactsIsClosed, 500);
    }
  }, [isToolboxOpen]);
  const showButtonMessage = hasError || hasSubmitted;
  return /* @__PURE__ */ jsxs30("div", { className: container18, children: [
    /* @__PURE__ */ jsx42("p", { className: cn26(`b1`, text4), children: "You\u2019re almost there! Enter your details to receive information about your selected resources*" }),
    /* @__PURE__ */ jsxs30("form", { onSubmit: handleSubmit, children: [
      /* @__PURE__ */ jsxs30("div", { className: inlineFields, children: [
        /* @__PURE__ */ jsx42(
          TextInput_default,
          {
            className: input2,
            autocomplete: "name",
            label: requestContactsFormData_default.name.label,
            placeholder: requestContactsFormData_default.name.placeholder,
            value: formValues["name"],
            onChange: (value) => handleUpdateValue(value, "name"),
            disabled: disableFormFields,
            required: true
          }
        ),
        /* @__PURE__ */ jsx42(
          TextInput_default,
          {
            className: input2,
            type: "email",
            autocomplete: "email",
            label: requestContactsFormData_default.email.label,
            placeholder: requestContactsFormData_default.email.placeholder,
            value: formValues["email"],
            onChange: (value) => handleUpdateValue(value, "email"),
            disabled: disableFormFields,
            required: true
          }
        )
      ] }),
      /* @__PURE__ */ jsx42(
        TextInput_default,
        {
          className: cn26(input2, abc),
          label: requestContactsFormData_default.honeypot.label,
          placeholder: requestContactsFormData_default.honeypot.placeholder,
          isHoneypot: true
        }
      ),
      /* @__PURE__ */ jsx42("p", { className: cn26(`caption`, disclaimer), children: "*We will put you in touch with selected contacts if appropriate" }),
      /* @__PURE__ */ jsxs30("div", { className: submitButtonContainer, children: [
        /* @__PURE__ */ jsxs30(
          Button_default,
          {
            className: cn26(submitButton, {
              [hidden2]: showButtonMessage
            }),
            fluid: true,
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
        /* @__PURE__ */ jsx42(
          "p",
          {
            "aria-hidden": !showButtonMessage,
            className: cn26(`caption`, buttonCaption, {
              [visible4]: showButtonMessage
            }),
            children: captionText()
          }
        )
      ] })
    ] })
  ] });
};
var RequestContactsForm_default = RequestContactsForm;

// src/components/Common/ToolboxAside/index.tsx
import { Link as Link6 } from "gatsby";
import { jsx as jsx43, jsxs as jsxs31 } from "react/jsx-runtime";
var ToolboxAside = () => {
  const { isToolboxOpen, setIsToolboxOpen, toolbox, setToolbox } = useApp5();
  const closeAside = () => {
    setIsToolboxOpen(false);
  };
  const hasContacts = toolbox.length > 0;
  const removeContact = (id) => {
    setToolbox((prev) => prev.filter((contact) => contact._id !== id));
  };
  const containerRef = useRef7(null);
  useTrapFocus3(isToolboxOpen, containerRef);
  useDisableFocus(!isToolboxOpen, containerRef);
  return /* @__PURE__ */ jsxs31(
    "div",
    {
      className: cn27(container17, { [active2]: isToolboxOpen }),
      "aria-hidden": !isToolboxOpen,
      children: [
        /* @__PURE__ */ jsx43("div", { className: backdrop, onClick: closeAside, "aria-hidden": true }),
        /* @__PURE__ */ jsxs31("div", { className: content4, ref: containerRef, children: [
          /* @__PURE__ */ jsxs31("div", { className: contactsList, children: [
            /* @__PURE__ */ jsxs31("div", { className: topRow, children: [
              /* @__PURE__ */ jsx43("h2", { className: "h2", children: "Backpack" }),
              /* @__PURE__ */ jsx43(
                "button",
                {
                  onClick: closeAside,
                  className: cn27(`caption`, closeButton),
                  children: /* @__PURE__ */ jsx43(SVG_default, { svg: "x" })
                }
              )
            ] }),
            !hasContacts && /* @__PURE__ */ jsxs31("div", { className: cn27(text3, `h4`), children: [
              /* @__PURE__ */ jsx43("p", { children: "Your Backpack is empty!" }),
              /* @__PURE__ */ jsxs31("p", { children: [
                "Check out our",
                " ",
                /* @__PURE__ */ jsx43(
                  Link6,
                  {
                    onClick: closeAside,
                    to: "/startup-backpack",
                    className: advisorNetworkLink,
                    children: "Startup Backpack"
                  }
                ),
                " ",
                "to add resources."
              ] })
            ] }),
            toolbox.map(
              ({ name, subheading1, subheading2, _id, description: description2 }) => {
                const getCaptionContent = () => {
                  const bestCase = [subheading1, subheading2].filter(Boolean).join(", ");
                  if (bestCase) return bestCase;
                  const getTruncatedDescription = () => {
                    const descriptionSnippetMaxCharacters = 130;
                    const isDescriptionLongerThanMaxLength = description2.length > descriptionSnippetMaxCharacters;
                    if (!isDescriptionLongerThanMaxLength) return description2;
                    const truncatedDescription = description2.substring(0, descriptionSnippetMaxCharacters).split(" ").slice(0, -1).join(" ");
                    return `${truncatedDescription}...`;
                  };
                  return getTruncatedDescription();
                };
                return /* @__PURE__ */ jsxs31("div", { className: contactItem, children: [
                  /* @__PURE__ */ jsxs31("div", { children: [
                    /* @__PURE__ */ jsx43("h3", { className: cn27(`b1`, contactName), children: name }),
                    /* @__PURE__ */ jsx43("div", { className: "caption", children: getCaptionContent() })
                  ] }),
                  /* @__PURE__ */ jsx43("div", { children: /* @__PURE__ */ jsx43(
                    "button",
                    {
                      className: cn27("caption", removeButton),
                      onClick: () => removeContact(_id),
                      children: "Remove"
                    }
                  ) })
                ] }, _id);
              }
            )
          ] }),
          toolbox?.[0] && /* @__PURE__ */ jsx43(RequestContactsForm_default, {})
        ] })
      ]
    }
  );
};
var ToolboxAside_default = ToolboxAside;

// src/components/Common/UniversalLink/index.tsx
import cn28 from "classnames";
import { jsx as jsx44 } from "react/jsx-runtime";
var UniversalLink = ({
  link: linkArray,
  jumpToSection,
  text: text5,
  iconLeft,
  iconRight,
  className
}) => {
  const link2 = linkArray?.[0];
  const jumpToSectionText = jumpToSection ? `#${jumpToSection}` : ``;
  switch (link2._type) {
    case `externalUrl`:
      return /* @__PURE__ */ jsx44(
        Button_default,
        {
          iconLeft,
          iconRight,
          href: `${link2.url}${jumpToSectionText}`,
          className: cn28(className),
          children: text5
        }
      );
    case `pageReference`:
      return /* @__PURE__ */ jsx44(
        Button_default,
        {
          iconLeft,
          iconRight,
          to: `/${link2.page.slug.current}${jumpToSectionText}`,
          className: cn28(className),
          children: text5
        }
      );
    case `caseStudyReference`:
      return /* @__PURE__ */ jsx44(
        Button_default,
        {
          iconLeft,
          iconRight,
          to: `/awesome-stories/${link2.caseStudy.slug.current}${jumpToSectionText}`,
          className: cn28(className),
          children: text5
        }
      );
    default:
      return null;
  }
};
var UniversalLink_default = UniversalLink;

// src/components/Common/UniversalLinkWrapper/index.tsx
import cn29 from "classnames";
import { Link as Link7 } from "gatsby";
import { jsx as jsx45 } from "react/jsx-runtime";
var UniversalLinkWrapper = ({
  link: { link: linkArray, jumpToSection },
  children,
  className
}) => {
  const link2 = linkArray?.[0];
  const jumpToSectionText = jumpToSection ? `#${jumpToSection}` : "";
  switch (link2._type) {
    case "externalUrl":
      return /* @__PURE__ */ jsx45(
        "a",
        {
          className: cn29(className),
          target: "_blank",
          rel: "noopener noreferrer",
          href: link2.url,
          children
        }
      );
    case "pageReference":
      return /* @__PURE__ */ jsx45(
        Link7,
        {
          to: `/${link2.page.slug.current}${jumpToSectionText}`,
          className: cn29(className),
          children
        }
      );
    case "caseStudyReference":
      return /* @__PURE__ */ jsx45(
        Link7,
        {
          to: `awesome-stories/${link2.caseStudy.slug.current}${jumpToSectionText}`,
          className: cn29(className),
          children
        }
      );
    default:
      return null;
  }
};
var UniversalLinkWrapper_default = UniversalLinkWrapper;

// src/components/Common/NetworkLetterGraphic/1A/index.tsx
import cn30 from "classnames";

// src/components/Common/NetworkLetterGraphic/1A/styles.module.ts
var active3 = "styles-module--active--e9bc2";
var column = "styles-module--column--6439d";
var column1 = "styles-module--column1--902a2";
var column2 = "styles-module--column2--55429";
var column3 = "styles-module--column3--54c86";
var container19 = "styles-module--container--4293a";
var filled = "styles-module--filled--95a60";
var row7 = "styles-module--row--b8d7f";
var row12 = "styles-module--row1--f74c5";
var row22 = "styles-module--row2--9bf4d";
var row32 = "styles-module--row3--7fc39";
var row42 = "styles-module--row4--aec88";

// src/components/Common/NetworkLetterGraphic/1A/index.tsx
import { jsx as jsx46, jsxs as jsxs32 } from "react/jsx-runtime";
var NetworkLetter1A = ({ active: active7 }) => {
  return /* @__PURE__ */ jsxs32("div", { className: cn30(container19, { [active3]: active7 }), children: [
    /* @__PURE__ */ jsxs32("div", { className: cn30(row7, row12), children: [
      /* @__PURE__ */ jsx46("div", { className: cn30(column, column1) }),
      /* @__PURE__ */ jsx46("div", { className: cn30(column, column2, filled) }),
      /* @__PURE__ */ jsx46("div", { className: cn30(column, column3) })
    ] }),
    /* @__PURE__ */ jsxs32("div", { className: cn30(row7, row22), children: [
      /* @__PURE__ */ jsx46("div", { className: cn30(column, column1, filled) }),
      /* @__PURE__ */ jsx46("div", { className: cn30(column, column2) }),
      /* @__PURE__ */ jsx46("div", { className: cn30(column, column3, filled) })
    ] }),
    /* @__PURE__ */ jsxs32("div", { className: cn30(row7, row32), children: [
      /* @__PURE__ */ jsx46("div", { className: cn30(column, column1, filled) }),
      /* @__PURE__ */ jsx46("div", { className: cn30(column, column2, filled) }),
      /* @__PURE__ */ jsx46("div", { className: cn30(column, column3, filled) })
    ] }),
    /* @__PURE__ */ jsxs32("div", { className: cn30(row7, row42), children: [
      /* @__PURE__ */ jsx46("div", { className: cn30(column, column1, filled) }),
      /* @__PURE__ */ jsx46("div", { className: cn30(column, column2) }),
      /* @__PURE__ */ jsx46("div", { className: cn30(column, column3, filled) })
    ] })
  ] });
};
var A_default = NetworkLetter1A;

// src/components/Common/NetworkLetterGraphic/2L/index.tsx
import cn31 from "classnames";

// src/components/Common/NetworkLetterGraphic/2L/styles.module.ts
var active4 = "styles-module--active--7c0f7";
var column4 = "styles-module--column--b4f5e";
var column12 = "styles-module--column1--59ccd";
var column22 = "styles-module--column2--0e10b";
var container20 = "styles-module--container--ffbbb";
var filled2 = "styles-module--filled--70e87";
var row8 = "styles-module--row--4c39b";
var row13 = "styles-module--row1--a86cd";
var row23 = "styles-module--row2--7222a";

// src/components/Common/NetworkLetterGraphic/2L/index.tsx
import { jsx as jsx47, jsxs as jsxs33 } from "react/jsx-runtime";
var NetworkLetter2L = ({ active: active7 }) => {
  return /* @__PURE__ */ jsxs33("div", { className: cn31(container20, { [active4]: active7 }), children: [
    /* @__PURE__ */ jsxs33("div", { className: cn31(row8, row13), children: [
      /* @__PURE__ */ jsx47("div", { className: cn31(column4, column12, filled2) }),
      /* @__PURE__ */ jsx47("div", { className: cn31(column4, column22) })
    ] }),
    /* @__PURE__ */ jsxs33("div", { className: cn31(row8, row23), children: [
      /* @__PURE__ */ jsx47("div", { className: cn31(column4, column12, filled2) }),
      /* @__PURE__ */ jsx47("div", { className: cn31(column4, column22, filled2) })
    ] })
  ] });
};
var L_default = NetworkLetter2L;

// src/components/Common/NetworkLetterGraphic/3A/index.tsx
import cn32 from "classnames";

// src/components/Common/NetworkLetterGraphic/3A/styles.module.ts
var active5 = "styles-module--active--ad5d5";
var column5 = "styles-module--column--ced4a";
var column13 = "styles-module--column1--8c5bb";
var column23 = "styles-module--column2--d8ca9";
var column32 = "styles-module--column3--ff248";
var container21 = "styles-module--container--08edd";
var filled3 = "styles-module--filled--7f2a2";
var row9 = "styles-module--row--5214b";
var row14 = "styles-module--row1--62712";
var row24 = "styles-module--row2--84df9";
var row33 = "styles-module--row3--0ec0a";
var row43 = "styles-module--row4--cb9ff";

// src/components/Common/NetworkLetterGraphic/3A/index.tsx
import { jsx as jsx48, jsxs as jsxs34 } from "react/jsx-runtime";
var NetworkLetter3A = ({ active: active7 }) => {
  return /* @__PURE__ */ jsxs34("div", { className: cn32(container21, { [active5]: active7 }), children: [
    /* @__PURE__ */ jsxs34("div", { className: cn32(row9, row14), children: [
      /* @__PURE__ */ jsx48("div", { className: cn32(column5, column13) }),
      /* @__PURE__ */ jsx48("div", { className: cn32(column5, column23, filled3) }),
      /* @__PURE__ */ jsx48("div", { className: cn32(column5, column32) })
    ] }),
    /* @__PURE__ */ jsxs34("div", { className: cn32(row9, row24), children: [
      /* @__PURE__ */ jsx48("div", { className: cn32(column5, column13, filled3) }),
      /* @__PURE__ */ jsx48("div", { className: cn32(column5, column23) }),
      /* @__PURE__ */ jsx48("div", { className: cn32(column5, column32, filled3) })
    ] }),
    /* @__PURE__ */ jsxs34("div", { className: cn32(row9, row33), children: [
      /* @__PURE__ */ jsx48("div", { className: cn32(column5, column13, filled3) }),
      /* @__PURE__ */ jsx48("div", { className: cn32(column5, column23, filled3) }),
      /* @__PURE__ */ jsx48("div", { className: cn32(column5, column32, filled3) })
    ] }),
    /* @__PURE__ */ jsxs34("div", { className: cn32(row9, row43), children: [
      /* @__PURE__ */ jsx48("div", { className: cn32(column5, column13, filled3) }),
      /* @__PURE__ */ jsx48("div", { className: cn32(column5, column23) }),
      /* @__PURE__ */ jsx48("div", { className: cn32(column5, column32, filled3) })
    ] })
  ] });
};
var A_default2 = NetworkLetter3A;

// src/components/Common/NetworkLetterGraphic/4P/index.tsx
import cn33 from "classnames";

// src/components/Common/NetworkLetterGraphic/4P/styles.module.ts
var active6 = "styles-module--active--b7cd9";
var column6 = "styles-module--column--643a2";
var column14 = "styles-module--column1--df995";
var column24 = "styles-module--column2--0cacc";
var column33 = "styles-module--column3--a309f";
var container22 = "styles-module--container--9314d";
var filled4 = "styles-module--filled--d217c";
var row10 = "styles-module--row--b17a2";
var row15 = "styles-module--row1--0880a";
var row25 = "styles-module--row2--15d51";
var row34 = "styles-module--row3--3177d";
var row44 = "styles-module--row4--c2b64";

// src/components/Common/NetworkLetterGraphic/4P/index.tsx
import { jsx as jsx49, jsxs as jsxs35 } from "react/jsx-runtime";
var NetworkLetter4P = ({ active: active7 }) => {
  return /* @__PURE__ */ jsxs35("div", { className: cn33(container22, { [active6]: active7 }), children: [
    /* @__PURE__ */ jsxs35("div", { className: cn33(row10, row15), children: [
      /* @__PURE__ */ jsx49("div", { className: cn33(column6, column14) }),
      /* @__PURE__ */ jsx49("div", { className: cn33(column6, column24, filled4) }),
      /* @__PURE__ */ jsx49("div", { className: cn33(column6, column33) })
    ] }),
    /* @__PURE__ */ jsxs35("div", { className: cn33(row10, row25), children: [
      /* @__PURE__ */ jsx49("div", { className: cn33(column6, column14, filled4) }),
      /* @__PURE__ */ jsx49("div", { className: cn33(column6, column24) }),
      /* @__PURE__ */ jsx49("div", { className: cn33(column6, column33, filled4) })
    ] }),
    /* @__PURE__ */ jsxs35("div", { className: cn33(row10, row34), children: [
      /* @__PURE__ */ jsx49("div", { className: cn33(column6, column14, filled4) }),
      /* @__PURE__ */ jsx49("div", { className: cn33(column6, column24, filled4) }),
      /* @__PURE__ */ jsx49("div", { className: cn33(column6, column33) })
    ] }),
    /* @__PURE__ */ jsxs35("div", { className: cn33(row10, row44), children: [
      /* @__PURE__ */ jsx49("div", { className: cn33(column6, column14, filled4) }),
      /* @__PURE__ */ jsx49("div", { className: cn33(column6, column24) }),
      /* @__PURE__ */ jsx49("div", { className: cn33(column6, column33) })
    ] })
  ] });
};
var P_default = NetworkLetter4P;

// src/components/Common/NetworkLetterGraphic/index.tsx
import cn34 from "classnames";
import { jsx as jsx50 } from "react/jsx-runtime";
var NetworkLetterGraphic = ({ graphic, active: active7, className }) => {
  const graphicComponent = () => {
    switch (graphic) {
      case `1A`:
        return /* @__PURE__ */ jsx50(A_default, { active: active7 });
      case `2L`:
        return /* @__PURE__ */ jsx50(L_default, { active: active7 });
      case `3A`:
        return /* @__PURE__ */ jsx50(A_default2, { active: active7 });
      case `4P`:
        return /* @__PURE__ */ jsx50(P_default, { active: active7 });
      default:
        return null;
    }
  };
  return /* @__PURE__ */ jsx50("div", { className: cn34(className), children: graphicComponent() });
};
var NetworkLetterGraphic_default = NetworkLetterGraphic;

// src/components/Common/CountUp/index.tsx
import { useEffect as useEffect10, useState as useState8 } from "react";

// src/components/Common/CountUp/styles.module.ts
var number = "styles-module--number--6f374";
var plus = "styles-module--plus--26735";
var visible5 = "styles-module--visible--e7c5f";

// src/components/Common/CountUp/index.tsx
import cn35 from "classnames";
import { useSpring, animated } from "react-spring";
import { useInView as useInView3 } from "react-intersection-observer";
import { formatNumberWithCommas } from "~utils";
import { jsx as jsx51, jsxs as jsxs36 } from "react/jsx-runtime";
var CountUp = ({
  number: number2,
  className,
  showPlus,
  postNumberText,
  preNumberText,
  delayMs
}) => {
  const { ref, inView } = useInView3({
    triggerOnce: true
  });
  const [displayNumber, setDisplayNumber] = useState8(0);
  const [isPlusVisible, setIsPlusVisible] = useState8(false);
  const { number: animatedNumber } = useSpring({
    from: { number: 0 },
    number: displayNumber,
    config: { friction: 50, tension: 200 },
    onRest: () => setIsPlusVisible(true)
  });
  useEffect10(() => {
    if (inView) {
      setTimeout(() => {
        setDisplayNumber(number2);
      }, delayMs || 0);
    }
  }, [inView]);
  return /* @__PURE__ */ jsx51("div", { ref, children: /* @__PURE__ */ jsxs36("div", { className: cn35(className, number), children: [
    preNumberText && /* @__PURE__ */ jsx51("span", { children: preNumberText }),
    /* @__PURE__ */ jsx51(animated.div, { children: animatedNumber.to((n) => formatNumberWithCommas(n.toFixed(0))) }),
    postNumberText && /* @__PURE__ */ jsx51("span", { children: postNumberText }),
    showPlus && /* @__PURE__ */ jsx51(
      "span",
      {
        className: cn35(plus, { [visible5]: isPlusVisible }),
        children: "+"
      }
    )
  ] }) });
};
var CountUp_default = CountUp;

// src/components/Sanity/PortableTextRenderer/index.tsx
import { PortableText } from "@portabletext/react";
import cn36 from "classnames";

// src/components/Sanity/PortableTextRenderer/styles.module.ts
var anchor = "styles-module--anchor--c1420";
var container23 = "styles-module--container--34989";
var orderedListItem = "styles-module--orderedListItem--b0490";
var unorderedListItem = "styles-module--unorderedListItem--ae42c";

// src/components/Sanity/PortableTextRenderer/index.tsx
import { jsx as jsx52 } from "react/jsx-runtime";
var customComponentsBase = {
  listItem: {
    number: ({ children }) => {
      const nodeStyle = children.props.node.style;
      return /* @__PURE__ */ jsx52("li", { className: cn36(orderedListItem, nodeStyle), children });
    },
    bullet: ({ children }) => {
      const nodeStyle = children.props.node.style;
      return /* @__PURE__ */ jsx52("li", { className: cn36(unorderedListItem, nodeStyle), children });
    }
  },
  marks: {
    link: ({ children, value }) => {
      const rel = value.href.startsWith("/") ? void 0 : "noreferrer noopener";
      return /* @__PURE__ */ jsx52(
        "a",
        {
          className: anchor,
          style: { textDecoration: `underline` },
          href: value.href,
          rel,
          children
        }
      );
    }
  }
};
var cmsElementTextComponents = {
  ...customComponentsBase,
  block: {
    normal: ({ children }) => /* @__PURE__ */ jsx52("p", { children }),
    d2: ({ children }) => /* @__PURE__ */ jsx52("h2", { className: "d2", children }),
    h1: ({ children }) => /* @__PURE__ */ jsx52("h2", { className: "h1", children }),
    h2: ({ children }) => /* @__PURE__ */ jsx52("h3", { className: "h2", children }),
    h3: ({ children }) => /* @__PURE__ */ jsx52("h4", { className: "h3", children }),
    h4: ({ children }) => /* @__PURE__ */ jsx52("h5", { className: "h4", children }),
    b1: ({ children }) => /* @__PURE__ */ jsx52("p", { className: "b1", children }),
    b2: ({ children }) => /* @__PURE__ */ jsx52("p", { className: "b2", children }),
    caption: ({ children }) => /* @__PURE__ */ jsx52("p", { className: "caption", children }),
    button: ({ children }) => /* @__PURE__ */ jsx52("p", { className: "button", children }),
    underline: ({ children }) => /* @__PURE__ */ jsx52("p", { className: "underline", children })
  }
};
var specifiedElementTextComponents = (textElement) => {
  const Element = textElement;
  return {
    ...customComponentsBase,
    block: {
      normal: ({ children }) => /* @__PURE__ */ jsx52(Element, { children }),
      d2: ({ children }) => /* @__PURE__ */ jsx52(Element, { className: "d2", children }),
      h1: ({ children }) => /* @__PURE__ */ jsx52(Element, { className: "h1", children }),
      h2: ({ children }) => /* @__PURE__ */ jsx52(Element, { className: "h2", children }),
      h3: ({ children }) => /* @__PURE__ */ jsx52(Element, { className: "h3", children }),
      h4: ({ children }) => /* @__PURE__ */ jsx52(Element, { className: "h4", children }),
      b1: ({ children }) => /* @__PURE__ */ jsx52(Element, { className: "b1", children }),
      b2: ({ children }) => /* @__PURE__ */ jsx52(Element, { className: "b2", children }),
      caption: ({ children }) => /* @__PURE__ */ jsx52(Element, { className: "caption", children }),
      button: ({ children }) => /* @__PURE__ */ jsx52(Element, { className: "button", children }),
      underline: ({ children }) => /* @__PURE__ */ jsx52(Element, { className: "underline", children })
    }
  };
};
var PortableTextRenderer = ({ rawText, className, textElement }) => {
  const getComponents = () => {
    if (!textElement) return cmsElementTextComponents;
    return specifiedElementTextComponents(textElement);
  };
  return /* @__PURE__ */ jsx52("div", { className: cn36(container23, className), children: /* @__PURE__ */ jsx52(PortableText, { value: rawText, components: getComponents() }) });
};
var PortableTextRenderer_default = PortableTextRenderer;

// src/components/Sanity/SanitySlice/index.tsx
import slices from "~slices";
import { jsx as jsx53 } from "react/jsx-runtime";
var SanitySlice = (props) => {
  const { data } = props;
  const { _type: sliceType } = data;
  if (!sliceType) {
    console.error(
      `SanitySlice requires a valid _type, but none was received. Check the /templates/page file to ensure a valid slice type is being passed to the SanitySlice component.`
    );
    return null;
  }
  const sliceName = sliceType[0].toUpperCase() + sliceType.slice(1, sliceType.length);
  const SliceSection = slices?.[sliceName];
  if (!SliceSection) {
    console.error(
      `Can't find Slice '${sliceName}', are you sure it has been configured in the slices directory?`
    );
    return null;
  }
  return /* @__PURE__ */ jsx53("section", { id: sliceType, children: /* @__PURE__ */ jsx53(SliceSection, { ...props }) });
};
var SanitySlice_default = SanitySlice;

// src/components/CaseStudy/CaseStudyAtf/index.tsx
import { useEffect as useEffect11, useRef as useRef8 } from "react";

// src/components/CaseStudy/CaseStudyAtf/styles.module.ts
var container24 = "styles-module--container--650e9";
var description = "styles-module--description--70bc1";
var mainContent = "styles-module--mainContent--f0c79";
var tag = "styles-module--tag--03f87";
var tags = "styles-module--tags--dc1dc";
var title = "styles-module--title--c60a6";
var titleAndTags = "styles-module--titleAndTags--1cb24";
var video = "styles-module--video--1024e";
var videoContainer = "styles-module--videoContainer--b7d7c";

// src/components/CaseStudy/CaseStudyAtf/index.tsx
import cn37 from "classnames";
import { useInView as useInView4 } from "react-intersection-observer";
import { jsx as jsx54, jsxs as jsxs37 } from "react/jsx-runtime";
var CaseStudyAtf = ({ description: description2, video: video2, tags: tags2, title: title2 }) => {
  const { ref, inView } = useInView4({
    rootMargin: `-90px`,
    triggerOnce: true
  });
  const videoRef = useRef8(null);
  useEffect11(() => {
    setTimeout(() => {
      videoRef.current?.play();
    }, 600);
  }, []);
  return /* @__PURE__ */ jsxs37("div", { className: container24, ref, children: [
    /* @__PURE__ */ jsx54("div", { className: videoContainer, children: /* @__PURE__ */ jsx54(
      "video",
      {
        ref: videoRef,
        className: video,
        playsInline: true,
        muted: true,
        src: video2.asset.url
      }
    ) }),
    /* @__PURE__ */ jsxs37(SlicePadding_default, { className: mainContent, children: [
      /* @__PURE__ */ jsx54("div", { className: titleAndTags, children: /* @__PURE__ */ jsx54("div", { children: /* @__PURE__ */ jsxs37(IntersectionAnimation_default, { trigger: inView, children: [
        /* @__PURE__ */ jsx54("h1", { className: cn37(`d2`, title), children: title2 }),
        tags2?.[0] && /* @__PURE__ */ jsx54("div", { className: tags, children: tags2.map((tag2, i) => /* @__PURE__ */ jsx54(
          IntersectionAnimation_default,
          {
            trigger: inView,
            animation: "fadeGrow",
            delay: 50 + (i + 1) * 150,
            children: /* @__PURE__ */ jsx54("div", { className: cn37(`b2`, tag), children: tag2 })
          },
          i
        )) })
      ] }) }) }),
      /* @__PURE__ */ jsx54(IntersectionAnimation_default, { delay: 300, trigger: inView, children: /* @__PURE__ */ jsx54("p", { className: cn37(`h4`, description), children: description2 }) })
    ] })
  ] });
};
var CaseStudyAtf_default = CaseStudyAtf;

// src/components/CaseStudy/CaseStudyDetails/styles.module.ts
var container25 = "styles-module--container--cc591";
var founder = "styles-module--founder--26b18";
var founderListItem = "styles-module--founderListItem--096cf";
var founderName = "styles-module--founderName--06f60";
var founders = "styles-module--founders--c4916";
var grid2 = "styles-module--grid--a6382";
var info = "styles-module--info--2ddc0";
var label3 = "styles-module--label--6602c";

// src/components/CaseStudy/CaseStudyDetails/index.tsx
import cn38 from "classnames";
import { GatsbyImage } from "gatsby-plugin-image";
import { useInView as useInView5 } from "react-intersection-observer";
import { jsx as jsx55, jsxs as jsxs38 } from "react/jsx-runtime";
var CaseStudyDetails = ({
  placeFounded,
  founders: founders2,
  valuation,
  yearFounded
}) => {
  const { ref, inView } = useInView5({
    rootMargin: `-90px`,
    triggerOnce: true
  });
  return /* @__PURE__ */ jsx55("div", { ref, className: container25, children: /* @__PURE__ */ jsx55(SliceConfig_default, { children: /* @__PURE__ */ jsxs38(Grid_default, { className: grid2, children: [
    /* @__PURE__ */ jsxs38(
      IntersectionAnimation_default,
      {
        className: info,
        trigger: inView,
        delay: 100,
        children: [
          /* @__PURE__ */ jsx55("h4", { className: cn38(`caption`, label3), children: "Year Founded" }),
          /* @__PURE__ */ jsx55("div", { className: "h2", children: yearFounded })
        ]
      }
    ),
    valuation && /* @__PURE__ */ jsxs38(
      IntersectionAnimation_default,
      {
        className: info,
        trigger: inView,
        delay: 250,
        children: [
          /* @__PURE__ */ jsx55("h4", { className: cn38(`caption`, label3), children: "Valuation" }),
          /* @__PURE__ */ jsx55("div", { className: "h2", children: valuation })
        ]
      }
    ),
    /* @__PURE__ */ jsxs38(
      IntersectionAnimation_default,
      {
        className: info,
        trigger: inView,
        delay: 400,
        children: [
          /* @__PURE__ */ jsx55("h4", { className: cn38(`caption`, label3), children: "Place Founded" }),
          /* @__PURE__ */ jsx55("div", { className: "h2", children: placeFounded })
        ]
      }
    ),
    /* @__PURE__ */ jsxs38(
      IntersectionAnimation_default,
      {
        className: cn38(founders),
        trigger: inView,
        delay: 550,
        children: [
          /* @__PURE__ */ jsx55("h4", { className: cn38(`caption`, label3), children: "Founders" }),
          /* @__PURE__ */ jsx55("ul", { children: founders2.map((founder2, i) => /* @__PURE__ */ jsx55("li", { className: founderListItem, children: /* @__PURE__ */ jsxs38(
            IntersectionAnimation_default,
            {
              trigger: inView,
              delay: 700 + (i + 1) * 100,
              className: founder,
              children: [
                founder2.image && /* @__PURE__ */ jsx55(
                  GatsbyImage,
                  {
                    image: founder2.image.asset.gatsbyImageData,
                    alt: founder2.name,
                    style: {
                      width: 43,
                      height: 43,
                      marginRight: `0.75rem`
                    }
                  }
                ),
                /* @__PURE__ */ jsx55("div", { className: cn38(`button-text`, founderName), children: founder2.name })
              ]
            }
          ) }, i)) })
        ]
      }
    )
  ] }) }) });
};
var CaseStudyDetails_default = CaseStudyDetails;
export {
  Button_default as Button,
  CaseStudyAtf_default as CaseStudyAtf,
  CaseStudyDetails_default as CaseStudyDetails,
  CountUp_default as CountUp,
  Favicon_default as Favicon,
  FileUpload_default as FileUpload,
  Footer_default as Footer,
  Grid_default as Grid,
  Header_default as Header,
  IntersectionAnimation_default as IntersectionAnimation,
  LAMAscii,
  LinkTag_default as LinkTag,
  MagicGraphic_default as MagicGraphic,
  NetworkLetterGraphic_default as NetworkLetterGraphic,
  NoJs_default as NoJs,
  Notification_default as Notification,
  PortableTextRenderer_default as PortableTextRenderer,
  SEO_default as SEO,
  SVG_default as SVG,
  SanitySlice_default as SanitySlice,
  SliceConfig_default as SliceConfig,
  SliceIntroText_default as SliceIntroText,
  SlicePadding_default as SlicePadding,
  Splashscreen_default as Splashscreen,
  SwiperCarousel_default as SwiperCarousel,
  TextInput_default as TextInput,
  Theme_default as Theme,
  ToolboxAside_default as ToolboxAside,
  UniversalLink_default as UniversalLink,
  UniversalLinkWrapper_default as UniversalLinkWrapper
};
