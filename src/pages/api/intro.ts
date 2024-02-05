

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {    
    type IntroMapping = { [key: string]: (name: string) => string };

    const introMapping: IntroMapping = {
        "YAACC": (name) => `Embarking on the journey of wisdom, ${name}, an Accountant, balances the ledger of life with precision.`,
        "YAACT": (name) => `In the artistry of existence, ${name}, an Actor, performs the narrative of life with passion and grace.`,
        "YAARC": (name) => `Architecting dreams into reality, ${name}, an Architect, constructs the pillars of a purposeful existence.`,
        "YACHEF": (name) => `Crafting destinies with culinary mastery, ${name}, a Chef, transforms ordinary moments into extraordinary experiences.`,
        "YADOC": (name) => `In the tapestry of wisdom, a spirited soul named ${name} graces the stage, embodying the art of healing as a Doctor.`,
        "YADEN": (name) => `Nurturing the world with compassion, ${name}, a Dentist, tends to the smiles that light up the human experience.`,
        "YAENG": (name) => `Engineering a legacy of innovation, ${name}, an Engineer, shapes the future with ingenuity and foresight.`,
        "YAFF": (name) => `In the forge of youthful courage, ${name} bravely faces life's trials, embodying the spirit of bravery as a Firefighter.`,
        "YAGD": (name) => `Guiding the design of destinies, ${name}, a Graphic Designer, weaves visual tales that captivate the essence of life.`,
        "YAHS": (name) => `Harmonizing style with life's rhythm, ${name}, a Hair Stylist, crafts elegance in every strand of the human story.`,
        "YAJOUR": (name) => `Journaling the chapters of existence, ${name}, a Journalist, unveils the narratives that shape the collective consciousness.`,
        "YALAW": (name) => `Within the chambers of justice, ${name} dons the robes of wisdom, navigating the intricate steps as a Lawyer.`,
        "YAMUS": (name) => `Embracing the symphony of life, ${name}, a Musician, orchestrates melodies that resonate with the soul's deepest chords.`,
        "YANUR": (name) => `Nurturing the well-being of hearts, ${name}, a Nurse, tends to the soul's rhythm with gentleness and empathy.`,
        "YAPHOTO": (name) => `Capturing the essence of existence, ${name}, a Photographer, freezes moments that tell profound tales in a single frame.`,
        "YAPLT": (name) => `Piloting through life's vast skies, ${name}, a Pilot, masters the art of navigating possibilities and destinations.`,
        "YAPO": (name) => `Guardian of order and safety, ${name}, a Police Officer, upholds the harmony in the pages of community life.`,
        "YAREA": (name) => `Shaping dreams into homes, ${name}, a Real Estate Agent, architects spaces where stories and memories unfold.`,
        "YASCI": (name) => `Embarking on the cosmic quest, ${name}, a Scientist, explores the mysteries that weave the fabric of existence.`,
        "YATCH": (name) => `Guiding young minds towards wisdom, ${name}, a Teacher, sows seeds of knowledge that blossom into futures.`,
        "YAVET": (name) => `In the vibrant canvas of youth, ${name} embraces the role of nurturer, fostering the harmony between beings as a Veterinarian.`,
        "YAWRT": (name) => `Crafting narratives with the stroke of words, ${name}, a Writer, shapes worlds and tales that resonate with the human soul.`,
        "YAOTH": (name) => `In the diverse realms beyond categories, ${name} embraces the uniqueness of self, navigating life's journey in their own way.`,
        "EAACC": (name) => `Embarking on the canvas of early adulthood, ${name}, an Accountant, balances the equations of life with finesse.`,
        "EAACT": (name) => `Acting out the script of early adulthood, ${name}, an Actor, brings authenticity to the unfolding narrative of existence.`,
        "EAARC": (name) => `Architecting the blueprints of early adulthood, ${name}, an Architect, lays the foundation for a purposeful journey.`,
        "EACHEF": (name) => `In the culinary symphony of existence, ${name}, a Chef, turns ordinary ingredients into extraordinary moments.`,
        "EADOC": (name) => `Dedicating the early days of adulthood to healing, ${name} emerges as a Doctor, tending to the well-being of souls.`,
        "EADEN": (name) => `Tending to the dental needs of the world, ${name}, a Dentist, brings smiles that radiate joy into the early adult years.`,
        "EAENG": (name) => `Engineering a path of innovation in early adulthood, ${name}, an Engineer, navigates the realms of possibilities.`,
        "EAFF": (name) => `Facing the flames of early adulthood with courage, ${name} embodies bravery as a Firefighter in life's forging furnace.`,
        "EAGD": (name) => `Guiding the graphic narratives of early adulthood, ${name}, a Graphic Designer, shapes visual stories that resonate with hearts.`,
        "EAHS": (name) => `Styling the early adult years with grace, ${name}, a Hair Stylist, crafts elegance and beauty in each moment.`,
        "EAJOUR": (name) => `Journaling the early chapters of adulthood, ${name}, a Journalist, captures the essence of evolving stories.`,
        "EALAW": (name) => `Navigating the legal landscapes of early adulthood, ${name}, a Lawyer, advocates for wisdom and justice.`,
        "EAMUS": (name) => `Mastering the melodies of early adulthood, ${name}, a Musician, orchestrates harmonies that echo in the soul.`,
        "EANUR": (name) => `Nurturing the well-being of hearts in early adulthood, ${name}, a Nurse, tends to the soul's rhythm with care and compassion.`,
        "EAPHOTO": (name) => `Freezing the early moments of adulthood, ${name}, a Photographer, captures the profound tales of evolving lives.`,
        "EAPLT": (name) => `Mastering the flight of early adulthood, ${name}, a Pilot, soars through the skies of possibilities and dreams.`,
        "EAPO": (name) => `Patrolling the early adult chapters with honor, ${name}, a Police Officer, safeguards the harmony within communities.`,
        "EAREA": (name) => `Shaping dreams into homes in early adulthood, ${name}, a Real Estate Agent, architects spaces where futures unfold.`,
        "EASCI": (name) => `Exploring the scientific wonders of early adulthood, ${name}, a Scientist, delves into the mysteries of existence.`,
        "EATCH": (name) => `Guiding young minds in the early stages of wisdom, ${name}, a Teacher, imparts knowledge and cultivates wisdom.`,
        "EAVET": (name) => `Nurturing harmony in early adulthood, ${name}, a Veterinarian, embraces the role of caretaker for the interconnected web of life.`,
        "EAWRT": (name) => `Weaving narratives with early adult words, ${name}, a Writer, crafts tales that echo the sentiments of the human experience.`,
        "EAOTH": (name) => `In the diverse tapestry of early adulthood, ${name} celebrates the uniqueness of self, navigating the journey in their distinct way.`,
        "MAACC": (name) => `Balancing the equations of Mid Adulthood, ${name}, an Accountant, navigates the financial landscapes with seasoned wisdom.`,
        "MAACT": (name) => `Acting out the seasoned script of Mid Adulthood, ${name}, an Actor, brings depth and authenticity to life's unfolding scenes.`,
        "MAARC": (name) => `Architecting the chapters of Mid Adulthood, ${name}, an Architect, designs structures that stand the test of evolving time.`,
        "MACHEF": (name) => `Crafting culinary wonders in the tapestry of Mid Adulthood, ${name}, a Chef, turns each meal into an epicurean delight.`,
        "MADO": (name) => `Doctoring the Mid Adult years with care and wisdom, ${name} becomes a healer, tending to the well-being of the soul.`,
        "MADEN": (name) => `Dentist in the Mid Adult stage, ${name}, tends to the smiles that carry the imprints of life's rich experiences.`,
        "MAENG": (name) => `Engineering the pathways of Mid Adulthood, ${name}, an Engineer, constructs bridges to new possibilities.`,
        "MAFF": (name) => `Facing the challenges of Mid Adulthood with fortitude, ${name} embodies bravery as a Firefighter in the forge of life.`,
        "MAGD": (name) => `Guiding the graphic narratives of Mid Adulthood, ${name}, a Graphic Designer, creates visual stories etched with profound meanings.`,
        "MAHS": (name) => `Styling the Mid Adult years with grace and flair, ${name}, a Hair Stylist, adds elegance to every chapter.`,
        "MAJOUR": (name) => `Journaling the stories of Mid Adulthood, ${name}, a Journalist, unfolds narratives that shape the perspectives of a seasoned life.`,
        "MALAW": (name) => `Navigating the legal nuances of Mid Adulthood, ${name}, a Lawyer, advocates for justice with the wisdom of lived experiences.`,
        "MAMUS": (name) => `Mastering the melodies of Mid Adulthood, ${name}, a Musician, orchestrates harmonies that resonate with the depth of the soul.`,
        "MANUR": (name) => `Nurturing the well-being of hearts in Mid Adulthood, ${name}, a Nurse, tends to the soul's rhythm with experienced care.`,
        "MAPHOTO": (name) => `Capturing the profound moments of Mid Adulthood, ${name}, a Photographer, freezes frames that encapsulate the richness of life.`,
        "MAPLT": (name) => `Mastering the flight of Mid Adulthood, ${name}, a Pilot, soars through the skies of experience with seasoned expertise.`,
        "MAPO": (name) => `Patrolling the Mid Adult chapters with honor, ${name}, a Police Officer, safeguards the harmony within communities with seasoned vigilance.`,
        "MAREA": (name) => `Shaping dreams into homes in Mid Adulthood, ${name}, a Real Estate Agent, architects spaces where stories and legacies unfold.`,
        "MASCI": (name) => `Exploring the scientific wonders of Mid Adulthood, ${name}, a Scientist, delves into the mysteries of existence with a seasoned curiosity.`,
        "MATCH": (name) => `Guiding young minds in the Mid Adult stages of wisdom, ${name}, a Teacher, imparts knowledge and cultivates wisdom with seasoned grace.`,
        "MAVET": (name) => `Nurturing harmony in Mid Adulthood, ${name}, a Veterinarian, embraces the role of caretaker for the interconnected web of life with seasoned compassion.`,
        "MAWRT": (name) => `Weaving narratives with Mid Adult words, ${name}, a Writer, crafts tales that echo the sentiments of a life well-lived.`,
        "MAOTH": (name) => `In the diverse tapestry of Mid Adulthood, ${name} celebrates the uniqueness of self, navigating the journey with seasoned wisdom and individuality.`,
        "LAACC": (name) => `Balancing the equations of Late Adulthood, ${name}, an Accountant, navigates the financial landscapes with the wisdom of a seasoned sage.`,
        "LAACT": (name) => `Acting out the seasoned script of Late Adulthood, ${name}, an Actor, brings depth and authenticity to life's unfolding scenes with the grace of a seasoned performer.`,
        "LAARC": (name) => `Architecting the reflective chapters of Late Adulthood, ${name}, an Architect, designs structures that stand as monuments to a life richly lived.`,
        "LACHEF": (name) => `Crafting culinary wonders in the tapestry of Late Adulthood, ${name}, a Chef, turns each meal into an epicurean delight with the seasoned touch of an experienced chef.`,
        "LADO": (name) => `Doctoring the Late Adult years with care and wisdom, ${name} becomes a healer, tending to the well-being of the soul with the seasoned expertise of a wise physician.`,
        "LADEN": (name) => `Dentist in the Late Adult stage, ${name}, tends to the smiles that carry the imprints of life's rich experiences with the seasoned touch of an experienced practitioner.`,
        "LAENG": (name) => `Engineering the reflective pathways of Late Adulthood, ${name}, an Engineer, constructs bridges to reflection and contemplation with the seasoned perspective of a sage.`,
        "LAFF": (name) => `Facing the challenges of Late Adulthood with fortitude, ${name} embodies bravery as a Firefighter in the forge of life with the seasoned resilience of a warrior.`,
        "LAGD": (name) => `Guiding the graphic narratives of Late Adulthood, ${name}, a Graphic Designer, creates visual stories etched with profound meanings with the seasoned skill of a master storyteller.`,
        "LAHS": (name) => `Styling the Late Adult years with grace and flair, ${name}, a Hair Stylist, adds elegance to every chapter with the seasoned touch of an experienced stylist.`,
        "LAJOUR": (name) => `Journaling the stories of Late Adulthood, ${name}, a Journalist, unfolds narratives that shape the perspectives of a seasoned life with the seasoned penmanship of a literary maestro.`,
        "LALAW": (name) => `Navigating the legal nuances of Late Adulthood, ${name}, a Lawyer, advocates for justice with the wisdom of lived experiences and the seasoned discernment of a sage.`,
        "LAMUS": (name) => `Mastering the melodies of Late Adulthood, ${name}, a Musician, orchestrates harmonies that resonate with the depth of the soul with the seasoned artistry of a musical virtuoso.`,
        "LANUR": (name) => `Nurturing the well-being of hearts in Late Adulthood, ${name}, a Nurse, tends to the soul's rhythm with experienced care and the seasoned tenderness of a compassionate caregiver.`,
        "LAPHOTO": (name) => `Capturing the profound moments of Late Adulthood, ${name}, a Photographer, freezes frames that encapsulate the richness of life with the seasoned eye of a visual poet.`,
        "LAPLT": (name) => `Mastering the flight of Late Adulthood, ${name}, a Pilot, soars through the skies of experience with seasoned expertise and the seasoned freedom of a seasoned aviator.`,
        "LAPO": (name) => `Patrolling the Late Adult chapters with honor, ${name}, a Police Officer, safeguards the harmony within communities with seasoned vigilance and the seasoned commitment of a protector.`,
        "LAREA": (name) => `Shaping dreams into homes in Late Adulthood, ${name}, a Real Estate Agent, architects spaces where stories and legacies unfold with the seasoned wisdom of a seasoned architect.`,
        "LASCI": (name) => `Exploring the scientific wonders of Late Adulthood, ${name}, a Scientist, delves into the mysteries of existence with the seasoned curiosity of a seasoned explorer.`,
        "LATCH": (name) => `Guiding young minds in the Late Adult stages of wisdom, ${name}, a Teacher, imparts knowledge and cultivates wisdom with seasoned grace and the seasoned wisdom of a seasoned mentor.`,
        "LAVET": (name) => `Nurturing harmony in Late Adulthood, ${name}, a Veterinarian, embraces the role of caretaker for the interconnected web of life with seasoned compassion and the seasoned empathy of a seasoned healer.`,
        "LAWRT": (name) => `Weaving narratives with Late Adult words, ${name}, a Writer, crafts tales that echo the sentiments of a life well-lived with the seasoned artistry of a seasoned storyteller.`,
        "LAOTH": (name) => `In the diverse tapestry of Late Adulthood, ${name} celebrates the uniqueness of self, navigating the journey with seasoned wisdom and individuality.`,
    };
    

    const getIntroFromAbbreviation = (combinedAbbreviation: string, formattedName: string): string  => {
        const introFunction = introMapping[combinedAbbreviation];
        return introFunction ? introFunction(formattedName) : "error from intro";
    };

    const convertToAbbreviation = (agehere : string, prof : string): string  => {
        const ageMapping: { [key: string]: string } = {
            "young-adults": "YA",
            "early-adulthood": "EA",
            "mid-adulthood": "MA",
            "late-adulthood": "LA"
        };
    
        const professionMapping: { [key: string]: string } = {
            "accountant": "ACC",
            "actor": "ACT",
            "architect": "ARC",
            "chef": "CHEF",
            "dentist": "DEN",
            "doctor": "DOC",
            "engineer": "ENG",
            "firefighter": "FF",
            "graphic-designer": "GD",
            "hair-stylist": "HS",
            "journalist": "JOUR",
            "lawyer": "LAW",
            "musician": "MUS",
            "nurse": "NUR",
            "photographer": "PHOTO",
            "pilot": "PLT",
            "police-officer": "PO",
            "real-estate-agent": "REA",
            "scientist": "SCI",
            "teacher": "TCH",
            "veterinarian": "VET",
            "writer": "WRT",
            "other": "OTH"
        };
    
        const ageGroup = ageMapping[agehere];
        const profession = professionMapping[prof];
    
        return ageGroup && profession ? `${ageGroup}${profession}` : "Error forming combination";
    };


  if (req.method === 'POST') {
    try {
      const { name } = req.body;    
      const formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
      const age = req.body.ageGroup;
      const profession = req.body.chooseProfession;
        
      const abbreviation = convertToAbbreviation(age,profession); 

     // console.log(abbreviation);

      const intro = getIntroFromAbbreviation(abbreviation,formattedName)  

  //    console.log(intro)  
        
      res.status(200).json({ success: true, message: 'Form submitted successfully', intro });
    } catch (error) {
      console.error('Error processing form submission:', error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
