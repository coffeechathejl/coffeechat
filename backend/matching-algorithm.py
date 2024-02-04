import sys
import json
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity

def compare_profiles(profile1_path, profile2_path):

    # Read the first JSON file
    with open (profile1_path) as f:
        profile1_data = json.load(f)

    # Read the second JSON file
    with open(profile2_path) as f:
        profile2_data = json.load(f)

    # Extract titles and industries from the "experience" section
    profile1_titles = ", ".join([exp.get("title", "") for exp in profile1_data.get("experience", [])])
    profile2_titles = ", ".join([exp.get("title", "") for exp in profile2_data.get("experience", [])])

    profile1_industries = ", ".join([", ".join(exp.get("industries", [])) for exp in profile1_data.get("experience", [])])
    profile2_industries = ", ".join([", ".join(exp.get("industries", [])) for exp in profile2_data.get("experience", [])])

    # Create a DataFrame
    profiles = pd.DataFrame({
        "titles": [profile1_titles, profile2_titles],
        "industries": [profile1_industries, profile2_industries]
    })

    # Combine relevant information into a single text column
    profiles["combined_text"] = profiles["titles"] + " " + profiles["industries"]

    # Use CountVectorizer to convert text into a matrix of token counts
    vectorizer = CountVectorizer().fit_transform(profiles["combined_text"])

    # Calculate cosine similarity between profiles
    cosine_sim = cosine_similarity(vectorizer)

    # Display the similarity matrix
    # print("Cosine Similarity Matrix:")
    # print(cosine_sim[1,0])

    if cosine_sim[1,0] >= 0.1:
        return "Strong Match"
    elif cosine_sim[1,0] > 0.05 and cosine_sim[1,0] < 0.1:
        return "Medium Match"
    else:
        return "Low Match"

# if __name__ == "__main__":
#     profile1_path = "./backend/jsonprofiles/ethanwhitcher.json"
#     profile2_path = "./backend/jsonprofiles/laurenlidhar.json"
#     print(compare_profiles(profile1_path, profile2_path))