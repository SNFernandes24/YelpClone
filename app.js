const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static("public"), bodyParser.urlencoded({extended: true}));

let campgrounds = [
    {name: "Salmon Creek", image: "https://images.pexels.com/photos/589841/pexels-photo-589841.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
    {name: "Granite Hill", image: "https://images.pexels.com/photos/1003816/pexels-photo-1003816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
    {name: "Mountain Goat", image: "https://images.pexels.com/photos/547115/pexels-photo-547115.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
    {name: "Salmon Creek", image: "https://images.pexels.com/photos/589841/pexels-photo-589841.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
    {name: "Granite Hill", image: "https://images.pexels.com/photos/1003816/pexels-photo-1003816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
    {name: "Mountain Goat", image: "https://images.pexels.com/photos/547115/pexels-photo-547115.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
    {name: "Salmon Creek", image: "https://images.pexels.com/photos/589841/pexels-photo-589841.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
    {name: "Granite Hill", image: "https://images.pexels.com/photos/1003816/pexels-photo-1003816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
    {name: "Mountain Goat", image: "https://images.pexels.com/photos/547115/pexels-photo-547115.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}
];

app.get("/", (req, res) => {
    res.render("landing");
});

app.get("/campgrounds", (req, res) => {
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", (req, res) => {
    //get data from form
    const name = req.body.name;
    const image = req.body.image;
    const newCamp = {name: name, image: image};

    campgrounds.push(newCamp);

    //redirect to camp page

    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", (req, res) => {
    res.render("new");
});

app.listen(8000, () => {
    console.log("Server Started");
});