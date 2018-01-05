const express = require("express");
const morgan = require("morgan");
const client = require("./db");
const postList = require("./views/postList");
const postDetails = require("./views/postDetails");

const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));

const baseQuery = "SELECT posts.*, users.name AS author, counting.upvotes FROM posts INNER JOIN users ON users.id = posts.user_id INNER JOIN (SELECT post_id, COUNT(*) as upvotes FROM upvotes GROUP BY post_id) AS counting ON posts.id = counting.post_id\n";

app.get("/", async (req, res) => {
  try {
    const data = await client.query(baseQuery);
    res.send(postList(data.rows));
  } catch (error) {
    res.status(500).send(`Something went wrong: ${error}`);
  }
});

app.get("/posts/:id", async (req, res) => {
  try {
    const data = await client.query(baseQuery + "WHERE posts.id = $1", [req.params.id]);
    const post = data.rows[0];
    res.send(postDetails(post));
  } catch (error) {
    res.status(500).send(`Something went wrong: ${error}`);
  }
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
