// controllers/listing.js

const Listing = require("../models/listing.js");
const mbxGeocoding= require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken});



module.exports.index = async (req, res) => {
  try {
    let filter = {}; // Start with an empty filter object
    let { q, category } = req.query; // Get search and category queries

    // 1. Check for a Category filter
    if (category) {
      filter.category = category;
    }

    // 2. Check for a Search query
    if (q) {
      // Add search logic to the filter
      // $or: finds documents that match ANY of these conditions
      filter.$or = [
        { title: { $regex: q, $options: "i" } },    // "i" = case-insensitive
        { location: { $regex: q, $options: "i" } },
        { country: { $regex: q, $options: "i" } }
      ];
    }

    // 3. Find all listings that match the combined filter
    const allListings = await Listing.find(filter);

    // 4. Handle no results
    if (allListings.length === 0 && (q || category)) {
      let searchTerm = q || category;
      req.flash("error", `No listings found matching "${searchTerm}".`);
    }

    // Pass 'q' to the template so it stays in the search bar
    res.render("./listings/index.ejs", { allListings, q }); 

  } catch (e) {
    console.log(e);
    req.flash("error", "Something went wrong while fetching listings.");
    res.redirect("/listings");
  }
};



module.exports.renderNewForm = (req,res) => {
    res.render("./listings/new.ejs");
};

module.exports.showListing = async (req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id).populate({path:"reviews",populate:{path:"author"},}).populate("owner");
    if(!listing){
        req.flash("error","the listing you are trying to access does not exist!");
        return res.redirect("/listings");
    }
    res.render("./listings/show.ejs",{listing});
};

module.exports.createListing = async(req,res,next) =>{
    let response = await geocodingClient.forwardGeocode({
        query: req.body.listing.location,
        limit: 1
    })
    .send()
    let url = req.file.path;
    let filename = req.file.filename;
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = {url,filename};
    newListing.geometry = response.body.features[0].geometry;
    await newListing.save();
    req.flash("success","New listing created!");
    res.redirect("/listings");
};

module.exports.renderEditForm = async (req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    // console.log(req.body.listing.price);
    // console.log(Array.isArray(req.body.listing.price));
    if(!listing){
        req.flash("error","the listing you are trying to access does not exist!");
        return res.redirect("/listings");
    }
    //to reduce the quality of listingImage for preview image in edit page 
    let originalImageUrl=listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload","/upload/h_200,w_250");
    //console.log("Original Image URL:", listing.image.url);
    //console.log("Transformed Preview URL:", originalImageUrl);

    res.render("./listings/edit.ejs",{listing,originalImageUrl});
};

module.exports.updateListing = async (req,res) => {
    let {id} = req.params;
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing});
    if(typeof req.file !== "undefined"){
        let url = req.file.path;
        let filename = req.file.filename;
        listing.image = {url,filename};
        await listing.save();
    }

    req.flash("success","Listing updated!");
    res.redirect(`/listings/${id}`);
};

module.exports.destroyListing =  async (req,res) => {
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success","Listing deletd!");
    res.redirect("/listings");
};


