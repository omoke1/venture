// @ts-nocheck
import { isClient } from "~utils";

const getItem = (key: string) => {
  if (!isClient) return null;
  const value = window.localStorage.getItem(key);
  if (!value) return null;
  return JSON.parse(value);
};

const removeItem = (key: string) => {
  if (!isClient) return;
  window.localStorage.removeItem(key);
};

const setItem = (key: string, value: any) => {
  if (!isClient) return;
  window.localStorage.setItem(key, JSON.stringify(value));
};

export default { getItem, removeItem, setItem };
