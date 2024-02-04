import { LogoutOptions, useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();
  const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    // redirect to home page if not authenticated
    navigate("/");
  }

  else {
      // axios get requests
      axios.get("http://127.0.0.1:3000/getProfileEntry", {
        params: {
          id: user.sub
        }
      })
      .then(response => {
         // Handle the successful response here
         const output = response.data;
         if (output === "") {
           // POST REQUEST HERE
            const formData = {
              "id": "hashir-sami",
              "loginId": "linkedin|XqGnuQXGzV",
              "entryType": "student",
              "personalInfo": {
                  "pronouns": "he/him",
                  "gender": "male",
                  "genderMatch": null,
                  "areaOfInterest": "Computer Science"
              },
              "contactInfo": {
                  "email": "yoloswag22@gmail.com",
                  "phoneNumber": "4168400891",
                  "github": "hashir103"
              }
            }
            axios.post("http://127.0.0.1:3000/createProfileEntry", formData)
              .then(response => {console.log(response.data)});
          }
            else {
          // iterate through response.data to display user data
            console.log(output);
          }
    })
    .catch(error => {
      // Handle the error response here
      console.log(error);
    });
  }

return (
  <>
    <button onClick={() => logout({ returnTo: window.location.origin } as LogoutOptions)}>Log Out</button>
  </>
  );
}

export default UserProfile;