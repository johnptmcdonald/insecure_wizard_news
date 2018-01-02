const timeAgo = require ("node-time-ago");
const express = require("express");
const app = express();

const news = [
  { id: 1, upvotes: 257, title: "Fianto Duri, the complete tutorial", author: "RubeusH", date: new Date(Date.now() - 15000000) },
  { id: 2, upvotes: 221, title: "Untransfiguration classes to become compulsory at Hogwarts", author: "Baddock", date: new Date(Date.now() - 90000000) },
  { id: 3, upvotes: 198, title: "Cracking the Aurologist Interview ", author: "Hetty", date: new Date(Date.now() - 900000) },
  { id: 4, upvotes: 171, title: "ASK WN: What do you use to digitalize your scrolls?", author: "Alphard", date: new Date(Date.now() - 5000) },
  { id: 5, upvotes: 166, title: "The Pragmatic Dragon Feeder", author: "Baruffio", date: new Date(Date.now() - 10000000) },
  { id: 6, upvotes: 145, title: "The complete quidditch statistics", author: "Hbeery", date: new Date(Date.now() - 5000000) },
  { id: 7, upvotes: 126, title: "Ordinary Wizarding Levels study guide", author: "BathBabb", date: new Date(Date.now() - 600000) },
  { id: 8, upvotes: 114, title: "Is muggle-baiting ever acceptable?", author: "Falco", date: new Date(Date.now() - 60000000) },
  { id: 9, upvotes: 102, title: "Conserving waterplants cheatsheet.", author: "Otto", date: new Date(Date.now() - 3000000) },
  { id: 10, upvotes: 59, title: "Could wizards prevent WW3?", author: "Cuthbert", date: new Date(Date.now() - 6000000) },
  { id: 11, upvotes: 46, title: "Show WN: Wand-Extinguishing Protection", author: "Humphrey22", date: new Date(Date.now() - 50000) },
  { id: 12, upvotes: 30, title: "Do you still use Alarte Ascendare?", author: "Bellatrix1", date: new Date(Date.now() - 6000000) },
  { id: 13, upvotes: 21, title: "Mailing lists WN readers ought to know about?", author: "Dracod", date: new Date(Date.now() - 60000) },
  { id: 14, upvotes: 10, title: "How to tell which spell used on a bug?", author: "Lupin", date: new Date() }
];

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.send(`<!DOCTYPE html>
  <html>
  <head>
    <title>Wizard News</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="news-list">
      <header><img src="logo.png"/>Wizard News</header>
      ${news.map(post => `
      <div class='news-item'>
        <p>
          <span class="news-position">${post.id}. ▲</span> ${post.title} <small>(by ${post.author})</small>
        </p>
        <small class="news-info">
          ${post.upvotes} upvotes | ${timeAgo(post.date)}
        </small>
      </div>`
    ).join("")}
    </div>
  </body>
  </html>`);
})

app.listen(3000, () => {
  console.log("App listening")
})