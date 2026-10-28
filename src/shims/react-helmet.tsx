// @ts-nocheck
import React, { useEffect } from "react";

export const Helmet: React.FC<{
  title?: string;
  titleTemplate?: string;
  children?: React.ReactNode;
}> = ({ title, titleTemplate }) => {
  useEffect(() => {
    if (title) {
      document.title = titleTemplate
        ? titleTemplate.replace("%s", title)
        : title;
    }
  }, [title, titleTemplate]);
  return null;
};
export default Helmet;
