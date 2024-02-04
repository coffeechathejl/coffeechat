import { LogoutOptions, useAuth0 } from '@auth0/auth0-react';

const UserProfile = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    // Redirect or handle the case where the user is not authenticated
    return <div>Please log in to view this page.</div>;
  }

console.log(user);
return (
    <div>
        <h2>Profile</h2>
        <button onClick={() => logout({ returnTo: window.location.origin } as LogoutOptions)}>Log Out</button>

        {user && (
            <>
              <p>{user.name}</p>
            </>
        )}
    </div>
);
};

export default UserProfile;