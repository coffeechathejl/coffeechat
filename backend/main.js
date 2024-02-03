const http = require("http");
const express = require("express");
const { spawn } = require("child_process");

const hostname = "127.0.0.1";
const port = 3000;

const app = express();

app.get("/", (req, res) => {
  res.status(200).send();
});

app.get("/createProfileEntry/:name", (req, res) => {
  const name = req.params.name;

  // Spawn the Python script with arguments
  // process.env.PYTHONPATH = "/opt/local/bin/python3"
  const pythonProcess = spawn(process.env.HOMEBREW_PREFIX + '/bin/python3', ["profile_api.py", name]);

  let responseData = '';

  // Handle Python script output
  pythonProcess.stdout.on("data", (data) => {
    responseData += data;
  });

  // Handle Python script completion
  pythonProcess.on("close", (code) => {
    if (code === 0) {
      // convert responseData to JSON
      responseData = JSON.parse(responseData);

      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(responseData));
    } else {
      res.status(500).send(`Error executing Python script. Exit code: ${code}`);
    }
  });

  // Handle errors
  pythonProcess.stderr.on("data", (data) => {
    res.status(500).send(`Error: ${data}`);
  });
});


const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
