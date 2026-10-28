// @ts-nocheck
import React from "react";
import cn from "classnames";
import {
  NoJs,
  Theme,
  Header,
  Footer,
  Splashscreen,
  Favicon,
  ToolboxAside,
  Notification,
  LAMAscii
} from "~components";
const styles = { container: "styles-module--container--9d108" };

interface IProps {
  children: React.ReactNode;
  className?: string;
}

const Layout = ({ children, className }: IProps) => {
  return (
    <>
      <Favicon />
      <Theme />

      <Header />
      <ToolboxAside />

      <LAMAscii />

      <div className={cn(styles.container, className)}>{children}</div>

      <Notification />

      <Footer />
      <Splashscreen />

      <NoJs />
    </>
  );
};

export default Layout;
