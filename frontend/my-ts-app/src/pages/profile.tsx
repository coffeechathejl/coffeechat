import { LogoutOptions, useAuth0 } from '@auth0/auth0-react';
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
    console.log(user?.sub);
return (
  <>
    <button onClick={() => logout({ returnTo: window.location.origin } as LogoutOptions)}>Log Out</button>
    <button>Find a mentor</button>
  </>
  );
  }

  }

export default UserProfile;

/*
plan: once logged in:

two scenarios: a) user is a new user, b) user is a returning user

scenario a:
- user logs in
- user data is scraped from linkedin and added to the database with his loginId
- user is redirected to the profile page with their data

scenario b:
- user logs in
- user data is fetched from the database using their loginId
- user is redirected to the profile page with their data

*/