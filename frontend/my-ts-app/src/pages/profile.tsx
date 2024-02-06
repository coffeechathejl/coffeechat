/* eslint-disable @typescript-eslint/no-explicit-any */
import { LogoutOptions, useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BeatLoader } from 'react-spinners'; // Import the desired loader from react-spinners
import './mentorprofile.css';

const UserProfile = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();
  const [profileData, setProfileData] = useState(null);
  const imageURL = 'https://media.licdn.com/dms/image/D4D03AQExcCXVmir3pQ/profile-displayphoto-shrink_800_800/0/1683069783248?e=1712793600&v=beta&t=rWtzjoITgotP5mACj5H8KrYkFSAjTo_rO-an8C1YwP0'
  const image2URL = "https://media.licdn.com/dms/image/D5603AQEQZLASDGSdxw/profile-displayphoto-shrink_800_800/0/1684775922600?e=1712793600&v=beta&t=npKSnrmGGjKz8IKkIS6_bOpCui1Jp3cYZN1TPQlI3YU"
  const jobURL = 'https://media.licdn.com/dms/image/C560BAQGI_GYoDekJsQ/company-logo_100_100/0/1680024442682/cohere_ai_logo?e=1715212800&v=beta&t=UvFL6pXUkoj90hipMx_HMhdtbSKEKOsWo5-Y_OZoNrU'

    useEffect(() => {
      // const handleCreateProfile = () => {
      //   const formData = {
      //     "id": "hashir-sami",
      //     "loginId": user?.sub,
      //     "entryType": "student",
      //     "personalInfo": {
      //         "pronouns": "he/him",
      //         "gender": "male",
      //         "genderMatch": null,
      //         "areaOfInterest": "Computer Science"
      //     },
      //     "contactInfo": {
      //         "email": "yoloswag22@gmail.com",
      //         "phoneNumber": "4168400891",
      //         "github": "hashir103"
      //     }
      //   };

      //   axios.post("http://127.0.0.1:3000/createProfileEntry", formData)
      //     .then(response => {
      //       // Update state with the response data
      //       setProfileData(response.data);
      //     })
      //     .catch(error => {
      //       // Handle the error response here
      //       console.error("Error creating profile entry:", error);
      //     });
      // };

      const handleGetProfile = () => {
        axios.get("http://127.0.0.1:3000/getProfileEntry", {
          params: {
            id: user.sub
          }
        })
        .then(response => {
          const output = response.data;
          if (output === "") {
          // If profile entry doesn't exist, create it
            const uid = user?.sub;
            window.location.href = `/form?variable=${uid}`;
            // window.location.href = `/form`;
            // handleCreateProfile();
          } else {
            // Update state with the existing profile data
            setProfileData(output);
          }
        })
        .catch(error => {
          // Handle the error response here
          console.error("Error getting profile entry:", error);
        });
      };

      if (!isLoading && isAuthenticated) {
        handleGetProfile();
      }
    }, [user, isAuthenticated, isLoading]);

    if (isLoading) {
      return <div id="loading">
      <div>Loading LinkedIn Information</div>
      <BeatLoader color="#ffffff" loading={isLoading} size={15} />
      </div>
    }

    if (!isAuthenticated) {
      // redirect to home page if not authenticated
      return null;
    }

    return (
      <>
        {/* Render individual properties dynamically */}
        {profileData ? (
          <>
            <div className="container">
            <div className="column1 column">
                <div className="personal-profile">
                    <div className='left-panel'>
                    <button id="logOutBtn" onClick={() => logout({ returnTo: window.location.origin } as LogoutOptions)}>Log Out</button>
                    <div className="profile-picture">
                        <img src={imageURL} alt="LinkedIn Profile" />
                    </div>
                    <div className="personal-profile-text">
                        <h2>Hashir Sami</h2>
                        <h3>{JSON.stringify(profileData["headline"])}</h3>
                        <br />
                        <h2>My Contact Info</h2>
                        <h3>Email: hashirsami@hotmail.ca</h3>
                        <h3>Phone #: 6473082145</h3>
                        <h3>Github: hashir103</h3>
                    </div>
                    </div>
                </div>
            </div>
            <div className="column2 column">
                <div className='mentor-info'>
                    <div mentor-header>
                    <div className="centered-div" style={{ textAlign: 'center', marginBottom: '1em', borderBottom: '1px solid black' }}>
                        <h1>Your Mocha Mentor</h1>
                    </div>
                    </div>
                    <div className='mentor-content'>
                        <div className='mentor-content-image'>
                            <img src={image2URL} alt="LinkedIn Profile" />
                        </div>
                        <div className='mentor-content-text'>
                            <h3 style={{color: '#007d0a', fontWeight: 'bold'}}>STRONG MATCH</h3>
                            <h2 style={{ fontWeight: 'bold', fontSize: '22px' }}>Jasmine van Leeuwen</h2>
                            <h3><i>Incoming SWE Intern @ Twitch | Computer Science @ Queen's University</i></h3>
                            <h3 style={{ fontWeight: 'normal' }}>(she/her)</h3>
                            <h3 style={{ fontWeight: 'normal' }}>+1 647 619 0260</h3>
                            <h3 style={{ fontWeight: 'normal' }}>jasvl2002@gmail.com</h3>
                        </div>
                    </div>
                </div>
                <div className='mentor-experience'>
                    <div className='mentor-experience-content'>
                        <h1 style={{ marginTop: '0.5em'}}>Experience</h1>
                        <div className='experience-info'>
                            <div className='job-picture'>
                                <img src="https://media.licdn.com/dms/image/C4E0BAQE7P2b1VHr6ig/company-logo_100_100/0/1651082685160/queens_university_logo?e=1715212800&v=beta&t=83WBXp2W_BD7xH9JUUQGg5dLPMn9k0ekGpuVUFa2gy0" alt="Job image"></img>
                            </div>
                            <div className='job-info'>
                               <h4>IT Support Staff</h4>
                                <h4> Queen's University · Contract Part-time </h4>
                                <h4> Sep 2023 - Present </h4>
                            </div>
                        </div>
                        <div className='experience-info'>
                            <div className='job-picture'>
                                <img src={jobURL} alt="Job image"></img>
                            </div>
                            <div className='job-info'>
                            <h4>Data Quality Specialist</h4>
                                <h4>Cohere</h4>
                                <h4>May 2023 - Nov 2023 </h4>
                            </div>
                        </div>
                        <div className='experience-info'>
                            <div className='job-picture'>
                                <img src="https://media.licdn.com/dms/image/C4D0BAQFxeTwy0iMHjw/company-logo_100_100/0/1631301911956?e=1715212800&v=beta&t=TkEe2FJMbzVGYHiPmEY-HdF_AGcPXdz9fDt3DUQgzoY" alt="Job image"></img>
                            </div>
                            <div className='job-info'>
                            <h4>Mayor's Innovation Challenge Intern </h4>
                                <h4> City of Kingston</h4>
                                <h4> May 2023 - Aug 2023 </h4>
                            </div>
                        </div>
                        <h1>Education</h1>
                        <div className='experience-info'>
                            <div className='job-picture'>
                                <img src="https://media.licdn.com/dms/image/C4E0BAQE7P2b1VHr6ig/company-logo_100_100/0/1651082685160/queens_university_logo?e=1715212800&v=beta&t=83WBXp2W_BD7xH9JUUQGg5dLPMn9k0ekGpuVUFa2gy0" alt="Job image"></img>
                            </div>
                            <div className='job-info'>
                                <h4>Queen’s University</h4>
                                <h4>Bachelor of Computing</h4>
                                <h4>Sep 2021 - Jun 2025</h4>
                            </div>
                        </div>




                    </div>
                </div>



            </div>
        </div>
           </> 
        ) : (
          <div id="loading">
          <div>Getting Profile Data</div>
          <BeatLoader color="#ffffff" loading={!profileData} size={15} />
          </div>
        )}
      </>
    );
  }

  export default UserProfile;