// pages/api/titleapi.ts

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
 
  type AgeGroup = "young-adults" | "early-adulthood" | "mid-adulthood" | "late-adulthood";
  type FamilyStatus = "married" | "unmarried" | "divorced" | "widowed" | "single-parent";
  type AbbreviationCombination =
  | "YAMA"
  | "YAUN"
  | "YADI"
  | "YAWI"
  | "YASP"
  | "EAMA"
  | "EAUN"
  | "EADI"
  | "EAWI"
  | "EASP"
  | "MAMA"
  | "MAUN";

const getChapterDetails = (
  abbreviation: AbbreviationCombination,
  formattedName: string
): { heading: string; intro: string } => {
  switch (abbreviation) {
    case "YAMA":
      return {
        heading: "A Tapestry of Shared Love",
        intro: `In the vibrant canvas of young adulthood, ${formattedName} embraces the sacred union of marriage, weaving a tapestry of shared love and companionship.`,
      };
    case "YAUN":
      return {
        heading: "Embracing Independence",
        intro: `In the vibrant canvas of young adulthood, ${formattedName} embarks on the liberating journey of self-discovery and independence, forging a path uniquely their own.`,
      };
    case "YADI":
      return {
        heading: "Navigating Life's Complexities",
        intro: `In the vibrant canvas of young adulthood, ${formattedName} navigates the intricate tapestry of life, drawing wisdom from the complexities of a transformative divorce.`,
      };
    case "YAWI":
      return {
        heading: "Graceful Resilience",
        intro: `In the vibrant canvas of young adulthood, ${formattedName} gracefully embraces the lessons of resilience and strength, finding beauty in the solitude of widowhood.`,
      };
    case "YASP":
      return {
        heading: "Courageous Parenthood",
        intro: `In the vibrant canvas of young adulthood, ${formattedName} courageously dons the roles of both nurturer and guide, embodying the spirit of a single parent with unwavering strength.`,
      };
    case "EAMA":
      return {
        heading: "Dawn of Matrimony",
        intro: `In the dawn of wisdom, ${formattedName} embarks on the journey of adulthood, embracing the sacred bond of matrimony, where love and commitment intertwine.`,
      };
    case "EAUN":
      return {
        heading: "Exploring Boundless Horizons",
        intro: `In the dawn of wisdom, ${formattedName} explores the vast horizons of life, untethered by the bonds of marriage, and embraces the freedom to chart their own course.`,
      };
    case "EADI":
      return {
        heading: "Transformative Life Lessons",
        intro: `In the dawn of wisdom, ${formattedName} gains profound insights from life's challenges, walking a transformative path shaped by the lessons of divorce.`,
      };
    case "EAWI":
      return {
        heading: "Graceful Navigations",
        intro: `In the dawn of wisdom, ${formattedName} navigates the tapestry of existence with grace, drawing strength and resilience from the experience of being widowed.`,
      };
    case "EASP":
      return {
        heading: "Noble Journey of Single Parenthood",
        intro: `In the dawn of wisdom, ${formattedName} undertakes the noble journey of parenthood, embodying the essence of a single parent with unwavering dedication.`,
      };
    case "MAMA":
      return {
        heading: "Legacy of Shared Experiences",
        intro: `Navigating mid-adulthood, ${formattedName} finds solace and companionship in the embrace of marriage, shaping a legacy of shared experiences and enduring connection.`,
      };
    case "MAUN":
      return {
        heading: "Personal Odyssey of Self-Discovery",
        intro: `Navigating mid-adulthood, ${formattedName} embarks on a personal odyssey of self-discovery, unfettered by the bonds of marriage, weaving a tapestry of authenticity and growth.`,
      };
    default:
      return {
        heading: "Unknown",
        intro: "Unable to generate heading and intro for the given abbreviation.",
      };
  }
};
const ageMapping: { [key: string]: string } = {
  "young-adults": "YA",
  "early-adulthood": "EA",
  "mid-adulthood": "MA",
  "late-adulthood": "LA"
};
  const getAbbreviation = (ageGroup: AgeGroup, familyStatus: FamilyStatus): string => {
   
    const ageAbbreviation = ageMapping[ageGroup];
    const familyAbbreviation = familyStatus.substring(0, 1).toUpperCase() + familyStatus.substring(1, 2).toUpperCase();
      
      return ageAbbreviation.toUpperCase() + familyAbbreviation;
  };

  if (req.method === 'POST') {
    try {
      const { name, ageGroup, familyStatus } = req.body;
      const formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
      const abbreviation =  getAbbreviation(ageGroup,familyStatus);
      console.log( "chapter 1=" + abbreviation);
      const { heading, intro } = getChapterDetails(abbreviation as AbbreviationCombination, formattedName);
      console.log(heading,intro);

      res.status(200).json({ success: true, message: 'Form submitted successfully', heading,intro});
    } catch (error) {
      console.error('Error processing form submission:', error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
