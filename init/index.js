const mongoose = require("mongoose");

main()
    .then(() => {
        console.log("connected to DB");
    })

    .catch((err) =>{
        console.log(err);
    });

async function main() {
  await mongoose.connect(dbUrl);
}

const Listing = require("../models/listing.js");
const initData = require("./data.js");


const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({
        ...obj,
        owner:"69070db8ad5eaf45bc870698",
    }));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();