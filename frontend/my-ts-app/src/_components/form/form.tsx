import "./form.css"
import { useState } from "react";
import React from "react";
import axios from 'axios';


type FormProps = {};

  export default function Form() {
    const [linkedinUrl, setLinkedinUrl] = useState('');
    const [entryType, setEntryType] = useState<'Student' | 'Mentor'>('Student');
    const [pronouns, setPronouns] = useState<'She/Her' | 'He/Him' | 'They/Them' | 'Ask me about my Pronouns'>('She/Her');
    const [gender, setGender] = useState<'Female Identifying' | 'Male Identifying' | 'Nonbinary' | 'Prefer not to disclose'>('Female Identifying');
    const [genderMatch, setGenderMatch] = useState<'Female Identifying' | 'Male Identifying' | 'Nonbinary' | 'Prefer not to disclose'>('Female Identifying');
    const [areaOfInterest, setAreaOfInterest] = useState<'Computer Science' | 'Engineering' | 'Chemistry' | 'Biology' |'Sociology' |'Political Science'>('Computer Science');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [github, setGithub] = useState('');

    const [profileData] = useState(null);
    

    const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault();

      const urlParams = new URLSearchParams(window.location.search);
      const receivedVariable = urlParams.get('variable');
        const newFormData = {
          "id": linkedinUrl,
          "loginId": receivedVariable,
          "entryType": entryType, // Assuming userType is a state variable
          "personalInfo": {
            "pronouns": pronouns, // Assuming pronouns is a state variable
            "gender": gender, // Assuming gender is a state variable
            "genderMatch": genderMatch, // Assuming genderMatch is a state variable
            "areaOfInterest": areaOfInterest // Assuming areaOfInterest is a state variable
          },
          "contactInfo": {
            "email": email, // Assuming email is a state variable
            "phoneNumber": phoneNumber, // Assuming phoneNumber is a state variable
            "github": github // Assuming github is a state variable
          }
        };
        console.log(newFormData);
  
        try {
          axios.post("http://127.0.0.1:3000/createProfileEntry", newFormData)
            .then(() => {
              // Update state with the response data
              window.location.href = "/profile";
          })
          .catch(error => {
            // Handle the error response here
            console.error("Error creating profile entry:", error);
          });
        } catch (error) {
          console.log(error)
        }
        

    }

    //   console.log('Form data submitted:', {
    //     linkedinUrl,
    //     entryType,
    //     pronouns,
    //     gender,
    //     genderMatch,
    //     areaOfInterest,
    //     email,
    //     phoneNumber,
    //     github,
    //   });
    // };


    return (

      <form onSubmit={handleSubmit}>
      <div className="form-container">
        <label>
          LinkedIn URL:‎ ‎ ‎ ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  
          <input type="text" value={linkedinUrl} onChange={(e) => setLinkedinUrl(e.target.value)} />
        </label>
       

        <label>
          Mentor or Student:‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ 
          <select value={entryType} onChange={(e) => setEntryType(e.target.value as 'Student' | 'Mentor')}>
            <option value="Mentor">Mentor</option>
            <option value="Student">Student</option>
          </select>
        </label>
      

        <label>
          Pronouns:‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  
          <select value={pronouns} onChange={(e) => setPronouns(e.target.value as 'She/Her' | 'He/Him' | 'They/Them' | 'Ask me about my Pronouns')}>
            <option value="She/Her">She/Her</option>
            <option value="He/Him">He/Him</option>
            <option value="They/Them">They/Them</option>
            <option value="Ask me about my Pronouns">Ask me about my Pronouns</option>
          </select>
        </label>

        <label>
          Gender:‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  
          <select value={gender} onChange={(e) => setGender(e.target.value as 'Female Identifying' | 'Male Identifying' | 'Nonbinary' | 'Prefer not to disclose')}>
            <option value="Female Identifying">Female Identifying</option>
            <option value="Male Identifying">Male Identifying</option>
            <option value="Nonbinary">Nonbinary</option>
            <option value="Prefer not to disclose">Prefer not to disclose</option>
         </select>
        </label>

        <label>
          Preferred Gender for Match:‎ 
          <select value={genderMatch} onChange={(e) => setGenderMatch(e.target.value as 'Female Identifying' | 'Male Identifying' | 'Nonbinary' | 'Prefer not to disclose')}>
            <option value="Female Identifying">Female identifying</option>
            <option value="Male Identifying">Male identifying</option>
            <option value="Nonbinary">Nonbinary</option>
            <option value="Prefer not to disclose">Prefer not to disclose</option>
          </select>
        </label>

        <label>
          Area of Interest:‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ 
          <select value={areaOfInterest} onChange={(e) => setAreaOfInterest(e.target.value as 'Computer Science' | 'Engineering' | 'Chemistry' | 'Biology' |'Sociology' |'Political Science')}>
            <option value="Computer Science">Computer Science</option>
            <option value="Engineering">Engineering</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Biology">Biology</option>
            <option value="Sociology">Sociology</option>
            <option value="Political Science">Political Science</option>
          </select>
        </label>

        <label>
          Email:‎ ‎ ‎ ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>

        <label>
          Phone Number:‎ ‎ ‎ ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  
          <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </label>

        <label>
          GitHub:‎ ‎ ‎ ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎  ‎ ‎ ‎ ‎   
          <input type="text" value={github} onChange={(e) => setGithub(e.target.value)} />
        </label>
        <button className="submit-button" type="submit" >let's get started</button>
        </div>
      </form>
    
    )

};
