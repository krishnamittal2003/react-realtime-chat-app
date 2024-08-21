const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try{
    const r = await axios.put(
        "https://api.chatengine.io/users/",
        {username: username, secret: username, first_name: username},
        {headers: {"private-key": "391cdca0-9327-423e-8509-fd4f262adbe3"}}
    );
    return res.status(r.status).json(r.data);
  } catch(e){
    if (e.response){
      return res.status(e.response.status).json(e.response.data);
    } else{
      console.error("Error message:", e.message);
      return res.status(500).json({message: "Internal Server Error"});
    }
  }
  
//   return res.json({ username: username, secret: "sha256..." });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});