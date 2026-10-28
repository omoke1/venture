// @ts-nocheck
const basicText = /^[\s]*[\S]+[\s\S]*$/; // At least 1 non-whitespace character, leading + trailing whitespace is allowed
const email = /^\s*\S+[@]\S+[.]\S+\s*$/; // <something>@<something>.<something>, leading + trailing whitespace is allowed

export type TFormField =
  | `name`
  | `email`
  | `enquiry`
  | `how`
  | `message`
  | `honeypot`;

type TRegex = {
  [key in TFormField]?: RegExp;
};

export const regex: TRegex = {
  name: basicText,
  how: basicText,
  email,
  message: basicText
};
