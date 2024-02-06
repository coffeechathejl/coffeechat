# mocha mentor ☕️

## Inspiration 💭
Our app idea brewed from a common shared stressor of networking challenges. Recognizing the lack of available mentorship and struggle to form connections effortlessly, we envisioned a platform that seamlessly paired mentors and students to foster meaningful connections.

## What it does 🚀
mocha mentor is a web application that seamlessly pairs students and mentors based on their LinkedIn profiles. It analyzes user LinkedIn profiles, utilizes our dynamic backend structure and Machine Learning algorithm for accurate matching, then pairs a mentor and student together.

## How we built it 🛠️
mocha mentor leverages a robust tech stack to enhance the mentor-student connection. MongoDB stores and manages profiles, while an Express.js server is ran on the backend. This server also executes Python scripts which employ pandas for data manipulation and scikit-learn for our ML cosine similarity-based matching algorithm. It also utilizes the LinkedIn API for profile extraction. Our frontend was entirely built with React.js.

## Challenges we ran into 🧗
The hackathon's constrained timeframe led us to prioritize essential features. Additionally, other challenges we ran into were handling asynchronous events, errors integrating the backend and frontend, working with limited documentation, and running Python scripts efficiently in JavaScript.

## Accomplishments that we're proud of 🏆
We are proud of developing a complex technical project with a diverse tech stack. Our backend was well designed and saved a lot of time when integrating with the frontend. With this year's theme of "Unlocking the Future with AI", we wanted to go beyond using a GPT backend, therefore, we utilized machine learning to develop our matching algorithm.

## What we learned 📚
- The importance of good teamwork! 
- How to integrate Python scripts in our Express server 
- Cosine similarities and more about AI/ML

## What's next for mocha mentor 🌱
- Conduct outreach and incorporate community feedback
- Further develop UI
- Expand by adding additional features
- Improve efficiency in algorithms

## How to run 🏃
1. Follow the readme.MD in backend and install required dependancies (cors, express, linkedInAPI (python 3rd party one). Note: No package.json so you'll have to keep testing the run until it works).
2. Follow the readme.MD in frontend and install required dependancies. Vite and React required.

   Backend execution:
   cd backend
   node main.js

   Frontend execution:
   cd frontend/my-ts-app
   npm run dev
