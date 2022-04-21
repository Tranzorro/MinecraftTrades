const  mongoose = require("mongoose");

// this will contain every item used in the trades.
// this will be referenced within the trader information

const ItemsSchema = new mongoose.Schema({
    itemName:String,
    itemImageUrl:String,

}, {timestamps: true});

const ItemModel = mongoose.model("Item", ItemsSchema);

module.exports = ItemModel;