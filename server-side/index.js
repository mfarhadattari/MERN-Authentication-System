const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;

app.use(cors());

// Create Cli
const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    client.connect();

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Successfully connected to MongoDB!");
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("MERN Authentication System Server is Running!");
});

app.listen(port, () => {
  console.log(`MERN Authentication System is running on ${port}`);
});
