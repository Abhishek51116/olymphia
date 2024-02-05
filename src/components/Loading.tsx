import React, { useEffect, useRef} from 'react';
import useTypewriter from "react-typewriter-hook"
import { Button } from "@/components/ui/button"
import { Skeleton } from './ui/skeleton';
import { useState } from 'react';
import * as z from "zod";
import debounce from 'debounce';
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
    .enum(["accountant", "actor", "architect", "chef","doctor", "dentist", "engineer", "firefighter", "graphic-designer", "hair-stylist", "journalist", "lawyer", "musician", "nurse", "photographer", "pilot", "police-officer", "real-estate-agent", "scientist", "teacher", "veterinarian", "writer", "other"])
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


interface Props {
  book: string;
  setBook: React.Dispatch<React.SetStateAction<string>>;
  formData: z.infer<typeof formSchema> | null;
  setFormData: React.Dispatch<
    React.SetStateAction<z.infer<typeof formSchema> | null>
  >;
}


const Loading = (props: Props) => {
  console.log("Loading component rendered")

  const [title, setTitle] = useState<string | null>(null);
  const [intro,setIntro] = useState<string | null>(null);
  const [ch1, setCh1] = useState<string | null>(null); //chhapter 1 title
  const [ch1sh,setch1sh] = useState<string | null>(null); // chapter 1 short description
  const [ch2, setCh2] = useState<string | null>(null); //chhapter 1 title
  const [ch2sh,setch2sh] = useState<string | null>(null); // chapter 1 short description
  
  const Loading = useRef(false);
  
  console.log("Loading render")
  console.log(Loading);

  const MagicWriter = ({ text }: { text: string | null }) => {
   
    const typing = useTypewriter(text || '');
    return <h1>{typing}</h1>;
  };
  
  
  useEffect(() => {
    
    if(!Loading.current){
      Loading.current = true;

    const makeTitleRequest = async () => {      
      try {
        // Make your post request here, e.g., using fetch or axios
        const response = await fetch('/api/titleapi', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(props.formData),
        });
        if (response.ok) {
          const responseData = await response.json();
         
          setTitle(responseData.titleresponse);
        } else {
          console.error('Post request failed');
        }
      } catch (error) {
        console.error('Error during post request:', error);
      }
    }

    const makeIntroRequest = async () => {      
      try {
        // Make your post request here, e.g., using fetch or axios
        const response = await fetch('/api/intro', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(props.formData),
        });
        if (response.ok) {
          const responseData = await response.json();
         
          setIntro(responseData.intro);
        } else {
          console.error('Post request failed');
        }
      } catch (error) {
        console.error('Error during post request:', error);
      }
    }
    const makechapter1request = async () =>{
      try {
        // Make your post request here, e.g., using fetch or axios
        const response = await fetch('/api/chapter1', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(props.formData),
        });
        if (response.ok) {
          const responseDataChapter1 = await response.json();
         
          setCh1(responseDataChapter1.heading);
          setch1sh(responseDataChapter1.intro)
        } else {
          console.error('Post request failed');
        }
      } catch (error) {
        console.error('Error during post request:', error);
      }
    };
    const makechapter2request = async () =>{
      try {
        // Make your post request here, e.g., using fetch or axios
        const response = await fetch('/api/chapter2', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(props.formData),
        });
        if (response.ok) {
          const responseDataChapter1 = await response.json();
         
          setCh2(responseDataChapter1.heading);
          setch2sh(responseDataChapter1.intro)
        } else {
          console.error('Post request failed');
        }
      } catch (error) {
        console.error('Error during post request:', error);
      }
    };  
      


    if (props.book == 'loading' && props.formData !=null  ) {
      const delay = 2500;

  setTimeout(() => {
    makeTitleRequest();
    makechapter1request();
    makechapter2request();
    makeIntroRequest();
  }, delay);

      
          }
        }
  }, [props.book, props.formData]);
  
  


  const handleButtonClick = () => {
    props.setFormData(null);
    props.setBook("form");
    setTitle(null)
    setCh1(null)
    setch1sh(null)
    setCh2(null)
    setch2sh(null)
    setIntro(null)
  };


  return (
    <section className="book container flex flex-col pl-4 mt-4 backdrop-blur-xl bg-black/30">
      <div className="title mr-3 flex flex-col mt-3">
        <div className='font-bold'> TITLE:</div>
        <div></div>
        <div className="loadTitle" id="typewriter">
          {title !== null ? (
           <h1> <MagicWriter text={title} /></h1>
          ) : (
            <Skeleton className="h-4 w-[250px] mt-1" />
          )}
        </div>
      </div>

      <div className="intro mr-3 flex flex-col mt-3">
        <div className='font-bold'> INTRO:</div>
        <div className="loadIntro" id="typewriter">
          {intro !== null ? (
           <h1 > <MagicWriter text={intro} /></h1>
          ) : (
            <Skeleton className="h-4 w-[250px] mt-1" />
          )}
        </div>
      </div>
    
      <div className='Chapter1 mr-3 flex flex-col  mt-3'> <div className='font-bold'>Chapter 1:</div>
    <div className='loadChapter1'>
        {ch1 !== null ? (
          <div>
           <MagicWriter text={ch1} />
           <MagicWriter text={ch1sh} />
          </div>
        ) : (<div>
          <Skeleton className="h-4 w-[250px] mt-1" />
          <Skeleton className="h-4 lg:w-[550px] sm:w-[250px]  mt-1" />
          <Skeleton className="h-4 lg:w-[550px] sm:w-[250px]  mt-1" />
          </div>
        )}
      </div></div>

     

      <div className='Chapter1 mr-3 flex flex-col mt-3'> <div className='font-bold'>Chapter 2:</div>
    <div className='loadChapter1'>
        {ch2 !== null ? (
          <div>
           <MagicWriter text={ch2} />
           <MagicWriter text={ch2sh} />
          </div>
        ) : (<div>
          <Skeleton className="h-4 w-[250px] mt-1" />
          <Skeleton className="h-4 lg:w-[550px] sm:w-[250px]  mt-1" />
          <Skeleton className="h-4 lg:w-[550px] sm:w-[250px]  mt-1" />
          </div>
        )}
      </div></div>
      <div className='Chapter1 mr-3 flex flex-col  mt-3'> <div className='font-bold'>Next Chapter:</div>
    <div className='loadChapter1'>
        {ch1 !== null ? (
          <div>
           <MagicWriter text={"......................Coming Soon"} />
           <MagicWriter text={".............................................................."} />
          </div>
        ) : (<div>
          <Skeleton className="h-4 w-[250px] mt-1" />
          <Skeleton className="h-4 lg:w-[550px] sm:w-[250px]  mt-1" />
          <Skeleton className="h-4 lg:w-[550px] sm:w-[250px]  mt-1" />
          </div>
        )}
      </div></div>

     
      
    
<div className='mr-9 mt-12' onClick={handleButtonClick}>
      
        <Button variant="outline">Reset</Button>

      </div>
    
    </section>
  );
};

export default Loading;
