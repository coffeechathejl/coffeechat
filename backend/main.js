const http = require("http");
const express = require("express");
const { spawn } = require("child_process");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const hostname = "127.0.0.1";
const port = 3000;
const uri = process.env.MONGO_URI;

const app = express();

async function insertDocument(documentToInsert) {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
      await client.connect();
      const database = client.db("users");
      const collection = database.collection("students");
      const result = await collection.insertOne(documentToInsert);

      console.log(`Document inserted with _id: ${result.insertedId}`);
      return result;
  } finally {
      await client.close();
  }
}

app.get("/", (req, res) => {
  res.status(200).send();
});

app.get("/createProfileEntry/:name", async (req, res) => {
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
  pythonProcess.on("close", async (code) => {
    if (code === 0) {
      // convert responseData to JSON
      responseData = JSON.parse(responseData);

      res.setHeader('Content-Type', 'application/json');

      try {
        const documentToInsert = responseData;

        if (!documentToInsert) {
            return res.status(400).json({ error: 'Bad Request. Missing document data.' });
        }

        const result = await insertDocument(documentToInsert);

        res.status(201).json({ message: 'Document inserted successfully', insertedId: result.insertedId });

    } catch (error) {
        console.error('Error inserting document:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
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
