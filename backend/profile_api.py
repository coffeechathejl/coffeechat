from linkedin_api import Linkedin
from dotenv import dotenv_values
import sys
import json

def remove_key_recursive(data, key_to_remove):
    if isinstance(data, dict):
        for key in list(data.keys()):
            if key_to_remove.lower() in key.lower():
                del data[key]
            else:
                remove_key_recursive(data[key], key_to_remove)
    elif isinstance(data, list):
        for item in data:
            remove_key_recursive(item, key_to_remove)

def getProfileData(profileName: str):
    # Load environment variables
    config = dotenv_values(".env")

    # Authenticate using any Linkedin account credentials
    api = Linkedin(config['EMAIL'], config['PASSWORD'])

    # GET a profile
    profile = api.get_profile(profileName)

    # Remove unwanted keys
    unwanted_keys = ["$anti_abuse_metadata", "urn", "region", "img_100_100", "img_200_200", "img_400_400", "img_549_549", "displayPictureUrl"]
    for key in unwanted_keys:
        remove_key_recursive(profile, key)

    return json.dumps(profile)

# get profile name from cli
try:
    # Your existing code for getting profile data
    profileName = sys.argv[1]
    print(getProfileData(profileName))
    sys.stdout.flush()

except Exception as e:
    print(f"Error: {e}")