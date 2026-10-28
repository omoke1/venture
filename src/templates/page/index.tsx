// @ts-nocheck
import React from "react";
import { graphql } from "gatsby";
import { SanitySlice, SEO } from "~components";

interface ISlice {
  _key: string;
  _type: string;
}

interface IProps {
  data: {
    sanityPage: {
      title: string;
      slug: {
        current: string;
      };
      pagebuilder: {
        slices: ISlice[];
      };
    };
  };
}

const Page = ({ data: staticData }: IProps) => {
  const { sanityPage } = staticData;
  const { pagebuilder } = sanityPage;

  return (
    <>
      {pagebuilder.slices.map((slice) => (
        <SanitySlice key={slice._key} data={slice} />
      ))}
    </>
  );
};

export default Page;

export const query = graphql`
  query Page($id: String!) {
    sanityPage(id: { eq: $id }) {
      title
      slug {
        current
      }

      pagebuilder {
        ...PagebuilderFragment
      }
    }
  }
`;

export const Head = ({ data: { sanityPage } }: IProps) => {
  const slug = sanityPage.slug.current;
  const pathname = slug === `/` ? `/` : `/${slug}/`;

  return <SEO pageTitle={sanityPage.title} pathname={pathname} />;
};
