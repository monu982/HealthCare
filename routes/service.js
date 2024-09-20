const express = require("express");
const app = express();
const Service = require("../models/service.js");
const wrapAsync = require("../utils/wrapAsync.js");
const methodOverride = require("method-override");
const path = require("path");
const ejsMate = require("ejs-mate");

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");
app.engine("ejs", ejsMate);

app.use(express.static(path.join(__dirname, "../public")));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

// Get all services
app.get(
  "/services",
  wrapAsync(async (req, res) => {
    const services = await Service.find();
    res.render("services/home.ejs", { services });
  })
);

// Show service
app.get(
  "/services/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const service = await Service.findById(id);
    res.render("services/show.ejs", { service });
  })
);

// Edit service
app.get(
  "/services/:id/edit",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const service = await Service.findById(id);
    res.render("services/edit.ejs", { service });
  })
);

// Update service
app.put("/services/:id", async (req, res) => {
  let { id } = req.params;
  const serviceEdit = await Service.findByIdAndUpdate(id, req.body.service);
  res.redirect(`/api/services/${id}`);
});
// delete service
app.delete(
  "/services/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let deletedService = await Service.findByIdAndDelete(id);
    console.log(deletedService);
    res.redirect("/api/services");
  })
);

app.use((err, req, res, next) => {
  let { status = 500, message = "something went wrong!" } = err;
  res.status(status).send(message);
});

module.exports = app;
