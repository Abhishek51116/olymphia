'use client'
import React from 'react';
import { Skeleton } from "@/components/ui/skeleton"
import { useState } from 'react';
import Loading from '@/components/Loading';
import Intro from '@/components/Intro';
import Image1 from '@/components/Image1'
import { Separator } from "@/components/ui/separator"
import InfoForm from '@/components/InfoForm';
import * as z from "zod";
//const formSchema is messy, just minimize it from the left side arrow
const formSchema = z.object({
  name: z
    .string()
    .min(1, "Name must be at least 1 character")
    .max(20, "Name must be at most 20 characters")
    .refine((value) => !/\s/.test(value), {
      message: "Name must not contain spaces",
    }),
   gender : z
  .enum(["male", "female", "other"])
  .refine(() => true, { message: "Invalid response for gender" }),
  ageGroup: z
    .enum(["young-adults", "early-adulthood", "mid-adulthood", "late-adulthood"])
    .refine(() => true, { message: "Invalid age group" }),
  cultureReligion: z.string(),
  familyStatus: z
    .enum(["married", "unmarried", "divorced", "widowed", "single-parent"])
    .refine(() => true, { message: "Invalid family status" }),
 planningToGetMarried: z
    .enum(["Yes", "No", "NotSure"])
    .refine(() => true, { message: "Invalid response for planning to get married" }),
    chooseProfession: z
    .enum(["accountant", "actor", "architect", "chef", "doctor","dentist", "engineer", "firefighter", "graphic-designer", "hair-stylist", "journalist", "lawyer", "musician", "nurse", "photographer", "pilot", "police-officer", "real-estate-agent", "scientist", "teacher", "veterinarian", "writer", "other"])
    .refine(() => true, { message: "Invalid profession" }),  
chooseCountry: z
    .enum([
      "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", 
      "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", 
      "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", 
      "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", 
      "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", 
      "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", 
      "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", 
      "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", 
      "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", 
      "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", 
      "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", 
      "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands", 
      "Faroe Islands", "Fiji", "Finland", "France", "France, Metropolitan", "French Guiana", 
      "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", 
      "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", 
      "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", 
      "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", 
      "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", 
      "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", 
      "Kiribati", "Democratic People's Republic of Korea", "Korea", "Kuwait", 
      "Kyrgyzstan", "Lao People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", 
      "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", 
      "Macau", "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", 
      "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", 
      "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", 
      "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", 
      "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", 
      "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", 
      "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", 
      "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", 
      "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", 
      "Rwanda", "Saint Kitts and Nevis", "Saint LUCIA", "Saint Vincent and the Grenadines", 
      "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", 
      "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", 
      "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", 
      "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", 
      "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", 
      "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", 
      "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", 
      "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", 
      "United Arab Emirates", "United Kingdom", "United States", 
      "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", 
      "Viet Nam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", 
      "Western Sahara", "Yemen", "Serbia", "Zambia", "Zimbabwe"
    ]
    ).refine(() => true, { message: "Invalid Country" }),

});

const NewPage = () => {
  const [book,setBook] = useState<string>("form"); //form , loading
  const [formData, setFormData] = useState<z.infer<typeof formSchema> | null>(null);
  
  return (
    
    <div className="container flex flex-col flex-wrap justify-evenly mx-auto mt-3 px-2 ">
      <Separator />
      <div className='intro flex justify-evenly backdrop-blur-sm bg-white/30'>
      <section className='olymphia_image container hidden lg:block '><Image1/></section>
        <section className='intro_to_olymphia container'><Intro/></section>
        </div>
      <Separator />

      <div className='demo flex-col justify-evenly lg:flex-row sm:flex-col md:flex-col mt-3 backdrop-blur-sm bg-white/30 h-auto'>     
        {book =="form" && <section className='form container'><h1 className='mx-auto mt-3 mb-3 font-bold justify-center lg:ml-24'>Enter Your Details for a Demo</h1><InfoForm book={book} setBook={setBook} formData={formData} setFormData={setFormData}/></section>}
        { book=="loading" && <Loading book={book} setBook={setBook} formData={formData} setFormData={setFormData}/>}
      </div>
    </div>
    
  );
};

export default NewPage;
