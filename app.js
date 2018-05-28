const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp");

app.set("view engine", "ejs");
app.use(express.static("public"), bodyParser.urlencoded({extended: true}));

//schema setup
let campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

let Campground = mongoose.model("Campground", campgroundSchema);

app.get("/", (req, res) => {
    res.render("landing");
});

app.get("/campgrounds", (req, res) => {
    //get all campgrounds
    Campground.find({}, (err, allCampgrounds) => {
        if(err){
            console.log(err);
        }
        else {
            res.render("campgrounds", {campgrounds:allCampgrounds});
        }
    });
});

app.post("/campgrounds", (req, res) => {
    //get data from form
    const name = req.body.name;
    const image = req.body.image;
    const desc = req.body.description;
    const newCamp = {name: name, image: image, description: desc};

    Campground.create(newCamp, (err, newlyCreated) => {
        if(err) {
            console.log(err);
        }
        else {
            //redirect to camp page
            res.redirect("/campgrounds");
        }
    });
});

app.get("/campgrounds/new", (req, res) => {
    res.render("new");
});

app.get("/campgrounds/:id", (req, res) => {
    Campground.findById(req.params.id, (err, foundCamp) => {
        if(err) {
            console.log(err);
        }
        else {
            res.render("show", {campground: foundCamp});
        }
    });

    
});

app.listen(8000, () => {
    console.log("Server Started");
});