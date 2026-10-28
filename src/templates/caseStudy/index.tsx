// @ts-nocheck
import React from "react";
import { graphql } from "gatsby";
import { CaseStudyAtf, CaseStudyDetails, SanitySlice, SEO } from "~components";
import { ICaseStudyAtf, ICaseStudyDetails } from "~schemas";

interface ISlice {
  _key: string;
  _type: string;
}

interface IProps {
  data: {
    sanityCaseStudy: {
      title: string;
      slug: {
        current: string;
      };
      atf: ICaseStudyAtf;
      details: ICaseStudyDetails;
      pagebuilder: {
        slices: ISlice[];
      };
    };
  };
}

const CaseStudyPage = ({ data: staticData }: IProps) => {
  const { sanityCaseStudy } = staticData;
  const { pagebuilder, atf, title, details } = sanityCaseStudy;

  return (
    <>
      <CaseStudyAtf {...atf} title={title} />
      <CaseStudyDetails {...details} />

      {pagebuilder.slices.map((slice) => (
        <SanitySlice key={slice._key} data={slice} />
      ))}
    </>
  );
};

export default CaseStudyPage;

export const query = graphql`
  query CaseStudy($id: String!) {
    sanityCaseStudy(id: { eq: $id }) {
      title

      slug {
        current
      }

      atf {
        tags
        description
        video {
          asset {
            url
          }
        }
      }

      details {
        yearFounded
        valuation
        placeFounded
        founders {
          name
          image {
            asset {
              gatsbyImageData
            }
          }
        }
      }

      pagebuilder {
        ...PagebuilderCaseStudyFragment
      }
    }
  }
`;

export const Head = ({ data: { sanityCaseStudy } }: IProps) => (
  <SEO
    pageTitle={sanityCaseStudy.title}
    pathname={`/awesome-stories/${sanityCaseStudy.slug.current}/`}
  />
);
