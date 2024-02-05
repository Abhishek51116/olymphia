// pages/api/titleapi.ts

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
 
  type AgeGroup = "young-adults" | "early-adulthood" | "mid-adulthood" | "late-adulthood";
  type Religion = "hindu" | "christian" | "islam" | "buddhist" | "jewish" | "sikh" | "other" | "atheist" | "prefer-not-to-say";

const religionAbbreviations: { [key in Religion]: string } = {
  "hindu": "HND",
  "christian": "CHR",
  "islam": "ISL",
  "buddhist": "BUD",
  "jewish": "JEW",
  "sikh": "SIK",
  "other": "OTH",
  "atheist": "ATH",
  "prefer-not-to-say": "PN"
};


const ageMapping: { [key: string]: string } = {
  "young-adults": "YA",
  "early-adulthood": "EA",
  "mid-adulthood": "MA",
  "late-adulthood": "LA"
};

type AbbreviationCombination =
  | "YAHND"
  | "YACHR"
  | "YAISL"
  | "YABUD"
  | "YAJEW"
  | "YASIK"
  | "YAOTH"
  | "YAATH"
  | "YAPN"
  | "EAHND"
  | "EACHR"
  | "EAISL"
  | "EABUD"
  | "EAJEW"
  | "EASIK"
  | "EAOTH"
  | "EAATH"
  | "EAPN"
  | "MAHND"
  | "MACHR"
  | "MAISL"
  | "MABUD"
  | "MAJEW"
  | "MASIK"
  | "MAOTH"
  | "MAATH"
  | "MAPN"
  | "LAHND"
  | "LACHR"
  | "LAISL"
  | "LABUD"
  | "LAJEW"
  | "LASIK"
  | "LAOTH"
  | "LAATH"
  | "LAPN";

  const getChapterDetails = (
    abbreviation: AbbreviationCombination,
    formattedName: string
  ): { heading: string; intro: string } => {
    switch (abbreviation) {
        case "YAHND":
            return {
              heading: "The Serenade of Wisdom",
              intro: `Journey through Young Adulthood in the Tapestry of Hinduism. ${formattedName}, a spirited seeker, embarks on a soul-stirring odyssey through the sacred teachings of Hinduism during the vibrant phase of Young Adulthood. Guided by the wisdom of deities like Saraswati and Vishnu, ${formattedName} explores the profound essence of Dharma, knowledge, and divine harmony.`,
            };
          
          case "YACHR":
            return {
              heading: "Harmony Amidst Cosmic Dance",
              intro: `${formattedName} gracefully ventures into the wisdom-filled realm of Christianity during the stage of Young Adulthood, embracing the eternal truths that shape the soul. Amidst the cosmic dance of existence, ${formattedName} explores the grace and wisdom inherent in the teachings of Christianity.`,
            };
      
          case "YAISL":
            return {
              heading: "Radiant Path of Submission",
              intro: `Luminous moments unfold as ${formattedName}, a pilgrim of the heart, explores the radiant path of Islam during the stage of Young Adulthood. Guided by the teachings of Allah and the wisdom of Prophet Muhammad, ${formattedName} discovers the beauty of submission, unity, and the eternal connection with the divine.`,
            };
      
          case "YABUD":
            return {
              heading: "Enchanting Journey of Enlightenment",
              intro: `Embarking on an enchanting journey, ${formattedName}, a seeker of enlightenment, explores the teachings of Buddhism during the stage of Young Adulthood. Inspired by the wisdom of Buddha, ${formattedName} discovers the path of compassion, mindfulness, and the profound interconnectedness of all beings.`,
            };
      
          case "YAJEW":
            return {
              heading: "Celestial Harmonies of Judaism",
              intro: `Within the celestial harmonies of Judaism, ${formattedName} steps onto the path of Young Adulthood. Enriched by the wisdom of Yahweh and the legacy of prophets, ${formattedName} discovers the tapestry of covenant, justice, and the eternal bond with the divine.`,
            };
      
          case "YASIK":
            return {
              heading: "Radiant Glow of Sikhism",
              intro: `In the radiant glow of Sikhism, ${formattedName}, a radiant soul, embarks on a sacred journey during the stage of Young Adulthood. Nurtured by the wisdom of Guru Nanak and the divine hymns of the Guru Granth Sahib, ${formattedName} experiences the unity of all existence, love, and service.`,
            };
      
          case "YAOTH":
            return {
              heading: "Diverse Tapestry of Spirituality",
              intro: `An intrepid explorer of the soul, ${formattedName} delves into the diverse tapestry of spiritual paths during the stage of Young Adulthood. Drawing inspiration from varied philosophies, ${formattedName} seeks wisdom, understanding, and the common threads that weave through the fabric of existence.`,
            };
      
          case "YAATH":
            return {
              heading: "Philosophical Journey of Inquiry",
              intro: `In the philosophical realm of Atheism, ${formattedName}, a seeker of truth beyond doctrines, embarks on a journey during the stage of Young Adulthood. Unfettered by dogma, ${formattedName} explores reason, critical thinking, and the pursuit of knowledge as the guiding forces of existence.`,
            };
      
          case "YAPN":
            return {
              heading: "Silent Reverence of Personal Beliefs",
              intro: `In silent reverence, ${formattedName}, a contemplative soul, engages in silent reflections on personal beliefs during the stage of Young Adulthood. Amidst the diversity of perspectives, ${formattedName} seeks inner harmony, drawing inspiration from the depths of personal convictions and the silent symphony of the soul.`,
            };
      
          case "EAHND":
            return {
              heading: "Mystique of Hinduism",
              intro: `The enigmatic passage unfolds as ${formattedName}, a mystic soul, navigates the mystique of Hinduism during the stage of Early Adulthood. Immersed in the wisdom of ancient scriptures and the cosmic dance of deities, ${formattedName} explores the tapestry of life's profound mysteries and the eternal cycles of existence.`,
            };
      
          case "EACHR":
            return {
              heading: "Chapters of Redemption",
              intro: `Embarking on the chapters of redemption, ${formattedName} delves into the teachings of Christianity during the stage of Early Adulthood. Enriched by the grace of Christ and the teachings of the Bible, ${formattedName} experiences the transformative journey of redemption, grace, and spiritual rebirth.`,
            };
            case "EAISL":
  return {
    heading: "Voyage of Inner Surrender",
    intro: `Embarking on a voyage of inner surrender, ${formattedName} explores the teachings of Islam during the stage of Early Adulthood. Guided by the profound wisdom of Allah and the teachings of Prophet Muhammad, ${formattedName} discovers the path of submission, faith, and the eternal connection with the divine.`,
  };

case "EABUD":
  return {
    heading: "Whispers of Enlightenment",
    intro: `Whispers of enlightenment resonate as ${formattedName}, an intrepid seeker, unravels the teachings of Buddhism during the stage of Early Adulthood. Immersed in the wisdom of Buddha, ${formattedName} discovers the path of mindfulness, compassion, and the interconnected nature of all existence.`,
  };

case "EAJEW":
  return {
    heading: "Eternal Covenant Unveiled",
    intro: `The eternal covenant unfolds as ${formattedName} steps into the realm of Judaism during the stage of Early Adulthood. Enriched by the wisdom of Yahweh and the heritage of prophets, ${formattedName} explores the sacred tapestry of covenant, justice, and the timeless connection with the divine.`,
  };

case "EASIK":
  return {
    heading: "Sikh Spirit Soaring",
    intro: `With the spirit soaring, ${formattedName} delves into the radiant glow of Sikhism during the stage of Early Adulthood. Nurtured by the wisdom of Guru Nanak and the sacred hymns of the Guru Granth Sahib, ${formattedName} experiences the unity of existence, love, and selfless service.`,
  };

case "EAOTH":
  return {
    heading: "Exploration Beyond Boundaries",
    intro: `Embarking on an exploration beyond boundaries, ${formattedName} ventures into diverse spiritual paths during the stage of Early Adulthood. Drawing inspiration from varied philosophies, ${formattedName} seeks unity in diversity, weaving together the threads of wisdom from diverse traditions.`,
  };

case "EAATH":
  return {
    heading: "Journey of Rational Inquiry",
    intro: `In the journey of rational inquiry, ${formattedName}, a seeker of truth, explores the realm of Atheism during the stage of Early Adulthood. Unfettered by dogma, ${formattedName} embraces reason, critical thinking, and the pursuit of knowledge as the guiding principles of existence.`,
  };

case "EAPN":
  return {
    heading: "Silent Reverie of Personal Convictions",
    intro: `In silent reverie, ${formattedName}, a reflective soul, engages in contemplation on personal convictions during the stage of Early Adulthood. Amidst the diversity of perspectives, ${formattedName} seeks inner harmony, drawing inspiration from the depth of personal convictions and the silent symphony of the soul.`,
  };

case "MAHND":
  return {
    heading: "Harmony in the Dance of Life",
    intro: `Harmony unfolds in the dance of life as ${formattedName} navigates the mystique of Hinduism during the stage of Mid Adulthood. Immersed in the wisdom of ancient scriptures and the cosmic dance of deities, ${formattedName} explores the profound mysteries of life and the eternal cycles of existence.`,
  };

case "MACHR":
  return {
    heading: "Continuity Amidst Trials",
    intro: `Amidst life's trials, ${formattedName} continues the journey, delving into the teachings of Christianity during the stage of Mid Adulthood. Enriched by the grace of Christ and the teachings of the Bible, ${formattedName} experiences the continuity of faith, resilience, and spiritual growth.`,
  };

case "MAISL":
  return {
    heading: "Serenity in Submission",
    intro: `Serenity envelops ${formattedName} as they explore the teachings of Islam during the stage of Mid Adulthood. Guided by the profound wisdom of Allah and the teachings of Prophet Muhammad, ${formattedName} discovers the path of surrender, faith, and the enduring connection with the divine.`,
  };

case "MABUD":
  return {
    heading: "Enlightened Midlife Whispers",
    intro: `Whispers of enlightenment echo through midlife as ${formattedName}, a seeker of wisdom, unravels the teachings of Buddhism. Immersed in the timeless wisdom of Buddha, ${formattedName} rediscovers the path of mindfulness, compassion, and the interconnected nature of all existence.`,
  };

case "MAJEW":
  return {
    heading: "Legacy Unfolding",
    intro: `The legacy unfolds as ${formattedName} steps into the teachings of Judaism during the stage of Mid Adulthood. Enriched by the wisdom of Yahweh and the heritage of prophets, ${formattedName} explores the sacred tapestry of covenant, justice, and the enduring connection with the divine.`,
  };

case "MASIK":
  return {
    heading: "Radiance in Selfless Service",
    intro: `Radiant in selfless service, ${formattedName} delves into the glow of Sikhism during the stage of Mid Adulthood. Nurtured by the wisdom of Guru Nanak and the sacred hymns of the Guru Granth Sahib, ${formattedName} experiences the unity of existence, love, and the joy of selfless service.`,
  };

case "MAOTH":
  return {
    heading: "Diversity Embraced",
    intro: `Embracing diversity, ${formattedName} embarks on a journey during the stage of Mid Adulthood, exploring various spiritual paths. Drawing inspiration from diverse philosophies, ${formattedName} weaves together the threads of wisdom from different traditions, creating a tapestry of unity within diversity.`,
  };

case "MAATH":
  return {
    heading: "Quest for Meaningful Inquiry",
    intro: `In the quest for meaningful inquiry, ${formattedName}, a seeker of truth, explores the realm of Atheism during the stage of Mid Adulthood. Upholding reason, critical thinking, and the pursuit of knowledge, ${formattedName} continues the journey of self-discovery and intellectual exploration.`,
  };

case "MAPN":
  return {
    heading: "Silent Reflections on Personal Convictions",
    intro: `In silent reflections, ${formattedName}, a contemplative soul, engages in personal convictions during the stage of Mid Adulthood. Amidst the diversity of perspectives, ${formattedName} seeks inner harmony, drawing inspiration from the depth of personal convictions and the silent symphony of the soul.`,
  };
  case "LASIK":
  return {
    heading: "Harmony in Selfless Service",
    intro: `Harmony unfolds in the spirit of selfless service as ${formattedName} explores Sikhism during Late Adulthood. Nurtured by the wisdom of Guru Nanak and the sacred hymns of the Guru Granth Sahib, ${formattedName} embodies the unity of existence, love, and the joy of serving others.`,
  };

case "LAOTH":
  return {
    heading: "Wisdom Beyond Limits",
    intro: `Embarking on a journey beyond limits, ${formattedName} explores diverse spiritual paths during Late Adulthood. Drawing inspiration from various philosophies, ${formattedName} weaves together the threads of wisdom from different traditions, embracing the richness of diversity.`,
  };

case "LAATH":
  return {
    heading: "Contemplation in Silence",
    intro: `In contemplation and silence, ${formattedName}, a reflective soul, engages with personal convictions during Late Adulthood. Amidst the diversity of perspectives, ${formattedName} seeks inner harmony, drawing inspiration from the depth of personal convictions and the serene symphony of the soul.`,
  };

case "LAPN":
  return {
    heading: "Whispers of Personal Convictions",
    intro: `Whispers of personal convictions echo through the tapestry of ${formattedName}'s life during Late Adulthood. In silent reflections, ${formattedName} contemplates personal beliefs, finding harmony amidst the diversity of perspectives and the tranquil symphony of the soul.`,
  };
            default:
                return {
                  heading: "Undefined",
                  intro: `No matching case for abbreviation: ${abbreviation}`,
                };
  };
}

  const getAbbreviation = (ageGroup: AgeGroup, religion: Religion): string => {
   
    const ageAbbreviation = ageMapping[ageGroup];
    const religionAbbreviation = religionAbbreviations[religion];
      
      return ageAbbreviation.toUpperCase() + religionAbbreviation;
  };

  if (req.method === 'POST') {
    try {
      const { name, ageGroup, cultureReligion } = req.body;
      const formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
      const abbreviation =  getAbbreviation(ageGroup,cultureReligion);
      //console.log( "chapter 1=" + abbreviation);
      const { heading, intro } = getChapterDetails(abbreviation as AbbreviationCombination, formattedName);
     // console.log(heading,intro);

      res.status(200).json({ success: true, message: 'Form submitted successfully', heading,intro});
    } catch (error) {
      console.error('Error processing form submission:', error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
