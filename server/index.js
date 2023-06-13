import express from 'express'
import pg from 'pg'
import dotenv from "dotenv";
import cors from 'cors';

dotenv.config();

const PORT = process.env.PORT;
const db = new pg.Pool({
  connectionString:process.env.DATABASE_URL
});

const app = express();
app.use(cors());
app.use(express.json());




//Get all the information from the DATABASE
app.get("/api/shakes", (req, res) => {
  db.query(`SELECT * FROM shakes`)
  .then((result) => { 
    res.send(result.rows);
  });
});


//Get all the information from the DATABASE by specif Name
app.get("/api/shakes/:name", (req, res) => {
  const name = req.params.name;
  if(!name) {
    res.sendStatus(422);
    return;
  };

  db.query(`SELECT * FROM shakes WHERE name =$1`, [name])
  .then((result) => {
    if(result.rows.length === 0) {
      res.sendStatus(404);
    } else {
    res.send(result.rows[0])
    };
  });
});


//Delete something from the DATABASE
app.delete("/api/shakes/:id", (req,res) => {
  const id = req.params.id;
  if(!id) {
    res.sendStatus(422);
    return;
  };

  db.query("DELETE FROM shakes WHERE id = $1 RETURNING *", [id])
  .then((result) => {
    if(result.rows.length === 0) {
      res.sendStatus(404);
    } else {
      res.send(result.rows[0]);
    };
  });
});


//Create/add a new information
app.post("/api/shakes", (req, res) => {
  const { name, description, type, price, image } = req.body;

  //validation
  if(!name || ! description || !type || !price || !image) {
    res.sendStatus(422);
  };

  db.query("INSERT INTO shakes (name, description, type, price, image) VALUES ($1, $2, $3, $4, $5) RETURNING *",
  [name, description, type, price, image])
  .then((result) => {
    res.status(201).send(result.rows[0]);
  });
});



//Update any information from DATABASE
app.patch("/api/shakes/:id", (req, res) => {
  const { name, description, type, price, image } = req.body;
  const id = req.params.id

  if(!name && !description && !type && !price && !image) {
    res.sendStatus(422);
    return;
  };

  db.query(`UPDATE shakes SET 
    name = COALESCE($1, name),
    description = COALESCE($2, description),
    type = COALESCE($3, type),
    price = COALESCE($4, price),
    image = COALESCE($5, image) 
    WHERE id = $6 RETURNING *`,
    [name, description, type, price, image, id])
    .then((result) => {
      if(result.rows.length === 0) {
        res.sendStatus(404);
      } else {
        res.send(result.rows[0]);
      };
    });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
