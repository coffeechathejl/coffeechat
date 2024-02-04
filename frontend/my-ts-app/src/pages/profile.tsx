/* eslint-disable @typescript-eslint/no-explicit-any */
import { LogoutOptions, useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const UserProfile = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();
  const [profileData, setProfileData] = useState(null);

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
            //const uid = user?.sub;
            //window.location.href = `/form?variable=${uid}`;
            window.location.href = `/form`;
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
      return <div>Loading LinkedIn Information...</div>;
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
            <h2>Profile</h2>
            <button onClick={() => logout({ returnTo: window.location.origin } as LogoutOptions)}>Log Out</button><br /><br />
            <h1>{profileData["firstName"]} {profileData["lastName"]}</h1>
            {JSON.stringify(profileData, null, 2)}
           </> 
        ) : (
          <p>Getting profile data..</p>
        )}
      </>
    );
  }

  export default UserProfile;