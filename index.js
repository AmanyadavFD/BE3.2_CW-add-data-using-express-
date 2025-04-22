const express = require("express");

const app = express();
app.use(express.json());

const cars = [{ id: 1, make: "Toyota", model: "Camry", year: 2022 }];

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.post("/cars", (req, res) => {
  const newCars = req.body;
  if (!newCars.make || !newCars.model || !newCars.year) {
    res.status(400).json({ error: "Make , model and year are required" });
  } else {
    cars.push(newCars);
    res.status(201).json({ success: "Car added Sucessfully", car: newCars });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log("Server is running on the port", port);
});
