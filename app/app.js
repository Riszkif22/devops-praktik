const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send(`
	<h1>Hello DevOps!</h1>
	<h2>Nama: Riszki</h2>
	<h3>Latihan B</h3>
	<p>Node.js + Docker</p>
   `);
});

app.listen(PORT, () => {
    console.log(`server berjalan di port ${PORT}`);
});
