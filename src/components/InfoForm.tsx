"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState,useEffect } from "react";
import Loading from "./Loading";
import React from "react";

interface Props {
  book: string;
  setBook: React.Dispatch<React.SetStateAction<string>>;
  formData: z.infer<typeof formSchema> | null;
  setFormData: React.Dispatch<
    React.SetStateAction<z.infer<typeof formSchema> | null>
  >;
}



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

const InfoForm = (props: Props) => {
  console.log('InfoForm component rendered');
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values)
    props.setFormData(values)
    props.setBook("loading");   
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      ageGroup: "young-adults",
      cultureReligion: "hindu",
      familyStatus: "unmarried",
      planningToGetMarried: "NotSure",
      chooseProfession:"actor",
      chooseCountry:"Angola",
      gender:"male"
    },
  });
 

  return (
    <div className="lg:m-10 lg:ml-24 lg:mr-24">    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>FIRST NAME *</FormLabel>
              <FormControl>
                <Input placeholder="First Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
  control={form.control}
  name="gender"
  render={({ field }) => (
    <FormItem>
      <div className="w-full flex items-center justify-between">
        <FormLabel>GENDER:</FormLabel>
        <FormControl>
          <select {...field}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </FormControl>
      </div>
      <FormMessage />
    </FormItem>
  )}
/>

        <FormField
          control={form.control}
          name="ageGroup"
          render={({ field }) => (
            <FormItem>
              <div className="w-full flex items-center justify-between">
              <FormLabel>AGE GROUP :</FormLabel>
              <FormControl>
                <select {...field }>
                  <option value="young-adults">Young Adult 18-25</option>
                  <option value="early-adulthood">Early Adulthood 26-35</option>
                  <option value="mid-adulthood">Mid Adulthood 36-50</option>
                  <option value="late-adulthood">Late Adulthood 50+</option>
                </select>
              </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="familyStatus"
          render={({ field }) => (
            <FormItem>
              <div className="w-full flex items-center justify-between">
              <FormLabel>FAMILY STATUS : <span> </span></FormLabel>
              <FormControl>
                <select {...field} className="ml-6">
                <option value="married">Married</option>
            <option value="unmarried">Unmarried</option>
            <option value="divorced">Divorced</option>
            <option value="widowed">Widowed</option>
            <option value="single-parent">Single Parent</option>
                </select>
              </FormControl>
              <FormMessage />
              </div>
            </FormItem>
          )}
        />

<FormField
  control={form.control}
  name="cultureReligion"
  render={({ field }) => (
    <FormItem>
       <div className="w-full flex items-center justify-between">
      <FormLabel>RELIGION</FormLabel>
      <FormControl>
        <select {...field} className="block p-2 border rounded-md">
          <option value="" disabled>Select a religion</option>
          <option value="hindu">Hindu</option>
          <option value="christian">Christian</option>
          <option value="islam">Islam</option>
          <option value="buddhist">Buddhist</option>
          <option value="jewish">Jewish</option>
          <option value="sikh">Sikh</option>
          <option value="other">Other</option>
          <option value="atheist">Atheist</option>
          <option value="prefer-not-to-say">Prefer not to say</option>
        </select>
      </FormControl>
      </div>
      <FormMessage />
    </FormItem>
  )}
/>

{ <FormField
  control={form.control}
  name="chooseProfession"
  render={({ field }) => (
    <FormItem>
      <div className="w-full flex items-center justify-between">
      <FormLabel>PROFESSION</FormLabel>
      <FormControl>
        <select {...field}>
          <option value="" disabled>Select a profession</option>
          <option value="accountant">Accountant</option>
          <option value="actor">Actor</option>
          <option value="architect">Architect</option>
          <option value="chef">Chef</option>
          <option value="dentist">Dentist</option>
          <option value="doctor">Doctor</option>
          <option value="engineer">Engineer</option>
          <option value="firefighter">Firefighter</option>
          <option value="graphic-designer">Graphic Designer</option>
          <option value="hair-stylist">Hair Stylist</option>
          <option value="journalist">Journalist</option>
          <option value="lawyer">Lawyer</option>
          <option value="musician">Musician</option>
          <option value="nurse">Nurse</option>
          <option value="photographer">Photographer</option>
          <option value="pilot">Pilot</option>
          <option value="police-officer">Police Officer</option>
          <option value="real-estate-agent">Real Estate Agent</option>
          <option value="scientist">Scientist</option>
          <option value="teacher">Teacher</option>
          <option value="veterinarian">Veterinarian</option>
          <option value="writer">Writer</option>
          <option value="other">Other</option>
        </select>
      </FormControl>
      </div>
      <FormMessage />
      
    </FormItem>
  )}
/>}

{/* {<FormField
  control={form.control}
  name="chooseCountry"
  render={({ field }) => (
    <FormItem>
      <div className="flex items-center justify-between">
      <FormLabel>COUNTRY:</FormLabel>
      <FormControl  className="w-20">
        <select {...field}>
          <option value="Afghanistan">Afghanistan</option>
<option value="Albania">Albania</option>
<option value="Algeria">Algeria</option>
<option value="American Samoa">American Samoa</option>
<option value="Andorra">Andorra</option>
<option value="Angola">Angola</option>
<option value="Anguilla">Anguilla</option>
<option value="Antartica">Antarctica</option>
<option value="Antigua and Barbuda">Antigua and Barbuda</option>
<option value="Argentina">Argentina</option>
<option value="Armenia">Armenia</option>
<option value="Aruba">Aruba</option>
<option value="Australia">Australia</option>
<option value="Austria">Austria</option>
<option value="Azerbaijan">Azerbaijan</option>
<option value="Bahamas">Bahamas</option>
<option value="Bahrain">Bahrain</option>
<option value="Bangladesh">Bangladesh</option>
<option value="Barbados">Barbados</option>
<option value="Belarus">Belarus</option>
<option value="Belgium">Belgium</option>
<option value="Belize">Belize</option>
<option value="Benin">Benin</option>
<option value="Bermuda">Bermuda</option>
<option value="Bhutan">Bhutan</option>
<option value="Bolivia">Bolivia</option>
<option value="Bosnia and Herzegowina">Bosnia and Herzegowina</option>
<option value="Botswana">Botswana</option>
<option value="Bouvet Island">Bouvet Island</option>
<option value="Brazil">Brazil</option>
<option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
<option value="Brunei Darussalam">Brunei Darussalam</option>
<option value="Bulgaria">Bulgaria</option>
<option value="Burkina Faso">Burkina Faso</option>
<option value="Burundi">Burundi</option>
<option value="Cambodia">Cambodia</option>
<option value="Cameroon">Cameroon</option>
<option value="Canada">Canada</option>
<option value="Cape Verde">Cape Verde</option>
<option value="Cayman Islands">Cayman Islands</option>
<option value="Central African Republic">Central African Republic</option>
<option value="Chad">Chad</option>
<option value="Chile">Chile</option>
<option value="China">China</option>
<option value="Christmas Island">Christmas Island</option>
<option value="Cocos Islands">Cocos (Keeling) Islands</option>
<option value="Colombia">Colombia</option>
<option value="Comoros">Comoros</option>
<option value="Congo">Congo</option>
<option value="Congo">Congo, the Democratic Republic of the</option>
<option value="Cook Islands">Cook Islands</option>
<option value="Costa Rica">Costa Rica</option>
<option value="Cota D'Ivoire">Cote d&apos;Ivoire</option>
<option value="Croatia">Croatia (Hrvatska)</option>
<option value="Cuba">Cuba</option>
<option value="Cyprus">Cyprus</option>
<option value="Czech Republic">Czech Republic</option>
<option value="Denmark">Denmark</option>
<option value="Djibouti">Djibouti</option>
<option value="Dominica">Dominica</option>
<option value="Dominican Republic">Dominican Republic</option>
<option value="East Timor">East Timor</option>
<option value="Ecuador">Ecuador</option>
<option value="Egypt">Egypt</option>
<option value="El Salvador">El Salvador</option>
<option value="Equatorial Guinea">Equatorial Guinea</option>
<option value="Eritrea">Eritrea</option>
<option value="Estonia">Estonia</option>
<option value="Ethiopia">Ethiopia</option>
<option value="Falkland Islands">Falkland Islands (Malvinas)</option>
<option value="Faroe Islands">Faroe Islands</option>
<option value="Fiji">Fiji</option>
<option value="Finland">Finland</option>
<option value="France">France</option>
<option value="France Metropolitan">France, Metropolitan</option>
<option value="French Guiana">French Guiana</option>
<option value="French Polynesia">French Polynesia</option>
<option value="French Southern Territories">French Southern Territories</option>
<option value="Gabon">Gabon</option>
<option value="Gambia">Gambia</option>
<option value="Georgia">Georgia</option>
<option value="Germany">Germany</option>
<option value="Ghana">Ghana</option>
<option value="Gibraltar">Gibraltar</option>
<option value="Greece">Greece</option>
<option value="Greenland">Greenland</option>
<option value="Grenada">Grenada</option>
<option value="Guadeloupe">Guadeloupe</option>
<option value="Guam">Guam</option>
<option value="Guatemala">Guatemala</option>
<option value="Guinea">Guinea</option>
<option value="Guinea-Bissau">Guinea-Bissau</option>
<option value="Guyana">Guyana</option>
<option value="Haiti">Haiti</option>
<option value="Heard and McDonald Islands">Heard and Mc Donald Islands</option>
<option value="Holy See">Holy See (Vatican City State)</option>
<option value="Honduras">Honduras</option>
<option value="Hong Kong">Hong Kong</option>
<option value="Hungary">Hungary</option>
<option value="Iceland">Iceland</option>
<option value="India">India</option>
<option value="Indonesia">Indonesia</option>
<option value="Iran">Iran (Islamic Republic of)</option>
<option value="Iraq">Iraq</option>
<option value="Ireland">Ireland</option>
<option value="Israel">Israel</option>
<option value="Italy">Italy</option>
<option value="Jamaica">Jamaica</option>
<option value="Japan">Japan</option>
<option value="Jordan">Jordan</option>
<option value="Kazakhstan">Kazakhstan</option>
<option value="Kenya">Kenya</option>
<option value="Kiribati">Kiribati</option>
<option value="Democratic People's Republic of Korea">Korea, Democratic People&apos;s Republic of</option>
<option value="Korea">Korea, Republic of</option>
<option value="Kuwait">Kuwait</option>
<option value="Kyrgyzstan">Kyrgyzstan</option>
<option value="Lao">Lao People&apos;s Democratic Republic</option>
<option value="Latvia">Latvia</option>
<option value="Lebanon" selected>Lebanon</option>
<option value="Lesotho">Lesotho</option>
<option value="Liberia">Liberia</option>
<option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
<option value="Liechtenstein">Liechtenstein</option>
<option value="Lithuania">Lithuania</option>
<option value="Luxembourg">Luxembourg</option>
<option value="Macau">Macau</option>
<option value="Macedonia">Macedonia, The Former Yugoslav Republic of</option>
<option value="Madagascar">Madagascar</option>
<option value="Malawi">Malawi</option>
<option value="Malaysia">Malaysia</option>
<option value="Maldives">Maldives</option>
<option value="Mali">Mali</option>
<option value="Malta">Malta</option>
<option value="Marshall Islands">Marshall Islands</option>
<option value="Martinique">Martinique</option>
<option value="Mauritania">Mauritania</option>
<option value="Mauritius">Mauritius</option>
<option value="Mayotte">Mayotte</option>
<option value="Mexico">Mexico</option>
<option value="Micronesia">Micronesia, Federated States of</option>
<option value="Moldova">Moldova, Republic of</option>
<option value="Monaco">Monaco</option>
<option value="Mongolia">Mongolia</option>
<option value="Montserrat">Montserrat</option>
<option value="Morocco">Morocco</option>
<option value="Mozambique">Mozambique</option>
<option value="Myanmar">Myanmar</option>
<option value="Namibia">Namibia</option>
<option value="Nauru">Nauru</option>
<option value="Nepal">Nepal</option>
<option value="Netherlands">Netherlands</option>
<option value="Netherlands Antilles">Netherlands Antilles</option>
<option value="New Caledonia">New Caledonia</option>
<option value="New Zealand">New Zealand</option>
<option value="Nicaragua">Nicaragua</option>
<option value="Niger">Niger</option>
<option value="Nigeria">Nigeria</option>
<option value="Niue">Niue</option>
<option value="Norfolk Island">Norfolk Island</option>
<option value="Northern Mariana Islands">Northern Mariana Islands</option>
<option value="Norway">Norway</option>
<option value="Oman">Oman</option>
<option value="Pakistan">Pakistan</option>
<option value="Palau">Palau</option>
<option value="Panama">Panama</option>
<option value="Papua New Guinea">Papua New Guinea</option>
<option value="Paraguay">Paraguay</option>
<option value="Peru">Peru</option>
<option value="Philippines">Philippines</option>
<option value="Pitcairn">Pitcairn</option>
<option value="Poland">Poland</option>
<option value="Portugal">Portugal</option>
<option value="Puerto Rico">Puerto Rico</option>
<option value="Qatar">Qatar</option>
<option value="Reunion">Reunion</option>
<option value="Romania">Romania</option>
<option value="Russia">Russian Federation</option>
<option value="Rwanda">Rwanda</option>
<option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option> 
<option value="Saint LUCIA">Saint LUCIA</option>
<option value="Saint Vincent">Saint Vincent and the Grenadines</option>
<option value="Samoa">Samoa</option>
<option value="San Marino">San Marino</option>
<option value="Sao Tome and Principe">Sao Tome and Principe</option> 
<option value="Saudi Arabia">Saudi Arabia</option>
<option value="Senegal">Senegal</option>
<option value="Seychelles">Seychelles</option>
<option value="Sierra">Sierra Leone</option>
<option value="Singapore">Singapore</option>
<option value="Slovakia">Slovakia (Slovak Republic)</option>
<option value="Slovenia">Slovenia</option>
<option value="Solomon Islands">Solomon Islands</option>
<option value="Somalia">Somalia</option>
<option value="South Africa">South Africa</option>
<option value="South Georgia">South Georgia and the South Sandwich Islands</option>
<option value="Span">Spain</option>
<option value="SriLanka">Sri Lanka</option>
<option value="St. Helena">St. Helena</option>
<option value="St. Pierre and Miguelon">St. Pierre and Miquelon</option>
<option value="Sudan">Sudan</option>
<option value="Suriname">Suriname</option>
<option value="Svalbard">Svalbard and Jan Mayen Islands</option>
<option value="Swaziland">Swaziland</option>
<option value="Sweden">Sweden</option>
<option value="Switzerland">Switzerland</option>
<option value="Syria">Syrian Arab Republic</option>
<option value="Taiwan">Taiwan, Province of China</option>
<option value="Tajikistan">Tajikistan</option>
<option value="Tanzania">Tanzania, United Republic of</option>
<option value="Thailand">Thailand</option>
<option value="Togo">Togo</option>
<option value="Tokelau">Tokelau</option>
<option value="Tonga">Tonga</option>
<option value="Trinidad and Tobago">Trinidad and Tobago</option>
<option value="Tunisia">Tunisia</option>
<option value="Turkey">Turkey</option>
<option value="Turkmenistan">Turkmenistan</option>
<option value="Turks and Caicos">Turks and Caicos Islands</option>
<option value="Tuvalu">Tuvalu</option>
<option value="Uganda">Uganda</option>
<option value="Ukraine">Ukraine</option>
<option value="United Arab Emirates">United Arab Emirates</option>
<option value="United Kingdom">United Kingdom</option>
<option value="United States">United States</option>
<option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
<option value="Uruguay">Uruguay</option>
<option value="Uzbekistan">Uzbekistan</option>
<option value="Vanuatu">Vanuatu</option>
<option value="Venezuela">Venezuela</option>
<option value="Vietnam">Viet Nam</option>
<option value="Virgin Islands (British)">Virgin Islands (British)</option>
<option value="Virgin Islands (U.S)">Virgin Islands (U.S.)</option>
<option value="Wallis and Futana Islands">Wallis and Futuna Islands</option>
<option value="Western Sahara">Western Sahara</option>
<option value="Yemen">Yemen</option>
<option value="Serbia">Serbia</option>
<option value="Zambia">Zambia</option>
<option value="Zimbabwe">Zimbabwe</option>
        </select>
      </FormControl>
      </div>
      <FormMessage />
      
    </FormItem>
  )}
/>} */}


        
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    </div>
  );
  
};


export default InfoForm;
