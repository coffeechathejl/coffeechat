const http = require("http");
const express = require("express");
const { spawn } = require("child_process");

const hostname = "127.0.0.1";
const port = 3000;

const app = express();

app.get("/", (req, res) => {
  res.status(200).send();
});

app.get("/getProfile/:name", (req, res) => {
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
      console.log(`Python script completed successfully`);
      res.status(200).send(`Python script output: ${responseData}`);
    } else {
      console.error(`Error executing Python script. Exit code: ${code}`);
      res.status(500).send(`Error executing Python script. Exit code: ${code}`);
    }
  });

  // Handle errors
  pythonProcess.stderr.on("data", (data) => {
    console.log(`Python script error: ${data}`);
    res.status(500).send(`Python script error: ${data}`);
  });
});


const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
