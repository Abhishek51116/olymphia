// pages/api/titleapi.ts

import type { NextApiRequest, NextApiResponse } from 'next';
const getRandomTitle = (formattedName :string) => {
  const titles = [
    "Beyond the Horizon: [Your Name]'s Odyssey to Wisdom",
    "Wisdom Unveiled: [Your Name]'s Chronicles of Enlightenment",
    "Olymphia's Gift: The Wisdom Journey of [Your Name]",
    "Embarking on Wisdom: The Epic Saga of [Your Name]",
    "Threads of Insight: [Your Name]'s Woven Tapestry",
    "The Wisdom : [Your Name]'s Path to Enlightenment",
    "Destined for Wisdom: [Your Name]'s Guided Expedition",
    "Whispers of Olymphia: [Your Name]'s Quest for Wisdom",
    "In the Heart of Olymphia: [Your Name]'s Wisdom Expedition",
    "Journey of the Sage: [Your Name]'s Pursuit of Wisdom",
    "Elysian Illumination: [Your Name]'s Path to Enlightenment",
    "Enlightened Essence: [Your Name]'s Odyssey",
    "Wisdom's Embrace: [Your Name] Unveiling the Divine",
    "The Oracle's Call: [Your Name]'s Wisdom Revelation",
    "Atlas of Enlightenment: [Your Name]'s Wisdom Cartography",
    "Pilgrimage to Wisdom: [Your Name]'s Eternal Quest",
    "Celestial Threads: [Your Name]'s Tapestry of Wisdom",
    "The Alchemy of Insight: [Your Name]'s Wisdom Eruption",
    "Enigma of Olymphia: [Your Name]'s Journey to Wisdom",
    "Sculpting Serenity: [Your Name]'s Wisdom Odyssey"
  ];
 // Choose a random title
 const randomIndex = Math.floor(Math.random() * titles.length);
// console.log(randomIndex);
 const randomTitle = titles[randomIndex];

 // Replace the placeholder with the formatted name
 return randomTitle.replace("[Your Name]", formattedName);
};


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { name } = req.body;
    
      const formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    
      const titleresponse = getRandomTitle(formattedName);

     // console.log(req.body);
     // console.log( { titleresponse });

      res.status(200).json({ success: true, message: 'Form submitted successfully', titleresponse });
    } catch (error) {
      console.error('Error processing form submission:', error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
