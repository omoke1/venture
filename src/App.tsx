// @ts-nocheck
import React, { useEffect, useState } from "react";
import AppProvider from "./context/AppContext";
import Layout from "./layouts";
import Page, { Head as PageHead } from "./templates/page";
import CaseStudyPage, { Head as CaseStudyHead } from "./templates/caseStudy";
import FourOhFour, { Head as FourOhFourHead } from "./pages/404";
import { PAGE_DATA_MAP } from "./data/pageData";
import { globalHistory } from "./shims/reach-router";

function RouteRenderer() {
  const [pathname, setPathname] = useState(() =>
    typeof window !== "undefined" ? window.location.pathname : "/"
  );

  useEffect(() => {
    return globalHistory.listen(({ location }) => {
      setPathname(location.pathname);
    });
  }, []);

  const cleanSlug = pathname.replace(/^\/+|\/+$/g, "") || "index";
  const routeData = PAGE_DATA_MAP[cleanSlug];

  if (routeData?.sanityPage) {
    return (
      <>
        <PageHead data={routeData} />
        <Page key={cleanSlug} data={routeData} />
      </>
    );
  }

  if (routeData?.sanityCaseStudy) {
    return (
      <>
        <CaseStudyHead data={routeData} />
        <CaseStudyPage key={cleanSlug} data={routeData} />
      </>
    );
  }

  return (
    <>
      <FourOhFourHead />
      <FourOhFour />
    </>
  );
}

export default function App() {
  return (
    <AppProvider>
      <Layout>
        <RouteRenderer />
      </Layout>
    </AppProvider>
  );
}
