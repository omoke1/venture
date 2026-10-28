// @ts-nocheck
// Need to update 'cateogry' options in 'colorGrid.ts' to match these
type TColorCategory = `mono` | `digital/ux` | `brand`;

export interface IColorData {
  id: string;
  title: string;
  category: TColorCategory;
  hex: string;
  display: `light` | `dark`;
}

const colors: IColorData[] = [
  // Mono
  {
    id: "white",
    title: "White",
    category: "mono",
    hex: "#FFFFFF",
    display: "light"
  },
  {
    id: "black-10",
    title: "Black 10",
    category: "mono",
    hex: "#F0F0F0",
    display: "light"
  },
  {
    id: "black-20",
    title: "Black 20",
    category: "mono",
    hex: "#dddee2",
    display: "light"
  },
  {
    id: "black-40",
    title: "Black 40",
    category: "mono",
    hex: "#919191",
    display: "light"
  },
  {
    id: "black-60",
    title: "Black 60",
    category: "mono",
    hex: "#4F4F4F",
    display: "dark"
  },
  {
    id: "black-70",
    title: "Black 70",
    category: "mono",
    hex: "#323232",
    display: "dark"
  },
  {
    id: "black-90",
    title: "Black 90",
    category: "mono",
    hex: "#1E1E1E",
    display: "dark"
  },
  {
    id: "black",
    title: "Black",
    category: "mono",
    hex: "#000000",
    display: "dark"
  },
  // Digital/UX
  {
    id: "ux-error",
    title: "UX Error",
    category: "digital/ux",
    hex: "#f75757",
    display: `dark`
  },
  {
    id: "ux-success",
    title: "UX Success",
    category: "digital/ux",
    hex: "#07cb9c",
    display: `dark`
  },
  // Brand
  {
    id: "red",
    title: "Red",
    category: "brand",
    hex: "#c3423d",
    display: "dark"
  },
  {
    id: "dark-grey",
    title: "Dark Grey",
    category: "brand",
    hex: "#5c625d",
    display: "dark"
  },
  {
    id: "mint-green",
    title: "Mint Green",
    category: "brand",
    hex: "#5fff95",
    display: "light"
  },
  {
    id: "dark-purple",
    title: "Dark Purple",
    category: "brand",
    hex: "#77007c",
    display: "dark"
  },
  {
    id: "construction-orange",
    title: "Construction Orange",
    category: "brand",
    hex: "#ff8731",
    display: "light"
  },
  {
    id: "forest-green",
    title: "Forest Green",
    category: "brand",
    hex: "#007f4f",
    display: "dark"
  },
  {
    id: "sky-blue",
    title: "Sky Blue",
    category: "brand",
    hex: "#50DBEE",
    display: "light"
  },
  {
    id: "brown",
    title: "Brown",
    category: "brand",
    hex: "#6e3e20",
    display: "dark"
  },
  {
    id: "gold",
    title: "Gold",
    category: "brand",
    hex: "#ffde31",
    display: "light"
  },
  {
    id: "dark-blue",
    title: "Dark Blue",
    category: "brand",
    hex: "#00394f",
    display: "dark"
  },
  {
    id: "light-pink",
    title: "Light Pink",
    category: "brand",
    hex: "#ffabab",
    display: "light"
  },
  {
    id: "teal",
    title: "Teal",
    category: "brand",
    hex: "#007171",
    display: "dark"
  },
  {
    id: "beige",
    title: "Beige",
    category: "brand",
    hex: "#c6b792",
    display: "light"
  },
  {
    id: "regent-grey",
    title: "Regent Grey",
    category: "brand",
    hex: "#58677d",
    display: "dark"
  }
];

export default colors;
