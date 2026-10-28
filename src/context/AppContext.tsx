// @ts-nocheck
import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { globalHistory } from "@reach/router";
import { IToolboxResource } from "~schemas";
import { localStorage } from "~utils";
import { useScroll, useDisablePageScroll } from "~hooks";
import { type INotification } from "~components";

export interface IAppContext {
  isHeaderVisible: boolean;
  setIsHeaderVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isToolboxOpen: boolean;
  setIsToolboxOpen: React.Dispatch<React.SetStateAction<boolean>>;
  pathname: string;
  notification: INotification;
  updateNotification: (newMessage: string) => void;
  toolbox: IToolboxResource[];
  setToolbox: React.Dispatch<React.SetStateAction<IToolboxResource[]>>;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

interface IProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: IProps) => {
  const LOCAL_STORAGE_TOOLBOX_KEY = "euphemia_toolbox";

  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isToolboxOpen, setIsToolboxOpen] = useState(false);
  const [toolbox, setToolbox] = useState<IToolboxResource[]>(
    [] as IToolboxResource[]
  );
  const [pathname, setPathname] = useState(``);
  const [notification, setNotification] = useState<INotification>({
    message: ``,
    keyToggle: 0
  });

  const { isScrollingDown, scrollY } = useScroll();

  // Handle header visibility
  useEffect(() => {
    const isScrollingUp = !isScrollingDown;

    setIsHeaderVisible(() => {
      const HEADER_HEIGHT_PX = 54;
      if (isScrollingUp) {
        return true;
      }

      if (scrollY > HEADER_HEIGHT_PX) {
        return false;
      }

      return true;
    });
  }, [scrollY]);

  // Parse saved toolbox from localstorage to state
  useEffect(() => {
    const data = localStorage.getItem(LOCAL_STORAGE_TOOLBOX_KEY);
    if (data) {
      setToolbox(data);
    }
  }, []);

  // Sync localstorage with toolbox
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_TOOLBOX_KEY, toolbox);
  }, [toolbox]);

  // Update pathname
  useEffect(() => {
    if (typeof window !== `undefined` && window?.location?.pathname) {
      setPathname(window.location.pathname);
    }

    return globalHistory.listen(({ location }) => {
      setPathname(location.pathname);
    });
  }, []);

  // Close menu on page change
  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    if (isToolboxOpen) {
      setIsToolboxOpen(false);
    }
  }, [pathname]);

  // Don't have contacts and menu open at the same time
  useEffect(() => {
    if (isMenuOpen) {
      setIsToolboxOpen(false);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (isToolboxOpen) {
      setIsMenuOpen(false);
    }
  }, [isToolboxOpen]);

  // Disable page scroll without removing scrollbar (to prevent layout shift)
  useDisablePageScroll(isMenuOpen || isToolboxOpen);

  // Notification
  const updateNotification = (newMessage: string) => {
    setNotification((prev) => ({
      message: newMessage,
      keyToggle: prev.keyToggle === 0 ? 1 : 0
    }));
  };

  // ---------------------------------------------------------------------------
  // render

  const contextProps = {
    isHeaderVisible,
    setIsHeaderVisible,
    isMenuOpen,
    setIsMenuOpen,
    isToolboxOpen,
    setIsToolboxOpen,
    pathname,
    notification,
    updateNotification,
    toolbox,
    setToolbox
  };

  return (
    <AppContext.Provider value={contextProps}>{children}</AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default AppProvider;
