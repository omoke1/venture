// @ts-nocheck
import React from "react";
import { STATIC_QUERY_DATA } from "~data/staticQueryData";
import { navigate as routerNavigate, globalHistory } from "./reach-router";

export const graphql = (strings: TemplateStringsArray, ...values: any[]) => {
  return strings.reduce((acc, str, i) => acc + str + (values[i] ?? ""), "");
};

export const useStaticQuery = (_query?: any) => {
  return STATIC_QUERY_DATA;
};

export const navigate = routerNavigate;

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  activeClassName?: string;
  partiallyActive?: boolean;
}

export const Link: React.FC<LinkProps> = ({
  to,
  children,
  className = "",
  activeClassName = "",
  partiallyActive,
  onClick,
  ...rest
}) => {
  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : "/";
  const cleanCurrent = currentPath.replace(/\/+$/, "") || "/";
  const cleanTo = (to || "/").split("#")[0].replace(/\/+$/, "") || "/";
  const isActive = partiallyActive
    ? cleanCurrent.startsWith(cleanTo)
    : cleanCurrent === cleanTo;

  const combinedClassName = [className, isActive ? activeClassName : ""]
    .filter(Boolean)
    .join(" ");

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    if (
      e.defaultPrevented ||
      e.button !== 0 ||
      e.metaKey ||
      e.altKey ||
      e.ctrlKey ||
      e.shiftKey
    ) {
      return;
    }
    if (to && (to.startsWith("/") || to.startsWith("#"))) {
      e.preventDefault();
      routerNavigate(to);
    }
  };

  return (
    <a
      href={to}
      className={combinedClassName}
      aria-current={isActive ? "page" : undefined}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </a>
  );
};
