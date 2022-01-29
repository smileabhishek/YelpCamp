const mongoose = require("mongoose");
const cities = require("./cities");
const { places, descriptors } = require("./seedHelpers");
const Campground = require("../models/campground");

// conecting to mogngodb
mongoose.connect("mongodb://localhost:27017/yelp-camp");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];
seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 30) + 10;
    const camp = new Campground({
      author: "61e737a4091907bf96d15595",
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      // image: "https://source.unsplash.com/collection/483251",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum nulla distinctio ut quod rerum, adipisci ex quos officia exercitationem vitae dolore accusamus at recusandae nam, facere inventore fuga rem necessitatibus! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum nulla distinctio ut quod rerum, adipisci ex quos officia exercitationem vitae dolore accusamus at recusandae nam, facere inventore fuga rem necessitatibus!",
      price,
      images: [
        {
          url: "https://res.cloudinary.com/dfyaqdmh8/image/upload/v1643496382/YelpCamp/vrgxn3zeq0epvqbgpelj.jpg",
          filename: "YelpCamp/vrgxn3zeq0epvqbgpelj",
        },
        {
          url: "https://res.cloudinary.com/dfyaqdmh8/image/upload/v1643496386/YelpCamp/hc146wlbgmz8b6p8tpwl.jpg",
          filename: "YelpCamp/hc146wlbgmz8b6p8tpwl",
        },
        {
          url: "https://res.cloudinary.com/dfyaqdmh8/image/upload/v1643496389/YelpCamp/aqmai2tk3uly99k8jomd.jpg",
          filename: "YelpCamp/aqmai2tk3uly99k8jomd",
        },
      ],
    });
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
