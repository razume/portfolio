const express = require("express");
const path = require("path");
const cors = require("cors");
const db = require("./db");
const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/dist", express.static(path.join(__dirname, "dist")));

app.use((req, res, next) => {
  console.log("REQ HEADERS:", req.headers.authentication);
  if (!req.headers.authentication) {
    console.log("*****AUTHENTICATION HEADER NOT FOUND*****");
    return next();
  }
  db.getUserFromToken(req.headers.authentication)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch(next);
});

app.get("/", (req, res, next) =>
  res.sendFile(path.join(__dirname, "index.html"))
);

app.get("/blog", (req, res, next) =>
  res.sendFile(path.join(__dirname, "index.html"))
);

app.get("/projects", (req, res, next) =>
  res.sendFile(path.join(__dirname, "index.html"))
);

app.get("/resume", (req, res, next) =>
  res.sendFile(path.join(__dirname, "index.html"))
);

app.get("/login", (req, res, next) =>
  res.sendFile(path.join(__dirname, "index.html"))
);

app.get("/login", (req, res, next) =>
  res.sendFile(path.join(__dirname, "index.html"))
);

app.get("/api/users", (req, res, next) => {
  db.readUsers()
    .then((users) => res.send(users))
    .catch(next);
});

app.post("/api/auth", (req, res, next) => {
  db.authenticate(req.body)
    .then((token) => res.send({ token }))
    .catch(next);
});

app.get("/api/auth", (req, res, next) => {
  if (!req.user) {
    const err = Error("NOT AUTHENTICATED");
    err.status = 401;
    return next(err);
  }
  res.send(req.user);
});

db.sync()
  .then(() => {
    app.listen(port, () => console.log(`Listening on port ${port}`));
  })
  .catch((ex) => console.log(ex));
