// pages/api/submitForm.ts

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { name, ageGroup, cultureReligion, familyStatus, chooseCountry, chooseProfession, gender } = req.body;

      // Your logic to handle form data
      console.log('Form submitted:', { name, ageGroup, cultureReligion, familyStatus, chooseCountry, chooseProfession,gender });

      // Add your additional logic here, such as storing the form data in a database

      res.status(200).json({ success: true, message: 'Form submitted successfully' });
    } catch (error) {
      console.error('Error processing form submission:', error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
