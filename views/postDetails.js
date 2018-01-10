const timeAgo = require("node-time-ago");
const html = require("html-template-tag");

module.exports = (post) => html`<!DOCTYPE html>
<html>
<head>
  <title>Wizard News</title>
  <link rel="stylesheet" href="/style.css" />
</head>
<body>
  <div class="news-list">
    <header><img src="/logo.png"/>Wizard News</header>
      <div class='news-item'>
      <p>
        <span class="news-position">${post.id}. ▲</span> ${post.title} <small>(by ${
          post.author
        })</small>
      </p>
      <small class="news-info">
        ${post.upvotes} upvotes | ${timeAgo(post.date)}
      </small>
      <p class="news-info">${post.body}</p>
    </div>
  </div>
</body>
</html>`;