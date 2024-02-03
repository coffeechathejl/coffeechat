from linkedin_api import Linkedin
from dotenv import dotenv_values
import sys

def getProfileData(profileName: str) -> dict:
    # Load environment variables
    config = dotenv_values(".env")

    # Authenticate using any Linkedin account credentials
    api = Linkedin(config['EMAIL'], config['PASSWORD'])

    # GET a profile
    profile = api.get_profile(profileName)

    return profile

# get profile name from cli
try:
    # Your existing code for getting profile data
    profileName = sys.argv[1]
    print(getProfileData(profileName))
    sys.stdout.flush()

except Exception as e:
    print(f"Error: {e}")