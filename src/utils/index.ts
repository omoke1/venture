// @ts-nocheck
export { default as localStorage } from "./localStorage";
import { CSSProperties } from "react";
// import { TAdvisorCategory } from "sanity/schemas/documents/advisor";
import { TActiveAdvisorBlockIndex } from "src/slices/Advisors";
import { TNetworkLetterGraphic } from "~components";
import { TColorTheme, TMagicGraphicVariation } from "~schemas";
import { IColorTheme } from "~types";

export const remToPx = (rem: number) => {
  if (typeof window === `undefined`) {
    return rem;
  }

  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
};

export const hexToRGB = (hex: string) => {
  const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return rgb
    ? {
        r: parseInt(rgb[1], 16),
        g: parseInt(rgb[2], 16),
        b: parseInt(rgb[3], 16)
      }
    : null;
};

export const capitalizeString = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const spliceFromStateArray = (array: any[], item: any) => {
  if (!array?.[0] || !array?.includes(item)) {
    return array;
  }

  const arrayClone = JSON.parse(JSON.stringify(array));

  arrayClone.splice(array.indexOf(item), 1);

  return arrayClone;
};

export const spliceFromStateArrayByProperty = (
  array: any[],
  key: string,
  value: any
) => {
  if (!array?.[0]) {
    return array;
  }

  const item = array?.find((arrayItem) => arrayItem?.[key] === value);

  if (!item) {
    return array;
  }

  return spliceFromStateArray(array, item);
};

export const spliceFromStateArrayByIndex = (array: any[], index: number) => {
  if (!array?.[0] || !array?.[index]) {
    return array;
  }

  const arrayClone = JSON.parse(JSON.stringify(array));

  arrayClone.splice(index, 1);

  return arrayClone;
};

export const getRandomIntByRange = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const validateEmail = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email).toLowerCase());
};

export const shuffleArray = (array: any[]) => {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

export const sortArrayByNumberProperty = (array: any[], property: string) => {
  if (!array?.[0]?.[property]) {
    return array;
  }

  return array.sort((a, b) => {
    const itemA = a?.[property] || 9999999999;
    const itemB = b?.[property] || 9999999999;

    if (itemA < itemB) {
      return -1;
    }

    if (itemA > itemB) {
      return 1;
    }

    return 0;
  });
};

export const splitCamelCase = (word: string) =>
  word.replace(/([A-Z])/g, ` $1`).replace(/^./, (str) => str.toUpperCase());

export const getCurrentLink = (pathname: string) => pathname;

export const rotisserieCamel = (camel: string) =>
  camel.replace(/([A-Z0-9])/g, `-$1`).toLowerCase();

export const camelCaseToTitleCase = (camelCase: string) => {
  const splitToWords = camelCase.replace(/([A-Z])/g, ` $1`);
  const capitalise =
    splitToWords.charAt(0).toUpperCase() + splitToWords.slice(1);
  return capitalise;
};
export const dashToCamel = (dashStr: string) =>
  dashStr.replace(/-([a-z])/g, (g) => g[1].toUpperCase());

export const isClient = typeof window === `undefined` ? false : true;

export const formatNumberWithCommas = (number: number | string) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const pxStringToNumber = (pxString: string) => {
  const stringWithoutPx = pxString.replace(`px`, ``);
  const number = parseInt(stringWithoutPx);
  return number;
};

export const getMagicGraphicColorStyles: (
  variation: TMagicGraphicVariation
) => CSSProperties = (variation) => {
  switch (variation) {
    case "1":
      return {
        backgroundColor: `var(--color-brown)`,
        color: `var(--color-white)`
      };
    case "2":
      return {
        backgroundColor: `var(--color-gold)`,
        color: `var(--color-black)`
      };
    case "3":
      return {
        backgroundColor: `var(--color-beige)`,
        color: `var(--color-black)`
      };
    case "4":
      return {
        backgroundColor: `var(--color-gold)`,
        color: `var(--color-black)`
      };
    case "5":
      return {
        backgroundColor: `var(--color-forest-green)`,
        color: `var(--color-white)`
      };
    case "6":
      return {
        backgroundColor: `var(--color-construction-orange)`,
        color: `var(--color-black)`
      };
    case "7":
      return {
        backgroundColor: `var(--color-beige)`,
        color: `var(--color-black)`
      };
    case "8":
      return {
        backgroundColor: `var(--color-dark-blue)`,
        color: `var(--color-white)`
      };
    case "9":
      return {
        backgroundColor: `var(--color-light-pink)`,
        color: `var(--color-black)`
      };
    case "10":
      return {
        backgroundColor: `var(--color-teal)`,
        color: `var(--color-white)`
      };
    default:
      return {};
  }
};

export const doesRawTextHaveContent = (...rawTextItems: any[]) => {
  for (let i = 0; i < rawTextItems.length; i++) {
    if (rawTextItems[i]?.[0]?.children[0]?.text) {
      return true;
    }
  }
  return false;
};

type TAdvisorPluralCategory = `Finance` | `Legal` | `Advisory` | `Peers`;

interface IAdvisorCategoryInfo {
  categoryPlural: TAdvisorPluralCategory;
  textColor: string;
  index: TActiveAdvisorBlockIndex;
  graphic: TNetworkLetterGraphic;
}

export const getAdvisorCategoryInfo: (
  category: string
) => IAdvisorCategoryInfo = (category) => {
  switch (category) {
    case `Accountants`:
      return {
        categoryPlural: `Finance`,
        textColor: `var(--color-black)`,
        graphic: `1A`,
        index: 0
      };
    case `Lawyers`:
      return {
        categoryPlural: `Legal`,
        textColor: `var(--color-white)`,
        graphic: `2L`,
        index: 1
      };
    case `Advisory`:
      return {
        categoryPlural: `Advisory`,
        textColor: `var(--color-white)`,
        graphic: `3A`,
        index: 2
      };
    case `Peers`:
    default:
      return {
        categoryPlural: `Peers`,
        textColor: `var(--color-black)`,
        graphic: `4P`,
        index: 3
      };
  }
};

export const getThemeColors: (colorTheme: TColorTheme) => IColorTheme = (
  colorTheme
) => {
  switch (colorTheme) {
    case "Beige":
      return {
        backgroundColor: "var(--color-beige)",
        highlightColor: "var(--color-brown)",
        textColor: "var(--color-black)"
      };
    case "Brown":
      return {
        backgroundColor: "var(--color-brown)",
        highlightColor: "var(--color-beige)",
        textColor: "var(--color-white)"
      };
    case "Dark Blue":
      return {
        backgroundColor: "var(--color-dark-blue)",
        highlightColor: "var(--color-sky-blue)",
        textColor: "var(--color-white)"
      };
    case "Dark Purple":
      return {
        backgroundColor: "var(--color-dark-purple)",
        highlightColor: "var(--color-light-pink)",
        textColor: "var(--color-white)"
      };
    case "Forest Green":
      return {
        backgroundColor: "var(--color-forest-green)",
        highlightColor: "var(--color-mint-green)",
        textColor: "var(--color-white)"
      };
    case "Gold":
      return {
        backgroundColor: "var(--color-gold)",
        highlightColor: "var(--color-construction-orange)",
        textColor: "var(--color-black)"
      };
    case "Mint Green":
      return {
        backgroundColor: "var(--color-mint-green)",
        highlightColor: "var(--color-forest-green)",
        textColor: "var(--color-black)"
      };
    case "Orange":
      return {
        backgroundColor: "var(--color-construction-orange)",
        highlightColor: "var(--color-gold)",
        textColor: "var(--color-black)"
      };
    case "Pink":
      return {
        backgroundColor: "var(--color-light-pink)",
        highlightColor: "var(--color-dark-purple)",
        textColor: "var(--color-black)"
      };
    case "Sky Blue":
      return {
        backgroundColor: "var(--color-sky-blue)",
        highlightColor: "var(--color-dark-blue)",
        textColor: "var(--color-black)"
      };
  }
};
